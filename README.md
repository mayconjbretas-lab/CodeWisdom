// ============================================================
// CodeWisdom — app.js
// Lógica completa: progresso, XP, lições, exercícios
// ============================================================

// ── ESTADO GLOBAL ────────────────────────────────────────────
const ESTADO_INICIAL = {
  xp: 0,
  streak: 0,
  ultimoAcesso: null,
  animalAtual: 'coruja',
  animaisDesbloqueados: ['coruja'],
  progresso: {
    coruja: { licoesFeitas: [], erros: {} },
    elefante: { licoesFeitas: [], erros: {} },
    tartaruga: { licoesFeitas: [], erros: {} },
    lobo: { licoesFeitas: [], erros: {} },
    corvo: { licoesFeitas: [], erros: {} },
    leao: { licoesFeitas: [], erros: {} }
  }
}

let estado = carregarEstado()
let licaoAtual = null
let etapaAtual = 0 // 0=teoria, 1=exemplo, 2..=exercicios
let exercicioAtual = 0
let respostasErradas = []
let respondido = false

// ── DADOS DOS ANIMAIS ─────────────────────────────────────────
const ANIMAIS = {
  coruja: {
    emoji: '🦉', nome: 'Athena, a Coruja',
    quote: '"A lógica é a raiz de tudo"',
    fase: 'Fase 1 · Lógica & Fundamentos',
    bg: 'linear-gradient(135deg,#2d2066,#4c1d95)',
    heroBg: '#0f3460',
    cor: '#a78bfa',
    licoes: typeof CORUJA_LICOES !== 'undefined' ? CORUJA_LICOES : [],
    trilhas: [
      { icon: '🧩', bg: 'rgba(124,111,247,0.2)', nome: 'Lógica de programação', desc: 'Variáveis, condições e loops', licoes: [0,1,2,3,4,5] },
      { icon: '⚙️', bg: 'rgba(16,185,129,0.2)', nome: 'Funções e estruturas', desc: 'Funções, arrays, objetos, escopo', licoes: [6,7,8,9] },
      { icon: '🔍', bg: 'rgba(245,158,11,0.2)', nome: 'Algoritmos', desc: 'Busca, ordenação, Big O, recursão', licoes: [10,11,12,13] },
      { icon: '📝', bg: 'rgba(239,68,68,0.2)', nome: 'Mini-Prova', desc: 'Avaliação da Fase 1', licoes: [14] }
    ]
  },
  elefante: {
    emoji: '🐘', nome: 'Memo, o Elefante',
    quote: '"Um bom dev nunca esquece"',
    fase: 'Fase 2 · Backend & Dados',
    bg: 'linear-gradient(135deg,#1a3a4a,#1e40af)',
    heroBg: '#0d2a38',
    cor: '#93c5fd',
    licoes: [],
    trilhas: [
      { icon: '🗄️', bg: 'rgba(59,130,246,0.2)', nome: 'SQL Completo', desc: 'SELECT, JOIN, INDEX, transações', licoes: [] },
      { icon: '📦', bg: 'rgba(16,185,129,0.2)', nome: 'APIs REST', desc: 'Node.js, Express, autenticação', licoes: [] },
      { icon: '🔐', bg: 'rgba(124,111,247,0.2)', nome: 'Segurança Backend', desc: 'JWT, OAuth, boas práticas', licoes: [] }
    ]
  },
  tartaruga: {
    emoji: '🐢', nome: 'Zen, a Tartaruga',
    quote: '"Consistência vence velocidade"',
    fase: 'Fase 3 · Frontend & Design',
    bg: 'linear-gradient(135deg,#1a3a2a,#065f46)',
    heroBg: '#0d2a1a',
    cor: '#6ee7b7',
    licoes: [],
    trilhas: [
      { icon: '🎨', bg: 'rgba(16,185,129,0.2)', nome: 'HTML & CSS', desc: 'Layouts, Flexbox, Grid, animações', licoes: [] },
      { icon: '⚡', bg: 'rgba(245,158,11,0.2)', nome: 'JavaScript', desc: 'DOM, eventos, fetch API', licoes: [] },
      { icon: '⚛️', bg: 'rgba(124,111,247,0.2)', nome: 'React', desc: 'Componentes, hooks, estado', licoes: [] }
    ]
  },
  lobo: {
    emoji: '🐺', nome: 'Aro, o Lobo',
    quote: '"Código em equipe é mais forte"',
    fase: 'Fase 4 · Engenharia de Software',
    bg: 'linear-gradient(135deg,#2a1a1a,#7f1d1d)',
    heroBg: '#1a0d0d',
    cor: '#fca5a5',
    licoes: [],
    trilhas: [
      { icon: '🏗️', bg: 'rgba(245,158,11,0.2)', nome: 'SOLID & Padrões', desc: 'Clean code, Design Patterns', licoes: [] },
      { icon: '🔀', bg: 'rgba(59,130,246,0.2)', nome: 'Git & CI/CD', desc: 'Git avançado, pipelines', licoes: [] },
      { icon: '🐳', bg: 'rgba(124,111,247,0.2)', nome: 'Docker & Cloud', desc: 'Containers, AWS, GCP', licoes: [] }
    ]
  },
  corvo: {
    emoji: '🐦‍⬛', nome: 'Nyx, o Corvo',
    quote: '"Hackeie o impossível"',
    fase: 'Fase 5 · IA, Segurança & Dados',
    bg: 'linear-gradient(135deg,#0d0d1a,#1e1b4b)',
    heroBg: '#06060f',
    cor: '#c4b5fd',
    licoes: [],
    trilhas: [
      { icon: '🤖', bg: 'rgba(124,111,247,0.2)', nome: 'IA & Machine Learning', desc: 'Python, modelos, LLMs', licoes: [] },
      { icon: '🔒', bg: 'rgba(239,68,68,0.2)', nome: 'Kali Linux & Pentest', desc: 'OWASP, Metasploit, Burp', licoes: [] },
      { icon: '📊', bg: 'rgba(16,185,129,0.2)', nome: 'Data Science', desc: 'Pandas, visualizações, insights', licoes: [] }
    ]
  },
  leao: {
    emoji: '🦁', nome: 'Rex, o Leão',
    quote: '"O mestre hackeia o mundo físico"',
    fase: 'Era Bônus · Hardware Hacking',
    bg: 'linear-gradient(135deg,#2a1800,#78350f)',
    heroBg: '#1a0e00',
    cor: '#fcd34d',
    licoes: [],
    trilhas: [
      { icon: '📡', bg: 'rgba(245,158,11,0.2)', nome: 'ESP32 & Arduino', desc: 'C/C++, firmware, IoT', licoes: [] },
      { icon: '🦈', bg: 'rgba(59,130,246,0.2)', nome: 'M5Shark & Flipper', desc: 'Ferramentas de hacking WiFi', licoes: [] },
      { icon: '📻', bg: 'rgba(236,72,153,0.2)', nome: 'HackRF & SDR', desc: 'Rádio frequência, replay attacks', licoes: [] }
    ]
  }
}

