// ============================================================
// ELEFANTE — Memo | Fase 2: Backend & Dados
// 15 lições com teoria, exemplos e exercícios
// ============================================================

const ELEFANTE_LICOES = [

  {
    id: 'e1',
    titulo: 'O que é um banco de dados?',
    xp: 100,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>Um <strong>banco de dados</strong> é onde seu app guarda informações de forma organizada e persistente.
      Diferente de uma variável (que some quando o programa fecha), o banco guarda tudo para sempre.</p>
      <p>Existem dois tipos principais:</p>
      <ul>
        <li><strong>SQL (Relacional)</strong> — dados em tabelas com linhas e colunas. Ex: PostgreSQL, MySQL, SQLite</li>
        <li><strong>NoSQL (Não-relacional)</strong> — dados em documentos, grafos ou chave-valor. Ex: MongoDB, Redis</li>
      </ul>
      <p>Para a maioria dos projetos, comece com SQL. É mais estruturado e mais fácil de garantir a integridade dos dados.</p>
      <div class="code-example">
<span class="c-cm">-- Uma tabela SQL é como uma planilha</span>
<span class="c-cm">-- Tabela: usuarios</span>
id  | nome      | email              | criado_em
----+-----------+--------------------+------------
 1  | Maycon    | maycon@jbretas.com | 2024-01-15
 2  | Ana       | ana@email.com      | 2024-02-20
 3  | Carlos    | carlos@email.com   | 2024-03-10
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">-- SQL vs JavaScript: guardar dados</span>

<span class="c-cm">// JavaScript — some quando fecha o app</span>
<span class="c-kw">const</span> usuarios = [
  { id: <span class="c-num">1</span>, nome: <span class="c-str">"Maycon"</span> },
  { id: <span class="c-num">2</span>, nome: <span class="c-str">"Ana"</span> }
]

<span class="c-cm">-- SQL — persiste para sempre no disco</span>
<span class="c-kw">SELECT</span> * <span class="c-kw">FROM</span> usuarios
<span class="c-cm">-- Retorna os mesmos dados mesmo após reiniciar</span>
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual a principal vantagem de um banco de dados sobre variáveis em memória?',
        opcoes: ['É mais rápido', 'Os dados persistem mesmo após fechar o programa', 'Usa menos memória RAM', 'É mais fácil de programar'],
        correta: 1,
        explicacao: 'Bancos de dados persistem dados no disco. Variáveis em memória (RAM) são perdidas quando o programa encerra.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual banco de dados é relacional (SQL)?',
        opcoes: ['MongoDB', 'Redis', 'PostgreSQL', 'Firebase'],
        correta: 2,
        explicacao: 'PostgreSQL é um banco relacional SQL robusto e muito usado em produção. MongoDB e Redis são NoSQL. Firebase usa NoSQL por baixo.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete: bancos SQL guardam dados em ___',
        codigo: '-- Dados organizados em ___ com linhas e colunas',
        resposta: 'tabelas',
        explicacao: 'SQL organiza dados em tabelas (também chamadas de relações), com colunas definindo os campos e linhas representando cada registro.'
      }
    ]
  },

  {
    id: 'e2',
    titulo: 'SELECT — buscando dados',
    xp: 100,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>O comando <code>SELECT</code> é o mais usado em SQL. Ele busca dados de uma tabela.</p>
      <div class="code-example">
<span class="c-cm">-- Estrutura básica</span>
<span class="c-kw">SELECT</span> coluna1, coluna2
<span class="c-kw">FROM</span> tabela
<span class="c-kw">WHERE</span> condicao
<span class="c-kw">ORDER BY</span> coluna
<span class="c-kw">LIMIT</span> quantidade

<span class="c-cm">-- Exemplos:</span>
<span class="c-kw">SELECT</span> * <span class="c-kw">FROM</span> postos          <span class="c-cm">-- todos os campos</span>
<span class="c-kw">SELECT</span> nome, cidade <span class="c-kw">FROM</span> postos  <span class="c-cm">-- campos específicos</span>

<span class="c-kw">SELECT</span> * <span class="c-kw">FROM</span> postos
<span class="c-kw">WHERE</span> cidade = <span class="c-str">'Belo Horizonte'</span>
<span class="c-kw">ORDER BY</span> nome <span class="c-kw">ASC</span>
<span class="c-kw">LIMIT</span> <span class="c-num">10</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">-- Tabela: vendas_combustivel</span>
<span class="c-cm">-- posto_id | combustivel | litros | data</span>

<span class="c-cm">-- Vendas de gasolina acima de 1000L</span>
<span class="c-kw">SELECT</span> posto_id, litros, data
<span class="c-kw">FROM</span> vendas_combustivel
<span class="c-kw">WHERE</span> combustivel = <span class="c-str">'gasolina'</span>
  <span class="c-kw">AND</span> litros > <span class="c-num">1000</span>
<span class="c-kw">ORDER BY</span> litros <span class="c-kw">DESC</span>
<span class="c-kw">LIMIT</span> <span class="c-num">5</span>
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que SELECT * FROM usuarios retorna?',
        opcoes: ['Só a primeira linha', 'Todos os campos de todas as linhas', 'Só os campos obrigatórios', 'Um erro'],
        correta: 1,
        explicacao: 'O asterisco (*) significa "todos os campos". SELECT * FROM tabela retorna todas as colunas de todos os registros da tabela.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual cláusula filtra resultados por condição?',
        opcoes: ['ORDER BY', 'LIMIT', 'WHERE', 'FROM'],
        correta: 2,
        explicacao: 'WHERE filtra registros pela condição especificada. Só retorna linhas onde a condição é verdadeira.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para buscar os 10 primeiros usuários:',
        codigo: 'SELECT * FROM usuarios LIMIT ___',
        resposta: '10',
        explicacao: 'LIMIT n restringe o número de linhas retornadas. Essencial para performance — nunca busque uma tabela inteira sem LIMIT em produção!'
      }
    ]
  },

  {
    id: 'e3',
    titulo: 'WHERE, AND, OR — filtrando dados',
    xp: 100,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>O <code>WHERE</code> filtra registros. Combine condições com <code>AND</code> e <code>OR</code>.</p>
      <div class="code-example">
<span class="c-cm">-- Operadores de comparação</span>
=      igual
!=     diferente
>      maior que
<      menor que
>=     maior ou igual
<=     menor ou igual
<span class="c-kw">LIKE</span>   padrão de texto  (% = qualquer coisa)
<span class="c-kw">IN</span>     lista de valores
<span class="c-kw">BETWEEN</span> intervalo

<span class="c-cm">-- Exemplos:</span>
<span class="c-kw">WHERE</span> nome <span class="c-kw">LIKE</span> <span class="c-str">'P. %'</span>       <span class="c-cm">-- começa com "P. "</span>
<span class="c-kw">WHERE</span> cidade <span class="c-kw">IN</span> (<span class="c-str">'BH'</span>, <span class="c-str">'Contagem'</span>)
<span class="c-kw">WHERE</span> litros <span class="c-kw">BETWEEN</span> <span class="c-num">500</span> <span class="c-kw">AND</span> <span class="c-num">2000</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">-- Postos ativos em BH com mais de 4 tanques</span>
<span class="c-kw">SELECT</span> nome, tanques, cidade
<span class="c-kw">FROM</span> postos
<span class="c-kw">WHERE</span> cidade = <span class="c-str">'Belo Horizonte'</span>
  <span class="c-kw">AND</span> tanques > <span class="c-num">4</span>
  <span class="c-kw">AND</span> ativo = <span class="c-kw">true</span>

<span class="c-cm">-- Postos em BH OU Contagem</span>
<span class="c-kw">SELECT</span> nome <span class="c-kw">FROM</span> postos
<span class="c-kw">WHERE</span> cidade = <span class="c-str">'Belo Horizonte'</span>
   <span class="c-kw">OR</span> cidade = <span class="c-str">'Contagem'</span>
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que WHERE nome LIKE \'%Silva\' retorna?',
        opcoes: ['Nomes que começam com Silva', 'Nomes que terminam com Silva', 'Nomes que contêm Silva em qualquer posição', 'Nomes iguais a Silva'],
        correta: 1,
        explicacao: '% no início significa "qualquer coisa antes". LIKE \'%Silva\' = termina com "Silva". LIKE \'%Silva%\' = contém Silva em qualquer posição.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual operador verifica se um valor está numa lista?',
        opcoes: ['BETWEEN', 'LIKE', 'IN', 'EXISTS'],
        correta: 2,
        explicacao: 'IN (val1, val2, val3) verifica se o campo é igual a qualquer valor da lista. Muito mais limpo que múltiplos OR.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para buscar vendas entre 100 e 500 litros:',
        codigo: 'SELECT * FROM vendas WHERE litros ___ 100 AND 500',
        resposta: 'BETWEEN',
        explicacao: 'BETWEEN a AND b é equivalente a >= a AND <= b. Mais legível para intervalos.'
      }
    ]
  },

  {
    id: 'e4',
    titulo: 'JOIN — unindo tabelas',
    xp: 120,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p><strong>JOIN</strong> une dados de duas ou mais tabelas pela relação entre elas.
      É o conceito mais poderoso do SQL — dados são separados em tabelas diferentes para evitar repetição,
      e o JOIN os une na hora da consulta.</p>
      <div class="code-example">
<span class="c-cm">-- INNER JOIN — só registros que têm correspondência em AMBAS</span>
<span class="c-kw">SELECT</span> p.nome, v.litros, v.data
<span class="c-kw">FROM</span> postos p
<span class="c-kw">INNER JOIN</span> vendas v <span class="c-kw">ON</span> v.posto_id = p.id

<span class="c-cm">-- LEFT JOIN — todos da esquerda + correspondência da direita</span>
<span class="c-kw">SELECT</span> p.nome, v.litros
<span class="c-kw">FROM</span> postos p
<span class="c-kw">LEFT JOIN</span> vendas v <span class="c-kw">ON</span> v.posto_id = p.id
<span class="c-cm">-- postos SEM vendas também aparecem (com NULL)</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">-- Total vendido por posto no mês</span>
<span class="c-kw">SELECT</span>
  p.nome <span class="c-kw">AS</span> posto,
  <span class="c-fn">SUM</span>(v.litros) <span class="c-kw">AS</span> total_litros,
  <span class="c-fn">COUNT</span>(v.id) <span class="c-kw">AS</span> num_vendas
<span class="c-kw">FROM</span> postos p
<span class="c-kw">INNER JOIN</span> vendas v <span class="c-kw">ON</span> v.posto_id = p.id
<span class="c-kw">WHERE</span> v.data >= <span class="c-str">'2024-01-01'</span>
<span class="c-kw">GROUP BY</span> p.nome
<span class="c-kw">ORDER BY</span> total_litros <span class="c-kw">DESC</span>
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual a diferença entre INNER JOIN e LEFT JOIN?',
        opcoes: [
          'Não há diferença',
          'INNER retorna só correspondências. LEFT retorna todos da esquerda mesmo sem correspondência',
          'LEFT é mais lento',
          'INNER JOIN funciona com mais tabelas'
        ],
        correta: 1,
        explicacao: 'INNER JOIN: só linhas com match em ambas. LEFT JOIN: todas da tabela esquerda + match da direita (NULL onde não há match). Use LEFT JOIN para "mostre tudo mesmo sem relação".'
      },
      {
        tipo: 'multipla',
        pergunta: 'O que a cláusula ON define no JOIN?',
        opcoes: ['Filtro de resultado', 'A condição de ligação entre as tabelas', 'Ordenação', 'Limite de resultados'],
        correta: 1,
        explicacao: 'ON define como as tabelas se relacionam — qual campo de uma tabela corresponde ao campo da outra. Geralmente é a chave estrangeira (FK) e a chave primária (PK).'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete o JOIN para unir vendas com postos:',
        codigo: 'SELECT p.nome, v.litros FROM postos p ___ JOIN vendas v ON v.posto_id = p.id',
        resposta: 'INNER',
        explicacao: 'INNER JOIN retorna apenas registros que têm correspondência em ambas as tabelas. É o JOIN mais comum.'
      }
    ]
  },

  {
    id: 'e5',
    titulo: 'GROUP BY e funções de agregação',
    xp: 120,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p><strong>GROUP BY</strong> agrupa linhas para calcular valores por grupo.
      Usado sempre com funções de agregação:</p>
      <div class="code-example">
<span class="c-fn">COUNT</span>(*)        <span class="c-cm">-- conta linhas</span>
<span class="c-fn">SUM</span>(coluna)    <span class="c-cm">-- soma valores</span>
<span class="c-fn">AVG</span>(coluna)    <span class="c-cm">-- média</span>
<span class="c-fn">MAX</span>(coluna)    <span class="c-cm">-- maior valor</span>
<span class="c-fn">MIN</span>(coluna)    <span class="c-cm">-- menor valor</span>

<span class="c-cm">-- HAVING filtra APÓS o agrupamento (WHERE filtra ANTES)</span>
<span class="c-kw">SELECT</span> combustivel, <span class="c-fn">SUM</span>(litros) <span class="c-kw">AS</span> total
<span class="c-kw">FROM</span> vendas
<span class="c-kw">GROUP BY</span> combustivel
<span class="c-kw">HAVING</span> <span class="c-fn">SUM</span>(litros) > <span class="c-num">10000</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">-- Relatório de vendas por combustível</span>
<span class="c-kw">SELECT</span>
  combustivel,
  <span class="c-fn">COUNT</span>(*) <span class="c-kw">AS</span> num_transacoes,
  <span class="c-fn">SUM</span>(litros) <span class="c-kw">AS</span> total_litros,
  <span class="c-fn">AVG</span>(litros) <span class="c-kw">AS</span> media_por_venda,
  <span class="c-fn">MAX</span>(litros) <span class="c-kw">AS</span> maior_venda
<span class="c-kw">FROM</span> vendas
<span class="c-kw">WHERE</span> data >= <span class="c-str">'2024-01-01'</span>
<span class="c-kw">GROUP BY</span> combustivel
<span class="c-kw">ORDER BY</span> total_litros <span class="c-kw">DESC</span>
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual função conta o número de linhas em um grupo?',
        opcoes: ['SUM()', 'AVG()', 'COUNT()', 'MAX()'],
        correta: 2,
        explicacao: 'COUNT(*) conta todas as linhas. COUNT(coluna) conta linhas onde a coluna não é NULL. É muito usado para relatórios e estatísticas.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual a diferença entre WHERE e HAVING?',
        opcoes: [
          'Não há diferença',
          'WHERE filtra antes do agrupamento, HAVING filtra depois',
          'HAVING é mais rápido',
          'WHERE só funciona com texto'
        ],
        correta: 1,
        explicacao: 'WHERE filtra linhas individuais ANTES do GROUP BY. HAVING filtra grupos DEPOIS do GROUP BY. HAVING pode usar funções de agregação, WHERE não pode.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para calcular a média de litros vendidos:',
        codigo: 'SELECT combustivel, ___(litros) AS media FROM vendas GROUP BY combustivel',
        resposta: 'AVG',
        explicacao: 'AVG(coluna) calcula a média aritmética dos valores. AVG(litros) = soma de todos os litros ÷ número de vendas.'
      }
    ]
  },

  {
    id: 'e6',
    titulo: 'INSERT, UPDATE, DELETE — manipulando dados',
    xp: 120,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>Além de buscar, você precisa inserir, atualizar e deletar dados.</p>
      <div class="code-example">
<span class="c-cm">-- INSERT — inserir novo registro</span>
<span class="c-kw">INSERT INTO</span> postos (nome, cidade, tanques)
<span class="c-kw">VALUES</span> (<span class="c-str">'P. Nova Lima'</span>, <span class="c-str">'Nova Lima'</span>, <span class="c-num">6</span>)

<span class="c-cm">-- UPDATE — atualizar registro existente</span>
<span class="c-kw">UPDATE</span> postos
<span class="c-kw">SET</span> tanques = <span class="c-num">8</span>, ativo = <span class="c-kw">true</span>
<span class="c-kw">WHERE</span> id = <span class="c-num">5</span>

<span class="c-cm">-- DELETE — remover registro</span>
<span class="c-kw">DELETE FROM</span> postos
<span class="c-kw">WHERE</span> id = <span class="c-num">10</span>

<span class="c-cm">-- ⚠️ SEMPRE use WHERE no UPDATE e DELETE!</span>
<span class="c-cm">-- Sem WHERE = afeta TODOS os registros!</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">-- Registrar medição de tanque</span>
<span class="c-kw">INSERT INTO</span> medicoes (posto_id, combustivel, cm, litros, data)
<span class="c-kw">VALUES</span> (<span class="c-num">3</span>, <span class="c-str">'gasolina'</span>, <span class="c-num">85</span>, <span class="c-num">12750</span>, <span class="c-fn">NOW</span>())

<span class="c-cm">-- Atualizar preço da gasolina no posto 3</span>
<span class="c-kw">UPDATE</span> precos
<span class="c-kw">SET</span> preco = <span class="c-num">5.89</span>, atualizado_em = <span class="c-fn">NOW</span>()
<span class="c-kw">WHERE</span> posto_id = <span class="c-num">3</span>
  <span class="c-kw">AND</span> combustivel = <span class="c-str">'gasolina'</span>
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que acontece se você executar UPDATE postos SET ativo = false SEM WHERE?',
        opcoes: ['Nada, o banco ignora', 'Atualiza apenas o primeiro registro', 'Atualiza TODOS os registros da tabela', 'Gera um erro automaticamente'],
        correta: 2,
        explicacao: 'Sem WHERE, o UPDATE afeta TODAS as linhas da tabela! Isso é um dos erros mais perigosos em produção. Sempre especifique WHERE no UPDATE e DELETE.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Qual comando insere um novo registro no banco?',
        opcoes: ['ADD INTO', 'INSERT INTO', 'CREATE INTO', 'PUT INTO'],
        correta: 1,
        explicacao: 'INSERT INTO tabela (colunas) VALUES (valores) é a sintaxe para inserir novos registros. As colunas e valores devem corresponder em ordem e quantidade.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para deletar apenas o usuário com id = 5:',
        codigo: 'DELETE FROM usuarios ___ id = 5',
        resposta: 'WHERE',
        explicacao: 'WHERE é obrigatório no DELETE para não apagar todos os registros. DELETE FROM usuarios WHERE id = 5 apaga apenas esse registro específico.'
      }
    ]
  },

  {
    id: 'e7',
    titulo: 'O que é uma API REST?',
    xp: 130,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>Uma <strong>API REST</strong> é uma forma padronizada de comunicação entre sistemas via HTTP.
      Seu frontend (React) fala com seu backend (Node.js) através de uma API REST.</p>
      <p>REST usa os métodos HTTP:</p>
      <div class="code-example">
<span class="c-kw">GET</span>    /postos         <span class="c-cm">→ buscar todos os postos</span>
<span class="c-kw">GET</span>    /postos/5       <span class="c-cm">→ buscar o posto com id 5</span>
<span class="c-kw">POST</span>   /postos         <span class="c-cm">→ criar um novo posto</span>
<span class="c-kw">PUT</span>    /postos/5       <span class="c-cm">→ atualizar o posto 5 (completo)</span>
<span class="c-kw">PATCH</span>  /postos/5       <span class="c-cm">→ atualizar parcialmente</span>
<span class="c-kw">DELETE</span> /postos/5       <span class="c-cm">→ deletar o posto 5</span>
      </div>
      <p>Os dados são trocados em <strong>JSON</strong> — o mesmo formato de objetos JavaScript.</p>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Chamando uma API REST do JavaScript (fetch)</span>
<span class="c-cm">// GET — buscar dados</span>
<span class="c-kw">const</span> resp = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'/api/postos'</span>)
<span class="c-kw">const</span> postos = <span class="c-kw">await</span> resp.<span class="c-fn">json</span>()

