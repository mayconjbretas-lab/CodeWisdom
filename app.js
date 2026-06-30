// ============================================================
// CodeWisdom — app.js v2
// Dinâmica igual Duolingo: feedback no bottom, botão de ação
// ============================================================

const ESTADO_INICIAL = {
  xp: 0, streak: 0, ultimoAcesso: null,
  animalAtual: 'coruja',
  animaisDesbloqueados: ['coruja'],
  progresso: {
    coruja:    { licoesFeitas: [], erros: {}, revisoesCruzadas: {} },
    elefante:  { licoesFeitas: [], erros: {}, revisoesCruzadas: {} },
    tartaruga: { licoesFeitas: [], erros: {}, revisoesCruzadas: {} },
    lobo:      { licoesFeitas: [], erros: {}, revisoesCruzadas: {} },
    corvo:     { licoesFeitas: [], erros: {}, revisoesCruzadas: {} },
    leao:      { licoesFeitas: [], erros: {}, revisoesCruzadas: {} }
  }
}

let estado = carregarEstado()
let licaoAtual = null
let etapaAtual = 0
let exIdx = 0
let respostasErradas = []
let opcaoSelecionada = null
let jaRespondeu = false
let inputCerto = false

// ── SONS (estilo Duolingo, gerados via WebAudio — sem arquivos externos) ──
const audioCtx = (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext))
  ? new (window.AudioContext || window.webkitAudioContext)()
  : null

function tocarTom(freq, duracao, tipo='sine', vol=0.15, delay=0) {
  if (!audioCtx) return
  try {
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.type = tipo
    osc.frequency.value = freq
    gain.gain.value = vol
    osc.connect(gain); gain.connect(audioCtx.destination)
    const t = audioCtx.currentTime + delay
    gain.gain.setValueAtTime(vol, t)
    gain.gain.exponentialRampToValueAtTime(0.001, t + duracao)
    osc.start(t)
    osc.stop(t + duracao)
  } catch {}
}

function somAcerto() {
  // dois tons subindo, estilo "ding-ding!" do Duolingo
  tocarTom(587.33, 0.12, 'sine', 0.18, 0)     // D5
  tocarTom(880,    0.18, 'sine', 0.18, 0.1)   // A5
}
function somErro() {
  // tom curto descendo
  tocarTom(220, 0.18, 'sawtooth', 0.10, 0)
  tocarTom(180, 0.22, 'sawtooth', 0.08, 0.08)
}
function somConclusao() {
  // fanfarra simples de 4 notas
  tocarTom(523.25, 0.15, 'sine', 0.18, 0)     // C5
  tocarTom(659.25, 0.15, 'sine', 0.18, 0.13)  // E5
  tocarTom(783.99, 0.15, 'sine', 0.18, 0.26)  // G5
  tocarTom(1046.5, 0.3,  'sine', 0.2,  0.39)  // C6
}
function somXp() {
  tocarTom(987.77, 0.1, 'triangle', 0.12, 0)
}
function destravarAudio() {
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume()
}
document.addEventListener('click', destravarAudio, { once: true })
document.addEventListener('touchstart', destravarAudio, { once: true })