// ── PERSISTÊNCIA ──────────────────────────────────────────────
function carregarEstado() {
  try {
    const salvo = localStorage.getItem('cw_estado')
    return salvo ? { ...ESTADO_INICIAL, ...JSON.parse(salvo) } : { ...ESTADO_INICIAL }
  } catch { return { ...ESTADO_INICIAL } }
}

function salvarEstado() {
  localStorage.setItem('cw_estado', JSON.stringify(estado))
}

// ── STREAK ────────────────────────────────────────────────────
function verificarStreak() {
  const hoje = new Date().toDateString()
  const ontem = new Date(Date.now() - 86400000).toDateString()
  if (estado.ultimoAcesso === hoje) return
  if (estado.ultimoAcesso === ontem) estado.streak++
  else if (estado.ultimoAcesso !== null) estado.streak = 1
  else estado.streak = 1
  estado.ultimoAcesso = hoje
  salvarEstado()
}

// ── RENDER HEADER ─────────────────────────────────────────────
function renderHeader() {
  document.getElementById('xp-val').textContent = `⚡ ${estado.xp} XP`
  document.getElementById('streak-val').textContent = `🔥 ${estado.streak} dias`
}

// ── TELA INICIAL ──────────────────────────────────────────────
function renderHome() {
  const animal = ANIMAIS[estado.animalAtual]
  const prog = estado.progresso[estado.animalAtual]
  const totalLicoes = animal.licoes.length
  const feitas = prog.licoesFeitas.length
  const pct = totalLicoes > 0 ? Math.round((feitas / totalLicoes) * 100) : 0

  // mascotes
  const gridHtml = Object.entries(ANIMAIS).map(([key, a]) => {
    const desbloqueado = estado.animaisDesbloqueados.includes(key)
    const p = estado.progresso[key]
    const tot = a.licoes.length
    const f = p.licoesFeitas.length
    const pctMini = tot > 0 ? (f / tot) * 100 : 0
    return `
      <div class="mascot-btn ${estado.animalAtual === key ? 'ativo' : ''} ${!desbloqueado ? 'bloqueado' : ''}"
           onclick="${desbloqueado ? `selecionarAnimal('${key}')` : `mostrarBloqueado('${key}')`}">
        <span class="e">${desbloqueado ? a.emoji : '🔒'}</span>
        <span>${a.emoji === a.emoji && desbloqueado ? key.charAt(0).toUpperCase() + key.slice(1) : '???'}</span>
        <div class="progresso-mini"><div class="progresso-mini-fill" style="width:${pctMini}%"></div></div>
      </div>`
  }).join('')

  // trilhas
  const trilhasHtml = animal.trilhas.map((t, ti) => {
    const licoesT = t.licoes.map(i => animal.licoes[i]).filter(Boolean)
    const feitasT = licoesT.filter(l => prog.licoesFeitas.includes(l.id)).length
    const bloqueada = ti > 0 && !todasFeitasTrilha(animal, ti - 1)
    const status = bloqueada ? 'Bloqueada' : feitasT === 0 ? 'Não iniciada' : feitasT === licoesT.length ? 'Concluída ✅' : 'Em andamento'
    const badgeClass = bloqueada ? 'badge-gray' : feitasT === licoesT.length ? 'badge-green' : feitasT > 0 ? 'badge-blue' : 'badge-gray'
    const estrelas = feitasT === 0 ? 0 : feitasT === licoesT.length ? 3 : feitasT >= licoesT.length / 2 ? 2 : 1
    return `
      <div class="trilha-card ${bloqueada ? 'bloqueada' : ''}" onclick="${!bloqueada ? `iniciarTrilha(${ti})` : ''}">
        <div class="trilha-icon" style="background:${t.bg}">${t.icon}</div>
        <div class="trilha-info">
          <div class="trilha-nome">${t.nome}</div>
          <div class="trilha-desc">${t.desc}</div>
          <div class="trilha-meta">
            <span class="badge ${badgeClass}">${status}</span>
            <div class="estrelas">${[1,2,3].map(i => `<span class="estrela ${i <= estrelas ? '' : 'vazia'}">★</span>`).join('')}</div>
          </div>
        </div>
        ${bloqueada ? '<span style="font-size:18px;color:var(--text3)">🔒</span>' : ''}
      </div>`
  }).join('')

  // nós de lições
  const licoesList = animal.licoes
  const nosHtml = licoesList.slice(0, 8).map((l, i) => {
    const feita = prog.licoesFeitas.includes(l.id)
    const ehAtual = !feita && (i === 0 || prog.licoesFeitas.includes(licoesList[i-1]?.id))
    const cls = feita ? 'feito' : ehAtual ? 'atual' : 'travado'
    const linhaFeita = feita ? 'feita' : ''
    return `${i > 0 ? `<div class="no-linha ${linhaFeita}"></div>` : ''}
      <div class="no ${cls}" title="${l.titulo}" onclick="${!feita && ehAtual ? `abrirLicao(${i})` : ''}">${feita ? '✓' : ehAtual ? animal.emoji : '🔒'}</div>`
  }).join('')

  document.getElementById('home-content').innerHTML = `
    <div class="home-hero">
      <h1>Code<span>Wisdom</span></h1>
      <p>Do zero ao especialista — aprenda programação como um jogo</p>
    </div>
    <div class="mascot-grid">${gridHtml}</div>
    <div class="animal-destaque">
      <div class="animal-header" style="background:${animal.heroBg}">
        <div class="animal-avatar" style="background:${animal.bg}">${animal.emoji}</div>
        <div class="animal-info">
          <div class="fase-pill">${animal.fase}</div>
          <h2>${animal.nome}</h2>
          <div class="quote" style="color:var(--text3)">${animal.quote}</div>
        </div>
      </div>
      <div class="progresso-barra">
        <div class="prog-lbl">
          <span>Lição ${feitas} de ${totalLicoes}</span>
          <span>${pct}%</span>
        </div>
        <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="trilhas-titulo">Trilhas de hoje</div>
      ${trilhasHtml}
      <div class="nos-licoes">
        <div class="nos-titulo">Próximas lições</div>
        <div class="nos-row">${nosHtml}</div>
      </div>
    </div>`
}

