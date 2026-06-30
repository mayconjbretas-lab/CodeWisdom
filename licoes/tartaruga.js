const TARTARUGA_LICOES = [
  { id:'t1', titulo:'HTML — estrutura da web', xp:100,
    teoria:`<h3>🐢 Zen diz:</h3><p>HTML é o esqueleto de toda página web. Cada elemento é uma <strong>tag</strong> que diz ao navegador o que é aquele conteúdo.</p><div class="code-example"><span class="c-cm">&lt;!-- Estrutura básica --&gt;</span>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Minha página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Título principal&lt;/h1&gt;
    &lt;p&gt;Um parágrafo de texto.&lt;/p&gt;
    &lt;a href="https://google.com"&gt;Link&lt;/a&gt;
    &lt;img src="foto.jpg" alt="Descrição"&gt;
  &lt;/body&gt;
&lt;/html&gt;</div><p><strong>Tags semânticas</strong> — dizem o significado do conteúdo:</p><div class="code-example">&lt;header&gt;   → cabeçalho
&lt;nav&gt;      → navegação
&lt;main&gt;     → conteúdo principal
&lt;article&gt;  → artigo independente
&lt;section&gt;  → seção temática
&lt;aside&gt;    → conteúdo lateral
&lt;footer&gt;   → rodapé</div>`,
    exemplo:`<div class="code-example">&lt;!-- Card de produto semântico --&gt;
&lt;article class="card"&gt;
  &lt;header&gt;
    &lt;h2&gt;Gasolina Aditivada&lt;/h2&gt;
    &lt;span class="badge"&gt;Disponível&lt;/span&gt;
  &lt;/header&gt;
  &lt;p&gt;Combustível premium para seu veículo.&lt;/p&gt;
  &lt;footer&gt;
    &lt;strong&gt;R$ 6,49/L&lt;/strong&gt;
    &lt;button&gt;Comprar&lt;/button&gt;
  &lt;/footer&gt;
&lt;/article&gt;</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual tag define o título principal de uma página?',opcoes:['<title>','<h1>','<header>','<main>'],correta:1,explicacao:'<h1> é o título de nível 1 — o mais importante da página. <title> aparece na aba do navegador, não no conteúdo.'},
      {tipo:'multipla',pergunta:'O que é HTML semântico?',opcoes:['HTML mais colorido','Usar tags que descrevem o significado do conteúdo','HTML com JavaScript','HTML minificado'],correta:1,explicacao:'Tags semânticas como <article>, <nav>, <header> dizem o que o conteúdo significa — não só como parece. Isso ajuda SEO, acessibilidade e leitores de tela.'},
      {tipo:'completar',pergunta:'Complete a tag para criar um link:',codigo:'<___ href="https://google.com">Google</___>', resposta:'a',explicacao:'<a> (anchor) cria links. href define o destino. target="_blank" abre em nova aba.'}
    ]
  },
  { id:'t2', titulo:'CSS — estilizando a web', xp:100,
    teoria:`<h3>🐢 Zen diz:</h3><p>CSS controla a aparência — cores, tamanhos, posicionamento. Funciona com seletores que apontam para elementos HTML.</p><div class="code-example"><span class="c-cm">/* Seletor de tag */</span>
h1 { color: #7c6ff7; font-size: 32px; }

<span class="c-cm">/* Seletor de classe */</span>
.card { background: #1a1a2e; border-radius: 16px; }

<span class="c-cm">/* Seletor de id */</span>
#header { position: sticky; top: 0; }

<span class="c-cm">/* Pseudo-classe */</span>
button:hover { background: #5a4fd6; transform: scale(1.05); }

<span class="c-cm">/* Variáveis CSS */</span>
:root { --purple: #7c6ff7; --bg: #0d0d1a; }
.btn { background: var(--purple); }</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">/* Box model — todo elemento é uma caixa */</span>
.card {
  width: 300px;
  padding: 20px;       /* espaço interno */
  margin: 16px;        /* espaço externo */
  border: 1px solid #333;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual a diferença entre padding e margin?',opcoes:['São iguais','padding é espaço interno, margin é espaço externo','margin é interno, padding é externo','padding só funciona em flex'],correta:1,explicacao:'padding é o espaço entre o conteúdo e a borda do elemento. margin é o espaço entre o elemento e os elementos ao redor.'},
      {tipo:'multipla',pergunta:'Como criar uma variável CSS?',opcoes:['var nome = valor','$nome: valor','--nome: valor dentro de :root','let nome = valor'],correta:2,explicacao:'Variáveis CSS são declaradas com -- (dois hífens) e acessadas com var(--nome). O :root aplica ao elemento raiz, tornando disponível globalmente.'},
      {tipo:'completar',pergunta:'Complete para aplicar um estilo ao hover de um botão:',codigo:'button:___ { background: blue; }',resposta:'hover',explicacao:':hover é uma pseudo-classe que aplica estilos quando o mouse está sobre o elemento. Outros: :focus, :active, :visited, :first-child.'}
    ]
  },
  { id:'t3', titulo:'Flexbox — layout moderno', xp:100,
    teoria:`<h3>🐢 Zen diz:</h3><p>Flexbox é o sistema de layout mais usado no CSS moderno. Com uma linha você alinha, distribui e organiza elementos.</p><div class="code-example">.container {
  display: flex;

  <span class="c-cm">/* direção */</span>
  flex-direction: row;      <span class="c-cm">/* → (padrão) */</span>
  flex-direction: column;   <span class="c-cm">/* ↓ */</span>

  <span class="c-cm">/* alinhamento no eixo principal */</span>
  justify-content: center;
  justify-content: space-between;
  justify-content: flex-end;

  <span class="c-cm">/* alinhamento no eixo cruzado */</span>
  align-items: center;
  align-items: stretch;

  <span class="c-cm">/* quebrar linha */</span>
  flex-wrap: wrap;
  gap: 16px;      <span class="c-cm">/* espaço entre itens */</span>
}</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">/* Centralizar elemento — clássico do Flexbox */</span>
.centralizado {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

<span class="c-cm">/* Card grid responsivo */</span>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card { flex: 1 1 280px; } <span class="c-cm">/* cresce, encolhe, base 280px */</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que justify-content: space-between faz?',opcoes:['Centraliza tudo','Distribui os itens com espaço igual entre eles','Empurra tudo para a direita','Quebra em múltiplas linhas'],correta:1,explicacao:'space-between coloca o máximo de espaço ENTRE os itens — o primeiro fica na borda esquerda e o último na borda direita.'},
      {tipo:'multipla',pergunta:'Qual propriedade centraliza verticalmente em Flexbox?',opcoes:['justify-content: center','vertical-align: middle','align-items: center','margin: auto'],correta:2,explicacao:'align-items centraliza no eixo cruzado (perpendicular ao flex-direction). Com flex-direction: row, o eixo cruzado é vertical.'},
      {tipo:'completar',pergunta:'Complete para criar espaço de 20px entre os itens flex:',codigo:'.flex { display: flex; ___: 20px; }',resposta:'gap',explicacao:'gap define o espaço entre itens flex ou grid. É mais prático que usar margin pois não cria espaço extra nas bordas.'}
    ]
  },
  { id:'t4', titulo:'CSS Grid — layouts bidimensionais', xp:110,
    teoria:`<h3>🐢 Zen diz:</h3><p>Grid é o sistema de layout 2D do CSS — controla linhas E colunas ao mesmo tempo. Ideal para layouts de página completos.</p><div class="code-example">.grid {
  display: grid;

  <span class="c-cm">/* 3 colunas iguais */</span>
  grid-template-columns: 1fr 1fr 1fr;
  
  <span class="c-cm">/* Atalho com repeat */</span>
  grid-template-columns: repeat(3, 1fr);

  <span class="c-cm">/* Colunas responsivas automáticas */</span>
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  gap: 20px;
}

<span class="c-cm">/* Item ocupando 2 colunas */</span>
.destaque { grid-column: span 2; }</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">/* Layout de página completo */</span>
.pagina {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que 1fr significa no CSS Grid?',opcoes:['1 pixel','1 fração do espaço disponível','1 frame por segundo','Fixed row'],correta:1,explicacao:'fr = fraction unit. 1fr ocupa 1 parte do espaço disponível. repeat(3, 1fr) cria 3 colunas iguais que dividem todo o espaço.'},
      {tipo:'multipla',pergunta:'Quando usar Grid vs Flexbox?',opcoes:['Sempre use Grid','Grid para layout 2D (linha+coluna), Flexbox para 1D (linha ou coluna)','Flexbox para tudo','Depende do navegador'],correta:1,explicacao:'Flexbox é ideal para layouts unidimensionais (uma linha ou coluna de itens). Grid é ideal para layouts bidimensionais (grade de linhas E colunas).'},
      {tipo:'completar',pergunta:'Complete para criar 3 colunas iguais no Grid:',codigo:'.grid { display: grid; grid-template-columns: repeat(___, 1fr); }',resposta:'3',explicacao:'repeat(3, 1fr) é equivalente a "1fr 1fr 1fr". Cria 3 colunas que dividem igualmente o espaço disponível.'}
    ]
  },
  { id:'t5', titulo:'JavaScript no DOM', xp:110,
    teoria:`<h3>🐢 Zen diz:</h3><p>O <strong>DOM (Document Object Model)</strong> é a representação do HTML como objetos JavaScript. Com ele você manipula a página dinamicamente.</p><div class="code-example"><span class="c-cm">// Selecionar elementos</span>
<span class="c-kw">const</span> btn = document.<span class="c-fn">querySelector</span>(<span class="c-str">'#meu-btn'</span>)
<span class="c-kw">const</span> cards = document.<span class="c-fn">querySelectorAll</span>(<span class="c-str">'.card'</span>)

<span class="c-cm">// Modificar conteúdo</span>
btn.textContent = <span class="c-str">'Clique aqui'</span>
btn.innerHTML = <span class="c-str">'&lt;strong&gt;Novo texto&lt;/strong&gt;'</span>

<span class="c-cm">// Modificar estilos</span>
btn.style.background = <span class="c-str">'#7c6ff7'</span>
btn.classList.<span class="c-fn">add</span>(<span class="c-str">'ativo'</span>)
btn.classList.<span class="c-fn">toggle</span>(<span class="c-str">'dark'</span>)

<span class="c-cm">// Criar e inserir elementos</span>
<span class="c-kw">const</span> div = document.<span class="c-fn">createElement</span>(<span class="c-str">'div'</span>)
div.className = <span class="c-str">'card'</span>
document.body.<span class="c-fn">appendChild</span>(div)</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Eventos — reagindo ao usuário</span>
btn.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, (event) => {
  event.<span class="c-fn">preventDefault</span>() <span class="c-cm">// evita comportamento padrão</span>
  console.<span class="c-fn">log</span>(<span class="c-str">'Botão clicado!'</span>)
})

<span class="c-cm">// Input em tempo real</span>
input.<span class="c-fn">addEventListener</span>(<span class="c-str">'input'</span>, (e) => {
  resultado.textContent = e.target.value.toUpperCase()
})</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual a diferença entre textContent e innerHTML?',opcoes:['São iguais','textContent trata como texto puro, innerHTML interpreta HTML','innerHTML é mais seguro','textContent só funciona em <p>'],correta:1,explicacao:'textContent é seguro — trata como texto literal. innerHTML interpreta tags HTML mas é vulnerável a XSS se usar dados do usuário. Prefira textContent.'},
      {tipo:'multipla',pergunta:'O que classList.toggle() faz?',opcoes:['Remove a classe sempre','Adiciona a classe sempre','Adiciona se não tem, remove se tem','Lista todas as classes'],correta:2,explicacao:'toggle é o switch de classe — adiciona se não existe, remove se existe. Perfeito para temas dark/light, menus abertos/fechados.'},
      {tipo:'completar',pergunta:'Complete para ouvir o evento de clique em um botão:',codigo:"btn.___(\"click\", () => { console.log('clicou') })",resposta:'addEventListener',explicacao:'addEventListener(evento, função) registra um listener. O evento "click" dispara ao clicar. Outros: "input", "submit", "keydown", "mouseover".'}
    ]
  },
  { id:'t6', titulo:'Fetch API — consumindo APIs', xp:120,
    teoria:`<h3>🐢 Zen diz:</h3><p>A <strong>Fetch API</strong> faz requisições HTTP do browser. É como o seu frontend conversa com o backend.</p><div class="code-example"><span class="c-cm">// GET — buscar dados</span>
<span class="c-kw">const</span> res = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'https://api.exemplo.com/postos'</span>)
<span class="c-kw">const</span> dados = <span class="c-kw">await</span> res.<span class="c-fn">json</span>()

<span class="c-cm">// POST — enviar dados</span>
<span class="c-kw">const</span> res = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'/api/postos'</span>, {
  method: <span class="c-str">'POST'</span>,
  headers: { <span class="c-str">'Content-Type'</span>: <span class="c-str">'application/json'</span> },
  body: JSON.<span class="c-fn">stringify</span>({ nome: <span class="c-str">'P. Nova'</span> })
})

<span class="c-cm">// Com token JWT</span>
<span class="c-kw">const</span> res = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'/api/dados'</span>, {
  headers: { <span class="c-str">'Authorization'</span>: <span class="c-str">\`Bearer \${token}\`</span> }
})</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Padrão completo com tratamento de erro</span>
<span class="c-kw">async function</span> <span class="c-fn">buscarPostos</span>() {
  <span class="c-kw">try</span> {
    <span class="c-kw">const</span> res = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'/api/postos'</span>)
    <span class="c-kw">if</span> (!res.ok) <span class="c-kw">throw new</span> Error(<span class="c-str">\`HTTP \${res.status}\`</span>)
    <span class="c-kw">return</span> <span class="c-kw">await</span> res.<span class="c-fn">json</span>()
  } <span class="c-kw">catch</span> (err) {
    console.<span class="c-fn">error</span>(<span class="c-str">'Erro:'</span>, err.message)
    <span class="c-kw">return</span> []
  }
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que res.json() faz?',opcoes:['Converte para string','Converte o body da resposta de JSON para objeto JavaScript','Verifica se a resposta é válida','Envia JSON para o servidor'],correta:1,explicacao:'res.json() é um método da Response do Fetch que lê o body e o converte de JSON para um objeto JavaScript. É assíncrono — precisa de await.'},
      {tipo:'multipla',pergunta:'Como verificar se a requisição foi bem sucedida?',opcoes:['if (res === 200)','if (res.success)','if (res.ok)','if (!res.error)'],correta:2,explicacao:'res.ok é true quando o status é 200-299. Sempre verifique res.ok antes de processar — uma resposta 404 ou 500 não lança erro automaticamente no fetch.'},
      {tipo:'completar',pergunta:'Complete para enviar dados JSON via POST:',codigo:"fetch('/api', { method: 'POST', body: JSON.___( dados ) })",resposta:'stringify',explicacao:'JSON.stringify() converte objeto JavaScript para string JSON. O servidor receberá a string e fará o parse. Não esqueça o header Content-Type: application/json.'}
    ]
  },
  { id:'t7', titulo:'React — componentes e props', xp:130,
    teoria:`<h3>🐢 Zen diz:</h3><p><strong>React</strong> cria interfaces com <strong>componentes</strong> — funções que retornam HTML (JSX). Cada componente é reutilizável e recebe dados via <strong>props</strong>.</p><div class="code-example"><span class="c-cm">// Componente funcional</span>
<span class="c-kw">function</span> <span class="c-fn">Card</span>({ titulo, descricao, xp }) {
  <span class="c-kw">return</span> (
    &lt;div className="card"&gt;
      &lt;h3&gt;{titulo}&lt;/h3&gt;
      &lt;p&gt;{descricao}&lt;/p&gt;
      &lt;span&gt;+{xp} XP&lt;/span&gt;
    &lt;/div&gt;
  )
}

<span class="c-cm">// Usando o componente</span>
&lt;Card titulo="Lição 1" descricao="Variáveis" xp={100} /&gt;
&lt;Card titulo="Lição 2" descricao="Funções" xp={120} /&gt;</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Lista de cards com map</span>
<span class="c-kw">const</span> licoes = [
  { id: 1, titulo: <span class="c-str">'Variáveis'</span>, xp: 100 },
  { id: 2, titulo: <span class="c-str">'Funções'</span>,   xp: 120 },
]

<span class="c-kw">function</span> <span class="c-fn">ListaLicoes</span>() {
  <span class="c-kw">return</span> (
    &lt;div&gt;
      {licoes.<span class="c-fn">map</span>(l =&gt;
        &lt;Card <span class="c-kw">key</span>={l.id} titulo={l.titulo} xp={l.xp} /&gt;
      )}
    &lt;/div&gt;
  )
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que são props no React?',opcoes:['Estado interno do componente','Dados passados de pai para filho via atributos','Eventos do DOM','Estilos CSS'],correta:1,explicacao:'Props (properties) são dados que o componente pai passa para o filho via atributos JSX. São somente leitura — o filho não pode modificar suas props.'},
      {tipo:'multipla',pergunta:'Por que usar key ao renderizar listas?',opcoes:['É obrigatório pelo CSS','React usa para identificar quais itens mudaram, foram adicionados ou removidos','Melhora o visual','Permite ordenar'],correta:1,explicacao:'key ajuda React a reconciliar o DOM virtual — saber qual item mudar sem re-renderizar tudo. Use IDs únicos como key, nunca o índice do array.'},
      {tipo:'completar',pergunta:'Complete o retorno do componente React:',codigo:'function Botao({ texto }) {\n  return <button>___</button>\n}',resposta:'{texto}',explicacao:'No JSX, { } são usados para expressões JavaScript. {texto} insere o valor da prop no conteúdo do botão.'}
    ]
  },
  { id:'t8', titulo:'React Hooks — useState e useEffect', xp:130,
    teoria:`<h3>🐢 Zen diz:</h3><p>Hooks adicionam funcionalidades aos componentes funcionais. Os dois mais importantes são useState e useEffect.</p><div class="code-example"><span class="c-cm">// useState — estado local do componente</span>
<span class="c-kw">import</span> { useState } <span class="c-kw">from</span> <span class="c-str">'react'</span>

<span class="c-kw">function</span> <span class="c-fn">Contador</span>() {
  <span class="c-kw">const</span> [count, setCount] = <span class="c-fn">useState</span>(<span class="c-num">0</span>)

  <span class="c-kw">return</span> (
    &lt;div&gt;
      &lt;p&gt;{count}&lt;/p&gt;
      &lt;button onClick={() =&gt; <span class="c-fn">setCount</span>(count + <span class="c-num">1</span>)}&gt;+&lt;/button&gt;
    &lt;/div&gt;
  )
}</div><div class="code-example"><span class="c-cm">// useEffect — efeitos colaterais</span>
<span class="c-kw">import</span> { useState, useEffect } <span class="c-kw">from</span> <span class="c-str">'react'</span>

<span class="c-kw">function</span> <span class="c-fn">Postos</span>() {
  <span class="c-kw">const</span> [postos, setPostos] = <span class="c-fn">useState</span>([])

  <span class="c-fn">useEffect</span>(() =&gt; {
    <span class="c-fn">fetch</span>(<span class="c-str">'/api/postos'</span>)
      .<span class="c-fn">then</span>(r =&gt; r.<span class="c-fn">json</span>())
      .<span class="c-fn">then</span>(setPostos)
  }, []) <span class="c-cm">// [] = executa só uma vez ao montar</span>
}</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Formulário controlado</span>
<span class="c-kw">function</span> <span class="c-fn">Form</span>() {
  <span class="c-kw">const</span> [nome, setNome] = <span class="c-fn">useState</span>(<span class="c-str">''</span>)

  <span class="c-kw">const</span> <span class="c-fn">enviar</span> = (e) =&gt; {
    e.<span class="c-fn">preventDefault</span>()
    console.<span class="c-fn">log</span>(<span class="c-str">'Enviado:'</span>, nome)
  }

  <span class="c-kw">return</span> (
    &lt;form onSubmit={enviar}&gt;
      &lt;input value={nome} onChange={e =&gt; <span class="c-fn">setNome</span>(e.target.value)} /&gt;
      &lt;button&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
  )
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que useState retorna?',opcoes:['Só o valor atual','Só a função de atualização','Um array com [valor, função de atualização]','Um objeto com get e set'],correta:2,explicacao:'useState retorna um array com dois itens: o valor atual e a função para atualizá-lo. Desestruturamos: const [valor, setValor] = useState(inicial).'},
      {tipo:'multipla',pergunta:'O que significa o [] vazio no useEffect?',opcoes:['Executa a cada render','Executa só uma vez ao montar o componente','Nunca executa','Executa quando qualquer estado muda'],correta:1,explicacao:'O array de dependências controla quando o useEffect executa. [] vazio = só na montagem. [valor] = sempre que "valor" mudar. Sem array = todo render.'},
      {tipo:'completar',pergunta:'Complete para atualizar o estado counter para +1:',codigo:'const [counter, setCounter] = useState(0)\n<button onClick={() => ___(counter + 1)}>+</button>',resposta:'setCounter',explicacao:'Sempre use a função setter do useState para atualizar — nunca modifique o estado diretamente. setCounter(novo) dispara re-render automático.'}
    ]
  },
  { id:'t9', titulo:'TypeScript — tipagem estática', xp:130,
    teoria:`<h3>🐢 Zen diz:</h3><p><strong>TypeScript</strong> é JavaScript com tipos. O compilador avisa sobre erros antes de rodar o código.</p><div class="code-example"><span class="c-cm">// JavaScript — erro só aparece em runtime</span>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(a, b) { <span class="c-kw">return</span> a + b }
<span class="c-fn">somar</span>(<span class="c-str">"5"</span>, <span class="c-num">3</span>) <span class="c-cm">// "53" — bug silencioso!</span>

<span class="c-cm">// TypeScript — erro na hora de escrever</span>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(a: <span class="c-kw">number</span>, b: <span class="c-kw">number</span>): <span class="c-kw">number</span> {
  <span class="c-kw">return</span> a + b
}
<span class="c-fn">somar</span>(<span class="c-str">"5"</span>, <span class="c-num">3</span>) <span class="c-cm">// ❌ Erro: string não é number</span></div><div class="code-example"><span class="c-cm">// Tipos básicos</span>
<span class="c-kw">const</span> nome: <span class="c-kw">string</span> = <span class="c-str">"Maycon"</span>
<span class="c-kw">const</span> xp: <span class="c-kw">number</span> = <span class="c-num">340</span>
<span class="c-kw">const</span> ativo: <span class="c-kw">boolean</span> = <span class="c-kw">true</span>
<span class="c-kw">const</span> tags: <span class="c-kw">string</span>[] = [<span class="c-str">"dev"</span>, <span class="c-str">"js"</span>]

<span class="c-cm">// Interface</span>
<span class="c-kw">interface</span> Posto {
  id: <span class="c-kw">number</span>
  nome: <span class="c-kw">string</span>
  tanques: <span class="c-kw">number</span>
  ativo?: <span class="c-kw">boolean</span>  <span class="c-cm">// opcional</span>
}</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Generics — tipos flexíveis</span>
<span class="c-kw">function</span> <span class="c-fn">primeiro</span>&lt;T&gt;(arr: T[]): T {
  <span class="c-kw">return</span> arr[<span class="c-num">0</span>]
}
<span class="c-fn">primeiro</span>([<span class="c-num">1</span>,<span class="c-num">2</span>,<span class="c-num">3</span>])       <span class="c-cm">// retorna number</span>
<span class="c-fn">primeiro</span>([<span class="c-str">"a"</span>,<span class="c-str">"b"</span>])    <span class="c-cm">// retorna string</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual a principal vantagem do TypeScript?',opcoes:['Roda mais rápido','Detecta erros de tipo antes de executar o código','Substitui o CSS','Não precisa de Node'],correta:1,explicacao:'TypeScript detecta erros de tipo em tempo de compilação — antes mesmo de rodar. Isso evita bugs silenciosos como somar string com número.'},
      {tipo:'multipla',pergunta:'O que o ? significa em uma interface TypeScript?',opcoes:['Tipo desconhecido','A propriedade é opcional','Pode ser null ou undefined apenas','Erro de sintaxe'],correta:1,explicacao:'O ? após o nome da propriedade torna-a opcional. O objeto pode existir sem ela. Sem ?, a propriedade é obrigatória.'},
      {tipo:'completar',pergunta:'Complete a tipagem de uma função que recebe número e retorna string:',codigo:'function converter(n: ___): string { return String(n) }',resposta:'number',explicacao:'number é o tipo para todos os números em TypeScript — inteiros e decimais. A função recebe um number e retorna string.'}
    ]
  },
  { id:'t10', titulo:'Design responsivo e mobile-first', xp:140,
    teoria:`<h3>🐢 Zen diz:</h3><p><strong>Mobile-first</strong> significa escrever CSS para telas pequenas primeiro e expandir para telas maiores com media queries.</p><div class="code-example"><span class="c-cm">/* Mobile first — base para todos */</span>
.grid { grid-template-columns: 1fr; }

<span class="c-cm">/* Tablet — 768px+ */</span>
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

<span class="c-cm">/* Desktop — 1200px+ */</span>
@media (min-width: 1200px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}

<span class="c-cm">/* Unidades relativas */</span>
font-size: clamp(14px, 2.5vw, 20px); <span class="c-cm">/* min, ideal, max */</span>
width: min(100%, 720px);              <span class="c-cm">/* menor valor */</span>
padding: 5vw;                         <span class="c-cm">/* % da viewport */</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm">/* Regras responsivas do CodeWisdom */</span>
.tela { padding: 16px; }       <span class="c-cm">/* mobile */</span>

@media (min-width: 768px) {
  #sidebar { display: flex; }  <span class="c-cm">/* sidebar aparece */</span>
  #nav-bottom { display: none; }<span class="c-cm">/* nav some */</span>
  .tela { padding: 32px 40px; }
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que é mobile-first?',opcoes:['Criar o app mobile antes do site','Escrever CSS para mobile primeiro e expandir para desktop','Usar só frameworks mobile','Ignorar desktop'],correta:1,explicacao:'Mobile-first: começa pelo menor e vai crescendo com min-width. O oposto (desktop-first) usa max-width. Mobile-first tende a gerar CSS mais limpo e performance melhor.'},
      {tipo:'multipla',pergunta:'O que clamp(14px, 2vw, 20px) faz?',opcoes:['Define 3 tamanhos de fonte','Define font-size entre 14px e 20px, ideal 2% da viewport','Cria 3 breakpoints','Define padding máximo'],correta:1,explicacao:'clamp(min, ideal, max) — o valor ideal é 2vw (2% da largura da viewport), mas nunca menor que 14px nem maior que 20px. Responsividade sem media query!'},
      {tipo:'completar',pergunta:'Complete a media query para tablets (768px ou mais):',codigo:'@media (___: 768px) { .grid { columns: 2; } }',resposta:'min-width',explicacao:'min-width: 768px aplica o estilo quando a tela tem pelo menos 768px de largura. É a abordagem mobile-first — adiciona estilos conforme a tela cresce.'}
    ]
  },
  { id:'t11', titulo:'Performance web e otimização', xp:140,
    teoria:`<h3>🐢 Zen diz:</h3><p>Um site rápido converte mais, ranqueia melhor no Google e oferece melhor UX. As principais métricas são as <strong>Core Web Vitals</strong>.</p><div class="code-example">LCP (Largest Contentful Paint) < 2.5s → velocidade de carregamento
FID (First Input Delay)        < 100ms → responsividade
CLS (Cumulative Layout Shift)  < 0.1  → estabilidade visual</div><p><strong>Técnicas de otimização:</strong></p><ul><li>Lazy loading de imagens: <code>loading="lazy"</code></li><li>Minificar CSS/JS</li><li>Usar CDN para assets estáticos</li><li>Comprimir imagens (WebP, AVIF)</li><li>Code splitting — carregar só o necessário</li><li>Cache com Service Worker (PWA)</li></ul>`,
    exemplo:`<div class="code-example"><span class="c-cm">// React lazy loading de componentes</span>
<span class="c-kw">import</span> { lazy, Suspense } <span class="c-kw">from</span> <span class="c-str">'react'</span>
<span class="c-kw">const</span> Pesado = <span class="c-fn">lazy</span>(() =&gt; <span class="c-fn">import</span>(<span class="c-str">'./Pesado'</span>))

<span class="c-kw">function</span> <span class="c-fn">App</span>() {
  <span class="c-kw">return</span> (
    &lt;Suspense fallback={&lt;div&gt;Carregando...&lt;/div&gt;}&gt;
      &lt;Pesado /&gt;
    &lt;/Suspense&gt;
  )
}
<span class="c-cm">// Pesado.js só é baixado quando renderizado</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que LCP mede?',opcoes:['Tamanho do arquivo JS','Tempo até o maior elemento da tela ser renderizado','Número de requests','Tamanho do bundle CSS'],correta:1,explicacao:'LCP (Largest Contentful Paint) mede quando o maior elemento visível (hero image, h1) fica pronto. Meta: < 2.5 segundos para boa experiência.'},
      {tipo:'multipla',pergunta:'Para que serve o atributo loading="lazy" em imagens?',opcoes:['Carrega a imagem mais rápido','Adia o carregamento até a imagem entrar na viewport','Comprime a imagem','Adiciona animação'],correta:1,explicacao:'loading="lazy" adia o carregamento de imagens fora da tela. O browser só baixa quando o usuário rolar até perto delas, economizando bandwidth.'},
      {tipo:'completar',pergunta:'Complete o atributo para lazy loading de imagem:',codigo:'<img src="foto.jpg" alt="Foto" ___="lazy">',resposta:'loading',explicacao:'loading="lazy" é suportado em todos os browsers modernos. É a forma mais simples de melhorar performance — uma palavra que pode economizar segundos de carregamento.'}
    ]
  },
  { id:'t12', titulo:'PWA — Progressive Web App', xp:150,
    teoria:`<h3>🐢 Zen diz:</h3><p>Uma <strong>PWA</strong> é um site que funciona como app nativo — instalável, funciona offline, recebe notificações push.</p><div class="code-example"><span class="code-example">Componentes de uma PWA:

1. HTTPS — segurança obrigatória
2. manifest.json — metadados do app
3. Service Worker — cache e offline</span></div><div class="code-example"><span class="c-cm">// Service Worker — intercepta requests</span>
self.<span class="c-fn">addEventListener</span>(<span class="c-str">'install'</span>, e =&gt; {
  e.<span class="c-fn">waitUntil</span>(
    caches.<span class="c-fn">open</span>(<span class="c-str">'v1'</span>).<span class="c-fn">then</span>(cache =&gt;
      cache.<span class="c-fn">addAll</span>([<span class="c-str">'/'</span>, <span class="c-str">'/app.js'</span>, <span class="c-str">'/style.css'</span>])
    )
  )
})

self.<span class="c-fn">addEventListener</span>(<span class="c-str">'fetch'</span>, e =&gt; {
  e.<span class="c-fn">respondWith</span>(
    caches.<span class="c-fn">match</span>(e.request).<span class="c-fn">then</span>(r =&gt; r || <span class="c-fn">fetch</span>(e.request))
  )
})</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Registrar Service Worker no app</span>
<span class="c-kw">if</span> (<span class="c-str">'serviceWorker'</span> <span class="c-kw">in</span> navigator) {
  navigator.serviceWorker
    .<span class="c-fn">register</span>(<span class="c-str">'/sw.js'</span>)
    .<span class="c-fn">then</span>(() =&gt; console.<span class="c-fn">log</span>(<span class="c-str">'SW registrado!'</span>))
}
<span class="c-cm">// O CodeWisdom usa exatamente isso!</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que um Service Worker faz?',opcoes:['Processa CSS no servidor','Intercepta requests e pode servir do cache quando offline','Gera HTML no servidor','Comprime JavaScript'],correta:1,explicacao:'Service Worker roda em background, intercepta requests de rede e pode retornar do cache quando offline. É o coração do funcionamento offline de uma PWA.'},
      {tipo:'multipla',pergunta:'O que o manifest.json define?',opcoes:['Dependências do projeto','Nome, ícone, cor do app — metadados para instalação','Variáveis de ambiente','Rotas da aplicação'],correta:1,explicacao:'manifest.json descreve o app para o browser: nome, ícone, cor do tema, orientação, URL inicial. É necessário para o browser oferecer a opção de instalar.'},
      {tipo:'completar',pergunta:'Complete para registrar o Service Worker:',codigo:"navigator.serviceWorker.___('/sw.js')",resposta:'register',explicacao:"register('/sw.js') registra o arquivo do Service Worker. Sempre verifique o suporte antes: if ('serviceWorker' in navigator)."}
    ]
  },
  { id:'t13', titulo:'Testes — Jest e Testing Library', xp:150,
    teoria:`<h3>🐢 Zen diz:</h3><p>Testes garantem que seu código funciona e continua funcionando depois de mudanças. Existem 3 tipos:</p><ul><li><strong>Unit</strong> — testa uma função isolada</li><li><strong>Integration</strong> — testa módulos juntos</li><li><strong>E2E</strong> — testa o fluxo completo como usuário</li></ul><div class="code-example"><span class="c-cm">// Jest — teste unitário</span>
<span class="c-fn">describe</span>(<span class="c-str">'calcularXP'</span>, () =&gt; {
  <span class="c-fn">it</span>(<span class="c-str">'soma XP corretamente'</span>, () =&gt; {
    <span class="c-fn">expect</span>(<span class="c-fn">calcularXP</span>(<span class="c-num">100</span>, <span class="c-num">50</span>)).<span class="c-fn">toBe</span>(<span class="c-num">150</span>)
  })

  <span class="c-fn">it</span>(<span class="c-str">'não aceita XP negativo'</span>, () =&gt; {
    <span class="c-fn">expect</span>(<span class="c-fn">calcularXP</span>(-<span class="c-num">10</span>, <span class="c-num">50</span>)).<span class="c-fn">toThrow</span>()
  })
})</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// React Testing Library — testa componente</span>
<span class="c-kw">import</span> { render, screen, fireEvent } <span class="c-kw">from</span> <span class="c-str">'@testing-library/react'</span>

<span class="c-fn">test</span>(<span class="c-str">'botão incrementa contador'</span>, () =&gt; {
  <span class="c-fn">render</span>(&lt;Contador /&gt;)
  <span class="c-kw">const</span> btn = screen.<span class="c-fn">getByText</span>(<span class="c-str">'+'</span>)
  fireEvent.<span class="c-fn">click</span>(btn)
  <span class="c-fn">expect</span>(screen.<span class="c-fn">getByText</span>(<span class="c-str">'1'</span>)).<span class="c-fn">toBeInTheDocument</span>()
})</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que expect().toBe() verifica?',opcoes:['Se o valor existe','Se o valor é estritamente igual ao esperado','Se o valor é um número','Se a função foi chamada'],correta:1,explicacao:'toBe() usa === para comparar. Para objetos, use toEqual() que compara estrutura. toBe(150) passa se o resultado for exatamente 150.'},
      {tipo:'multipla',pergunta:'O que é TDD?',opcoes:['TypeScript Driven Development','Test Driven Development — escrever testes antes do código','Tela Driven Design','Tipo de Deploy'],correta:1,explicacao:'TDD: escreva o teste primeiro (que falha), depois o código mínimo para passar, depois refatore. Garante código testável e bem definido desde o início.'},
      {tipo:'completar',pergunta:'Complete o teste Jest para verificar se a função retorna 10:',codigo:"expect(minhaFuncao(5)).___( 10 )",resposta:'toBe',explicacao:'toBe(valor) verifica igualdade estrita. Outros matchers: toEqual (objetos), toContain (arrays), toThrow (exceções), toBeTruthy/toBeFalsy.'}
    ]
  },
  { id:'t14', titulo:'Acessibilidade — WCAG e ARIA', xp:150,
    teoria:`<h3>🐢 Zen diz:</h3><p>Acessibilidade garante que pessoas com deficiências possam usar seu site. Além de ético, é exigido por lei em muitos países e melhora o SEO.</p><div class="code-example"><span class="c-cm">&lt;!-- ❌ Ruim -- não acessível --&gt;</span>
&lt;div onclick="abrir()"&gt;Menu&lt;/div&gt;
&lt;img src="logo.png"&gt;

<span class="c-cm">&lt;!-- ✅ Acessível --&gt;</span>
&lt;button onclick="abrir()" aria-expanded="false"&gt;
  Menu
&lt;/button&gt;
&lt;img src="logo.png" alt="Logo CodeWisdom"&gt;</div><p><strong>Regras principais WCAG:</strong></p><ul><li>Contraste mínimo 4.5:1 para texto</li><li>Todos os elementos interativos acessíveis via teclado</li><li>Imagens com alt descritivo</li><li>Labels em todos os inputs</li><li>Foco visível em todos os elementos</li></ul>`,
    exemplo:`<div class="code-example"><span class="c-cm">&lt;!-- Formulário acessível --&gt;</span>
&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input
  id="email" type="email"
  aria-required="true"
  aria-describedby="email-dica"
&gt;
&lt;span id="email-dica"&gt;Ex: nome@email.com&lt;/span&gt;

&lt;button type="submit" aria-label="Enviar formulário"&gt;
  Enviar
&lt;/button&gt;</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Por que usar <button> em vez de <div> para ações?',opcoes:['Não faz diferença visual','button é focusável via teclado e acessível para leitores de tela por padrão','button tem mais CSS','div não aceita onclick'],correta:1,explicacao:'button é nativamente focusável (Tab), ativável (Enter/Space), anunciado por leitores de tela como "botão". div precisa de ARIA extra. Sempre use o elemento semântico correto.'},
      {tipo:'multipla',pergunta:'O que o atributo alt em imagens faz?',opcoes:['Define o tamanho','Fornece texto alternativo para leitores de tela e quando a imagem falha','Define a posição','Melhora a compressão'],correta:1,explicacao:'alt é lido por leitores de tela para descrever a imagem. Se a imagem for decorativa, use alt="" (vazio). Se for funcional, descreva o que ela comunica.'},
      {tipo:'completar',pergunta:'Complete o atributo para associar label ao input:',codigo:'<label ___="nome">Nome:</label>\n<input id="nome" type="text">',resposta:'for',explicacao:'for no label deve ser igual ao id do input. Isso os associa — clicar no label foca o input, e leitores de tela anunciam o label ao focar o input.'}
    ]
  },
  { id:'t15', titulo:'Mini-Prova — Frontend & Design', xp:300, tipo:'prova',
    teoria:`<h3>🐢 Hora da Mini-Prova!</h3><p>Você completou as 14 lições de Frontend & Design. Mínimo 70% para passar!</p>`,
    exemplo:'',
    exercicios:[
      {tipo:'multipla',pergunta:'[PROVA] O que Flexbox justify-content: space-between faz?',opcoes:['Centraliza','Espaço igual entre itens, bordas coladas','Empurra para a direita','Quebra em linhas'],correta:1,explicacao:'space-between: máximo espaço ENTRE itens. Primeiro e último colados nas bordas.'},
      {tipo:'multipla',pergunta:'[PROVA] O que useState retorna?',opcoes:['Só o valor','Só o setter','[valor, setter]','{value, set}'],correta:2,explicacao:'useState retorna array com [valorAtual, funçãoDeAtualização].'},
      {tipo:'multipla',pergunta:'[PROVA] Para que serve o Service Worker?',opcoes:['Processar CSS','Cache e funcionamento offline','Gerar HTML','Minificar JS'],correta:1,explicacao:'Service Worker intercepta requests e pode servir do cache — base do funcionamento offline de PWAs.'},
      {tipo:'multipla',pergunta:'[PROVA] O que é mobile-first?',opcoes:['App mobile antes de site','CSS para mobile primeiro, expande para desktop','Ignorar desktop','Framework mobile'],correta:1,explicacao:'Mobile-first: CSS base para telas pequenas, media queries min-width adicionam estilos para telas maiores.'},
      {tipo:'multipla',pergunta:'[PROVA] Por que usar <button> em vez de <div> para botões?',opcoes:['Estética','Foco via teclado e acessibilidade nativa','Performance','CSS mais fácil'],correta:1,explicacao:'button é semanticamente correto, focusável por teclado e lido por leitores de tela automaticamente.'}
    ]
  }
]