// ── DADOS DOS ANIMAIS ─────────────────────────────────────────
const ANIMAIS = {
  coruja: {
    emoji:'🦉', nome:'Athena, a Coruja',
    quote:'"A lógica é a raiz de tudo"',
    fase:'Fase 1 · Lógica & Fundamentos',
    bg:'linear-gradient(135deg,#2d2066,#4c1d95)',
    heroBg:'#0f3460', cor:'#a78bfa',
    get licoes() { return typeof CORUJA_LICOES !== 'undefined' ? CORUJA_LICOES : [] },
    trilhas: [
      { icon:'🧩', bg:'rgba(124,111,247,0.2)', nome:'Lógica de programação', desc:'Variáveis, condições e loops', licoes:[0,1,2,3,4,5] },
      { icon:'⚙️', bg:'rgba(16,185,129,0.2)',  nome:'Funções e estruturas',  desc:'Funções, arrays, objetos, escopo', licoes:[6,7,8,9] },
      { icon:'🔍', bg:'rgba(245,158,11,0.2)',  nome:'Algoritmos',            desc:'Busca, ordenação, Big O, recursão', licoes:[10,11,12,13] },
      { icon:'🗂️', bg:'rgba(59,130,246,0.2)',  nome:'Estruturas de dados',   desc:'Sets, Maps, pilhas, filas, árvores, hash', licoes:[14,15,16,17,18] },
      { icon:'⚡', bg:'rgba(236,72,153,0.2)',  nome:'JS avançado',           desc:'Promises, funcional, erros, classes, regex', licoes:[19,20,21,22,23] },
      { icon:'🧠', bg:'rgba(124,111,247,0.2)', nome:'Algoritmos avançados',  desc:'Generators, DP, greedy, grafos', licoes:[24,25,26,27,28,29] },
      { icon:'🌐', bg:'rgba(16,185,129,0.2)',  nome:'Web e inglês técnico',  desc:'APIs do navegador, ordenação avançada, inglês', licoes:[30,31,32] },
      { icon:'🚀', bg:'rgba(245,158,11,0.2)',  nome:'Projeto Final 1',       desc:'Visualizador de algoritmos', licoes:[33] },
      { icon:'➗', bg:'rgba(59,130,246,0.2)',   nome:'Matemática e dados',    desc:'Math, binário, strings, datas, JSON', licoes:[35,36,37,38,39] },
      { icon:'🛠️', bg:'rgba(236,72,153,0.2)',  nome:'Boas práticas',         desc:'Padrões, debugging, inglês de time, clean code', licoes:[40,41,42,43,44] },
      { icon:'🧪', bg:'rgba(124,111,247,0.2)', nome:'Qualidade e tipos',     desc:'Testes, TypeScript, segurança, imutabilidade', licoes:[46,47,48,49] },
      { icon:'🎯', bg:'rgba(16,185,129,0.2)',  nome:'Padrões de algoritmo',  desc:'Palíndromos, dois ponteiros, módulos, formulários', licoes:[50,51,52,53,54] },
      { icon:'🚀', bg:'rgba(245,158,11,0.2)',  nome:'Projeto Final 2',       desc:'App de tarefas com persistência', licoes:[55] },
      { icon:'🏔️', bg:'rgba(59,130,246,0.2)',  nome:'Estruturas avançadas',  desc:'Heaps, Union-Find, KMP, ordenação topológica', licoes:[57,61,62,64] },
      { icon:'🔌', bg:'rgba(236,72,153,0.2)',  nome:'Concorrência e APIs',   desc:'Event Loop, WebSockets, design de API, inglês', licoes:[58,59,60,63] },
      { icon:'🧱', bg:'rgba(124,111,247,0.2)', nome:'Web Components',        desc:'Componentes nativos do navegador', licoes:[65] },
      { icon:'🚀', bg:'rgba(245,158,11,0.2)',  nome:'Projeto Final 3',       desc:'Chat em tempo real com WebSockets', licoes:[66] },
      { icon:'🌲', bg:'rgba(59,130,246,0.2)',  nome:'Algoritmos de elite',   desc:'Tries, Dijkstra, Backtracking', licoes:[68,69,70] },
      { icon:'✨', bg:'rgba(16,185,129,0.2)',  nome:'Maturidade profissional',desc:'Acessibilidade, performance, entrevistas, refatoração, docs', licoes:[71,72,73,74,76] },
      { icon:'🚀', bg:'rgba(245,158,11,0.2)',  nome:'Projeto Final 4',       desc:'Jogo da memória completo', licoes:[77] },
      { icon:'🎓', bg:'rgba(124,111,247,0.2)', nome:'Mestria avançada',      desc:'Currying, Proxy, matrizes, padrões, Workers, hash', licoes:[79,80,81,82,83,84,85,86,87,88,89,90] },
      { icon:'🏆', bg:'rgba(16,185,129,0.2)',  nome:'Marco final',           desc:'Revisão geral e celebração das 100 lições', licoes:[91,92] },
      { icon:'➕', bg:'rgba(59,130,246,0.2)',   nome:'Matemática discreta',   desc:'Lógica proposicional, conjuntos, combinatória, probabilidade', licoes:[93,94,95,96,97] },
      { icon:'🗣️', bg:'rgba(236,72,153,0.2)',  nome:'Inglês profissional',   desc:'RFCs, gírias, documentação, code review, standups', licoes:[98,99,100,104,105] },
      { icon:'🔢', bg:'rgba(124,111,247,0.2)', nome:'Matemática aplicada',   desc:'Álgebra booleana, precisão numérica, sequências, geometria, primos', licoes:[101,102,103,106,107] },
      { icon:'🎯', bg:'rgba(16,185,129,0.2)',  nome:'Síntese final',         desc:'Conectando matemática e comunicação profissional', licoes:[108] },
      { icon:'📝', bg:'rgba(239,68,68,0.2)',   nome:'Prova Final',           desc:'Avaliação completa da Fase 1 — desbloqueia o Elefante', licoes:[109] }
    ]
  },
  elefante: {
    emoji:'🐘', nome:'Memo, o Elefante',
    quote:'"Um bom dev nunca esquece"',
    fase:'Fase 2 · Backend & Dados',
    bg:'linear-gradient(135deg,#1a3a4a,#1e40af)', heroBg:'#0d2a38', cor:'#93c5fd',
    get licoes() { return typeof ELEFANTE_LICOES !== 'undefined' ? ELEFANTE_LICOES : [] },
    trilhas: [
      { icon:'🗄️', bg:'rgba(59,130,246,0.2)',  nome:'SQL Completo',      desc:'SELECT, JOIN, INDEX, transações', licoes:[] },
      { icon:'📦', bg:'rgba(16,185,129,0.2)',   nome:'APIs REST',         desc:'Node.js, Express, autenticação', licoes:[] },
      { icon:'🔐', bg:'rgba(124,111,247,0.2)',  nome:'Segurança Backend', desc:'JWT, OAuth, boas práticas', licoes:[] }
    ]
  },
  tartaruga: {
    emoji:'🐢', nome:'Zen, a Tartaruga',
    quote:'"Consistência vence velocidade"',
    fase:'Fase 3 · Frontend & Design',
    bg:'linear-gradient(135deg,#1a3a2a,#065f46)', heroBg:'#0d2a1a', cor:'#6ee7b7',
    get licoes() { return typeof TARTARUGA_LICOES !== 'undefined' ? TARTARUGA_LICOES : [] },
    trilhas: [
      { icon:'🎨', bg:'rgba(16,185,129,0.2)',  nome:'HTML & CSS',    desc:'Layouts, Flexbox, Grid, animações', licoes:[] },
      { icon:'⚡', bg:'rgba(245,158,11,0.2)',  nome:'JavaScript',    desc:'DOM, eventos, fetch API', licoes:[] },
      { icon:'⚛️', bg:'rgba(124,111,247,0.2)', nome:'React',         desc:'Componentes, hooks, estado', licoes:[] }
    ]
  },
  lobo: {
    emoji:'🐺', nome:'Aro, o Lobo',
    quote:'"Código em equipe é mais forte"',
    fase:'Fase 4 · Engenharia de Software',
    bg:'linear-gradient(135deg,#2a1a1a,#7f1d1d)', heroBg:'#1a0d0d', cor:'#fca5a5',
    get licoes() { return typeof LOBO_LICOES !== 'undefined' ? LOBO_LICOES : [] },
    trilhas: [
      { icon:'🏗️', bg:'rgba(245,158,11,0.2)',  nome:'SOLID & Padrões', desc:'Clean code, Design Patterns', licoes:[] },
      { icon:'🔀', bg:'rgba(59,130,246,0.2)',   nome:'Git & CI/CD',    desc:'Git avançado, pipelines', licoes:[] },
      { icon:'🐳', bg:'rgba(124,111,247,0.2)',  nome:'Docker & Cloud', desc:'Containers, AWS, GCP', licoes:[] }
    ]
  },
  corvo: {
    emoji:'🐦‍⬛', nome:'Nyx, o Corvo',
    quote:'"Hackeie o impossível"',
    fase:'Fase 5 · IA, Segurança & Dados',
    bg:'linear-gradient(135deg,#0d0d1a,#1e1b4b)', heroBg:'#06060f', cor:'#c4b5fd',
    get licoes() { return typeof CORVO_LICOES !== 'undefined' ? CORVO_LICOES : [] },
    trilhas: [
      { icon:'🤖', bg:'rgba(124,111,247,0.2)', nome:'IA & Machine Learning', desc:'Python, modelos, LLMs', licoes:[] },
      { icon:'🔒', bg:'rgba(239,68,68,0.2)',   nome:'Kali Linux & Pentest',  desc:'OWASP, Metasploit, Burp', licoes:[] },
      { icon:'📊', bg:'rgba(16,185,129,0.2)',  nome:'Data Science',          desc:'Pandas, visualizações', licoes:[] }
    ]
  },
  leao: {
    emoji:'🦁', nome:'Rex, o Leão',
    quote:'"O mestre hackeia o mundo físico"',
    fase:'Era Bônus · Hardware Hacking',
    bg:'linear-gradient(135deg,#2a1800,#78350f)', heroBg:'#1a0e00', cor:'#fcd34d',
    get licoes() { return typeof LEAO_LICOES !== 'undefined' ? LEAO_LICOES : [] },
    trilhas: [
      { icon:'📡', bg:'rgba(245,158,11,0.2)',  nome:'ESP32 & Arduino', desc:'C/C++, firmware, IoT', licoes:[] },
      { icon:'🦈', bg:'rgba(59,130,246,0.2)',  nome:'M5Shark & Flipper', desc:'Ferramentas WiFi hacking', licoes:[] },
      { icon:'📻', bg:'rgba(236,72,153,0.2)', nome:'HackRF & SDR',    desc:'Rádio frequência, SDR', licoes:[] }
    ]
  }
}