function todasFeitasTrilha(animal, ti) {
  const t = animal.trilhas[ti]
  const prog = estado.progresso[estado.animalAtual]
  const licoesTrilha = t.licoes.map(i => animal.licoes[i]).filter(Boolean)
  return licoesTrilha.every(l => prog.licoesFeitas.includes(l.id))
}

function selecionarAnimal(key) {
  estado.animalAtual = key
  salvarEstado()
  renderHome()
}

function mostrarBloqueado(key) {
  const animal = ANIMAIS[key]
  alert(`🔒 ${animal.nome} ainda está bloqueada!\n\nConclua todas as lições e passe na Prova Final do animal anterior para desbloquear.`)
}

function iniciarTrilha(ti) {
  const animal = ANIMAIS[estado.animalAtual]
  const trilha = animal.trilhas[ti]
  if (!trilha.licoes.length) { alert('Lições desta trilha ainda estão sendo desenvolvidas! 🚧'); return }
  abrirLicao(trilha.licoes[0])
}

// ── LIÇÃO ─────────────────────────────────────────────────────
function abrirLicao(idx) {
  const animal = ANIMAIS[estado.animalAtual]
  licaoAtual = animal.licoes[idx]
  if (!licaoAtual) return
  etapaAtual = 0
  exercicioAtual = 0
  respostasErradas = []
  navegarTela('licao')
  renderLicao()
}