<span class="c-cm">// POST — enviar dados</span>
<span class="c-kw">const</span> resp = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'/api/medicoes'</span>, {
  method: <span class="c-str">'POST'</span>,
  headers: { <span class="c-str">'Content-Type'</span>: <span class="c-str">'application/json'</span> },
  body: <span class="c-fn">JSON.stringify</span>({ posto_id: <span class="c-num">3</span>, litros: <span class="c-num">12750</span> })
})
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual método HTTP você usa para CRIAR um novo recurso?',
        opcoes: ['GET', 'PUT', 'POST', 'DELETE'],
        correta: 2,
        explicacao: 'POST é usado para criar novos recursos. GET busca. PUT/PATCH atualiza. DELETE remove. Isso é a convenção REST — seguir ela torna sua API previsível para outros devs.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Em que formato os dados são trocados em uma API REST moderna?',
        opcoes: ['XML', 'CSV', 'JSON', 'HTML'],
        correta: 2,
        explicacao: 'JSON (JavaScript Object Notation) é o padrão moderno de APIs REST. É leve, legível e nativo do JavaScript — JSON.parse() e JSON.stringify() fazem a conversão.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete o método HTTP para buscar um recurso sem alterar dados:',
        codigo: 'fetch(\'/api/postos\', { method: \'___\' })',
        resposta: 'GET',
        explicacao: 'GET é seguro e idempotente — não altera dados no servidor. É o método padrão do fetch (sem especificar method, já é GET).'
      }
    ]
  },

  {
    id: 'e8',
    titulo: 'Node.js e Express — criando sua API',
    xp: 130,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p><strong>Node.js</strong> executa JavaScript no servidor (fora do browser).
      <strong>Express</strong> é o framework mais usado para criar APIs REST com Node.js.</p>
      <div class="code-example">
<span class="c-cm">// Instalar: npm install express</span>
<span class="c-kw">const</span> express = <span class="c-fn">require</span>(<span class="c-str">'express'</span>)
<span class="c-kw">const</span> app = <span class="c-fn">express</span>()

app.<span class="c-fn">use</span>(express.<span class="c-fn">json</span>())  <span class="c-cm">// parse JSON automaticamente</span>

<span class="c-cm">// Rota GET</span>
app.<span class="c-fn">get</span>(<span class="c-str">'/postos'</span>, (req, res) => {
  res.<span class="c-fn">json</span>({ postos: [] })
})

<span class="c-cm">// Rota POST</span>
app.<span class="c-fn">post</span>(<span class="c-str">'/medicoes'</span>, (req, res) => {
  <span class="c-kw">const</span> { posto_id, litros } = req.body
  res.<span class="c-fn">status</span>(<span class="c-num">201</span>).<span class="c-fn">json</span>({ sucesso: <span class="c-kw">true</span> })
})

app.<span class="c-fn">listen</span>(<span class="c-num">3000</span>)  <span class="c-cm">// servidor na porta 3000</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// API completa de postos</span>
<span class="c-kw">const</span> postos = [
  { id: <span class="c-num">1</span>, nome: <span class="c-str">'P. Central'</span>, tanques: <span class="c-num">4</span> },
  { id: <span class="c-num">2</span>, nome: <span class="c-str">'P. Glória'</span>,  tanques: <span class="c-num">6</span> }
]

app.<span class="c-fn">get</span>(<span class="c-str">'/postos'</span>, (req, res) => {
  res.<span class="c-fn">json</span>(postos)
})

app.<span class="c-fn">get</span>(<span class="c-str">'/postos/:id'</span>, (req, res) => {
  <span class="c-kw">const</span> posto = postos.<span class="c-fn">find</span>(p => p.id === +req.params.id)
  <span class="c-kw">if</span> (!posto) <span class="c-kw">return</span> res.<span class="c-fn">status</span>(<span class="c-num">404</span>).<span class="c-fn">json</span>({ erro: <span class="c-str">'Não encontrado'</span> })
  res.<span class="c-fn">json</span>(posto)
})
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Para que serve o app.use(express.json())?',
        opcoes: [
          'Formata a resposta em JSON',
          'Faz o parse automático do body JSON das requisições',
          'Valida os dados enviados',
          'Conecta ao banco de dados'
        ],
        correta: 1,
        explicacao: 'express.json() é um middleware que faz o parse do corpo (body) das requisições POST/PUT/PATCH que chegam em formato JSON, disponibilizando em req.body.'
      },
      {
        tipo: 'multipla',
        pergunta: 'O que req.params.id representa na rota /postos/:id?',
        opcoes: [
          'O corpo da requisição',
          'O valor dinâmico passado na URL (ex: /postos/5 → id = "5")',
          'O método HTTP',
          'O header da requisição'
        ],
        correta: 1,
        explicacao: ':id é um parâmetro de rota dinâmico. Em GET /postos/5, req.params.id = "5" (string). Use +req.params.id ou Number(req.params.id) para converter para número.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para retornar status 404 quando não encontrado:',
        codigo: 'if (!posto) return res.___(404).json({ erro: "Não encontrado" })',
        resposta: 'status',
        explicacao: 'res.status(código) define o código HTTP da resposta. 200=OK, 201=Criado, 400=Erro do cliente, 404=Não encontrado, 500=Erro do servidor.'
      }
    ]
  },

  {
    id: 'e9',
    titulo: 'Async/Await — código assíncrono',
    xp: 130,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>Operações de banco de dados e APIs são <strong>assíncronas</strong> — levam tempo.
      <code>async/await</code> é a forma moderna de lidar com isso sem callback hell.</p>
      <div class="code-example">
<span class="c-cm">// ❌ Sem async/await — callback hell</span>
<span class="c-fn">buscarPosto</span>(<span class="c-num">1</span>, (erro, posto) => {
  <span class="c-fn">buscarVendas</span>(posto.id, (erro, vendas) => {
    <span class="c-fn">calcularTotal</span>(vendas, (erro, total) => {
      <span class="c-cm">// impossível de ler!</span>
    })
  })
})

<span class="c-cm">// ✅ Com async/await — limpo e legível</span>
<span class="c-kw">async function</span> <span class="c-fn">relatorio</span>(postoId) {
  <span class="c-kw">const</span> posto = <span class="c-kw">await</span> <span class="c-fn">buscarPosto</span>(postoId)
  <span class="c-kw">const</span> vendas = <span class="c-kw">await</span> <span class="c-fn">buscarVendas</span>(posto.id)
  <span class="c-kw">const</span> total = <span class="c-kw">await</span> <span class="c-fn">calcularTotal</span>(vendas)
  <span class="c-kw">return</span> { posto, vendas, total }
}
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Rota Express com async/await + try/catch</span>
app.<span class="c-fn">get</span>(<span class="c-str">'/postos/:id'</span>, <span class="c-kw">async</span> (req, res) => {
  <span class="c-kw">try</span> {
    <span class="c-kw">const</span> posto = <span class="c-kw">await</span> db.<span class="c-fn">query</span>(
      <span class="c-str">'SELECT * FROM postos WHERE id = $1'</span>,
      [req.params.id]
    )
    <span class="c-kw">if</span> (!posto.rows[<span class="c-num">0</span>]) <span class="c-kw">return</span> res.<span class="c-fn">status</span>(<span class="c-num">404</span>).<span class="c-fn">json</span>({ erro: <span class="c-str">'Não encontrado'</span> })
    res.<span class="c-fn">json</span>(posto.rows[<span class="c-num">0</span>])
  } <span class="c-kw">catch</span> (err) {
    res.<span class="c-fn">status</span>(<span class="c-num">500</span>).<span class="c-fn">json</span>({ erro: <span class="c-str">'Erro interno'</span> })
  }
})
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que o await faz antes de uma Promise?',
        opcoes: [
          'Cancela a operação',
          'Pausa a execução da função até a Promise resolver',
          'Executa a operação em paralelo',
          'Converte a Promise em callback'
        ],
        correta: 1,
        explicacao: 'await pausa a execução da função async até a Promise resolver ou rejeitar. O resto do código espera, mas o event loop do Node.js continua atendendo outras requisições.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Por que usar try/catch com async/await?',
        opcoes: [
          'É obrigatório pela sintaxe',
          'Para capturar erros de Promises rejeitadas sem travar o servidor',
          'Para melhorar a performance',
          'Não é necessário'
        ],
        correta: 1,
        explicacao: 'Sem try/catch, uma Promise rejeitada (ex: banco offline) pode travar a rota. O catch captura o erro e retorna uma resposta adequada (500) ao cliente.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para declarar uma função assíncrona:',
        codigo: '___ function buscarDados(id) {\n  const dados = await db.query(...)\n  return dados\n}',
        resposta: 'async',
        explicacao: 'A palavra-chave async antes de function declara uma função assíncrona. Só funções async podem usar await internamente.'
      }
    ]
  },

  {
    id: 'e10',
    titulo: 'Autenticação com JWT',
    xp: 150,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p><strong>JWT (JSON Web Token)</strong> é o padrão para autenticação em APIs REST.
      Em vez de sessões no servidor, o cliente recebe um token que prova quem ele é.</p>
      <div class="code-example">
<span class="c-cm">// Fluxo de autenticação JWT:</span>
<span class="c-cm">// 1. Usuário faz login com email/senha</span>
<span class="c-cm">// 2. Servidor valida e gera um token JWT</span>
<span class="c-cm">// 3. Cliente guarda o token (localStorage/cookie)</span>
<span class="c-cm">// 4. Cliente envia o token em cada requisição</span>
<span class="c-cm">// 5. Servidor valida o token e autoriza</span>

<span class="c-cm">// Token JWT tem 3 partes separadas por ponto:</span>
<span class="c-cm">// header.payload.signature</span>
eyJhbGc...  <span class="c-cm">← header (algoritmo)</span>
.eyJ1c2Vy... <span class="c-cm">← payload (dados do usuário)</span>
.SflKxw...  <span class="c-cm">← assinatura (prova autenticidade)</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// npm install jsonwebtoken bcrypt</span>
<span class="c-kw">const</span> jwt = <span class="c-fn">require</span>(<span class="c-str">'jsonwebtoken'</span>)
<span class="c-kw">const</span> SECRET = process.env.JWT_SECRET

<span class="c-cm">// Gerar token no login</span>
app.<span class="c-fn">post</span>(<span class="c-str">'/login'</span>, <span class="c-kw">async</span> (req, res) => {
  <span class="c-kw">const</span> { email, senha } = req.body
  <span class="c-kw">const</span> user = <span class="c-kw">await</span> <span class="c-fn">buscarUsuario</span>(email)
  <span class="c-kw">if</span> (!user || !<span class="c-kw">await</span> bcrypt.<span class="c-fn">compare</span>(senha, user.senha_hash))
    <span class="c-kw">return</span> res.<span class="c-fn">status</span>(<span class="c-num">401</span>).<span class="c-fn">json</span>({ erro: <span class="c-str">'Credenciais inválidas'</span> })
  <span class="c-kw">const</span> token = jwt.<span class="c-fn">sign</span>({ id: user.id }, SECRET, { expiresIn: <span class="c-str">'7d'</span> })
  res.<span class="c-fn">json</span>({ token })
})
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Por que nunca guardar senha em texto puro no banco?',
        opcoes: [
          'Ocupa mais espaço',
          'Se o banco vazar, todas as senhas ficam expostas — use hash com bcrypt',
          'O SQL não suporta texto longo',
          'Não há motivo, é só convenção'
        ],
        correta: 1,
        explicacao: 'Hash com bcrypt é irreversível — mesmo com o banco na mão, o atacante não consegue a senha original. Sem hash, um vazamento expõe TODAS as senhas de TODOS os usuários.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Onde o cliente deve guardar o JWT recebido após o login?',
        opcoes: [
          'No banco de dados do servidor',
          'localStorage ou cookie HttpOnly (seguro)',
          'No código-fonte do frontend',
          'Não precisa guardar'
        ],
        correta: 1,
        explicacao: 'localStorage é simples mas vulnerável a XSS. Cookie HttpOnly é mais seguro pois JavaScript não pode acessá-lo. Para apps críticos, use cookie HttpOnly + HTTPS.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete: JWT é composto por header, payload e ___',
        codigo: '// JWT = header.payload.___',
        resposta: 'signature',
        explicacao: 'A signature (assinatura) é gerada com a chave secreta do servidor. Ela garante que o token não foi alterado pelo cliente. Sem a chave secreta, não é possível forjar um JWT válido.'
      }
    ]
  },

  {
    id: 'e11',
    titulo: 'Variáveis de ambiente e segurança',
    xp: 130,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>Nunca coloque senhas, chaves de API ou segredos no código-fonte.
      Use <strong>variáveis de ambiente</strong> — acessadas via <code>process.env</code> no Node.js.</p>
      <div class="code-example">
<span class="c-cm">// ❌ ERRADO — segredo no código</span>
<span class="c-kw">const</span> db = <span class="c-fn">connect</span>(<span class="c-str">'postgresql://user:senha123@host/db'</span>)
<span class="c-kw">const</span> secret = <span class="c-str">'minha-chave-super-secreta'</span>

<span class="c-cm">// ✅ CORRETO — variável de ambiente</span>
<span class="c-kw">const</span> db = <span class="c-fn">connect</span>(process.env.DATABASE_URL)
<span class="c-kw">const</span> secret = process.env.JWT_SECRET

<span class="c-cm">// Arquivo .env (NUNCA commitar no git!)</span>
DATABASE_URL=postgresql://user:senha@host/db
JWT_SECRET=chave-aleatoria-longa-aqui
PORT=3000
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// npm install dotenv</span>
<span class="c-kw">require</span>(<span class="c-str">'dotenv'</span>).<span class="c-fn">config</span>()  <span class="c-cm">// carrega o .env</span>

<span class="c-kw">const</span> config = {
  port: process.env.PORT || <span class="c-num">3000</span>,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
}

<span class="c-cm">// .gitignore — nunca commitar!</span>
.env
node_modules/
*.log
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Por que o arquivo .env deve estar no .gitignore?',
        opcoes: [
          'Para economizar espaço no repositório',
          'Para não expor segredos (senhas, chaves) publicamente no GitHub',
          'Porque o Git não suporta arquivos .env',
          'Para melhorar a performance do git'
        ],
        correta: 1,
        explicacao: 'Se o .env for commitado, qualquer pessoa com acesso ao repositório (ou qualquer um, se for público) vê suas senhas e chaves de API. Use .gitignore para excluir o .env do versionamento.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Como acessar uma variável de ambiente DATABASE_URL no Node.js?',
        opcoes: ['env.DATABASE_URL', 'process.env.DATABASE_URL', 'system.getenv("DATABASE_URL")', 'os.environ["DATABASE_URL"]'],
        correta: 1,
        explicacao: 'No Node.js, variáveis de ambiente são acessadas via process.env.NOME_DA_VARIAVEL. Em Python seria os.environ["VAR"] ou os.getenv("VAR").'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para carregar variáveis do arquivo .env no Node.js:',
        codigo: 'require(\'dotenv\').___()  // carrega o .env',
        resposta: 'config',
        explicacao: 'require("dotenv").config() lê o arquivo .env e popula process.env com as variáveis. Deve ser chamado no início do app, antes de qualquer uso de process.env.'
      }
    ]
  },

  {
    id: 'e12',
    titulo: 'Modelagem de banco de dados',
    xp: 140,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>Modelar bem o banco evita dor de cabeça no futuro. Conceitos essenciais:</p>
      <div class="code-example">
<span class="c-cm">-- Chave primária (PK) — identifica unicamente cada linha</span>
id SERIAL PRIMARY KEY

<span class="c-cm">-- Chave estrangeira (FK) — referência a outra tabela</span>
posto_id INTEGER REFERENCES postos(id)

<span class="c-cm">-- Constraints — regras de integridade</span>
nome VARCHAR(100) NOT NULL        <span class="c-cm">-- obrigatório</span>
email VARCHAR(200) UNIQUE         <span class="c-cm">-- único</span>
preco DECIMAL(10,2) CHECK(preco > 0)  <span class="c-cm">-- validação</span>

<span class="c-cm">-- Índice — acelera buscas (equivale a um índice de livro)</span>
CREATE INDEX idx_vendas_posto ON vendas(posto_id)
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">-- Schema real de um sistema de postos</span>
CREATE TABLE postos (
  id      SERIAL PRIMARY KEY,
  nome    VARCHAR(100) NOT NULL,
  cidade  VARCHAR(100) NOT NULL,
  tanques INTEGER DEFAULT <span class="c-num">4</span>,
  ativo   BOOLEAN DEFAULT <span class="c-kw">true</span>,
  criado_em TIMESTAMP DEFAULT <span class="c-fn">NOW</span>()
)

CREATE TABLE vendas (
  id         SERIAL PRIMARY KEY,
  posto_id   INTEGER REFERENCES postos(id),
  combustivel VARCHAR(20) NOT NULL,
  litros     DECIMAL(10,2) NOT NULL,
  preco_litro DECIMAL(10,4),
  data       DATE NOT NULL DEFAULT <span class="c-fn">CURRENT_DATE</span>
)
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que é uma chave estrangeira (Foreign Key)?',
        opcoes: [
          'Uma senha de acesso ao banco',
          'Um campo que referencia a chave primária de outra tabela, criando uma relação',
          'Um índice especial para buscas rápidas',
          'Um backup da chave primária'
        ],
        correta: 1,
        explicacao: 'FK é um campo que aponta para o ID de outra tabela. Ex: vendas.posto_id referencia postos.id. Isso garante integridade — você não pode criar uma venda para um posto que não existe.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Para que serve um índice (INDEX) no banco de dados?',
        opcoes: [
          'Para ordenar os dados na tabela',
          'Para acelerar buscas em colunas muito usadas em WHERE e JOIN',
          'Para fazer backup automático',
          'Para encriptar os dados'
        ],
        correta: 1,
        explicacao: 'Índices aceleram buscas como um índice de livro — sem ele, o banco lê linha por linha (full scan). Com índice na coluna do WHERE, o banco vai direto ao registro. Mas índices consomem espaço e tornam INSERT/UPDATE mais lentos.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para garantir que email seja único na tabela:',
        codigo: 'email VARCHAR(200) ___',
        resposta: 'UNIQUE',
        explicacao: 'UNIQUE garante que nenhum dois registros tenham o mesmo valor nessa coluna. Tentativas de inserir email duplicado geram erro. Essencial para campos como email, CPF, username.'
      }
    ]
  },

  {
    id: 'e13',
    titulo: 'Middleware no Express',
    xp: 140,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p><strong>Middleware</strong> é uma função que roda entre a requisição e a resposta.
      É como uma fila de processamento — cada middleware pode modificar req/res ou passar para o próximo.</p>
      <div class="code-example">
<span class="c-cm">// Estrutura de um middleware</span>
<span class="c-kw">function</span> <span class="c-fn">meuMiddleware</span>(req, res, next) {
  <span class="c-cm">// faz algo com req ou res</span>
  <span class="c-fn">next</span>()  <span class="c-cm">// passa para o próximo middleware/rota</span>
}

<span class="c-cm">// Middleware de autenticação</span>
<span class="c-kw">function</span> <span class="c-fn">autenticar</span>(req, res, next) {
  <span class="c-kw">const</span> token = req.headers.authorization?.split(<span class="c-str">' '</span>)[<span class="c-num">1</span>]
  <span class="c-kw">if</span> (!token) <span class="c-kw">return</span> res.<span class="c-fn">status</span>(<span class="c-num">401</span>).<span class="c-fn">json</span>({ erro: <span class="c-str">'Token necessário'</span> })
  <span class="c-kw">try</span> {
    req.user = jwt.<span class="c-fn">verify</span>(token, process.env.JWT_SECRET)
    <span class="c-fn">next</span>()
  } <span class="c-kw">catch</span> { res.<span class="c-fn">status</span>(<span class="c-num">401</span>).<span class="c-fn">json</span>({ erro: <span class="c-str">'Token inválido'</span> }) }
}

<span class="c-cm">// Aplicar em rotas protegidas</span>
app.<span class="c-fn">get</span>(<span class="c-str">'/perfil'</span>, autenticar, (req, res) => {
  res.<span class="c-fn">json</span>(req.user)
})
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// Middlewares globais comuns</span>
<span class="c-kw">const</span> cors = <span class="c-fn">require</span>(<span class="c-str">'cors'</span>)
<span class="c-kw">const</span> helmet = <span class="c-fn">require</span>(<span class="c-str">'helmet'</span>)

app.<span class="c-fn">use</span>(<span class="c-fn">cors</span>())           <span class="c-cm">// permite requests de outros domínios</span>
app.<span class="c-fn">use</span>(<span class="c-fn">helmet</span>())         <span class="c-cm">// headers de segurança automáticos</span>
app.<span class="c-fn">use</span>(express.<span class="c-fn">json</span>())   <span class="c-cm">// parse JSON do body</span>

<span class="c-cm">// Middleware de log</span>
app.<span class="c-fn">use</span>((req, res, next) => {
  <span class="c-fn">console</span>.<span class="c-fn">log</span>(<span class="c-str">`\${req.method} \${req.path}`</span>)
  <span class="c-fn">next</span>()
})
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'O que acontece se um middleware não chamar next()?',
        opcoes: [
          'O Express chama next() automaticamente',
          'A requisição fica pendurada — sem resposta ao cliente',
          'O servidor reinicia',
          'O próximo middleware é ignorado mas a rota executa'
        ],
        correta: 1,
        explicacao: 'Se next() não é chamado e nenhuma resposta é enviada, a requisição fica "travada" e o cliente não recebe resposta (timeout). Sempre chame next() ou envie uma resposta (res.json, res.send).'
      },
      {
        tipo: 'multipla',
        pergunta: 'Para que serve o middleware cors()?',
        opcoes: [
          'Para criptografar as requisições',
          'Para permitir que frontend em outro domínio acesse a API',
          'Para validar o token JWT',
          'Para parsear o body da requisição'
        ],
        correta: 1,
        explicacao: 'CORS (Cross-Origin Resource Sharing) permite que um frontend em domínio diferente (ex: github.io) acesse sua API (ex: railway.app). Sem CORS habilitado, o browser bloqueia a requisição.'
      },
      {
        tipo: 'completar',
        pergunta: 'Complete para passar para o próximo middleware:',
        codigo: 'function logger(req, res, next) {\n  console.log(req.method)\n  ___()\n}',
        resposta: 'next',
        explicacao: 'next() é a função que passa o controle para o próximo middleware ou rota na cadeia. É o terceiro parâmetro de todo middleware Express.'
      }
    ]
  },

  {
    id: 'e14',
    titulo: 'NoSQL — MongoDB e Redis',
    xp: 140,
    teoria: `
      <h3>🐘 Memo diz:</h3>
      <p>SQL não é a única opção. NoSQL tem casos de uso específicos onde brilha:</p>
      <p><strong>MongoDB</strong> — banco de documentos JSON. Ótimo para dados sem esquema fixo:</p>
      <div class="code-example">
<span class="c-cm">// MongoDB — documentos flexíveis</span>
{
  _id: ObjectId(<span class="c-str">"..."</span>),
  nome: <span class="c-str">"P. Central"</span>,
  tanques: [
    { tipo: <span class="c-str">"gasolina"</span>, capacidade: <span class="c-num">15000</span> },
    { tipo: <span class="c-str">"etanol"</span>,   capacidade: <span class="c-num">10000</span> }
  ],
  <span class="c-cm">// campos extras sem alterar schema!</span>
  coordenadas: { lat: -<span class="c-num">19.9</span>, lng: -<span class="c-num">43.9</span> }
}
      </div>
      <p><strong>Redis</strong> — chave-valor em memória. Ótimo para cache e sessões:</p>
      <div class="code-example">
<span class="c-cm">// Redis — ultra rápido, em memória</span>
SET usuario:123:nome  <span class="c-str">"Maycon"</span>   <span class="c-cm">// guardar</span>
GET usuario:123:nome              <span class="c-cm">// buscar</span>
SETEX token:abc 3600 <span class="c-str">"dados"</span>   <span class="c-cm">// expira em 1h</span>
      </div>`,
    exemplo: `
      <div class="code-example">
<span class="c-cm">// MongoDB com Mongoose (Node.js)</span>
<span class="c-kw">const</span> PostoSchema = <span class="c-kw">new</span> <span class="c-fn">Schema</span>({
  nome: { type: String, required: <span class="c-kw">true</span> },
  tanques: [{ tipo: String, capacidade: Number }]
})

<span class="c-cm">// Redis como cache de API</span>
<span class="c-kw">async function</span> <span class="c-fn">getPostoComCache</span>(id) {
  <span class="c-kw">const</span> cached = <span class="c-kw">await</span> redis.<span class="c-fn">get</span>(<span class="c-str">\`posto:\${id}\`</span>)
  <span class="c-kw">if</span> (cached) <span class="c-kw">return</span> JSON.<span class="c-fn">parse</span>(cached)  <span class="c-cm">// cache hit!</span>
  <span class="c-kw">const</span> posto = <span class="c-kw">await</span> db.<span class="c-fn">findById</span>(id)
  <span class="c-kw">await</span> redis.<span class="c-fn">setEx</span>(<span class="c-str">\`posto:\${id}\`</span>, <span class="c-num">300</span>, JSON.<span class="c-fn">stringify</span>(posto))
  <span class="c-kw">return</span> posto
}
      </div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: 'Qual a principal vantagem do Redis sobre PostgreSQL para cache?',
        opcoes: [
          'Redis suporta SQL',
          'Redis opera em memória RAM — extremamente rápido para leituras frequentes',
          'Redis tem melhor suporte a transações',
          'Redis armazena mais dados'
        ],
        correta: 1,
        explicacao: 'Redis opera em memória (não no disco) — acessos em microssegundos vs milissegundos do PostgreSQL. Ideal para cache de dados lidos frequentemente, sessões e filas de tarefas.'
      },
      {
        tipo: 'multipla',
        pergunta: 'Quando usar MongoDB em vez de PostgreSQL?',
        opcoes: [
          'Sempre, MongoDB é melhor',
          'Quando os dados têm estrutura muito variável ou são documentos JSON semi-estruturados',
          'Quando precisa de transações ACID',
          'Quando quer usar SQL'
        ],
        correta: 1,
        explicacao: 'MongoDB brilha com dados semi-estruturados (cada documento pode ter campos diferentes). PostgreSQL é melhor para dados relacionais com integridade garantida. Escolha pela necessidade, não por modismo.'
      },
      {
        tipo: 'completar',
        pergunta: 'No Redis, qual comando guarda um valor com expiração automática?',
        codigo: '___ chave 3600 "valor"  // expira em 1 hora',
        resposta: 'SETEX',
        explicacao: 'SETEX key segundos valor guarda o valor e o deleta automaticamente após o tempo. Perfeito para tokens de sessão, cache temporário e códigos de verificação.'
      }
    ]
  },

  {
    id: 'e15',
    titulo: 'Mini-Prova — Backend & Dados',
    xp: 300,
    tipo: 'prova',
    teoria: `
      <h3>🐘 Parabéns! Mini-Prova do Elefante!</h3>
      <p>Você completou as 14 lições de Backend & Dados. Mínimo de <strong>70%</strong> para passar!</p>`,
    exemplo: `<div class="code-example">// Boa sorte! Você está pronto! 🐘</div>`,
    exercicios: [
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Qual cláusula SQL filtra GRUPOS após um GROUP BY?',
        opcoes: ['WHERE', 'FILTER', 'HAVING', 'GROUP WHERE'],
        correta: 2,
        explicacao: 'HAVING filtra grupos APÓS o agrupamento. WHERE filtra linhas ANTES do agrupamento. HAVING pode usar funções de agregação, WHERE não pode.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] O que JWT significa e para que serve?',
        opcoes: [
          'Java Web Token — para apps Android',
          'JSON Web Token — token de autenticação stateless para APIs REST',
          'JavaScript Web Transfer — para transferir arquivos',
          'Joint Web Technology — protocolo de comunicação'
        ],
        correta: 1,
        explicacao: 'JWT (JSON Web Token) é o padrão de autenticação stateless para APIs REST. O servidor gera o token no login, o cliente o armazena e envia em cada requisição.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Qual método HTTP é usado para ATUALIZAR parcialmente um recurso?',
        opcoes: ['POST', 'PUT', 'PATCH', 'GET'],
        correta: 2,
        explicacao: 'PATCH atualiza parcialmente (só os campos enviados). PUT substitui o recurso completo. POST cria. GET busca.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] Por que usar variáveis de ambiente (.env)?',
        opcoes: [
          'Para melhorar a performance',
          'Para não colocar senhas e chaves no código-fonte versionado',
          'É obrigatório pelo Node.js',
          'Para compartilhar configurações entre desenvolvedores'
        ],
        correta: 1,
        explicacao: '.env mantém segredos (senhas, chaves de API) fora do código-fonte e do Git. Nunca commite .env — adicione ao .gitignore.'
      },
      {
        tipo: 'multipla',
        pergunta: '[PROVA] O que acontece se um middleware Express não chamar next()?',
        opcoes: [
          'O Express chama automaticamente',
          'A requisição fica sem resposta (timeout)',
          'O servidor para',
          'A rota é executada mesmo assim'
        ],
        correta: 1,
        explicacao: 'Sem next() e sem enviar resposta, a requisição fica pendurada. O cliente aguarda até dar timeout. Sempre chame next() ou envie uma resposta em cada middleware.'
      }
    ]
  }
]