// ── PERSISTÊNCIA ──────────────────────────────────────────────
function carregarEstado() {
  try {
    const s = localStorage.getItem('cw_estado')
    if (!s) return JSON.parse(JSON.stringify(ESTADO_INICIAL))
    return Object.assign(JSON.parse(JSON.stringify(ESTADO_INICIAL)), JSON.parse(s))
  } catch { return JSON.parse(JSON.stringify(ESTADO_INICIAL)) }
}
function salvarEstado() {
  localStorage.setItem('cw_estado', JSON.stringify(estado))
}

// ── STREAK ────────────────────────────────────────────────────
function verificarStreak() {
  const hoje = new Date().toDateString()
  const ontem = new Date(Date.now() - 86400000).toDateString()
  if (estado.ultimoAcesso === hoje) return
  estado.streak = estado.ultimoAcesso === ontem ? estado.streak + 1 : 1
  estado.ultimoAcesso = hoje
  salvarEstado()
}

// ── SIDEBAR DESKTOP ───────────────────────────────────────────
function renderSidebar() {
  const s = document.getElementById('sidebar')
  if (!s) return
  s.innerHTML = `
    <div class="sidebar-logo">Code<span style="color:var(--purple2)">Wisdom</span></div>
    <div class="sidebar-item ativo" id="si-home" onclick="navegarTela('home')">
      <span class="si">🏠</span> Início
    </div>
    <div class="sidebar-item" id="si-trilhas" onclick="navegarTela('trilhas')">
      <span class="si">🗺️</span> Trilhas
    </div>
    <div class="sidebar-item" id="si-ranking" onclick="navegarTela('ranking')">
      <span class="si">🏆</span> Ranking
    </div>
    <div class="sidebar-item" id="si-revisao" onclick="navegarTela('revisao')">
      <span class="si">🔀</span> Revisão Cruzada
    </div>
    <div class="sidebar-item" id="si-perfil" onclick="navegarTela('perfil')">
      <span class="si">👤</span> Perfil
    </div>
    <div class="sidebar-divider"></div>
    <div class="sidebar-xp">
      <div class="xp-num">⚡ ${estado.xp} XP</div>
      <div class="xp-lbl">Experiência total</div>
      <div class="streak-num">🔥 ${estado.streak} dias</div>
    </div>`
}

function renderHeader() {
  const xv = document.getElementById('xp-val')
  const sv = document.getElementById('streak-val')
  if (xv) xv.textContent = `⚡ ${estado.xp} XP`
  if (sv) sv.textContent = `🔥 ${estado.streak} dias`
}

