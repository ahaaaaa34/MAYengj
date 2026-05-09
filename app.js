// app.js — STEP 01 時制マスター

const state = {
  queue: [],
  fullQueue: [],
  idx: 0,
  answered: false,
  scores: {},
  wrongIds: [],
  excAllWords: [],
  excUsed: new Set(),
  excAnswer: []
};

/* ── Utility ── */
function $(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo(0, 0);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim();
}

function assembleSentence(q) {
  let s = q.prefix ? q.prefix + ' ' : '';
  s += state.excAnswer.map(x => x.word).join(' ');
  if (q.suffix) s += /^[.,?!]/.test(q.suffix) ? q.suffix : ' ' + q.suffix;
  return s.trim();
}

/* ── Section toggle ── */
document.querySelectorAll('.sec-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('on');
    $('start-btn').disabled = !document.querySelector('.sec-card.on');
  });
});

/* ── Previous score ── */
(function loadPrev() {
  try {
    const d = JSON.parse(localStorage.getItem('tense-score'));
    if (!d) return;
    $('prev-card').style.display = '';
    $('prev-val').textContent = `${d.c}/${d.t} (${d.pct}%)`;
  } catch (_) {}
})();

/* ── Start ── */
$('start-btn').addEventListener('click', () => {
  const q = [];
  document.querySelectorAll('.sec-card.on').forEach(c => {
    const key = c.dataset.sec;
    if (QUIZ_DATA[key]) q.push(...QUIZ_DATA[key]);
  });
  if (!q.length) return;

  state.queue = q;
  state.fullQueue = q;
  state.idx = 0;
  state.answered = false;
  state.wrongIds = [];
  state.scores = {};
  q.forEach(item => {
    if (!state.scores[item.section])
      state.scores[item.section] = { c: 0, t: 0, name: item.sectionName };
  });

  showScreen('screen-quiz');
  renderQ();
});

/* ── Navigation ── */
$('quiz-back').addEventListener('click', () => showScreen('screen-home'));
$('home-btn').addEventListener('click', () => showScreen('screen-home'));

$('retry-btn').addEventListener('click', () => {
  state.queue = [...state.fullQueue];
  state.idx = 0;
  state.answered = false;
  state.wrongIds = [];
  Object.values(state.scores).forEach(s => { s.c = 0; s.t = 0; });
  showScreen('screen-quiz');
  renderQ();
});

$('retry-wrong-btn').addEventListener('click', () => {
  const wrongQ = state.fullQueue.filter(q => state.wrongIds.includes(q.id));
  if (!wrongQ.length) return;
  state.queue = wrongQ;
  state.fullQueue = wrongQ;
  state.idx = 0;
  state.answered = false;
  state.wrongIds = [];
  state.scores = {};
  wrongQ.forEach(item => {
    if (!state.scores[item.section])
      state.scores[item.section] = { c: 0, t: 0, name: item.sectionName };
  });
  showScreen('screen-quiz');
  renderQ();
});

/* ── Render question ── */
function renderQ() {
  const q     = state.queue[state.idx];
  const total = state.queue.length;
  const cur   = state.idx + 1;

  $('prog-txt').textContent  = `${cur} / ${total}`;
  $('prog-fill').style.width = `${(cur / total) * 100}%`;

  const tag = $('q-tag');
  tag.textContent = q.label;
  tag.className   = 'q-tag ' + q.tagClass;
  $('q-src').textContent = q.source ? `〈${q.source}〉` : '';

  $('opts').innerHTML = '';
  $('opts').style.display = '';
  $('exc-zone').style.display = 'none';
  $('fb-card').className = 'fb-card';
  $('next-btn').className = 'next-btn';
  $('q-ja').style.display = 'none';
  state.answered = false;

  if (q.type === 'choice' || q.type === 'exB') {
    renderChoiceQ(q);
  } else {
    renderExCQ(q);
  }
}

/* ── Choice / ExB ── */
function renderChoiceQ(q) {
  let html = q.question.replace(/\(\s*\)/g, '<span class="blank">(　　　)</span>');
  if (q.type === 'exB') {
    html = html.replace(/([①②③④])/g, '<span class="num-part">$1</span>');
  }
  $('q-text').innerHTML = html;

  const NUMS = ['①', '②', '③', '④'];
  const container = $('opts');
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-num">${NUMS[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectOption(i));
    container.appendChild(btn);
  });
}

