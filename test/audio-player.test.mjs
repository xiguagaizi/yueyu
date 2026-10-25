import assert from 'node:assert/strict';
import test from 'node:test';
import { createAudioPlayer } from '../public/audio-player.js';

class AudioStub extends EventTarget {
  src = '';
  currentTime = 0;
  duration = 20;
  readyState = 0;
  paused = true;
  error = null;
  loads = [];
  plays = 0;
  playResult = () => Promise.resolve();
  emit(type) { this.dispatchEvent(new Event(type)); }
  load() {
    this.loads.push(this.src);
    this.currentTime = 0;
    this.playbackRate = 1;
    this.error = null;
    this.readyState = 0;
    this.paused = true;
  }
  play() { this.plays += 1; this.paused = false; this.emit('play'); return this.playResult(); }
  pause() { this.paused = true; this.emit('pause'); }
  removeAttribute(name) { if (name === 'src') this.src = ''; }
  fail() { this.error = { code: 2 }; this.emit('error'); }
}

function harness(t) {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const audio = new AudioStub();
  const status = {};
  const retryButton = new EventTarget();
  const player = createAudioPlayer(audio, { status, retryButton, getRate: () => 0.6 });
  const clickRetry = () => retryButton.dispatchEvent(new Event('click'));
  t.after(() => player.setSource(''));
  return { audio, status, retryButton, player, clickRetry };
}

test('切课显式加载元数据并保留倍速，无音源时清空播放器', (t) => {
  const { audio, player, retryButton } = harness(t);
  player.setSource('/api/audio/359?collection=original');
  assert.equal(audio.preload, 'metadata');
  assert.equal(audio.loads.length, 1);
  assert.equal(audio.playbackRate, 0.6);
  audio.play();
  player.setSource('/api/audio/360?collection=original');
  assert.equal(audio.paused, true);
  assert.equal(audio.src, '/api/audio/360?collection=original');
  assert.equal(retryButton.hidden, true);
  player.setSource('');
  assert.equal(audio.src, '');
  t.mock.timers.tick(30000);
  assert.equal(audio.loads.length, 3);
});

test('网络失败自动重新请求一次，恢复播放位置；再次失败显示手动重试', (t) => {
  const { audio, player, status, retryButton, clickRetry } = harness(t);
  player.setSource('/api/audio/359?collection=original');
  audio.play();
  audio.currentTime = 4;
  audio.fail();
  assert.match(audio.src, /^\/api\/audio\/359\?collection=original&_audio_retry=\d+$/);
  assert.equal(audio.loads.length, 2);
  assert.equal(audio.plays, 2);
  assert.equal(audio.playbackRate, 0.6);
  audio.emit('loadedmetadata');
  assert.equal(audio.currentTime, 4);
  audio.fail();
  assert.equal(audio.loads.length, 2);
  assert.equal(retryButton.hidden, false);
  assert.match(status.textContent, /音频加载失败/);
  clickRetry();
  assert.equal(audio.loads.length, 3);
  assert.equal(audio.plays, 3);
  audio.emit('playing');
  assert.equal(status.hidden, true);
  assert.equal(retryButton.hidden, true);
});

test('预加载失败只重载不自动发声，超时最终提供重试入口', (t) => {
  const { audio, player, retryButton } = harness(t);
  player.setSource('/api/audio/359');
  t.mock.timers.tick(12000);
  assert.equal(audio.loads.length, 2);
  assert.match(audio.src, /\?_audio_retry=/);
  assert.equal(audio.plays, 0);
  t.mock.timers.tick(12000);
  assert.equal(audio.loads.length, 2);
  assert.equal(retryButton.hidden, false);
});

test('切课后旧播放拒绝和旧加载定时器不会重启上一课', async (t) => {
  const { audio, player, retryButton } = harness(t);
  let reject;
  audio.playResult = () => new Promise((_, fail) => { reject = fail; });
  player.setSource('/api/audio/359');
  player.play();
  player.setSource('/api/audio/360');
  reject(new Error('旧请求失败'));
  await Promise.resolve();
  audio.emit('loadedmetadata');
  t.mock.timers.tick(30000);
  assert.equal(audio.loads.length, 2);
  assert.equal(audio.plays, 1);
  assert.equal(audio.src, '/api/audio/360');
  assert.equal(retryButton.hidden, true);
});

test('浏览器阻止播放时可用点击重试恢复，用户暂停不会触发重试', async (t) => {
  const { audio, player, status, retryButton, clickRetry } = harness(t);
  player.setSource('/api/audio/359');
  audio.playResult = () => Promise.reject(Object.assign(new Error(), { name: 'NotAllowedError' }));
  player.play();
  await Promise.resolve();
  assert.equal(retryButton.hidden, false);
  assert.match(status.textContent, /浏览器暂停/);
  audio.playResult = () => Promise.resolve();
  clickRetry();
  audio.emit('playing');
  assert.equal(retryButton.hidden, true);
  let reject;
  audio.playResult = () => new Promise((_, fail) => { reject = fail; });
  player.play();
  audio.pause();
  reject(Object.assign(new Error(), { name: 'AbortError' }));
  await Promise.resolve();
  t.mock.timers.tick(30000);
  assert.equal(audio.loads.length, 2);
  assert.equal(audio.paused, true);
});

test('播放卡住后重载，正常播放不会被加载超时打断', (t) => {
  const { audio, player } = harness(t);
  player.setSource('/api/audio/359');
  player.play();
  audio.emit('playing');
  t.mock.timers.tick(30000);
  assert.equal(audio.loads.length, 1);
  audio.emit('waiting');
  t.mock.timers.tick(12000);
  assert.equal(audio.loads.length, 2);
  assert.equal(audio.plays, 2);
});