// ── HOME ──────────────────────────────────────────────────────
function renderHome() {
  const animal = ANIMAIS[estado.animalAtual]
  const prog = estado.progresso[estado.animalAtual]
  const total = animal.licoes.length
  const feitas = prog.licoesFeitas.length
  const pct = total > 0 ? Math.round((feitas / total) * 100) : 0

  const gridHtml = Object.entries(ANIMAIS).map(([key, a]) => {
    const desbloqueado = estado.animaisDesbloqueados.includes(key)
    const p = estado.progresso[key]
    const f = p.licoesFeitas.length
    const t = a.licoes.length
    const mini = t > 0 ? (f / t) * 100 : 0
    return `<div class="mascot-btn ${estado.animalAtual===key?'ativo':''} ${!desbloqueado?'bloqueado':''}"
      onclick="${desbloqueado ? `selecionarAnimal('${key}')` : `alertaBloqueado('${key}')`}">
      <span class="e">${desbloqueado ? a.emoji : '🔒'}</span>
      <span>${desbloqueado ? key[0].toUpperCase()+key.slice(1) : '???'}</span>
      <div class="progresso-mini"><div class="progresso-mini-fill" style="width:${mini}%"></div></div>
    </div>`
  }).join('')

  const trilhasHtml = animal.trilhas.map((t, ti) => {
    const licoesTrilha = t.licoes.map(i => animal.licoes[i]).filter(Boolean)
    const feitasT = licoesTrilha.filter(l => prog.licoesFeitas.includes(l.id)).length
    const bloq = ti > 0 && !trilhaCompleta(animal, ti-1)
    const status = bloq ? 'Bloqueada' : feitasT===0 ? 'Iniciar' : feitasT===licoesTrilha.length ? 'Concluída ✅' : 'Em andamento'
    const bc = bloq ? 'badge-gray' : feitasT===licoesTrilha.length ? 'badge-green' : feitasT>0 ? 'badge-blue' : 'badge-amber'
    const stars = feitasT===0?0:feitasT===licoesTrilha.length?3:feitasT>=licoesTrilha.length/2?2:1
    return `<div class="trilha-card${bloq?' bloqueada':''}" onclick="${!bloq?`iniciarTrilha(${ti})`:''}">
      <div class="trilha-icon" style="background:${t.bg}">${t.icon}</div>
      <div class="trilha-info">
        <div class="trilha-nome">${t.nome}</div>
        <div class="trilha-desc">${t.desc}</div>
        <div class="trilha-meta">
          <span class="badge ${bc}">${status}</span>
          <div class="estrelas">${[1,2,3].map(i=>`<span class="estrela${i>stars?' vazia':''}">★</span>`).join('')}</div>
        </div>
      </div>
      ${bloq?'<span style="font-size:20px;color:var(--text3)">🔒</span>':''}
    </div>`
  }).join('')

  const licoes = animal.licoes
  const nosHtml = licoes.slice(0, 8).map((l, i) => {
    const feita = prog.licoesFeitas.includes(l.id)
    const ehAtual = !feita && (i===0 || prog.licoesFeitas.includes(licoes[i-1]?.id))
    return `${i>0?`<div class="no-linha${prog.licoesFeitas.includes(licoes[i-1]?.id)?' feita':''}"></div>`:''}
    <div class="no ${feita?'feito':ehAtual?'atual':'travado'}" title="${l.titulo}"
      onclick="${ehAtual&&!feita?`abrirLicao(${i})`:''}">
      ${feita?'✓':ehAtual?animal.emoji:'🔒'}
    </div>`
  }).join('')

  document.getElementById('home-content').innerHTML = `
    <div class="home-hero">
      <h1>Code<span>Wisdom</span></h1>
      <p>Do zero ao especialista — aprenda como um jogo</p>
    </div>
    <div class="mascot-grid">${gridHtml}</div>
    <div class="animal-destaque">
      <div class="animal-header" style="background:${animal.heroBg}">
        <div class="animal-avatar" style="background:${animal.bg}">${animal.emoji}</div>
        <div class="animal-info">
          <div class="fase-pill">${animal.fase}</div>
          <h2>${animal.nome}</h2>
          <div class="quote">${animal.quote}</div>
        </div>
      </div>
      <div class="progresso-barra">
        <div class="prog-lbl"><span>Lição ${feitas} de ${total||'?'}</span><span>${pct}%</span></div>
        <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="trilhas-titulo">Trilhas de hoje</div>
      ${trilhasHtml}
      <div class="nos-licoes">
        <div class="nos-titulo">Próximas lições</div>
        <div class="nos-row">${nosHtml||'<p style="color:var(--text3);font-size:13px;padding:8px 0">Lições sendo preparadas 🚧</p>'}</div>
      </div>
    </div>`
}

function trilhaCompleta(animal, ti) {
  const t = animal.trilhas[ti]
  const prog = estado.progresso[estado.animalAtual]
  const licoesOk = t.licoes.map(i => animal.licoes[i]).filter(Boolean).every(l => prog.licoesFeitas.includes(l.id))
  if (!licoesOk) return false
  // a partir da trilha 2 (índice 1), exige revisão cruzada aprovada daquela trilha
  if (ti >= 1) {
    const aprovado = prog.revisoesCruzadas[ti] && prog.revisoesCruzadas[ti].aprovado
    if (!aprovado) return false
  }
  return true
}

// ── REVISÃO CRUZADA ──────────────────────────────────────────
// Gera N perguntas cumulativas (trilhas 0..ti) reaproveitando exercícios já feitos
function gerarRevisaoCruzada(animal, ti) {
  const trilhasEnvolvidas = animal.trilhas.slice(0, ti + 1)
  const todosExercicios = []
  trilhasEnvolvidas.forEach((t, idxT) => {
    t.licoes.map(i => animal.licoes[i]).filter(Boolean).forEach(licao => {
      (licao.exercicios || []).forEach(ex => {
        if (ex.tipo === 'multipla') {
          todosExercicios.push({ ...ex, origemTrilha: idxT, origemLicao: licao.titulo })
        }
      })
    })
  })
  // embaralha e pega até 8 perguntas, priorizando cobertura de todas as trilhas envolvidas
  const embaralhado = [...todosExercicios].sort(() => Math.random() - 0.5)
  const max = Math.min(8, embaralhado.length)
  return embaralhado.slice(0, max)
}

function podeAcessarRevisao(animal, ti) {
  // só pode tentar a revisão da trilha ti se já completou as lições dela
  const t = animal.trilhas[ti]
  const prog = estado.progresso[estado.animalAtual]
  return t.licoes.map(i => animal.licoes[i]).filter(Boolean).every(l => prog.licoesFeitas.includes(l.id))
}

