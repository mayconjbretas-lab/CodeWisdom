const CORVO_LICOES = [
  { id:'cv1', titulo:'Python — a linguagem da IA', xp:120,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Python domina o mundo da IA e ciência de dados pela simplicidade e ecossistema de bibliotecas. Sintaxe limpa, sem chaves, indentação define blocos.</p><div class="code-example"><span class="c-cm"># Variáveis e tipos</span>
nome = <span class="c-str">"Maycon"</span>
idade = <span class="c-num">28</span>
ativo = <span class="c-kw">True</span>
tags = [<span class="c-str">"dev"</span>, <span class="c-str">"ia"</span>, <span class="c-str">"seguranca"</span>]

<span class="c-cm"># Função</span>
<span class="c-kw">def</span> <span class="c-fn">saudar</span>(nome):
    <span class="c-kw">return</span> <span class="c-str">f"Olá, {nome}!"</span>

<span class="c-cm"># Loop</span>
<span class="c-kw">for</span> tag <span class="c-kw">in</span> tags:
    <span class="c-fn">print</span>(tag)

<span class="c-cm"># Condicional</span>
<span class="c-kw">if</span> idade >= <span class="c-num">18</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Maior de idade"</span>)</div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># List comprehension — muito usado em IA</span>
quadrados = [x**<span class="c-num">2</span> <span class="c-kw">for</span> x <span class="c-kw">in</span> <span class="c-fn">range</span>(<span class="c-num">10</span>)]
<span class="c-cm"># [0,1,4,9,16,25,36,49,64,81]</span>

pares = [x <span class="c-kw">for</span> x <span class="c-kw">in</span> <span class="c-fn">range</span>(<span class="c-num">20</span>) <span class="c-kw">if</span> x % <span class="c-num">2</span> == <span class="c-num">0</span>]</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que define blocos de código em Python (em vez de chaves)?',opcoes:['Ponto e vírgula','Indentação (espaços)','Parênteses','Colchetes'],correta:1,explicacao:'Python usa indentação (geralmente 4 espaços) para definir blocos. Isso força código visualmente organizado — diferente de JS/C++ que usam {}.'},
      {tipo:'multipla',pergunta:'O que [x**2 for x in range(5)] retorna?',opcoes:['[0,1,2,3,4]','[0,1,4,9,16]','[1,4,9,16,25]','Erro'],correta:1,explicacao:'List comprehension: para cada x de 0 a 4, calcula x². Resultado: [0,1,4,9,16]. É a forma pythônica de criar listas transformadas.'},
      {tipo:'completar',pergunta:'Complete a definição de função em Python:',codigo:'___ somar(a, b):\n    return a + b',resposta:'def',explicacao:'def define uma função em Python. Sintaxe: def nome(parametros): seguido do corpo indentado.'}
    ]
  },
  { id:'cv2', titulo:'NumPy e Pandas — manipulação de dados', xp:130,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p><strong>NumPy</strong> trabalha com arrays numéricos de alta performance. <strong>Pandas</strong> trabalha com tabelas de dados (DataFrames) — como Excel programável.</p><div class="code-example"><span class="c-kw">import</span> numpy <span class="c-kw">as</span> np
<span class="c-kw">import</span> pandas <span class="c-kw">as</span> pd

<span class="c-cm"># NumPy — arrays e operações matemáticas</span>
vendas = np.<span class="c-fn">array</span>([<span class="c-num">1200</span>, <span class="c-num">980</span>, <span class="c-num">1500</span>])
media = vendas.<span class="c-fn">mean</span>()      <span class="c-cm"># 1226.67</span>
total = vendas.<span class="c-fn">sum</span>()        <span class="c-cm"># 3680</span>

<span class="c-cm"># Pandas — DataFrame (tabela)</span>
df = pd.<span class="c-fn">DataFrame</span>({
    <span class="c-str">'posto'</span>: [<span class="c-str">'Central'</span>, <span class="c-str">'Glória'</span>],
    <span class="c-str">'vendas'</span>: [<span class="c-num">8500</span>, <span class="c-num">3200</span>]
})
df[df.vendas > <span class="c-num">5000</span>]  <span class="c-cm"># filtra</span>
df.groupby(<span class="c-str">'posto'</span>).<span class="c-fn">sum</span>()  <span class="c-cm"># agrupa</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Ler CSV e analisar</span>
df = pd.<span class="c-fn">read_csv</span>(<span class="c-str">'vendas.csv'</span>)
df.<span class="c-fn">describe</span>()           <span class="c-cm"># estatísticas</span>
df.<span class="c-fn">sort_values</span>(<span class="c-str">'vendas'</span>, ascending=<span class="c-kw">False</span>)
df[<span class="c-str">'media_movel'</span>] = df.vendas.<span class="c-fn">rolling</span>(<span class="c-num">7</span>).<span class="c-fn">mean</span>()</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Para que serve o Pandas?',opcoes:['Treinar redes neurais','Manipular dados tabulares (DataFrames)','Criar gráficos 3D','Compilar código'],correta:1,explicacao:'Pandas é a biblioteca padrão para manipular dados tabulares em Python — leitura de CSV, filtros, agrupamentos, estatísticas. Como Excel programável.'},
      {tipo:'multipla',pergunta:'O que NumPy adiciona ao Python puro?',opcoes:['Cores no terminal','Arrays numéricos de alta performance e operações vetorizadas','Conexão com banco de dados','Interface gráfica'],correta:1,explicacao:'NumPy arrays são muito mais rápidos que listas Python para operações matemáticas, pois são implementados em C por baixo dos panos.'},
      {tipo:'completar',pergunta:'Complete para ler um arquivo CSV com Pandas:',codigo:"df = pd.___('vendas.csv')",resposta:'read_csv',explicacao:'pd.read_csv() lê um arquivo CSV e retorna um DataFrame. Existem equivalentes: read_excel, read_json, read_sql.'}
    ]
  },
  { id:'cv3', titulo:'Machine Learning — conceitos fundamentais', xp:140,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Machine Learning é ensinar um computador a reconhecer padrões a partir de dados, sem programar regras explícitas.</p><div class="code-example">Tipos de aprendizado:

Supervisionado    → tem rótulos (preço de casas, spam/não-spam)
Não-supervisionado → sem rótulos (agrupar clientes similares)
Por reforço        → aprende por tentativa e recompensa (jogos, robôs)</div><div class="code-example"><span class="c-kw">from</span> sklearn.linear_model <span class="c-kw">import</span> LinearRegression
<span class="c-kw">from</span> sklearn.model_selection <span class="c-kw">import</span> train_test_split

<span class="c-cm"># Dividir dados em treino e teste</span>
X_train, X_test, y_train, y_test = <span class="c-fn">train_test_split</span>(X, y, test_size=<span class="c-num">0.2</span>)

<span class="c-cm"># Treinar o modelo</span>
modelo = <span class="c-fn">LinearRegression</span>()
modelo.<span class="c-fn">fit</span>(X_train, y_train)

<span class="c-cm"># Prever</span>
previsoes = modelo.<span class="c-fn">predict</span>(X_test)</div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Prever vendas baseado em dia da semana</span>
<span class="c-kw">from</span> sklearn.ensemble <span class="c-kw">import</span> RandomForestRegressor

modelo = <span class="c-fn">RandomForestRegressor</span>()
modelo.<span class="c-fn">fit</span>(dias_semana, vendas_historicas)

proxima_venda = modelo.<span class="c-fn">predict</span>([[<span class="c-num">5</span>]])  <span class="c-cm"># sexta-feira</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual a diferença entre aprendizado supervisionado e não-supervisionado?',opcoes:['Não há diferença','Supervisionado usa dados rotulados, não-supervisionado não usa rótulos','Não-supervisionado é mais rápido','Supervisionado é só para imagens'],correta:1,explicacao:'Supervisionado: você tem exemplos com a resposta certa (rótulo) para o modelo aprender. Não-supervisionado: o modelo encontra padrões sem saber a resposta certa.'},
      {tipo:'multipla',pergunta:'Por que dividir dados em treino e teste?',opcoes:['É opcional','Para avaliar se o modelo generaliza bem para dados nunca vistos','Para economizar memória','Para acelerar o treino'],correta:1,explicacao:'Treinar e testar com os mesmos dados não revela se o modelo realmente aprendeu padrões gerais ou só "decorou" os exemplos (overfitting).'},
      {tipo:'completar',pergunta:'Complete para treinar um modelo com sklearn:',codigo:'modelo.___(X_train, y_train)',resposta:'fit',explicacao:'fit() é o método padrão do scikit-learn para treinar qualquer modelo. Depois de fit(), você usa predict() para fazer previsões.'}
    ]
  },
  { id:'cv4', titulo:'Redes neurais — os fundamentos', xp:150,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Uma rede neural é inspirada no cérebro: neurônios artificiais conectados em camadas, cada conexão tem um peso que é ajustado durante o treino.</p><div class="code-example">Entrada → Camada Oculta → Saída
  x1 →    [n1] [n2] [n3]  →  y

Cada neurônio: soma ponderada + função de ativação
saida = ativacao(w1*x1 + w2*x2 + ... + bias)</div><div class="code-example"><span class="c-kw">import</span> tensorflow <span class="c-kw">as</span> tf
<span class="c-kw">from</span> tensorflow.keras <span class="c-kw">import</span> layers

modelo = tf.keras.<span class="c-fn">Sequential</span>([
    layers.<span class="c-fn">Dense</span>(<span class="c-num">64</span>, activation=<span class="c-str">'relu'</span>, input_shape=(<span class="c-num">10</span>,)),
    layers.<span class="c-fn">Dense</span>(<span class="c-num">32</span>, activation=<span class="c-str">'relu'</span>),
    layers.<span class="c-fn">Dense</span>(<span class="c-num">1</span>, activation=<span class="c-str">'sigmoid'</span>)
])

modelo.<span class="c-fn">compile</span>(optimizer=<span class="c-str">'adam'</span>, loss=<span class="c-str">'binary_crossentropy'</span>)
modelo.<span class="c-fn">fit</span>(X_train, y_train, epochs=<span class="c-num">10</span>)</div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Funções de ativação comuns</span>
ReLU    → max(0, x)         <span class="c-cm"># mais usada</span>
Sigmoid → 1/(1+e^-x)        <span class="c-cm"># saída entre 0 e 1</span>
Softmax → probabilidades    <span class="c-cm"># classificação múltipla</span>
Tanh    → -1 a 1</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que uma função de ativação faz numa rede neural?',opcoes:['Inicializa os pesos','Adiciona não-linearidade, permitindo aprender padrões complexos','Reduz o tamanho da rede','Acelera o treino'],correta:1,explicacao:'Sem ativação não-linear, a rede inteira seria equivalente a uma única transformação linear, incapaz de aprender padrões complexos como imagens ou linguagem.'},
      {tipo:'multipla',pergunta:'O que "epochs" significa no treino?',opcoes:['Número de neurônios','Quantas vezes o modelo vê o dataset completo durante o treino','Velocidade de aprendizado','Tamanho do dataset'],correta:1,explicacao:'Uma epoch = uma passada completa por todos os dados de treino. epochs=10 significa que o modelo vê os dados 10 vezes, ajustando pesos a cada vez.'},
      {tipo:'completar',pergunta:'Complete a ativação mais usada em camadas ocultas:',codigo:"layers.Dense(64, activation='___')",resposta:'relu',explicacao:"ReLU (Rectified Linear Unit) é a ativação padrão em camadas ocultas — simples, rápida e evita o problema do gradiente desaparecendo."}
    ]
  },
  { id:'cv5', titulo:'LLMs e Prompt Engineering', xp:150,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>LLMs (Large Language Models) como o Claude são redes neurais Transformer treinadas em texto massivo, que preveem a próxima palavra mais provável.</p><div class="code-example">Como funciona por dentro:

1. Tokenização → texto vira números (tokens)
2. Embeddings  → tokens viram vetores com significado
3. Atenção     → cada token "olha" para os outros relevantes
4. Geração     → prevê o próximo token, repete</div><p><strong>Prompt Engineering</strong> — técnicas para melhores respostas:</p><div class="code-example"><span class="c-cm">❌ Vago: "me ajuda com python"</span>

<span class="c-cm">✅ Específico:</span>
"Escreva uma função Python que recebe uma lista
de números e retorna apenas os pares, usando
list comprehension. Inclua um exemplo de uso."

<span class="c-cm">✅ Com exemplos (few-shot):</span>
"Classifique o sentimento:
'Adorei o produto' → positivo
'Péssimo atendimento' → negativo
'O produto chegou' → ?"</div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Chamando a API da Anthropic</span>
<span class="c-kw">import</span> anthropic

client = anthropic.<span class="c-fn">Anthropic</span>(api_key=<span class="c-str">"sua-chave"</span>)

response = client.messages.<span class="c-fn">create</span>(
    model=<span class="c-str">"claude-sonnet-4-6"</span>,
    max_tokens=<span class="c-num">1000</span>,
    messages=[{<span class="c-str">"role"</span>: <span class="c-str">"user"</span>, <span class="c-str">"content"</span>: <span class="c-str">"Explique recursão"</span>}]
)
<span class="c-fn">print</span>(response.content[<span class="c-num">0</span>].text)</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que mecanismo de atenção faz num Transformer?',opcoes:['Acelera o treino','Permite que cada token "olhe" para outros tokens relevantes no contexto','Reduz o tamanho do modelo','Traduz idiomas'],correta:1,explicacao:'Atenção (attention) é o que permite ao modelo entender relações entre palavras distantes no texto — "ele" se referindo a um nome mencionado parágrafos antes.'},
      {tipo:'multipla',pergunta:'O que é few-shot prompting?',opcoes:['Usar prompts curtos','Dar exemplos no prompt para guiar o formato da resposta','Fazer múltiplas perguntas','Usar emojis'],correta:1,explicacao:'Few-shot = fornecer alguns exemplos do padrão desejado antes da pergunta real. Isso ajuda o modelo a entender exatamente o formato e estilo esperado.'},
      {tipo:'completar',pergunta:'Complete para chamar a API da Anthropic em Python:',codigo:'client.messages.___(model="claude-sonnet-4-6", ...)',resposta:'create',explicacao:'create() é o método que envia a requisição e retorna a resposta do modelo. É equivalente ao endpoint POST /v1/messages da API REST.'}
    ]
  },
  { id:'cv6', titulo:'Segurança Web — OWASP Top 10', xp:150,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>OWASP Top 10 lista as vulnerabilidades mais críticas em aplicações web. Todo desenvolvedor deve conhecê-las.</p><div class="code-example">1. Broken Access Control    → permissões mal configuradas
2. Cryptographic Failures    → dados sensíveis expostos
3. Injection (SQL, etc)      → código malicioso injetado
4. Insecure Design           → falhas arquiteturais
5. Security Misconfiguration → configurações padrão inseguras
6. Vulnerable Components     → bibliotecas desatualizadas
7. Auth Failures             → login/sessão mal implementados
8. Software Integrity        → CI/CD comprometido
9. Logging Failures          → ataques não detectados
10. SSRF                     → servidor faz requests maliciosos</div><div class="code-example"><span class="c-cm">// ❌ SQL Injection — vulnerável</span>
<span class="c-kw">const</span> query = <span class="c-str">\`SELECT * FROM users WHERE email = '\${email}'\`</span>
<span class="c-cm">// email = "x' OR '1'='1" → retorna TODOS os usuários!</span>

<span class="c-cm">// ✅ Prepared statement — seguro</span>
db.<span class="c-fn">query</span>(<span class="c-str">'SELECT * FROM users WHERE email = $1'</span>, [email])</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// XSS — Cross-Site Scripting</span>
<span class="c-cm">// ❌ Vulnerável</span>
div.innerHTML = comentarioDoUsuario
<span class="c-cm">// comentário: &lt;script&gt;roubarCookies()&lt;/script&gt;</span>

<span class="c-cm">// ✅ Seguro</span>
div.textContent = comentarioDoUsuario</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que é SQL Injection?',opcoes:['Otimização de query','Injetar código SQL malicioso através de inputs não sanitizados','Um tipo de índice','Backup automático'],correta:1,explicacao:'SQL Injection acontece quando inputs do usuário são inseridos diretamente em queries SQL sem sanitização, permitindo manipular a query original.'},
      {tipo:'multipla',pergunta:'Como prevenir SQL Injection?',opcoes:['Usar mais validação no frontend apenas','Usar prepared statements / queries parametrizadas','Esconder mensagens de erro','Usar HTTPS'],correta:1,explicacao:'Prepared statements separam o código SQL dos dados — o banco trata os parâmetros como dados, nunca como código executável.'},
      {tipo:'completar',pergunta:'Complete para evitar XSS ao inserir texto do usuário:',codigo:'div.___ = comentarioDoUsuario  // não innerHTML!',resposta:'textContent',explicacao:'textContent trata o conteúdo como texto puro, sem interpretar tags HTML/JavaScript. innerHTML executaria scripts maliciosos.'}
    ]
  },
  { id:'cv7', titulo:'Kali Linux — introdução ao pentest', xp:150,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Kali Linux é a distribuição padrão para testes de penetração ética. Vem com centenas de ferramentas de segurança pré-instaladas.</p><div class="code-example"><span class="c-cm"># Nmap — reconhecimento de rede</span>
nmap -sV 192.168.1.0/24      <span class="c-cm"># scan da rede com versões</span>
nmap -p- 192.168.1.10        <span class="c-cm"># todas as portas</span>
nmap -sC -sV -oN scan.txt alvo.com  <span class="c-cm"># scripts + output</span>

<span class="c-cm"># Metodologia de pentest:</span>
1. Reconnaissance  → coletar informações
2. Scanning        → identificar portas/serviços
3. Enumeration      → detalhar versões e configs
4. Exploitation     → explorar vulnerabilidades
5. Post-Exploitation→ manter acesso, escalar privilégio
6. Reporting        → documentar tudo</div><p>⚠️ <strong>Importante:</strong> pentest só em sistemas que você tem autorização explícita para testar. Sem autorização = crime.</p>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Burp Suite — interceptar tráfego HTTP</span>
1. Configurar proxy do browser para 127.0.0.1:8080
2. Interceptar requisições
3. Modificar parâmetros e reenviar
4. Analisar resposta do servidor

<span class="c-cm"># Identificar tecnologias do alvo</span>
whatweb alvo.com
wappalyzer (extensão de browser)</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Para que serve o Nmap?',opcoes:['Editar código','Escanear redes e identificar portas/serviços abertos','Criar sites','Compactar arquivos'],correta:1,explicacao:'Nmap (Network Mapper) é a ferramenta padrão de reconhecimento de rede — identifica hosts ativos, portas abertas e serviços rodando.'},
      {tipo:'multipla',pergunta:'Qual a primeira fase de um pentest profissional?',opcoes:['Exploitation','Reconnaissance — coletar informações','Reporting','Post-Exploitation'],correta:1,explicacao:'Reconnaissance (reconhecimento) vem primeiro — entender o alvo, sua infraestrutura, tecnologias, antes de qualquer tentativa de exploração.'},
      {tipo:'completar',pergunta:'Complete o comando Nmap para escanear todas as portas:',codigo:'nmap -p___ 192.168.1.10',resposta:'-',explicacao:'nmap -p- escaneia todas as 65535 portas TCP. Sem -p, o Nmap escaneia apenas as 1000 portas mais comuns por padrão.'}
    ]
  },
  { id:'cv8', titulo:'Data Science — análise exploratória', xp:160,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Análise Exploratória de Dados (EDA) é entender os dados antes de modelar — distribuições, outliers, correlações.</p><div class="code-example"><span class="c-kw">import</span> matplotlib.pyplot <span class="c-kw">as</span> plt
<span class="c-kw">import</span> seaborn <span class="c-kw">as</span> sns

<span class="c-cm"># Estatísticas descritivas</span>
df.<span class="c-fn">describe</span>()        <span class="c-cm"># média, desvio, quartis</span>
df.<span class="c-fn">info</span>()            <span class="c-cm"># tipos e nulos</span>
df.<span class="c-fn">isnull</span>().<span class="c-fn">sum</span>()  <span class="c-cm"># valores faltantes</span>

<span class="c-cm"># Visualizações</span>
sns.<span class="c-fn">histplot</span>(df[<span class="c-str">'vendas'</span>])
sns.<span class="c-fn">boxplot</span>(x=<span class="c-str">'posto'</span>, y=<span class="c-str">'vendas'</span>, data=df)
sns.<span class="c-fn">heatmap</span>(df.<span class="c-fn">corr</span>(), annot=<span class="c-kw">True</span>)  <span class="c-cm"># correlações</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Detectar outliers com IQR</span>
Q1 = df.vendas.<span class="c-fn">quantile</span>(<span class="c-num">0.25</span>)
Q3 = df.vendas.<span class="c-fn">quantile</span>(<span class="c-num">0.75</span>)
IQR = Q3 - Q1
outliers = df[(df.vendas < Q1 - <span class="c-num">1.5</span>*IQR) | (df.vendas > Q3 + <span class="c-num">1.5</span>*IQR)]</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que EDA significa?',opcoes:['Estimativa De Algoritmos','Análise Exploratória de Dados','Erro De Aplicação','Engenharia De Aplicativos'],correta:1,explicacao:'EDA (Exploratory Data Analysis) é a etapa de entender os dados — distribuições, valores faltantes, outliers — antes de qualquer modelagem.'},
      {tipo:'multipla',pergunta:'Para que serve um heatmap de correlação?',opcoes:['Mostrar localização geográfica','Visualizar a força de relação entre variáveis numéricas','Mostrar temperatura','Criar gráficos de pizza'],correta:1,explicacao:'Um heatmap de correlação mostra visualmente quais variáveis se relacionam mais fortemente — útil para identificar features relevantes para modelos.'},
      {tipo:'completar',pergunta:'Complete para ver estatísticas descritivas de um DataFrame:',codigo:'df.___()  # média, desvio, min, max, quartis',resposta:'describe',explicacao:'describe() gera um resumo estatístico rápido: count, mean, std, min, 25%, 50%, 75%, max para cada coluna numérica.'}
    ]
  },
  { id:'cv9', titulo:'Computação em nuvem — AWS fundamentos', xp:160,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Cloud computing significa usar servidores de terceiros (AWS, GCP, Azure) ao invés de hardware próprio.</p><div class="code-example">Serviços essenciais AWS:

EC2  → servidores virtuais (máquinas)
S3   → armazenamento de arquivos
RDS  → banco de dados gerenciado
Lambda → funções serverless (executa sob demanda)
CloudFront → CDN (distribuição de conteúdo)
IAM  → gerenciamento de permissões</div><div class="code-example"><span class="c-cm"># Lambda function — serverless</span>
<span class="c-kw">def</span> <span class="c-fn">lambda_handler</span>(event, context):
    nome = event[<span class="c-str">'nome'</span>]
    <span class="c-kw">return</span> {
        <span class="c-str">'statusCode'</span>: <span class="c-num">200</span>,
        <span class="c-str">'body'</span>: <span class="c-fn">f"Olá, {nome}!"</span>
    }
<span class="c-cm"># Você paga só pelo tempo de execução!</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Quando usar cada serviço:</span>

EC2     → controle total, app sempre rodando
Lambda  → tarefas pontuais, baixo tráfego
S3      → guardar arquivos, imagens, backups
RDS     → banco SQL gerenciado (sem manutenção manual)</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que é "serverless"?',opcoes:['Não usa servidor algum','Código executado sob demanda, sem gerenciar servidor manualmente','Apenas frontend','Hospedagem grátis'],correta:1,explicacao:'Serverless não significa "sem servidor" — significa que VOCÊ não gerencia o servidor. A AWS cuida disso, você só escreve a função (Lambda).'},
      {tipo:'multipla',pergunta:'Para que serve o S3 da AWS?',opcoes:['Banco de dados','Armazenamento de arquivos (object storage)','Servidor virtual','CDN'],correta:1,explicacao:'S3 (Simple Storage Service) armazena arquivos de qualquer tipo — imagens, vídeos, backups — com alta durabilidade e disponibilidade.'},
      {tipo:'completar',pergunta:'Complete o nome do serviço de funções serverless da AWS:',codigo:'AWS ___ executa código sob demanda',resposta:'Lambda',explicacao:'AWS Lambda executa código em resposta a eventos (requisição HTTP, upload de arquivo, etc) sem você gerenciar servidores.'}
    ]
  },
  { id:'cv10', titulo:'Como o Claude funciona — LLMs na prática', xp:160,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Você está conversando com um LLM agora mesmo! Entender como o Claude funciona te dá superpoderes para construir em cima dele.</p><div class="code-example">Arquitetura Transformer (simplificada):

Texto → Tokens → Embeddings → 
  N camadas de Self-Attention →
  Predição do próximo token → repete</div><div class="code-example"><span class="c-cm"># Usando ferramentas (tool use) com Claude</span>
tools = [{
    <span class="c-str">"name"</span>: <span class="c-str">"buscar_clima"</span>,
    <span class="c-str">"description"</span>: <span class="c-str">"Busca o clima de uma cidade"</span>,
    <span class="c-str">"input_schema"</span>: {
        <span class="c-str">"type"</span>: <span class="c-str">"object"</span>,
        <span class="c-str">"properties"</span>: {<span class="c-str">"cidade"</span>: {<span class="c-str">"type"</span>: <span class="c-str">"string"</span>}}
    }
}]

response = client.messages.<span class="c-fn">create</span>(
    model=<span class="c-str">"claude-sonnet-4-6"</span>,
    tools=tools,
    messages=[{<span class="c-str">"role"</span>:<span class="c-str">"user"</span>, <span class="c-str">"content"</span>:<span class="c-str">"Clima em BH?"</span>}]
)
<span class="c-cm"># Claude decide chamar a tool automaticamente!</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># RAG — Retrieval Augmented Generation</span>
1. Usuário pergunta algo
2. Sistema busca documentos relevantes (busca semântica)
3. Documentos + pergunta vão para o Claude
4. Claude responde baseado no contexto fornecido
<span class="c-cm"># Permite respostas atualizadas e específicas do seu domínio!</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que "tool use" permite a um LLM fazer?',opcoes:['Aprender sozinho','Chamar funções externas (buscar dados, executar ações) durante a conversa','Mudar de modelo','Aumentar o contexto'],correta:1,explicacao:'Tool use permite ao modelo decidir quando chamar uma função externa — buscar clima, consultar banco de dados, fazer cálculos — e usar o resultado na resposta.'},
      {tipo:'multipla',pergunta:'O que RAG significa?',opcoes:['Random Access Generation','Retrieval Augmented Generation — busca documentos antes de gerar resposta','Rapid AI Growth','Real-time Action Generator'],correta:1,explicacao:'RAG combina busca de informação (retrieval) com geração de texto (LLM) — permite respostas baseadas em dados específicos e atualizados, não só no treino do modelo.'},
      {tipo:'completar',pergunta:'Complete o nome da arquitetura por trás dos LLMs modernos:',codigo:'A arquitetura ___ usa mecanismo de atenção',resposta:'Transformer',explicacao:'Transformer foi introduzida em 2017 ("Attention is All You Need") e é a base de praticamente todos os LLMs modernos, incluindo o Claude.'}
    ]
  },
  { id:'cv11', titulo:'Autenticação avançada — OAuth 2.0', xp:160,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>OAuth 2.0 permite login via terceiros (Google, GitHub) sem compartilhar senhas.</p><div class="code-example">Fluxo OAuth (Authorization Code):

1. App redireciona para Google: "Autorize meu app"
2. Usuário faz login no Google e aceita
3. Google redireciona de volta com um "code"
4. App troca o code por um access_token
5. App usa o token para acessar dados do usuário</div><div class="code-example"><span class="c-cm">// Trocar code por token</span>
<span class="c-kw">const</span> res = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(<span class="c-str">'https://oauth2.googleapis.com/token'</span>, {
  method: <span class="c-str">'POST'</span>,
  body: <span class="c-kw">new</span> URLSearchParams({
    code: req.query.code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: <span class="c-str">'https://meuapp.com/callback'</span>,
    grant_type: <span class="c-str">'authorization_code'</span>
  })
})</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Refresh token — renovar acesso sem novo login</span>
<span class="c-kw">async function</span> <span class="c-fn">renovarToken</span>(refreshToken) {
  <span class="c-kw">const</span> res = <span class="c-kw">await</span> <span class="c-fn">fetch</span>(authUrl, {
    method: <span class="c-str">'POST'</span>,
    body: <span class="c-kw">new</span> URLSearchParams({
      refresh_token: refreshToken,
      grant_type: <span class="c-str">'refresh_token'</span>
    })
  })
  <span class="c-kw">return</span> res.<span class="c-fn">json</span>() <span class="c-cm">// novo access_token</span>
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual a vantagem do OAuth para o usuário?',opcoes:['É mais lento','Não precisa compartilhar a senha com o app terceiro','Funciona offline','É obrigatório por lei'],correta:1,explicacao:'OAuth permite que o app acesse dados específicos sem nunca ver a senha do usuário — o login acontece direto no provedor (Google, GitHub).'},
      {tipo:'multipla',pergunta:'Para que serve o refresh_token?',opcoes:['Fazer logout','Obter um novo access_token sem o usuário logar de novo','Trocar a senha','Deletar a conta'],correta:1,explicacao:'access_tokens expiram rápido por segurança. O refresh_token (de vida mais longa) permite obter um novo access_token sem reautenticação manual.'},
      {tipo:'completar',pergunta:'Complete o grant_type para trocar o code inicial por tokens:',codigo:"grant_type: 'authorization____'",resposta:'code',explicacao:"authorization_code é o grant_type usado na primeira troca, quando você tem o 'code' recebido do redirect do provedor OAuth."}
    ]
  },
  { id:'cv12', titulo:'Engenharia de prompts avançada', xp:170,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Técnicas avançadas de prompt engineering melhoram drasticamente a qualidade das respostas de LLMs.</p><div class="code-example">Chain of Thought (CoT) — pedir raciocínio passo a passo:

"Resolva: se um trem viaja a 80km/h por 2.5h,
qual a distância? Pense passo a passo antes
de dar a resposta final."

→ O modelo "pensa em voz alta" antes de concluir,
  reduzindo erros em problemas complexos</div><div class="code-example"><span class="c-cm">// Usando XML tags para estruturar (técnica do Claude)</span>
prompt = <span class="c-str">"""
&lt;contexto&gt;
{dados_da_empresa}
&lt;/contexto&gt;

&lt;tarefa&gt;
Analise os dados acima e sugira 3 melhorias.
&lt;/tarefa&gt;
"""</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Role prompting — definir persona</span>
"Você é um revisor de código sênior especializado
em segurança. Revise este código JavaScript e
aponte vulnerabilidades."

<span class="c-cm">// Output estruturado</span>
"Responda APENAS em JSON no formato:
{ \"nota\": number, \"problemas\": string[] }"</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que é Chain of Thought prompting?',opcoes:['Encadear várias perguntas','Pedir ao modelo para raciocinar passo a passo antes da resposta final','Usar várias IAs juntas','Repetir a pergunta'],correta:1,explicacao:'CoT melhora respostas em problemas complexos — matemática, lógica — pois o modelo "mostra o trabalho" em vez de pular direto para uma conclusão que pode estar errada.'},
      {tipo:'multipla',pergunta:'Por que usar tags XML para estruturar prompts?',opcoes:['É mais bonito','Ajuda o modelo a distinguir claramente diferentes seções do prompt','É obrigatório','Reduz o custo'],correta:1,explicacao:'Tags como <contexto> e <tarefa> ajudam o modelo a entender a estrutura e o propósito de cada parte do prompt, especialmente em prompts longos e complexos.'},
      {tipo:'completar',pergunta:'Complete o nome da técnica de definir uma persona para o modelo:',codigo:'A técnica de "___ prompting" define quem o modelo deve simular ser',resposta:'role',explicacao:'Role prompting ("Você é um especialista em X") direciona o tom, vocabulário e foco das respostas do modelo para aquele papel específico.'}
    ]
  },
  { id:'cv13', titulo:'Sistemas distribuídos — conceitos', xp:170,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Sistemas distribuídos rodam em múltiplas máquinas trabalhando juntas. Trazem desafios únicos de consistência e disponibilidade.</p><div class="code-example">Teorema CAP — escolha 2 de 3:

Consistency   → todos os nós veem os mesmos dados
Availability  → sistema sempre responde
Partition Tolerance → funciona mesmo com falha de rede

Na prática: Partition Tolerance é obrigatória,
então você escolhe entre C ou A</div><div class="code-example"><span class="c-cm">// Load balancing — distribuir tráfego</span>
Cliente → Load Balancer → [Server1, Server2, Server3]

<span class="c-cm">// Mensageria assíncrona — desacoplar serviços</span>
ServiçoA → publica evento → Fila (RabbitMQ/Kafka)
                              ↓
                         ServiçoB consome</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Idempotência — operação pode repetir sem efeito colateral</span>
<span class="c-cm">// ❌ Não idempotente</span>
<span class="c-kw">POST</span> /saldo/adicionar { valor: <span class="c-num">100</span> }
<span class="c-cm">// se repetir = adiciona 100 de novo!</span>

<span class="c-cm">// ✅ Idempotente</span>
<span class="c-kw">PUT</span> /saldo { idempotency_key: <span class="c-str">"abc123"</span>, valor_final: <span class="c-num">500</span> }
<span class="c-cm">// repetir = mesmo resultado</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que o Teorema CAP afirma?',opcoes:['Sistemas devem ter 100% uptime','Um sistema distribuído não pode garantir Consistência, Disponibilidade E Tolerância a Partição simultaneamente','CAP é sobre criptografia','Não existe relação com sistemas distribuídos'],correta:1,explicacao:'CAP: você pode ter no máximo 2 das 3 garantias simultaneamente. Como Partition Tolerance é praticamente obrigatória em redes reais, a escolha real é entre Consistency e Availability.'},
      {tipo:'multipla',pergunta:'O que idempotência significa numa operação?',opcoes:['É muito rápida','Executar a operação múltiplas vezes tem o mesmo efeito que executar uma vez','Não pode falhar','Usa pouco recurso'],correta:1,explicacao:'Idempotência é crucial em sistemas distribuídos: se uma requisição falhar e for reenviada (retry), uma operação idempotente não causa efeitos duplicados.'},
      {tipo:'completar',pergunta:'Complete o nome do componente que distribui requisições entre vários servidores:',codigo:'O ___ distribui tráfego entre múltiplos servidores',resposta:'load balancer',explicacao:'Load balancer distribui requisições entre servidores para evitar sobrecarga e aumentar disponibilidade. Nginx, HAProxy e AWS ELB são exemplos comuns.'}
    ]
  },
  { id:'cv14', titulo:'Projeto Full Stack — arquitetura completa', xp:180,
    teoria:`<h3>🐦‍⬛ Nyx diz:</h3><p>Hora de juntar tudo! Um sistema full stack profissional combina todas as camadas que você aprendeu.</p><div class="code-example">Arquitetura completa:

Frontend (React) 
    ↓ fetch/API
Backend (Node.js + Express)
    ↓ queries
Banco (PostgreSQL) + Cache (Redis)
    ↓ deploy
Cloud (Docker + AWS/Railway)
    ↓ monitoramento
Logs + Métricas (Grafana)</div><div class="code-example"><span class="c-cm">// Estrutura de projeto profissional</span>
projeto/
├── frontend/        (React)
├── backend/
│   ├── routes/       
│   ├── controllers/  
│   ├── models/       
│   ├── middleware/   (auth, validação)
│   └── services/     (lógica de negócio)
├── docker-compose.yml
└── .github/workflows/ (CI/CD)</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Separação de responsabilidades</span>
<span class="c-cm">// controller — recebe request, chama service</span>
<span class="c-kw">async function</span> <span class="c-fn">criarPosto</span>(req, res) {
  <span class="c-kw">const</span> posto = <span class="c-kw">await</span> postoService.<span class="c-fn">criar</span>(req.body)
  res.<span class="c-fn">status</span>(<span class="c-num">201</span>).<span class="c-fn">json</span>(posto)
}

<span class="c-cm">// service — lógica de negócio</span>
<span class="c-kw">async function</span> <span class="c-fn">criar</span>(dados) {
  <span class="c-fn">validar</span>(dados)
  <span class="c-kw">return</span> <span class="c-kw">await</span> postoModel.<span class="c-fn">create</span>(dados)
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Por que separar controller de service?',opcoes:['Não há motivo real','Separação de responsabilidades — controller lida com HTTP, service com lógica de negócio','É mais rápido','Reduz o tamanho do código'],correta:1,explicacao:'Essa separação (padrão MVC/Clean Architecture) facilita testes, manutenção e reuso — o service pode ser chamado de outros lugares sem depender de req/res do Express.'},
      {tipo:'multipla',pergunta:'Onde o cache (Redis) entra na arquitetura?',opcoes:['Substitui o banco de dados','Entre o backend e o banco, para acelerar leituras frequentes','No frontend apenas','Não tem uso prático'],correta:1,explicacao:'Cache fica entre a aplicação e o banco — antes de consultar o banco (mais lento), verifica se o dado já está em cache (mais rápido).'},
      {tipo:'completar',pergunta:'Complete a camada que contém a lógica de negócio (não HTTP, não banco direto):',codigo:'A camada de ___ contém a lógica de negócio da aplicação',resposta:'service',explicacao:'Services contêm regras de negócio puras, sem conhecer detalhes de HTTP (Express) ou do banco específico — facilita testes e trocas de tecnologia.'}
    ]
  },
  { id:'cv15', titulo:'Mini-Prova — IA, Segurança & Dados', xp:300, tipo:'prova',
    teoria:`<h3>🐦‍⬛ Hora da Mini-Prova!</h3><p>Você completou as 14 lições de IA, Segurança & Dados. Mínimo 70% para passar!</p>`,
    exemplo:'',
    exercicios:[
      {tipo:'multipla',pergunta:'[PROVA] Qual a diferença entre aprendizado supervisionado e não-supervisionado?',opcoes:['Não há diferença','Supervisionado usa dados rotulados','Não-supervisionado é mais rápido','Supervisionado é só para texto'],correta:1,explicacao:'Supervisionado usa exemplos com resposta correta conhecida (rótulo) para treinar.'},
      {tipo:'multipla',pergunta:'[PROVA] O que é SQL Injection?',opcoes:['Otimização','Injetar código SQL malicioso via input não sanitizado','Um índice','Backup'],correta:1,explicacao:'SQL Injection explora inputs não sanitizados inseridos diretamente em queries.'},
      {tipo:'multipla',pergunta:'[PROVA] O que RAG significa em LLMs?',opcoes:['Random Access','Retrieval Augmented Generation','Rapid Growth','Real Action'],correta:1,explicacao:'RAG busca documentos relevantes antes de gerar a resposta, melhorando precisão e atualidade.'},
      {tipo:'multipla',pergunta:'[PROVA] Para que serve o Nmap?',opcoes:['Editar código','Escanear redes e portas','Criar sites','Compactar arquivos'],correta:1,explicacao:'Nmap é a ferramenta padrão de reconhecimento de rede em pentest.'},
      {tipo:'multipla',pergunta:'[PROVA] O que o Teorema CAP afirma?',opcoes:['100% uptime sempre possível','Não pode garantir Consistência, Disponibilidade e Partição Tolerance simultaneamente','É sobre criptografia','Sem relação com distribuídos'],correta:1,explicacao:'CAP: escolha no máximo 2 das 3 garantias em sistemas distribuídos.'}
    ]
  }
]