function selectOption(chosen) {
  if (state.answered) return;
  state.answered = true;

  const q    = state.queue[state.idx];
  const isOK = chosen === q.answer;
  const NUMS = ['①', '②', '③', '④'];

  state.scores[q.section].t++;
  if (isOK) state.scores[q.section].c++;
  else      state.wrongIds.push(q.id);

  const btns = $('opts').querySelectorAll('.opt-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer)    btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });

  // ExB: always show correction + corrected sentence
  const isExB = q.type === 'exB';
  showFeedback({
    isOK,
    headText: isOK
      ? '✓ 正解！'
      : `✗ 不正解　正解: ${NUMS[q.answer]}`,
    fixText:       isExB ? q.correction : null,
    correctedText: isExB ? q.corrected  : null,
    traText:  q.translation ? `[訳] ${q.translation}` : null,
    expText:  q.explanation
  });
}

/* ── ExC ── */
function renderExCQ(q) {
  $('q-text').innerHTML = q.japanese || '語句を並べかえて英文を完成させなさい。';

  if (!q.japanese && q.translation) {
    $('q-ja').textContent   = `[意味] ${q.translation}`;
    $('q-ja').style.display = '';
  }

  $('opts').style.display     = 'none';
  $('exc-zone').style.display = '';

  // Context line
  let ctxHtml = '';
  if (q.prefix) ctxHtml += `${q.prefix} `;
  ctxHtml += '<span class="ctx-blank">（　　　　　　）</span>';
  if (q.suffix) ctxHtml += /^[.,?!]/.test(q.suffix) ? q.suffix : ` ${q.suffix}`;
  $('exc-ctx').innerHTML = ctxHtml;

  // Shuffle and init chip state
  state.excAllWords = shuffle(q.words.map((w, i) => ({ word: w, i })));
  state.excUsed     = new Set();
  state.excAnswer   = [];

  $('check-btn').disabled = true;
  renderExCChips();
}

/* ── ExC chip rendering ── */
function renderExCChips() {
  const buildEl = $('build-area');
  const poolEl  = $('pool-area');
  const hintEl  = $('build-hint');

  // Remove old answer chips (keep hint span)
  [...buildEl.querySelectorAll('.wchip-ans')].forEach(el => el.remove());
  hintEl.style.display = state.excAnswer.length ? 'none' : '';

  // Answer chips with drag support
  state.excAnswer.forEach(({ word, i }, pos) => {
    const btn = makeAnswerChip(word, i, pos);
    buildEl.appendChild(btn);
  });

  // Pool chips
  poolEl.innerHTML = '';
  state.excAllWords
    .filter(({ i }) => !state.excUsed.has(i))
    .forEach(({ word, i }) => {
      const btn = document.createElement('button');
      btn.className   = 'wchip wchip-pool';
      btn.textContent = word;
      btn.addEventListener('click', () => pickWord(i));
      poolEl.appendChild(btn);
    });
}

/* ── Answer chip factory with long-press drag ── */
function makeAnswerChip(word, wordI, pos) {
  const btn = document.createElement('button');
  btn.className       = 'wchip wchip-ans';
  btn.textContent     = word;
  btn.dataset.ansPos  = pos;

  let timer     = null;
  let dragging  = false;
  let ghost     = null;
  let startX, startY, capturedId;

  function cleanup() {
    clearTimeout(timer);
    dragging = false;
    if (ghost) { ghost.remove(); ghost = null; }
    btn.classList.remove('dragging');
  }

  btn.addEventListener('pointerdown', e => {
    if (state.answered) return;
    startX = e.clientX;
    startY = e.clientY;
    capturedId = e.pointerId;

    timer = setTimeout(() => {
      dragging = true;
      btn.setPointerCapture(capturedId);
      if (navigator.vibrate) navigator.vibrate(25);

      const rect = btn.getBoundingClientRect();
      ghost = document.createElement('span');
      ghost.className = 'drag-ghost';
      ghost.textContent = word;
      ghost.style.left = `${rect.left}px`;
      ghost.style.top  = `${rect.top}px`;
      document.body.appendChild(ghost);
      btn.classList.add('dragging');
    }, 380);
  });

  btn.addEventListener('pointermove', e => {
    if (!dragging) {
      if (Math.hypot(e.clientX - startX, e.clientY - startY) > 8)
        clearTimeout(timer);
      return;
    }
    if (ghost) {
      ghost.style.left = `${e.clientX - ghost.offsetWidth / 2}px`;
      ghost.style.top  = `${e.clientY - ghost.offsetHeight / 2}px`;
    }
  });

  btn.addEventListener('pointerup', e => {
    if (!dragging) {
      cleanup();
      returnWord(wordI);   // simple tap → remove
      return;
    }

    const fromPos = parseInt(btn.dataset.ansPos);
    cleanup();

    // Find target answer chip under pointer
    const under = document.elementsFromPoint(e.clientX, e.clientY);
    const target = under.find(
      el => el !== btn && el.classList.contains('wchip-ans') && el.dataset.ansPos !== undefined
    );

    if (target) {
      const toPos = parseInt(target.dataset.ansPos);
      if (!isNaN(toPos) && fromPos !== toPos) {
        const [item] = state.excAnswer.splice(fromPos, 1);
        state.excAnswer.splice(toPos > fromPos ? toPos - 1 : toPos, 0, item);
        renderExCChips();
      }
    }
  });

  btn.addEventListener('pointercancel', cleanup);
  btn.addEventListener('contextmenu', e => e.preventDefault());

  return btn;
}

function pickWord(i) {
  if (state.excUsed.has(i)) return;
  const item = state.excAllWords.find(x => x.i === i);
  state.excUsed.add(i);
  state.excAnswer.push({ word: item.word, i });
  renderExCChips();
  $('check-btn').disabled = false;
}

function returnWord(i) {
  state.excUsed.delete(i);
  state.excAnswer = state.excAnswer.filter(x => x.i !== i);
  renderExCChips();
  if (state.excAnswer.length === 0) $('check-btn').disabled = true;
}

$('check-btn').addEventListener('click', () => {
  if (state.answered) return;
  state.answered = true;
  $('check-btn').disabled = true;

  const q        = state.queue[state.idx];
  const assembled = assembleSentence(q);
  const isOK     = normalize(assembled) === normalize(q.answer);

  state.scores[q.section].t++;
  if (isOK) state.scores[q.section].c++;
  else      state.wrongIds.push(q.id);

  showFeedback({
    isOK,
    headText:      isOK ? '✓ 正解！' : '✗ 不正解',
    fixText:       isOK ? null : q.answer,
    correctedText: null,
    traText:       q.translation ? `[訳] ${q.translation}` : null,
    expText:       q.explanation
  });
});

/* ── Shared feedback ── */
function showFeedback({ isOK, headText, fixText, correctedText, traText, expText }) {
  const fb   = $('fb-card');
  const head = $('fb-head');
  const fix  = $('fb-fix');
  const cor  = $('fb-corrected');
  const tra  = $('fb-tra');
  const exp  = $('fb-exp');

  fb.className   = `fb-card show ${isOK ? 'ok' : 'ng'}`;
  head.className = `fb-head ${isOK ? 'ok' : 'ng'}`;
  head.textContent = headText;

  if (fixText)       { fix.textContent = fixText; fix.style.display = ''; }
  else                 fix.style.display = 'none';

  if (correctedText) { cor.textContent = '✓ ' + correctedText; cor.style.display = ''; }
  else                 cor.style.display = 'none';

  if (traText)       { tra.textContent = traText; tra.style.display = ''; }
  else                 tra.style.display = 'none';

  exp.textContent = expText;
  $('next-btn').className = 'next-btn show';
}

/* ── Next ── */
$('next-btn').addEventListener('click', () => {
  state.idx++;
  if (state.idx >= state.queue.length) {
    showResults();
  } else {
    renderQ();
    window.scrollTo(0, 0);
  }
});

/* ── Results ── */
function showResults() {
  let totalC = 0, totalT = 0;
  Object.values(state.scores).forEach(s => { totalC += s.c; totalT += s.t; });

  const pct = totalT ? Math.round(totalC / totalT * 100) : 0;
  $('score-big').textContent = `${totalC}/${totalT}`;
  $('score-pct').textContent = `${pct}%`;

  if      (pct >= 80) $('res-h2').textContent = 'クイズ完了！ 🎉';
  else if (pct >= 60) $('res-h2').textContent = 'クイズ完了！ 👍';
  else                $('res-h2').textContent = 'クイズ完了！';

  const SEC_NAMES = {
    frames: 'FRAME（例題）',
    exA:    'Exercise A（空所補充）',
    exB:    'Exercise B（誤文訂正）',
    exC:    'Exercise C（整序英作文）'
  };

  const container = $('sec-results');
  container.innerHTML = '';
  ['frames', 'exA', 'exB', 'exC'].forEach(key => {
    const s = state.scores[key];
    if (!s || s.t === 0) return;
    const p    = Math.round(s.c / s.t * 100);
    const card = document.createElement('div');
    card.className = 'sec-res';
    card.innerHTML = `
      <span class="sec-res-name">${SEC_NAMES[key]}</span>
      <div class="mini-bar"><div class="mini-fill" style="width:${p}%"></div></div>
      <span class="sec-res-score">${s.c}/${s.t}</span>`;
    container.appendChild(card);
  });

  const wrongBtn = $('retry-wrong-btn');
  if (state.wrongIds.length > 0) {
    wrongBtn.textContent   = `✗ 間違えた ${state.wrongIds.length} 問だけもう一度`;
    wrongBtn.style.display = '';
  } else {
    wrongBtn.style.display = 'none';
  }

  if (totalT > 0) {
    try {
      localStorage.setItem('tense-score', JSON.stringify({ c: totalC, t: totalT, pct }));
      $('prev-card').style.display = '';
      $('prev-val').textContent = `${totalC}/${totalT} (${pct}%)`;
    } catch (_) {}
  }

  showScreen('screen-results');
}

/* ── Service Worker ── */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