let revisaoAtual = null // { ti, perguntas, idx, acertos, respostas }

function iniciarRevisaoCruzada(ti) {
  const animal = ANIMAIS[estado.animalAtual]
  if (!podeAcessarRevisao(animal, ti)) {
    alert('🔒 Termine todas as lições desta trilha antes de fazer a revisão cruzada!')
    return
  }
  const perguntas = gerarRevisaoCruzada(animal, ti)
  if (perguntas.length === 0) {
    alert('Sem exercícios suficientes ainda para gerar a revisão cruzada desta trilha.')
    return
  }
  revisaoAtual = { ti, perguntas, idx: 0, acertos: 0, respostas: [] }
  navegarTela('licao')
  renderRevisaoCruzada()
}

function renderRevisaoCruzada() {
  const { ti, perguntas, idx } = revisaoAtual
  const animal = ANIMAIS[estado.animalAtual]
  const pct = Math.round((idx / perguntas.length) * 100)
  const ex = perguntas[idx]

  const topHtml = `
    <div class="licao-top">
      <button class="btn-fechar" onclick="navegarTela('revisao')" title="Sair">✕</button>
      <div class="licao-progress-bar"><div class="licao-progress-fill" style="width:${pct}%;background:linear-gradient(90deg,#f59e0b,#fcd34d)"></div></div>
      <div class="licao-xp-badge" style="background:rgba(245,158,11,0.15);color:#fcd34d">🔀 Cruzada</div>
    </div>`

  const opcoesHtml = ex.opcoes.map((op, i) =>
    `<button class="opcao" id="rop${i}" onclick="responderRevisao(${i})">${op}</button>`
  ).join('')

  document.getElementById('licao-content').innerHTML = `
    <div class="licao-wrap">
      <div class="licao-body">
        ${topHtml}
        <div class="questao-label">🔀 Revisão Cruzada — pergunta ${idx+1} de ${perguntas.length} (de: ${ex.origemLicao})</div>
        <div class="questao-titulo">${ex.pergunta}</div>
        <div class="opcoes">${opcoesHtml}</div>
        <div class="feedback-bar" id="feedback"></div>
      </div>
      <div class="licao-footer"><button class="btn-acao verificar" id="btn-acao" onclick="proximaRevisao()" disabled>Verificar</button></div>
    </div>`
}

function responderRevisao(i) {
  if (jaRespondeu) return
  jaRespondeu = true
  const { perguntas, idx } = revisaoAtual
  const ex = perguntas[idx]
  const correto = i === ex.correta
  if (correto) { revisaoAtual.acertos++; somAcerto() } else { somErro() }
  revisaoAtual.respostas.push({ pergunta: ex.pergunta, correto })
  document.querySelectorAll('.opcao').forEach((el, j) => {
    el.disabled = true
    if (j === ex.correta) el.classList.add('correta')
    else if (j === i && !correto) el.classList.add('errada')
  })
  const fb = document.getElementById('feedback')
  fb.className = `feedback-bar visivel ${correto?'ok':'erro'}`
  fb.innerHTML = `<div class="feedback-titulo">${correto?'✅ Correto!':'❌ Incorreto'}</div><div class="feedback-texto">${ex.explicacao}</div>`
  const btn = document.getElementById('btn-acao')
  btn.disabled = false
  btn.textContent = 'Continuar'
  btn.className = 'btn-acao continuar'
}

function proximaRevisao() {
  jaRespondeu = false
  revisaoAtual.idx++
  if (revisaoAtual.idx < revisaoAtual.perguntas.length) {
    renderRevisaoCruzada()
  } else {
    concluirRevisaoCruzada()
  }
}

function concluirRevisaoCruzada() {
  const { ti, perguntas, acertos } = revisaoAtual
  const pct = Math.round((acertos / perguntas.length) * 100)
  const aprovado = pct >= 80
  const prog = estado.progresso[estado.animalAtual]
  prog.revisoesCruzadas[ti] = { aprovado, pct, data: Date.now() }
  salvarEstado()
  if (aprovado) { somConclusao() }

  document.getElementById('licao-content').innerHTML = `
    <div class="conclusao fadeIn">
      <span class="trophy">${aprovado?'🎉':'📚'}</span>
      <h2>${aprovado?'Revisão Cruzada aprovada!':'Quase lá!'}</h2>
      <p>Você acertou ${acertos} de ${perguntas.length} (${pct}%). ${aprovado?'Mínimo de 80% atingido — próxima trilha desbloqueada!':'Mínimo de 80% necessário. Revise os pontos errados e tente novamente.'}</p>
      ${!aprovado ? `<div class="erros-resumo"><h4>📌 Pontos para revisar:</h4><ul>${revisaoAtual.respostas.filter(r=>!r.correto).map(r=>`<li>${r.pergunta.substring(0,70)}...</li>`).join('')}</ul></div>` : ''}
      <button class="btn-acao ${aprovado?'continuar':'verificar'}" style="max-width:400px;margin:0 auto;display:block" onclick="navegarTela('revisao')">
        ${aprovado?'Continuar →':'Tentar novamente'}
      </button>
    </div>`
  renderHeader(); renderSidebar()
}

