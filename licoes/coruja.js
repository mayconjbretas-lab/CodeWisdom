// ============================================================
// CORUJA — Athena | Fase 1: Lógica & Fundamentos
// 15 lições reais com teoria, exemplos e exercícios
// ============================================================

const CORUJA_LICOES = [

  // ── LIÇÃO 1 ──────────────────────────────────────────────
  {
    id: 'c1',
    titulo: 'O que é programação?',
    xp: 100,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Programação é dar <strong>instruções precisas</strong> para um computador executar.
      O computador é extremamente obediente — faz exatamente o que você manda —
      mas é completamente literal. Se você errar uma vírgula, ele não "adivinha" o que você quis dizer.</p>

      <p>Pense assim: você quer fazer um sanduíche. Para um humano basta dizer
      <em>"faz um sanduíche de queijo"</em> e ele entende. Para um computador você precisa dizer:</p>

      <div class="code-example">
1. Pegue o pão<br>
2. Abra o pão ao meio<br>
3. Coloque o queijo dentro<br>
4. Feche o pão
      </div>

      <p>Isso é um <strong>algoritmo</strong> — uma sequência de passos para resolver um problema.</p>

      <p>Linguagens de programação são o idioma que usamos para escrever essas instruções.
      Python, JavaScript, C++... cada uma tem sua sintaxe, mas todas seguem a mesma ideia.</p>
    `,
    exemplo: `
      <p>Em JavaScript, seu primeiro programa seria assim:</p>
      <div class="code-example">
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"Olá, mundo!"</span>)
      </div>
      <p><code>console.log()</code> manda o computador <em>exibir</em> algo na tela.
      O texto entre aspas é chamado de <strong>string</strong>.</p>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que é um algoritmo?',
        opcoes: [
          'Um tipo de computador',
          'Uma sequência de passos para resolver um problema',
          'Uma linguagem de programação',
          'Um erro no código'
        ],
        correta: 1,
        explicacao: 'Algoritmo é uma sequência ordenada de passos para resolver um problema. Todo programa é baseado em um algoritmo.'
      },
      {
        tipo: 'multipla',
        pergunta: 'O que o comando console.log() faz?',
        opcoes: [
          'Salva um arquivo',
          'Cria uma variável',
          'Exibe algo na tela',
          'Fecha o programa'
        ],
        correta: 2,
        explicacao: 'console.log() exibe (imprime) um valor no console — é a forma mais básica de ver o resultado do seu código.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete o código para exibir "CodeWisdom" na tela:',
        codigo: 'console.___("CodeWisdom")',
        resposta: 'log',
        explicacao: 'console.log() é a função para exibir valores. O nome vem de "registrar no console".'
      }
    ]
  },

  // ── LIÇÃO 2 ──────────────────────────────────────────────
  {
    id: 'c2',
    titulo: 'Variáveis — guardando informações',
    xp: 100,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Uma <strong>variável</strong> é uma caixinha com nome que guarda um valor.
      Você cria a caixa, dá um nome a ela, e coloca algo dentro.</p>

      <p>Em JavaScript moderno, usamos <code>let</code> e <code>const</code>:</p>

      <div class="code-example">
<span class="c-kw">let</span> nome = <span class="c-str">"Maycon"</span>    <span class="c-cm">// pode mudar depois</span><br>
<span class="c-kw">const</span> idade = <span class="c-num">28</span>         <span class="c-cm">// não muda nunca</span>
      </div>

      <p><code>let</code> — variável que pode ser alterada depois.<br>
      <code>const</code> — constante, o valor nunca muda (use sempre que possível).</p>

      <p><strong>Regras de nomenclatura:</strong></p>
      <ul>
        <li>Sem espaços: use <code>meuNome</code> (camelCase) ✅</li>
        <li>Sem acentos nem caracteres especiais ✅</li>
        <li>Não começa com número ✅</li>
        <li>Nomes descritivos: <code>idade</code> é melhor que <code>x</code> ✅</li>
      </ul>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> produto = <span class="c-str">"Gasolina"</span><br>
<span class="c-kw">let</span> preco = <span class="c-num">5.89</span><br>
<span class="c-kw">let</span> quantidade = <span class="c-num">40</span><br><br>
<span class="c-kw">const</span> total = preco * quantidade<br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(total)  <span class="c-cm">// 235.6</span>
      </div>
      <p>Variáveis podem guardar textos, números, e muito mais. Aqui calculamos o total de um abastecimento!</p>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual a diferença entre let e const?',
        opcoes: [
          'Não há diferença, são iguais',
          'let pode ser alterado depois, const não pode',
          'const pode ser alterado, let não pode',
          'let é para números, const é para textos'
        ],
        correta: 1,
        explicacao: 'let declara variáveis que podem ser reatribuídas. const declara constantes — o valor não pode mudar após a declaração.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual nome de variável está CORRETO?',
        opcoes: [
          'meu nome',
          '1contador',
          'totalVendas',
          'total-vendas'
        ],
        correta: 2,
        explicacao: 'totalVendas usa camelCase, sem espaços, sem caracteres especiais e não começa com número. É o padrão correto em JavaScript.'
      },
      {
        tipo: 'completar',
        pergunta: 'Declare uma constante chamada "pi" com valor 3.14:',
        codigo: '___ pi = 3.14',
        resposta: 'const',
        explicacao: 'Usamos const porque o valor de π nunca muda. Sempre prefira const quando o valor não vai ser alterado.'
      }
    ]
  },

  // ── LIÇÃO 3 ──────────────────────────────────────────────
  {
    id: 'c3',
    titulo: 'Tipos de dados',
    xp: 100,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Cada variável guarda um <strong>tipo</strong> de dado. Em JavaScript os principais são:</p>

      <div class="code-example">
<span class="c-cm">// String — texto, sempre entre aspas</span><br>
<span class="c-kw">const</span> nome = <span class="c-str">"Athena"</span><br><br>

<span class="c-cm">// Number — números (inteiros ou decimais)</span><br>
<span class="c-kw">const</span> idade = <span class="c-num">5</span><br>
<span class="c-kw">const</span> preco = <span class="c-num">3.99</span><br><br>

<span class="c-cm">// Boolean — verdadeiro ou falso</span><br>
<span class="c-kw">const</span> ativo = <span class="c-kw">true</span><br>
<span class="c-kw">const</span> bloqueado = <span class="c-kw">false</span><br><br>

<span class="c-cm">// Array — lista de valores</span><br>
<span class="c-kw">const</span> frutas = [<span class="c-str">"maçã"</span>, <span class="c-str">"banana"</span>, <span class="c-str">"uva"</span>]<br><br>

<span class="c-cm">// Object — conjunto de propriedades</span><br>
<span class="c-kw">const</span> posto = { nome: <span class="c-str">"P. Central"</span>, tanques: <span class="c-num">4</span> }
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> usuario = {<br>
&nbsp;&nbsp;nome: <span class="c-str">"Maycon"</span>,<br>
&nbsp;&nbsp;nivel: <span class="c-num">1</span>,<br>
&nbsp;&nbsp;ativo: <span class="c-kw">true</span>,<br>
&nbsp;&nbsp;conquistas: [<span class="c-str">"Primeira lição"</span>, <span class="c-str">"5 dias seguidos"</span>]<br>
}<br><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(usuario.nome)   <span class="c-cm">// "Maycon"</span><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(usuario.nivel)  <span class="c-cm">// 1</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual o tipo de dado de: const aprovado = true',
        opcoes: ['String', 'Number', 'Boolean', 'Array'],
        correta: 2,
        explicacao: 'true e false são valores Boolean — representam verdadeiro ou falso. São muito usados para condições e estados.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Como acessar o nome de: const posto = { nome: "Central", tanques: 4 }',
        opcoes: ['posto[nome]', 'posto.nome', 'posto("nome")', 'nome.posto'],
        correta: 1,
        explicacao: 'Usamos ponto (.) para acessar propriedades de um objeto. posto.nome retorna "Central".'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para acessar o primeiro item do array: const dias = ["Seg","Ter","Qua"]',
        codigo: 'console.log(dias[___])',
        resposta: '0',
        explicacao: 'Arrays começam no índice 0! O primeiro item é [0], o segundo é [1], e assim por diante.'
      }
    ]
  },

  // ── LIÇÃO 4 ──────────────────────────────────────────────
  {
    id: 'c4',
    titulo: 'Operadores — calculando e comparando',
    xp: 100,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Operadores fazem cálculos e comparações. Existem três tipos principais:</p>

      <p><strong>Aritméticos</strong> — para contas:</p>
      <div class="code-example">
<span class="c-num">10</span> + <span class="c-num">5</span>   <span class="c-cm">// 15 — soma</span><br>
<span class="c-num">10</span> - <span class="c-num">3</span>   <span class="c-cm">// 7  — subtração</span><br>
<span class="c-num">4</span>  * <span class="c-num">3</span>   <span class="c-cm">// 12 — multiplicação</span><br>
<span class="c-num">10</span> / <span class="c-num">2</span>   <span class="c-cm">// 5  — divisão</span><br>
<span class="c-num">10</span> % <span class="c-num">3</span>   <span class="c-cm">// 1  — resto da divisão (módulo)</span><br>
<span class="c-num">2</span>  ** <span class="c-num">3</span>  <span class="c-cm">// 8  — potência (2³)</span>
      </div>

      <p><strong>Comparação</strong> — retornam true ou false:</p>
      <div class="code-example">
<span class="c-num">5</span> === <span class="c-num">5</span>   <span class="c-cm">// true  — igual (valor E tipo)</span><br>
<span class="c-num">5</span> !== <span class="c-num">3</span>   <span class="c-cm">// true  — diferente</span><br>
<span class="c-num">10</span> > <span class="c-num">5</span>   <span class="c-cm">// true  — maior que</span><br>
<span class="c-num">3</span>  < <span class="c-num">7</span>   <span class="c-cm">// true  — menor que</span><br>
<span class="c-num">5</span> >= <span class="c-num">5</span>   <span class="c-cm">// true  — maior ou igual</span>
      </div>

      <p><strong>⚠️ IMPORTANTE:</strong> Sempre use <code>===</code> (três iguais) para comparar em JavaScript!
      O <code>==</code> causa bugs silenciosos porque ignora o tipo.</p>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> tanque = <span class="c-num">15000</span>  <span class="c-cm">// litros</span><br>
<span class="c-kw">const</span> vendas = <span class="c-num">12500</span>  <span class="c-cm">// litros vendidos</span><br>
<span class="c-kw">const</span> estoque = tanque - vendas<br>
<span class="c-kw">const</span> percentual = (estoque / tanque) * <span class="c-num">100</span><br><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(estoque)     <span class="c-cm">// 2500</span><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(percentual)  <span class="c-cm">// 16.67%</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual o resultado de: 17 % 5',
        opcoes: ['3', '2', '12', '85'],
        correta: 1,
        explicacao: '17 % 5 = 2. O operador % retorna o RESTO da divisão. 17 ÷ 5 = 3 com resto 2. Muito usado para verificar se um número é par/ímpar.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Por que usar === em vez de == em JavaScript?',
        opcoes: [
          '=== é mais rápido',
          '=== compara valor E tipo, evitando bugs',
          'Não faz diferença',
          '== não funciona em JavaScript'
        ],
        correta: 1,
        explicacao: '=== é o "igual estrito" — compara valor e tipo. == pode causar "5" == 5 ser true (string vs number), o que causa bugs difíceis de encontrar.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para calcular o quadrado de 8 (8²):',
        codigo: 'const quadrado = 8 ___ 2',
        resposta: '**',
        explicacao: 'O operador ** é a potência em JavaScript. 8 ** 2 = 64. É equivalente a Math.pow(8, 2).'
      }
    ]
  },

  // ── LIÇÃO 5 ──────────────────────────────────────────────
  {
    id: 'c5',
    titulo: 'Condicionais — tomando decisões',
    xp: 120,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Programas precisam tomar decisões. O <code>if/else</code> faz exatamente isso:
      <em>"SE uma condição for verdadeira, faça isso. SENÃO, faça aquilo."</em></p>

      <div class="code-example">
<span class="c-kw">if</span> (condicao) {<br>
&nbsp;&nbsp;<span class="c-cm">// executa se condição for TRUE</span><br>
} <span class="c-kw">else if</span> (outraCondicao) {<br>
&nbsp;&nbsp;<span class="c-cm">// executa se a segunda condição for TRUE</span><br>
} <span class="c-kw">else</span> {<br>
&nbsp;&nbsp;<span class="c-cm">// executa se NENHUMA condição for verdadeira</span><br>
}
      </div>

      <p><strong>Operadores lógicos</strong> para combinar condições:</p>
      <div class="code-example">
<span class="c-cm">// && — E (ambas devem ser true)</span><br>
<span class="c-kw">if</span> (idade >= <span class="c-num">18</span> && temCNH) { ... }<br><br>
<span class="c-cm">// || — OU (basta uma ser true)</span><br>
<span class="c-kw">if</span> (ehAdmin || ehGerente) { ... }<br><br>
<span class="c-cm">// ! — NÃO (inverte)</span><br>
<span class="c-kw">if</span> (!bloqueado) { ... }
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> estoque = <span class="c-num">2500</span>  <span class="c-cm">// litros</span><br>
<span class="c-kw">const</span> capacidade = <span class="c-num">15000</span><br>
<span class="c-kw">const</span> percentual = (estoque / capacidade) * <span class="c-num">100</span><br><br>
<span class="c-kw">if</span> (percentual < <span class="c-num">10</span>) {<br>
&nbsp;&nbsp;<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"⚠️ CRÍTICO — pedir combustível!"</span>)<br>
} <span class="c-kw">else if</span> (percentual < <span class="c-num">30</span>) {<br>
&nbsp;&nbsp;<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"⚡ Estoque baixo"</span>)<br>
} <span class="c-kw">else</span> {<br>
&nbsp;&nbsp;<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"✅ Estoque OK"</span>)<br>
}
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que o operador && faz?',
        opcoes: [
          'Retorna true se PELO MENOS UMA condição for verdadeira',
          'Retorna true se AMBAS as condições forem verdadeiras',
          'Inverte o valor booleano',
          'Compara dois valores'
        ],
        correta: 1,
        explicacao: '&& é o "E" lógico. true && true = true. true && false = false. AMBAS precisam ser verdadeiras.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Se nota = 45, qual mensagem aparece?\nif(nota>=60){console.log("Aprovado")} else {console.log("Reprovado")}',
        opcoes: ['Aprovado', 'Reprovado', 'Nenhuma', 'Erro'],
        correta: 1,
        explicacao: '45 não é >= 60, então a condição é false e cai no else: "Reprovado".'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para verificar se o usuário é admin OU gerente:',
        codigo: 'if (ehAdmin ___ ehGerente) { liberarAcesso() }',
        resposta: '||',
        explicacao: '|| é o "OU" lógico. Retorna true se pelo menos uma das condições for verdadeira. Perfeito para verificar múltiplos papéis.'
      }
    ]
  },

  // ── LIÇÃO 6 ──────────────────────────────────────────────
  {
    id: 'c6',
    titulo: 'Loops — repetindo tarefas',
    xp: 120,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Loops executam um bloco de código várias vezes. Sem loops, você teria que escrever
      o mesmo código 100 vezes para processar 100 itens.</p>

      <p><strong>for</strong> — quando você sabe quantas vezes repetir:</p>
      <div class="code-example">
<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < <span class="c-num">5</span>; i++) {<br>
&nbsp;&nbsp;<span class="c-fn">console</span>.<span class="c-fn">log</span>(i)  <span class="c-cm">// 0,1,2,3,4</span><br>
}
      </div>

      <p><strong>while</strong> — enquanto uma condição for verdadeira:</p>
      <div class="code-example">
<span class="c-kw">let</span> agua = <span class="c-num">100</span><br>
<span class="c-kw">while</span> (agua > <span class="c-num">0</span>) {<br>
&nbsp;&nbsp;agua -= <span class="c-num">10</span>  <span class="c-cm">// bebe 10 por vez</span><br>
}
      </div>

      <p><strong>for...of</strong> — para percorrer arrays (o mais usado no dia a dia):</p>
      <div class="code-example">
<span class="c-kw">const</span> postos = [<span class="c-str">"P. Ana Lúcia"</span>, <span class="c-str">"P. Glória"</span>, <span class="c-str">"P. Túnel"</span>]<br>
<span class="c-kw">for</span> (<span class="c-kw">const</span> posto <span class="c-kw">of</span> postos) {<br>
&nbsp;&nbsp;<span class="c-fn">console</span>.<span class="c-fn">log</span>(posto)<br>
}
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Calcular total de vendas de 5 dias</span><br>
<span class="c-kw">const</span> vendas = [<span class="c-num">1200</span>, <span class="c-num">980</span>, <span class="c-num">1500</span>, <span class="c-num">870</span>, <span class="c-num">1100</span>]<br>
<span class="c-kw">let</span> total = <span class="c-num">0</span><br><br>
<span class="c-kw">for</span> (<span class="c-kw">const</span> venda <span class="c-kw">of</span> vendas) {<br>
&nbsp;&nbsp;total += venda<br>
}<br><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"Total:"</span>, total)   <span class="c-cm">// 5650</span><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"Média:"</span>, total / vendas.length)  <span class="c-cm">// 1130</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Quantas vezes o loop executa?\nfor (let i = 0; i < 8; i++) { ... }',
        opcoes: ['7', '8', '9', '0'],
        correta: 1,
        explicacao: 'O loop começa em 0 e vai até i < 8, ou seja: 0,1,2,3,4,5,6,7 = 8 vezes. O índice vai de 0 até n-1.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual loop usar quando não sei quantas vezes repetir?',
        opcoes: ['for', 'for...of', 'while', 'for...in'],
        correta: 2,
        explicacao: 'while é ideal quando a repetição depende de uma condição que pode mudar a qualquer momento. Ele continua enquanto a condição for true.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para percorrer o array de postos:',
        codigo: 'for (const posto ___ postos) { console.log(posto) }',
        resposta: 'of',
        explicacao: 'for...of percorre cada VALOR de um array. É mais legível que o for tradicional quando você não precisa do índice.'
      }
    ]
  },

  // ── LIÇÃO 7 ──────────────────────────────────────────────
  {
    id: 'c7',
    titulo: 'Funções — reutilizando código',
    xp: 130,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Uma <strong>função</strong> é um bloco de código com nome que você pode reusar.
      Em vez de escrever a mesma lógica várias vezes, você cria uma função e chama ela.</p>

      <div class="code-example">
<span class="c-cm">// Declaração</span><br>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(a, b) {<br>
&nbsp;&nbsp;<span class="c-kw">return</span> a + b<br>
}<br><br>
<span class="c-cm">// Chamada</span><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-fn">somar</span>(<span class="c-num">3</span>, <span class="c-num">7</span>))  <span class="c-cm">// 10</span>
      </div>

      <p><strong>Arrow function</strong> — a forma moderna e compacta:</p>
      <div class="code-example">
<span class="c-kw">const</span> <span class="c-fn">somar</span> = (a, b) => a + b<br>
<span class="c-kw">const</span> <span class="c-fn">quadrado</span> = n => n ** <span class="c-num">2</span>
      </div>

      <p><strong>Parâmetros</strong> são as "entradas" da função.<br>
      <strong>return</strong> é o que a função "devolve" como resultado.</p>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> <span class="c-fn">calcularEstoque</span> = (tanque, vendas) => {<br>
&nbsp;&nbsp;<span class="c-kw">const</span> restante = tanque - vendas<br>
&nbsp;&nbsp;<span class="c-kw">const</span> percentual = (restante / tanque) * <span class="c-num">100</span><br>
&nbsp;&nbsp;<span class="c-kw">return</span> { restante, percentual }<br>
}<br><br>
<span class="c-kw">const</span> resultado = <span class="c-fn">calcularEstoque</span>(<span class="c-num">15000</span>, <span class="c-num">12500</span>)<br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(resultado.percentual.toFixed(<span class="c-num">1</span>) + <span class="c-str">"%"</span>)  <span class="c-cm">// 16.7%</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que é o "return" em uma função?',
        opcoes: [
          'Volta para o início da função',
          'Para o programa completamente',
          'Define o valor que a função devolve ao ser chamada',
          'Cria uma nova variável'
        ],
        correta: 2,
        explicacao: 'return define o valor que a função "devolve". Sem return, a função retorna undefined. É como o resultado de uma conta: você chama a função e ela te entrega o resultado.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual é a arrow function equivalente a: function dobrar(n) { return n * 2 }',
        opcoes: [
          'const dobrar = n => n * 2',
          'const dobrar = (n) { return n * 2 }',
          'arrow dobrar = n * 2',
          'function dobrar => n * 2'
        ],
        correta: 0,
        explicacao: 'Arrow functions com um único parâmetro e uma única expressão de retorno podem ser escritas de forma super compacta: const dobrar = n => n * 2'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete a arrow function que calcula o cubo de um número:',
        codigo: 'const cubo = n => n ___ 3',
        resposta: '**',
        explicacao: '** é o operador de potência. n ** 3 = n³. Então cubo(3) retorna 27.'
      }
    ]
  },

  // ── LIÇÃO 8 ──────────────────────────────────────────────
  {
    id: 'c8',
    titulo: 'Arrays — listas de dados',
    xp: 130,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Arrays são listas ordenadas. Os métodos modernos de array são
      essenciais no dia a dia de qualquer dev.</p>

      <div class="code-example">
<span class="c-kw">const</span> nums = [<span class="c-num">1</span>, <span class="c-num">2</span>, <span class="c-num">3</span>, <span class="c-num">4</span>, <span class="c-num">5</span>]<br><br>

<span class="c-cm">// map — transforma cada elemento</span><br>
nums.<span class="c-fn">map</span>(n => n * <span class="c-num">2</span>)        <span class="c-cm">// [2,4,6,8,10]</span><br><br>

<span class="c-cm">// filter — filtra por condição</span><br>
nums.<span class="c-fn">filter</span>(n => n > <span class="c-num">3</span>)    <span class="c-cm">// [4,5]</span><br><br>

<span class="c-cm">// reduce — acumula em um valor</span><br>
nums.<span class="c-fn">reduce</span>((acc, n) => acc + n, <span class="c-num">0</span>)  <span class="c-cm">// 15</span><br><br>

<span class="c-cm">// find — acha o primeiro que passa no teste</span><br>
nums.<span class="c-fn">find</span>(n => n > <span class="c-num">3</span>)      <span class="c-cm">// 4</span><br><br>

<span class="c-cm">// includes — verifica se existe</span><br>
nums.<span class="c-fn">includes</span>(<span class="c-num">3</span>)            <span class="c-cm">// true</span>
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> postos = [<br>
&nbsp;&nbsp;{ nome: <span class="c-str">"P. Central"</span>, vendas: <span class="c-num">8500</span> },<br>
&nbsp;&nbsp;{ nome: <span class="c-str">"P. Glória"</span>,  vendas: <span class="c-num">3200</span> },<br>
&nbsp;&nbsp;{ nome: <span class="c-str">"P. Túnel"</span>,   vendas: <span class="c-num">12000</span> }<br>
]<br><br>
<span class="c-cm">// Só postos com mais de 5000L</span><br>
<span class="c-kw">const</span> grandes = postos.<span class="c-fn">filter</span>(p => p.vendas > <span class="c-num">5000</span>)<br>
<span class="c-cm">// Total geral</span><br>
<span class="c-kw">const</span> total = postos.<span class="c-fn">reduce</span>((acc, p) => acc + p.vendas, <span class="c-num">0</span>)
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que [1,2,3,4].filter(n => n % 2 === 0) retorna?',
        opcoes: ['[1,3]', '[2,4]', '[1,2,3,4]', '[0]'],
        correta: 1,
        explicacao: 'filter retorna um novo array com os elementos que passam no teste. n % 2 === 0 testa se é par. Dos 4 números, 2 e 4 são pares.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual método transforma cada elemento de um array?',
        opcoes: ['filter', 'find', 'map', 'reduce'],
        correta: 2,
        explicacao: 'map cria um novo array aplicando uma função a cada elemento. É como uma linha de montagem: cada item entra e sai transformado.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para somar todos os números: [10, 20, 30]',
        codigo: 'const soma = [10,20,30].reduce((acc, n) => acc ___ n, 0)',
        resposta: '+',
        explicacao: 'reduce acumula os valores. Começa com acc=0, adiciona cada n: 0+10=10, 10+20=30, 30+30=60. Resultado: 60.'
      }
    ]
  },

  // ── LIÇÃO 9 ──────────────────────────────────────────────
  {
    id: 'c9',
    titulo: 'Objetos — estruturando dados',
    xp: 130,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Objetos agrupam dados relacionados em propriedades chave-valor.
      São a base de quase tudo em JavaScript.</p>

      <div class="code-example">
<span class="c-kw">const</span> posto = {<br>
&nbsp;&nbsp;nome: <span class="c-str">"P. Central"</span>,<br>
&nbsp;&nbsp;tanques: <span class="c-num">4</span>,<br>
&nbsp;&nbsp;ativo: <span class="c-kw">true</span>,<br>
&nbsp;&nbsp;<span class="c-cm">// Método — função dentro de objeto</span><br>
&nbsp;&nbsp;<span class="c-fn">descrever</span>() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">return</span> <span class="c-str">\`\${this.nome} tem \${this.tanques} tanques\`</span><br>
&nbsp;&nbsp;}<br>
}<br><br>
<span class="c-cm">// Desestruturação — extrair propriedades</span><br>
<span class="c-kw">const</span> { nome, tanques } = posto<br><br>
<span class="c-cm">// Spread — copiar/mesclar objetos</span><br>
<span class="c-kw">const</span> atualizado = { ...posto, tanques: <span class="c-num">6</span> }
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> usuario = { nome: <span class="c-str">"Maycon"</span>, xp: <span class="c-num">340</span>, nivel: <span class="c-num">3</span> }<br><br>
<span class="c-cm">// Desestrutura direto nos parâmetros</span><br>
<span class="c-kw">const</span> <span class="c-fn">saudar</span> = ({ nome, nivel }) =><br>
&nbsp;&nbsp;<span class="c-str">\`Olá \${nome}! Você está no nível \${nivel}\`</span><br><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-fn">saudar</span>(usuario))<br>
<span class="c-cm">// "Olá Maycon! Você está no nível 3"</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que é desestruturação de objeto?',
        opcoes: [
          'Deletar um objeto',
          'Extrair propriedades de um objeto para variáveis individuais',
          'Copiar um objeto',
          'Converter objeto em array'
        ],
        correta: 1,
        explicacao: 'const { nome, idade } = pessoa é equivalente a: const nome = pessoa.nome; const idade = pessoa.idade. É mais limpo e conciso.'
      },
      {
        tipo: 'multipla',
        pergunta: 'O que o spread operator (...) faz com objetos?',
        opcoes: [
          'Apaga todas as propriedades',
          'Cria uma cópia com as propriedades espalhadas',
          'Converte em array',
          'Ordena as propriedades'
        ],
        correta: 1,
        explicacao: '{ ...obj, novaProp: valor } cria um NOVO objeto com todas as propriedades de obj, mais a nova propriedade. O original não é modificado.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete a template string para exibir o nome:\nconst user = { nome: "Maycon" }',
        codigo: 'console.log(`Olá ${___nome}`)',
        resposta: 'user.',
        explicacao: 'Template strings usam ${} para inserir expressões. ${user.nome} acessa a propriedade nome do objeto user.'
      }
    ]
  },

  // ── LIÇÃO 10 ──────────────────────────────────────────────
  {
    id: 'c10',
    titulo: 'Escopo e closures',
    xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p><strong>Escopo</strong> define onde uma variável pode ser acessada.</p>

      <div class="code-example">
<span class="c-kw">const</span> global = <span class="c-str">"vejo tudo"</span>  <span class="c-cm">// escopo global</span><br><br>
<span class="c-kw">function</span> <span class="c-fn">exemplo</span>() {<br>
&nbsp;&nbsp;<span class="c-kw">const</span> local = <span class="c-str">"só aqui dentro"</span>  <span class="c-cm">// escopo local</span><br>
&nbsp;&nbsp;<span class="c-fn">console</span>.<span class="c-fn">log</span>(global)  <span class="c-cm">// ✅ funciona</span><br>
&nbsp;&nbsp;<span class="c-fn">console</span>.<span class="c-fn">log</span>(local)   <span class="c-cm">// ✅ funciona</span><br>
}<br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(local)  <span class="c-cm">// ❌ ReferenceError!</span>
      </div>

      <p><strong>Closure</strong> — uma função que "lembra" o escopo onde foi criada, mesmo depois que esse escopo fechou:</p>

      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">contador</span>() {<br>
&nbsp;&nbsp;<span class="c-kw">let</span> count = <span class="c-num">0</span><br>
&nbsp;&nbsp;<span class="c-kw">return</span> () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;count++<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">return</span> count<br>
&nbsp;&nbsp;}<br>
}<br>
<span class="c-kw">const</span> contar = <span class="c-fn">contador</span>()<br>
<span class="c-fn">contar</span>()  <span class="c-cm">// 1</span><br>
<span class="c-fn">contar</span>()  <span class="c-cm">// 2</span><br>
<span class="c-fn">contar</span>()  <span class="c-cm">// 3</span>
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Closure para XP do usuário</span><br>
<span class="c-kw">function</span> <span class="c-fn">criarUsuario</span>(nomeInicial) {<br>
&nbsp;&nbsp;<span class="c-kw">let</span> xp = <span class="c-num">0</span><br>
&nbsp;&nbsp;<span class="c-kw">return</span> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-fn">ganharXP</span>: (pts) => { xp += pts },<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-fn">getXP</span>: () => xp,<br>
&nbsp;&nbsp;&nbsp;&nbsp;nome: nomeInicial<br>
&nbsp;&nbsp;}<br>
}<br>
<span class="c-kw">const</span> maycon = <span class="c-fn">criarUsuario</span>(<span class="c-str">"Maycon"</span>)<br>
maycon.<span class="c-fn">ganharXP</span>(<span class="c-num">100</span>)<br>
maycon.<span class="c-fn">ganharXP</span>(<span class="c-num">150</span>)<br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(maycon.<span class="c-fn">getXP</span>())  <span class="c-cm">// 250</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Uma variável declarada dentro de uma função pode ser acessada fora dela?',
        opcoes: [
          'Sim, sempre',
          'Não, ela existe apenas dentro da função',
          'Só se usar var',
          'Só se usar const'
        ],
        correta: 1,
        explicacao: 'Variáveis com let e const têm escopo de bloco. Declaradas dentro de uma função, existem apenas dentro dela. Tentar acessar de fora resulta em ReferenceError.'
      },
      {
        tipo: 'multipla',
        pergunta: 'O que é uma closure?',
        opcoes: [
          'Um erro de escopo',
          'Uma função que lembra o escopo onde foi criada',
          'Um loop infinito',
          'Uma forma de fechar o programa'
        ],
        correta: 1,
        explicacao: 'Closure é quando uma função interna "captura" variáveis do escopo externo e as mantém vivas mesmo depois que a função externa retornou. É um conceito fundamental de JS.'
      },
      {
        tipo: 'completar',
        pergunta: 'O que aparece no console? let x = 10; function f() { let x = 20; return x } console.log(___)',
        codigo: 'console.log(f()) // ?',
        resposta: '20',
        explicacao: 'A função f() tem seu próprio x = 20 (escopo local). O x = 10 do escopo externo não interfere. f() retorna 20.'
      }
    ]
  },

  // ── LIÇÃO 11 ──────────────────────────────────────────────
  {
    id: 'c11',
    titulo: 'Algoritmos de busca',
    xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Busca é uma das operações mais comuns em programação. Existem duas abordagens clássicas:</p>

      <p><strong>Busca Linear O(n)</strong> — verifica um por um:</p>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">buscaLinear</span>(arr, alvo) {<br>
&nbsp;&nbsp;<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < arr.length; i++) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">if</span> (arr[i] === alvo) <span class="c-kw">return</span> i<br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;<span class="c-kw">return</span> -<span class="c-num">1</span>  <span class="c-cm">// não encontrado</span><br>
}
      </div>

      <p><strong>Busca Binária O(log n)</strong> — divide o array ao meio a cada passo. O array <em>precisa estar ordenado</em>:</p>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">buscaBinaria</span>(arr, alvo) {<br>
&nbsp;&nbsp;<span class="c-kw">let</span> inicio = <span class="c-num">0</span>, fim = arr.length - <span class="c-num">1</span><br>
&nbsp;&nbsp;<span class="c-kw">while</span> (inicio <= fim) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">const</span> meio = Math.<span class="c-fn">floor</span>((inicio + fim) / <span class="c-num">2</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">if</span> (arr[meio] === alvo) <span class="c-kw">return</span> meio<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">else if</span> (arr[meio] < alvo) inicio = meio + <span class="c-num">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">else</span> fim = meio - <span class="c-num">1</span><br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;<span class="c-kw">return</span> -<span class="c-num">1</span><br>
}
      </div>

      <p>Com 1 milhão de itens: busca linear = até 1.000.000 passos. Busca binária = apenas <strong>20 passos</strong>!</p>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> ids = [<span class="c-num">10</span>, <span class="c-num">23</span>, <span class="c-num">45</span>, <span class="c-num">67</span>, <span class="c-num">89</span>, <span class="c-num">102</span>]<br><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-fn">buscaBinaria</span>(ids, <span class="c-num">67</span>))  <span class="c-cm">// 3 (índice)</span><br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-fn">buscaBinaria</span>(ids, <span class="c-num">50</span>))  <span class="c-cm">// -1 (não existe)</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual a pré-condição para usar busca binária?',
        opcoes: [
          'O array precisa ter tamanho par',
          'O array precisa estar ordenado',
          'O array não pode ter duplicatas',
          'Nenhuma pré-condição'
        ],
        correta: 1,
        explicacao: 'Busca binária só funciona em arrays ordenados! Ela compara o elemento do meio e descarta metade dos dados a cada passo — isso só é possível se os dados tiverem ordem.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Quantos passos no máximo a busca binária precisa para encontrar algo em 1.024 elementos?',
        opcoes: ['1024', '512', '10', '100'],
        correta: 2,
        explicacao: 'log₂(1024) = 10. A busca binária divide pela metade a cada passo. 1024→512→256→128→64→32→16→8→4→2→1 = 10 passos máximos!'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete: busca linear tem complexidade O(n), busca binária tem O(___)',
        codigo: '// Complexidade busca binária: O(___)',
        resposta: 'log n',
        explicacao: 'O(log n) significa que o tempo cresce logaritmicamente. Dobrar o tamanho do array adiciona apenas 1 passo extra na busca binária.'
      }
    ]
  },

  // ── LIÇÃO 12 ──────────────────────────────────────────────
  {
    id: 'c12',
    titulo: 'Ordenação — Bubble e Selection Sort',
    xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Ordenar dados é fundamental. Vamos aprender os dois algoritmos mais didáticos — não os mais rápidos, mas os mais fáceis de entender.</p>

      <p><strong>Bubble Sort O(n²)</strong> — compara pares adjacentes e "borbulha" o maior para o fim:</p>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">bubbleSort</span>(arr) {<br>
&nbsp;&nbsp;<span class="c-kw">const</span> a = [...arr]  <span class="c-cm">// cópia</span><br>
&nbsp;&nbsp;<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < a.length; i++) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">for</span> (<span class="c-kw">let</span> j = <span class="c-num">0</span>; j < a.length - i - <span class="c-num">1</span>; j++) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">if</span> (a[j] > a[j+<span class="c-num">1</span>]) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[a[j], a[j+<span class="c-num">1</span>]] = [a[j+<span class="c-num">1</span>], a[j]]  <span class="c-cm">// swap</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;<span class="c-kw">return</span> a<br>
}
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> vendas = [<span class="c-num">980</span>, <span class="c-num">1500</span>, <span class="c-num">450</span>, <span class="c-num">2100</span>, <span class="c-num">730</span>]<br>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-fn">bubbleSort</span>(vendas))<br>
<span class="c-cm">// [450, 730, 980, 1500, 2100]</span><br><br>
<span class="c-cm">// JavaScript nativo (muito mais rápido!):</span><br>
vendas.<span class="c-fn">sort</span>((a, b) => a - b)
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual a complexidade do Bubble Sort no pior caso?',
        opcoes: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
        correta: 2,
        explicacao: 'Bubble Sort tem dois loops aninhados, cada um percorrendo até n elementos. Resultado: O(n²). Para 1000 itens = até 1.000.000 operações. Por isso não é usado em produção com dados grandes.'
      },
      {
        tipo: 'multipla',
        pergunta: 'O que [a[j], a[j+1]] = [a[j+1], a[j]] faz?',
        opcoes: [
          'Compara dois elementos',
          'Troca os valores dos dois elementos (swap)',
          'Remove um elemento',
          'Duplica o elemento'
        ],
        correta: 1,
        explicacao: 'É a desestruturação para fazer swap (troca) em uma linha. Sem isso você precisaria de uma variável temporária: let tmp = a[j]; a[j] = a[j+1]; a[j+1] = tmp.'
      },
      {
        tipo: 'completar',
        pergunta: 'Para ordenar array em JS nativo de forma crescente:',
        codigo: '[5,2,8,1].sort((a, b) => a ___ b)',
        resposta: '-',
        explicacao: 'sort((a, b) => a - b) ordena crescente. Se retorna negativo, a vem antes. sort((a, b) => b - a) ordena decrescente.'
      }
    ]
  },

  // ── LIÇÃO 13 ──────────────────────────────────────────────
  {
    id: 'c13',
    titulo: 'Big O Notation — eficiência de algoritmos',
    xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Big O descreve como o tempo de execução cresce conforme o tamanho da entrada aumenta.
      É a linguagem universal para comparar algoritmos.</p>

      <div class="code-example">
O(<span class="c-num">1</span>)      — Constante   — acesso a índice de array<br>
O(log n) — Logarítmico — busca binária<br>
O(n)     — Linear      — busca linear, for loop<br>
O(n²)    — Quadrático  — loops aninhados, bubble sort<br>
O(<span class="c-num">2</span>ⁿ)    — Exponencial — algoritmos recursivos ingênuos
      </div>

      <p>Do mais rápido ao mais lento: O(1) < O(log n) < O(n) < O(n²) < O(2ⁿ)</p>

      <div class="code-example">
<span class="c-cm">// O(1) — sempre 1 passo</span><br>
<span class="c-kw">const</span> primeiro = arr[<span class="c-num">0</span>]<br><br>

<span class="c-cm">// O(n) — cresce com o tamanho</span><br>
<span class="c-kw">for</span> (<span class="c-kw">const</span> item <span class="c-kw">of</span> arr) { ... }<br><br>

<span class="c-cm">// O(n²) — loops aninhados</span><br>
<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < n; i++)<br>
&nbsp;&nbsp;<span class="c-kw">for</span> (<span class="c-kw">let</span> j = <span class="c-num">0</span>; j < n; j++) { ... }
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// ❌ Ruim — O(n²) — evite em produção</span><br>
<span class="c-kw">function</span> <span class="c-fn">temDuplicataLento</span>(arr) {<br>
&nbsp;&nbsp;<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < arr.length; i++)<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">for</span> (<span class="c-kw">let</span> j = i+<span class="c-num">1</span>; j < arr.length; j++)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-kw">if</span> (arr[i] === arr[j]) <span class="c-kw">return</span> <span class="c-kw">true</span><br>
}<br><br>
<span class="c-cm">// ✅ Bom — O(n) — muito mais rápido!</span><br>
<span class="c-kw">function</span> <span class="c-fn">temDuplicataRapido</span>(arr) {<br>
&nbsp;&nbsp;<span class="c-kw">return</span> <span class="c-kw">new</span> Set(arr).size !== arr.length<br>
}
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual a complexidade de acessar arr[0] diretamente?',
        opcoes: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
        correta: 3,
        explicacao: 'Acessar um elemento por índice é sempre O(1) — constante. Não importa se o array tem 10 ou 1 bilhão de elementos, o acesso é instantâneo.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Ordene do mais eficiente ao menos eficiente:',
        opcoes: [
          'O(n²) < O(n) < O(log n) < O(1)',
          'O(1) < O(log n) < O(n) < O(n²)',
          'O(n) < O(1) < O(n²) < O(log n)',
          'Todos são iguais'
        ],
        correta: 1,
        explicacao: 'O(1) é o melhor (constante), depois O(log n), depois O(n) (linear), e O(n²) é o pior entre os comuns. Sempre busque a menor complexidade possível.'
      },
      {
        tipo: 'completar',
        pergunta: 'Um algoritmo com dois loops aninhados sobre n elementos tem complexidade:',
        codigo: '// Dois loops aninhados = O(___)',
        resposta: 'n²',
        explicacao: 'Cada loop interno executa n vezes para cada iteração do loop externo: n × n = n². Sempre que ver loops aninhados, suspeite de O(n²).'
      }
    ]
  },

  // ── LIÇÃO 14 ──────────────────────────────────────────────
  {
    id: 'c14',
    titulo: 'Recursão — funções que chamam a si mesmas',
    xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Recursão é quando uma função chama a si mesma. Parece magia, mas tem lógica clara.
      Todo algoritmo recursivo precisa de dois elementos:</p>

      <ul>
        <li><strong>Caso base</strong> — a condição de parada (sem isso = loop infinito!)</li>
        <li><strong>Caso recursivo</strong> — a função chamando a si mesma com um problema menor</li>
      </ul>

      <div class="code-example">
<span class="c-cm">// Fatorial: 5! = 5 × 4 × 3 × 2 × 1 = 120</span><br>
<span class="c-kw">function</span> <span class="c-fn">fatorial</span>(n) {<br>
&nbsp;&nbsp;<span class="c-kw">if</span> (n <= <span class="c-num">1</span>) <span class="c-kw">return</span> <span class="c-num">1</span>  <span class="c-cm">// caso base!</span><br>
&nbsp;&nbsp;<span class="c-kw">return</span> n * <span class="c-fn">fatorial</span>(n - <span class="c-num">1</span>)   <span class="c-cm">// caso recursivo</span><br>
}<br><br>
<span class="c-fn">fatorial</span>(<span class="c-num">5</span>)  <span class="c-cm">// 5 × 4 × 3 × 2 × 1 = 120</span>
      </div>
    `,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Fibonacci: 0,1,1,2,3,5,8,13,21...</span><br>
<span class="c-kw">function</span> <span class="c-fn">fib</span>(n) {<br>
&nbsp;&nbsp;<span class="c-kw">if</span> (n <= <span class="c-num">1</span>) <span class="c-kw">return</span> n  <span class="c-cm">// caso base</span><br>
&nbsp;&nbsp;<span class="c-kw">return</span> <span class="c-fn">fib</span>(n-<span class="c-num">1</span>) + <span class="c-fn">fib</span>(n-<span class="c-num">2</span>)<br>
}<br><br>
<span class="c-fn">fib</span>(<span class="c-num">7</span>)  <span class="c-cm">// 13</span><br><br>
<span class="c-cm">// ⚠️ Ingênuo acima = O(2ⁿ)</span><br>
<span class="c-cm">// Com memoização = O(n) — muito melhor!</span>
      </div>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que acontece sem o caso base em uma função recursiva?',
        opcoes: [
          'A função retorna undefined',
          'A função executa uma vez e para',
          'Ocorre um Stack Overflow (loop infinito)',
          'O JavaScript para automaticamente'
        ],
        correta: 2,
        explicacao: 'Sem caso base, a função chama a si mesma infinitamente até estourar a pilha de chamadas: "Maximum call stack size exceeded" — Stack Overflow!'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual o resultado de fatorial(4)?',
        opcoes: ['24', '16', '10', '4'],
        correta: 0,
        explicacao: '4! = 4 × 3 × 2 × 1 = 24. A recursão vai: fatorial(4) = 4 × fatorial(3) = 4 × 3 × fatorial(2) = 4 × 3 × 2 × fatorial(1) = 4×3×2×1 = 24.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete o caso base da função de fatorial:',
        codigo: 'function fatorial(n) {\n  if (n <= ___) return 1\n  return n * fatorial(n-1)\n}',
        resposta: '1',
        explicacao: 'O caso base é n <= 1, retornando 1. Isso garante que a recursão pare quando chegar em 1 (ou 0), pois 0! = 1! = 1 por definição matemática.'
      }
    ]
  },

  // ── LIÇÃO 16 ──────────────────────────────────────────────
  {
    id: 'c16', titulo: 'Sets e Maps — coleções modernas', xp: 130,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p><strong>Set</strong> guarda valores únicos (sem duplicatas). <strong>Map</strong> guarda pares chave-valor com qualquer tipo de chave — mais flexível que objetos comuns.</p>
      <div class="code-example">
<span class="c-cm">// Set — elimina duplicatas automaticamente</span>
<span class="c-kw">const</span> nums = <span class="c-kw">new</span> Set([<span class="c-num">1</span>, <span class="c-num">2</span>, <span class="c-num">2</span>, <span class="c-num">3</span>, <span class="c-num">3</span>, <span class="c-num">3</span>])
<span class="c-fn">console</span>.<span class="c-fn">log</span>([...nums])  <span class="c-cm">// [1, 2, 3]</span>

set.<span class="c-fn">add</span>(<span class="c-num">4</span>)
set.<span class="c-fn">has</span>(<span class="c-num">2</span>)     <span class="c-cm">// true</span>
set.<span class="c-fn">delete</span>(<span class="c-num">1</span>)

<span class="c-cm">// Map — chave-valor com qualquer tipo de chave</span>
<span class="c-kw">const</span> usuarios = <span class="c-kw">new</span> Map()
usuarios.<span class="c-fn">set</span>(<span class="c-str">'maycon'</span>, { xp: <span class="c-num">340</span> })
usuarios.<span class="c-fn">get</span>(<span class="c-str">'maycon'</span>)  <span class="c-cm">// { xp: 340 }</span>
usuarios.<span class="c-fn">has</span>(<span class="c-str">'maycon'</span>)  <span class="c-cm">// true</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Remover duplicatas de um array rapidamente</span>
<span class="c-kw">const</span> ids = [<span class="c-num">1</span>,<span class="c-num">2</span>,<span class="c-num">2</span>,<span class="c-num">3</span>,<span class="c-num">1</span>,<span class="c-num">4</span>]
<span class="c-kw">const</span> unicos = [...<span class="c-kw">new</span> Set(ids)]
<span class="c-cm">// [1, 2, 3, 4]</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Para que serve um Set?', opcoes:['Ordenar arrays','Guardar valores únicos, sem duplicatas','Substituir objetos','Fazer loops'], correta:1, explicacao:'Set automaticamente ignora valores duplicados — adicionar um valor que já existe não faz nada. Ótimo para eliminar duplicatas.' },
      { tipo:'multipla', pergunta:'Qual a vantagem do Map sobre objeto comum?', opcoes:['Map é mais rápido sempre','Map aceita qualquer tipo como chave, não só strings','Objeto não existe mais','Map não tem métodos'], correta:1, explicacao:'Objetos JS só aceitam strings/symbols como chave. Map aceita números, objetos, funções como chave — muito mais flexível.' },
      { tipo:'completar', pergunta:'Complete para remover duplicatas de um array usando Set:', codigo:'const unicos = [...new ___(array)]', resposta:'Set', explicacao:'new Set(array) cria um set com valores únicos. O spread [...] converte de volta para array.' }
    ]
  },

  // ── LIÇÃO 17 ──────────────────────────────────────────────
  {
    id: 'c17', titulo: 'Destructuring avançado', xp: 130,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Destructuring vai além do básico — você pode renomear, dar valores padrão e desestruturar aninhado.</p>
      <div class="code-example">
<span class="c-cm">// Renomear durante desestruturação</span>
<span class="c-kw">const</span> { nome: nomeUsuario, xp: pontos } = usuario

<span class="c-cm">// Valor padrão se não existir</span>
<span class="c-kw">const</span> { tema = <span class="c-str">'dark'</span> } = config

<span class="c-cm">// Desestruturação aninhada</span>
<span class="c-kw">const</span> { endereco: { cidade, estado } } = pessoa

<span class="c-cm">// Em arrays — pular elementos</span>
<span class="c-kw">const</span> [, segundo, , quarto] = [<span class="c-num">1</span>,<span class="c-num">2</span>,<span class="c-num">3</span>,<span class="c-num">4</span>]

<span class="c-cm">// Rest no destructuring</span>
<span class="c-kw">const</span> [primeiro, ...resto] = [<span class="c-num">1</span>,<span class="c-num">2</span>,<span class="c-num">3</span>,<span class="c-num">4</span>]
<span class="c-cm">// primeiro = 1, resto = [2,3,4]</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Trocar variáveis sem temp — clássico</span>
<span class="c-kw">let</span> a = <span class="c-num">1</span>, b = <span class="c-num">2</span>
;[a, b] = [b, a]
<span class="c-cm">// a = 2, b = 1</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que { tema = "dark" } faz na desestruturação?', opcoes:['Cria erro','Define "dark" como valor padrão se tema não existir','Sempre usa "dark"','Apaga o tema original'], correta:1, explicacao:'O valor padrão só é usado quando a propriedade é undefined. Se tema já tem valor, esse valor é usado normalmente.' },
      { tipo:'multipla', pergunta:'O que const [primeiro, ...resto] = [1,2,3,4] resulta?', opcoes:['primeiro=1, resto=[2,3,4]','primeiro=[1,2,3,4]','Erro de sintaxe','primeiro=4, resto=[1,2,3]'], correta:0, explicacao:'O rest operator (...) captura todos os elementos restantes num array. primeiro pega o primeiro item, resto pega todo o resto.' },
      { tipo:'completar', pergunta:'Complete para trocar a e b sem variável temporária:', codigo:'[a, b] = [b, ___]', resposta:'a', explicacao:'Desestruturação de array permite trocar valores numa linha: [a,b] = [b,a] atribui simultaneamente, sem precisar de variável auxiliar.' }
    ]
  },

  // ── LIÇÃO 18 ──────────────────────────────────────────────
  {
    id: 'c18', titulo: 'Pilhas e Filas — estruturas lineares', xp: 140,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p><strong>Pilha (Stack)</strong>: último a entrar, primeiro a sair (LIFO). <strong>Fila (Queue)</strong>: primeiro a entrar, primeiro a sair (FIFO).</p>
      <div class="code-example">
<span class="c-cm">// Pilha — como uma pilha de pratos</span>
<span class="c-kw">const</span> pilha = []
pilha.<span class="c-fn">push</span>(<span class="c-num">1</span>)  <span class="c-cm">// [1]</span>
pilha.<span class="c-fn">push</span>(<span class="c-num">2</span>)  <span class="c-cm">// [1,2]</span>
pilha.<span class="c-fn">pop</span>()      <span class="c-cm">// retorna 2, pilha = [1]</span>

<span class="c-cm">// Fila — como uma fila de banco</span>
<span class="c-kw">const</span> fila = []
fila.<span class="c-fn">push</span>(<span class="c-num">1</span>)   <span class="c-cm">// [1]</span>
fila.<span class="c-fn">push</span>(<span class="c-num">2</span>)   <span class="c-cm">// [1,2]</span>
fila.<span class="c-fn">shift</span>()    <span class="c-cm">// retorna 1, fila = [2]</span>
      </div>
      <p><strong>Onde usar:</strong> pilha → histórico de navegação, undo/redo, call stack. Fila → fila de impressão, processamento de tarefas em ordem.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Verificar parênteses balanceados usando pilha</span>
<span class="c-kw">function</span> <span class="c-fn">balanceado</span>(str) {
  <span class="c-kw">const</span> pilha = []
  <span class="c-kw">for</span> (<span class="c-kw">const</span> c <span class="c-kw">of</span> str) {
    <span class="c-kw">if</span> (c === <span class="c-str">'('</span>) pilha.<span class="c-fn">push</span>(c)
    <span class="c-kw">if</span> (c === <span class="c-str">')'</span>) {
      <span class="c-kw">if</span> (pilha.length === <span class="c-num">0</span>) <span class="c-kw">return</span> <span class="c-kw">false</span>
      pilha.<span class="c-fn">pop</span>()
    }
  }
  <span class="c-kw">return</span> pilha.length === <span class="c-num">0</span>
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que LIFO significa?', opcoes:['Last In First Out — último a entrar, primeiro a sair','Linear Input First Output','First In First Out','Last Input For Output'], correta:0, explicacao:'LIFO descreve uma pilha — o último elemento adicionado é o primeiro a ser removido. Como pratos empilhados: você tira do topo.' },
      { tipo:'multipla', pergunta:'Qual método de array remove do início (comportamento de fila)?', opcoes:['pop()','push()','shift()','unshift()'], correta:2, explicacao:'shift() remove e retorna o primeiro elemento do array. unshift() adiciona no início. pop()/push() trabalham no final (pilha).' },
      { tipo:'completar', pergunta:'Complete para adicionar um elemento ao topo de uma pilha:', codigo:'pilha.___(novoElemento)', resposta:'push', explicacao:'push() adiciona ao final do array, que representa o "topo" da pilha. pop() remove desse mesmo lugar.' }
    ]
  },

  // ── LIÇÃO 19 ──────────────────────────────────────────────
  {
    id: 'c19', titulo: 'Árvores e estruturas hierárquicas', xp: 140,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Árvores representam dados hierárquicos: pastas de arquivos, organogramas, o DOM de uma página HTML.</p>
      <div class="code-example">
<span class="c-cm">// Estrutura de nó de árvore</span>
<span class="c-kw">const</span> arvore = {
  valor: <span class="c-num">10</span>,
  esquerda: { valor: <span class="c-num">5</span>, esquerda: <span class="c-kw">null</span>, direita: <span class="c-kw">null</span> },
  direita:  { valor: <span class="c-num">15</span>, esquerda: <span class="c-kw">null</span>, direita: <span class="c-kw">null</span> }
}

<span class="c-cm">// Percorrer em profundidade (DFS) recursivamente</span>
<span class="c-kw">function</span> <span class="c-fn">percorrer</span>(no) {
  <span class="c-kw">if</span> (!no) <span class="c-kw">return</span>
  <span class="c-fn">percorrer</span>(no.esquerda)
  <span class="c-fn">console</span>.<span class="c-fn">log</span>(no.valor)
  <span class="c-fn">percorrer</span>(no.direita)
}
      </div>
      <p><strong>Árvore Binária de Busca (BST):</strong> esquerda sempre menor, direita sempre maior — permite busca em O(log n).</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Buscar em uma BST — O(log n) em árvore balanceada</span>
<span class="c-kw">function</span> <span class="c-fn">buscar</span>(no, valor) {
  <span class="c-kw">if</span> (!no) <span class="c-kw">return</span> <span class="c-kw">false</span>
  <span class="c-kw">if</span> (no.valor === valor) <span class="c-kw">return</span> <span class="c-kw">true</span>
  <span class="c-kw">return</span> valor < no.valor
    ? <span class="c-fn">buscar</span>(no.esquerda, valor)
    : <span class="c-fn">buscar</span>(no.direita, valor)
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Numa Árvore Binária de Busca, onde ficam valores menores que o nó atual?', opcoes:['À direita','À esquerda','Acima','Não importa'], correta:1, explicacao:'Por convenção, em uma BST, a subárvore esquerda contém valores menores e a direita valores maiores que o nó atual. Isso permite busca eficiente.' },
      { tipo:'multipla', pergunta:'Qual estrutura de dados representa melhor uma pasta de arquivos com subpastas?', opcoes:['Array','Pilha','Árvore','Fila'], correta:2, explicacao:'Árvores representam naturalmente hierarquias: uma pasta pode conter subpastas, que contêm mais subpastas — exatamente a estrutura de uma árvore.' },
      { tipo:'completar', pergunta:'Complete a condição de parada na busca em árvore (caso base):', codigo:'function buscar(no, valor) {\n  if (___) return false\n  ...\n}', resposta:'!no', explicacao:'Se o nó é null (chegou ao fim do galho sem achar), retorna false. É o caso base que impede a recursão infinita.' }
    ]
  },

  // ── LIÇÃO 20 ──────────────────────────────────────────────
  {
    id: 'c20', titulo: 'Hash Maps e tabelas hash', xp: 140,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Hash Map é a estrutura de dados mais usada na prática — acesso O(1) através de uma função hash que converte chave em posição de memória.</p>
      <div class="code-example">
<span class="c-cm">// Objeto JS já é um hash map por baixo dos panos</span>
<span class="c-kw">const</span> idade = {}
idade[<span class="c-str">'maycon'</span>] = <span class="c-num">28</span>
idade[<span class="c-str">'ana'</span>] = <span class="c-num">25</span>

<span class="c-fn">console</span>.<span class="c-fn">log</span>(idade[<span class="c-str">'maycon'</span>])  <span class="c-cm">// O(1) — acesso instantâneo!</span>
      </div>
      <p><strong>Como funciona por dentro:</strong> a chave passa por uma função hash que gera um número, esse número vira um índice num array interno. Colisões (duas chaves gerando o mesmo índice) são tratadas com listas encadeadas ou outras técnicas.</p>
      <div class="code-example">
<span class="c-cm">// Contar frequência de palavras — uso clássico de hash map</span>
<span class="c-kw">function</span> <span class="c-fn">contarPalavras</span>(texto) {
  <span class="c-kw">const</span> contagem = {}
  <span class="c-kw">for</span> (<span class="c-kw">const</span> palavra <span class="c-kw">of</span> texto.<span class="c-fn">split</span>(<span class="c-str">' '</span>)) {
    contagem[palavra] = (contagem[palavra] || <span class="c-num">0</span>) + <span class="c-num">1</span>
  }
  <span class="c-kw">return</span> contagem
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Verificar duplicatas em O(n) usando hash map</span>
<span class="c-kw">function</span> <span class="c-fn">temDuplicata</span>(arr) {
  <span class="c-kw">const</span> vistos = {}
  <span class="c-kw">for</span> (<span class="c-kw">const</span> item <span class="c-kw">of</span> arr) {
    <span class="c-kw">if</span> (vistos[item]) <span class="c-kw">return</span> <span class="c-kw">true</span>
    vistos[item] = <span class="c-kw">true</span>
  }
  <span class="c-kw">return</span> <span class="c-kw">false</span>
}
<span class="c-cm">// O(n) — muito melhor que comparar todos com todos O(n²)</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a complexidade de acesso a um valor num hash map?', opcoes:['O(n)','O(log n)','O(1) em média','O(n²)'], correta:2, explicacao:'Hash maps oferecem acesso O(1) em média — a função hash calcula diretamente onde o valor está, sem precisar percorrer nada.' },
      { tipo:'multipla', pergunta:'O que é uma "colisão" em hash maps?', opcoes:['O programa trava','Duas chaves diferentes geram o mesmo índice hash','Erro de sintaxe','Falta de memória'], correta:1, explicacao:'Colisão acontece quando a função hash gera o mesmo índice para duas chaves diferentes. Hash maps tratam isso internamente (geralmente com listas encadeadas no mesmo slot).' },
      { tipo:'completar', pergunta:'Complete para verificar duplicatas eficientemente com hash map:', codigo:'if (vistos[item]) return true\nvistos[item] = ___', resposta:'true', explicacao:'Marcamos o item como visto atribuindo true. Da próxima vez que aparecer, a verificação vistos[item] retorna truthy, detectando a duplicata.' }
    ]
  },

  // ── LIÇÃO 21 ──────────────────────────────────────────────
  {
    id: 'c21', titulo: 'Programação assíncrona — Promises', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Promises representam um valor que estará disponível no futuro — sucesso (resolve) ou falha (reject).</p>
      <div class="code-example">
<span class="c-kw">const</span> promessa = <span class="c-kw">new</span> Promise((resolve, reject) => {
  setTimeout(() => {
    <span class="c-kw">const</span> sucesso = <span class="c-kw">true</span>
    <span class="c-kw">if</span> (sucesso) resolve(<span class="c-str">"Deu certo!"</span>)
    <span class="c-kw">else</span> reject(<span class="c-kw">new</span> Error(<span class="c-str">"Falhou"</span>))
  }, <span class="c-num">1000</span>)
})

<span class="c-cm">// Consumindo com .then/.catch</span>
promessa
  .<span class="c-fn">then</span>(resultado => <span class="c-fn">console</span>.<span class="c-fn">log</span>(resultado))
  .<span class="c-fn">catch</span>(erro => <span class="c-fn">console</span>.<span class="c-fn">error</span>(erro))

<span class="c-cm">// Ou com async/await (mais limpo)</span>
<span class="c-kw">async function</span> <span class="c-fn">executar</span>() {
  <span class="c-kw">try</span> {
    <span class="c-kw">const</span> resultado = <span class="c-kw">await</span> promessa
    <span class="c-fn">console</span>.<span class="c-fn">log</span>(resultado)
  } <span class="c-kw">catch</span> (erro) {
    <span class="c-fn">console</span>.<span class="c-fn">error</span>(erro)
  }
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Os 3 estados de uma Promise</span>
pending   → ainda processando
fulfilled → resolveu com sucesso
rejected  → falhou com erro

<span class="c-cm">// Uma vez resolvida ou rejeitada, não muda mais</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Quantos estados uma Promise pode ter?', opcoes:['2','3','4','Infinitos'], correta:1, explicacao:'Promise tem 3 estados: pending (esperando), fulfilled (sucesso) e rejected (falha). Uma vez fulfilled ou rejected, o estado é definitivo.' },
      { tipo:'multipla', pergunta:'O que reject() faz numa Promise?', opcoes:['Cancela a promise','Marca a promise como falha, acionando o catch','Reinicia a promise','Pausa a execução'], correta:1, explicacao:'reject(erro) marca a Promise como rejeitada. Quem está aguardando com .catch() ou try/catch recebe esse erro.' },
      { tipo:'completar', pergunta:'Complete para capturar o erro de uma Promise com .then:', codigo:'promessa.then(resultado => {...}).___(erro => {...})', resposta:'catch', explicacao:'.catch() captura qualquer erro/rejeição na cadeia de promises. É equivalente ao catch do try/catch em código async/await.' }
    ]
  },

  // ── LIÇÃO 22 ──────────────────────────────────────────────
  {
    id: 'c22', titulo: 'Programação funcional — conceitos', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Programação funcional trata funções como valores de primeira classe e evita mutação de estado.</p>
      <div class="code-example">
<span class="c-cm">// Funções puras — mesmo input, sempre mesmo output, sem efeitos colaterais</span>
<span class="c-cm">// ✅ Pura</span>
<span class="c-kw">const</span> <span class="c-fn">dobrar</span> = n => n * <span class="c-num">2</span>

<span class="c-cm">// ❌ Impura — depende de estado externo</span>
<span class="c-kw">let</span> total = <span class="c-num">0</span>
<span class="c-kw">function</span> <span class="c-fn">adicionar</span>(n) { total += n }

<span class="c-cm">// Imutabilidade — nunca modificar o original</span>
<span class="c-kw">const</span> original = [<span class="c-num">1</span>,<span class="c-num">2</span>,<span class="c-num">3</span>]
<span class="c-kw">const</span> novo = [...original, <span class="c-num">4</span>]  <span class="c-cm">// original não muda</span>

<span class="c-cm">// Higher-order functions — recebem ou retornam funções</span>
<span class="c-kw">const</span> <span class="c-fn">multiplicador</span> = fator => numero => numero * fator
<span class="c-kw">const</span> triplicar = <span class="c-fn">multiplicador</span>(<span class="c-num">3</span>)
triplicar(<span class="c-num">5</span>)  <span class="c-cm">// 15</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Composição de funções</span>
<span class="c-kw">const</span> <span class="c-fn">compor</span> = (...fns) => x => fns.<span class="c-fn">reduceRight</span>((v, f) => f(v), x)

<span class="c-kw">const</span> <span class="c-fn">processar</span> = <span class="c-fn">compor</span>(dobrar, somarUm, quadrado)
<span class="c-fn">processar</span>(<span class="c-num">3</span>) <span class="c-cm">// quadrado(3)=9, somarUm(9)=10, dobrar(10)=20</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que torna uma função "pura"?', opcoes:['Usar pouco código','Mesmo input sempre produz mesmo output, sem efeitos colaterais','Ser muito rápida','Não ter parâmetros'], correta:1, explicacao:'Funções puras são previsíveis e testáveis — não dependem nem modificam estado externo. Facilita debug e testes automatizados.' },
      { tipo:'multipla', pergunta:'O que é uma higher-order function?', opcoes:['Função muito complexa','Função que recebe ou retorna outra função','Função assíncrona','Função recursiva'], correta:1, explicacao:'map, filter e reduce são higher-order functions — recebem uma função como argumento. multiplicador(3) retorna outra função — também é higher-order.' },
      { tipo:'completar', pergunta:'Complete para criar um novo array sem modificar o original (imutabilidade):', codigo:'const novo = [___original, 4]', resposta:'...', explicacao:'O spread operator (...) copia os elementos do array original para um novo array, preservando a imutabilidade do original.' }
    ]
  },

  // ── LIÇÃO 23 ──────────────────────────────────────────────
  {
    id: 'c23', titulo: 'Tratamento de erros robusto', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Código profissional antecipa e trata erros de forma elegante, sem quebrar a aplicação inteira.</p>
      <div class="code-example">
<span class="c-kw">try</span> {
  <span class="c-kw">const</span> dados = JSON.<span class="c-fn">parse</span>(textoInvalido)
} <span class="c-kw">catch</span> (erro) {
  <span class="c-fn">console</span>.<span class="c-fn">error</span>(<span class="c-str">"JSON inválido:"</span>, erro.message)
} <span class="c-kw">finally</span> {
  <span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"Sempre executa, com ou sem erro"</span>)
}

<span class="c-cm">// Criar erros customizados</span>
<span class="c-kw">class</span> <span class="c-fn">ErroValidacao</span> <span class="c-kw">extends</span> Error {
  <span class="c-fn">constructor</span>(campo) {
    <span class="c-kw">super</span>(<span class="c-str">\`Campo inválido: \${campo}\`</span>)
    <span class="c-kw">this</span>.name = <span class="c-str">'ErroValidacao'</span>
    <span class="c-kw">this</span>.campo = campo
  }
}

<span class="c-kw">throw new</span> ErroValidacao(<span class="c-str">'email'</span>)
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Validação com erro customizado</span>
<span class="c-kw">function</span> <span class="c-fn">validarIdade</span>(idade) {
  <span class="c-kw">if</span> (idade < <span class="c-num">0</span> || idade > <span class="c-num">150</span>) {
    <span class="c-kw">throw new</span> ErroValidacao(<span class="c-str">'idade'</span>)
  }
  <span class="c-kw">return</span> idade
}

<span class="c-kw">try</span> {
  <span class="c-fn">validarIdade</span>(-<span class="c-num">5</span>)
} <span class="c-kw">catch</span> (e) {
  <span class="c-kw">if</span> (e <span class="c-kw">instanceof</span> ErroValidacao) {
    <span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">"Erro específico:"</span>, e.campo)
  }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Quando o bloco finally executa?', opcoes:['Só se der erro','Só se não der erro','Sempre, com ou sem erro','Nunca executa'], correta:2, explicacao:'finally sempre executa, independente de o try ter sucesso ou o catch capturar um erro. Útil para limpeza de recursos (fechar conexões, arquivos).' },
      { tipo:'multipla', pergunta:'Por que criar classes de erro customizadas?', opcoes:['É obrigatório','Permite identificar e tratar tipos específicos de erro de forma diferenciada','Deixa o código mais lento','Não tem vantagem real'], correta:1, explicacao:'Com instanceof você pode tratar ErroValidacao diferente de ErroDeRede, por exemplo, dando respostas mais específicas e úteis para cada situação.' },
      { tipo:'completar', pergunta:'Complete para criar uma classe de erro customizada:', codigo:'class ErroAuth extends ___ { }', resposta:'Error', explicacao:'Toda classe de erro customizada deve estender a classe Error nativa do JavaScript, herdando propriedades como message e stack.' }
    ]
  },

  // ── LIÇÃO 24 ──────────────────────────────────────────────
  {
    id: 'c24', titulo: 'Classes e Programação Orientada a Objetos', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Classes são moldes para criar objetos com propriedades e comportamentos (métodos) em comum.</p>
      <div class="code-example">
<span class="c-kw">class</span> Animal {
  <span class="c-fn">constructor</span>(nome, vida) {
    <span class="c-kw">this</span>.nome = nome
    <span class="c-kw">this</span>.vida = vida
  }

  <span class="c-fn">atacar</span>() {
    <span class="c-kw">return</span> <span class="c-str">\`\${this.nome} ataca!\`</span>
  }
}

<span class="c-cm">// Herança — Lobo herda de Animal</span>
<span class="c-kw">class</span> Lobo <span class="c-kw">extends</span> Animal {
  <span class="c-fn">constructor</span>(nome) {
    <span class="c-kw">super</span>(nome, <span class="c-num">100</span>)  <span class="c-cm">// chama o constructor pai</span>
  }

  <span class="c-fn">uivar</span>() {
    <span class="c-kw">return</span> <span class="c-str">\`\${this.nome} uiva! AUUU\`</span>
  }
}

<span class="c-kw">const</span> aro = <span class="c-kw">new</span> Lobo(<span class="c-str">'Aro'</span>)
aro.<span class="c-fn">atacar</span>()  <span class="c-cm">// herdado de Animal</span>
aro.<span class="c-fn">uivar</span>()   <span class="c-cm">// próprio do Lobo</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Encapsulamento com campos privados (#)</span>
<span class="c-kw">class</span> ContaBancaria {
  #saldo = <span class="c-num">0</span>  <span class="c-cm">// privado, só acessível dentro da classe</span>

  <span class="c-fn">depositar</span>(valor) {
    <span class="c-kw">this</span>.#saldo += valor
  }

  <span class="c-fn">getSaldo</span>() {
    <span class="c-kw">return</span> <span class="c-kw">this</span>.#saldo
  }
}
<span class="c-kw">const</span> conta = <span class="c-kw">new</span> ContaBancaria()
conta.<span class="c-fn">depositar</span>(<span class="c-num">100</span>)
<span class="c-cm">// conta.#saldo → erro! não acessível de fora</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que extends faz numa classe?', opcoes:['Cria uma cópia','Implementa herança — a classe filha herda métodos e propriedades da pai','Deleta a classe pai','Cria múltiplas instâncias'], correta:1, explicacao:'extends estabelece herança. A classe filha (Lobo) tem acesso a tudo da classe pai (Animal), além de poder adicionar seus próprios métodos.' },
      { tipo:'multipla', pergunta:'Para que serve super() no constructor de uma classe filha?', opcoes:['Cria um super-poder','Chama o constructor da classe pai, inicializando suas propriedades','Deleta o objeto','É opcional sempre'], correta:1, explicacao:'super() é obrigatório no constructor de uma classe filha antes de usar "this" — ele executa a lógica de inicialização da classe pai primeiro.' },
      { tipo:'completar', pergunta:'Complete para definir um campo privado numa classe:', codigo:'class Conta {\n  ___saldo = 0\n}', resposta:'#', explicacao:'O símbolo # antes do nome torna o campo privado — só acessível dentro da própria classe, não de fora.' }
    ]
  },

  // ── LIÇÃO 25 ──────────────────────────────────────────────
  {
    id: 'c25', titulo: 'Regex — expressões regulares', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Regex (expressões regulares) são padrões para buscar, validar e manipular texto. Parecem assustadoras, mas são extremamente poderosas.</p>
      <div class="code-example">
<span class="c-cm">// Testar se combina com o padrão</span>
<span class="c-kw">const</span> regexEmail = <span class="c-num">/^[\\w.-]+@[\\w.-]+\\.\\w+$/</span>
regexEmail.<span class="c-fn">test</span>(<span class="c-str">"maycon@email.com"</span>)  <span class="c-cm">// true</span>

<span class="c-cm">// Símbolos comuns:</span>
\\d   → dígito (0-9)
\\w   → letra, número ou underscore
\\s   → espaço em branco
+    → 1 ou mais
*    → 0 ou mais
?    → 0 ou 1 (opcional)
^    → início da string
$    → fim da string

<span class="c-cm">// Substituir texto</span>
<span class="c-str">"João  tem   espaços"</span>.<span class="c-fn">replace</span>(<span class="c-num">/\\s+/g</span>, <span class="c-str">' '</span>)
<span class="c-cm">// "João tem espaços" — espaços múltiplos viram um</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Extrair todos os números de um texto</span>
<span class="c-kw">const</span> texto = <span class="c-str">"Tenho 3 gatos e 12500 litros"</span>
<span class="c-kw">const</span> numeros = texto.<span class="c-fn">match</span>(<span class="c-num">/\\d+/g</span>)
<span class="c-cm">// ["3", "12500"]</span>

<span class="c-cm">// Validar telefone brasileiro</span>
<span class="c-kw">const</span> regexTel = <span class="c-num">/^\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}$/</span>
regexTel.<span class="c-fn">test</span>(<span class="c-str">"(31) 98765-4321"</span>)  <span class="c-cm">// true</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que \\d representa numa regex?', opcoes:['Qualquer letra','Qualquer dígito (0-9)','Espaço em branco','Início da linha'], correta:1, explicacao:'\\d é um atalho para [0-9] — combina com qualquer dígito numérico. \\D (maiúsculo) faz o oposto: combina com não-dígitos.' },
      { tipo:'multipla', pergunta:'O que o símbolo + significa numa regex?', opcoes:['Soma dois padrões','1 ou mais ocorrências do elemento anterior','Exatamente 1','0 ocorrências'], correta:1, explicacao:'+ exige pelo menos 1 ocorrência. \\d+ combina com "5", "42", "12500" — qualquer sequência de 1 ou mais dígitos.' },
      { tipo:'completar', pergunta:'Complete para testar se uma string combina com uma regex:', codigo:'const valido = regex.___(texto)', resposta:'test', explicacao:'regex.test(string) retorna true/false se a string combina com o padrão. match() retorna as combinações encontradas, exec() retorna detalhes.' }
    ]
  },
  // ── LIÇÃO 27 ──────────────────────────────────────────────
  {
    id: 'c27', titulo: 'Generators e Iteradores', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p><strong>Generators</strong> são funções que podem pausar e retomar execução, produzindo valores um de cada vez sob demanda.</p>
      <div class="code-example">
<span class="c-kw">function*</span> <span class="c-fn">contador</span>() {
  <span class="c-kw">yield</span> <span class="c-num">1</span>
  <span class="c-kw">yield</span> <span class="c-num">2</span>
  <span class="c-kw">yield</span> <span class="c-num">3</span>
}

<span class="c-kw">const</span> gen = <span class="c-fn">contador</span>()
gen.<span class="c-fn">next</span>()  <span class="c-cm">// { value: 1, done: false }</span>
gen.<span class="c-fn">next</span>()  <span class="c-cm">// { value: 2, done: false }</span>
gen.<span class="c-fn">next</span>()  <span class="c-cm">// { value: 3, done: false }</span>
gen.<span class="c-fn">next</span>()  <span class="c-cm">// { value: undefined, done: true }</span>

<span class="c-cm">// Também funciona com for...of</span>
<span class="c-kw">for</span> (<span class="c-kw">const</span> n <span class="c-kw">of</span> <span class="c-fn">contador</span>()) {
  <span class="c-fn">console</span>.<span class="c-fn">log</span>(n)  <span class="c-cm">// 1, 2, 3</span>
}
      </div>
      <p>O símbolo <code>*</code> após <code>function</code> marca um generator. <code>yield</code> pausa a execução e devolve um valor — diferente de <code>return</code>, que encerra a função.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Generator infinito — sequência Fibonacci sob demanda</span>
<span class="c-kw">function*</span> <span class="c-fn">fibonacci</span>() {
  <span class="c-kw">let</span> [a, b] = [<span class="c-num">0</span>, <span class="c-num">1</span>]
  <span class="c-kw">while</span> (<span class="c-kw">true</span>) {
    <span class="c-kw">yield</span> a
    ;[a, b] = [b, a + b]
  }
}

<span class="c-kw">const</span> fib = <span class="c-fn">fibonacci</span>()
<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < <span class="c-num">10</span>; i++) {
  <span class="c-fn">console</span>.<span class="c-fn">log</span>(fib.<span class="c-fn">next</span>().value)
}
<span class="c-cm">// Só calcula o que é pedido, não a sequência inteira de uma vez!</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que diferencia yield de return numa função?', opcoes:['São idênticos','yield pausa e pode continuar depois, return encerra de vez','return é mais rápido','yield só funciona em loops'], correta:1, explicacao:'yield pausa o generator, preservando seu estado interno. Na próxima chamada de next(), continua exatamente de onde parou — diferente de return que finaliza a função.' },
      { tipo:'multipla', pergunta:'Por que usar generators para sequências infinitas como Fibonacci?', opcoes:['São mais rápidos sempre','Calculam valores sob demanda, sem gerar a sequência inteira de uma vez','É a única forma possível','Usam menos código'], correta:1, explicacao:'Generators são "lazy" — só calculam o próximo valor quando você pede (next()). Isso permite representar sequências infinitas sem estourar a memória.' },
      { tipo:'completar', pergunta:'Complete para declarar uma função generator:', codigo:'function___ contador() { yield 1 }', resposta:'*', explicacao:'O asterisco (*) após function marca a função como generator, habilitando o uso de yield dentro dela.' }
    ]
  },

  // ── LIÇÃO 28 ──────────────────────────────────────────────
  {
    id: 'c28', titulo: 'Memoização e otimização de funções', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p><strong>Memoização</strong> guarda resultados de chamadas já feitas para evitar recálculo — uma das técnicas mais usadas para otimizar funções caras.</p>
      <div class="code-example">
<span class="c-cm">// Fibonacci ingênuo — recalcula tudo, O(2ⁿ)</span>
<span class="c-kw">function</span> <span class="c-fn">fibLento</span>(n) {
  <span class="c-kw">if</span> (n <= <span class="c-num">1</span>) <span class="c-kw">return</span> n
  <span class="c-kw">return</span> <span class="c-fn">fibLento</span>(n-<span class="c-num">1</span>) + <span class="c-fn">fibLento</span>(n-<span class="c-num">2</span>)
}

<span class="c-cm">// Com memoização — O(n)!</span>
<span class="c-kw">function</span> <span class="c-fn">criarFibMemo</span>() {
  <span class="c-kw">const</span> cache = {}
  <span class="c-kw">return function</span> fib(n) {
    <span class="c-kw">if</span> (n <= <span class="c-num">1</span>) <span class="c-kw">return</span> n
    <span class="c-kw">if</span> (cache[n]) <span class="c-kw">return</span> cache[n]
    cache[n] = fib(n-<span class="c-num">1</span>) + fib(n-<span class="c-num">2</span>)
    <span class="c-kw">return</span> cache[n]
  }
}
<span class="c-kw">const</span> fibRapido = <span class="c-fn">criarFibMemo</span>()
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Memoização genérica reutilizável</span>
<span class="c-kw">function</span> <span class="c-fn">memoizar</span>(fn) {
  <span class="c-kw">const</span> cache = <span class="c-kw">new</span> Map()
  <span class="c-kw">return function</span>(...args) {
    <span class="c-kw">const</span> chave = JSON.<span class="c-fn">stringify</span>(args)
    <span class="c-kw">if</span> (cache.<span class="c-fn">has</span>(chave)) <span class="c-kw">return</span> cache.<span class="c-fn">get</span>(chave)
    <span class="c-kw">const</span> resultado = fn(...args)
    cache.<span class="c-fn">set</span>(chave, resultado)
    <span class="c-kw">return</span> resultado
  }
}

<span class="c-kw">const</span> somarMemo = <span class="c-fn">memoizar</span>((a, b) => a + b)
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que memoização faz?', opcoes:['Apaga a memória','Guarda resultados de chamadas já feitas para evitar recálculo','Acelera a internet','Comprime código'], correta:1, explicacao:'Memoização troca uso de memória (guardar resultados) por velocidade (não recalcular). É um exemplo clássico de trade-off espaço vs tempo.' },
      { tipo:'multipla', pergunta:'Por que fibLento(40) é extremamente lento sem memoização?', opcoes:['JavaScript é lento','Recalcula os mesmos subproblemas repetidamente — complexidade exponencial O(2ⁿ)','Falta de memória RAM','Bug no código'], correta:1, explicacao:'Sem memo, fibLento(40) recalcula fibLento(38) centenas de milhares de vezes. Com memoização, cada valor é calculado apenas uma vez: O(n).' },
      { tipo:'completar', pergunta:'Complete a verificação de cache antes de recalcular:', codigo:'if (cache.has(chave)) return cache.___(chave)', resposta:'get', explicacao:'cache.get(chave) recupera o valor já calculado e armazenado, evitando reprocessar a função.' }
    ]
  },

  // ── LIÇÃO 29 ──────────────────────────────────────────────
  {
    id: 'c29', titulo: 'Programação dinâmica — introdução', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Programação dinâmica resolve problemas complexos quebrando-os em subproblemas menores e reaproveitando soluções já calculadas — memoização é uma das técnicas usadas.</p>
      <div class="code-example">
Duas abordagens de DP:

Top-down (memoização)
→ recursão + cache, de cima para baixo

Bottom-up (tabulação)
→ itera de baixo para cima, preenchendo tabela</div>
      <div class="code-example">
<span class="c-cm">// Bottom-up — Fibonacci com tabulação</span>
<span class="c-kw">function</span> <span class="c-fn">fibTabulacao</span>(n) {
  <span class="c-kw">const</span> tabela = [<span class="c-num">0</span>, <span class="c-num">1</span>]
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">2</span>; i <= n; i++) {
    tabela[i] = tabela[i-<span class="c-num">1</span>] + tabela[i-<span class="c-num">2</span>]
  }
  <span class="c-kw">return</span> tabela[n]
}
<span class="c-cm">// O(n) tempo, O(n) espaço — sem recursão!</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Problema clássico: troco mínimo de moedas</span>
<span class="c-kw">function</span> <span class="c-fn">trocoMinimo</span>(moedas, valor) {
  <span class="c-kw">const</span> dp = <span class="c-kw">new</span> Array(valor + <span class="c-num">1</span>).<span class="c-fn">fill</span>(Infinity)
  dp[<span class="c-num">0</span>] = <span class="c-num">0</span>
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">1</span>; i <= valor; i++) {
    <span class="c-kw">for</span> (<span class="c-kw">const</span> moeda <span class="c-kw">of</span> moedas) {
      <span class="c-kw">if</span> (moeda <= i) {
        dp[i] = Math.<span class="c-fn">min</span>(dp[i], dp[i - moeda] + <span class="c-num">1</span>)
      }
    }
  }
  <span class="c-kw">return</span> dp[valor]
}
<span class="c-fn">trocoMinimo</span>([<span class="c-num">1</span>,<span class="c-num">5</span>,<span class="c-num">10</span>,<span class="c-num">25</span>], <span class="c-num">63</span>)  <span class="c-cm">// 6 moedas</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a diferença entre top-down e bottom-up em DP?', opcoes:['São idênticos','Top-down usa recursão+cache, bottom-up itera preenchendo tabela','Bottom-up é sempre pior','Top-down não usa cache'], correta:1, explicacao:'Top-down começa do problema grande e quebra recursivamente (com memoização). Bottom-up começa dos casos base e constrói a solução iterativamente.' },
      { tipo:'multipla', pergunta:'Que tipo de problema se beneficia de programação dinâmica?', opcoes:['Qualquer problema','Problemas com subproblemas sobrepostos e subestrutura ótima','Só problemas matemáticos','Apenas ordenação'], correta:1, explicacao:'DP funciona quando o problema pode ser dividido em subproblemas menores que se repetem (sobrepostos) e a solução ótima usa soluções ótimas dos subproblemas.' },
      { tipo:'completar', pergunta:'Complete a tabulação bottom-up do Fibonacci:', codigo:'tabela[i] = tabela[i-1] + tabela[i-___]', resposta:'2', explicacao:'Fibonacci: cada número é a soma dos dois anteriores. tabela[i-1] + tabela[i-2] constrói a sequência iterativamente.' }
    ]
  },

  // ── LIÇÃO 30 ──────────────────────────────────────────────
  {
    id: 'c30', titulo: 'Algoritmos gulosos (Greedy)', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Algoritmos gulosos tomam a melhor decisão local a cada passo, sem considerar o problema inteiro — mais rápidos, mas nem sempre dão a solução ótima global.</p>
      <div class="code-example">
<span class="c-cm">// Troco com moedas — guloso funciona aqui</span>
<span class="c-kw">function</span> <span class="c-fn">trocoGuloso</span>(moedas, valor) {
  <span class="c-kw">const</span> ordenadas = [...moedas].<span class="c-fn">sort</span>((a,b) => b-a)
  <span class="c-kw">const</span> resultado = []
  <span class="c-kw">for</span> (<span class="c-kw">const</span> moeda <span class="c-kw">of</span> ordenadas) {
    <span class="c-kw">while</span> (valor >= moeda) {
      resultado.<span class="c-fn">push</span>(moeda)
      valor -= moeda
    }
  }
  <span class="c-kw">return</span> resultado
}
<span class="c-fn">trocoGuloso</span>([<span class="c-num">1</span>,<span class="c-num">5</span>,<span class="c-num">10</span>,<span class="c-num">25</span>], <span class="c-num">63</span>)
<span class="c-cm">// [25,25,10,1,1,1] — pega sempre a maior moeda possível</span>
      </div>
      <p>⚠️ Greedy nem sempre é ótimo! Com moedas [1,3,4] para troco de 6: greedy pega 4+1+1 (3 moedas), mas o ótimo é 3+3 (2 moedas).</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Problema da mochila fracionária (greedy funciona)</span>
<span class="c-kw">function</span> <span class="c-fn">mochilaFracionaria</span>(itens, capacidade) {
  itens.<span class="c-fn">sort</span>((a,b) => (b.valor/b.peso) - (a.valor/a.peso))
  <span class="c-kw">let</span> total = <span class="c-num">0</span>
  <span class="c-kw">for</span> (<span class="c-kw">const</span> item <span class="c-kw">of</span> itens) {
    <span class="c-kw">if</span> (capacidade <= <span class="c-num">0</span>) <span class="c-kw">break</span>
    <span class="c-kw">const</span> qtd = Math.<span class="c-fn">min</span>(<span class="c-num">1</span>, capacidade / item.peso)
    total += item.valor * qtd
    capacidade -= item.peso * qtd
  }
  <span class="c-kw">return</span> total
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que caracteriza um algoritmo guloso?', opcoes:['Usa muita memória','Toma a melhor decisão local a cada passo, sem olhar o problema inteiro','Sempre encontra a solução ótima','É sempre mais lento que DP'], correta:1, explicacao:'Greedy escolhe o que parece melhor agora, sem reconsiderar depois. É rápido mas pode não chegar à solução globalmente ótima em todos os casos.' },
      { tipo:'multipla', pergunta:'Por que greedy pode falhar no problema do troco com moedas [1,3,4] para valor 6?', opcoes:['Nunca falha','Escolhe 4 primeiro (maior), resultando em 4+1+1=3 moedas, mas o ótimo é 3+3=2 moedas','É impossível dar troco','Erro de programação'], correta:1, explicacao:'A escolha gulosa da maior moeda nem sempre leva ao menor número total de moedas — esse é um contraexemplo clássico de quando greedy não é ótimo.' },
      { tipo:'completar', pergunta:'Complete para ordenar moedas da maior para a menor:', codigo:"moedas.sort((a,b) => b ___ a)", resposta:'-', explicacao:'b - a ordena de forma decrescente (maior primeiro). a - b ordenaria crescente (menor primeiro).' }
    ]
  },

  // ── LIÇÃO 31 ──────────────────────────────────────────────
  {
    id: 'c31', titulo: 'Grafos — fundamentos', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Grafos modelam relações entre elementos: redes sociais, mapas, dependências de pacotes. São formados por <strong>nós (vértices)</strong> e <strong>conexões (arestas)</strong>.</p>
      <div class="code-example">
<span class="c-cm">// Representação por lista de adjacência</span>
<span class="c-kw">const</span> grafo = {
  A: [<span class="c-str">'B'</span>, <span class="c-str">'C'</span>],
  B: [<span class="c-str">'A'</span>, <span class="c-str">'D'</span>],
  C: [<span class="c-str">'A'</span>, <span class="c-str">'D'</span>],
  D: [<span class="c-str">'B'</span>, <span class="c-str">'C'</span>]
}

<span class="c-cm">// BFS — busca em largura (nível por nível)</span>
<span class="c-kw">function</span> <span class="c-fn">bfs</span>(grafo, inicio) {
  <span class="c-kw">const</span> visitados = <span class="c-kw">new</span> Set([inicio])
  <span class="c-kw">const</span> fila = [inicio]
  <span class="c-kw">const</span> ordem = []

  <span class="c-kw">while</span> (fila.length > <span class="c-num">0</span>) {
    <span class="c-kw">const</span> atual = fila.<span class="c-fn">shift</span>()
    ordem.<span class="c-fn">push</span>(atual)
    <span class="c-kw">for</span> (<span class="c-kw">const</span> vizinho <span class="c-kw">of</span> grafo[atual]) {
      <span class="c-kw">if</span> (!visitados.<span class="c-fn">has</span>(vizinho)) {
        visitados.<span class="c-fn">add</span>(vizinho)
        fila.<span class="c-fn">push</span>(vizinho)
      }
    }
  }
  <span class="c-kw">return</span> ordem
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Grafos com peso — útil para calcular distâncias</span>
<span class="c-kw">const</span> grafoComPeso = {
  A: [{ no: <span class="c-str">'B'</span>, peso: <span class="c-num">5</span> }, { no: <span class="c-str">'C'</span>, peso: <span class="c-num">2</span> }],
  B: [{ no: <span class="c-str">'D'</span>, peso: <span class="c-num">1</span> }],
  C: [{ no: <span class="c-str">'D'</span>, peso: <span class="c-num">7</span> }]
}
<span class="c-cm">// Usado em GPS, redes sociais (graus de separação),</span>
<span class="c-cm">// recomendação de produtos, roteamento de rede</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que BFS (busca em largura) explora primeiro?', opcoes:['O caminho mais profundo','Todos os vizinhos do nível atual antes de avançar','Nós aleatórios','Apenas o último nó'], correta:1, explicacao:'BFS usa uma fila (FIFO) e explora nível por nível — todos os vizinhos diretos antes de ir mais fundo. Ótimo para achar o caminho mais curto em grafos não-ponderados.' },
      { tipo:'multipla', pergunta:'Qual estrutura de dados representa bem um grafo?', opcoes:['Apenas array simples','Lista de adjacência — objeto onde cada chave tem array de vizinhos','String','Número único'], correta:1, explicacao:'Lista de adjacência é a representação mais comum e eficiente — cada nó aponta para seus vizinhos diretos, economizando memória comparado a matriz de adjacência.' },
      { tipo:'completar', pergunta:'Complete a estrutura usada no BFS para processar nós em ordem (FIFO):', codigo:'const ___ = [inicio]  // fila',resposta:'fila', explicacao:'BFS usa uma fila — processa na ordem que foram descobertos. DFS usaria uma pilha (ou recursão) para ir fundo primeiro.' }
    ]
  },

  // ── LIÇÃO 32 ──────────────────────────────────────────────
  {
    id: 'c32', titulo: 'DFS e detecção de ciclos', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p><strong>DFS (busca em profundidade)</strong> explora o mais fundo possível por um caminho antes de voltar (backtrack) e tentar outro.</p>
      <div class="code-example">
<span class="c-cm">// DFS recursivo</span>
<span class="c-kw">function</span> <span class="c-fn">dfs</span>(grafo, no, visitados = <span class="c-kw">new</span> Set()) {
  <span class="c-kw">if</span> (visitados.<span class="c-fn">has</span>(no)) <span class="c-kw">return</span> []
  visitados.<span class="c-fn">add</span>(no)
  <span class="c-kw">const</span> resultado = [no]

  <span class="c-kw">for</span> (<span class="c-kw">const</span> vizinho <span class="c-kw">of</span> grafo[no]) {
    resultado.<span class="c-fn">push</span>(...<span class="c-fn">dfs</span>(grafo, vizinho, visitados))
  }
  <span class="c-kw">return</span> resultado
}
      </div>
      <p><strong>Detectar ciclo</strong> — útil para validar dependências (ex: pacotes npm circulares):</p>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">temCiclo</span>(grafo, no, visitados = <span class="c-kw">new</span> Set(), pilha = <span class="c-kw">new</span> Set()) {
  visitados.<span class="c-fn">add</span>(no)
  pilha.<span class="c-fn">add</span>(no)

  <span class="c-kw">for</span> (<span class="c-kw">const</span> vizinho <span class="c-kw">of</span> grafo[no] || []) {
    <span class="c-kw">if</span> (!visitados.<span class="c-fn">has</span>(vizinho)) {
      <span class="c-kw">if</span> (<span class="c-fn">temCiclo</span>(grafo, vizinho, visitados, pilha)) <span class="c-kw">return</span> <span class="c-kw">true</span>
    } <span class="c-kw">else if</span> (pilha.<span class="c-fn">has</span>(vizinho)) {
      <span class="c-kw">return</span> <span class="c-kw">true</span>  <span class="c-cm">// achou ciclo!</span>
    }
  }
  pilha.<span class="c-fn">delete</span>(no)
  <span class="c-kw">return</span> <span class="c-kw">false</span>
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Quando usar BFS vs DFS</span>
BFS → caminho mais curto, nível por nível
DFS → explorar tudo, detectar ciclos, ordenação topológica

<span class="c-cm">// DFS também resolve labirintos, puzzle solvers</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a diferença fundamental entre BFS e DFS?', opcoes:['São idênticos','BFS explora por nível (largura), DFS explora fundo primeiro (profundidade)','DFS é sempre mais rápido','BFS não usa fila'], correta:1, explicacao:'BFS usa fila e expande por camadas. DFS usa pilha (ou recursão) e vai o mais fundo possível antes de retroceder (backtrack).' },
      { tipo:'multipla', pergunta:'Para que serve detectar ciclos num grafo de dependências?', opcoes:['Não tem utilidade prática','Identificar dependências circulares que causam problemas (ex: pacote A depende de B que depende de A)','Acelerar o código','Ordenar alfabeticamente'], correta:1, explicacao:'Dependências circulares causam loops infinitos ou erros de "cannot resolve". Ferramentas como npm e webpack usam detecção de ciclo para alertar sobre isso.' },
      { tipo:'completar', pergunta:'Complete a estrutura de dados que o DFS recursivo usa implicitamente:', codigo:'// DFS recursivo usa a pilha de ___ do próprio JavaScript', resposta:'chamadas', explicacao:'Cada chamada recursiva empilha um novo frame na call stack — é essa pilha implícita que dá ao DFS seu comportamento de "ir fundo primeiro".' }
    ]
  },

  // ── LIÇÃO 33 ──────────────────────────────────────────────
  {
    id: 'c33', titulo: 'Web APIs do navegador', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Além do JavaScript "puro", o navegador oferece dezenas de APIs poderosas para interagir com o dispositivo e o sistema.</p>
      <div class="code-example">
<span class="c-cm">// LocalStorage — persistência simples no navegador</span>
localStorage.<span class="c-fn">setItem</span>(<span class="c-str">'tema'</span>, <span class="c-str">'dark'</span>)
localStorage.<span class="c-fn">getItem</span>(<span class="c-str">'tema'</span>)     <span class="c-cm">// "dark"</span>
localStorage.<span class="c-fn">removeItem</span>(<span class="c-str">'tema'</span>)

<span class="c-cm">// Geolocalização</span>
navigator.geolocation.<span class="c-fn">getCurrentPosition</span>(pos => {
  <span class="c-fn">console</span>.<span class="c-fn">log</span>(pos.coords.latitude, pos.coords.longitude)
})

<span class="c-cm">// Notificações</span>
Notification.<span class="c-fn">requestPermission</span>().<span class="c-fn">then</span>(perm => {
  <span class="c-kw">if</span> (perm === <span class="c-str">'granted'</span>) {
    <span class="c-kw">new</span> Notification(<span class="c-str">'CodeWisdom'</span>, { body: <span class="c-str">'Lição completa!'</span> })
  }
})
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Clipboard — copiar/colar programaticamente</span>
<span class="c-kw">await</span> navigator.clipboard.<span class="c-fn">writeText</span>(<span class="c-str">'texto copiado'</span>)

<span class="c-cm">// Intersection Observer — detectar quando elemento entra na tela</span>
<span class="c-kw">const</span> observer = <span class="c-kw">new</span> IntersectionObserver((entries) => {
  entries.<span class="c-fn">forEach</span>(entry => {
    <span class="c-kw">if</span> (entry.isIntersecting) {
      entry.target.classList.<span class="c-fn">add</span>(<span class="c-str">'visivel'</span>)
    }
  })
})
observer.<span class="c-fn">observe</span>(elemento)
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a diferença entre localStorage e variáveis JavaScript comuns?', opcoes:['Não há diferença','localStorage persiste mesmo depois de fechar o navegador, variáveis somem ao recarregar a página','Variáveis são mais rápidas sempre','localStorage só funciona com números'], correta:1, explicacao:'localStorage salva dados no disco do navegador — sobrevive a recarregamentos e até fechamento do navegador, diferente de variáveis JS que existem só durante a execução do script.' },
      { tipo:'multipla', pergunta:'Para que serve o Intersection Observer?', opcoes:['Validar formulários','Detectar quando um elemento entra ou sai da área visível da tela','Fazer requisições HTTP','Criar animações CSS'], correta:1, explicacao:'Intersection Observer é eficiente para lazy loading de imagens, animações ao rolar a página, infinite scroll — sem precisar calcular posições manualmente a cada scroll.' },
      { tipo:'completar', pergunta:'Complete para salvar um valor no localStorage:', codigo:"localStorage.___('chave', 'valor')", resposta:'setItem', explicacao:'localStorage.setItem(chave, valor) salva dados como strings. Para objetos, use JSON.stringify antes de salvar e JSON.parse ao recuperar.' }
    ]
  },

  // ── LIÇÃO 34 ──────────────────────────────────────────────
  {
    id: 'c34', titulo: 'Algoritmos de ordenação avançados', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Bubble Sort é didático mas lento. Algoritmos profissionais como Merge Sort e Quick Sort alcançam O(n log n) — muito mais eficientes.</p>
      <div class="code-example">
<span class="c-cm">// Merge Sort — divide e conquista, O(n log n) garantido</span>
<span class="c-kw">function</span> <span class="c-fn">mergeSort</span>(arr) {
  <span class="c-kw">if</span> (arr.length <= <span class="c-num">1</span>) <span class="c-kw">return</span> arr

  <span class="c-kw">const</span> meio = Math.<span class="c-fn">floor</span>(arr.length / <span class="c-num">2</span>)
  <span class="c-kw">const</span> esquerda = <span class="c-fn">mergeSort</span>(arr.<span class="c-fn">slice</span>(<span class="c-num">0</span>, meio))
  <span class="c-kw">const</span> direita = <span class="c-fn">mergeSort</span>(arr.<span class="c-fn">slice</span>(meio))

  <span class="c-kw">return</span> <span class="c-fn">mesclar</span>(esquerda, direita)
}

<span class="c-kw">function</span> <span class="c-fn">mesclar</span>(a, b) {
  <span class="c-kw">const</span> resultado = []
  <span class="c-kw">while</span> (a.length && b.length) {
    resultado.<span class="c-fn">push</span>(a[<span class="c-num">0</span>] <= b[<span class="c-num">0</span>] ? a.<span class="c-fn">shift</span>() : b.<span class="c-fn">shift</span>())
  }
  <span class="c-kw">return</span> [...resultado, ...a, ...b]
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Quick Sort — escolhe um pivô e particiona</span>
<span class="c-kw">function</span> <span class="c-fn">quickSort</span>(arr) {
  <span class="c-kw">if</span> (arr.length <= <span class="c-num">1</span>) <span class="c-kw">return</span> arr
  <span class="c-kw">const</span> pivo = arr[arr.length - <span class="c-num">1</span>]
  <span class="c-kw">const</span> menores = arr.<span class="c-fn">filter</span>((n, i) => n < pivo && i < arr.length-<span class="c-num">1</span>)
  <span class="c-kw">const</span> maiores = arr.<span class="c-fn">filter</span>((n, i) => n >= pivo && i < arr.length-<span class="c-num">1</span>)
  <span class="c-kw">return</span> [...<span class="c-fn">quickSort</span>(menores), pivo, ...<span class="c-fn">quickSort</span>(maiores)]
}
<span class="c-cm">// Média O(n log n), pior caso O(n²) com pivô ruim</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a estratégia do Merge Sort?', opcoes:['Compara pares adjacentes','Divide o array ao meio recursivamente, depois mescla as partes ordenadas','Escolhe um elemento aleatório','Usa hash map'], correta:1, explicacao:'Merge Sort é "dividir para conquistar": divide o array em metades até ter elementos únicos, depois mescla (merge) as partes já ordenadas de volta.' },
      { tipo:'multipla', pergunta:'Por que Merge Sort e Quick Sort são preferidos ao Bubble Sort em produção?', opcoes:['São mais simples de escrever','Têm complexidade O(n log n), muito mais rápidos que O(n²) do Bubble Sort em datasets grandes','Bubble Sort não funciona','Usam menos memória sempre'], correta:1, explicacao:'Para 1 milhão de itens: O(n²) seria ~1 trilhão de operações. O(n log n) seria ~20 milhões. A diferença é absurda em escala — por isso bibliotecas usam algoritmos eficientes.' },
      { tipo:'completar', pergunta:'Complete a complexidade média do Merge Sort e Quick Sort:', codigo:'// Complexidade: O(n ___ n)', resposta:'log', explicacao:'O(n log n) é o "santo graal" de algoritmos de ordenação comparativa — não é possível fazer melhor que isso com comparações, segundo a teoria da complexidade.' }
    ]
  },

  // ── LIÇÃO 35 ──────────────────────────────────────────────
  {
    id: 'c35', titulo: 'Inglês técnico — leitura de documentação', xp: 150,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>Documentação técnica é majoritariamente em inglês. Dominar o vocabulário comum acelera muito seu aprendizado.</p>
      <div class="code-example">
Vocabulário essencial de documentação:

deprecated    → obsoleto, não use mais
breaking change → mudança que quebra compatibilidade
boilerplate   → código repetitivo/padrão
under the hood → "por baixo dos panos"
out of the box → funciona sem configuração extra
edge case     → caso extremo/incomum
workaround    → solução alternativa temporária
best practice → boa prática recomendada</div>
      <div class="code-example">
<span class="c-cm">// Exemplo real de changelog em inglês</span>
"This method is deprecated. Use fetchData()
instead. This is a breaking change in v3.0 —
update your code before upgrading."

<span class="c-cm">// Tradução: "Este método está obsoleto. Use</span>
<span class="c-cm">// fetchData() em vez dele. Esta é uma mudança</span>
<span class="c-cm">// que quebra compatibilidade na v3.0 — atualize</span>
<span class="c-cm">// seu código antes de fazer upgrade."</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Lendo um erro comum em inglês</span>
"TypeError: Cannot read property 'map' of undefined"

<span class="c-cm">// Tradução: "Erro de tipo: não é possível ler a</span>
<span class="c-cm">// propriedade 'map' de undefined"</span>

<span class="c-cm">// Significa: você tentou chamar .map() em algo</span>
<span class="c-cm">// que ainda não tem valor (é undefined)</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que "deprecated" significa em documentação técnica?', opcoes:['Novo recurso','Obsoleto, não deve mais ser usado','Erro crítico','Recurso premium'], correta:1, explicacao:'"Deprecated" sinaliza que algo ainda funciona mas será removido em versões futuras — você deve migrar para a alternativa recomendada o quanto antes.' },
      { tipo:'multipla', pergunta:'O que "breaking change" significa?', opcoes:['Mudança pequena','Mudança que quebra compatibilidade com código existente','Correção de bug simples','Melhoria de performance'], correta:1, explicacao:'Breaking change indica que atualizar a biblioteca pode quebrar seu código atual — geralmente acompanha mudança de versão major (1.x → 2.0).' },
      { tipo:'completar', pergunta:'Complete a tradução de "under the hood":', codigo:'"under the hood" significa "por baixo dos ___"', resposta:'panos', explicacao:'"Under the hood" é uma expressão idiomática que significa "como funciona internamente" — vem da analogia do motor de um carro, escondido sob o capô.' }
    ]
  },

  // ── LIÇÃO 36 ──────────────────────────────────────────────
  {
    id: 'c36', titulo: 'Projeto Final — Visualizador de Algoritmos', xp: 400, tipo: 'projeto',
    teoria: `
      <h3>🦉 Projeto Final da Coruja!</h3>
      <p>Hora de juntar tudo que você aprendeu num projeto real: um visualizador de algoritmos de ordenação rodando no navegador.</p>
      <div class="code-example">
Requisitos do projeto:

1. Interface HTML/CSS exibindo barras representando números
2. Implementar Bubble Sort, Merge Sort e Quick Sort
3. Animar a troca de elementos visualmente
4. Botão para gerar novo array aleatório
5. Mostrar contador de comparações/trocas
6. Publicar no GitHub Pages</div>
      <p>Esse é exatamente o tipo de projeto que vai no seu portfólio — mostra domínio de algoritmos, manipulação do DOM e lógica de programação aplicada visualmente.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Esqueleto básico para começar</span>
<span class="c-kw">function</span> <span class="c-fn">criarBarras</span>(array) {
  container.innerHTML = <span class="c-str">''</span>
  array.<span class="c-fn">forEach</span>(valor => {
    <span class="c-kw">const</span> barra = document.<span class="c-fn">createElement</span>(<span class="c-str">'div'</span>)
    barra.style.height = valor + <span class="c-str">'px'</span>
    barra.className = <span class="c-str">'barra'</span>
    container.<span class="c-fn">appendChild</span>(barra)
  })
}

<span class="c-kw">async function</span> <span class="c-fn">bubbleSortAnimado</span>(array) {
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < array.length; i++) {
    <span class="c-kw">for</span> (<span class="c-kw">let</span> j = <span class="c-num">0</span>; j < array.length - i - <span class="c-num">1</span>; j++) {
      <span class="c-kw">if</span> (array[j] > array[j+<span class="c-num">1</span>]) {
        [array[j], array[j+<span class="c-num">1</span>]] = [array[j+<span class="c-num">1</span>], array[j]]
        <span class="c-fn">criarBarras</span>(array)
        <span class="c-kw">await new</span> Promise(r => setTimeout(r, <span class="c-num">50</span>))
      }
    }
  }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual técnica permite "pausar" a animação entre cada passo do algoritmo?', opcoes:['CSS apenas','async/await com setTimeout dentro de uma Promise','Não é possível animar','Recarregar a página'], correta:1, explicacao:'await new Promise(r => setTimeout(r, ms)) pausa a execução assíncrona, dando tempo para o navegador renderizar cada passo antes de continuar — criando o efeito de animação.' },
      { tipo:'multipla', pergunta:'Por que esse projeto é valioso para portfólio?', opcoes:['É muito simples','Demonstra domínio de algoritmos, DOM e lógica aplicada visualmente — fácil de mostrar e impressionar recrutadores', 'Não tem valor real', 'Só serve para estudo'], correta:1, explicacao:'Projetos visuais e interativos são mais memoráveis para quem avalia seu portfólio do que código sem interface. Mostra que você entende o algoritmo profundamente, não só decorou.' },
      { tipo:'completar', pergunta:'Complete para limpar o container antes de redesenhar as barras:', codigo:"container.___ = ''", resposta:'innerHTML', explicacao:'Setar innerHTML para string vazia remove todos os elementos filhos, permitindo redesenhar do zero a cada passo da animação.' }
    ]
  },


  // ── LIÇÃO 38 ──────────────────────────────────────────────
  {
    id: 'c38', titulo: 'Matemática para devs — álgebra essencial', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Você não precisa ser matemático para programar bem, mas alguns conceitos de álgebra aparecem o tempo todo — em jogos, gráficos, animações e algoritmos.</p>
      <div class="code-example">
<span class="c-cm">// Funções matemáticas comuns em JS</span>
Math.<span class="c-fn">abs</span>(-<span class="c-num">5</span>)        <span class="c-cm">// 5 — valor absoluto</span>
Math.<span class="c-fn">round</span>(<span class="c-num">4.6</span>)      <span class="c-cm">// 5 — arredonda</span>
Math.<span class="c-fn">floor</span>(<span class="c-num">4.9</span>)      <span class="c-cm">// 4 — arredonda pra baixo</span>
Math.<span class="c-fn">ceil</span>(<span class="c-num">4.1</span>)       <span class="c-cm">// 5 — arredonda pra cima</span>
Math.<span class="c-fn">max</span>(<span class="c-num">3</span>,<span class="c-num">7</span>,<span class="c-num">1</span>)     <span class="c-cm">// 7 — maior valor</span>
Math.<span class="c-fn">min</span>(<span class="c-num">3</span>,<span class="c-num">7</span>,<span class="c-num">1</span>)     <span class="c-cm">// 1 — menor valor</span>
Math.<span class="c-fn">sqrt</span>(<span class="c-num">16</span>)       <span class="c-cm">// 4 — raiz quadrada</span>
Math.<span class="c-fn">pow</span>(<span class="c-num">2</span>, <span class="c-num">10</span>)    <span class="c-cm">// 1024 — potência</span>
Math.<span class="c-fn">random</span>()         <span class="c-cm">// 0 a 1 — número aleatório</span>

<span class="c-cm">// Número aleatório num intervalo</span>
<span class="c-kw">function</span> <span class="c-fn">randomEntre</span>(min, max) {
  <span class="c-kw">return</span> Math.<span class="c-fn">floor</span>(Math.<span class="c-fn">random</span>() * (max - min + <span class="c-num">1</span>)) + min
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Calcular distância entre dois pontos (teorema de Pitágoras)</span>
<span class="c-kw">function</span> <span class="c-fn">distancia</span>(x1, y1, x2, y2) {
  <span class="c-kw">return</span> Math.<span class="c-fn">sqrt</span>((x2-x1)**<span class="c-num">2</span> + (y2-y1)**<span class="c-num">2</span>)
}
<span class="c-fn">distancia</span>(<span class="c-num">0</span>,<span class="c-num">0</span>, <span class="c-num">3</span>,<span class="c-num">4</span>)  <span class="c-cm">// 5</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que Math.floor(7.9) retorna?', opcoes:['8','7','7.9','0'], correta:1, explicacao:'Math.floor sempre arredonda para baixo, independente da casa decimal. 7.9 vira 7, assim como 7.1 também viraria 7.' },
      { tipo:'multipla', pergunta:'Como gerar um número aleatório entre 1 e 10 (inclusive)?', opcoes:['Math.random() * 10','Math.floor(Math.random() * 10) + 1','Math.random() + 10','Math.ceil(10)'], correta:1, explicacao:'Math.random() gera entre 0 e 1 (exclusivo). Multiplicar por 10 dá 0-9.99. floor() trunca para 0-9. Somar 1 desloca para 1-10.' },
      { tipo:'completar', pergunta:'Complete para calcular a raiz quadrada de 25:', codigo:'Math.___(25)  // 5', resposta:'sqrt', explicacao:'Math.sqrt() calcula raiz quadrada. Math.cbrt() calcularia raiz cúbica.' }
    ]
  },

  // ── LIÇÃO 39 ──────────────────────────────────────────────
  {
    id: 'c39', titulo: 'Binário, hexadecimal e bitwise', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Computadores pensam em binário (0 e 1). Hexadecimal é uma forma compacta de representar binário — muito usado em cores, memória e permissões.</p>
      <div class="code-example">
<span class="c-cm">// Conversões</span>
(<span class="c-num">10</span>).<span class="c-fn">toString</span>(<span class="c-num">2</span>)    <span class="c-cm">// "1010" — decimal para binário</span>
(<span class="c-num">255</span>).<span class="c-fn">toString</span>(<span class="c-num">16</span>)  <span class="c-cm">// "ff" — decimal para hex</span>
parseInt(<span class="c-str">"1010"</span>, <span class="c-num">2</span>)  <span class="c-cm">// 10 — binário para decimal</span>
parseInt(<span class="c-str">"ff"</span>, <span class="c-num">16</span>)    <span class="c-cm">// 255 — hex para decimal</span>

<span class="c-cm">// Operadores bitwise</span>
<span class="c-num">5</span> & <span class="c-num">3</span>   <span class="c-cm">// AND  → 1  (0101 & 0011 = 0001)</span>
<span class="c-num">5</span> | <span class="c-num">3</span>   <span class="c-cm">// OR   → 7  (0101 | 0011 = 0111)</span>
<span class="c-num">5</span> ^ <span class="c-num">3</span>   <span class="c-cm">// XOR  → 6  (0101 ^ 0011 = 0110)</span>
<span class="c-num">5</span> << <span class="c-num">1</span>  <span class="c-cm">// shift esquerda → 10 (dobra)</span>
<span class="c-num">5</span> >> <span class="c-num">1</span>  <span class="c-cm">// shift direita → 2 (divide por 2)</span>
      </div>
      <p>Hexadecimal é usado em cores CSS (<code>#7c6ff7</code>), endereços de memória, hashes MD5/SHA.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Verificar se um número é par usando bitwise (mais rápido)</span>
<span class="c-kw">function</span> <span class="c-fn">ehPar</span>(n) {
  <span class="c-kw">return</span> (n & <span class="c-num">1</span>) === <span class="c-num">0</span>
}
<span class="c-cm">// O último bit de número par é sempre 0</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Quantos dígitos diferentes existem em hexadecimal?', opcoes:['2','10','16','8'], correta:2, explicacao:'Hexadecimal usa 16 dígitos: 0-9 e depois a-f (representando 10-15). Por isso "hex" no nome — base 16.' },
      { tipo:'multipla', pergunta:'O que o operador & (AND bitwise) faz entre 5 e 3?', opcoes:['Soma os números','Compara bit a bit, resultado 1 só onde ambos são 1','Multiplica','Divide'], correta:1, explicacao:'5 = 0101, 3 = 0011. AND bit a bit: 0101 & 0011 = 0001 = 1. Só onde os dois bits são 1, o resultado é 1.' },
      { tipo:'completar', pergunta:'Complete para converter 255 para hexadecimal:', codigo:'(255).toString(___)  // "ff"', resposta:'16', explicacao:'toString(16) converte para base 16 (hexadecimal). toString(2) converteria para binário, toString(8) para octal.' }
    ]
  },

  // ── LIÇÃO 40 ──────────────────────────────────────────────
  {
    id: 'c40', titulo: 'Strings — manipulação avançada', xp: 140,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Strings têm dezenas de métodos úteis além dos básicos. Dominar eles acelera muito tarefas do dia a dia.</p>
      <div class="code-example">
<span class="c-kw">const</span> texto = <span class="c-str">"  CodeWisdom é incrível  "</span>

texto.<span class="c-fn">trim</span>()              <span class="c-cm">// remove espaços nas pontas</span>
texto.<span class="c-fn">toLowerCase</span>()        <span class="c-cm">// minúsculas</span>
texto.<span class="c-fn">toUpperCase</span>()        <span class="c-cm">// maiúsculas</span>
texto.<span class="c-fn">includes</span>(<span class="c-str">"Wisdom"</span>)  <span class="c-cm">// true</span>
texto.<span class="c-fn">startsWith</span>(<span class="c-str">"  Code"</span>) <span class="c-cm">// true</span>
texto.<span class="c-fn">replace</span>(<span class="c-str">"incrível"</span>, <span class="c-str">"demais"</span>)
texto.<span class="c-fn">split</span>(<span class="c-str">" "</span>)         <span class="c-cm">// transforma em array</span>
texto.<span class="c-fn">padStart</span>(<span class="c-num">30</span>, <span class="c-str">"0"</span>)  <span class="c-cm">// preenche com zeros à esquerda</span>
texto.<span class="c-fn">slice</span>(<span class="c-num">2</span>, <span class="c-num">6</span>)        <span class="c-cm">// extrai parte da string</span>
texto.<span class="c-fn">repeat</span>(<span class="c-num">2</span>)           <span class="c-cm">// repete a string</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Capitalizar primeira letra de cada palavra</span>
<span class="c-kw">function</span> <span class="c-fn">capitalizar</span>(texto) {
  <span class="c-kw">return</span> texto
    .<span class="c-fn">split</span>(<span class="c-str">' '</span>)
    .<span class="c-fn">map</span>(p => p[<span class="c-num">0</span>].<span class="c-fn">toUpperCase</span>() + p.<span class="c-fn">slice</span>(<span class="c-num">1</span>))
    .<span class="c-fn">join</span>(<span class="c-str">' '</span>)
}
<span class="c-fn">capitalizar</span>(<span class="c-str">"code wisdom app"</span>)  <span class="c-cm">// "Code Wisdom App"</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que "hello".padStart(8, "0") retorna?', opcoes:['"hello"','"000hello"','"hello000"','Erro'], correta:1, explicacao:'padStart preenche no INÍCIO até atingir o tamanho total (8). "hello" tem 5 chars, precisa de 3 zeros: "000hello".' },
      { tipo:'multipla', pergunta:'Qual método divide uma string em array por um separador?', opcoes:['join()','split()','slice()','concat()'], correta:1, explicacao:'split(separador) quebra a string em array. "a,b,c".split(",") → ["a","b","c"]. join() faz o oposto: array vira string.' },
      { tipo:'completar', pergunta:'Complete para verificar se um texto contém uma palavra:', codigo:'texto.___("palavra")', resposta:'includes', explicacao:'includes() retorna true/false se a substring está presente. É case-sensitive — "ABC".includes("abc") seria false.' }
    ]
  },

  // ── LIÇÃO 41 ──────────────────────────────────────────────
  {
    id: 'c41', titulo: 'Datas e horários em JavaScript', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Trabalhar com datas é notoriamente complicado — fusos horários, formatos diferentes, meses começando do zero. Vamos dominar o básico.</p>
      <div class="code-example">
<span class="c-kw">const</span> agora = <span class="c-kw">new</span> Date()

agora.<span class="c-fn">getFullYear</span>()   <span class="c-cm">// 2026</span>
agora.<span class="c-fn">getMonth</span>()       <span class="c-cm">// 0-11 (janeiro=0!)</span>
agora.<span class="c-fn">getDate</span>()        <span class="c-cm">// dia do mês 1-31</span>
agora.<span class="c-fn">getDay</span>()         <span class="c-cm">// dia da semana 0-6 (domingo=0)</span>
agora.<span class="c-fn">getHours</span>()       <span class="c-cm">// 0-23</span>

<span class="c-cm">// Criar data específica</span>
<span class="c-kw">const</span> data = <span class="c-kw">new</span> Date(<span class="c-num">2026</span>, <span class="c-num">5</span>, <span class="c-num">30</span>)  <span class="c-cm">// 30 de junho (mês 5 = junho!)</span>

<span class="c-cm">// Formatar para o usuário</span>
agora.<span class="c-fn">toLocaleDateString</span>(<span class="c-str">'pt-BR'</span>)  <span class="c-cm">// "30/06/2026"</span>
agora.<span class="c-fn">toLocaleTimeString</span>(<span class="c-str">'pt-BR'</span>)  <span class="c-cm">// "14:30:00"</span>

<span class="c-cm">// Diferença entre datas (em milissegundos)</span>
<span class="c-kw">const</span> diff = data2 - data1
<span class="c-kw">const</span> dias = diff / (<span class="c-num">1000</span> * <span class="c-num">60</span> * <span class="c-num">60</span> * <span class="c-num">24</span>)
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Calcular streak — dias consecutivos (como no CodeWisdom!)</span>
<span class="c-kw">function</span> <span class="c-fn">diasDeStreak</span>(ultimoAcesso) {
  <span class="c-kw">const</span> hoje = <span class="c-kw">new</span> Date().toDateString()
  <span class="c-kw">const</span> ontem = <span class="c-kw">new</span> Date(Date.now() - <span class="c-num">86400000</span>).toDateString()
  <span class="c-kw">if</span> (ultimoAcesso === ontem) <span class="c-kw">return</span> <span class="c-str">'continua'</span>
  <span class="c-kw">if</span> (ultimoAcesso === hoje) <span class="c-kw">return</span> <span class="c-str">'já contou hoje'</span>
  <span class="c-kw">return</span> <span class="c-str">'quebrou'</span>
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que getMonth() de janeiro retorna 0, não 1?', opcoes:['Bug do JavaScript','Os meses são indexados a partir de 0, como arrays','Janeiro não existe','É opcional'], correta:1, explicacao:'É uma decisão de design (questionável) do JS original — meses vão de 0 (janeiro) a 11 (dezembro). Sempre cuidado ao exibir para o usuário: some +1.' },
      { tipo:'multipla', pergunta:'Como calcular a diferença em dias entre duas datas?', opcoes:['data2 - data1','Subtrair os objetos Date (resulta em ms) e dividir por 86400000','Não é possível em JS','Usar apenas getDate()'], correta:1, explicacao:'Subtrair dois objetos Date retorna a diferença em milissegundos. Dividir por 1000*60*60*24 (86400000) converte para dias.' },
      { tipo:'completar', pergunta:'Complete para formatar a data no padrão brasileiro:', codigo:"data.toLocaleDateString('___')",resposta:'pt-BR', explicacao:"toLocaleDateString('pt-BR') formata como DD/MM/AAAA, o padrão brasileiro. 'en-US' formataria como MM/DD/AAAA." }
    ]
  },

  // ── LIÇÃO 42 ──────────────────────────────────────────────
  {
    id: 'c42', titulo: 'JSON — formato universal de dados', xp: 140,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>JSON (JavaScript Object Notation) é o formato padrão para troca de dados na web — entre frontend, backend e APIs.</p>
      <div class="code-example">
<span class="c-cm">// Objeto JavaScript → string JSON</span>
<span class="c-kw">const</span> usuario = { nome: <span class="c-str">"Maycon"</span>, xp: <span class="c-num">340</span>, ativo: <span class="c-kw">true</span> }
<span class="c-kw">const</span> jsonString = JSON.<span class="c-fn">stringify</span>(usuario)
<span class="c-cm">// '{"nome":"Maycon","xp":340,"ativo":true}'</span>

<span class="c-cm">// String JSON → objeto JavaScript</span>
<span class="c-kw">const</span> objetoDeVolta = JSON.<span class="c-fn">parse</span>(jsonString)

<span class="c-cm">// Formatado (legível)</span>
JSON.<span class="c-fn">stringify</span>(usuario, <span class="c-kw">null</span>, <span class="c-num">2</span>)
<span class="c-cm">// {
//   "nome": "Maycon",
//   "xp": 340,
//   "ativo": true
// }</span>
      </div>
      <p>Regras do JSON: chaves sempre entre aspas duplas, sem comentários, sem funções, sem undefined.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Salvar objeto complexo no localStorage</span>
<span class="c-kw">const</span> progresso = { xp: <span class="c-num">340</span>, licoes: [<span class="c-str">'c1'</span>,<span class="c-str">'c2'</span>] }
localStorage.<span class="c-fn">setItem</span>(<span class="c-str">'progresso'</span>, JSON.<span class="c-fn">stringify</span>(progresso))

<span class="c-cm">// Recuperar de volta</span>
<span class="c-kw">const</span> salvo = JSON.<span class="c-fn">parse</span>(localStorage.<span class="c-fn">getItem</span>(<span class="c-str">'progresso'</span>))
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Para que serve JSON.stringify()?', opcoes:['Valida JSON','Converte objeto JavaScript em string JSON','Conecta a uma API','Deleta propriedades'], correta:1, explicacao:'stringify converte um objeto/array JS em texto JSON — necessário para enviar dados via fetch ou salvar no localStorage (que só aceita strings).' },
      { tipo:'multipla', pergunta:'Por que localStorage precisa de JSON.stringify para guardar objetos?', opcoes:['Não precisa','localStorage só armazena strings, não objetos diretamente','É mais rápido','JSON é obrigatório por lei'], correta:1, explicacao:'localStorage.setItem só aceita strings como valor. Se você passar um objeto direto, ele vira "[object Object]" — perdendo os dados. stringify resolve isso.' },
      { tipo:'completar', pergunta:'Complete para converter uma string JSON de volta em objeto:', codigo:'const obj = JSON.___(jsonString)', resposta:'parse', explicacao:'JSON.parse() faz o caminho inverso do stringify — transforma texto JSON em objeto/array JavaScript utilizável.' }
    ]
  },

  // ── LIÇÃO 43 ──────────────────────────────────────────────
  {
    id: 'c43', titulo: 'Padrões de design simples — MVC e Observer', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Padrões de design são soluções testadas para problemas comuns de organização de código. Vamos ver dois fundamentais.</p>
      <div class="code-example">
<span class="c-cm">// MVC — Model, View, Controller</span>
Model      → dados e lógica de negócio
View       → interface, o que o usuário vê
Controller → conecta Model e View, processa ações</div>
      <div class="code-example">
<span class="c-cm">// Observer — quem se inscreve é notificado de mudanças</span>
<span class="c-kw">class</span> EventEmitter {
  <span class="c-fn">constructor</span>() { <span class="c-kw">this</span>.listeners = {} }

  <span class="c-fn">on</span>(evento, callback) {
    <span class="c-kw">if</span> (!<span class="c-kw">this</span>.listeners[evento]) <span class="c-kw">this</span>.listeners[evento] = []
    <span class="c-kw">this</span>.listeners[evento].<span class="c-fn">push</span>(callback)
  }

  <span class="c-fn">emit</span>(evento, dados) {
    (<span class="c-kw">this</span>.listeners[evento] || []).<span class="c-fn">forEach</span>(cb => cb(dados))
  }
}

<span class="c-kw">const</span> emitter = <span class="c-kw">new</span> EventEmitter()
emitter.<span class="c-fn">on</span>(<span class="c-str">'xpGanho'</span>, xp => <span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">\`+\${xp} XP!\`</span>))
emitter.<span class="c-fn">emit</span>(<span class="c-str">'xpGanho'</span>, <span class="c-num">100</span>)
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// O addEventListener do browser é um Observer!</span>
botao.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, () => {})
<span class="c-cm">// botao "emite" o evento click, sua função "observa"</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'No padrão MVC, onde fica a lógica de negócio?', opcoes:['View','Controller','Model','Nenhum dos três'], correta:2, explicacao:'Model representa os dados e regras de negócio. View é a apresentação visual. Controller conecta os dois, processando ações do usuário.' },
      { tipo:'multipla', pergunta:'O que o padrão Observer permite?', opcoes:['Acelerar o código','Objetos se inscreverem para serem notificados quando algo acontece','Criar classes','Conectar ao banco'], correta:1, explicacao:'Observer desacopla quem gera eventos de quem reage a eles. addEventListener, EventEmitter do Node, e sistemas pub/sub seguem esse padrão.' },
      { tipo:'completar', pergunta:'Complete o método que dispara um evento no EventEmitter:', codigo:'emitter.___("xpGanho", 100)', resposta:'emit', explicacao:'emit() dispara o evento, chamando todos os callbacks inscritos com on() para aquele evento específico.' }
    ]
  },

  // ── LIÇÃO 44 ──────────────────────────────────────────────
  {
    id: 'c44', titulo: 'Debugging — encontrando e corrigindo bugs', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Debugging é uma habilidade tão importante quanto escrever código. Saber onde procurar economiza horas de frustração.</p>
      <div class="code-example">
<span class="c-cm">// console — seu melhor amigo</span>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(variavel)           <span class="c-cm">// valor simples</span>
<span class="c-fn">console</span>.<span class="c-fn">table</span>(array)           <span class="c-cm">// visualiza array/objeto em tabela</span>
<span class="c-fn">console</span>.<span class="c-fn">error</span>(<span class="c-str">"deu ruim"</span>)      <span class="c-cm">// destaque vermelho</span>
<span class="c-fn">console</span>.<span class="c-fn">warn</span>(<span class="c-str">"atenção"</span>)      <span class="c-cm">// destaque amarelo</span>
<span class="c-fn">console</span>.<span class="c-fn">trace</span>()              <span class="c-cm">// mostra de onde a função foi chamada</span>

<span class="c-cm">// debugger — pausa a execução no DevTools</span>
<span class="c-kw">function</span> <span class="c-fn">calcular</span>(a, b) {
  debugger  <span class="c-cm">// o navegador para aqui se DevTools aberto</span>
  <span class="c-kw">return</span> a + b
}
      </div>
      <p><strong>Estratégia de debug eficiente:</strong> isole o problema (comente partes do código), confirme suas suposições com console.log, leia a stack trace de baixo pra cima.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Lendo uma stack trace</span>
TypeError: Cannot read property 'map' of undefined
  at processarDados (app.js:45)
  at buscarPostos (app.js:23)
  at main (app.js:5)

<span class="c-cm">// Leia de baixo pra cima: main chamou buscarPostos,</span>
<span class="c-cm">// que chamou processarDados, que falhou na linha 45</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que console.table() faz de diferente do console.log()?', opcoes:['Nada, são iguais','Exibe arrays/objetos formatados como tabela, mais fácil de ler','É mais rápido','Só funciona com números'], correta:1, explicacao:'console.table() é excelente para visualizar arrays de objetos — mostra cada propriedade como coluna, muito mais legível que log() para dados tabulares.' },
      { tipo:'multipla', pergunta:'Em que ordem ler uma stack trace para entender o erro?', opcoes:['De cima para baixo sempre','De baixo para cima — a primeira linha é onde o erro ocorreu de fato','Não importa a ordem','Só a última linha importa'], correta:1, explicacao:'A primeira linha mostra exatamente onde o erro aconteceu. As linhas abaixo mostram a cadeia de chamadas que levou até ali — útil para entender o contexto.' },
      { tipo:'completar', pergunta:'Complete a palavra-chave que pausa a execução no DevTools:', codigo:'function f() {\n  ___\n  return x\n}', resposta:'debugger', explicacao:'A palavra-chave debugger pausa a execução naquele ponto exato, se o DevTools estiver aberto — permite inspecionar variáveis ao vivo.' }
    ]
  },

  // ── LIÇÃO 45 ──────────────────────────────────────────────
  {
    id: 'c45', titulo: 'Inglês técnico — comunicação em times', xp: 160,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>Mesmo em times brasileiros, é comum escrever commits, PRs e comentários em inglês — padrão internacional do mercado.</p>
      <div class="code-example">
Verbos comuns em commits (Conventional Commits):

feat:     → nova funcionalidade
fix:      → correção de bug
refactor: → reorganização sem mudar comportamento
docs:     → documentação
test:     → testes
chore:    → tarefas de manutenção

<span class="c-cm">// Exemplos:</span>
feat: add user authentication
fix: resolve null pointer in payment flow
refactor: simplify database query logic</div>
      <div class="code-example">
Frases comuns em code review:

"LGTM" → Looks Good To Me (parece bom pra mim)
"nit:" → nitpick (correção pequena, não bloqueante)
"blocking" → impede aprovação até resolver
"Could you also..." → sugestão educada
"WDYT?" → What Do You Think? (o que você acha?)</div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Comentário típico de code review em inglês</span>
"nit: consider renaming this variable for clarity"

<span class="c-cm">// Tradução: "pequena observação: considere renomear</span>
<span class="c-cm">// essa variável para maior clareza" — sugestão leve,</span>
<span class="c-cm">// não bloqueia o merge</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que "LGTM" significa em code review?', opcoes:['Let\'s Go To Meeting','Looks Good To Me — aprovação informal','Logic Got The Message','Não é uma sigla real'], correta:1, explicacao:'LGTM é extremamente comum em PRs — significa que o revisor aprovou e está satisfeito com o código, sem ressalvas grandes.' },
      { tipo:'multipla', pergunta:'O que "nit:" antes de um comentário de review significa?', opcoes:['Erro crítico que bloqueia','Observação pequena, não bloqueante (nitpick)','Elogio','Pergunta obrigatória'], correta:1, explicacao:'"nit" (nitpick) sinaliza que é uma sugestão menor — o autor pode ignorar sem problemas se discordar, diferente de um comentário "blocking".' },
      { tipo:'completar', pergunta:'Complete o prefixo de commit para uma correção de bug:', codigo:'___: resolve login error', resposta:'fix', explicacao:'fix: é o padrão Conventional Commits para correções de bug. feat: seria para novas funcionalidades.' }
    ]
  },

  // ── LIÇÃO 46 ──────────────────────────────────────────────
  {
    id: 'c46', titulo: 'Complexidade de espaço e trade-offs', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Além de tempo (Big O), algoritmos também têm complexidade de <strong>espaço</strong> — quanta memória extra usam.</p>
      <div class="code-example">
<span class="c-cm">// O(1) espaço — não cria estruturas extras</span>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(arr) {
  <span class="c-kw">let</span> total = <span class="c-num">0</span>
  <span class="c-kw">for</span> (<span class="c-kw">const</span> n <span class="c-kw">of</span> arr) total += n
  <span class="c-kw">return</span> total
}

<span class="c-cm">// O(n) espaço — cria novo array do tamanho do original</span>
<span class="c-kw">function</span> <span class="c-fn">dobrarTodos</span>(arr) {
  <span class="c-kw">return</span> arr.<span class="c-fn">map</span>(n => n * <span class="c-num">2</span>)
}
      </div>
      <p><strong>Trade-off clássico:</strong> memoização troca espaço (cache) por tempo (evita recálculo). Você quase sempre escolhe entre usar mais memória OU mais tempo de processamento.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Mesma tarefa, duas abordagens diferentes</span>

<span class="c-cm">// Rápido em tempo, caro em espaço</span>
<span class="c-kw">function</span> <span class="c-fn">temDuplicataRapido</span>(arr) {
  <span class="c-kw">return new</span> Set(arr).size !== arr.length  <span class="c-cm">// O(n) tempo, O(n) espaço</span>
}

<span class="c-cm">// Lento em tempo, econômico em espaço</span>
<span class="c-kw">function</span> <span class="c-fn">temDuplicataLento</span>(arr) {
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i=<span class="c-num">0</span>; i<arr.length; i++)
    <span class="c-kw">for</span> (<span class="c-kw">let</span> j=i+<span class="c-num">1</span>; j<arr.length; j++)
      <span class="c-kw">if</span> (arr[i]===arr[j]) <span class="c-kw">return true</span>
  <span class="c-kw">return false</span>  <span class="c-cm">// O(n²) tempo, O(1) espaço</span>
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que complexidade de espaço mede?', opcoes:['Velocidade do código','Quanta memória extra o algoritmo usa além da entrada','Tamanho do código fonte','Número de funções'], correta:1, explicacao:'Complexidade de espaço mede o uso de memória adicional — estruturas de dados criadas, variáveis auxiliares, pilha de recursão — não conta a entrada original.' },
      { tipo:'multipla', pergunta:'Qual o trade-off clássico da memoização?', opcoes:['Não existe trade-off','Troca espaço (cache) por tempo (evita recálculo)','Só funciona com números','Sempre piora a performance'], correta:1, explicacao:'Memoização usa MAIS memória (guardando resultados) para ganhar MENOS tempo (evitando recálculo). É uma decisão consciente baseada no que é mais crítico no seu caso.' },
      { tipo:'completar', pergunta:'Complete a complexidade de espaço de uma função que só usa uma variável acumuladora:', codigo:'// Usa O(___) de espaço extra — constante', resposta:'1', explicacao:'O(1) significa espaço constante — não importa o tamanho da entrada, a memória extra usada permanece a mesma (só a variável total, por exemplo).' }
    ]
  },

  // ── LIÇÃO 47 ──────────────────────────────────────────────
  {
    id: 'c47', titulo: 'Boas práticas e Clean Code básico', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Código limpo é lido muito mais vezes do que é escrito. Pequenas práticas fazem enorme diferença na manutenibilidade.</p>
      <div class="code-example">
<span class="c-cm">// ❌ Nomes ruins</span>
<span class="c-kw">const</span> d = <span class="c-num">5</span>
<span class="c-kw">function</span> <span class="c-fn">calc</span>(a, b) { <span class="c-kw">return</span> a*b*<span class="c-num">0.1</span> }

<span class="c-cm">// ✅ Nomes descritivos</span>
<span class="c-kw">const</span> diasParaEntrega = <span class="c-num">5</span>
<span class="c-kw">function</span> <span class="c-fn">calcularDesconto</span>(preco, quantidade) {
  <span class="c-kw">return</span> preco * quantidade * <span class="c-num">0.1</span>
}

<span class="c-cm">// ❌ Função fazendo coisas demais</span>
<span class="c-kw">function</span> <span class="c-fn">processarPedido</span>(pedido) {
  <span class="c-cm">// valida, calcula, salva no banco, envia email...</span>
}

<span class="c-cm">// ✅ Funções pequenas, uma responsabilidade cada</span>
<span class="c-kw">function</span> <span class="c-fn">validarPedido</span>(pedido) { ... }
<span class="c-kw">function</span> <span class="c-fn">calcularTotal</span>(pedido) { ... }
<span class="c-kw">function</span> <span class="c-fn">salvarPedido</span>(pedido) { ... }
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Evite "números mágicos" sem explicação</span>
<span class="c-cm">// ❌</span>
<span class="c-kw">if</span> (idade >= <span class="c-num">18</span>) { ... }

<span class="c-cm">// ✅</span>
<span class="c-kw">const</span> IDADE_MINIMA = <span class="c-num">18</span>
<span class="c-kw">if</span> (idade >= IDADE_MINIMA) { ... }
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que evitar "números mágicos" (valores fixos sem nome) no código?', opcoes:['Deixa o código mais rápido','Sem contexto, fica difícil entender o que o número significa e por que aquele valor', 'É proibido pelo JavaScript','Não há motivo real'], correta:1, explicacao:'const IDADE_MINIMA = 18 é autoexplicativo. O número 18 sozinho no meio do código não diz por que é 18, nem onde mais ele deveria ser usado se mudasse.' },
      { tipo:'multipla', pergunta:'O que significa o princípio de "uma responsabilidade por função"?', opcoes:['Cada função deve fazer várias coisas para ser eficiente','Cada função deve ter um propósito único e bem definido','Funções devem ser sempre curtas','Não pode ter mais de uma função por arquivo'], correta:1, explicacao:'Funções focadas em uma única tarefa são mais fáceis de testar, entender, reutilizar e debugar. É um dos pilares do Clean Code e do princípio SOLID (Single Responsibility).' },
      { tipo:'completar', pergunta:'Complete o nome mais descritivo para uma variável que guarda dias até entrega:', codigo:'const ___ = 5  // em vez de "const d = 5"', resposta:'diasParaEntrega', explicacao:'Nomes descritivos eliminam a necessidade de comentários explicando o que a variável representa — o código se autodocumenta.' }
    ]
  },


  // ── LIÇÃO 49 ──────────────────────────────────────────────
  {
    id: 'c49', titulo: 'Testes básicos — por que e como testar', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Testar código manualmente toda vez é cansativo e propenso a erro. Testes automatizados rodam em segundos e pegam regressões antes de chegar em produção.</p>
      <div class="code-example">
<span class="c-cm">// Teste simples sem biblioteca — só pra entender o conceito</span>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(a, b) { <span class="c-kw">return</span> a + b }

<span class="c-kw">function</span> <span class="c-fn">testar</span>(nome, condicao) {
  <span class="c-kw">if</span> (condicao) <span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">\`✅ \${nome}\`</span>)
  <span class="c-kw">else</span> <span class="c-fn">console</span>.<span class="c-fn">error</span>(<span class="c-str">\`❌ \${nome}\`</span>)
}

<span class="c-fn">testar</span>(<span class="c-str">'soma positivos'</span>, <span class="c-fn">somar</span>(<span class="c-num">2</span>,<span class="c-num">3</span>) === <span class="c-num">5</span>)
<span class="c-fn">testar</span>(<span class="c-str">'soma com zero'</span>, <span class="c-fn">somar</span>(<span class="c-num">5</span>,<span class="c-num">0</span>) === <span class="c-num">5</span>)
<span class="c-fn">testar</span>(<span class="c-str">'soma negativos'</span>, <span class="c-fn">somar</span>(-<span class="c-num">1</span>,-<span class="c-num">1</span>) === -<span class="c-num">2</span>)
      </div>
      <p><strong>Tipos de teste:</strong> unitário (uma função isolada), integração (módulos juntos), e2e (fluxo completo como usuário real).</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Com Jest (biblioteca real de testes)</span>
<span class="c-fn">describe</span>(<span class="c-str">'função somar'</span>, () => {
  <span class="c-fn">it</span>(<span class="c-str">'soma dois números positivos'</span>, () => {
    <span class="c-fn">expect</span>(<span class="c-fn">somar</span>(<span class="c-num">2</span>, <span class="c-num">3</span>)).<span class="c-fn">toBe</span>(<span class="c-num">5</span>)
  })

  <span class="c-fn">it</span>(<span class="c-str">'lida com números negativos'</span>, () => {
    <span class="c-fn">expect</span>(<span class="c-fn">somar</span>(-<span class="c-num">1</span>, -<span class="c-num">1</span>)).<span class="c-fn">toBe</span>(-<span class="c-num">2</span>)
  })
})
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a vantagem de testes automatizados sobre testar manualmente?', opcoes:['Não tem vantagem real','Rodam em segundos e detectam regressões consistentemente, toda vez que o código muda','São mais lentos','Só funcionam uma vez'], correta:1, explicacao:'Testes automatizados rodam consistentemente — você pode mudar código e rodar todos os testes em segundos para garantir que nada quebrou.' },
      { tipo:'multipla', pergunta:'O que diferencia um teste unitário de um teste de integração?', opcoes:['São idênticos','Unitário testa uma função isolada, integração testa módulos trabalhando juntos','Integração é sempre mais rápido','Unitário não usa asserções'], correta:1, explicacao:'Teste unitário foca numa única função/unidade isolada. Teste de integração verifica se várias partes (ex: API + banco) funcionam corretamente juntas.' },
      { tipo:'completar', pergunta:'Complete a estrutura básica de um teste Jest:', codigo:'it("descrição", () => {\n  expect(resultado).___(esperado)\n})', resposta:'toBe', explicacao:'expect(valor).toBe(esperado) é a asserção mais comum — compara igualdade estrita entre o resultado real e o esperado.' }
    ]
  },

  // ── LIÇÃO 50 ──────────────────────────────────────────────
  {
    id: 'c50', titulo: 'TypeScript — primeiros passos', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>TypeScript adiciona tipos estáticos ao JavaScript, detectando erros antes mesmo de rodar o código. É amplamente usado no mercado profissional.</p>
      <div class="code-example">
<span class="c-cm">// JavaScript puro — sem proteção de tipos</span>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(a, b) { <span class="c-kw">return</span> a + b }
<span class="c-fn">somar</span>(<span class="c-str">"5"</span>, <span class="c-num">3</span>)  <span class="c-cm">// "53" — bug silencioso!</span>

<span class="c-cm">// TypeScript — erro detectado na escrita</span>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(a: <span class="c-kw">number</span>, b: <span class="c-kw">number</span>): <span class="c-kw">number</span> {
  <span class="c-kw">return</span> a + b
}
<span class="c-fn">somar</span>(<span class="c-str">"5"</span>, <span class="c-num">3</span>)  <span class="c-cm">// ❌ Erro de compilação!</span>

<span class="c-cm">// Tipos básicos</span>
<span class="c-kw">let</span> nome: <span class="c-kw">string</span> = <span class="c-str">"Maycon"</span>
<span class="c-kw">let</span> idade: <span class="c-kw">number</span> = <span class="c-num">28</span>
<span class="c-kw">let</span> ativo: <span class="c-kw">boolean</span> = <span class="c-kw">true</span>
<span class="c-kw">let</span> tags: <span class="c-kw">string</span>[] = [<span class="c-str">"dev"</span>, <span class="c-str">"js"</span>]
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Interfaces — moldes para objetos</span>
<span class="c-kw">interface</span> Usuario {
  nome: <span class="c-kw">string</span>
  xp: <span class="c-kw">number</span>
  ativo?: <span class="c-kw">boolean</span>  <span class="c-cm">// opcional</span>
}

<span class="c-kw">function</span> <span class="c-fn">saudar</span>(user: Usuario): <span class="c-kw">string</span> {
  <span class="c-kw">return</span> <span class="c-str">\`Olá \${user.nome}!\`</span>
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Quando o TypeScript detecta erros de tipo?', opcoes:['Em produção, depois que o usuário relata','Em tempo de compilação, antes de rodar o código','Nunca detecta','Só com testes manuais'], correta:1, explicacao:'TypeScript verifica tipos durante a compilação (transpilação para JS) — você vê o erro no editor ou no build, antes mesmo de executar.' },
      { tipo:'multipla', pergunta:'O que uma interface define em TypeScript?', opcoes:['Um componente visual','A forma/estrutura esperada de um objeto','Uma função específica','Um arquivo CSS'], correta:1, explicacao:'Interface descreve quais propriedades um objeto deve ter e seus tipos — é um contrato que o TypeScript verifica em tempo de compilação.' },
      { tipo:'completar', pergunta:'Complete a tipagem de uma variável string:', codigo:'let nome: ___ = "Maycon"', resposta:'string', explicacao:'string é o tipo básico para texto em TypeScript. Outros tipos primitivos: number, boolean, undefined, null.' }
    ]
  },

  // ── LIÇÃO 51 ──────────────────────────────────────────────
  {
    id: 'c51', titulo: 'Segurança básica — princípios fundamentais', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Mesmo iniciantes precisam conhecer princípios básicos de segurança — eles previnem os erros mais comuns desde o início.</p>
      <div class="code-example">
<span class="c-cm">// ❌ NUNCA confie em dados do usuário sem validar</span>
<span class="c-kw">const</span> idade = req.body.idade  <span class="c-cm">// pode ser qualquer coisa!</span>

<span class="c-cm">// ✅ Sempre valide</span>
<span class="c-kw">const</span> idade = Number(req.body.idade)
<span class="c-kw">if</span> (isNaN(idade) || idade < <span class="c-num">0</span> || idade > <span class="c-num">150</span>) {
  <span class="c-kw">throw new</span> Error(<span class="c-str">'Idade inválida'</span>)
}

<span class="c-cm">// ❌ Nunca exponha senhas ou chaves no código</span>
<span class="c-kw">const</span> apiKey = <span class="c-str">"sk-abc123..."</span>  <span class="c-cm">// vai parar no GitHub!</span>

<span class="c-cm">// ✅ Use variáveis de ambiente</span>
<span class="c-kw">const</span> apiKey = process.env.API_KEY
      </div>
      <p><strong>Princípio do menor privilégio:</strong> dê apenas o acesso mínimo necessário para cada usuário/sistema fazer seu trabalho.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Sanitizar input antes de exibir (evitar XSS)</span>
<span class="c-cm">// ❌</span>
elemento.innerHTML = comentarioUsuario

<span class="c-cm">// ✅</span>
elemento.textContent = comentarioUsuario
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que nunca confiar em dados vindos diretamente do usuário?', opcoes:['Não é educado','Usuários podem enviar dados maliciosos ou inesperados, propositalmente ou não','É mais lento validar','Validação é opcional'], correta:1, explicacao:'Qualquer input externo (formulários, URLs, APIs) deve ser tratado como potencialmente perigoso até ser validado — é a base da segurança em aplicações web.' },
      { tipo:'multipla', pergunta:'O que é o "princípio do menor privilégio"?', opcoes:['Dar acesso total a todos','Conceder apenas o acesso mínimo necessário para a função de cada usuário/sistema','Não usar senhas','Usar sempre privilégios de admin'], correta:1, explicacao:'Limitar permissões reduz o dano potencial caso uma conta seja comprometida — um usuário comum não deveria ter acesso de administrador desnecessariamente.' },
      { tipo:'completar', pergunta:'Complete para acessar uma chave de API de forma segura:', codigo:'const apiKey = process.___.API_KEY', resposta:'env', explicacao:'process.env acessa variáveis de ambiente, mantendo segredos fora do código-fonte versionado no Git.' }
    ]
  },

  // ── LIÇÃO 52 ──────────────────────────────────────────────
  {
    id: 'c52', titulo: 'Imutabilidade e cópia profunda vs rasa', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Um erro comum: achar que copiou um objeto, mas só copiou a referência. Entender cópia rasa (shallow) vs profunda (deep) evita bugs sutis.</p>
      <div class="code-example">
<span class="c-cm">// Cópia RASA — só o primeiro nível é copiado</span>
<span class="c-kw">const</span> original = { nome: <span class="c-str">"Maycon"</span>, endereco: { cidade: <span class="c-str">"BH"</span> } }
<span class="c-kw">const</span> copia = { ...original }

copia.nome = <span class="c-str">"Outro"</span>           <span class="c-cm">// não afeta original ✅</span>
copia.endereco.cidade = <span class="c-str">"SP"</span>    <span class="c-cm">// AFETA o original! ❌</span>
<span class="c-cm">// original.endereco.cidade também virou "SP" — mesma referência!</span>

<span class="c-cm">// Cópia PROFUNDA — copia tudo, sem referências compartilhadas</span>
<span class="c-kw">const</span> copiaProfunda = JSON.<span class="c-fn">parse</span>(JSON.<span class="c-fn">stringify</span>(original))
<span class="c-cm">// ou usando structuredClone (moderno)</span>
<span class="c-kw">const</span> copiaProfunda2 = structuredClone(original)
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Por que isso importa em React/apps reativos</span>
<span class="c-cm">// ❌ Mutação direta não dispara re-render</span>
estado.lista.push(novoItem)
setEstado(estado)

<span class="c-cm">// ✅ Cria novo array — React detecta a mudança</span>
setEstado({ ...estado, lista: [...estado.lista, novoItem] })
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que acontece numa cópia rasa de objeto com propriedade aninhada?', opcoes:['Tudo é copiado independentemente','Objetos aninhados continuam compartilhando a mesma referência','Gera erro','Copia só strings'], correta:1, explicacao:'O spread {...obj} copia apenas o primeiro nível. Objetos/arrays aninhados continuam apontando para a MESMA referência de memória — modificar um afeta o outro.' },
      { tipo:'multipla', pergunta:'Como fazer uma cópia profunda de um objeto?', opcoes:['Usando { ...obj }','JSON.parse(JSON.stringify(obj)) ou structuredClone(obj)','Não é possível em JS','Usando Object.keys()'], correta:1, explicacao:'JSON.parse(JSON.stringify()) é uma técnica antiga (com limitações: não copia funções, Date vira string). structuredClone() é a forma moderna e mais robusta.' },
      { tipo:'completar', pergunta:'Complete o método moderno para clonar profundamente um objeto:', codigo:'const copia = ___(original)', resposta:'structuredClone', explicacao:'structuredClone() é uma API nativa do navegador (e Node moderno) para clonagem profunda, lidando corretamente com Dates, Maps, Sets e referências circulares.' }
    ]
  },

  // ── LIÇÃO 53 ──────────────────────────────────────────────
  {
    id: 'c53', titulo: 'Algoritmos de string — palíndromos e anagramas', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Problemas clássicos de entrevista técnica envolvem manipulação de strings. Dominar esses padrões ajuda em qualquer processo seletivo.</p>
      <div class="code-example">
<span class="c-cm">// Verificar palíndromo (lê igual de trás pra frente)</span>
<span class="c-kw">function</span> <span class="c-fn">ehPalindromo</span>(str) {
  <span class="c-kw">const</span> limpo = str.toLowerCase().<span class="c-fn">replace</span>(<span class="c-num">/[^a-z0-9]/g</span>, <span class="c-str">''</span>)
  <span class="c-kw">return</span> limpo === [...limpo].<span class="c-fn">reverse</span>().<span class="c-fn">join</span>(<span class="c-str">''</span>)
}
<span class="c-fn">ehPalindromo</span>(<span class="c-str">"Arara"</span>)  <span class="c-cm">// true</span>
<span class="c-fn">ehPalindromo</span>(<span class="c-str">"A man a plan a canal Panama"</span>)  <span class="c-cm">// true</span>
      </div>
      <div class="code-example">
<span class="c-cm">// Verificar anagrama (mesmas letras, ordem diferente)</span>
<span class="c-kw">function</span> <span class="c-fn">saoAnagramas</span>(a, b) {
  <span class="c-kw">const</span> <span class="c-fn">normalizar</span> = s => s.toLowerCase().<span class="c-fn">split</span>(<span class="c-str">''</span>).<span class="c-fn">sort</span>().<span class="c-fn">join</span>(<span class="c-str">''</span>)
  <span class="c-kw">return</span> <span class="c-fn">normalizar</span>(a) === <span class="c-fn">normalizar</span>(b)
}
<span class="c-fn">saoAnagramas</span>(<span class="c-str">"roma"</span>, <span class="c-str">"amor"</span>)  <span class="c-cm">// true</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Versão otimizada com dois ponteiros — O(n), sem criar arrays extras</span>
<span class="c-kw">function</span> <span class="c-fn">ehPalindromoOtimizado</span>(str) {
  <span class="c-kw">let</span> esq = <span class="c-num">0</span>, dir = str.length - <span class="c-num">1</span>
  <span class="c-kw">while</span> (esq < dir) {
    <span class="c-kw">if</span> (str[esq] !== str[dir]) <span class="c-kw">return false</span>
    esq++; dir--
  }
  <span class="c-kw">return true</span>
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que caracteriza um palíndromo?', opcoes:['Texto com números','Texto que se lê igual de trás para frente','Texto em maiúsculas','Texto sem espaços'], correta:1, explicacao:'"Arara", "Ovo" e "A man a plan a canal Panama" são palíndromos — ignorando espaços/pontuação/maiúsculas, leem-se igual nos dois sentidos.' },
      { tipo:'multipla', pergunta:'O que são anagramas?', opcoes:['Palavras opostas','Palavras formadas pelas mesmas letras em ordem diferente','Palavras com mesmo significado','Palavras com mesmo tamanho'], correta:1, explicacao:'"roma" e "amor" são anagramas — contêm exatamente as mesmas letras, apenas reorganizadas. Ordenar as letras de ambas e comparar é a técnica mais simples de verificar.' },
      { tipo:'completar', pergunta:'Complete a técnica de dois ponteiros para verificar palíndromo eficientemente:', codigo:'let esq = 0, dir = str.length - ___', resposta:'1', explicacao:'O ponteiro direito começa no último índice válido (length - 1), pois arrays/strings são indexados a partir de 0.' }
    ]
  },

  // ── LIÇÃO 54 ──────────────────────────────────────────────
  {
    id: 'c54', titulo: 'Dois ponteiros e Janela Deslizante', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Dois padrões de algoritmo extremamente úteis para resolver problemas de array/string de forma eficiente, evitando loops aninhados desnecessários.</p>
      <div class="code-example">
<span class="c-cm">// Dois ponteiros — encontrar par que soma um valor</span>
<span class="c-kw">function</span> <span class="c-fn">encontrarPar</span>(arrOrdenado, alvo) {
  <span class="c-kw">let</span> esq = <span class="c-num">0</span>, dir = arrOrdenado.length - <span class="c-num">1</span>
  <span class="c-kw">while</span> (esq < dir) {
    <span class="c-kw">const</span> soma = arrOrdenado[esq] + arrOrdenado[dir]
    <span class="c-kw">if</span> (soma === alvo) <span class="c-kw">return</span> [esq, dir]
    <span class="c-kw">if</span> (soma < alvo) esq++
    <span class="c-kw">else</span> dir--
  }
  <span class="c-kw">return</span> [-<span class="c-num">1</span>, -<span class="c-num">1</span>]
}
<span class="c-cm">// O(n) em vez de O(n²) com loops aninhados!</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Janela Deslizante — maior soma de subarray de tamanho k</span>
<span class="c-kw">function</span> <span class="c-fn">maiorSomaJanela</span>(arr, k) {
  <span class="c-kw">let</span> somaAtual = <span class="c-num">0</span>
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < k; i++) somaAtual += arr[i]

  <span class="c-kw">let</span> maiorSoma = somaAtual
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = k; i < arr.length; i++) {
    somaAtual = somaAtual - arr[i-k] + arr[i]  <span class="c-cm">// desliza a janela</span>
    maiorSoma = Math.<span class="c-fn">max</span>(maiorSoma, somaAtual)
  }
  <span class="c-kw">return</span> maiorSoma
}
<span class="c-cm">// O(n) em vez de recalcular cada janela do zero O(n*k)</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Quando usar a técnica de dois ponteiros?', opcoes:['Em qualquer problema','Em arrays ORDENADOS, ao buscar pares/combinações que satisfazem condições','Apenas em strings','Nunca é útil'], correta:1, explicacao:'Dois ponteiros funciona muito bem em arrays ordenados — um ponteiro avança do início, outro do fim, convergindo de forma eficiente sem testar todas as combinações.' },
      { tipo:'multipla', pergunta:'O que a técnica de Janela Deslizante evita?', opcoes:['Usar loops','Recalcular a soma/resultado do zero a cada posição, reaproveitando cálculos anteriores','Usar arrays','Usar funções'], correta:1, explicacao:'Em vez de somar todos os k elementos a cada nova posição (O(n*k)), a janela desliza subtraindo o elemento que sai e somando o que entra — O(n) total.' },
      { tipo:'completar', pergunta:'Complete a atualização da soma ao deslizar a janela uma posição:', codigo:'somaAtual = somaAtual - arr[i-k] + arr[___]', resposta:'i', explicacao:'Subtrai o elemento que está saindo da janela (arr[i-k]) e soma o novo elemento que está entrando (arr[i]) — atualização incremental eficiente.' }
    ]
  },

  // ── LIÇÃO 55 ──────────────────────────────────────────────
  {
    id: 'c55', titulo: 'Modules e organização de código', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Conforme projetos crescem, dividir código em módulos (arquivos separados) é essencial para organização e reuso.</p>
      <div class="code-example">
<span class="c-cm">// arquivo: matematica.js</span>
<span class="c-kw">export function</span> <span class="c-fn">somar</span>(a, b) { <span class="c-kw">return</span> a + b }
<span class="c-kw">export function</span> <span class="c-fn">subtrair</span>(a, b) { <span class="c-kw">return</span> a - b }
<span class="c-kw">export default function</span> <span class="c-fn">multiplicar</span>(a, b) { <span class="c-kw">return</span> a * b }

<span class="c-cm">// arquivo: app.js</span>
<span class="c-kw">import</span> multiplicar, { somar, subtrair } <span class="c-kw">from</span> <span class="c-str">'./matematica.js'</span>

<span class="c-fn">somar</span>(<span class="c-num">2</span>, <span class="c-num">3</span>)        <span class="c-cm">// 5</span>
<span class="c-fn">multiplicar</span>(<span class="c-num">2</span>, <span class="c-num">3</span>)   <span class="c-cm">// 6</span>
      </div>
      <p><strong>export</strong> nomeado: pode ter vários por arquivo, importa com chaves {}.<br>
      <strong>export default</strong>: só um por arquivo, importa sem chaves.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Estrutura de projeto organizado por módulos</span>
src/
├── utils/
│   ├── data.js       (formatação de datas)
│   └── validacao.js  (validar inputs)
├── api/
│   └── postos.js     (chamadas de API)
└── app.js            (arquivo principal)

<span class="c-cm">// Importando de múltiplos módulos</span>
<span class="c-kw">import</span> { formatarData } <span class="c-kw">from</span> <span class="c-str">'./utils/data.js'</span>
<span class="c-kw">import</span> { validarEmail } <span class="c-kw">from</span> <span class="c-str">'./utils/validacao.js'</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a diferença entre export e export default?', opcoes:['São iguais','export nomeado pode ter vários por arquivo, default só um','default é mais rápido','export não funciona em módulos'], correta:1, explicacao:'Um arquivo pode ter múltiplos exports nomeados (importados com chaves {}) mas apenas um export default (importado sem chaves, com qualquer nome).' },
      { tipo:'multipla', pergunta:'Por que dividir código em módulos separados?', opcoes:['Deixa o código mais lento','Melhora organização, reuso e facilita encontrar/manter código específico','É obrigatório pelo JavaScript','Aumenta o tamanho do projeto sem benefício'], correta:1, explicacao:'Módulos permitem que cada arquivo tenha uma responsabilidade clara, facilitando localizar bugs, reutilizar código entre projetos e trabalhar em equipe sem conflitos.' },
      { tipo:'completar', pergunta:'Complete para importar uma função nomeada "somar" de outro arquivo:', codigo:"import { ___ } from './matematica.js'", resposta:'somar', explicacao:'Imports nomeados usam chaves {} com o mesmo nome usado no export. import { somar } importa especificamente essa função, ignorando outras do arquivo.' }
    ]
  },

  // ── LIÇÃO 56 ──────────────────────────────────────────────
  {
    id: 'c56', titulo: 'Algoritmos — Sliding Window com strings', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Combinando o que você já sabe de strings e janela deslizante, vamos resolver um problema clássico: maior substring sem caracteres repetidos.</p>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">maiorSubstringUnica</span>(str) {
  <span class="c-kw">const</span> vistos = <span class="c-kw">new</span> Set()
  <span class="c-kw">let</span> esq = <span class="c-num">0</span>, maior = <span class="c-num">0</span>

  <span class="c-kw">for</span> (<span class="c-kw">let</span> dir = <span class="c-num">0</span>; dir < str.length; dir++) {
    <span class="c-kw">while</span> (vistos.<span class="c-fn">has</span>(str[dir])) {
      vistos.<span class="c-fn">delete</span>(str[esq])
      esq++
    }
    vistos.<span class="c-fn">add</span>(str[dir])
    maior = Math.<span class="c-fn">max</span>(maior, dir - esq + <span class="c-num">1</span>)
  }
  <span class="c-kw">return</span> maior
}
<span class="c-fn">maiorSubstringUnica</span>(<span class="c-str">"abcabcbb"</span>)  <span class="c-cm">// 3 ("abc")</span>
      </div>
      <p>A janela (esq...dir) cresce enquanto não há repetição, e encolhe pela esquerda quando encontra um caractere repetido.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Visualizando o algoritmo passo a passo</span>
<span class="c-cm">// str = "abcabcbb"</span>
<span class="c-cm">// dir=0 'a': janela="a", maior=1</span>
<span class="c-cm">// dir=1 'b': janela="ab", maior=2</span>
<span class="c-cm">// dir=2 'c': janela="abc", maior=3</span>
<span class="c-cm">// dir=3 'a': repetido! esq avança até remover 'a'</span>
<span class="c-cm">// janela="bca", maior continua 3</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que o Set "vistos" controla no algoritmo da maior substring única?', opcoes:['O tamanho do array','Quais caracteres estão atualmente dentro da janela','Apenas vogais','A posição inicial'], correta:1, explicacao:'O Set guarda os caracteres presentes na janela atual (entre esq e dir). Quando um caractere repetido aparece, a janela encolhe pela esquerda até remover a duplicata.' },
      { tipo:'multipla', pergunta:'Por que esse algoritmo é O(n) e não O(n²)?', opcoes:['Usa menos memória','Cada caractere é visitado no máximo duas vezes (uma vez por dir, uma vez por esq), nunca recomeça do zero','Usa recursão','Não é O(n)'], correta:1, explicacao:'Apesar do while interno parecer um segundo loop, cada posição só é processada uma vez por cada ponteiro — total de operações é linear, não quadrático.' },
      { tipo:'completar', pergunta:'Complete o cálculo do tamanho da janela atual:', codigo:'maior = Math.max(maior, dir - esq + ___)', resposta:'1', explicacao:'O tamanho da janela [esq, dir] inclusive é (dir - esq + 1). Sem o +1, contaríamos um elemento a menos.' }
    ]
  },

  // ── LIÇÃO 57 ──────────────────────────────────────────────
  {
    id: 'c57', titulo: 'Validação de formulários na prática', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Validar dados de formulário é uma das tarefas mais comuns no dia a dia. Vamos construir um validador completo combinando tudo que você aprendeu.</p>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">validarFormulario</span>(dados) {
  <span class="c-kw">const</span> erros = {}

  <span class="c-kw">if</span> (!dados.nome || dados.nome.trim().length < <span class="c-num">2</span>) {
    erros.nome = <span class="c-str">'Nome deve ter pelo menos 2 caracteres'</span>
  }

  <span class="c-kw">const</span> regexEmail = <span class="c-num">/^[\\w.-]+@[\\w.-]+\\.\\w+$/</span>
  <span class="c-kw">if</span> (!regexEmail.<span class="c-fn">test</span>(dados.email)) {
    erros.email = <span class="c-str">'Email inválido'</span>
  }

  <span class="c-kw">if</span> (!dados.idade || dados.idade < <span class="c-num">18</span>) {
    erros.idade = <span class="c-str">'Deve ser maior de idade'</span>
  }

  <span class="c-kw">return</span> {
    valido: Object.keys(erros).length === <span class="c-num">0</span>,
    erros
  }
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Usando o validador</span>
<span class="c-kw">const</span> resultado = <span class="c-fn">validarFormulario</span>({
  nome: <span class="c-str">"M"</span>,
  email: <span class="c-str">"emailinvalido"</span>,
  idade: <span class="c-num">15</span>
})
<span class="c-cm">// { valido: false, erros: { nome: '...', email: '...', idade: '...' } }</span>

<span class="c-kw">if</span> (!resultado.valido) {
  Object.values(resultado.erros).<span class="c-fn">forEach</span>(msg => <span class="c-fn">console</span>.<span class="c-fn">log</span>(msg))
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que retornar um objeto de erros em vez de lançar exceção na primeira falha?', opcoes:['É mais rápido','Permite mostrar TODOS os erros de uma vez ao usuário, não só o primeiro','Exceções não existem em JS','É obrigatório'], correta:1, explicacao:'Usuários preferem ver todos os problemas do formulário de uma vez, em vez de corrigir um erro por vez através de múltiplas tentativas — melhor experiência.' },
      { tipo:'multipla', pergunta:'Como verificar se o objeto de erros está vazio (formulário válido)?', opcoes:['erros.length === 0','Object.keys(erros).length === 0','erros === null','erros === undefined'], correta:1, explicacao:'Object.keys(objeto) retorna um array com as chaves do objeto. Se o array tem length 0, o objeto não tem nenhuma propriedade — nenhum erro foi adicionado.' },
      { tipo:'completar', pergunta:'Complete a regex simplificada para validar formato básico de email:', codigo:'/^[\\w.-]+@[\\w.-]+\\.___$/',resposta:'\\w+', explicacao:'\\w+ no final garante que existe pelo menos um caractere após o ponto (o domínio, como .com, .org).' }
    ]
  },

  // ── LIÇÃO 58 ──────────────────────────────────────────────
  {
    id: 'c58', titulo: 'Projeto Final 2 — App de Tarefas com Persistência', xp: 400, tipo: 'projeto',
    teoria: `
      <h3>🦉 Segundo Projeto da Coruja!</h3>
      <p>Vamos construir um To-Do List completo, aplicando DOM, eventos, localStorage e tudo de lógica que você já domina.</p>
      <div class="code-example">
Requisitos do projeto:

1. Adicionar tarefas com input + botão
2. Marcar tarefas como concluídas (checkbox)
3. Deletar tarefas individualmente
4. Filtrar: todas / pendentes / concluídas
5. Persistir no localStorage (sobrevive ao recarregar)
6. Contador de tarefas pendentes
7. Publicar no GitHub Pages</div>
      <p>Esse projeto consolida manipulação do DOM, eventos, arrays (map/filter), JSON.stringify/parse e localStorage — tudo junto num app real e funcional.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Esqueleto para começar</span>
<span class="c-kw">let</span> tarefas = JSON.<span class="c-fn">parse</span>(localStorage.<span class="c-fn">getItem</span>(<span class="c-str">'tarefas'</span>)) || []

<span class="c-kw">function</span> <span class="c-fn">salvar</span>() {
  localStorage.<span class="c-fn">setItem</span>(<span class="c-str">'tarefas'</span>, JSON.<span class="c-fn">stringify</span>(tarefas))
}

<span class="c-kw">function</span> <span class="c-fn">adicionarTarefa</span>(texto) {
  tarefas.<span class="c-fn">push</span>({ id: Date.now(), texto, feita: <span class="c-kw">false</span> })
  <span class="c-fn">salvar</span>()
  <span class="c-fn">renderizar</span>()
}

<span class="c-kw">function</span> <span class="c-fn">alternarFeita</span>(id) {
  tarefas = tarefas.<span class="c-fn">map</span>(t => t.id === id ? {...t, feita: !t.feita} : t)
  <span class="c-fn">salvar</span>()
  <span class="c-fn">renderizar</span>()
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que usar Date.now() como id das tarefas?', opcoes:['É decorativo','Gera um número único baseado no timestamp, evitando ids duplicados','É obrigatório','Deixa mais rápido'], correta:1, explicacao:'Date.now() retorna milissegundos desde 1970 — extremamente improvável duas tarefas terem o mesmo valor, funcionando como id único simples sem precisar de biblioteca.' },
      { tipo:'multipla', pergunta:'Por que usar map() em vez de modificar o array de tarefas diretamente?', opcoes:['map() é mais lento','Mantém imutabilidade, criando novo array sem mutar o original — boa prática','map() não funciona com objetos','É obrigatório usar map'], correta:1, explicacao:'tarefas.map(...) retorna um NOVO array, sem alterar o original diretamente — segue o princípio de imutabilidade que vimos na lição de programação funcional.' },
      { tipo:'completar', pergunta:'Complete para recuperar e parsear as tarefas salvas, com fallback para array vazio:', codigo:"let tarefas = JSON.parse(localStorage.getItem('tarefas')) || ___", resposta:'[]', explicacao:'Se não houver nada salvo, getItem retorna null e JSON.parse(null) retorna null. O || [] garante um array vazio como padrão, evitando erros.' }
    ]
  },


  // ── LIÇÃO 60 ──────────────────────────────────────────────
  {
    id: 'c60', titulo: 'Heaps e filas de prioridade', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Heap é uma árvore especial onde o pai é sempre maior (max-heap) ou menor (min-heap) que os filhos. Usado para implementar filas de prioridade.</p>
      <div class="code-example">
<span class="c-cm">// Min-Heap simplificado usando array</span>
<span class="c-kw">class</span> MinHeap {
  <span class="c-fn">constructor</span>() { <span class="c-kw">this</span>.heap = [] }

  <span class="c-fn">inserir</span>(valor) {
    <span class="c-kw">this</span>.heap.<span class="c-fn">push</span>(valor)
    <span class="c-kw">this</span>.<span class="c-fn">subirElemento</span>(<span class="c-kw">this</span>.heap.length - <span class="c-num">1</span>)
  }

  <span class="c-fn">subirElemento</span>(i) {
    <span class="c-kw">while</span> (i > <span class="c-num">0</span>) {
      <span class="c-kw">const</span> pai = Math.<span class="c-fn">floor</span>((i-<span class="c-num">1</span>)/<span class="c-num">2</span>)
      <span class="c-kw">if</span> (<span class="c-kw">this</span>.heap[pai] <= <span class="c-kw">this</span>.heap[i]) <span class="c-kw">break</span>
      ;[<span class="c-kw">this</span>.heap[pai], <span class="c-kw">this</span>.heap[i]] = [<span class="c-kw">this</span>.heap[i], <span class="c-kw">this</span>.heap[pai]]
      i = pai
    }
  }

  <span class="c-fn">extrairMinimo</span>() { <span class="c-kw">return</span> <span class="c-kw">this</span>.heap[<span class="c-num">0</span>] }
}
      </div>
      <p><strong>Usos reais:</strong> algoritmo de Dijkstra (menor caminho), agendamento de tarefas por prioridade, encontrar os k maiores/menores elementos.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Fila de prioridade — usado em sistemas de atendimento</span>
<span class="c-kw">class</span> FilaPrioridade {
  <span class="c-fn">constructor</span>() { <span class="c-kw">this</span>.itens = [] }

  <span class="c-fn">adicionar</span>(item, prioridade) {
    <span class="c-kw">this</span>.itens.<span class="c-fn">push</span>({ item, prioridade })
    <span class="c-kw">this</span>.itens.<span class="c-fn">sort</span>((a,b) => b.prioridade - a.prioridade)
  }

  <span class="c-fn">proximo</span>() { <span class="c-kw">return</span> <span class="c-kw">this</span>.itens.<span class="c-fn">shift</span>() }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que caracteriza um Min-Heap?', opcoes:['Todos os elementos são iguais','O elemento raiz (pai) é sempre o menor entre ele e seus filhos','É ordenado completamente','Não tem estrutura definida'], correta:1, explicacao:'Em Min-Heap, cada nó pai é menor ou igual aos seus filhos. Isso garante que o menor elemento de toda a estrutura sempre está na raiz — acesso O(1) ao mínimo.' },
      { tipo:'multipla', pergunta:'Para que serve uma fila de prioridade?', opcoes:['Ordenar arrays simples','Processar itens na ordem de importância, não de chegada','Substituir loops','Criar componentes visuais'], correta:1, explicacao:'Diferente de uma fila comum (FIFO), a fila de prioridade sempre retorna o item mais importante primeiro — essencial em sistemas de atendimento, agendamento de tarefas, roteamento de rede.' },
      { tipo:'completar', pergunta:'Complete o cálculo do índice do pai de um elemento i no heap:', codigo:'const pai = Math.floor((i-1)/___)', resposta:'2', explicacao:'Em um heap representado por array, o pai do elemento no índice i está em (i-1)/2 (arredondado para baixo) — propriedade matemática da estrutura binária completa.' }
    ]
  },

  // ── LIÇÃO 61 ──────────────────────────────────────────────
  {
    id: 'c61', titulo: 'Programação concorrente — Event Loop a fundo', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>JavaScript é single-threaded, mas consegue lidar com múltiplas operações "ao mesmo tempo" através do Event Loop.</p>
      <div class="code-example">
console.<span class="c-fn">log</span>(<span class="c-str">'1'</span>)
setTimeout(() => console.<span class="c-fn">log</span>(<span class="c-str">'2'</span>), <span class="c-num">0</span>)
Promise.<span class="c-fn">resolve</span>().<span class="c-fn">then</span>(() => console.<span class="c-fn">log</span>(<span class="c-str">'3'</span>))
console.<span class="c-fn">log</span>(<span class="c-str">'4'</span>)

<span class="c-cm">// Saída: 1, 4, 3, 2</span>
<span class="c-cm">// Por quê? Call stack roda primeiro (1,4),</span>
<span class="c-cm">// depois microtasks (Promises = 3),</span>
<span class="c-cm">// depois macrotasks (setTimeout = 2)</span>
      </div>
      <div class="code-example">
Ordem de execução:

1. Call Stack (código síncrono)
2. Microtask Queue (Promises, queueMicrotask)
3. Macrotask Queue (setTimeout, setInterval, I/O)

O Event Loop SEMPRE esvazia microtasks
antes de pegar a próxima macrotask</div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Por que isso importa na prática</span>
<span class="c-kw">async function</span> <span class="c-fn">exemplo</span>() {
  console.<span class="c-fn">log</span>(<span class="c-str">'início'</span>)
  <span class="c-kw">await</span> <span class="c-kw">null</span>  <span class="c-cm">// agenda o resto como microtask</span>
  console.<span class="c-fn">log</span>(<span class="c-str">'depois do await'</span>)
}
<span class="c-fn">exemplo</span>()
console.<span class="c-fn">log</span>(<span class="c-str">'código síncrono continua'</span>)

<span class="c-cm">// Saída: início, código síncrono continua, depois do await</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que tem prioridade: microtasks (Promises) ou macrotasks (setTimeout)?', opcoes:['Macrotasks sempre primeiro','Microtasks são sempre esvaziadas antes da próxima macrotask','São executadas simultaneamente','Depende do navegador'], correta:1, explicacao:'O Event Loop sempre processa TODAS as microtasks pendentes (Promises) antes de pegar a próxima macrotask (setTimeout) — por isso Promise.resolve().then() roda antes de setTimeout(fn, 0).' },
      { tipo:'multipla', pergunta:'JavaScript é single-threaded. Como então ele lida com operações assíncronas?', opcoes:['Cria threads ocultas sempre','Delega operações demoradas (I/O, timers) ao ambiente externo (browser/Node) e retoma via Event Loop quando prontas','É impossível ser assíncrono','Usa múltiplos processadores'], correta:1, explicacao:'O motor JS roda numa única thread, mas o ambiente (browser/Node) tem APIs próprias (Web APIs, libuv) que executam operações demoradas em paralelo e notificam o Event Loop quando terminam.' },
      { tipo:'completar', pergunta:'Complete o nome da fila que processa código síncrono em JavaScript:', codigo:'O código síncrono executa na ___ (call stack)', resposta:'pilha de chamadas', explicacao:'A call stack (pilha de chamadas) executa código síncrono imediatamente, função por função, antes do Event Loop verificar as filas de tasks.' }
    ]
  },

  // ── LIÇÃO 62 ──────────────────────────────────────────────
  {
    id: 'c62', titulo: 'WebSockets — comunicação em tempo real', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>HTTP é request-response: o cliente pede, o servidor responde, conexão fecha. WebSockets mantêm uma conexão aberta para comunicação bidirecional em tempo real.</p>
      <div class="code-example">
<span class="c-cm">// Cliente — conectando a um WebSocket</span>
<span class="c-kw">const</span> ws = <span class="c-kw">new</span> WebSocket(<span class="c-str">'wss://meuapp.com/chat'</span>)

ws.<span class="c-fn">onopen</span> = () => console.<span class="c-fn">log</span>(<span class="c-str">'Conectado!'</span>)

ws.<span class="c-fn">onmessage</span> = (evento) => {
  <span class="c-kw">const</span> dados = JSON.<span class="c-fn">parse</span>(evento.data)
  console.<span class="c-fn">log</span>(<span class="c-str">'Mensagem recebida:'</span>, dados)
}

ws.<span class="c-fn">send</span>(JSON.<span class="c-fn">stringify</span>({ tipo: <span class="c-str">'mensagem'</span>, texto: <span class="c-str">'Olá!'</span> }))

ws.<span class="c-fn">onclose</span> = () => console.<span class="c-fn">log</span>(<span class="c-str">'Desconectado'</span>)
      </div>
      <p><strong>Usos comuns:</strong> chat em tempo real, notificações instantâneas, jogos multiplayer, dashboards ao vivo, colaboração em tempo real (Google Docs).</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// HTTP vs WebSocket</span>
HTTP: cliente pede → servidor responde → conexão fecha
      (precisa pedir de novo para nova info — polling)

WebSocket: conexão abre → permanece aberta →
           qualquer lado pode enviar a qualquer momento
           → conexão fecha quando alguém decide
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a principal diferença entre HTTP e WebSocket?', opcoes:['São idênticos','HTTP é request-response e fecha a conexão, WebSocket mantém conexão aberta para comunicação bidirecional','WebSocket é mais lento','HTTP não existe mais'], correta:1, explicacao:'HTTP tradicional fecha a conexão após cada resposta. WebSocket mantém uma conexão persistente, permitindo que servidor e cliente enviem mensagens a qualquer momento, sem reabrir conexão.' },
      { tipo:'multipla', pergunta:'Para qual tipo de aplicação WebSocket é mais indicado?', opcoes:['Sites estáticos simples','Chat em tempo real, notificações instantâneas e jogos multiplayer','Blogs','Páginas de pouso (landing pages)'], correta:1, explicacao:'Qualquer aplicação que precise de atualizações instantâneas sem o usuário recarregar a página se beneficia de WebSocket — a latência é muito menor que fazer polling HTTP repetido.' },
      { tipo:'completar', pergunta:'Complete o evento que dispara quando uma mensagem chega via WebSocket:', codigo:'ws.on___ = (evento) => { console.log(evento.data) }', resposta:'message', explicacao:'onmessage é disparado sempre que o servidor envia dados pelo WebSocket. Outros eventos: onopen, onclose, onerror.' }
    ]
  },

  // ── LIÇÃO 63 ──────────────────────────────────────────────
  {
    id: 'c63', titulo: 'Design de APIs — boas práticas REST', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Projetar uma boa API é tão importante quanto implementá-la. Convenções claras facilitam manutenção e o trabalho de quem consome sua API.</p>
      <div class="code-example">
<span class="c-cm">// ✅ Nomenclatura RESTful correta</span>
GET    /usuarios          → listar todos
GET    /usuarios/123      → buscar um específico
POST   /usuarios          → criar novo
PUT    /usuarios/123      → atualizar completo
DELETE /usuarios/123      → deletar

<span class="c-cm">// ❌ Evite verbos na URL — o método HTTP já é o verbo</span>
GET /getUsuarios
POST /criarUsuario

<span class="c-cm">// ✅ Use substantivos no plural, aninhamento lógico</span>
GET /usuarios/123/pedidos     → pedidos do usuário 123
GET /usuarios/123/pedidos/5   → pedido específico

<span class="c-cm">// Paginação, filtros e ordenação via query params</span>
GET /produtos?pagina=2&limite=20&ordenar=preco&categoria=eletronicos
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Resposta de erro padronizada</span>
{
  "erro": {
    "codigo": "VALIDATION_ERROR",
    "mensagem": "Email inválido",
    "campo": "email"
  }
}

<span class="c-cm">// Resposta de sucesso com metadados</span>
{
  "dados": [...],
  "paginacao": { "pagina": 1, "total": 50, "porPagina": 20 }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que evitar verbos na URL como /getUsuarios?', opcoes:['É mais lento','O método HTTP (GET, POST) já indica a ação — repetir é redundante','URLs com verbos não funcionam','É proibido pelo HTTP'], correta:1, explicacao:'REST usa o método HTTP para expressar a ação. GET /usuarios já significa "buscar usuários" — adicionar "get" no path é redundante e foge da convenção REST.' },
      { tipo:'multipla', pergunta:'Como representar "pedidos do usuário 123" numa URL RESTful?', opcoes:['/pedidos?usuario=123','/usuarios/123/pedidos','/getPedidosDoUsuario/123','/pedidosUsuario123'], correta:1, explicacao:'Aninhamento de recursos relacionados (/usuarios/123/pedidos) expressa claramente a hierarquia: pedidos pertencentes a um usuário específico.' },
      { tipo:'completar', pergunta:'Complete os query params para paginação numa API REST:', codigo:'GET /produtos?pagina=2&___=20', resposta:'limite', explicacao:'Query params como pagina e limite (ou size/per_page) são o padrão para controlar paginação sem alterar a estrutura da URL principal.' }
    ]
  },

  // ── LIÇÃO 64 ──────────────────────────────────────────────
  {
    id: 'c64', titulo: 'Algoritmo de ordenação topológica', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Ordenação topológica resolve a ordem correta de execução quando existem dependências — como compilar arquivos, resolver pacotes ou planejar tarefas.</p>
      <div class="code-example">
<span class="c-cm">// Exemplo: matérias da faculdade com pré-requisitos</span>
<span class="c-kw">const</span> dependencias = {
  <span class="c-str">'Calculo1'</span>: [],
  <span class="c-str">'Calculo2'</span>: [<span class="c-str">'Calculo1'</span>],
  <span class="c-str">'Fisica1'</span>: [<span class="c-str">'Calculo1'</span>],
  <span class="c-str">'Fisica2'</span>: [<span class="c-str">'Fisica1'</span>, <span class="c-str">'Calculo2'</span>]
}

<span class="c-kw">function</span> <span class="c-fn">ordenacaoTopologica</span>(grafo) {
  <span class="c-kw">const</span> visitados = <span class="c-kw">new</span> Set()
  <span class="c-kw">const</span> resultado = []

  <span class="c-kw">function</span> <span class="c-fn">visitar</span>(no) {
    <span class="c-kw">if</span> (visitados.<span class="c-fn">has</span>(no)) <span class="c-kw">return</span>
    visitados.<span class="c-fn">add</span>(no)
    <span class="c-kw">for</span> (<span class="c-kw">const</span> dep <span class="c-kw">of</span> grafo[no]) <span class="c-fn">visitar</span>(dep)
    resultado.<span class="c-fn">push</span>(no)
  }

  Object.keys(grafo).<span class="c-fn">forEach</span>(<span class="c-fn">visitar</span>)
  <span class="c-kw">return</span> resultado
}
<span class="c-cm">// ['Calculo1', 'Calculo2', 'Fisica1', 'Fisica2']</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// npm/webpack usam isso para resolver ordem de build</span>
<span class="c-cm">// "Para compilar moduleA, preciso compilar moduleB primeiro,</span>
<span class="c-cm">// que precisa de moduleC..." — ordenação topológica resolve</span>
<span class="c-cm">// automaticamente a sequência correta</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Para que serve ordenação topológica?', opcoes:['Ordenar números','Determinar a ordem correta de execução quando há dependências entre itens','Ordenar texto alfabeticamente','Acelerar arrays'], correta:1, explicacao:'Quando itens têm pré-requisitos (matérias, compilação de módulos, tarefas de projeto), ordenação topológica garante que dependências sejam processadas antes dos itens que dependem delas.' },
      { tipo:'multipla', pergunta:'Em qual estrutura de dados a ordenação topológica é aplicada?', opcoes:['Array simples','Grafo direcionado acíclico (DAG)','Pilha','String'], correta:1, explicacao:'Requer um grafo DIRECIONADO (as dependências têm direção) e ACÍCLICO (sem ciclos — senão não há ordem válida possível, como vimos na detecção de ciclos).' },
      { tipo:'completar', pergunta:'Complete: por que adicionamos o nó ao resultado DEPOIS de visitar suas dependências?', codigo:'// Garante que ___ apareçam antes na ordem final', resposta:'dependências', explicacao:'Ao processar as dependências primeiro (recursivamente) e só depois adicionar o nó atual, garantimos que tudo que ele precisa já apareceu antes dele no resultado.' }
    ]
  },

  // ── LIÇÃO 65 ──────────────────────────────────────────────
  {
    id: 'c65', titulo: 'Inglês técnico — entrevistas e currículo', xp: 160,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>Vocabulário essencial para entrevistas técnicas e descrição de experiência profissional em inglês.</p>
      <div class="code-example">
Frases comuns em entrevistas técnicas:

"Walk me through your approach"
→ "Me explique sua abordagem"

"What's the time complexity of this solution?"
→ "Qual a complexidade de tempo dessa solução?"

"Can you optimize this further?"
→ "Você consegue otimizar isso mais?"

"Tell me about a challenging bug you fixed"
→ "Me conte sobre um bug desafiador que você corrigiu"</div>
      <div class="code-example">
Vocabulário de currículo (resume/CV):

"Built a..."        → "Construí um..."
"Implemented..."    → "Implementei..."
"Led a team of..."  → "Liderei um time de..."
"Improved X by Y%"  → "Melhorei X em Y%"
"Reduced load time by 40%"
→ "Reduzi o tempo de carregamento em 40%"</div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Resposta estruturada (método STAR) em inglês</span>
Situation: "Our checkout page was slow"
Task: "I needed to improve performance"
Action: "I implemented lazy loading and caching"
Result: "Load time decreased by 60%"
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que o entrevistador quer saber ao perguntar "What\'s the time complexity?"', opcoes:['Quanto tempo você demorou para escrever','A complexidade Big O da sua solução','Se você terminou no prazo','A duração da entrevista'], correta:1, explicacao:'É uma pergunta técnica clássica pedindo para você analisar e declarar a complexidade (O(n), O(log n), etc) da solução que você apresentou.' },
      { tipo:'multipla', pergunta:'O que o método STAR ajuda a estruturar em entrevistas?', opcoes:['Código','Respostas comportamentais contando uma experiência (Situação, Tarefa, Ação, Resultado)','Algoritmos','Currículos apenas'], correta:1, explicacao:'STAR (Situation, Task, Action, Result) é um framework para responder perguntas comportamentais de forma clara e completa em entrevistas, muito usado no mercado internacional.' },
      { tipo:'completar', pergunta:'Complete a frase comum de currículo para descrever uma melhoria:', codigo:'"___ load time by 40%"', resposta:'Reduced', explicacao:'"Reduced X by Y%" é um padrão comum para quantificar impacto no currículo — métricas concretas impressionam mais que descrições vagas.' }
    ]
  },

  // ── LIÇÃO 66 ──────────────────────────────────────────────
  {
    id: 'c66', titulo: 'Union-Find (Disjoint Set)', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Union-Find é uma estrutura de dados eficiente para agrupar elementos em conjuntos disjuntos e verificar rapidamente se dois elementos estão no mesmo grupo.</p>
      <div class="code-example">
<span class="c-kw">class</span> UnionFind {
  <span class="c-fn">constructor</span>(n) {
    <span class="c-kw">this</span>.pai = Array.<span class="c-fn">from</span>({length: n}, (_, i) => i)
  }

  <span class="c-fn">encontrar</span>(x) {
    <span class="c-kw">if</span> (<span class="c-kw">this</span>.pai[x] !== x) {
      <span class="c-kw">this</span>.pai[x] = <span class="c-kw">this</span>.<span class="c-fn">encontrar</span>(<span class="c-kw">this</span>.pai[x])  <span class="c-cm">// compressão de caminho</span>
    }
    <span class="c-kw">return</span> <span class="c-kw">this</span>.pai[x]
  }

  <span class="c-fn">unir</span>(x, y) {
    <span class="c-kw">const</span> raizX = <span class="c-kw">this</span>.<span class="c-fn">encontrar</span>(x)
    <span class="c-kw">const</span> raizY = <span class="c-kw">this</span>.<span class="c-fn">encontrar</span>(y)
    <span class="c-kw">if</span> (raizX !== raizY) <span class="c-kw">this</span>.pai[raizX] = raizY
  }

  <span class="c-fn">mesmoGrupo</span>(x, y) {
    <span class="c-kw">return</span> <span class="c-kw">this</span>.<span class="c-fn">encontrar</span>(x) === <span class="c-kw">this</span>.<span class="c-fn">encontrar</span>(y)
  }
}
      </div>
      <p><strong>Usos:</strong> detectar componentes conexos em redes sociais, encontrar ciclos em grafos, agrupar pixels similares em processamento de imagem.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Exemplo: amigos em comum / componentes conexos</span>
<span class="c-kw">const</span> uf = <span class="c-kw">new</span> UnionFind(<span class="c-num">6</span>)
uf.<span class="c-fn">unir</span>(<span class="c-num">0</span>, <span class="c-num">1</span>)  <span class="c-cm">// pessoa 0 e 1 são amigas</span>
uf.<span class="c-fn">unir</span>(<span class="c-num">1</span>, <span class="c-num">2</span>)  <span class="c-cm">// pessoa 1 e 2 são amigas</span>
uf.<span class="c-fn">mesmoGrupo</span>(<span class="c-num">0</span>, <span class="c-num">2</span>)  <span class="c-cm">// true — conectadas via 1</span>
uf.<span class="c-fn">mesmoGrupo</span>(<span class="c-num">0</span>, <span class="c-num">5</span>)  <span class="c-cm">// false — grupos diferentes</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que "compressão de caminho" otimiza no Union-Find?', opcoes:['O tamanho da memória usada','Achata a árvore de pais durante a busca, deixando buscas futuras quase O(1)','A velocidade de criação','Não otimiza nada'], correta:1, explicacao:'Ao encontrar a raiz, a compressão de caminho reconecta todos os nós visitados diretamente à raiz — futuras buscas desses nós ficam quase instantâneas.' },
      { tipo:'multipla', pergunta:'Para que tipo de problema Union-Find é ideal?', opcoes:['Ordenar números','Verificar se dois elementos pertencem ao mesmo grupo/componente conectado','Buscar texto','Calcular médias'], correta:1, explicacao:'Union-Find responde rapidamente "estes dois elementos estão conectados?" — útil em redes sociais, detecção de ciclos, e problemas de conectividade em geral.' },
      { tipo:'completar', pergunta:'Complete o método que verifica se dois elementos estão no mesmo grupo:', codigo:'mesmoGrupo(x, y) {\n  return this.encontrar(x) === this.___(y)\n}', resposta:'encontrar', explicacao:'Dois elementos estão no mesmo grupo se suas raízes (encontradas via encontrar()) forem iguais — comparamos a raiz de x com a raiz de y.' }
    ]
  },

  // ── LIÇÃO 67 ──────────────────────────────────────────────
  {
    id: 'c67', titulo: 'Web Components e reuso de UI', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Web Components são uma forma nativa do navegador (sem framework) de criar elementos HTML customizados e reutilizáveis.</p>
      <div class="code-example">
<span class="c-kw">class</span> CardXP <span class="c-kw">extends</span> HTMLElement {
  <span class="c-fn">connectedCallback</span>() {
    <span class="c-kw">const</span> xp = <span class="c-kw">this</span>.getAttribute(<span class="c-str">'xp'</span>)
    <span class="c-kw">this</span>.innerHTML = <span class="c-str">\`
      &lt;div class="card-xp"&gt;
        &lt;span&gt;⚡ \${xp} XP&lt;/span&gt;
      &lt;/div&gt;
    \`</span>
  }
}

customElements.<span class="c-fn">define</span>(<span class="c-str">'card-xp'</span>, CardXP)

<span class="c-cm">// Usar como qualquer tag HTML!</span>
<span class="c-cm">// &lt;card-xp xp="340"&gt;&lt;/card-xp&gt;</span>
      </div>
      <p>É a base de como frameworks como React/Vue funcionam por baixo — só que sem precisar de biblioteca externa.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Shadow DOM — encapsula estilos do componente</span>
<span class="c-kw">class</span> MeuBotao <span class="c-kw">extends</span> HTMLElement {
  <span class="c-fn">connectedCallback</span>() {
    <span class="c-kw">const</span> shadow = <span class="c-kw">this</span>.attachShadow({ mode: <span class="c-str">'open'</span> })
    shadow.innerHTML = <span class="c-str">\`
      &lt;style&gt;
        button { background: purple; color: white; }
      &lt;/style&gt;
      &lt;button&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/button&gt;
    \`</span>
  }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que customElements.define() faz?', opcoes:['Cria variáveis','Registra uma nova tag HTML customizada associada a uma classe','Define cores CSS','Cria uma API'], correta:1, explicacao:'customElements.define(\'minha-tag\', MinhaClasse) ensina o navegador a reconhecer <minha-tag> como um Web Component, executando a classe quando encontrado no DOM.' },
      { tipo:'multipla', pergunta:'Para que serve o Shadow DOM em Web Components?', opcoes:['Deixar o componente invisível','Encapsular estilos e estrutura interna, evitando conflitos com CSS externo','Acelerar o carregamento','Criar animações'], correta:1, explicacao:'Shadow DOM isola o CSS do componente — estilos definidos dentro não vazam para fora, e estilos externos não afetam o componente. Evita conflitos de nomes de classe.' },
      { tipo:'completar', pergunta:'Complete o método chamado quando o Web Component é inserido no DOM:', codigo:'class MeuCard extends HTMLElement {\n  ___() { this.innerHTML = "..." }\n}', resposta:'connectedCallback', explicacao:'connectedCallback() é executado automaticamente quando o elemento é adicionado ao DOM — é onde você inicializa o conteúdo e comportamento do componente.' }
    ]
  },

  // ── LIÇÃO 68 ──────────────────────────────────────────────
  {
    id: 'c68', titulo: 'Algoritmos de string — KMP e busca de padrão', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Buscar um padrão dentro de um texto longo de forma ingênua é O(n*m). O algoritmo KMP (Knuth-Morris-Pratt) faz isso em O(n+m).</p>
      <div class="code-example">
<span class="c-cm">// Busca ingênua — O(n*m)</span>
<span class="c-kw">function</span> <span class="c-fn">buscaIngenua</span>(texto, padrao) {
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i <= texto.length - padrao.length; i++) {
    <span class="c-kw">if</span> (texto.<span class="c-fn">slice</span>(i, i+padrao.length) === padrao) <span class="c-kw">return</span> i
  }
  <span class="c-kw">return</span> -<span class="c-num">1</span>
}

<span class="c-cm">// Na prática, use o método nativo (já otimizado internamente)</span>
texto.<span class="c-fn">indexOf</span>(padrao)
texto.<span class="c-fn">includes</span>(padrao)
      </div>
      <p>KMP usa um array de "falha" pré-calculado para nunca retroceder no texto, evitando comparações redundantes — usado em editores de texto, grep, e ferramentas de busca de DNA.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Conceito do KMP: aproveita informação de tentativas anteriores</span>
<span class="c-cm">// texto:  "AAAAB"</span>
<span class="c-cm">// padrao: "AAB"</span>
<span class="c-cm">// Busca ingênua tentaria do zero a cada posição.</span>
<span class="c-cm">// KMP sabe que já viu "AA" e pula direto pro próximo "A"</span>
<span class="c-cm">// sem re-comparar os caracteres já conhecidos.</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a complexidade da busca ingênua de padrão num texto?', opcoes:['O(n)','O(log n)','O(n*m), onde n=tamanho do texto e m=tamanho do padrão','O(1)'], correta:2, explicacao:'No pior caso, para cada posição do texto (n), comparamos até m caracteres do padrão — resultando em O(n*m), que pode ser lento para textos grandes.' },
      { tipo:'multipla', pergunta:'Por que KMP é mais eficiente que a busca ingênua?', opcoes:['Usa menos memória','Nunca retrocede no texto, reaproveitando informação de comparações já feitas','É mais simples de implementar','Funciona só com números'], correta:1, explicacao:'KMP pré-calcula um array de "falha" que diz exatamente onde retomar a comparação no padrão sem precisar voltar no texto — eliminando trabalho redundante.' },
      { tipo:'completar', pergunta:'Complete o método nativo do JavaScript para buscar a posição de uma substring:', codigo:'texto.___(padrao)  // retorna o índice ou -1', resposta:'indexOf', explicacao:'String.indexOf() já é otimizado internamente pelo motor JavaScript — na prática, você raramente implementa KMP do zero, mas entender o conceito ajuda em entrevistas e casos especializados.' }
    ]
  },

  // ── LIÇÃO 69 ──────────────────────────────────────────────
  {
    id: 'c69', titulo: 'Projeto Final 3 — Chat em tempo real', xp: 450, tipo: 'projeto',
    teoria: `
      <h3>🦉 Terceiro Projeto da Coruja!</h3>
      <p>Hora de combinar WebSockets, DOM, e tudo que você aprendeu num projeto de chat simples em tempo real.</p>
      <div class="code-example">
Requisitos do projeto:

1. Interface de chat com lista de mensagens e input
2. Conectar via WebSocket a um servidor simples
3. Enviar e receber mensagens em tempo real
4. Mostrar nome do remetente e horário
5. Indicador de "usuário está digitando..."
6. Scroll automático para mensagem mais recente
7. Reconexão automática se a conexão cair</div>
      <p>Esse é o projeto mais avançado da Coruja — combina front-end, comunicação em tempo real e boas práticas de UX, fechando com chave de ouro tudo que você estudou.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Estrutura básica do cliente</span>
<span class="c-kw">const</span> ws = <span class="c-kw">new</span> WebSocket(<span class="c-str">'wss://meuchat.com'</span>)

<span class="c-kw">function</span> <span class="c-fn">enviarMensagem</span>(texto) {
  ws.<span class="c-fn">send</span>(JSON.<span class="c-fn">stringify</span>({
    tipo: <span class="c-str">'mensagem'</span>,
    texto,
    horario: <span class="c-kw">new</span> Date().<span class="c-fn">toLocaleTimeString</span>()
  }))
}

ws.<span class="c-fn">onmessage</span> = (evento) => {
  <span class="c-kw">const</span> msg = JSON.<span class="c-fn">parse</span>(evento.data)
  <span class="c-fn">adicionarMensagemNaTela</span>(msg)
  containerMensagens.scrollTop = containerMensagens.scrollHeight
}

<span class="c-cm">// Reconexão automática</span>
ws.<span class="c-fn">onclose</span> = () => {
  setTimeout(() => <span class="c-fn">conectar</span>(), <span class="c-num">2000</span>)
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que implementar reconexão automática no WebSocket?', opcoes:['Não é necessário','Conexões podem cair por instabilidade de rede — reconectar mantém a experiência fluida sem ação manual do usuário','Deixa o código mais complexo sem motivo','É decorativo'], correta:1, explicacao:'Redes instáveis, troca de WiFi para 4G, ou o servidor reiniciando podem derrubar a conexão. Reconectar automaticamente evita que o usuário precise recarregar a página manualmente.' },
      { tipo:'multipla', pergunta:'Como manter o scroll sempre na mensagem mais recente?', opcoes:['Não é possível','Definir scrollTop igual a scrollHeight do container após cada nova mensagem','Usar position: fixed','Recarregar a página'], correta:1, explicacao:'container.scrollTop = container.scrollHeight rola o container até o final — exatamente o comportamento esperado de qualquer app de chat moderno.' },
      { tipo:'completar', pergunta:'Complete para implementar reconexão automática após 2 segundos:', codigo:'ws.onclose = () => {\n  setTimeout(() => conectar(), ___)\n}', resposta:'2000', explicacao:'2000 milissegundos = 2 segundos. Um pequeno delay evita tentativas de reconexão em loop muito agressivo caso o servidor esteja realmente fora do ar.' }
    ]
  },


  // ── LIÇÃO 71 ──────────────────────────────────────────────
  {
    id: 'c71', titulo: 'Tries — árvores de prefixo', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Trie (árvore de prefixo) é especializada em armazenar strings, permitindo buscas extremamente rápidas por prefixo — a base de autocompletar.</p>
      <div class="code-example">
<span class="c-kw">class</span> NoTrie {
  <span class="c-fn">constructor</span>() {
    <span class="c-kw">this</span>.filhos = {}
    <span class="c-kw">this</span>.fimDePalavra = <span class="c-kw">false</span>
  }
}

<span class="c-kw">class</span> Trie {
  <span class="c-fn">constructor</span>() { <span class="c-kw">this</span>.raiz = <span class="c-kw">new</span> NoTrie() }

  <span class="c-fn">inserir</span>(palavra) {
    <span class="c-kw">let</span> no = <span class="c-kw">this</span>.raiz
    <span class="c-kw">for</span> (<span class="c-kw">const</span> letra <span class="c-kw">of</span> palavra) {
      <span class="c-kw">if</span> (!no.filhos[letra]) no.filhos[letra] = <span class="c-kw">new</span> NoTrie()
      no = no.filhos[letra]
    }
    no.fimDePalavra = <span class="c-kw">true</span>
  }

  <span class="c-fn">buscar</span>(palavra) {
    <span class="c-kw">let</span> no = <span class="c-kw">this</span>.raiz
    <span class="c-kw">for</span> (<span class="c-kw">const</span> letra <span class="c-kw">of</span> palavra) {
      <span class="c-kw">if</span> (!no.filhos[letra]) <span class="c-kw">return false</span>
      no = no.filhos[letra]
    }
    <span class="c-kw">return</span> no.fimDePalavra
  }
}
      </div>
      <p><strong>Usos:</strong> autocompletar de busca, corretor ortográfico, roteamento de URLs (Express usa algo similar internamente).</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-kw">const</span> trie = <span class="c-kw">new</span> Trie()
trie.<span class="c-fn">inserir</span>(<span class="c-str">"código"</span>)
trie.<span class="c-fn">inserir</span>(<span class="c-str">"codewisdom"</span>)
trie.<span class="c-fn">inserir</span>(<span class="c-str">"coruja"</span>)

trie.<span class="c-fn">buscar</span>(<span class="c-str">"coruja"</span>)   <span class="c-cm">// true</span>
trie.<span class="c-fn">buscar</span>(<span class="c-str">"cor"</span>)      <span class="c-cm">// false (não é palavra completa)</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Para que serve uma Trie?', opcoes:['Ordenar números','Armazenar e buscar strings eficientemente por prefixo','Calcular médias','Comprimir imagens'], correta:1, explicacao:'Trie organiza palavras compartilhando prefixos comuns na árvore — permite buscas e autocompletar extremamente rápidos, independente do número de palavras armazenadas.' },
      { tipo:'multipla', pergunta:'Onde Trie é tipicamente usada na prática?', opcoes:['Bancos de dados relacionais','Autocompletar de busca e correção ortográfica','Animações CSS','Compressão de vídeo'], correta:1, explicacao:'Google Search, IDEs de código e corretores ortográficos usam estruturas similares a Trie para sugerir palavras conforme você digita, em tempo real.' },
      { tipo:'completar', pergunta:'Complete a propriedade que marca o fim de uma palavra válida na Trie:', codigo:'no.___ = true', resposta:'fimDePalavra', explicacao:'Sem essa marcação, não saberíamos diferenciar um prefixo válido (ex: "cor") de uma palavra completa (ex: "coruja") — ambos compartilham os mesmos nós até certo ponto.' }
    ]
  },

  // ── LIÇÃO 72 ──────────────────────────────────────────────
  {
    id: 'c72', titulo: 'Algoritmos de grafo — caminho mais curto (Dijkstra)', xp: 190,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Dijkstra encontra o caminho mais curto entre nós num grafo com pesos — usado em GPS, roteamento de rede, jogos.</p>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">dijkstra</span>(grafo, inicio) {
  <span class="c-kw">const</span> distancias = {}
  <span class="c-kw">const</span> visitados = <span class="c-kw">new</span> Set()
  Object.keys(grafo).<span class="c-fn">forEach</span>(no => distancias[no] = Infinity)
  distancias[inicio] = <span class="c-num">0</span>

  <span class="c-kw">while</span> (visitados.size < Object.keys(grafo).length) {
    <span class="c-kw">const</span> atual = Object.keys(distancias)
      .<span class="c-fn">filter</span>(n => !visitados.<span class="c-fn">has</span>(n))
      .<span class="c-fn">reduce</span>((a,b) => distancias[a] < distancias[b] ? a : b)

    visitados.<span class="c-fn">add</span>(atual)

    <span class="c-kw">for</span> (<span class="c-kw">const</span> { no, peso } <span class="c-kw">of</span> grafo[atual]) {
      <span class="c-kw">const</span> novaDist = distancias[atual] + peso
      <span class="c-kw">if</span> (novaDist < distancias[no]) distancias[no] = novaDist
    }
  }
  <span class="c-kw">return</span> distancias
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Mapa de cidades com distâncias (pesos)</span>
<span class="c-kw">const</span> mapa = {
  BH: [{ no: <span class="c-str">'SP'</span>, peso: <span class="c-num">580</span> }, { no: <span class="c-str">'RJ'</span>, peso: <span class="c-num">434</span> }],
  SP: [{ no: <span class="c-str">'RJ'</span>, peso: <span class="c-num">429</span> }],
  RJ: []
}
<span class="c-fn">dijkstra</span>(mapa, <span class="c-str">'BH'</span>)
<span class="c-cm">// { BH: 0, SP: 580, RJ: 434 } — menor distância de BH até cada cidade</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Para que problema o algoritmo de Dijkstra é a solução clássica?', opcoes:['Ordenar arrays','Encontrar o caminho mais curto entre nós num grafo com pesos','Buscar texto','Comprimir dados'], correta:1, explicacao:'Dijkstra calcula a menor distância da origem até todos os outros nós alcançáveis — é o algoritmo por trás de GPS e roteamento de rede.' },
      { tipo:'multipla', pergunta:'Por que Dijkstra não funciona corretamente com pesos negativos?', opcoes:['Funciona perfeitamente','Sua estratégia gulosa assume que o caminho mais curto encontrado nunca pode melhorar depois — pesos negativos quebram essa premissa','É só uma limitação teórica sem impacto real','Pesos negativos não existem'], correta:1, explicacao:'Dijkstra "fecha" um nó assumindo que já achou a menor distância. Com pesos negativos, um caminho mais longo inicialmente poderia se tornar mais curto depois — para isso existe o algoritmo Bellman-Ford.' },
      { tipo:'completar', pergunta:'Complete a inicialização: a distância da origem para ela mesma é sempre:', codigo:'distancias[inicio] = ___', resposta:'0', explicacao:'A distância de um nó até ele mesmo é sempre 0 — é o ponto de partida do algoritmo, todas as outras distâncias começam como infinito até serem descobertas.' }
    ]
  },

  // ── LIÇÃO 73 ──────────────────────────────────────────────
  {
    id: 'c73', titulo: 'Backtracking — explorando soluções', xp: 190,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Backtracking explora todas as possibilidades, "voltando atrás" quando um caminho não leva à solução — usado em sudoku solvers, labirintos, combinações.</p>
      <div class="code-example">
<span class="c-cm">// Gerar todas as combinações de um array</span>
<span class="c-kw">function</span> <span class="c-fn">combinacoes</span>(arr) {
  <span class="c-kw">const</span> resultado = []

  <span class="c-kw">function</span> <span class="c-fn">backtrack</span>(atual, restantes) {
    resultado.<span class="c-fn">push</span>([...atual])  <span class="c-cm">// salva o estado atual</span>

    <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < restantes.length; i++) {
      atual.<span class="c-fn">push</span>(restantes[i])               <span class="c-cm">// escolhe</span>
      <span class="c-fn">backtrack</span>(atual, restantes.<span class="c-fn">slice</span>(i+<span class="c-num">1</span>))  <span class="c-cm">// explora</span>
      atual.<span class="c-fn">pop</span>()                            <span class="c-cm">// desfaz (backtrack!)</span>
    }
  }

  <span class="c-fn">backtrack</span>([], arr)
  <span class="c-kw">return</span> resultado
}
<span class="c-fn">combinacoes</span>([<span class="c-num">1</span>,<span class="c-num">2</span>,<span class="c-num">3</span>])
<span class="c-cm">// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Padrão geral de backtracking</span>
<span class="c-kw">function</span> <span class="c-fn">backtrack</span>(estado) {
  <span class="c-kw">if</span> (<span class="c-fn">solucaoCompleta</span>(estado)) { <span class="c-fn">salvar</span>(estado); <span class="c-kw">return</span> }

  <span class="c-kw">for</span> (<span class="c-kw">const</span> opcao <span class="c-kw">of</span> <span class="c-fn">opcoesValidas</span>(estado)) {
    <span class="c-fn">escolher</span>(opcao)
    <span class="c-fn">backtrack</span>(estado)
    <span class="c-fn">desfazer</span>(opcao)  <span class="c-cm">// o "back" do backtracking</span>
  }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que caracteriza backtracking?', opcoes:['Sempre escolhe a melhor opção local','Explora possibilidades e "desfaz" escolhas que não levam à solução, tentando outras','Nunca volta atrás','É sempre O(1)'], correta:1, explicacao:'Backtracking tenta uma escolha, explora recursivamente, e se não funcionar, desfaz (volta atrás) e tenta a próxima opção — sistemático e completo, mas pode ser custoso.' },
      { tipo:'multipla', pergunta:'Por que o array.pop() é essencial no padrão de backtracking?', opcoes:['Não é necessário','Remove a última escolha feita, "desfazendo" o estado antes de tentar a próxima opção','Acelera o código','Cria uma cópia'], correta:1, explicacao:'Sem desfazer a escolha (pop), o estado ficaria "contaminado" com tentativas anteriores ao explorar outras opções — pop() limpa o estado para a próxima tentativa.' },
      { tipo:'completar', pergunta:'Complete o padrão: escolher, explorar (recursão), depois ___ a escolha.', codigo:'escolher(opcao)\nbacktrack(estado)\n___(opcao)', resposta:'desfazer', explicacao:'O ciclo escolher-explorar-desfazer é o coração do backtracking — sempre limpa o estado após explorar um caminho, voltando à situação anterior para testar outras opções.' }
    ]
  },

  // ── LIÇÃO 74 ──────────────────────────────────────────────
  {
    id: 'c74', titulo: 'Acessibilidade web — fundamentos', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Acessibilidade garante que pessoas com deficiências consigam usar seu site — é ética, frequentemente exigida por lei, e melhora SEO.</p>
      <div class="code-example">
<span class="c-cm">&lt;!-- ❌ Não acessível --&gt;</span>
&lt;div onclick="abrir()"&gt;Menu&lt;/div&gt;
&lt;img src="logo.png"&gt;

<span class="c-cm">&lt;!-- ✅ Acessível --&gt;</span>
&lt;button onclick="abrir()" aria-expanded="false"&gt;
  Menu
&lt;/button&gt;
&lt;img src="logo.png" alt="Logo CodeWisdom"&gt;

<span class="c-cm">&lt;!-- Label associado ao input --&gt;</span>
&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input id="email" type="email"&gt;
      </div>
      <p><strong>Regras essenciais:</strong> use elementos semânticos corretos (button, não div), sempre tenha alt em imagens, garanta contraste de cor mínimo 4.5:1, todo elemento interativo deve funcionar com Tab/Enter.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Testar acessibilidade rapidamente</span>
1. Navegue só com Tab — tudo é alcançável?
2. Use um leitor de tela (VoiceOver, NVDA) — faz sentido?
3. Verifique contraste de cores (ferramentas online)
4. Rode o Lighthouse do Chrome DevTools (aba Accessibility)
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que usar <button> em vez de <div onclick="..."> para ações clicáveis?', opcoes:['Não faz diferença','button é nativamente focusável por teclado e anunciado corretamente por leitores de tela','div é mais rápido','button tem mais estilos'], correta:1, explicacao:'button funciona com Tab e Enter automaticamente, e leitores de tela o anunciam como "botão". div precisa de atributos ARIA extras para ter o mesmo comportamento.' },
      { tipo:'multipla', pergunta:'O que o atributo alt em imagens proporciona?', opcoes:['Define o tamanho','Texto alternativo lido por leitores de tela quando a imagem não pode ser vista','Melhora a qualidade da imagem','É só decorativo'], correta:1, explicacao:'alt descreve o conteúdo da imagem para quem usa leitor de tela ou quando a imagem falha ao carregar. Imagens puramente decorativas devem ter alt="" (vazio).' },
      { tipo:'completar', pergunta:'Complete o atributo que associa um label ao seu input correspondente:', codigo:'<label ___="email">Email:</label>\n<input id="email">',resposta:'for', explicacao:'O atributo for do label deve corresponder ao id do input. Isso permite clicar no label para focar o input, e leitores de tela anunciam o label ao focar.' }
    ]
  },

  // ── LIÇÃO 75 ──────────────────────────────────────────────
  {
    id: 'c75', titulo: 'Performance e otimização de loops', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Pequenas decisões em loops fazem grande diferença em performance quando lidamos com grandes volumes de dados.</p>
      <div class="code-example">
<span class="c-cm">// ❌ Recalcula length a cada iteração</span>
<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < arr.length; i++) { ... }

<span class="c-cm">// ✅ Calcula length uma vez só</span>
<span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>, len = arr.length; i < len; i++) { ... }

<span class="c-cm">// ❌ Múltiplas iterações desnecessárias</span>
<span class="c-kw">const</span> pares = arr.<span class="c-fn">filter</span>(n => n % <span class="c-num">2</span> === <span class="c-num">0</span>)
<span class="c-kw">const</span> dobrados = pares.<span class="c-fn">map</span>(n => n * <span class="c-num">2</span>)
<span class="c-kw">const</span> soma = dobrados.<span class="c-fn">reduce</span>((a,b) => a+b, <span class="c-num">0</span>)

<span class="c-cm">// ✅ Uma única iteração combinando tudo</span>
<span class="c-kw">const</span> soma2 = arr.<span class="c-fn">reduce</span>((acc, n) =>
  n % <span class="c-num">2</span> === <span class="c-num">0</span> ? acc + n*<span class="c-num">2</span> : acc, <span class="c-num">0</span>)
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Saída antecipada — evita processamento desnecessário</span>
<span class="c-kw">function</span> <span class="c-fn">algumPar</span>(arr) {
  <span class="c-kw">for</span> (<span class="c-kw">const</span> n <span class="c-kw">of</span> arr) {
    <span class="c-kw">if</span> (n % <span class="c-num">2</span> === <span class="c-num">0</span>) <span class="c-kw">return true</span>  <span class="c-cm">// para assim que acha</span>
  }
  <span class="c-kw">return false</span>
}
<span class="c-cm">// Muito melhor que filter().length > 0 que processa TUDO</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que encadear vários .filter().map().reduce() pode ser menos eficiente?', opcoes:['Não tem diferença de performance','Cada método itera o array completo separadamente — combinar tudo num reduce único itera apenas uma vez','filter() não funciona com map()','reduce() é sempre mais lento'], correta:1, explicacao:'filter().map().reduce() são 3 passagens completas pelo array. Combinar a lógica num único reduce() processa cada elemento apenas uma vez — relevante para arrays muito grandes.' },
      { tipo:'multipla', pergunta:'O que "saída antecipada" (early return) otimiza num loop?', opcoes:['Nada relevante','Para a execução assim que encontra o resultado, evitando processar elementos desnecessários','Deixa o código mais bonito apenas','Aumenta a complexidade'], correta:1, explicacao:'Se você só precisa saber SE existe um elemento que satisfaz uma condição, parar no primeiro encontrado é muito mais eficiente que processar o array inteiro.' },
      { tipo:'completar', pergunta:'Complete a otimização de calcular o length do array apenas uma vez:', codigo:'for (let i = 0, len = arr.___; i < len; i++) { }', resposta:'length', explicacao:'Guardar arr.length numa variável evita recalcular a propriedade a cada iteração — uma micro-otimização que importa em loops com milhões de iterações.' }
    ]
  },

  // ── LIÇÃO 76 ──────────────────────────────────────────────
  {
    id: 'c76', titulo: 'Comparando algoritmos — quando usar o quê', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Você já aprendeu dezenas de algoritmos e estruturas. Hora de consolidar: quando usar cada um na prática.</p>
      <div class="code-example">
Buscar um valor:
  Array desordenado → busca linear O(n)
  Array ordenado    → busca binária O(log n)
  Acesso por chave   → hash map O(1)
  Busca por prefixo  → Trie

Ordenar dados:
  Geral              → Array.sort() nativo (otimizado)
  Aprendizado        → Merge/Quick Sort O(n log n)

Caminho mais curto:
  Sem pesos          → BFS
  Com pesos positivos → Dijkstra
  Dependências        → Ordenação topológica

Otimização:
  Subproblemas repetidos → Programação Dinâmica
  Decisão local boa      → Greedy
  Explorar tudo           → Backtracking
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Pergunta de entrevista: "Como você decidiria a estrutura de dados certa?"</span>

1. Preciso de busca rápida por chave? → Map/objeto
2. Preciso manter ordem de inserção? → Array
3. Preciso de valores únicos? → Set
4. Preciso do menor/maior elemento sempre? → Heap
5. Tenho relações hierárquicas? → Árvore
6. Tenho conexões em rede? → Grafo
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Para buscar rapidamente por chave (ex: usuário por id), qual estrutura é ideal?', opcoes:['Array','Hash Map/objeto — O(1) de acesso','Pilha','Árvore binária'], correta:1, explicacao:'Hash maps oferecem acesso O(1) por chave, muito mais rápido que percorrer um array O(n) procurando pelo id.' },
      { tipo:'multipla', pergunta:'Quando BFS é preferível a Dijkstra para caminho mais curto?', opcoes:['Sempre','Quando o grafo NÃO tem pesos (todas as arestas valem o mesmo)','Nunca, Dijkstra é sempre melhor','Quando há pesos negativos'], correta:1, explicacao:'BFS encontra o caminho mais curto em número de "passos" quando não há pesos diferenciados. Dijkstra é necessário quando as conexões têm custos diferentes (distância, tempo, custo).' },
      { tipo:'completar', pergunta:'Complete: para garantir valores únicos numa coleção, a estrutura ideal é:', codigo:'const colecao = new ___()', resposta:'Set', explicacao:'Set automaticamente garante que não há duplicatas — a estrutura ideal quando você precisa de unicidade sem implementar essa lógica manualmente.' }
    ]
  },

  // ── LIÇÃO 77 ──────────────────────────────────────────────
  {
    id: 'c77', titulo: 'Preparação para entrevistas técnicas', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Entrevistas técnicas testam não só se você sabe a resposta, mas como você pensa. Vamos ver a estratégia certa.</p>
      <div class="code-example">
Processo recomendado ao resolver um problema:

1. ESCLAREÇA — pergunte sobre casos extremos,
   tamanho da entrada, restrições

2. PLANEJE — descreva sua abordagem em
   palavras ANTES de codar

3. CODE — implemente de forma limpa,
   nomeando variáveis bem

4. TESTE — passe por exemplos manualmente,
   incluindo casos extremos (array vazio, etc)

5. OTIMIZE — discuta a complexidade e se
   dá pra melhorar</div>
      <p><strong>Erro comum:</strong> começar a codar imediatamente sem entender o problema completamente. Pergunte antes de assumir.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Casos extremos que você deve sempre considerar</span>
- Array/string vazio
- Um único elemento
- Valores negativos
- Valores duplicados
- Valores muito grandes (overflow?)
- Entrada nula/undefined
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual o primeiro passo recomendado ao receber um problema de entrevista?', opcoes:['Começar a codar imediatamente','Esclarecer requisitos e casos extremos antes de planejar a solução','Pedir a resposta','Desistir se parecer difícil'], correta:1, explicacao:'Perguntar sobre restrições, tamanho de entrada e casos extremos demonstra pensamento estruturado e evita retrabalho por ter assumido algo errado.' },
      { tipo:'multipla', pergunta:'Por que testar manualmente com casos extremos antes de considerar a solução pronta?', opcoes:['Não é necessário','Casos extremos (array vazio, valor único, duplicatas) frequentemente revelam bugs que o caso "normal" não mostra','Deixa mais lento','É só para impressionar o entrevistador'], correta:1, explicacao:'Muitos bugs só aparecem em casos extremos — array vazio causando erro de índice, por exemplo. Testar esses casos antes de declarar a solução pronta evita surpresas.' },
      { tipo:'completar', pergunta:'Complete a etapa final do processo de resolução: depois de testar, você deve...', codigo:'// Última etapa: discutir a complexidade e se dá pra ___', resposta:'otimizar', explicacao:'Mesmo com uma solução funcionando, bons entrevistadores querem ver se você reconhece a complexidade atual e consegue identificar oportunidades de melhoria.' }
    ]
  },

  // ── LIÇÃO 78 ──────────────────────────────────────────────
  {
    id: 'c78', titulo: 'Refatoração — melhorando código existente', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Refatorar é melhorar a estrutura do código SEM mudar seu comportamento externo. Habilidade essencial para manter projetos saudáveis ao longo do tempo.</p>
      <div class="code-example">
<span class="c-cm">// ANTES — função fazendo coisas demais, difícil de testar</span>
<span class="c-kw">function</span> <span class="c-fn">processarPedido</span>(pedido) {
  <span class="c-kw">if</span> (!pedido.itens || pedido.itens.length === <span class="c-num">0</span>) {
    <span class="c-kw">throw new</span> Error(<span class="c-str">'Pedido vazio'</span>)
  }
  <span class="c-kw">let</span> total = <span class="c-num">0</span>
  <span class="c-kw">for</span> (<span class="c-kw">const</span> item <span class="c-kw">of</span> pedido.itens) {
    total += item.preco * item.qtd
  }
  <span class="c-kw">if</span> (pedido.cupom) total *= <span class="c-num">0.9</span>
  <span class="c-kw">return</span> { ...pedido, total }
}

<span class="c-cm">// DEPOIS — dividido em funções pequenas e testáveis</span>
<span class="c-kw">function</span> <span class="c-fn">validarPedido</span>(pedido) {
  <span class="c-kw">if</span> (!pedido.itens?.length) <span class="c-kw">throw new</span> Error(<span class="c-str">'Pedido vazio'</span>)
}
<span class="c-kw">function</span> <span class="c-fn">calcularTotal</span>(itens) {
  <span class="c-kw">return</span> itens.<span class="c-fn">reduce</span>((s, i) => s + i.preco * i.qtd, <span class="c-num">0</span>)
}
<span class="c-kw">function</span> <span class="c-fn">aplicarDesconto</span>(total, temCupom) {
  <span class="c-kw">return</span> temCupom ? total * <span class="c-num">0.9</span> : total
}
<span class="c-kw">function</span> <span class="c-fn">processarPedido</span>(pedido) {
  <span class="c-fn">validarPedido</span>(pedido)
  <span class="c-kw">const</span> total = <span class="c-fn">aplicarDesconto</span>(<span class="c-fn">calcularTotal</span>(pedido.itens), !!pedido.cupom)
  <span class="c-kw">return</span> { ...pedido, total }
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Sinais de que código precisa de refatoração ("code smells"):</span>
- Função com mais de 20-30 linhas
- Nomes genéricos (data, temp, x)
- Código duplicado em vários lugares
- Muitos parâmetros numa função (mais de 3-4)
- Comentários explicando "o que" em vez de "por quê"
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que refatoração muda no código?', opcoes:['O comportamento externo','Apenas a estrutura interna — o comportamento externo permanece o mesmo','Adiciona novas funcionalidades','Remove funcionalidades'], correta:1, explicacao:'Refatoração é puramente sobre melhorar legibilidade, organização e manutenibilidade — sem alterar o que o código faz do ponto de vista de quem o usa.' },
      { tipo:'multipla', pergunta:'O que são "code smells"?', opcoes:['Erros de sintaxe','Sinais indicando que o código provavelmente precisa de refatoração, mesmo funcionando','Bugs críticos','Comentários no código'], correta:1, explicacao:'Code smells não são erros — o código funciona — mas indicam problemas estruturais como funções gigantes, duplicação, ou nomes ruins que dificultam manutenção futura.' },
      { tipo:'completar', pergunta:'Complete: dividir uma função grande em funções menores melhora principalmente a:', codigo:'// Funções pequenas são mais fáceis de ___ e reutilizar', resposta:'testar', explicacao:'Funções pequenas com responsabilidade única são mais fáceis de testar isoladamente, entender e reutilizar em outros contextos — princípios centrais do Clean Code.' }
    ]
  },

  // ── LIÇÃO 79 ──────────────────────────────────────────────
  {
    id: 'c79', titulo: 'Documentação de código — JSDoc e comentários', xp: 150,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Boa documentação economiza tempo de quem usa seu código (incluindo você mesmo, 6 meses depois). JSDoc é o padrão para documentar JavaScript.</p>
      <div class="code-example">
<span class="c-cm">/**
 * Calcula o total de uma venda com desconto opcional
 * @param {number} preco - Preço unitário do produto
 * @param {number} quantidade - Quantidade vendida
 * @param {number} [desconto=0] - Percentual de desconto (0-1)
 * @returns {number} Total calculado
 */</span>
<span class="c-kw">function</span> <span class="c-fn">calcularTotal</span>(preco, quantidade, desconto = <span class="c-num">0</span>) {
  <span class="c-kw">return</span> preco * quantidade * (<span class="c-num">1</span> - desconto)
}
      </div>
      <p><strong>Quando comentar:</strong> explique o <em>por quê</em>, não o <em>o quê</em> (o código já mostra o que faz). Comente decisões não óbvias, workarounds, e regras de negócio complexas.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// ❌ Comentário inútil — só repete o código</span>
<span class="c-cm">// incrementa contador</span>
contador++

<span class="c-cm">// ✅ Comentário útil — explica o PORQUÊ</span>
<span class="c-cm">// Compensamos o índice off-by-one da API externa</span>
contador++
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que JSDoc adiciona ao código JavaScript?', opcoes:['Tipagem em tempo de execução','Documentação estruturada que editores podem ler e mostrar como autocompletar/dicas','Performance extra','Compilação automática'], correta:1, explicacao:'JSDoc é um padrão de comentários estruturados — editores como VS Code leem e mostram a documentação como tooltip ao usar a função, mesmo sem TypeScript.' },
      { tipo:'multipla', pergunta:'Qual o princípio sobre QUANDO comentar código?', opcoes:['Comentar tudo sempre','Explicar o "por quê" de decisões não óbvias, não repetir o que o código já mostra','Nunca comentar','Só comentar erros'], correta:1, explicacao:'Bons comentários explicam contexto e raciocínio que o código sozinho não revela — não duplicam informação óbvia que qualquer leitor já veria lendo o código.' },
      { tipo:'completar', pergunta:'Complete a tag JSDoc para documentar um parâmetro de função:', codigo:'/**\n * @___ {number} preco - Preço do produto\n */',resposta:'param', explicacao:'@param documenta cada parâmetro: tipo entre chaves, nome, e descrição após o hífen. @returns documenta o valor retornado.' }
    ]
  },

  // ── LIÇÃO 80 ──────────────────────────────────────────────
  {
    id: 'c80', titulo: 'Projeto Final 4 — Jogo da memória com lógica completa', xp: 500, tipo: 'projeto',
    teoria: `
      <h3>🦉 Quarto e último Projeto da Coruja!</h3>
      <p>Vamos fechar a Fase 1 com um projeto divertido que usa praticamente TUDO que você aprendeu: um jogo da memória completo.</p>
      <div class="code-example">
Requisitos do projeto:

1. Grid de cartas viradas para baixo (use emojis como símbolos)
2. Clicar revela a carta, clicar em outra compara
3. Se combinarem, ficam reveladas permanentemente
4. Se não combinarem, viram de volta após 1 segundo
5. Contador de jogadas e cronômetro
6. Tela de vitória ao completar todos os pares
7. Botão de reiniciar com embaralhamento (Fisher-Yates!)
8. Salvar melhor pontuação no localStorage</div>
      <p>Esse projeto usa: arrays, embaralhamento, eventos de clique, setTimeout, manipulação de classes CSS, localStorage e lógica condicional — um resumo perfeito da Coruja inteira.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Embaralhamento Fisher-Yates (algoritmo correto e eficiente)</span>
<span class="c-kw">function</span> <span class="c-fn">embaralhar</span>(arr) {
  <span class="c-kw">const</span> copia = [...arr]
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = copia.length - <span class="c-num">1</span>; i > <span class="c-num">0</span>; i--) {
    <span class="c-kw">const</span> j = Math.<span class="c-fn">floor</span>(Math.<span class="c-fn">random</span>() * (i + <span class="c-num">1</span>))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  <span class="c-kw">return</span> copia
}

<span class="c-cm">// Lógica de comparação de cartas</span>
<span class="c-kw">let</span> cartaVirada1 = <span class="c-kw">null</span>
<span class="c-kw">function</span> <span class="c-fn">virarCarta</span>(carta) {
  <span class="c-kw">if</span> (!cartaVirada1) { cartaVirada1 = carta; <span class="c-kw">return</span> }

  <span class="c-kw">if</span> (cartaVirada1.simbolo === carta.simbolo) {
    <span class="c-fn">marcarComoCombinada</span>(cartaVirada1, carta)
  } <span class="c-kw">else</span> {
    setTimeout(() => <span class="c-fn">virarDeVolta</span>(cartaVirada1, carta), <span class="c-num">1000</span>)
  }
  cartaVirada1 = <span class="c-kw">null</span>
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que usar Fisher-Yates em vez de Array.sort(() => Math.random() - 0.5) para embaralhar?', opcoes:['Não há diferença','Fisher-Yates garante distribuição verdadeiramente aleatória; sort() com random tem viés estatístico comprovado','sort() é mais rápido sempre','Fisher-Yates é mais simples'], correta:1, explicacao:'O truque comum com sort() e random tem viés conhecido (algumas permutações são mais prováveis que outras). Fisher-Yates é matematicamente comprovado como uniformemente aleatório.' },
      { tipo:'multipla', pergunta:'Por que usar setTimeout antes de virar as cartas de volta quando não combinam?', opcoes:['Não é necessário','Dá tempo para o jogador VER as duas cartas antes delas se esconderem novamente','Acelera o jogo','É decorativo'], correta:1, explicacao:'Sem o delay, as cartas viram de volta instantaneamente e o jogador não consegue memorizar o que viu — o setTimeout(fn, 1000) dá um segundo de visualização.' },
      { tipo:'completar', pergunta:'Complete o loop do Fisher-Yates que percorre do final para o início:', codigo:'for (let i = copia.length - 1; i > 0; ___) { }', resposta:'i--', explicacao:'O algoritmo percorre de trás para frente, decrementando i, trocando cada posição com uma posição aleatória entre 0 e i (inclusive) — essa é a chave da uniformidade estatística.' }
    ]
  },


  // ── LIÇÃO 82 ──────────────────────────────────────────────
  {
    id: 'c82', titulo: 'Currying e composição de funções', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Currying transforma uma função de múltiplos argumentos numa sequência de funções de um único argumento cada.</p>
      <div class="code-example">
<span class="c-cm">// Função normal</span>
<span class="c-kw">function</span> <span class="c-fn">somar</span>(a, b, c) { <span class="c-kw">return</span> a + b + c }
<span class="c-fn">somar</span>(<span class="c-num">1</span>, <span class="c-num">2</span>, <span class="c-num">3</span>)  <span class="c-cm">// 6</span>

<span class="c-cm">// Versão curried</span>
<span class="c-kw">const</span> <span class="c-fn">somarCurried</span> = a => b => c => a + b + c
<span class="c-fn">somarCurried</span>(<span class="c-num">1</span>)(<span class="c-num">2</span>)(<span class="c-num">3</span>)  <span class="c-cm">// 6</span>

<span class="c-cm">// Útil para criar funções especializadas</span>
<span class="c-kw">const</span> somarComUm = <span class="c-fn">somarCurried</span>(<span class="c-num">1</span>)
<span class="c-kw">const</span> somarComUmEDois = somarComUm(<span class="c-num">2</span>)
somarComUmEDois(<span class="c-num">10</span>)  <span class="c-cm">// 13</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Caso de uso real — multiplicadores de desconto</span>
<span class="c-kw">const</span> <span class="c-fn">aplicarDesconto</span> = percentual => preco => preco * (<span class="c-num">1</span> - percentual)

<span class="c-kw">const</span> desconto10 = <span class="c-fn">aplicarDesconto</span>(<span class="c-num">0.1</span>)
<span class="c-kw">const</span> desconto50 = <span class="c-fn">aplicarDesconto</span>(<span class="c-num">0.5</span>)

desconto10(<span class="c-num">100</span>)  <span class="c-cm">// 90</span>
desconto50(<span class="c-num">100</span>)  <span class="c-cm">// 50</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que currying faz com uma função?', opcoes:['A torna mais rápida','Transforma uma função de múltiplos parâmetros em uma cadeia de funções de um parâmetro cada','Remove parâmetros','Adiciona tipos'], correta:1, explicacao:'Em vez de f(a,b,c), currying cria f(a)(b)(c) — cada chamada retorna uma nova função até todos os argumentos serem fornecidos.' },
      { tipo:'multipla', pergunta:'Qual a vantagem prática de currying?', opcoes:['Nenhuma vantagem real','Permite criar funções especializadas reutilizáveis a partir de uma função genérica','Deixa o código mais difícil de ler sempre','Substitui classes'], correta:1, explicacao:'Como no exemplo do desconto: você "fixa" um parâmetro e ganha uma função reutilizável e nomeada para aquele caso específico.' },
      { tipo:'completar', pergunta:'Complete a versão curried de uma função de soma de dois números:', codigo:'const somar = a => b => a ___ b', resposta:'+', explicacao:'Cada seta (=>) representa uma nova função aninhada. somar(2)(3) chama a primeira função com a=2, que retorna outra função que soma b=3.' }
    ]
  },

  // ── LIÇÃO 83 ──────────────────────────────────────────────
  {
    id: 'c83', titulo: 'Proxy e Reflect — metaprogramação', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Proxy permite interceptar e customizar operações fundamentais em objetos — leitura, escrita, deleção de propriedades.</p>
      <div class="code-example">
<span class="c-kw">const</span> usuario = { nome: <span class="c-str">'Maycon'</span>, xp: <span class="c-num">340</span> }

<span class="c-kw">const</span> proxy = <span class="c-kw">new</span> Proxy(usuario, {
  <span class="c-fn">get</span>(alvo, propriedade) {
    console.<span class="c-fn">log</span>(<span class="c-str">\`Lendo \${propriedade}\`</span>)
    <span class="c-kw">return</span> alvo[propriedade]
  },
  <span class="c-fn">set</span>(alvo, propriedade, valor) {
    <span class="c-kw">if</span> (propriedade === <span class="c-str">'xp'</span> && valor < <span class="c-num">0</span>) {
      <span class="c-kw">throw new</span> Error(<span class="c-str">'XP não pode ser negativo'</span>)
    }
    alvo[propriedade] = valor
    <span class="c-kw">return true</span>
  }
})

proxy.nome      <span class="c-cm">// "Lendo nome" → "Maycon"</span>
proxy.xp = -<span class="c-num">10</span>  <span class="c-cm">// ❌ Error: XP não pode ser negativo</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Uso real: validação automática em qualquer atribuição</span>
<span class="c-kw">function</span> <span class="c-fn">criarObjetoValidado</span>(schema) {
  <span class="c-kw">return new</span> Proxy({}, {
    <span class="c-fn">set</span>(alvo, prop, valor) {
      <span class="c-kw">if</span> (schema[prop] && <span class="c-kw">typeof</span> valor !== schema[prop]) {
        <span class="c-kw">throw new</span> TypeError(<span class="c-str">\`\${prop} deve ser \${schema[prop]}\`</span>)
      }
      alvo[prop] = valor
      <span class="c-kw">return true</span>
    }
  })
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que um Proxy permite fazer?', opcoes:['Acelerar objetos','Interceptar e customizar operações básicas como leitura e escrita de propriedades','Criar classes','Deletar variáveis'], correta:1, explicacao:'Proxy "envolve" um objeto e permite definir handlers customizados (get, set, deleteProperty, etc) que executam toda vez que aquela operação acontece.' },
      { tipo:'multipla', pergunta:'Qual uso prático de Proxy foi mostrado no exemplo?', opcoes:['Acelerar loops','Validação automática de tipo ao atribuir valores a propriedades','Conectar ao banco','Criar animações'], correta:1, explicacao:'O handler set() intercepta toda atribuição e pode validar o valor antes de permitir a mudança — útil para criar objetos com validação embutida.' },
      { tipo:'completar', pergunta:'Complete o handler do Proxy que intercepta leitura de propriedades:', codigo:'new Proxy(alvo, {\n  ___(alvo, prop) { return alvo[prop] }\n})',resposta:'get', explicacao:'O handler get() é chamado toda vez que uma propriedade do proxy é lida (proxy.algumaPropriedade), permitindo customizar ou logar esse acesso.' }
    ]
  },

  // ── LIÇÃO 84 ──────────────────────────────────────────────
  {
    id: 'c84', titulo: 'Algoritmos — busca em matriz 2D', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Matrizes (arrays 2D) modelam grids, tabuleiros de jogos, imagens. Vamos ver como navegar e buscar nelas eficientemente.</p>
      <div class="code-example">
<span class="c-kw">const</span> matriz = [
  [<span class="c-num">1</span>, <span class="c-num">4</span>, <span class="c-num">7</span>],
  [<span class="c-num">2</span>, <span class="c-num">5</span>, <span class="c-num">8</span>],
  [<span class="c-num">3</span>, <span class="c-num">6</span>, <span class="c-num">9</span>]
]

<span class="c-cm">// Percorrer toda a matriz</span>
<span class="c-kw">for</span> (<span class="c-kw">let</span> linha = <span class="c-num">0</span>; linha < matriz.length; linha++) {
  <span class="c-kw">for</span> (<span class="c-kw">let</span> col = <span class="c-num">0</span>; col < matriz[linha].length; col++) {
    console.<span class="c-fn">log</span>(matriz[linha][col])
  }
}

<span class="c-cm">// Busca eficiente em matriz ordenada (linhas e colunas crescentes)</span>
<span class="c-kw">function</span> <span class="c-fn">buscarMatriz</span>(matriz, alvo) {
  <span class="c-kw">let</span> linha = <span class="c-num">0</span>, col = matriz[<span class="c-num">0</span>].length - <span class="c-num">1</span>
  <span class="c-kw">while</span> (linha < matriz.length && col >= <span class="c-num">0</span>) {
    <span class="c-kw">if</span> (matriz[linha][col] === alvo) <span class="c-kw">return true</span>
    <span class="c-kw">if</span> (matriz[linha][col] > alvo) col--
    <span class="c-kw">else</span> linha++
  }
  <span class="c-kw">return false</span>
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Movimentos comuns em grid (jogos, labirintos)</span>
<span class="c-kw">const</span> direcoes = [[-<span class="c-num">1</span>,<span class="c-num">0</span>], [<span class="c-num">1</span>,<span class="c-num">0</span>], [<span class="c-num">0</span>,-<span class="c-num">1</span>], [<span class="c-num">0</span>,<span class="c-num">1</span>]]  <span class="c-cm">// cima,baixo,esq,dir</span>

<span class="c-kw">for</span> (<span class="c-kw">const</span> [dLinha, dCol] <span class="c-kw">of</span> direcoes) {
  <span class="c-kw">const</span> novaLinha = linha + dLinha
  <span class="c-kw">const</span> novaCol = col + dCol
  <span class="c-cm">// verificar limites antes de acessar!</span>
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Como acessar o elemento na linha 1, coluna 2 de uma matriz?', opcoes:['matriz[1,2]','matriz[1][2]','matriz(1,2)','matriz.1.2'], correta:1, explicacao:'Arrays 2D em JavaScript são arrays de arrays — você acessa com colchetes duplos: primeiro a linha, depois a coluna dentro daquela linha.' },
      { tipo:'multipla', pergunta:'Na busca eficiente em matriz ordenada, por que começar no canto superior direito?', opcoes:['É aleatório','Permite eliminar uma linha ou coluna inteira a cada comparação, sendo O(linhas+colunas)','É mais bonito','Não importa onde começar'], correta:1, explicacao:'Do canto superior direito, se o valor é maior que o alvo, eliminamos a coluna inteira (anda esquerda). Se é menor, eliminamos a linha (anda para baixo) — eficiente e elegante.' },
      { tipo:'completar', pergunta:'Complete o array de direções para mover para baixo numa matriz (linha+1, coluna igual):', codigo:'const baixo = [___, 0]', resposta:'1', explicacao:'[1, 0] significa: linha +1 (desce), coluna +0 (mantém). É o padrão comum para representar as 4 direções cardeais em problemas de grid.' }
    ]
  },

  // ── LIÇÃO 85 ──────────────────────────────────────────────
  {
    id: 'c85', titulo: 'Padrão Singleton e Factory', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Dois padrões de criação de objetos muito usados: Singleton (uma única instância) e Factory (fábrica de objetos).</p>
      <div class="code-example">
<span class="c-cm">// Singleton — garante uma única instância</span>
<span class="c-kw">class</span> Configuracao {
  <span class="c-kw">static</span> instancia = <span class="c-kw">null</span>

  <span class="c-kw">static</span> <span class="c-fn">getInstancia</span>() {
    <span class="c-kw">if</span> (!Configuracao.instancia) {
      Configuracao.instancia = <span class="c-kw">new</span> Configuracao()
    }
    <span class="c-kw">return</span> Configuracao.instancia
  }
}
<span class="c-kw">const</span> config1 = Configuracao.<span class="c-fn">getInstancia</span>()
<span class="c-kw">const</span> config2 = Configuracao.<span class="c-fn">getInstancia</span>()
config1 === config2  <span class="c-cm">// true — mesma instância!</span>
      </div>
      <div class="code-example">
<span class="c-cm">// Factory — cria objetos sem expor a lógica de criação</span>
<span class="c-kw">function</span> <span class="c-fn">criarMascote</span>(tipo) {
  <span class="c-kw">const</span> mascotes = {
    coruja: { emoji: <span class="c-str">'🦉'</span>, nome: <span class="c-str">'Athena'</span> },
    elefante: { emoji: <span class="c-str">'🐘'</span>, nome: <span class="c-str">'Memo'</span> }
  }
  <span class="c-kw">return</span> mascotes[tipo] || <span class="c-kw">null</span>
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Quando usar Singleton: configurações globais, conexão de banco,</span>
<span class="c-cm">// cache compartilhado — algo que deve existir uma única vez no app</span>

<span class="c-cm">// Quando usar Factory: quando a lógica de criação é complexa</span>
<span class="c-cm">// ou varia muito, e você quer esconder os detalhes de quem usa</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que o padrão Singleton garante?', opcoes:['Múltiplas instâncias','Que existe apenas UMA instância da classe em toda a aplicação','Velocidade extra','Imutabilidade automática'], correta:1, explicacao:'Singleton controla a criação para garantir que getInstancia() sempre retorne a MESMA instância, criando-a apenas na primeira chamada.' },
      { tipo:'multipla', pergunta:'Qual a vantagem do padrão Factory?', opcoes:['Não tem vantagem','Esconde a lógica de criação de objetos, facilitando manutenção e adicionando flexibilidade','É mais rápido sempre','Substitui classes'], correta:1, explicacao:'Quem usa a factory não precisa saber COMO o objeto é construído — só pede o tipo desejado. Facilita adicionar novos tipos sem alterar código que já usa a factory.' },
      { tipo:'completar', pergunta:'Complete a verificação no Singleton antes de criar nova instância:', codigo:'if (!Configuracao.___) { Configuracao.instancia = new Configuracao() }',resposta:'instancia', explicacao:'Só cria uma nova instância se ainda não existir uma (instancia é null/undefined na primeira chamada). Chamadas subsequentes retornam a mesma instância já criada.' }
    ]
  },

  // ── LIÇÃO 86 ──────────────────────────────────────────────
  {
    id: 'c86', titulo: 'Arrays multidimensionais e matrizes esparsas', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Em problemas com muito espaço vazio (a maioria dos valores é zero/nulo), matrizes esparsas economizam memória drasticamente.</p>
      <div class="code-example">
<span class="c-cm">// Matriz densa — desperdiça memória se a maioria é zero</span>
<span class="c-kw">const</span> matrizDensa = [
  [<span class="c-num">0</span>,<span class="c-num">0</span>,<span class="c-num">0</span>,<span class="c-num">5</span>,<span class="c-num">0</span>],
  [<span class="c-num">0</span>,<span class="c-num">0</span>,<span class="c-num">0</span>,<span class="c-num">0</span>,<span class="c-num">0</span>],
  [<span class="c-num">3</span>,<span class="c-num">0</span>,<span class="c-num">0</span>,<span class="c-num">0</span>,<span class="c-num">0</span>]
]

<span class="c-cm">// Matriz esparsa — só guarda o que não é zero</span>
<span class="c-kw">const</span> matrizEsparsa = <span class="c-kw">new</span> Map()
matrizEsparsa.<span class="c-fn">set</span>(<span class="c-str">'0,3'</span>, <span class="c-num">5</span>)
matrizEsparsa.<span class="c-fn">set</span>(<span class="c-str">'2,0'</span>, <span class="c-num">3</span>)

<span class="c-kw">function</span> <span class="c-fn">obterValor</span>(linha, col) {
  <span class="c-kw">return</span> matrizEsparsa.<span class="c-fn">get</span>(<span class="c-str">\`\${linha},\${col}\`</span>) || <span class="c-num">0</span>
}
      </div>
      <p>Usado em processamento de imagens, simulações físicas, e representação eficiente de grafos grandes (matriz de adjacência esparsa).</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Tabuleiro de jogo da velha como matriz 2D</span>
<span class="c-kw">const</span> tabuleiro = [
  [<span class="c-str">'X'</span>, <span class="c-kw">null</span>, <span class="c-str">'O'</span>],
  [<span class="c-kw">null</span>, <span class="c-str">'X'</span>, <span class="c-kw">null</span>],
  [<span class="c-str">'O'</span>, <span class="c-kw">null</span>, <span class="c-str">'X'</span>]
]

<span class="c-kw">function</span> <span class="c-fn">verificarVitoria</span>(tabuleiro, jogador) {
  <span class="c-cm">// verifica diagonal principal</span>
  <span class="c-kw">return</span> tabuleiro.<span class="c-fn">every</span>((linha, i) => linha[i] === jogador)
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Quando vale a pena usar matriz esparsa em vez de matriz densa?', opcoes:['Sempre','Quando a maioria dos valores é zero/vazio — economiza memória significativamente','Nunca compensa','Só com números'], correta:1, explicacao:'Se 95% da matriz é zero, guardar todos esses zeros desperdiça memória. Matriz esparsa guarda apenas os valores não-zero, economizando espaço em problemas grandes.' },
      { tipo:'multipla', pergunta:'Como obter um valor de matriz esparsa que não foi explicitamente definido?', opcoes:['Retorna undefined sempre','Usar valor padrão (geralmente 0) com fallback: map.get(chave) || 0','Erro de execução','Não é possível'], correta:1, explicacao:'Como nem toda posição está no Map, usamos || 0 (ou outro valor padrão apropriado) para tratar posições não definidas como vazias/zero.' },
      { tipo:'completar', pergunta:'Complete a chave usada para representar posição linha,coluna numa matriz esparsa com Map:', codigo:"map.set(`${linha},${___}`, valor)",resposta:'col', explicacao:'Combinar linha e coluna numa string única ("linha,coluna") cria uma chave que identifica de forma única cada posição da matriz no Map.' }
    ]
  },

  // ── LIÇÃO 87 ──────────────────────────────────────────────
  {
    id: 'c87', titulo: 'Internacionalização (i18n) básica', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Internacionalização (i18n) prepara seu app para múltiplos idiomas e formatos regionais — moeda, data, números.</p>
      <div class="code-example">
<span class="c-cm">// Intl — API nativa do JavaScript para formatação regional</span>
<span class="c-kw">const</span> preco = <span class="c-num">1234.56</span>

<span class="c-kw">new</span> Intl.NumberFormat(<span class="c-str">'pt-BR'</span>, {
  style: <span class="c-str">'currency'</span>, currency: <span class="c-str">'BRL'</span>
}).<span class="c-fn">format</span>(preco)
<span class="c-cm">// "R$ 1.234,56"</span>

<span class="c-kw">new</span> Intl.NumberFormat(<span class="c-str">'en-US'</span>, {
  style: <span class="c-str">'currency'</span>, currency: <span class="c-str">'USD'</span>
}).<span class="c-fn">format</span>(preco)
<span class="c-cm">// "$1,234.56"</span>

<span class="c-cm">// Datas relativas</span>
<span class="c-kw">const</span> rtf = <span class="c-kw">new</span> Intl.RelativeTimeFormat(<span class="c-str">'pt-BR'</span>)
rtf.<span class="c-fn">format</span>(-<span class="c-num">2</span>, <span class="c-str">'day'</span>)  <span class="c-cm">// "há 2 dias"</span>
      </div>
      <p>Sistema de traduções simples: objeto com chaves de tradução por idioma.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Estrutura simples de tradução</span>
<span class="c-kw">const</span> traducoes = {
  pt: { ola: <span class="c-str">'Olá'</span>, sair: <span class="c-str">'Sair'</span> },
  en: { ola: <span class="c-str">'Hello'</span>, sair: <span class="c-str">'Logout'</span> }
}

<span class="c-kw">function</span> <span class="c-fn">t</span>(chave, idioma = <span class="c-str">'pt'</span>) {
  <span class="c-kw">return</span> traducoes[idioma][chave] || chave
}
<span class="c-fn">t</span>(<span class="c-str">'ola'</span>, <span class="c-str">'en'</span>)  <span class="c-cm">// "Hello"</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que a API Intl do JavaScript ajuda a fazer?', opcoes:['Traduzir texto automaticamente com IA','Formatar números, moedas e datas conforme convenções regionais','Conectar com APIs externas','Comprimir dados'], correta:1, explicacao:'Intl é nativa do JavaScript e formata corretamente para cada região — vírgula vs ponto decimal, posição do símbolo de moeda, formato de data — sem bibliotecas externas.' },
      { tipo:'multipla', pergunta:'Por que internacionalização importa mesmo para apps só em português?', opcoes:['Não importa nunca','Formatos de número/data/moeda variam mesmo dentro do português (Brasil vs Portugal), e o app pode crescer para outros mercados','É só decoração','Deixa o código mais lento'], correta:1, explicacao:'Mesmo dentro do português há diferenças regionais. E projetar pensando em i18n desde o início facilita MUITO expandir para outros idiomas no futuro, evitando refatoração grande depois.' },
      { tipo:'completar', pergunta:'Complete para formatar um valor como moeda brasileira:', codigo:"new Intl.NumberFormat('pt-BR', { style: '___', currency: 'BRL' })",resposta:'currency', explicacao:"style: 'currency' ativa a formatação monetária, incluindo o símbolo R$ e as duas casas decimais conforme o padrão brasileiro." }
    ]
  },

  // ── LIÇÃO 88 ──────────────────────────────────────────────
  {
    id: 'c88', titulo: 'Validação de tipos em runtime', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>TypeScript verifica tipos em tempo de compilação, mas dados vindos de APIs externas (JSON, formulários) precisam de validação em runtime também.</p>
      <div class="code-example">
<span class="c-cm">// Validação manual básica</span>
<span class="c-kw">function</span> <span class="c-fn">ehString</span>(v) { <span class="c-kw">return typeof</span> v === <span class="c-str">'string'</span> }
<span class="c-kw">function</span> <span class="c-fn">ehNumero</span>(v) { <span class="c-kw">return typeof</span> v === <span class="c-str">'number'</span> && !isNaN(v) }
<span class="c-kw">function</span> <span class="c-fn">ehArray</span>(v) { <span class="c-kw">return</span> Array.<span class="c-fn">isArray</span>(v) }
<span class="c-kw">function</span> <span class="c-fn">ehObjeto</span>(v) { <span class="c-kw">return typeof</span> v === <span class="c-str">'object'</span> && v !== <span class="c-kw">null</span> && !Array.<span class="c-fn">isArray</span>(v) }

<span class="c-cm">// Validação de schema simples</span>
<span class="c-kw">function</span> <span class="c-fn">validarUsuario</span>(dados) {
  <span class="c-kw">if</span> (!<span class="c-fn">ehObjeto</span>(dados)) <span class="c-kw">throw new</span> Error(<span class="c-str">'Esperado objeto'</span>)
  <span class="c-kw">if</span> (!<span class="c-fn">ehString</span>(dados.nome)) <span class="c-kw">throw new</span> Error(<span class="c-str">'nome deve ser string'</span>)
  <span class="c-kw">if</span> (!<span class="c-fn">ehNumero</span>(dados.idade)) <span class="c-kw">throw new</span> Error(<span class="c-str">'idade deve ser número'</span>)
  <span class="c-kw">return true</span>
}
      </div>
      <p>Bibliotecas como Zod e Yup automatizam essa validação com schemas declarativos — comum em APIs profissionais.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Por que validar mesmo com TypeScript?</span>
<span class="c-kw">interface</span> Usuario { nome: <span class="c-kw">string</span>; idade: <span class="c-kw">number</span> }

<span class="c-cm">// TypeScript confia, mas dados de API podem mentir!</span>
<span class="c-kw">const</span> dados: Usuario = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'/api/usuario'</span>).<span class="c-fn">then</span>(r => r.<span class="c-fn">json</span>())
<span class="c-cm">// Se a API mudar ou tiver bug, dados pode não bater com Usuario</span>
<span class="c-cm">// TypeScript não verifica isso em runtime — só na compilação!</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que TypeScript sozinho não garante segurança de dados vindos de uma API?', opcoes:['TypeScript é perfeito e garante tudo','TypeScript verifica tipos em compilação, mas não pode garantir que dados externos em runtime realmente correspondam ao tipo declarado','TypeScript não verifica nada','APIs sempre retornam dados corretos'], correta:1, explicacao:'TypeScript confia que você está dizendo a verdade sobre o tipo. Se uma API mudar de formato ou tiver bug, o JavaScript em runtime não vai travar — só vai falhar de forma inesperada mais tarde.' },
      { tipo:'multipla', pergunta:'Para que serve validação de tipo em runtime (diferente de TypeScript)?', opcoes:['É redundante','Verifica ATIVAMENTE, durante a execução, se os dados realmente correspondem ao formato esperado, especialmente de fontes externas', 'Substitui testes', 'Só serve para strings'], correta:1, explicacao:'Validação runtime (com funções manuais ou bibliotecas como Zod) checa de fato, durante a execução, se um valor é do tipo esperado — pega problemas que TypeScript não consegue detectar em tempo de compilação.' },
      { tipo:'completar', pergunta:'Complete a verificação de que um valor é um array:', codigo:'function ehArray(v) { return Array.___(v) }', resposta:'isArray', explicacao:'Array.isArray() é o método correto para verificar arrays — typeof array retorna "object", então não diferenciaria array de objeto comum.' }
    ]
  },

  // ── LIÇÃO 89 ──────────────────────────────────────────────
  {
    id: 'c89', titulo: 'Tail Call Optimization e recursão eficiente', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Recursão tradicional pode estourar a pilha em entradas grandes. Recursão de cauda (tail call) é uma técnica que evita esse problema.</p>
      <div class="code-example">
<span class="c-cm">// Recursão normal — acumula chamadas na pilha</span>
<span class="c-kw">function</span> <span class="c-fn">fatorial</span>(n) {
  <span class="c-kw">if</span> (n <= <span class="c-num">1</span>) <span class="c-kw">return</span> <span class="c-num">1</span>
  <span class="c-kw">return</span> n * <span class="c-fn">fatorial</span>(n - <span class="c-num">1</span>)  <span class="c-cm">// precisa esperar o retorno pra multiplicar</span>
}

<span class="c-cm">// Tail call — a chamada recursiva é a ÚLTIMA operação</span>
<span class="c-kw">function</span> <span class="c-fn">fatorialTail</span>(n, acumulador = <span class="c-num">1</span>) {
  <span class="c-kw">if</span> (n <= <span class="c-num">1</span>) <span class="c-kw">return</span> acumulador
  <span class="c-kw">return</span> <span class="c-fn">fatorialTail</span>(n - <span class="c-num">1</span>, n * acumulador)  <span class="c-cm">// não precisa esperar nada depois</span>
}
      </div>
      <p>⚠️ JavaScript (V8/Chrome/Node) <strong>não implementa</strong> tail call optimization na prática, apesar de estar na especificação ES6 — então para entradas muito grandes, prefira loops.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Convertendo para loop quando recursão pode estourar pilha</span>
<span class="c-kw">function</span> <span class="c-fn">fatorialLoop</span>(n) {
  <span class="c-kw">let</span> resultado = <span class="c-num">1</span>
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">2</span>; i <= n; i++) resultado *= i
  <span class="c-kw">return</span> resultado
}
<span class="c-cm">// Sem risco de Stack Overflow, mesmo para n grande</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que caracteriza uma "tail call" (chamada de cauda)?', opcoes:['Qualquer chamada recursiva','A chamada recursiva é a ÚLTIMA operação da função, sem cálculo pendente depois dela','Chamadas no final do arquivo','Funções sem parâmetros'], correta:1, explicacao:'Em fatorialTail, "return fatorialTail(...)" não precisa fazer nada com o resultado depois — é puramente a última ação. Isso teoricamente permite o motor reutilizar o mesmo frame de pilha.' },
      { tipo:'multipla', pergunta:'Por que cuidado ao confiar em tail call optimization no JavaScript?', opcoes:['Não há motivo para cuidado','A maioria dos motores JS (V8/Chrome/Node) não implementa essa otimização na prática, apesar de estar na especificação','TCO sempre funciona','É exclusivo do Python'], correta:1, explicacao:'Apesar do ES6 especificar TCO, engines populares como V8 nunca implementaram de fato — então recursões profundas ainda podem estourar a pilha mesmo em formato tail call.' },
      { tipo:'completar', pergunta:'Complete a alternativa mais segura para recursões muito profundas em JavaScript:', codigo:'// Para entradas muito grandes, prefira usar ___ em vez de recursão', resposta:'loop', explicacao:'Loops (for, while) não consomem pilha de chamadas adicional — são a alternativa segura quando a recursão poderia processar uma entrada muito grande.' }
    ]
  },

  // ── LIÇÃO 90 ──────────────────────────────────────────────
  {
    id: 'c90', titulo: 'Algoritmos de compressão básicos', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Compressão de dados reduz o tamanho da informação. Vamos entender o conceito com Run-Length Encoding, um algoritmo simples e didático.</p>
      <div class="code-example">
<span class="c-cm">// Run-Length Encoding — comprime sequências repetidas</span>
<span class="c-kw">function</span> <span class="c-fn">comprimirRLE</span>(str) {
  <span class="c-kw">let</span> resultado = <span class="c-str">''</span>
  <span class="c-kw">let</span> contador = <span class="c-num">1</span>

  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < str.length; i++) {
    <span class="c-kw">if</span> (str[i] === str[i+<span class="c-num">1</span>]) {
      contador++
    } <span class="c-kw">else</span> {
      resultado += str[i] + contador
      contador = <span class="c-num">1</span>
    }
  }
  <span class="c-kw">return</span> resultado
}
<span class="c-fn">comprimirRLE</span>(<span class="c-str">"aaabbbccccd"</span>)  <span class="c-cm">// "a3b3c4d1"</span>
<span class="c-cm">// 11 caracteres → 8 caracteres</span>
      </div>
      <p>RLE funciona bem para dados com muita repetição (imagens simples, certos tipos de texto). Algoritmos reais como gzip usam técnicas muito mais sofisticadas (Huffman, LZ77).</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Descompressão correspondente</span>
<span class="c-kw">function</span> <span class="c-fn">descomprimirRLE</span>(str) {
  <span class="c-kw">let</span> resultado = <span class="c-str">''</span>
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">0</span>; i < str.length; i += <span class="c-num">2</span>) {
    resultado += str[i].<span class="c-fn">repeat</span>(<span class="c-fn">Number</span>(str[i+<span class="c-num">1</span>]))
  }
  <span class="c-kw">return</span> resultado
}
<span class="c-fn">descomprimirRLE</span>(<span class="c-str">"a3b3c4d1"</span>)  <span class="c-cm">// "aaabbbccccd"</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Em que tipo de dado o Run-Length Encoding funciona melhor?', opcoes:['Dados completamente aleatórios','Dados com muita repetição sequencial (mesmo caractere repetido)','Números apenas','Texto traduzido'], correta:1, explicacao:'RLE comprime bem sequências repetidas (aaa→a3). Em dados sem repetição, pode até AUMENTAR o tamanho — não é uma solução universal.' },
      { tipo:'multipla', pergunta:'Por que algoritmos reais como gzip são mais complexos que RLE?', opcoes:['Não são realmente mais complexos','Usam técnicas estatísticas (Huffman) e de dicionário (LZ77) que funcionam bem em qualquer tipo de dado, não só repetições simples','RLE é sempre melhor','Gzip não existe de verdade'], correta:1, explicacao:'RLE é didático mas limitado. Compressores reais analisam padrões estatísticos e criam dicionários de substrings repetidas, funcionando bem mesmo sem repetição óbvia.' },
      { tipo:'completar', pergunta:'Complete a string comprimida de "xxxxyyy" usando RLE:', codigo:'comprimirRLE("xxxxyyy")  // "x4y___"', resposta:'3', explicacao:'4 x\'s seguidos de 3 y\'s vira "x4y3" — cada caractere seguido de sua contagem de repetições consecutivas.' }
    ]
  },

  // ── LIÇÃO 91 ──────────────────────────────────────────────
  {
    id: 'c91', titulo: 'Service Workers e Cache API a fundo', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Você já usa Service Worker no CodeWisdom! Vamos entender as estratégias de cache mais usadas em PWAs profissionais.</p>
      <div class="code-example">
<span class="c-cm">// Cache First — tenta cache, se não tem, busca na rede</span>
self.<span class="c-fn">addEventListener</span>(<span class="c-str">'fetch'</span>, e => {
  e.<span class="c-fn">respondWith</span>(
    caches.<span class="c-fn">match</span>(e.request).<span class="c-fn">then</span>(cached =>
      cached || <span class="c-fn">fetch</span>(e.request)
    )
  )
})

<span class="c-cm">// Network First — tenta rede, se falhar usa cache</span>
self.<span class="c-fn">addEventListener</span>(<span class="c-str">'fetch'</span>, e => {
  e.<span class="c-fn">respondWith</span>(
    <span class="c-fn">fetch</span>(e.request).<span class="c-fn">catch</span>(() => caches.<span class="c-fn">match</span>(e.request))
  )
})

<span class="c-cm">// Stale While Revalidate — usa cache imediatamente, atualiza em background</span>
self.<span class="c-fn">addEventListener</span>(<span class="c-str">'fetch'</span>, e => {
  e.<span class="c-fn">respondWith</span>(
    caches.<span class="c-fn">match</span>(e.request).<span class="c-fn">then</span>(cached => {
      <span class="c-kw">const</span> fetchPromise = <span class="c-fn">fetch</span>(e.request).<span class="c-fn">then</span>(res => {
        caches.<span class="c-fn">open</span>(<span class="c-str">'v1'</span>).<span class="c-fn">then</span>(c => c.<span class="c-fn">put</span>(e.request, res.<span class="c-fn">clone</span>()))
        <span class="c-kw">return</span> res
      })
      <span class="c-kw">return</span> cached || fetchPromise
    })
  )
})
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Qual estratégia usar?</span>
Cache First    → assets estáticos (CSS, JS, imagens) que raramente mudam
Network First  → dados dinâmicos que precisam estar atualizados
Stale While Revalidate → bom equilíbrio: rápido + sempre atualiza
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual estratégia de cache é ideal para CSS/JS que raramente mudam?', opcoes:['Network First','Cache First — usa o cache imediatamente, só busca na rede se não tiver','Não cachear nunca','Stale While Revalidate sempre'], correta:1, explicacao:'Assets estáticos versionados (como CSS/JS com hash no nome) raramente mudam — Cache First é mais rápido pois evita requisição de rede desnecessária.' },
      { tipo:'multipla', pergunta:'O que a estratégia "Stale While Revalidate" faz?', opcoes:['Nunca usa cache','Retorna o cache imediatamente (mesmo que desatualizado) enquanto busca uma versão nova em background para a próxima vez','Sempre espera a rede','Apaga o cache'], correta:1, explicacao:'O usuário recebe resposta instantânea do cache (stale = "velho"), enquanto uma nova versão é buscada silenciosamente e salva para a próxima visita.' },
      { tipo:'completar', pergunta:'Complete a estratégia que prioriza dados sempre atualizados, com fallback para offline:', codigo:'// ___ First é melhor para dados que precisam estar atualizados', resposta:'Network', explicacao:'Network First tenta buscar da rede primeiro (dados frescos); só usa o cache como fallback se a rede falhar (modo offline).' }
    ]
  },

  // ── LIÇÃO 92 ──────────────────────────────────────────────
  {
    id: 'c92', titulo: 'State Machines — máquinas de estado', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Máquinas de estado modelam sistemas que têm estados bem definidos e transições controladas entre eles — evita bugs de "estados impossíveis".</p>
      <div class="code-example">
<span class="c-cm">// Máquina de estado simples — pedido de e-commerce</span>
<span class="c-kw">const</span> transicoesValidas = {
  pendente:  [<span class="c-str">'pago'</span>, <span class="c-str">'cancelado'</span>],
  pago:      [<span class="c-str">'enviado'</span>, <span class="c-str">'cancelado'</span>],
  enviado:   [<span class="c-str">'entregue'</span>],
  entregue:  [],
  cancelado: []
}

<span class="c-kw">class</span> Pedido {
  <span class="c-fn">constructor</span>() { <span class="c-kw">this</span>.estado = <span class="c-str">'pendente'</span> }

  <span class="c-fn">transicionar</span>(novoEstado) {
    <span class="c-kw">const</span> permitidos = transicoesValidas[<span class="c-kw">this</span>.estado]
    <span class="c-kw">if</span> (!permitidos.<span class="c-fn">includes</span>(novoEstado)) {
      <span class="c-kw">throw new</span> Error(<span class="c-str">\`Não pode ir de \${this.estado} para \${novoEstado}\`</span>)
    }
    <span class="c-kw">this</span>.estado = novoEstado
  }
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Sem máquina de estado — bugs fáceis de acontecer</span>
pedido.status = <span class="c-str">'entregue'</span>  <span class="c-cm">// nada impede pular etapas!</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual problema máquinas de estado previnem?', opcoes:['Bugs de sintaxe','Estados inválidos ou transições que não fazem sentido no negócio','Erros de tipo','Lentidão'], correta:1, explicacao:'Sem controle explícito, qualquer código poderia setar pedido.status = "entregue" diretamente, pulando etapas. A máquina de estado centraliza e valida todas as transições possíveis.' },
      { tipo:'multipla', pergunta:'O que o objeto transicoesValidas representa no exemplo?', opcoes:['Os dados do pedido','Quais transições de estado são permitidas a partir de cada estado atual','O preço do pedido','A lista de produtos'], correta:1, explicacao:'É o mapa de regras: de "pendente" só pode ir para "pago" ou "cancelado" — qualquer outra tentativa de transição é rejeitada.' },
      { tipo:'completar', pergunta:'Complete a verificação antes de permitir uma transição de estado:', codigo:'if (!permitidos.___(novoEstado)) { throw new Error(...) }',resposta:'includes', explicacao:'includes() verifica se o novo estado desejado está na lista de transições permitidas.' }
    ]
  },

  // ── LIÇÃO 93 ──────────────────────────────────────────────
  {
    id: 'c93', titulo: 'Lazy Loading e Code Splitting', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Carregar tudo de uma vez deixa apps lentos. Lazy loading carrega código/recursos só quando realmente necessário.</p>
      <div class="code-example">
<span class="c-cm">// Import dinâmico — carrega o módulo só quando chamado</span>
<span class="c-kw">async function</span> <span class="c-fn">abrirGrafico</span>() {
  <span class="c-kw">const</span> { renderizarGrafico } = <span class="c-kw">await</span> <span class="c-fn">import</span>(<span class="c-str">'./grafico.js'</span>)
  <span class="c-fn">renderizarGrafico</span>()
}

<span class="c-cm">// Lazy loading de imagens</span>
&lt;img src="foto.jpg" loading="lazy" alt="Foto"&gt;
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Intersection Observer + lazy loading customizado</span>
<span class="c-kw">const</span> observer = <span class="c-kw">new</span> IntersectionObserver((entradas) => {
  entradas.<span class="c-fn">forEach</span>(entrada => {
    <span class="c-kw">if</span> (entrada.isIntersecting) {
      entrada.target.src = entrada.target.dataset.src
      observer.<span class="c-fn">unobserve</span>(entrada.target)
    }
  })
})
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que import() dinâmico permite?', opcoes:['Nada diferente','Carregar um módulo apenas quando necessário, não no carregamento inicial', 'É mais lento sempre', 'Substitui require()'], correta:1, explicacao:'import() retorna uma Promise e baixa o código sob demanda — útil para funcionalidades que nem todo usuário vai usar.' },
      { tipo:'multipla', pergunta:'Por que code splitting melhora a performance percebida?', opcoes:['Não melhora nada','Reduz o tamanho do JavaScript inicial que o usuário precisa baixar', 'Deixa o código mais bonito', 'Aumenta requisições sem benefício'], correta:1, explicacao:'O usuário baixa só o necessário para a tela atual — o resto carrega conforme navega.' },
      { tipo:'completar', pergunta:'Complete o atributo HTML nativo para lazy loading de imagens:', codigo:'<img src="foto.jpg" ___="lazy">',resposta:'loading', explicacao:'loading="lazy" é suportado nativamente em browsers modernos.' }
    ]
  },

  // ── LIÇÃO 94 ──────────────────────────────────────────────
  {
    id: 'c94', titulo: 'Closures avançadas — módulos privados', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Closures permitem criar "privacidade" real em JavaScript antes mesmo de existir a sintaxe de campos privados (#) em classes.</p>
      <div class="code-example">
<span class="c-cm">// Module Pattern — encapsula estado privado</span>
<span class="c-kw">const</span> ContadorXP = (<span class="c-kw">function</span>() {
  <span class="c-kw">let</span> xp = <span class="c-num">0</span>

  <span class="c-kw">return</span> {
    <span class="c-fn">adicionar</span>(valor) { xp += valor },
    <span class="c-fn">obter</span>() { <span class="c-kw">return</span> xp }
  }
})()

ContadorXP.<span class="c-fn">adicionar</span>(<span class="c-num">100</span>)
ContadorXP.<span class="c-fn">obter</span>()  <span class="c-cm">// 100</span>
ContadorXP.xp           <span class="c-cm">// undefined!</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Factory de contadores independentes</span>
<span class="c-kw">function</span> <span class="c-fn">criarContador</span>(inicial = <span class="c-num">0</span>) {
  <span class="c-kw">let</span> valor = inicial
  <span class="c-kw">return</span> { incrementar: () => ++valor, valor: () => valor }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que o Module Pattern usando closures consegue simular?', opcoes:['Herança','Privacidade de variáveis inacessíveis de fora do escopo', 'Tipos estáticos', 'Async/await'], correta:1, explicacao:'A variável xp não pode ser acessada diretamente de fora — só através dos métodos expostos que o closure permite manipular.' },
      { tipo:'multipla', pergunta:'O que é um IIFE?', opcoes:['Um tipo de loop','Immediately Invoked Function Expression — função que executa imediatamente', 'Um operador matemático', 'Um tipo de array'], correta:1, explicacao:'(function(){...})() define e chama a função no mesmo momento, criando um escopo isolado.' },
      { tipo:'completar', pergunta:'Complete a sintaxe de um IIFE básico:', codigo:'(function() { console.log("rodou!") })___', resposta:'()', explicacao:'Os parênteses finais () chamam a função imediatamente após sua definição.' }
    ]
  },

  // ── LIÇÃO 95 ──────────────────────────────────────────────
  {
    id: 'c95', titulo: 'Algoritmos gananciosos avançados — intervalos', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Problemas de agendamento e intervalos são clássicos de algoritmos gulosos — escolher a estratégia certa resolve com elegância.</p>
      <div class="code-example">
<span class="c-cm">// Problema: máximo de reuniões sem sobreposição</span>
<span class="c-kw">function</span> <span class="c-fn">maxReunioes</span>(intervalos) {
  <span class="c-kw">const</span> ordenados = [...intervalos].<span class="c-fn">sort</span>((a,b) => a[<span class="c-num">1</span>] - b[<span class="c-num">1</span>])
  <span class="c-kw">let</span> count = <span class="c-num">1</span>, fimAtual = ordenados[<span class="c-num">0</span>][<span class="c-num">1</span>]

  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">1</span>; i < ordenados.length; i++) {
    <span class="c-kw">if</span> (ordenados[i][<span class="c-num">0</span>] >= fimAtual) {
      count++
      fimAtual = ordenados[i][<span class="c-num">1</span>]
    }
  }
  <span class="c-kw">return</span> count
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Por que ordenar por TÉRMINO? Terminar cedo deixa</span>
<span class="c-cm">// mais espaço disponível para reuniões futuras</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que ordenar por horário de TÉRMINO no problema das reuniões?', opcoes:['Não faz diferença','Terminar mais cedo libera espaço mais rápido para encaixar mais reuniões', 'É mais fácil de codar', 'Ordenação por início funcionaria igual'], correta:1, explicacao:'Escolher sempre a reunião que termina primeiro maximiza o tempo restante disponível para outras reuniões.' },
      { tipo:'multipla', pergunta:'Quando dois intervalos devem ser mesclados?', opcoes:['Nunca','Quando o início do próximo é menor ou igual ao fim do anterior', 'Sempre', 'Quando têm o mesmo tamanho'], correta:1, explicacao:'Se o próximo intervalo começa antes do anterior terminar, eles se sobrepõem e devem ser mesclados.' },
      { tipo:'completar', pergunta:'Complete a ordenação necessária para resolver o problema de máximo de reuniões:', codigo:'ordenados.sort((a,b) => a[___] - b[1])', resposta:'1', explicacao:'a[1] representa o horário de término de cada intervalo — ordenar por essa posição é o passo-chave do algoritmo.' }
    ]
  },

  // ── LIÇÃO 96 ──────────────────────────────────────────────
  {
    id: 'c96', titulo: 'Web Workers — paralelismo real no navegador', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>JavaScript é single-threaded, mas Web Workers rodam código em uma thread separada de verdade — útil para tarefas pesadas sem travar a interface.</p>
      <div class="code-example">
<span class="c-cm">// worker.js</span>
self.<span class="c-fn">onmessage</span> = (evento) => {
  <span class="c-kw">const</span> resultado = <span class="c-fn">calculoPesado</span>(evento.data.numero)
  self.<span class="c-fn">postMessage</span>(resultado)
}
      </div>
      <div class="code-example">
<span class="c-cm">// app.js</span>
<span class="c-kw">const</span> worker = <span class="c-kw">new</span> Worker(<span class="c-str">'worker.js'</span>)
worker.<span class="c-fn">postMessage</span>({ numero: <span class="c-num">1000000000</span> })
worker.<span class="c-fn">onmessage</span> = (evento) => console.<span class="c-fn">log</span>(evento.data)
<span class="c-cm">// A interface NUNCA travou durante o cálculo!</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Quando usar: processamento de imagens, cálculos</span>
<span class="c-cm">// pesados, parsing de arquivos grandes, criptografia</span>
<span class="c-cm">// Limitação: Workers NÃO têm acesso ao DOM</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que Web Workers resolvem que Promises sozinhas não conseguem?', opcoes:['Nada de diferente','Executam código numa thread real separada, evitando travar a interface', 'São apenas mais rápidos sempre', 'Substituem fetch()'], correta:1, explicacao:'Cálculos pesados de CPU ainda bloqueariam a thread principal com Promises. Web Workers rodam em thread separada de verdade.' },
      { tipo:'multipla', pergunta:'Qual limitação importante os Web Workers têm?', opcoes:['Não podem fazer cálculos','Não têm acesso direto ao DOM', 'São muito lentos', 'Não funcionam em navegadores modernos'], correta:1, explicacao:'Workers não podem manipular elementos da página diretamente — comunicação é só via postMessage/onmessage.' },
      { tipo:'completar', pergunta:'Complete o método usado para enviar dados para/do Web Worker:', codigo:'worker.___({ numero: 1000 })', resposta:'postMessage', explicacao:'postMessage() é o único canal de comunicação entre thread principal e Worker.' }
    ]
  },

  // ── LIÇÃO 97 ──────────────────────────────────────────────
  {
    id: 'c97', titulo: 'Algoritmos de hash e checksums', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Funções hash transformam dados de qualquer tamanho num valor fixo — usadas em segurança, estruturas de dados e verificação de integridade.</p>
      <div class="code-example">
<span class="c-cm">// Hash criptográfico real (Web Crypto API)</span>
<span class="c-kw">async function</span> <span class="c-fn">sha256</span>(texto) {
  <span class="c-kw">const</span> dados = <span class="c-kw">new</span> TextEncoder().<span class="c-fn">encode</span>(texto)
  <span class="c-kw">const</span> buffer = <span class="c-kw">await</span> crypto.subtle.<span class="c-fn">digest</span>(<span class="c-str">'SHA-256'</span>, dados)
  <span class="c-kw">return</span> Array.<span class="c-fn">from</span>(<span class="c-kw">new</span> Uint8Array(buffer))
    .<span class="c-fn">map</span>(b => b.<span class="c-fn">toString</span>(<span class="c-num">16</span>).<span class="c-fn">padStart</span>(<span class="c-num">2</span>,<span class="c-str">'0'</span>)).<span class="c-fn">join</span>(<span class="c-str">''</span>)
}
      </div>
      <p>⚠️ NUNCA guarde senhas com hash simples — use bcrypt/Argon2 no backend.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Verificar integridade de arquivo baixado</span>
<span class="c-kw">if</span> (hashCalculado !== hashEsperado) {
  console.<span class="c-fn">error</span>(<span class="c-str">'Arquivo corrompido!'</span>)
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que NUNCA usar hash simples para senhas?', opcoes:['É muito lento','É previsível e fácil de quebrar com força bruta ou rainbow tables', 'Senhas não precisam de hash', 'Hash simples não existe'], correta:1, explicacao:'bcrypt/Argon2 são propositalmente lentos e usam salt único, dificultando ataques em massa.' },
      { tipo:'multipla', pergunta:'Para que serve verificar o hash de um arquivo baixado?', opcoes:['Acelerar o download','Confirmar que o arquivo não foi corrompido ou adulterado', 'Comprimir o arquivo', 'Traduzir o conteúdo'], correta:1, explicacao:'Se o hash calculado bate com o esperado, confirma que o arquivo chegou íntegro.' },
      { tipo:'completar', pergunta:'Complete a API nativa para gerar hashes criptográficos seguros:', codigo:'await crypto.___.digest("SHA-256", dados)', resposta:'subtle', explicacao:'crypto.subtle é a Web Crypto API nativa, oferecendo funções criptográficas seguras.' }
    ]
  },

  // ── LIÇÃO 98 ──────────────────────────────────────────────
  {
    id: 'c98', titulo: 'Arquitetura de software — separação de camadas', xp: 180,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Mesmo em projetos pequenos, separar responsabilidades em camadas claras facilita testes, manutenção e crescimento futuro.</p>
      <div class="code-example">
<span class="c-cm">// Model — dados</span>
<span class="c-kw">class</span> LicaoModel {
  <span class="c-kw">static</span> <span class="c-fn">buscarPorId</span>(id) { <span class="c-kw">return</span> licoes.<span class="c-fn">find</span>(l => l.id === id) }
}

<span class="c-cm">// Service — regras de negócio</span>
<span class="c-kw">class</span> LicaoService {
  <span class="c-kw">static</span> <span class="c-fn">concluir</span>(id, usuario) {
    <span class="c-kw">const</span> licao = LicaoModel.<span class="c-fn">buscarPorId</span>(id)
    usuario.xp += licao.xp
  }
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Vantagem: testar lógica sem precisar de interface</span>
<span class="c-fn">it</span>(<span class="c-str">'adiciona XP'</span>, () => {
  <span class="c-kw">const</span> usuario = { xp: <span class="c-num">0</span> }
  LicaoService.<span class="c-fn">concluir</span>(<span class="c-str">'c1'</span>, usuario)
  <span class="c-fn">expect</span>(usuario.xp).<span class="c-fn">toBeGreaterThan</span>(<span class="c-num">0</span>)
})
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que separar a lógica de negócio da interface?', opcoes:['Não há benefício real','Permite testar a lógica isoladamente, sem simular cliques e DOM', 'Deixa o código mais lento', 'É obrigatório por lei'], correta:1, explicacao:'Testar a lógica diretamente é muito mais simples e rápido que simular interações na interface.' },
      { tipo:'multipla', pergunta:'Qual a responsabilidade típica da camada Model?', opcoes:['Mostrar elementos na tela','Lidar com acesso e estrutura de dados', 'Validar formulários visualmente', 'Processar cliques'], correta:1, explicacao:'Model foca em buscar e estruturar dados. Regras de negócio ficam na camada de Service.' },
      { tipo:'completar', pergunta:'Complete a sigla do padrão Model-View-___:', codigo:'MVC significa Model-View-___', resposta:'Controller', explicacao:'Controller conecta Model e View, processando interações do usuário.' }
    ]
  },

  // ── LIÇÃO 99 ──────────────────────────────────────────────
  {
    id: 'c99', titulo: 'Revisão geral — conectando tudo que você aprendeu', xp: 200,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Você está prestes a completar 100 lições! Vamos fazer uma revisão conceitual conectando os principais temas da jornada.</p>
      <div class="code-example">
Sua jornada até aqui:

FUNDAMENTOS → variáveis, condicionais, loops, funções
ESTRUTURAS → arrays, objetos, sets, maps, árvores, grafos
ALGORITMOS → busca, ordenação, recursão, DP, greedy, backtracking
JS AVANÇADO → closures, promises, classes, generators, proxy
QUALIDADE → testes, TypeScript, clean code, refatoração
WEB → DOM, fetch, WebSockets, Service Workers, Web Workers
PROFISSIONAL → segurança, performance, acessibilidade, inglês
PROJETOS → 4 aplicações reais no seu portfólio</div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Um problema real combina MUITOS conceitos aprendidos</span>
<span class="c-kw">async function</span> <span class="c-fn">buscarEProcessar</span>(url) {
  <span class="c-kw">try</span> {
    <span class="c-kw">const</span> res = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(url)
    <span class="c-kw">const</span> dados = <span class="c-kw">await</span> res.<span class="c-fn">json</span>()
    <span class="c-kw">const</span> cache = <span class="c-kw">new</span> Map()
    dados.<span class="c-fn">filter</span>(<span class="c-fn">valido</span>).<span class="c-fn">forEach</span>(d => cache.<span class="c-fn">set</span>(d.id, d))
    <span class="c-kw">return</span> cache
  } <span class="c-kw">catch</span> (erro) { console.<span class="c-fn">error</span>(erro.message) }
}
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual conceito conecta DFS, recursão em árvores e backtracking?', opcoes:['Promises','Explorar fundo um caminho usando a call stack para "lembrar" onde voltar', 'Apenas sintaxe similar', 'Não há conexão real'], correta:1, explicacao:'Todos compartilham o padrão de explorar profundamente um caminho antes de retroceder.' },
      { tipo:'multipla', pergunta:'Por que Big O ajuda a escolher entre array e hash map?', opcoes:['Não ajuda em nada','Permite prever a velocidade da busca antes mesmo de testar', 'Big O só importa em entrevistas', 'Arrays são sempre melhores'], correta:1, explicacao:'Saber a complexidade permite escolher a ferramenta certa para o problema antecipadamente.' },
      { tipo:'completar', pergunta:'Complete: o que viabiliza o Module Pattern e privacidade em funções?', codigo:'O conceito que viabiliza isso é: ___', resposta:'closures', explicacao:'Closures permitem que funções internas acessem variáveis do escopo onde foram criadas, mesmo depois.' }
    ]
  },

  // ── LIÇÃO 100 ──────────────────────────────────────────────
  {
    id: 'c100', titulo: 'Marco — 100 Lições Completas! 🎉', xp: 1000, tipo: 'projeto',
    teoria: `
      <h3>🦉 Parabéns, você chegou em 100 lições!</h3>
      <p>Esse é um marco enorme. Você construiu uma base sólida de programação que vai te acompanhar pelo resto da carreira — desde "Olá, mundo" até Dijkstra, Tries, Web Workers e arquitetura de software.</p>
      <div class="code-example">
O que você é capaz de fazer agora:

✅ Escrever lógica de programação complexa com confiança
✅ Escolher a estrutura de dados certa para cada problema
✅ Analisar complexidade de algoritmos (Big O)
✅ Resolver problemas clássicos de entrevista técnica
✅ Construir aplicações web completas do zero
✅ Aplicar boas práticas de código limpo e testável
✅ Entender conceitos profissionais: segurança, performance, acessibilidade
✅ Comunicar-se tecnicamente em inglês</div>
      <p><strong>Desafio final:</strong> escolha um dos seus 4 projetos anteriores e adicione UMA melhoria nova por conta própria.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Ideias de melhorias:</span>
Visualizador → adicionar Quick Sort visual
To-Do List   → adicionar categorias/tags
Chat         → indicador de "online/offline"
Jogo Memória → níveis de dificuldade

<span class="c-cm">// O importante é o hábito de iterar em código</span>
<span class="c-cm">// já existente — rotina real de um dev profissional</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual é a diferença mais importante entre você no início e agora?', opcoes:['Nenhuma diferença real','Você agora pensa em estruturas de dados, complexidade e arquitetura', 'Só decorou mais sintaxe', 'Sabe mais palavras em inglês'], correta:1, explicacao:'O salto real é a mudança de mentalidade: pensar em complexidade, escolher estruturas certas, escrever código testável.' },
      { tipo:'multipla', pergunta:'Por que iterar em projetos existentes é tão valioso quanto criar do zero?', opcoes:['Não é valiosa','A maior parte do trabalho profissional real é manter e evoluir código existente', 'É mais fácil', 'Só serve para portfólio'], correta:1, explicacao:'No mercado de trabalho, você gasta muito mais tempo evoluindo sistemas existentes do que criando do zero.' },
      { tipo:'completar', pergunta:'Complete: depois da Coruja, o próximo animal da sua jornada é:', codigo:'O próximo é o 🐘 ___, focado em Backend & Dados',resposta:'Elefante', explicacao:'Memo, o Elefante, vai te ensinar SQL, APIs REST, Node.js e tudo de backend!' }
    ]
  },




  // ── LIÇÃO 102 ──────────────────────────────────────────────
  {
    id: 'c102', titulo: 'Lógica proposicional — fundamentos', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Lógica proposicional é a base matemática de todo código condicional que você já escreveu. Formalizar esse conhecimento ajuda a evitar bugs lógicos sutis.</p>
      <div class="code-example">
Operadores lógicos fundamentais:

¬p (NÃO p)      → negação        → !p
p ∧ q (p E q)   → conjunção      → p && q
p ∨ q (p OU q)  → disjunção      → p || q
p → q           → implicação     → !p || q
p ↔ q           → bicondicional  → p === q</div>
      <div class="code-example">
<span class="c-cm">// Lei de De Morgan — extremamente útil na prática!</span>
!(a && b) === (!a || !b)
!(a || b) === (!a && !b)

<span class="c-cm">// Exemplo prático: simplificar condições negadas</span>
<span class="c-cm">// Em vez de:</span>
<span class="c-kw">if</span> (!(idade >= <span class="c-num">18</span> && temDocumento)) { <span class="c-fn">negarAcesso</span>() }

<span class="c-cm">// Aplicando De Morgan, fica mais legível:</span>
<span class="c-kw">if</span> (idade < <span class="c-num">18</span> || !temDocumento) { <span class="c-fn">negarAcesso</span>() }
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Tabela-verdade do AND — mental model que todo dev usa</span>
true  && true  → true
true  && false → false
false && true  → false
false && false → false

<span class="c-cm">// Curto-circuito (short-circuit) é baseado nisso:</span>
<span class="c-cm">// se o primeiro operando de && é false, nem avalia o segundo</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Segundo a Lei de De Morgan, !(a && b) é equivalente a:', opcoes:['a && b','!a && !b','!a || !b','a || b'], correta:2, explicacao:'De Morgan: negar um AND vira um OR com os operandos negados. !(a && b) = !a || !b — essencial para simplificar condições complexas negadas.' },
      { tipo:'multipla', pergunta:'O que "implicação lógica" (p → q) significa na prática de programação?', opcoes:['p sempre é igual a q','Se p é verdadeiro, então q deve ser verdadeiro também (mas se p é falso, não importa o valor de q)','p nunca pode ser true','Não tem aplicação prática'], correta:1, explicacao:'Implicação é a base de muitas validações: "se o usuário está logado (p), então deve ter um token válido (q)". Se p é falso, a implicação é automaticamente verdadeira.' },
      { tipo:'completar', pergunta:'Complete a versão simplificada via De Morgan de !(x || y):', codigo:'!(x || y) === !x ___ !y', resposta:'&&', explicacao:'Negar um OR vira um AND com os operandos negados — o padrão inverso da regra para AND.' }
    ]
  },

  // ── LIÇÃO 103 ──────────────────────────────────────────────
  {
    id: 'c103', titulo: 'Teoria dos conjuntos aplicada', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Conjuntos matemáticos têm correspondência direta com o Set do JavaScript e operações muito comuns em manipulação de dados.</p>
      <div class="code-example">
<span class="c-kw">const</span> a = <span class="c-kw">new</span> Set([<span class="c-num">1</span>,<span class="c-num">2</span>,<span class="c-num">3</span>,<span class="c-num">4</span>])
<span class="c-kw">const</span> b = <span class="c-kw">new</span> Set([<span class="c-num">3</span>,<span class="c-num">4</span>,<span class="c-num">5</span>,<span class="c-num">6</span>])

<span class="c-cm">// União (A ∪ B) — todos os elementos de ambos</span>
<span class="c-kw">const</span> uniao = <span class="c-kw">new</span> Set([...a, ...b])
<span class="c-cm">// {1,2,3,4,5,6}</span>

<span class="c-cm">// Interseção (A ∩ B) — elementos em ambos</span>
<span class="c-kw">const</span> intersecao = <span class="c-kw">new</span> Set([...a].<span class="c-fn">filter</span>(x => b.<span class="c-fn">has</span>(x)))
<span class="c-cm">// {3,4}</span>

<span class="c-cm">// Diferença (A - B) — só em A, não em B</span>
<span class="c-kw">const</span> diferenca = <span class="c-kw">new</span> Set([...a].<span class="c-fn">filter</span>(x => !b.<span class="c-fn">has</span>(x)))
<span class="c-cm">// {1,2}</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Aplicação real: encontrar amigos em comum</span>
<span class="c-kw">const</span> amigosMaycon = <span class="c-kw">new</span> Set([<span class="c-str">'Ana'</span>, <span class="c-str">'João'</span>, <span class="c-str">'Pedro'</span>])
<span class="c-kw">const</span> amigosAna = <span class="c-kw">new</span> Set([<span class="c-str">'João'</span>, <span class="c-str">'Carlos'</span>])

<span class="c-kw">const</span> amigosEmComum = [...amigosMaycon].<span class="c-fn">filter</span>(a => amigosAna.<span class="c-fn">has</span>(a))
<span class="c-cm">// ['João']</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que a operação de interseção entre dois conjuntos retorna?', opcoes:['Todos os elementos de ambos','Apenas os elementos presentes em AMBOS os conjuntos','Elementos só do primeiro','Elementos únicos de cada'], correta:1, explicacao:'Interseção (∩) retorna apenas o que é comum aos dois conjuntos — como "amigos em comum" entre duas pessoas.' },
      { tipo:'multipla', pergunta:'Como calcular a diferença (A - B) usando Sets em JavaScript?', opcoes:['new Set([...a, ...b])','[...a].filter(x => !b.has(x))','a === b','a.length - b.length'], correta:1, explicacao:'Filtramos os elementos de A que NÃO estão em B — isso dá exatamente os elementos exclusivos de A.' },
      { tipo:'completar', pergunta:'Complete a operação de união entre dois Sets:', codigo:'const uniao = new Set([...a, ___b])', resposta:'...', explicacao:'O spread operator em ambos os sets, combinados num array e passados para um novo Set, automaticamente elimina duplicatas, resultando na união.' }
    ]
  },

  // ── LIÇÃO 104 ──────────────────────────────────────────────
  {
    id: 'c104', titulo: 'Combinatória — contando possibilidades', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Combinatória calcula quantas formas existem de organizar ou escolher elementos — útil para estimar complexidade e gerar todas as possibilidades.</p>
      <div class="code-example">
Permutações (ordem importa):
  P(n) = n!  (fatorial)
  Ex: 3 pessoas em fila → 3! = 6 formas

Combinações (ordem NÃO importa):
  C(n,k) = n! / (k! × (n-k)!)
  Ex: escolher 2 de 5 pessoas para um time → C(5,2) = 10</div>
      <div class="code-example">
<span class="c-kw">function</span> <span class="c-fn">fatorial</span>(n) {
  <span class="c-kw">return</span> n <= <span class="c-num">1</span> ? <span class="c-num">1</span> : n * <span class="c-fn">fatorial</span>(n - <span class="c-num">1</span>)
}

<span class="c-kw">function</span> <span class="c-fn">combinacoes</span>(n, k) {
  <span class="c-kw">return</span> <span class="c-fn">fatorial</span>(n) / (<span class="c-fn">fatorial</span>(k) * <span class="c-fn">fatorial</span>(n - k))
}
<span class="c-fn">combinacoes</span>(<span class="c-num">5</span>, <span class="c-num">2</span>)  <span class="c-cm">// 10</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Por que isso importa para Big O?</span>
<span class="c-cm">// Gerar todas as permutações de um array de tamanho n</span>
<span class="c-cm">// tem complexidade O(n!) — cresce absurdamente rápido!</span>

<span class="c-cm">// 5 elementos → 120 permutações</span>
<span class="c-cm">// 10 elementos → 3.628.800 permutações</span>
<span class="c-cm">// 15 elementos → mais de 1 trilhão!</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a diferença entre permutação e combinação?', opcoes:['São idênticas','Permutação a ordem importa, combinação a ordem não importa','Combinação é sempre maior','Permutação só funciona com números'], correta:1, explicacao:'Em permutação, [A,B,C] é diferente de [C,B,A]. Em combinação, escolher {A,B} é o mesmo que escolher {B,A} — só importa QUAIS elementos, não a ordem.' },
      { tipo:'multipla', pergunta:'Por que algoritmos O(n!) são considerados extremamente ineficientes?', opcoes:['Não são ineficientes','Crescem tão rapidamente que mesmo entradas pequenas (15-20 elementos) já são impraticáveis de processar','São sempre mais rápidos','O(n!) é igual a O(n)'], correta:1, explicacao:'Fatorial cresce mais rápido que qualquer exponencial. Por isso algoritmos que geram todas as permutações só são viáveis para conjuntos muito pequenos.' },
      { tipo:'completar', pergunta:'Complete a fórmula de combinação C(n,k):', codigo:'C(n,k) = n! / (k! × (n-___)!)', resposta:'k', explicacao:'A fórmula divide o fatorial total pelo fatorial dos escolhidos vezes o fatorial dos não escolhidos (n-k), eliminando contagens de ordem redundantes.' }
    ]
  },

  // ── LIÇÃO 105 ──────────────────────────────────────────────
  {
    id: 'c105', titulo: 'Funções e relações matemáticas em código', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>O conceito matemático de função (entrada → saída única) é exatamente o que programamos toda hora — formalizar isso ajuda a pensar em pureza e composição.</p>
      <div class="code-example">
Função matemática: f(x) = x²
Para cada x, existe EXATAMENTE um resultado

<span class="c-cm">// Equivalente em código — função pura</span>
<span class="c-kw">const</span> f = x => x ** <span class="c-num">2</span>
f(<span class="c-num">3</span>)  <span class="c-cm">// sempre 9, nunca outro valor</span>

<span class="c-cm">// Domínio e contradomínio</span>
<span class="c-cm">// domínio = valores válidos de entrada</span>
<span class="c-cm">// contradomínio = valores possíveis de saída</span>
<span class="c-kw">function</span> <span class="c-fn">raizQuadrada</span>(x) {
  <span class="c-kw">if</span> (x < <span class="c-num">0</span>) <span class="c-kw">throw new</span> Error(<span class="c-str">'Domínio inválido: x deve ser ≥ 0'</span>)
  <span class="c-kw">return</span> Math.<span class="c-fn">sqrt</span>(x)
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Composição de funções matemáticas: (f ∘ g)(x) = f(g(x))</span>
<span class="c-kw">const</span> dobrar = x => x * <span class="c-num">2</span>
<span class="c-kw">const</span> somarUm = x => x + <span class="c-num">1</span>

<span class="c-kw">const</span> <span class="c-fn">compor</span> = (f, g) => x => f(g(x))
<span class="c-kw">const</span> dobrarDepoisSomar = <span class="c-fn">compor</span>(somarUm, dobrar)

dobrarDepoisSomar(<span class="c-num">5</span>)  <span class="c-cm">// dobrar(5)=10, somarUm(10)=11</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que caracteriza uma função matemática verdadeira?', opcoes:['Pode retornar valores diferentes para a mesma entrada','Para cada entrada, existe exatamente uma saída correspondente','Sempre retorna números','Não pode ter parâmetros'], correta:1, explicacao:'Funções matemáticas são determinísticas — mesma entrada sempre produz a mesma saída. Isso é exatamente o conceito de "função pura" em programação funcional.' },
      { tipo:'multipla', pergunta:'O que "domínio" de uma função representa?', opcoes:['O nome da função','O conjunto de valores de entrada válidos para a função','O resultado da função','A complexidade da função'], correta:1, explicacao:'Domínio define quais entradas a função aceita. raizQuadrada tem domínio x ≥ 0 — valores negativos estão fora do domínio (causam erro).' },
      { tipo:'completar', pergunta:'Complete a notação matemática de composição de funções:', codigo:'(f ∘ g)(x) = f(___(x))', resposta:'g', explicacao:'Composição aplica g primeiro, depois f no resultado — a leitura é "f composto com g", executando da direita para esquerda.' }
    ]
  },

  // ── LIÇÃO 106 ──────────────────────────────────────────────
  {
    id: 'c106', titulo: 'Probabilidade básica para devs', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Probabilidade aparece em testes A/B, sistemas de recomendação, geração procedural de jogos e análise de algoritmos randomizados.</p>
      <div class="code-example">
Probabilidade = casos favoráveis / casos possíveis

<span class="c-cm">// Simular um dado de 6 lados</span>
<span class="c-kw">function</span> <span class="c-fn">rolarDado</span>() {
  <span class="c-kw">return</span> Math.<span class="c-fn">floor</span>(Math.<span class="c-fn">random</span>() * <span class="c-num">6</span>) + <span class="c-num">1</span>
}

<span class="c-cm">// Probabilidade de sortear um número específico</span>
<span class="c-cm">// P(número específico) = 1/6 ≈ 16.67%</span>

<span class="c-cm">// Sorteio com pesos diferentes (loot de jogo, por exemplo)</span>
<span class="c-kw">function</span> <span class="c-fn">sortearComPeso</span>(itens) {
  <span class="c-kw">const</span> totalPeso = itens.<span class="c-fn">reduce</span>((s, i) => s + i.peso, <span class="c-num">0</span>)
  <span class="c-kw">let</span> r = Math.<span class="c-fn">random</span>() * totalPeso
  <span class="c-kw">for</span> (<span class="c-kw">const</span> item <span class="c-kw">of</span> itens) {
    <span class="c-kw">if</span> (r < item.peso) <span class="c-kw">return</span> item
    r -= item.peso
  }
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Teste A/B simplificado — 50% chance de cada versão</span>
<span class="c-kw">function</span> <span class="c-fn">escolherVersao</span>() {
  <span class="c-kw">return</span> Math.<span class="c-fn">random</span>() < <span class="c-num">0.5</span> ? <span class="c-str">'A'</span> : <span class="c-str">'B'</span>
}

<span class="c-cm">// Loot box com raridades — 70% comum, 25% raro, 5% épico</span>
sortearComPeso([
  { nome: <span class="c-str">'Comum'</span>, peso: <span class="c-num">70</span> },
  { nome: <span class="c-str">'Raro'</span>, peso: <span class="c-num">25</span> },
  { nome: <span class="c-str">'Épico'</span>, peso: <span class="c-num">5</span> }
])
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Como simular um sorteio com 70% de chance de algo acontecer?', opcoes:['Math.random() < 0.7','Math.random() > 7','Math.floor(70)','Não é possível simular'], correta:0, explicacao:'Math.random() gera entre 0 e 1. Como a distribuição é uniforme, comparar com < 0.7 dá exatamente 70% de chance de ser verdadeiro.' },
      { tipo:'multipla', pergunta:'Em sorteios com pesos diferentes (loot box), o que o "peso" representa?', opcoes:['O tamanho do item','A probabilidade relativa daquele item ser sorteado em relação aos outros','A ordem de exibição','O preço do item'], correta:1, explicacao:'Itens com peso maior têm proporcionalmente mais chance de serem sorteados — o algoritmo soma todos os pesos e usa essa proporção para decidir.' },
      { tipo:'completar', pergunta:'Complete a fórmula básica de probabilidade:', codigo:'Probabilidade = casos favoráveis / casos ___', resposta:'possíveis', explicacao:'P(evento) = casos favoráveis ao evento dividido pelo total de casos possíveis — a base de toda probabilidade clássica.' }
    ]
  },

  // ── LIÇÃO 107 ──────────────────────────────────────────────
  {
    id: 'c107', titulo: 'Inglês técnico — lendo RFCs e especificações', xp: 170,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>RFCs (Request for Comments) e especificações técnicas definem padrões da internet — HTTP, JSON, TCP/IP. Saber ler ajuda a entender a fonte da verdade, não só tutoriais de terceiros.</p>
      <div class="code-example">
Vocabulário comum em RFCs e specs:

MUST / MUST NOT  → requisito obrigatório (RFC 2119)
SHOULD           → recomendado, mas não obrigatório
MAY              → opcional, à escolha da implementação
SHALL            → sinônimo formal de MUST

<span class="c-cm">// Exemplo real (RFC 7231 sobre HTTP):</span>
"A server MUST NOT send a Content-Length header
field in any response with a status code of
1xx or 204."

<span class="c-cm">// Tradução: "Um servidor NÃO DEVE enviar o campo</span>
<span class="c-cm">// de cabeçalho Content-Length em nenhuma resposta</span>
<span class="c-cm">// com código de status 1xx ou 204."</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Trecho real de documentação técnica (Fetch API)</span>
"The signal property of the AbortController interface
returns an AbortSignal object instance, which can be
used to communicate with a DOM request."

<span class="c-cm">// Vocabulário-chave: "instance" (instância),</span>
<span class="c-cm">// "communicate with" (comunicar com)</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que MUST significa em uma especificação técnica (RFC 2119)?', opcoes:['Sugestão opcional','Requisito absolutamente obrigatório','Recomendação fraca','Apenas um exemplo'], correta:1, explicacao:'MUST/MUST NOT/SHALL indicam requisitos obrigatórios — implementações que não seguem isso são consideradas não-conformes com a especificação.' },
      { tipo:'multipla', pergunta:'Qual a diferença entre SHOULD e MUST numa especificação?', opcoes:['São idênticos','SHOULD é recomendado mas pode ser ignorado com justificativa; MUST é obrigatório sempre','SHOULD é mais forte que MUST','MUST é opcional'], correta:1, explicacao:'SHOULD permite exceções em casos específicos com bons motivos. MUST não tem exceções — é um requisito rígido para conformidade com a especificação.' },
      { tipo:'completar', pergunta:'Complete a palavra que indica algo totalmente opcional numa RFC:', codigo:'A palavra-chave "___" indica que a implementação é opcional', resposta:'MAY', explicacao:'MAY indica que a implementação pode escolher livremente incluir ou não aquele comportamento — sem implicar não-conformidade de nenhuma forma.' }
    ]
  },

  // ── LIÇÃO 108 ──────────────────────────────────────────────
  {
    id: 'c108', titulo: 'Inglês técnico — gírias e cultura dev', xp: 170,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>Times internacionais usam gírias específicas da cultura tech. Entender (e usar) essas expressões ajuda você a se encaixar naturalmente em qualquer time.</p>
      <div class="code-example">
Gírias muito comuns no dia a dia dev:

"yak shaving" → fazer uma tarefa pequena que leva
                a outra, e outra, até perder o foco original
"bikeshedding" → debater excessivamente detalhes triviais
                 enquanto questões importantes são ignoradas
"rubber duck debugging" → explicar o código em voz alta
                           (até pra um pato de borracha!) para achar o bug
"dogfooding" → usar seu próprio produto internamente
"spike" → uma investigação técnica rápida e exploratória
"tech debt" → débito técnico, atalhos que precisam ser pagos depois
"ship it" → lançar/publicar algo
"war room" → reunião de emergência para resolver incidente crítico</div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Uso real numa conversa de Slack</span>
"I was fixing the login bug but ended up yak shaving
through three other modules. Let's do a quick spike
on the auth flow before we ship this."

<span class="c-cm">// Tradução: "Eu estava corrigindo o bug de login mas</span>
<span class="c-cm">// acabei me perdendo em três outros módulos. Vamos</span>
<span class="c-cm">// fazer uma investigação rápida no fluxo de autenticação</span>
<span class="c-cm">// antes de lançarmos isso."</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'O que "yak shaving" descreve?', opcoes:['Uma técnica de otimização','Fazer uma tarefa pequena que leva a outra, perdendo o foco do objetivo original','Um tipo de teste automatizado','Revisar código de outra pessoa'], correta:1, explicacao:'Expressão clássica de cultura dev — descreve aquela espiral de "preciso consertar X, mas pra isso preciso de Y, que precisa de Z..." até esquecer o que você queria fazer originalmente.' },
      { tipo:'multipla', pergunta:'O que "dogfooding" significa em contexto de produto?', opcoes:['Testar com animais','Usar seu próprio produto internamente antes/junto de lançá-lo para clientes','Treinar um modelo de IA','Documentar bugs'], correta:1, explicacao:'Vem de "eating your own dog food" — empresas que usam seus próprios produtos internamente identificam problemas reais antes dos usuários externos.' },
      { tipo:'completar', pergunta:'Complete a gíria para "débito técnico" em inglês:', codigo:'tech ___', resposta:'debt', explicacao:'"Tech debt" descreve atalhos ou soluções rápidas no código que vão precisar ser "pagos" (corrigidos adequadamente) no futuro.' }
    ]
  },

  // ── LIÇÃO 109 ──────────────────────────────────────────────
  {
    id: 'c109', titulo: 'Inglês técnico — escrevendo documentação', xp: 170,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>Escrever READMEs e documentação clara em inglês amplia seu alcance — projetos open source globais exigem isso.</p>
      <div class="code-example">
Estrutura comum de um README em inglês:

# Project Name
Brief description of what it does

## Installation
\`\`\`bash
npm install my-package
\`\`\`

## Usage
\`\`\`js
import { myFunction } from 'my-package'
myFunction()
\`\`\`

## Contributing
Pull requests are welcome. For major changes,
please open an issue first to discuss what
you would like to change.

## License
MIT</div>
      <p><strong>Frases úteis para documentação:</strong> "Getting Started", "Prerequisites", "Known Issues", "Breaking Changes", "Under the hood".</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Boa prática: badges no topo do README</span>
![Build Status](badge-url)
![License](badge-url)
![Version](badge-url)

<span class="c-cm">// Seção de exemplos é a mais lida — capriche nela!</span>
## Example
\`\`\`js
const result = calculateXP(100, 50)
console.log(result) // 150
\`\`\`
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que escrever documentação em inglês para projetos open source?', opcoes:['Não há motivo real','Amplia o alcance do projeto para a comunidade global de desenvolvedores','É obrigatório pelo GitHub','Português não funciona em READMEs'], correta:1, explicacao:'Inglês é a língua franca do desenvolvimento de software — projetos documentados em inglês podem ser usados e contribuídos por pessoas do mundo todo.' },
      { tipo:'multipla', pergunta:'Qual seção de um README costuma ser a mais lida pelos usuários?', opcoes:['License','Examples/Usage — mostra rapidamente como usar o projeto na prática','Contributing','Changelog'], correta:1, explicacao:'A maioria das pessoas quer ver rapidamente "como eu uso isso" — exemplos de código claros convertem visitantes em usuários do seu projeto.' },
      { tipo:'completar', pergunta:'Complete o cabeçalho comum de seção que explica como instalar um pacote:', codigo:'## ___', resposta:'Installation', explicacao:'"Installation" é a seção padrão de README que explica passo a passo como instalar e configurar o projeto.' }
    ]
  },

  // ── LIÇÃO 110 ──────────────────────────────────────────────
  {
    id: 'c110', titulo: 'Álgebra booleana e portas lógicas', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Álgebra booleana é a matemática por trás de TODO circuito digital — desde a CPU do seu computador até os operadores que você usa todo dia.</p>
      <div class="code-example">
Leis fundamentais da álgebra booleana:

Identidade:    A AND true = A
Anulação:      A AND false = false
Idempotência:  A AND A = A
Comutativa:    A AND B = B AND A
Associativa:   (A AND B) AND C = A AND (B AND C)
Distributiva:  A AND (B OR C) = (A AND B) OR (A AND C)</div>
      <div class="code-example">
<span class="c-cm">// Simplificação de expressões booleanas no código</span>
<span class="c-cm">// ❌ Redundante</span>
<span class="c-kw">if</span> (ativo === <span class="c-kw">true</span>) { ... }

<span class="c-cm">// ✅ Simplificado (idempotência aplicada)</span>
<span class="c-kw">if</span> (ativo) { ... }

<span class="c-cm">// ❌ Verbose</span>
<span class="c-kw">const</span> resultado = condicao ? <span class="c-kw">true</span> : <span class="c-kw">false</span>

<span class="c-cm">// ✅ Direto</span>
<span class="c-kw">const</span> resultado = !!condicao  <span class="c-cm">// ou apenas: condicao</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Portas lógicas como circuitos — base do hardware</span>
AND gate: saída = 1 apenas se TODAS entradas = 1
OR gate:  saída = 1 se PELO MENOS UMA entrada = 1
NOT gate: inverte a entrada
XOR gate: saída = 1 se entradas são DIFERENTES

<span class="c-cm">// XOR é usado em criptografia simples e detecção de mudança</span>
<span class="c-kw">function</span> <span class="c-fn">xor</span>(a, b) { <span class="c-kw">return</span> a !== b }
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que "if (ativo === true)" é considerado redundante?', opcoes:['Não é redundante, é mais seguro','ativo já é um boolean — comparar com true não adiciona nada, "if (ativo)" já funciona igual','=== é mais lento','true não existe em JS'], correta:1, explicacao:'Se ativo já é boolean, comparar com === true é redundante (lei da idempotência). if (ativo) é equivalente e mais limpo.' },
      { tipo:'multipla', pergunta:'Quando uma porta XOR retorna verdadeiro?', opcoes:['Quando ambas entradas são iguais','Quando as duas entradas são DIFERENTES entre si','Sempre retorna verdadeiro','Nunca retorna verdadeiro'], correta:1, explicacao:'XOR (OU exclusivo) é verdadeiro apenas quando as entradas diferem: true/false ou false/true. Se forem iguais (true/true ou false/false), retorna falso.' },
      { tipo:'completar', pergunta:'Complete a lei distributiva da álgebra booleana:', codigo:'A AND (B OR C) = (A AND B) ___ (A AND C)', resposta:'OR', explicacao:'A lei distributiva permite expandir expressões compostas — análoga à distributiva da multiplicação sobre a adição na matemática comum.' }
    ]
  },

  // ── LIÇÃO 111 ──────────────────────────────────────────────
  {
    id: 'c111', titulo: 'Notação científica e precisão numérica', xp: 160,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Computadores representam números de ponto flutuante de forma imprecisa — entender isso evita bugs sutis em cálculos financeiros e científicos.</p>
      <div class="code-example">
<span class="c-cm">// O clássico bug de ponto flutuante</span>
<span class="c-num">0.1</span> + <span class="c-num">0.2</span>  <span class="c-cm">// 0.30000000000000004 — não é exatamente 0.3!</span>

<span class="c-cm">// Por quê? Números binários não representam</span>
<span class="c-cm">// decimais exatamente, assim como 1/3 não tem</span>
<span class="c-cm">// representação decimal exata (0.333...)</span>

<span class="c-cm">// Solução para comparações</span>
<span class="c-kw">function</span> <span class="c-fn">saoIguais</span>(a, b, epsilon = <span class="c-num">0.0001</span>) {
  <span class="c-kw">return</span> Math.<span class="c-fn">abs</span>(a - b) < epsilon
}

<span class="c-cm">// Solução para dinheiro: trabalhe em CENTAVOS (inteiros)</span>
<span class="c-kw">const</span> precoEmCentavos = <span class="c-num">1050</span>  <span class="c-cm">// R$ 10,50</span>
<span class="c-cm">// nunca: const preco = 10.50 — gera erros de arredondamento!</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Notação científica em JavaScript</span>
<span class="c-num">1e6</span>     <span class="c-cm">// 1.000.000</span>
<span class="c-num">1.5e3</span>   <span class="c-cm">// 1.500</span>
<span class="c-num">2e-3</span>    <span class="c-cm">// 0.002</span>

<span class="c-cm">// Number.MAX_SAFE_INTEGER — limite de precisão segura</span>
Number.MAX_SAFE_INTEGER  <span class="c-cm">// 9007199254740991</span>
<span class="c-cm">// Acima disso, operações matemáticas podem ficar imprecisas</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que 0.1 + 0.2 não resulta exatamente em 0.3 em JavaScript?', opcoes:['É um bug do JavaScript que será corrigido','Números de ponto flutuante binários não conseguem representar certos decimais exatamente — é uma limitação universal de computação','0.1 e 0.2 não existem','Só acontece em navegadores antigos'], correta:1, explicacao:'Esse comportamento acontece em praticamente toda linguagem de programação que usa IEEE 754 (padrão de ponto flutuante) — não é exclusivo do JavaScript.' },
      { tipo:'multipla', pergunta:'Qual a prática recomendada para evitar erros de arredondamento em cálculos monetários?', opcoes:['Usar sempre números decimais diretamente','Trabalhar em centavos (números inteiros) e converter apenas na exibição','Arredondar tudo no final','Não é possível evitar'], correta:1, explicacao:'Inteiros não sofrem do problema de precisão de ponto flutuante. Guardar R$10,50 como 1050 centavos evita acúmulo de erros em somas e cálculos.' },
      { tipo:'completar', pergunta:'Complete a função para comparar números de ponto flutuante com tolerância:', codigo:'function saoIguais(a, b, epsilon = 0.0001) {\n  return Math.___(a - b) < epsilon\n}', resposta:'abs', explicacao:'Math.abs() garante que a diferença seja sempre positiva antes de comparar com a tolerância (epsilon), funcionando independente de qual número é maior.' }
    ]
  },

  // ── LIÇÃO 112 ──────────────────────────────────────────────
  {
    id: 'c112', titulo: 'Sequências e séries — Fibonacci e além', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Sequências matemáticas aparecem constantemente em algoritmos — entender seus padrões ajuda a reconhecer e resolver problemas similares.</p>
      <div class="code-example">
<span class="c-cm">// Progressão Aritmética — diferença constante</span>
<span class="c-cm">// 2, 5, 8, 11, 14... (+3 sempre)</span>
<span class="c-kw">function</span> <span class="c-fn">termoPA</span>(a1, razao, n) {
  <span class="c-kw">return</span> a1 + (n - <span class="c-num">1</span>) * razao
}

<span class="c-cm">// Progressão Geométrica — razão constante (multiplicação)</span>
<span class="c-cm">// 2, 4, 8, 16, 32... (×2 sempre)</span>
<span class="c-kw">function</span> <span class="c-fn">termoPG</span>(a1, razao, n) {
  <span class="c-kw">return</span> a1 * razao ** (n - <span class="c-num">1</span>)
}

<span class="c-cm">// Soma de PA — fórmula de Gauss (sem loop!)</span>
<span class="c-kw">function</span> <span class="c-fn">somaPA</span>(a1, an, n) {
  <span class="c-kw">return</span> (n * (a1 + an)) / <span class="c-num">2</span>
}
<span class="c-fn">somaPA</span>(<span class="c-num">1</span>, <span class="c-num">100</span>, <span class="c-num">100</span>)  <span class="c-cm">// 5050 — soma de 1 a 100, instantâneo!</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// A "lenda" de Gauss aos 7 anos de idade:</span>
<span class="c-cm">// professor pediu para somar 1+2+...+100</span>
<span class="c-cm">// Gauss percebeu o padrão: (1+100)+(2+99)+...= sempre 101</span>
<span class="c-cm">// 50 pares × 101 = 5050, calculado em segundos</span>

<span class="c-cm">// Essa mesma intuição evita loops desnecessários no código!</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a diferença entre Progressão Aritmética e Geométrica?', opcoes:['São iguais','PA tem diferença constante entre termos, PG tem razão (multiplicador) constante','PG é sempre crescente','PA não existe em matemática'], correta:1, explicacao:'PA: 2,5,8,11 (soma 3 sempre). PG: 2,4,8,16 (multiplica por 2 sempre) — padrões de crescimento fundamentalmente diferentes.' },
      { tipo:'multipla', pergunta:'Qual a vantagem da fórmula de Gauss para somar uma PA?', opcoes:['Não tem vantagem','Calcula a soma em O(1), sem precisar de um loop O(n) somando termo por termo','É mais lenta que um loop','Só funciona com números pequenos'], correta:1, explicacao:'Em vez de iterar somando cada termo (O(n)), a fórmula calcula diretamente — extremamente mais eficiente para somas grandes.' },
      { tipo:'completar', pergunta:'Complete a fórmula de soma de PA (fórmula de Gauss):', codigo:'soma = (n × (a1 + an)) / ___', resposta:'2', explicacao:'A divisão por 2 vem da intuição de pares: somar o primeiro com o último, repetidamente, sempre dá o mesmo valor — calculado n/2 vezes.' }
    ]
  },

  // ── LIÇÃO 113 ──────────────────────────────────────────────
  {
    id: 'c113', titulo: 'Inglês técnico — code review em profundidade', xp: 170,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>Dar e receber feedback em code reviews em inglês exige vocabulário específico para ser claro e construtivo.</p>
      <div class="code-example">
Frases construtivas para dar feedback:

"Have you considered..." → "Você considerou..."
"What do you think about..." → "O que acha de..."
"This could be simplified by..." → "Isso poderia ser simplificado..."
"Just a suggestion, feel free to ignore" → sugestão leve
"I'm not sure I understand why..." → pedir esclarecimento gentilmente

Frases ao RECEBER feedback:

"Good catch!" → "Boa observação!" (reconhecendo um erro apontado)
"Fair point, I'll update it" → "Ponto justo, vou atualizar"
"I disagree, here's why..." → discordância respeitosa</div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Comentário de review bem estruturado</span>
"This function is doing a lot — have you considered
splitting it into smaller functions? It would make
testing easier. Not blocking, just a suggestion."

<span class="c-cm">// Resposta educada discordando</span>
"I see your point, but I think keeping it together
makes the flow clearer here. Happy to discuss further
if you feel strongly about it!"
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual frase é mais construtiva para sugerir uma mudança em code review?', opcoes:['"This is wrong"','"Have you considered splitting this into smaller functions?"','"Fix this"','"Bad code"'], correta:1, explicacao:'Frases que convidam reflexão ("have you considered") são mais colaborativas que comandos diretos ou críticas vagas — mantém o tom profissional e respeitoso.' },
      { tipo:'multipla', pergunta:'Como reconhecer educadamente que o revisor encontrou um erro real no seu código?', opcoes:['Ignorar o comentário','"Good catch! I\'ll fix that."','Discordar sem motivo','Deletar o comentário'], correta:1, explicacao:'"Good catch!" é a forma padrão e gentil de reconhecer que alguém identificou algo válido — comum e bem recebido em times internacionais.' },
      { tipo:'completar', pergunta:'Complete a frase para discordar respeitosamente de um comentário de review:', codigo:'"I ___, here\'s why..."',resposta:'disagree', explicacao:'"I disagree, here\'s why..." é direto mas educado — afirma a posição e imediatamente oferece justificativa, mantendo o diálogo aberto.' }
    ]
  },

  // ── LIÇÃO 114 ──────────────────────────────────────────────
  {
    id: 'c114', titulo: 'Inglês técnico — daily standups e reuniões ágeis', xp: 160,
    teoria: `
      <h3>🦉 Athena diz / English lesson:</h3>
      <p>Daily standups seguem um formato previsível — saber as frases certas em inglês deixa você confiante em qualquer time ágil internacional.</p>
      <div class="code-example">
Estrutura clássica do daily standup:

"Yesterday I worked on..." → "Ontem trabalhei em..."
"Today I'm going to..." → "Hoje vou..."
"I'm blocked on..." → "Estou bloqueado em..."
"No blockers" → "Sem bloqueios"

<span class="c-cm">// Exemplo completo de standup em inglês:</span>
"Yesterday I finished the login validation and
started on the API integration. Today I'm going
to continue the integration and write tests for it.
I'm blocked on getting API credentials from the
backend team — could someone help me with that?"</div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Vocabulário de planning/sprint review</span>
"story points" → estimativa de esforço/complexidade
"velocity" → quanto o time entrega por sprint
"carry over" → tarefa que passa para o próximo sprint
"definition of done" → critérios para considerar algo pronto
"retro" (retrospective) → reunião de melhoria contínua
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a estrutura típica de 3 partes de um daily standup?', opcoes:['Apresentação, meio, fim','O que fiz ontem, o que farei hoje, e bloqueios','Reclamações, sugestões, votação','Não tem estrutura fixa'], correta:1, explicacao:'O formato clássico é: "Yesterday I worked on...", "Today I\'m going to...", "I\'m blocked on..." — rápido e objetivo, geralmente em 15 minutos para o time todo.' },
      { tipo:'multipla', pergunta:'O que "story points" significa em metodologias ágeis?', opcoes:['Pontuação de jogos','Estimativa relativa de esforço/complexidade de uma tarefa','Número de bugs','Quantidade de commits'], correta:1, explicacao:'Story points medem complexidade relativa (não tempo exato) — times usam escalas como Fibonacci (1,2,3,5,8...) para estimar esforço de tarefas.' },
      { tipo:'completar', pergunta:'Complete a frase padrão para reportar um impedimento no standup:', codigo:'"I\'m ___ on getting API credentials"',resposta:'blocked', explicacao:'"I\'m blocked on X" comunica claramente que você precisa de algo específico para continuar — sinaliza ao time onde ajuda é necessária.' }
    ]
  },

  // ── LIÇÃO 115 ──────────────────────────────────────────────
  {
    id: 'c115', titulo: 'Geometria computacional básica', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Conceitos de geometria aparecem em jogos, visualizações de dados, detecção de colisão e processamento de imagens.</p>
      <div class="code-example">
<span class="c-cm">// Distância entre dois pontos (teorema de Pitágoras)</span>
<span class="c-kw">function</span> <span class="c-fn">distancia</span>(x1, y1, x2, y2) {
  <span class="c-kw">return</span> Math.<span class="c-fn">sqrt</span>((x2-x1)**<span class="c-num">2</span> + (y2-y1)**<span class="c-num">2</span>)
}

<span class="c-cm">// Detectar colisão entre dois círculos</span>
<span class="c-kw">function</span> <span class="c-fn">circulosColidem</span>(c1, c2) {
  <span class="c-kw">const</span> dist = <span class="c-fn">distancia</span>(c1.x, c1.y, c2.x, c2.y)
  <span class="c-kw">return</span> dist < (c1.raio + c2.raio)
}

<span class="c-cm">// Detectar colisão entre dois retângulos (AABB)</span>
<span class="c-kw">function</span> <span class="c-fn">retangulosColidem</span>(r1, r2) {
  <span class="c-kw">return</span> r1.x < r2.x + r2.largura &&
         r1.x + r1.largura > r2.x &&
         r1.y < r2.y + r2.altura &&
         r1.y + r1.altura > r2.y
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Verificar se um ponto está dentro de um retângulo</span>
<span class="c-kw">function</span> <span class="c-fn">pontoNoRetangulo</span>(px, py, rx, ry, largura, altura) {
  <span class="c-kw">return</span> px >= rx && px <= rx + largura &&
         py >= ry && py <= ry + altura
}
<span class="c-cm">// Usado para detectar cliques em elementos customizados (canvas)</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Como verificar se dois círculos estão colidindo?', opcoes:['Comparar suas cores','Verificar se a distância entre os centros é menor que a soma dos raios','Comparar suas áreas','Não é possível detectar'], correta:1, explicacao:'Se a distância entre os centros for menor que r1+r2 (soma dos raios), os círculos se sobrepõem — uma fórmula simples e muito usada em jogos.' },
      { tipo:'multipla', pergunta:'O que AABB significa em detecção de colisão?', opcoes:['Um tipo de animação','Axis-Aligned Bounding Box — retângulos alinhados aos eixos X e Y, sem rotação','Um algoritmo de ordenação','Um formato de imagem'], correta:1, explicacao:'AABB é a forma mais simples e rápida de detectar colisão entre retângulos — assume que não há rotação, simplificando bastante os cálculos.' },
      { tipo:'completar', pergunta:'Complete a fórmula de distância entre dois pontos:', codigo:'distancia = Math.sqrt((x2-x1)**2 + (y2-y1)**___)', resposta:'2', explicacao:'A fórmula de distância euclidiana eleva ambas as diferenças (em x e y) ao quadrado, soma, e tira a raiz quadrada — direto do teorema de Pitágoras.' }
    ]
  },

  // ── LIÇÃO 116 ──────────────────────────────────────────────
  {
    id: 'c116', titulo: 'Teoria dos números — primos e divisibilidade', xp: 170,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Números primos são a base de criptografia moderna (RSA) e aparecem com frequência em problemas de algoritmos e entrevistas técnicas.</p>
      <div class="code-example">
<span class="c-cm">// Verificar se um número é primo — O(√n), eficiente</span>
<span class="c-kw">function</span> <span class="c-fn">ehPrimo</span>(n) {
  <span class="c-kw">if</span> (n < <span class="c-num">2</span>) <span class="c-kw">return false</span>
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">2</span>; i <= Math.<span class="c-fn">sqrt</span>(n); i++) {
    <span class="c-kw">if</span> (n % i === <span class="c-num">0</span>) <span class="c-kw">return false</span>
  }
  <span class="c-kw">return true</span>
}

<span class="c-cm">// Crivo de Eratóstenes — achar todos os primos até N</span>
<span class="c-kw">function</span> <span class="c-fn">crivoEratostenes</span>(n) {
  <span class="c-kw">const</span> ehComposto = <span class="c-kw">new</span> Array(n + <span class="c-num">1</span>).<span class="c-fn">fill</span>(<span class="c-kw">false</span>)
  <span class="c-kw">const</span> primos = []
  <span class="c-kw">for</span> (<span class="c-kw">let</span> i = <span class="c-num">2</span>; i <= n; i++) {
    <span class="c-kw">if</span> (!ehComposto[i]) {
      primos.<span class="c-fn">push</span>(i)
      <span class="c-kw">for</span> (<span class="c-kw">let</span> j = i*i; j <= n; j += i) ehComposto[j] = <span class="c-kw">true</span>
    }
  }
  <span class="c-kw">return</span> primos
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Por que números primos são a base do RSA (criptografia)?</span>
<span class="c-cm">// Multiplicar dois primos grandes é fácil e rápido.</span>
<span class="c-cm">// Fatorar o resultado de volta nos primos originais</span>
<span class="c-cm">// é EXTREMAMENTE difícil computacionalmente.</span>
<span class="c-cm">// Essa assimetria é o que torna a criptografia segura!</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Por que verificar primalidade só até a raiz quadrada de n já é suficiente?', opcoes:['É uma aproximação que às vezes erra','Se n tem um divisor maior que √n, necessariamente tem um par menor que √n também — checar além disso é redundante','Não é suficiente, é só mais rápido','É só uma convenção arbitrária'], correta:1, explicacao:'Se n = a × b e a ≤ b, então a ≤ √n. Então basta testar divisores até √n — qualquer divisor maior já teria seu "par" encontrado antes.' },
      { tipo:'multipla', pergunta:'O que o Crivo de Eratóstenes faz de diferente da verificação individual?', opcoes:['É mais lento','Encontra TODOS os primos até N de uma vez, de forma muito mais eficiente que testar cada número individualmente','Só funciona com números pequenos','Não tem diferença real'], correta:1, explicacao:'Em vez de testar primalidade de cada número separadamente, o crivo "elimina" múltiplos de cada primo encontrado — muito mais eficiente para gerar listas grandes de primos.' },
      { tipo:'completar', pergunta:'Complete por que números primos grandes são a base da criptografia RSA:', codigo:'// Multiplicar primos é fácil, mas ___ o resultado de volta é muito difícil', resposta:'fatorar', explicacao:'A dificuldade computacional de fatorar números grandes de volta em seus primos originais é o que garante a segurança de sistemas criptográficos como RSA.' }
    ]
  },

  // ── LIÇÃO 117 ──────────────────────────────────────────────
  {
    id: 'c117', titulo: 'Síntese final — matemática e comunicação no dia a dia dev', xp: 200,
    teoria: `
      <h3>🦉 Athena diz:</h3>
      <p>Última lição antes da Prova Final! Vamos conectar matemática discreta e comunicação técnica — as duas últimas peças que faltavam na sua formação de fundamentos.</p>
      <div class="code-example">
Conexões que você construiu nesta extensão:

LÓGICA PROPOSICIONAL → simplificar condicionais complexas
TEORIA DOS CONJUNTOS  → operações em Sets (união, interseção)
COMBINATÓRIA          → entender complexidade O(n!) de permutações
PROBABILIDADE         → sorteios ponderados, testes A/B
ÁLGEBRA BOOLEANA      → simplificação de expressões no código
NÚMEROS PRIMOS        → base da criptografia moderna
GEOMETRIA             → detecção de colisão em jogos

INGLÊS TÉCNICO        → RFCs, code review, standups, documentação,
                         gírias de cultura dev (yak shaving, tech debt)</div>
      <p>Cada conceito matemático que parecia "abstrato" tem aplicação direta no código que você escreve. Essa é a marca de quem realmente entende programação — não decora sintaxe, entende os princípios por trás dela.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Um problema real combinando matemática + boas práticas</span>
<span class="c-kw">function</span> <span class="c-fn">sortearPremioJusto</span>(premios) {
  <span class="c-cm">// Probabilidade ponderada (Lição 106)</span>
  <span class="c-kw">const</span> totalPeso = premios.<span class="c-fn">reduce</span>((s,p) => s + p.peso, <span class="c-num">0</span>)
  <span class="c-kw">let</span> r = Math.<span class="c-fn">random</span>() * totalPeso

  <span class="c-cm">// Lógica clara, sem condicionais aninhados confusos (Lição 102)</span>
  <span class="c-kw">for</span> (<span class="c-kw">const</span> premio <span class="c-kw">of</span> premios) {
    <span class="c-kw">if</span> (r < premio.peso) <span class="c-kw">return</span> premio
    r -= premio.peso
  }
}
<span class="c-cm">// Código limpo (Clean Code) + matemática aplicada = engenharia de verdade</span>
      </div>`,
    exercicios: [
      { tipo:'multipla', pergunta:'Qual a relação entre teoria dos conjuntos e a estrutura Set do JavaScript?', opcoes:['Não há relação','Set implementa diretamente as operações matemáticas de conjuntos: união, interseção, diferença','São coisas completamente diferentes','Set é mais antigo que a teoria matemática'], correta:1, explicacao:'A estrutura Set do JS é uma implementação prática e direta dos conceitos formais de teoria dos conjuntos que você estudou — união, interseção e diferença funcionam exatamente como na matemática.' },
      { tipo:'multipla', pergunta:'Por que entender combinatória (permutações, O(n!)) é útil mesmo sem implementar algoritmos complexos diariamente?', opcoes:['Não é útil no dia a dia','Ajuda a RECONHECER quando um problema tem complexidade explosiva e evitar abordagens ingênuas antes de escrever código','É só curiosidade acadêmica','Só importa em entrevistas'], correta:1, explicacao:'Saber que gerar todas as permutações de algo é O(n!) te faz pensar duas vezes antes de implementar essa abordagem para entradas grandes — evita problemas de performance antes mesmo de codar.' },
      { tipo:'completar', pergunta:'Complete: a gíria "tech debt" representa metaforicamente o conceito financeiro de:', codigo:'"tech debt" usa a metáfora de uma ___', resposta:'dívida', explicacao:'Assim como dívida financeira acumula juros, atalhos no código ("tech debt") acumulam "juros" na forma de manutenção mais difícil e bugs futuros — a metáfora é intencional e poderosa.' }
    ]
  },




  // ── LIÇÃO 118 — PROVA FINAL DA CORUJA ────────────────────
  {
    id: 'c118',
    titulo: 'Prova Final — Lógica & Fundamentos',
    xp: 1200,
    tipo: 'prova',
    teoria: `
      <h3>🦉 Parabéns! Chegou a hora da Prova Final!</h3>
      <p>Você completou 117 lições — uma jornada completíssima de fundamentos: lógica, estruturas de dados, algoritmos clássicos e de elite, JS avançado, matemática discreta, inglês técnico profissional, e cinco projetos reais. Esta é a avaliação final da Fase 1.
      Mínimo de <strong>70%</strong> para passar e desbloquear o 🐘 Elefante!</p>
    `,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Qual a diferença entre let e const?',
        opcoes: ['Nenhuma', 'let pode ser reatribuído, const não', 'const é mais rápido', 'let é para strings'],
        correta: 1,
        explicacao: 'let permite reatribuição de valor. const não permite — após a declaração, a referência é imutável.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] O que [1,2,3].map(n => n * 2) retorna?',
        opcoes: ['[1,2,3]', '12', '[2,4,6]', 'undefined'],
        correta: 2,
        explicacao: 'map transforma cada elemento. 1×2=2, 2×2=4, 3×2=6. Resultado: [2,4,6].'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Qual a complexidade da busca binária?',
        opcoes: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
        correta: 2,
        explicacao: 'Busca binária divide o problema pela metade a cada passo: O(log n).'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] O que é uma closure?',
        opcoes: [
          'Um erro de escopo',
          'Uma função que lembra variáveis do escopo onde foi criada',
          'Um loop que fecha',
          'Um tipo de array'
        ],
        correta: 1,
        explicacao: 'Closure é quando uma função interna captura e mantém referência a variáveis do escopo externo.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Sem caso base, o que acontece em recursão?',
        opcoes: ['Retorna 0', 'Stack Overflow', 'Retorna undefined', 'Nada'],
        correta: 1,
        explicacao: 'Sem caso base a função se chama infinitamente até estourar a pilha: Stack Overflow.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Qual a complexidade de acesso a um hash map?',
        opcoes: ['O(n)', 'O(log n)', 'O(1) em média', 'O(n²)'],
        correta: 2,
        explicacao: 'Hash maps oferecem acesso O(1) em média através da função hash que calcula a posição diretamente.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] O que extends faz numa classe JavaScript?',
        opcoes: ['Cria uma cópia', 'Implementa herança entre classes', 'Deleta a classe', 'Cria múltiplas instâncias'],
        correta: 1,
        explicacao: 'extends estabelece herança — a classe filha herda métodos e propriedades da classe pai.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Qual algoritmo de busca em grafo usa fila (FIFO) e explora nível por nível?',
        opcoes: ['DFS', 'BFS', 'Quick Sort', 'Merge Sort'],
        correta: 1,
        explicacao: 'BFS (Busca em Largura) usa uma fila e processa nó por nó na ordem de descoberta, explorando todos os vizinhos antes de ir mais fundo.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] O que memoização resolve em algoritmos recursivos como Fibonacci?',
        opcoes: ['Não resolve nada', 'Evita recalcular os mesmos subproblemas repetidamente', 'Deixa o código mais bonito', 'Remove a necessidade de recursão'],
        correta: 1,
        explicacao: 'Memoização guarda resultados já calculados em cache, transformando complexidade exponencial O(2ⁿ) em linear O(n).'
      }
    ]
  }
]