function renderLicao() {
  if (!licaoAtual) return
  const totalEtapas = 2 + licaoAtual.exercicios.length // teoria + exemplo + exercícios
  const etapasHtml = Array.from({length: totalEtapas}, (_, i) =>
    `<div class="etapa-dot ${i < etapaAtual ? 'feita' : i === etapaAtual ? 'ativa' : ''}"></div>`
  ).join('')

  let conteudo = ''
  if (etapaAtual === 0) {
    conteudo = `
      <div class="teoria-box fadeIn">
        ${licaoAtual.teoria}
      </div>
      <button class="btn btn-primario" onclick="proximaEtapa()">Entendi — ver exemplo →</button>`
  } else if (etapaAtual === 1) {
    conteudo = `
      <div class="teoria-box fadeIn">
        <h3>💡 Exemplo prático:</h3>
        ${licaoAtual.exemplo}
      </div>
      <button class="btn btn-primario" onclick="proximaEtapa()">Praticar →</button>`
  } else {
    const exIdx = etapaAtual - 2
    const ex = licaoAtual.exercicios[exIdx]
    conteudo = renderExercicio(ex, exIdx)
  }

  document.getElementById('licao-content').innerHTML = `
    <div class="licao-header">
      <button class="btn-voltar" onclick="navegarTela('home')">← Voltar</button>
      <span class="licao-titulo">${licaoAtual.titulo}</span>
      <span class="licao-xp">+${licaoAtual.xp} XP</span>
    </div>
    <div class="etapas">${etapasHtml}</div>
    <div id="conteudo-licao">${conteudo}</div>`
}

