// app.js — STEP 01 時制マスター

const state = {
  queue: [],
  idx: 0,
  answered: false,
  scores: {}   // section → { c, t }
};

/* ── Utility ── */
function $(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo(0, 0);
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
  state.idx = 0;
  state.answered = false;
  state.scores = {};
  q.forEach(item => {
    if (!state.scores[item.section]) state.scores[item.section] = { c: 0, t: 0, name: item.sectionName };
  });

  showScreen('screen-quiz');
  renderQ();
});

/* ── Back to home ── */
$('quiz-back').addEventListener('click', () => showScreen('screen-home'));
$('home-btn').addEventListener('click', () => showScreen('screen-home'));
$('retry-btn').addEventListener('click', () => {
  state.idx = 0;
  state.answered = false;
  Object.values(state.scores).forEach(s => { s.c = 0; s.t = 0; });
  showScreen('screen-quiz');
  renderQ();
});

/* ── Render question ── */
function renderQ() {
  const q = state.queue[state.idx];
  const total = state.queue.length;
  const cur   = state.idx + 1;

  $('prog-txt').textContent  = `${cur} / ${total}`;
  $('prog-fill').style.width = `${(cur / total) * 100}%`;

  const tag = $('q-tag');
  tag.textContent = q.label;
  tag.className   = 'q-tag ' + q.tagClass;
  $('q-src').textContent = q.source ? `〈${q.source}〉` : '';

  // Reset shared UI
  $('opts').innerHTML = '';
  $('opts').style.display = '';
  $('exc-zone').style.display = 'none';
  const fb = $('fb-card');
  fb.className = 'fb-card';
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
  let html = q.question;
  // Render blank
  html = html.replace(/\(\s*\)/g, '<span class="blank">(　　　)</span>');
  // Style circled numbers in ExB
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

  const q      = state.queue[state.idx];
  const isOK   = chosen === q.answer;
  const NUMS   = ['①', '②', '③', '④'];

  // Update score
  state.scores[q.section].t++;
  if (isOK) state.scores[q.section].c++;

  // Mark buttons
  const btns = $('opts').querySelectorAll('.opt-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });

  // Build feedback
  const fb   = $('fb-card');
  const head = $('fb-head');
  const fix  = $('fb-fix');
  const tra  = $('fb-tra');
  const exp  = $('fb-exp');

  fb.className  = `fb-card show ${isOK ? 'ok' : 'ng'}`;
  head.className = `fb-head ${isOK ? 'ok' : 'ng'}`;

  if (isOK) {
    head.textContent = '✓ 正解！';
  } else {
    head.textContent = `✗ 不正解　正解: ${NUMS[q.answer]} ${q.options[q.answer]}`;
  }

  if (q.correction) {
    fix.textContent   = q.correction;
    fix.style.display = '';
  } else {
    fix.style.display = 'none';
  }

  if (q.translation) {
    tra.textContent   = `[訳] ${q.translation}`;
    tra.style.display = '';
  } else {
    tra.style.display = 'none';
  }

  exp.textContent = q.explanation;
  $('next-btn').className = 'next-btn show';
}

/* ── ExC ── */
function renderExCQ(q) {
  // Question text (Japanese instruction or generic)
  $('q-text').innerHTML = q.japanese
    ? q.japanese
    : '語句を並べかえて英文を完成させなさい。';

  // Show translation hint for questions with no Japanese but have translation
  if (!q.japanese && q.translation) {
    $('q-ja').textContent  = `[意味] ${q.translation}`;
    $('q-ja').style.display = '';
  }

  // Hide options, show ExC zone
  $('opts').style.display = 'none';
  $('exc-zone').style.display = '';

  // Context sentence frame
  const ctxEl = $('exc-ctx');
  let ctxHtml = '';
  if (q.prefix) ctxHtml += `${q.prefix} `;
  ctxHtml += '<span class="ctx-blank">（　　　　　　）</span>';
  if (q.suffix) ctxHtml += ` ${q.suffix}`;
  ctxEl.innerHTML = ctxHtml;

  // Word chips
  const chipsEl = $('exc-chips');
  chipsEl.innerHTML = '';
  q.words.forEach(w => {
    const span = document.createElement('span');
    span.className   = 'exc-chip';
    span.textContent = w;
    chipsEl.appendChild(span);
  });

  // Reset reveal
  $('ans-reveal').className = 'ans-reveal';
  $('reveal-btn').style.display = '';
  $('next-btn').className = 'next-btn';
}

$('reveal-btn').addEventListener('click', () => {
  if (state.answered) return;
  state.answered = true;

  const q = state.queue[state.idx];
  // Count ExC completions
  state.scores[q.section].t++;

  $('ans-sent').textContent = q.answer;

  const noteEl = $('ans-note');
  if (q.note) {
    noteEl.textContent   = `※ ${q.note}`;
    noteEl.style.display = '';
  } else {
    noteEl.style.display = 'none';
  }

  $('ans-exp').textContent     = q.explanation;
  $('ans-reveal').className    = 'ans-reveal show';
  $('reveal-btn').style.display = 'none';
  $('next-btn').className       = 'next-btn show';
});

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
  ['frames', 'exA', 'exB'].forEach(key => {
    const s = state.scores[key];
    if (s) { totalC += s.c; totalT += s.t; }
  });

  const pct = totalT ? Math.round(totalC / totalT * 100) : 0;
  $('score-big').textContent = `${totalC}/${totalT}`;
  $('score-pct').textContent = `${pct}%`;

  if      (pct >= 80) $('res-h2').textContent = 'クイズ完了！ 🎉';
  else if (pct >= 60) $('res-h2').textContent = 'クイズ完了！ 👍';
  else                $('res-h2').textContent = 'クイズ完了！';

  // Section breakdown
  const container = $('sec-results');
  container.innerHTML = '';

  const SEC_NAMES = {
    frames: 'FRAME（例題）',
    exA:    'Exercise A（空所補充）',
    exB:    'Exercise B（誤文訂正）',
    exC:    'Exercise C（整序英作文）'
  };

  // Ordered display
  ['frames', 'exA', 'exB', 'exC'].forEach(key => {
    const s = state.scores[key];
    if (!s) return;

    const card = document.createElement('div');
    card.className = 'sec-res';

    if (key === 'exC') {
      card.innerHTML = `
        <span class="sec-res-name">${SEC_NAMES[key]}</span>
        <div class="mini-bar"><div class="mini-fill" style="width:100%"></div></div>
        <span class="sec-res-score">${s.t}問確認</span>
      `;
    } else {
      const p = s.t ? Math.round(s.c / s.t * 100) : 0;
      card.innerHTML = `
        <span class="sec-res-name">${SEC_NAMES[key]}</span>
        <div class="mini-bar"><div class="mini-fill" style="width:${p}%"></div></div>
        <span class="sec-res-score">${s.c}/${s.t}</span>
      `;
    }
    container.appendChild(card);
  });

  // Save score (exclude ExC from scoring)
  if (totalT > 0) {
    try {
      localStorage.setItem('tense-score', JSON.stringify({ c: totalC, t: totalT, pct }));
      // Refresh prev-score on home screen
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
