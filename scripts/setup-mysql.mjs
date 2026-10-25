import fs from 'node:fs';
import path from 'node:path';
import { randomBytes } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import mysql from 'mysql2/promise';

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const envFile = path.join(projectDir, '.env');
try {
  process.loadEnvFile(envFile);
} catch {
  // 首次安装可能还没有 .env。
}

const database = process.env.DB_NAME || 'mcdb';
const appUser = process.env.DB_USER || 'mcapp';
const appPassword = process.env.DB_PASSWORD || randomBytes(24).toString('base64url');
const remoteHost = process.env.DB_REMOTE_HOST?.trim();

for (const [label, value] of [['数据库名', database], ['用户名', appUser]]) {
  if (!/^[a-zA-Z0-9_]+$/.test(value)) throw new Error(`${label}只允许字母、数字和下划线`);
}
if (remoteHost && !/^[a-zA-Z0-9_.:%-]+$/.test(remoteHost)) {
  throw new Error('DB_REMOTE_HOST 包含不安全字符');
}

const admin = await mysql.createConnection({
  user: process.env.MYSQL_ADMIN_USER || 'root',
  password: process.env.MYSQL_ADMIN_PASSWORD || '',
  socketPath: process.env.MYSQL_SOCKET || '/var/run/mysqld/mysqld.sock',
});

try {
  await admin.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci`);
  const accountHosts = new Set(['localhost', '127.0.0.1']);
  if (remoteHost) accountHosts.add(remoteHost);
  for (const host of accountHosts) {
    await admin.query(`CREATE USER IF NOT EXISTS \`${appUser}\`@'${host}' IDENTIFIED BY ?`, [appPassword]);
    await admin.query(`ALTER USER \`${appUser}\`@'${host}' IDENTIFIED BY ?`, [appPassword]);
    await admin.query(`REVOKE ALL PRIVILEGES, GRANT OPTION FROM \`${appUser}\`@'${host}'`);
    await admin.query(
      `GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, INDEX ON \`${database}\`.* TO \`${appUser}\`@'${host}'`,
    );
  }
  await admin.query('FLUSH PRIVILEGES');
} finally {
  await admin.end();
}

let env = '';
try {
  env = fs.readFileSync(envFile, 'utf8');
} catch {
  // 从空配置开始。
}

function setEnv(key, value) {
  const line = `${key}=${value}`;
  const pattern = new RegExp(`^${key}=.*$`, 'm');
  env = pattern.test(env) ? env.replace(pattern, line) : `${env.trimEnd()}\n${line}\n`;
}

setEnv('DB_HOST', '127.0.0.1');
setEnv('DB_PORT', '3306');
setEnv('DB_NAME', database);
setEnv('DB_USER', appUser);
setEnv('DB_PASSWORD', appPassword);
fs.writeFileSync(envFile, env.replace(/^\n+/, ''), { mode: 0o600 });
fs.chmodSync(envFile, 0o600);
const invokingUid = Number(process.env.SUDO_UID);
const invokingGid = Number(process.env.SUDO_GID);
if (Number.isInteger(invokingUid) && invokingUid > 0 && Number.isInteger(invokingGid)) {
  fs.chownSync(envFile, invokingUid, invokingGid);
}

console.log(`MySQL 已配置：${appUser}@127.0.0.1/${database}`);
if (remoteHost) console.log(`远程账号已配置：${appUser}@${remoteHost}/${database}`);
console.log(`连接信息已写入 ${envFile}（密码未输出）`);
