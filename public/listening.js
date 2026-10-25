const $ = (id) => document.getElementById(id);
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const statusLabels = { correct: '理解正确', partial: '部分理解', missing: '漏掉了', wrong: '理解有误' };

export function createListeningTraining({ Recorder }) {
  const s = { loaded: false, loading: false, tasks: [], task: null, configured: false, attempts: [], busy: false,
    recorder: null, recording: false, timer: null, file: null, recordingUrl: null, result: null,
    segment: 0, passStarted: false, plays: 0, usedSlow: false, submission: null };
  const audio = $('listeningAudio');
  const text = $('listeningTranscript');
  const status = (message) => { $('listeningStatus').textContent = message; };
  async function request(url, options) {
    const response = await fetch(`/api/listening/${url}`, options);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || '听力服务暂时不可用，请重试。');
    return data;
  }
  function updateControls() {
    const locked = s.busy || s.recording;
    $('listeningRecord').disabled = s.busy || !s.task || Boolean(s.result);
    $('listeningRecord').textContent = s.recording ? '停止录音' : '开始录音';
    $('listeningUpload').disabled = locked || Boolean(s.result);
    $('listeningTranscribe').hidden = !s.file || Boolean(s.result);
    $('listeningTranscribe').disabled = locked || !s.configured;
    $('listeningGrade').disabled = locked || !s.configured || !s.task || !text.value.trim() || Boolean(s.result);
    $('listeningRetry').hidden = !s.result;
    $('listeningRetry').disabled = locked;
    $('listeningReplay').disabled = locked || !s.task;
    text.readOnly = locked || Boolean(s.result);
    $('listeningTasks').querySelectorAll('button').forEach((button) => { button.disabled = locked; });
    $('listeningHistory').querySelectorAll('button').forEach((button) => { button.disabled = locked; });
  }
  function setBusy(busy) { s.busy = busy; updateControls(); }
  function clearRecording() {
    if (s.recordingUrl) URL.revokeObjectURL(s.recordingUrl);
    s.recordingUrl = null;
    s.file = null;
    $('listeningRecording').pause();
    $('listeningRecording').removeAttribute('src');
    $('listeningRecording').hidden = true;
    $('listeningTimer').textContent = '';
  }
  function saveRecording(file) {
    clearRecording();
    s.file = file;
    s.recordingUrl = URL.createObjectURL(file);
    $('listeningRecording').src = s.recordingUrl;
    $('listeningRecording').hidden = false;
    s.submission = null;
    text.value = '';
    updateControls();
  }
  function loadSegment(index) {
    s.segment = index;
    audio.src = s.task.segments[index].audioUrl;
    audio.playbackRate = Number($('listeningRate').value);
    $('listeningSegment').textContent = `片段 ${index + 1} / ${s.task.segments.length} · 自动接续`;
  }
  function resetAnswer() {
    text.value = '';
    s.result = null;
    s.submission = null;
    clearRecording();
    $('listeningResult').hidden = true;
    $('listeningResult').replaceChildren();
    $('listeningAttemptMode').textContent = s.attempts.some((a) => a.taskId === s.task?.id) ? '看过解析后练习' : '首次复述';
    status('');
    updateControls();
  }
  function selectTask(task) {
    if (s.busy || s.recording) return;
    audio.pause();
    s.task = task;
    s.plays = 0;
    s.usedSlow = false;
    s.passStarted = false;
    $('listeningRate').value = '1';
    $('listeningTitle').textContent = task.title;
    $('listeningTasks').querySelectorAll('button').forEach((b) => {
      b.classList.toggle('on', b.dataset.task === task.id);
      b.setAttribute('aria-pressed', String(b.dataset.task === task.id));
    });
    const source = task.source;
    $('listeningSource').innerHTML = `<a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.name)}</a><br>${escape(source.attribution)} <a href="${escape(source.licenseUrl)}" target="_blank" rel="noopener noreferrer">${escape(source.license)}</a>`;
    $('listeningPlayCount').textContent = '已听 0 次';
    loadSegment(0);
    resetAnswer();
  }
  function renderResult(attempt) {
    s.result = attempt;
    text.value = attempt.transcript;
    const missed = attempt.facts.filter((f) => f.status !== 'correct');
    $('listeningAttemptMode').textContent = attempt.afterReference ? '看过解析后练习' : '首次复述';
    $('listeningResult').innerHTML = `
      <div class="listening-score-head"><div><h3>3 · 你听懂了哪些</h3><p class="muted tiny">${attempt.afterReference ? '看过解析后练习' : '首次复述'} · 听了 ${attempt.playCount} 次${attempt.usedSlow ? ' · 使用过慢放' : ''}</p></div><div class="listening-score">${attempt.score}<span> / 100</span></div></div>
      <div class="listening-breakdown"><span>主旨 <b>${attempt.breakdown.main}/40</b></span><span>细节 <b>${attempt.breakdown.detail}/40</b></span><span>逻辑 <b>${attempt.breakdown.logic}/20</b></span></div>
      <p>${missed.length ? `有 ${missed.length} 个信息点可以再听一遍。` : '所有信息点都理解正确。'}</p>
      <ul class="listening-facts">${attempt.facts.map((f) => `<li class="listening-fact ${f.status}"><div><span class="listening-fact-status">${statusLabels[f.status]}</span><b>${escape(f.label)}</b><span class="muted tiny">${f.earned}/${f.weight} 分</span></div><p>${escape(f.reason)}</p>${f.evidence ? `<blockquote>你的复述：${escape(f.evidence)}</blockquote>` : ''}${f.status !== 'correct' ? `<button type="button" class="ghost tiny-btn" data-segment="${f.segment}">重听对应片段</button>` : ''}</li>`).join('')}</ul>
      <details class="listening-reference"><summary>查看参考意思与粤语原文</summary><p>${escape(attempt.reference)}</p><div class="muted">${attempt.original.map((line) => `<p>${escape(line)}</p>`).join('')}</div></details>`;
    $('listeningResult').hidden = false;
    updateControls();
  }
  function renderHistory() {
    $('listeningHistory').innerHTML = s.attempts.length ? s.attempts.map((attempt) => `<button type="button" data-attempt="${escape(attempt.id)}" class="listening-history-row"><span>${escape(attempt.taskTitle)}<small>${escape(new Date(attempt.createdAt).toLocaleString('zh-CN'))} · ${attempt.afterReference ? '看过解析后' : '首次复述'}</small></span><b>${attempt.score} 分</b></button>`).join('') : '<p class="muted tiny">完成评分后，记录会保存在这里。</p>';
  }
  async function initialize() {
    if (s.loaded || s.loading) return;
    s.loading = true;
    setBusy(true);
    status('正在加载听力素材……');
    try {
      const [data, history] = await Promise.all([request('tasks'), request('attempts')]);
      s.tasks = data.tasks;
      s.configured = data.configured;
      s.attempts = history.attempts;
      if (!s.tasks.length) throw new Error('还没有可练习的听力素材。');
      $('listeningService').textContent = s.configured ? '只评价内容理解；重复听、慢放和口音都不扣分。' : '语音识别和评分服务尚未启用，当前可以试听素材和录制复述。';
      $('listeningTasks').innerHTML = s.tasks.map((task) => `<button class="listening-task" type="button" data-task="${escape(task.id)}"><b>${escape(task.title)}</b><span>${escape(task.level)} · 真人粤语 · ${task.segments.length} 个连续片段</span></button>`).join('');
      renderHistory();
      s.loaded = true;
      s.busy = false;
      selectTask(s.tasks[0]);
    } catch (error) { status(`${error.message} 切换页面后再打开可重试。`); }
    finally { s.loading = false; setBusy(false); }
  }
  async function transcribe() {
    if (!s.file || s.busy || s.recording || !s.configured) return;
    audio.pause();
    $('listeningRecording').pause();
    setBusy(true);
    status('正在识别普通话复述……');
    try {
      const body = new FormData();
      body.append('audio', s.file, s.file.name || 'retelling.wav');
      const data = await request('transcribe', { method: 'POST', body });
      text.value = data.transcript;
      s.submission = null;
      status('识别完成。请确认文字，纠正识别错字后提交评分。');
    } catch (error) { status(`${error.message} 录音已保留，可重试识别或直接输入复述。`); }
    finally { setBusy(false); }
  }
  async function toggleRecord() {
    if (s.busy || s.result) return;
    if (s.recording) {
      clearInterval(s.timer);
      s.timer = null;
      setBusy(true);
      try {
        const recording = await s.recorder.stop();
        s.recorder = null;
        s.recording = false;
        if (recording.seconds < 0.5) throw new Error('录音太短，请重新录制。');
        saveRecording(recording.blob);
        status(s.configured ? '录音完成，正在准备识别……' : '录音完成。评分服务启用后可以识别，也可以直接输入复述。');
      } catch (error) { status(error.message); }
      finally { s.recording = false; s.recorder = null; setBusy(false); }
      await transcribe();
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) { status('当前浏览器无法录音，请使用 HTTPS 或 localhost，或上传已有录音。'); return; }
    audio.pause();
    $('listeningRecording').pause();
    setBusy(true);
    status('正在打开麦克风……');
    s.recorder = new Recorder();
    try {
      await s.recorder.start();
      clearRecording();
      text.value = '';
      s.submission = null;
      s.recording = true;
      const started = Date.now();
      $('listeningTimer').textContent = '0 秒 / 90 秒';
      s.timer = setInterval(() => {
        const seconds = Math.floor((Date.now() - started) / 1000);
        $('listeningTimer').textContent = `${seconds} 秒 / 90 秒`;
        if (seconds >= 90) toggleRecord();
      }, 250);
      status('正在录音，用普通话讲述你听懂的意思。');
    } catch {
      try { await s.recorder.stop(); } catch {}
      s.recorder = null;
      status('无法打开麦克风，请检查权限，或上传录音、输入文字。');
    } finally { setBusy(false); }
  }
  $('listeningRecord').addEventListener('click', toggleRecord);
  $('listeningTranscribe').addEventListener('click', transcribe);
  $('listeningUpload').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    event.target.value = '';
    if (!file || s.busy || s.recording || s.result) return;
    if (file.size > 6 * 1024 * 1024) { status('请选择不超过 6MB 的录音。'); return; }
    if (!file.type.startsWith('audio/')) { status('请选择音频文件。'); return; }
    saveRecording(file);
    status('录音已载入。');
    await transcribe();
  });
  text.addEventListener('input', () => { s.submission = null; updateControls(); });
  $('listeningGrade').addEventListener('click', async () => {
    if (s.busy || s.recording || s.result || !s.task || !s.configured || !text.value.trim()) return;
    s.submission ||= { taskId: s.task.id, attemptId: crypto.randomUUID(), transcript: text.value.trim(), playCount: s.plays, usedSlow: s.usedSlow };
    setBusy(true);
    status('正在核对主旨、细节和逻辑关系……');
    try {
      const attempt = await request('grade', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(s.submission) });
      s.attempts = [attempt, ...s.attempts.filter((a) => a.id !== attempt.id)].slice(0, 50);
      renderResult(attempt);
      renderHistory();
      status('评分完成。可以重听遗漏片段，再复述一次。');
      $('listeningResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) { status(error.message); }
    finally { setBusy(false); }
  });
  $('listeningRetry').addEventListener('click', () => { resetAnswer(); text.focus(); });
  $('listeningTasks').addEventListener('click', (event) => {
    const button = event.target.closest('[data-task]');
    if (button) selectTask(s.tasks.find((t) => t.id === button.dataset.task));
  });
  $('listeningHistory').addEventListener('click', (event) => {
    if (s.busy || s.recording) return;
    const button = event.target.closest('[data-attempt]');
    const attempt = button && s.attempts.find((a) => a.id === button.dataset.attempt);
    if (!attempt) return;
    selectTask(s.tasks.find((t) => t.id === attempt.taskId));
    renderResult(attempt);
    status('正在查看这次练习的复述和评分。');
  });
  $('listeningResult').addEventListener('click', (event) => {
    const button = event.target.closest('[data-segment]');
    if (!button || s.recording || s.busy) return;
    audio.pause();
    s.passStarted = false;
    loadSegment(Number(button.dataset.segment));
    audio.play().catch(() => status('播放失败，请使用素材来源链接试听。'));
  });
  $('listeningReplay').addEventListener('click', () => {
    if (!s.task || s.recording || s.busy) return;
    audio.pause();
    s.passStarted = false;
    loadSegment(0);
    audio.play().catch(() => status('播放失败，请使用素材来源链接试听。'));
  });
  $('listeningRate').addEventListener('change', () => {
    audio.playbackRate = Number($('listeningRate').value);
    if (!audio.paused && audio.playbackRate < 1) s.usedSlow = true;
  });
  audio.addEventListener('play', () => {
    if (s.recording || s.busy) { audio.pause(); return; }
    $('listeningRecording').pause();
    if (!s.passStarted) { s.plays += 1; s.passStarted = true; }
    if (audio.playbackRate < 1) s.usedSlow = true;
    $('listeningPlayCount').textContent = `已听 ${s.plays} 次`;
  });
  audio.addEventListener('ended', () => {
    if (s.segment + 1 < s.task.segments.length) {
      loadSegment(s.segment + 1);
      audio.play().catch(() => status('请点击播放，继续下一段。'));
    } else { s.passStarted = false; loadSegment(0); }
  });
  audio.addEventListener('error', () => { if (audio.getAttribute('src')) status('素材暂时无法播放，可从来源链接打开原始音频页面。'); });
  $('listeningRecording').addEventListener('play', () => { if (s.recording) $('listeningRecording').pause(); else audio.pause(); });
  window.addEventListener('beforeunload', (event) => { if (s.recording || s.busy) { event.preventDefault(); event.returnValue = ''; } });
  updateControls();
  return {
    activate: initialize,
    deactivate() { audio.pause(); $('listeningRecording').pause(); },
    canLeave() {
      if (s.recording || s.busy) { status('请先结束录音或等待当前处理完成，再切换页面。'); return false; }
      return true;
    },
  };
}