// Tela de listagem das revisões cruzadas disponíveis
function renderRevisaoTela() {
  const animal = ANIMAIS[estado.animalAtual]
  const prog = estado.progresso[estado.animalAtual]
  const trilhasComRevisao = animal.trilhas.map((t, ti) => ({ t, ti })).filter(({ti}) => ti >= 1)

  if (trilhasComRevisao.length === 0) {
    document.getElementById('revisao-content').innerHTML = `
      <h2 style="font-size:22px;font-weight:900;margin-bottom:12px">🔀 Revisão Cruzada</h2>
      <p style="color:var(--text2);font-size:14px">Disponível a partir da 2ª trilha de cada animal. Continue estudando!</p>`
    return
  }

  document.getElementById('revisao-content').innerHTML = `
    <h2 style="font-size:22px;font-weight:900;margin-bottom:8px">🔀 Revisão Cruzada</h2>
    <p style="color:var(--text2);font-size:13px;margin-bottom:20px">A cada trilha, você revisa tudo que veio antes junto — mínimo 80% para avançar.</p>
    ${trilhasComRevisao.map(({t, ti}) => {
      const disponivel = podeAcessarRevisao(animal, ti)
      const rev = prog.revisoesCruzadas[ti]
      const status = !disponivel ? 'Bloqueada — termine a trilha primeiro'
        : rev?.aprovado ? `Aprovado (${rev.pct}%) ✅`
        : rev ? `Reprovado (${rev.pct}%) — tente de novo`
        : 'Disponível agora!'
      const corBadge = !disponivel ? 'badge-gray' : rev?.aprovado ? 'badge-green' : rev ? 'badge-red' : 'badge-amber'
      return `<div class="trilha-card${!disponivel?' bloqueada':''}" onclick="${disponivel?`iniciarRevisaoCruzada(${ti})`:''}">
        <div class="trilha-icon" style="background:rgba(245,158,11,0.2)">🔀</div>
        <div class="trilha-info">
          <div class="trilha-nome">Revisão até "${t.nome}"</div>
          <div class="trilha-desc">Cruza trilhas 1${ti>1?` a ${ti+1}`:` e 2`}</div>
          <div class="trilha-meta"><span class="badge ${corBadge}">${status}</span></div>
        </div>
      </div>`
    }).join('')}`
}

function selecionarAnimal(key) {
  estado.animalAtual = key; salvarEstado(); renderHome()
}
function alertaBloqueado(key) {
  alert(`🔒 ${ANIMAIS[key].nome} está bloqueada!\n\nConclua todas as lições do animal anterior para desbloquear.`)
}
function iniciarTrilha(ti) {
  const a = ANIMAIS[estado.animalAtual]
  const t = a.trilhas[ti]
  if (!t.licoes.length) { alert('🚧 Lições desta trilha em desenvolvimento!'); return }
  // acha a primeira lição não feita
  const prog = estado.progresso[estado.animalAtual]
  const primeiraIdx = t.licoes.find(i => !prog.licoesFeitas.includes(a.licoes[i]?.id)) ?? t.licoes[0]
  abrirLicao(primeiraIdx)
}

// ── LIÇÃO ─────────────────────────────────────────────────────
function abrirLicao(idx) {
  const animal = ANIMAIS[estado.animalAtual]
  licaoAtual = animal.licoes[idx]
  if (!licaoAtual) return
  etapaAtual = 0; exIdx = 0
  respostasErradas = []; opcaoSelecionada = null; jaRespondeu = false
  navegarTela('licao')
  renderEtapa()
}

function renderEtapa() {
  const totalExercicios = licaoAtual.exercicios.length
  const totalEtapas = 2 + totalExercicios
  const pct = Math.round((etapaAtual / totalEtapas) * 100)

  const topHtml = `
    <div class="licao-top">
      <button class="btn-fechar" onclick="navegarTela('home')" title="Sair">✕</button>
      <div class="licao-progress-bar">
        <div class="licao-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="licao-xp-badge">+${licaoAtual.xp} XP</div>
    </div>`

  let bodyHtml = ''
  let footerHtml = ''

  if (etapaAtual === 0) {
    // TEORIA
    bodyHtml = `
      <div class="questao-label">📖 Aprender</div>
      <div class="teoria-box fadeIn">${licaoAtual.teoria}</div>`
    footerHtml = `<button class="btn-acao teoria" onclick="proximaEtapa()">Entendi →</button>`

  } else if (etapaAtual === 1) {
    // EXEMPLO
    bodyHtml = `
      <div class="questao-label">💡 Exemplo prático</div>
      <div class="teoria-box fadeIn">
        <h3>Veja como funciona na prática:</h3>
        ${licaoAtual.exemplo}
      </div>`
    footerHtml = `<button class="btn-acao teoria" onclick="proximaEtapa()">Praticar →</button>`

  } else {
    // EXERCÍCIO
    const ex = licaoAtual.exercicios[exIdx]
    opcaoSelecionada = null; jaRespondeu = false; inputCerto = false

    if (ex.tipo === 'multipla') {
      bodyHtml = `
        <div class="questao-label">Escolha a resposta correta</div>
        <div class="questao-titulo">${ex.pergunta}</div>
        <div class="opcoes">
          ${ex.opcoes.map((op, i) => `
            <button class="opcao" id="op${i}" onclick="selecionarOpcao(${i})">${op}</button>
          `).join('')}
        </div>
        <div class="feedback-bar" id="feedback"></div>`
      footerHtml = `<button class="btn-acao verificar" id="btn-acao" onclick="verificarResposta()" disabled>Verificar</button>`

    } else if (ex.tipo === 'completar') {
      bodyHtml = `
        <div class="questao-label">Complete o código</div>
        <div class="questao-titulo">${ex.pergunta}</div>
        <div class="completar-wrap">
          <div class="completar-codigo">${ex.codigo}</div>
          <input class="completar-input" id="resp-input" type="text"
            placeholder="Digite sua resposta..."
            oninput="onInputChange()"
            onkeydown="if(event.key==='Enter'&&!jaRespondeu)verificarResposta()">
        </div>
        <div class="feedback-bar" id="feedback"></div>`
      footerHtml = `<button class="btn-acao verificar" id="btn-acao" onclick="verificarResposta()" disabled>Verificar</button>`
    }
  }

  document.getElementById('licao-content').innerHTML = `
    <div class="licao-wrap">
      <div class="licao-body">
        ${topHtml}
        ${bodyHtml}
      </div>
      <div class="licao-footer">${footerHtml}</div>
    </div>`

  // foco no input se existir
  setTimeout(() => {
    const inp = document.getElementById('resp-input')
    if (inp) inp.focus()
  }, 100)
}