function renderExercicio(ex, idx) {
  const num = idx + 1
  const total = licaoAtual.exercicios.length
  respondido = false

  if (ex.tipo === 'multipla') {
    const opcoesHtml = ex.opcoes.map((op, i) =>
      `<button class="opcao" id="op-${i}" onclick="responderMultipla(${i})">${op}</button>`
    ).join('')
    return `
      <div class="exercicio-box fadeIn">
        <div class="exercicio-num">Exercício ${num} de ${total}</div>
        <div class="exercicio-pergunta">${ex.pergunta}</div>
        <div class="opcoes">${opcoesHtml}</div>
        <div class="feedback" id="feedback"></div>
      </div>
      <button class="btn btn-primario" id="btn-proxima" onclick="proximaEtapa()" disabled>Próximo →</button>`
  }

  if (ex.tipo === 'completar') {
    return `
      <div class="exercicio-box fadeIn">
        <div class="exercicio-num">Exercício ${num} de ${total}</div>
        <div class="exercicio-pergunta">${ex.pergunta}</div>
        <div class="completar-wrap">
          <div class="completar-codigo">${ex.codigo}</div>
          <input class="completar-input" id="resp-input" type="text" placeholder="Digite sua resposta..."
            onkeydown="if(event.key==='Enter')responderCompletar()">
        </div>
        <div class="feedback" id="feedback"></div>
      </div>
      <button class="btn btn-secundario" onclick="responderCompletar()">Verificar</button>
      <button class="btn btn-primario" id="btn-proxima" onclick="proximaEtapa()" disabled>Próximo →</button>`
  }
}

function responderMultipla(idx) {
  if (respondido) return
  respondido = true
  const ex = licaoAtual.exercicios[etapaAtual - 2]
  const correta = idx === ex.correta
  document.querySelectorAll('.opcao').forEach(b => b.disabled = true)
  document.getElementById(`op-${idx}`).classList.add(correta ? 'correta' : 'errada')
  if (!correta) {
    document.getElementById(`op-${ex.correta}`).classList.add('correta')
    registrarErro(ex.pergunta)
  }
  mostrarFeedback(correta, ex.explicacao)
  document.getElementById('btn-proxima').disabled = false
}

function responderCompletar() {
  if (respondido) return
  const ex = licaoAtual.exercicios[etapaAtual - 2]
  const input = document.getElementById('resp-input')
  if (!input) return
  const resp = input.value.trim().toLowerCase()
  const correta = resp === ex.resposta.toLowerCase()
  respondido = true
  input.disabled = true
  input.classList.add(correta ? 'correta' : 'errada')
  if (!correta) registrarErro(ex.pergunta)
  mostrarFeedback(correta, ex.explicacao)
  document.getElementById('btn-proxima').disabled = false
}

function mostrarFeedback(ok, texto) {
  const el = document.getElementById('feedback')
  if (!el) return
  el.className = `feedback visivel ${ok ? 'ok' : 'erro'}`
  el.innerHTML = `<strong>${ok ? '✅ Correto!' : '❌ Incorreto'}</strong>${texto}`
}

function registrarErro(pergunta) {
  respostasErradas.push(pergunta)
  const erros = estado.progresso[estado.animalAtual].erros
  erros[pergunta] = (erros[pergunta] || 0) + 1
  salvarEstado()
}

