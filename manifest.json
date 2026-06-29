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

  // ── LIÇÃO 15 ──────────────────────────────────────────────
  {
    id: 'c15',
    titulo: 'Mini-Prova — Lógica & Fundamentos',
    xp: 300,
    tipo: 'prova',
    teoria: `
      <h3>🦉 Parabéns! Chegou a hora da Mini-Prova!</h3>
      <p>Você completou as 14 lições de fundamentos. Esta mini-prova avalia tudo que você aprendeu.
      Mínimo de <strong>70%</strong> para passar. Boa sorte!</p>
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
      }
    ]
  }
]