function selecionarOpcao(i) {
  if (jaRespondeu) return
  opcaoSelecionada = i
  document.querySelectorAll('.opcao').forEach((el, idx) => {
    el.classList.toggle('selecionada', idx === i)
  })
  const btn = document.getElementById('btn-acao')
  if (btn) btn.disabled = false
}

function onInputChange() {
  const inp = document.getElementById('resp-input')
  const btn = document.getElementById('btn-acao')
  if (!inp || !btn) return
  btn.disabled = inp.value.trim() === ''
}

function verificarResposta() {
  if (jaRespondeu) { proximaEtapa(); return }
  const ex = licaoAtual.exercicios[exIdx]
  let correto = false

  if (ex.tipo === 'multipla') {
    if (opcaoSelecionada === null) return
    correto = opcaoSelecionada === ex.correta
    jaRespondeu = true
    document.querySelectorAll('.opcao').forEach((el, i) => {
      el.disabled = true
      el.classList.remove('selecionada')
      if (i === ex.correta) el.classList.add('correta')
      else if (i === opcaoSelecionada && !correto) el.classList.add('errada')
    })
  } else {
    const inp = document.getElementById('resp-input')
    if (!inp || inp.value.trim() === '') return
    correto = inp.value.trim().toLowerCase() === ex.resposta.toLowerCase()
    jaRespondeu = true; inputCerto = correto
    inp.disabled = true
    inp.classList.add(correto ? 'correta' : 'errada')
  }

  if (!correto) registrarErro(ex.pergunta)
  if (correto) somAcerto(); else somErro()

  // Feedback estilo Duolingo
  const fb = document.getElementById('feedback')
  if (fb) {
    fb.className = `feedback-bar visivel ${correto ? 'ok' : 'erro'}`
    fb.innerHTML = `
      <div class="feedback-titulo">${correto ? '✅ Correto!' : '❌ Resposta errada'}</div>
      <div class="feedback-texto">${ex.explicacao}</div>`
  }

  const btn = document.getElementById('btn-acao')
  if (btn) {
    btn.textContent = 'Continuar'
    btn.className = 'btn-acao continuar'
    btn.disabled = false
    btn.onclick = proximaEtapa
  }
}

function proximaEtapa() {
  const totalEtapas = 2 + licaoAtual.exercicios.length
  if (etapaAtual < 1) { etapaAtual++; renderEtapa(); return }
  if (etapaAtual === 1) { etapaAtual++; exIdx = 0; renderEtapa(); return }
  // está em exercício
  if (exIdx < licaoAtual.exercicios.length - 1) {
    exIdx++; etapaAtual++; renderEtapa()
  } else {
    concluirLicao()
  }
}

function registrarErro(pergunta) {
  respostasErradas.push(pergunta)
  const erros = estado.progresso[estado.animalAtual].erros
  erros[pergunta] = (erros[pergunta] || 0) + 1
  salvarEstado()
}

function concluirLicao() {
  const prog = estado.progresso[estado.animalAtual]
  let xpGanho = 0
  if (!prog.licoesFeitas.includes(licaoAtual.id)) {
    prog.licoesFeitas.push(licaoAtual.id)
    xpGanho = licaoAtual.xp
    estado.xp += xpGanho
    salvarEstado()
    mostrarXpPopup(xpGanho)
    somXp()
    setTimeout(somConclusao, 250)
    verificarDesbloqueio()
  }
  renderHeader(); renderSidebar()

  const errosHtml = respostasErradas.length > 0 ? `
    <div class="erros-resumo">
      <h4>📌 Revise esses pontos (${respostasErradas.length} erro${respostasErradas.length>1?'s':''}):</h4>
      <ul>${respostasErradas.map(e=>`<li>${e.substring(0,80)}${e.length>80?'...':''}</li>`).join('')}</ul>
    </div>` : ''

  document.getElementById('licao-content').innerHTML = `
    <div class="conclusao fadeIn">
      <span class="trophy">${respostasErradas.length===0?'🏆':'📚'}</span>
      <h2>${respostasErradas.length===0?'Perfeito! Zero erros!':'Lição concluída!'}</h2>
      <p>${respostasErradas.length===0?'Você dominou essa lição. Continue assim!':
        `Você errou ${respostasErradas.length} questão(ões). A revisão ficou salva no seu perfil.`}</p>
      <div class="xp-ganho">⚡ +${xpGanho} XP</div>
      ${errosHtml}
      <button class="btn-acao continuar" style="max-width:400px;margin:0 auto;display:block"
        onclick="navegarTela('home')">Continuar →</button>
    </div>`
}

function verificarDesbloqueio() {
  const animal = ANIMAIS[estado.animalAtual]
  const prog = estado.progresso[estado.animalAtual]
  if (animal.licoes.length > 0 && animal.licoes.every(l => prog.licoesFeitas.includes(l.id))) {
    const ordem = ['coruja','elefante','tartaruga','lobo','corvo','leao']
    const prox = ordem[ordem.indexOf(estado.animalAtual)+1]
    if (prox && !estado.animaisDesbloqueados.includes(prox)) {
      estado.animaisDesbloqueados.push(prox); salvarEstado()
      setTimeout(() => alert(`🎉 ${ANIMAIS[prox].emoji} ${ANIMAIS[prox].nome} desbloqueada!`), 600)
    }
  }
}

function mostrarXpPopup(xp) {
  const el = document.createElement('div')
  el.className = 'xp-popup'; el.textContent = `+${xp} XP ⚡`
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 2200)
}