function proximaEtapa() {
  const totalEtapas = 2 + licaoAtual.exercicios.length
  if (etapaAtual < totalEtapas - 1) {
    etapaAtual++
    renderLicao()
  } else {
    concluirLicao()
  }
}

function concluirLicao() {
  const prog = estado.progresso[estado.animalAtual]
  if (!prog.licoesFeitas.includes(licaoAtual.id)) {
    prog.licoesFeitas.push(licaoAtual.id)
    estado.xp += licaoAtual.xp
    salvarEstado()
    mostrarXpPopup(licaoAtual.xp)
    verificarDesbloqueio()
  }

  const errosHtml = respostasErradas.length > 0
    ? `<div class="erros-box">
        <h4>📌 Pontos para revisar (${respostasErradas.length} erro${respostasErradas.length > 1 ? 's' : ''}):</h4>
        <ul>${respostasErradas.map(e => `<li>${e}</li>`).join('')}</ul>
       </div>` : ''

  document.getElementById('conteudo-licao').innerHTML = `
    <div class="conclusao">
      <div class="trophy">${respostasErradas.length === 0 ? '🏆' : '📚'}</div>
      <h2>${respostasErradas.length === 0 ? 'Perfeito!' : 'Lição Concluída!'}</h2>
      <p>${respostasErradas.length === 0 ? 'Nenhum erro! Você dominou essa lição.' : `Você errou ${respostasErradas.length} questão(ões). Revise os pontos abaixo.`}</p>
      <div class="xp-ganho">⚡ +${licaoAtual.xp} XP</div>
      ${errosHtml}
      <button class="btn btn-primario" onclick="navegarTela('home');renderHome()">Continuar →</button>
    </div>`
  renderHeader()
}

function verificarDesbloqueio() {
  const animal = ANIMAIS[estado.animalAtual]
  const prog = estado.progresso[estado.animalAtual]
  const todasFeitas = animal.licoes.every(l => prog.licoesFeitas.includes(l.id))
  if (todasFeitas) {
    const ordem = ['coruja', 'elefante', 'tartaruga', 'lobo', 'corvo', 'leao']
    const idx = ordem.indexOf(estado.animalAtual)
    if (idx < ordem.length - 1) {
      const proximo = ordem[idx + 1]
      if (!estado.animaisDesbloqueados.includes(proximo)) {
        estado.animaisDesbloqueados.push(proximo)
        salvarEstado()
        setTimeout(() => alert(`🎉 Parabéns! Você desbloqueou ${ANIMAIS[proximo].emoji} ${ANIMAIS[proximo].nome}!`), 500)
      }
    }
  }
}

function mostrarXpPopup(xp) {
  const el = document.createElement('div')
  el.className = 'xp-popup'
  el.textContent = `+${xp} XP ⚡`
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 2000)
}

// ── PERFIL ────────────────────────────────────────────────────
function renderPerfil() {
  const totalXp = estado.xp
  const totalFeitas = Object.values(estado.progresso).reduce((s, p) => s + p.licoesFeitas.length, 0)
  const totalErros = Object.values(estado.progresso).reduce((s, p) => {
    return s + Object.values(p.erros).reduce((a, b) => a + b, 0)
  }, 0)

  // débito técnico
  const todosErros = []
  Object.values(estado.progresso).forEach(p => {
    Object.entries(p.erros).forEach(([pergunta, count]) => {
      todosErros.push({ pergunta, count })
    })
  })
  todosErros.sort((a, b) => b.count - a.count)

  const debitoHtml = todosErros.length === 0
    ? '<p style="color:var(--text3);font-size:14px">Nenhum erro registrado ainda. Continue estudando!</p>'
    : todosErros.slice(0, 8).map(e => `
        <div class="debito-item">
          <span>📌 ${e.pergunta.substring(0, 50)}${e.pergunta.length > 50 ? '...' : ''}</span>
          <span class="debito-count">${e.count}x</span>
        </div>`).join('')

  document.getElementById('perfil-content').innerHTML = `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:20px">👤 Meu Perfil</h2>
    <div class="perfil-stats">
      <div class="stat-card"><div class="num">${totalXp}</div><div class="lbl">XP Total</div></div>
      <div class="stat-card"><div class="num">${estado.streak}</div><div class="lbl">Dias seguidos</div></div>
      <div class="stat-card"><div class="num">${totalFeitas}</div><div class="lbl">Lições feitas</div></div>
      <div class="stat-card"><div class="num">${totalErros}</div><div class="lbl">Erros totais</div></div>
    </div>
    <div class="debito-tecnico">
      <h3>📌 Débito Técnico — revisão prioritária</h3>
      ${debitoHtml}
    </div>
    <button class="btn btn-secundario" style="margin-top:20px" onclick="if(confirm('Resetar todo o progresso?')){localStorage.clear();location.reload()}">
      🗑️ Resetar progresso
    </button>`
}

