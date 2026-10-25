// 原生播放器失败后必须 load() 才会重新请求音频；重试次数按音源限制。
export function createAudioPlayer(audio, { status, retryButton, getRate }) {
  let source = '';
  let generation = 0;
  let retries = 0;
  let wantsPlayback = false;
  let timer;
  let resumeAt = 0;

  const clearTimer = () => { clearTimeout(timer); timer = null; };
  const message = (text, canRetry = false) => {
    status.textContent = text;
    status.hidden = !text;
    retryButton.hidden = !canRetry;
  };
  const watch = () => {
    clearTimer();
    timer = setTimeout(() => recover('音频加载超时，请检查网络后重试。'), 12000);
  };

  function play() {
    const current = generation;
    wantsPlayback = true;
    watch();
    audio.play().catch((error) => {
      if (current !== generation) return;
      if (error.name === 'AbortError' && !wantsPlayback) return;
      if (error.name === 'NotAllowedError') {
        wantsPlayback = false;
        clearTimer();
        message('浏览器暂停了播放，请点击重试播放。', true);
      } else {
        recover('音频播放失败，请重试。');
      }
    });
  }

  function load(retry = false) {
    generation += 1;
    clearTimer();
    audio.preload = 'metadata';
    // 绕过可能缓存的失败响应，服务端仍返回同一音频并支持 Range。
    audio.src = retry ? `${source}${source.includes('?') ? '&' : '?'}_audio_retry=${Date.now()}` : source;
    audio.load();
    audio.playbackRate = getRate();
    watch();
  }

  function recover(reason) {
    if (!source) return;
    clearTimer();
    if (retries >= 1) {
      wantsPlayback = false;
      audio.pause();
      message(reason, true);
      return;
    }
    retries += 1;
    resumeAt = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    const shouldPlay = wantsPlayback;
    message('正在重新加载音频…');
    load(true);
    if (shouldPlay) play();
  }

  audio.addEventListener('error', () => {
    // load()/切课取消旧请求时会清空 error，不应重启旧音频。
    if (audio.error) recover('音频加载失败，请检查网络后重试；若仍失败，请切换课文。');
  });
  audio.addEventListener('loadedmetadata', () => {
    if (!source) return;
    clearTimer();
    if (resumeAt > 0) audio.currentTime = Math.min(resumeAt, audio.duration || resumeAt);
    resumeAt = 0;
    message('');
    if (wantsPlayback && audio.readyState < 3) watch();
  });
  audio.addEventListener('play', () => { wantsPlayback = true; watch(); });
  audio.addEventListener('playing', () => { clearTimer(); message(''); });
  audio.addEventListener('timeupdate', () => { if (!audio.paused && audio.readyState >= 3) clearTimer(); });
  audio.addEventListener('waiting', () => { if (wantsPlayback) watch(); });
  audio.addEventListener('pause', () => { wantsPlayback = false; clearTimer(); });
  audio.addEventListener('ended', () => { wantsPlayback = false; clearTimer(); });
  retryButton.addEventListener('click', () => {
    if (!source) return;
    retries = 0;
    resumeAt = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    message('正在重新加载音频…');
    load(true);
    play(); // 保持在点击手势内，满足浏览器自动播放限制。
  });

  return {
    setSource(value) {
      generation += 1; // 先作废旧 play() 的异步结果。
      wantsPlayback = false;
      clearTimer();
      audio.pause();
      source = value || '';
      retries = 0;
      resumeAt = 0;
      message('');
      if (source) load();
      else { audio.removeAttribute('src'); audio.load(); }
    },
    play,
  };
}