// ── PERFIL ────────────────────────────────────────────────────
function renderPerfil() {
  const totalFeitas = Object.values(estado.progresso).reduce((s,p)=>s+p.licoesFeitas.length,0)
  const todosErros = []
  Object.values(estado.progresso).forEach(p =>
    Object.entries(p.erros).forEach(([q,c]) => todosErros.push({q,c})))
  todosErros.sort((a,b)=>b.c-a.c)

  document.getElementById('perfil-content').innerHTML = `
    <h2 style="font-size:22px;font-weight:900;margin-bottom:20px">👤 Meu Perfil</h2>
    <div class="perfil-stats">
      <div class="stat-card"><div class="num">${estado.xp}</div><div class="lbl">XP Total</div></div>
      <div class="stat-card"><div class="num">${estado.streak}</div><div class="lbl">Dias seguidos</div></div>
      <div class="stat-card"><div class="num">${totalFeitas}</div><div class="lbl">Lições feitas</div></div>
      <div class="stat-card"><div class="num">${todosErros.reduce((s,e)=>s+e.c,0)}</div><div class="lbl">Erros totais</div></div>
    </div>
    <div class="debito-tecnico">
      <h3>📌 Débito Técnico — revise em ordem</h3>
      ${todosErros.length===0
        ? '<p style="color:var(--text3);font-size:14px">Nenhum erro ainda. Continue assim! 🎉</p>'
        : todosErros.slice(0,10).map(e=>`
          <div class="debito-item">
            <span>${e.q.substring(0,60)}${e.q.length>60?'...':''}</span>
            <span class="debito-count">${e.c}×</span>
          </div>`).join('')}
    </div>
    <button class="btn btn-secundario" style="margin-top:20px"
      onclick="if(confirm('Resetar todo o progresso?')){localStorage.clear();location.reload()}">
      🗑️ Resetar progresso
    </button>`
}

// ── TRILHAS COMPLETO ──────────────────────────────────────────
function renderTrilhasCompleto() {
  const animal = ANIMAIS[estado.animalAtual]
  const prog = estado.progresso[estado.animalAtual]
  document.getElementById('trilhas-content').innerHTML = `
    <h2 style="font-size:20px;font-weight:900;margin-bottom:20px">${animal.emoji} ${animal.nome}</h2>
    ${animal.trilhas.map((t,ti)=>{
      const licoesTrilha = t.licoes.map(i=>animal.licoes[i]).filter(Boolean)
      const licoesOk = licoesTrilha.every(l=>prog.licoesFeitas.includes(l.id))
      const bloq = ti>0 && !trilhaCompleta(animal,ti-1)
      const bloqPorRevisao = bloq && licoesOk === false ? false : (bloq && ti>=2 && !(prog.revisoesCruzadas[ti-1]?.aprovado))
      return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;overflow:hidden;margin-bottom:14px;${bloq?'opacity:0.45':''}">
        <div style="padding:14px 16px;display:flex;gap:12px;align-items:center;background:var(--surface2)">
          <div style="width:42px;height:42px;border-radius:10px;background:${t.bg};display:flex;align-items:center;justify-content:center;font-size:20px">${t.icon}</div>
          <div><div style="font-size:14px;font-weight:800">${t.nome}</div><div style="font-size:12px;color:var(--text2)">${t.desc}</div>
          ${bloqPorRevisao?'<div style="font-size:11px;color:#fcd34d;margin-top:2px">🔀 Aguardando Revisão Cruzada da trilha anterior</div>':''}</div>
          ${bloq?'<span style="margin-left:auto;font-size:20px">🔒</span>':''}
        </div>
        <div style="padding:0 16px">
          ${licoesTrilha.map((l,li)=>{
            const feita = prog.licoesFeitas.includes(l.id)
            return `<div style="display:flex;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid var(--border)">
              <span style="font-size:18px">${feita?'✅':'⭕'}</span>
              <span style="flex:1;font-size:14px;font-weight:600;color:${feita?'var(--green2)':'var(--text)'}">${l.titulo}</span>
              <span style="font-size:11px;color:var(--purple2);font-weight:700">+${l.xp} XP</span>
              ${!feita&&!bloq?`<button onclick="abrirLicao(${t.licoes[li]})"
                style="padding:6px 14px;font-size:12px;font-weight:700;background:var(--purple);color:#fff;border:none;border-radius:8px;cursor:pointer">
                ${prog.licoesFeitas.includes(l.id)?'Revisar':'Iniciar'}</button>`:''}
            </div>`}).join('') || '<p style="padding:12px 0;color:var(--text3);font-size:13px">🚧 Em desenvolvimento</p>'}
        </div>
      </div>`}).join('')}`
}

// ── NAVEGAÇÃO ─────────────────────────────────────────────────
function navegarTela(id) {
  document.querySelectorAll('.tela').forEach(t=>t.classList.remove('ativa'))
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('ativo'))
  document.querySelectorAll('.sidebar-item').forEach(s=>s.classList.remove('ativo'))
  document.getElementById(`tela-${id}`)?.classList.add('ativa')
  document.querySelector(`.nav-item[onclick*="'${id}'"]`)?.classList.add('ativo')
  const si = document.getElementById(`si-${id}`)
  if (si) si.classList.add('ativo')
  // scroll topo
  window.scrollTo(0, 0)
  if (id==='home') renderHome()
  if (id==='perfil') renderPerfil()
  if (id==='trilhas') renderTrilhasCompleto()
  if (id==='revisao') renderRevisaoTela()
  if (id==='ranking') {
    const r = document.getElementById('rank-xp')
    if (r) r.textContent = estado.xp+' XP'
  }
}

// ── INIT ──────────────────────────────────────────────────────
verificarStreak()
renderSidebar()
renderHeader()
navegarTela('home')