// ── NAVEGAÇÃO ─────────────────────────────────────────────────
function navegarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'))
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('ativo'))
  document.getElementById(`tela-${id}`).classList.add('ativa')
  const navMap = { home: 0, trilhas: 1, licao: 2, perfil: 4 }
  const navItems = document.querySelectorAll('.nav-item')
  if (navMap[id] !== undefined) navItems[navMap[id]]?.classList.add('ativo')

  if (id === 'home') renderHome()
  if (id === 'perfil') renderPerfil()
  if (id === 'trilhas') renderTrilhasCompleto()
}

function renderTrilhasCompleto() {
  const animal = ANIMAIS[estado.animalAtual]
  const prog = estado.progresso[estado.animalAtual]

  const html = animal.trilhas.map((t, ti) => {
    const licoesTrilha = t.licoes.map(i => animal.licoes[i]).filter(Boolean)
    const bloqueada = ti > 0 && !todasFeitasTrilha(animal, ti - 1)
    const licoesHtml = licoesTrilha.map((l, li) => {
      const feita = prog.licoesFeitas.includes(l.id)
      return `<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:18px">${feita ? '✅' : '○'}</span>
        <span style="flex:1;font-size:14px;color:${feita ? 'var(--text)' : 'var(--text2)'}">${l.titulo}</span>
        <span style="font-size:11px;color:var(--purple2);font-weight:700">+${l.xp} XP</span>
        ${!feita && !bloqueada ? `<button class="btn" style="padding:4px 12px;font-size:12px;background:var(--purple);color:#fff;border-radius:8px" onclick="abrirLicao(${t.licoes[li]})">Iniciar</button>` : ''}
      </div>`
    }).join('')

    return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;overflow:hidden;margin-bottom:16px;${bloqueada ? 'opacity:0.5' : ''}">
      <div style="padding:14px 16px;display:flex;gap:12px;align-items:center;background:var(--surface2)">
        <div style="width:40px;height:40px;border-radius:10px;background:${t.bg};display:flex;align-items:center;justify-content:center;font-size:20px">${t.icon}</div>
        <div>
          <div style="font-size:15px;font-weight:700">${t.nome}</div>
          <div style="font-size:12px;color:var(--text2)">${t.desc}</div>
        </div>
        ${bloqueada ? '<span style="margin-left:auto;font-size:20px">🔒</span>' : ''}
      </div>
      <div style="padding:0 16px">${licoesHtml || '<p style="padding:12px 0;color:var(--text3);font-size:13px">🚧 Lições em desenvolvimento</p>'}</div>
    </div>`
  }).join('')

  document.getElementById('trilhas-content').innerHTML = `
    <h2 style="font-size:22px;font-weight:800;margin-bottom:20px">${animal.emoji} ${animal.nome}</h2>
    ${html}`
}

// ── INIT ──────────────────────────────────────────────────────
verificarStreak()
renderHeader()
navegarTela('home')
