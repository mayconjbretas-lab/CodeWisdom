// ============================================================
// LOBO — Aro | Fase 4: Engenharia de Software
// 15 lições com teoria, exemplos e exercícios
// ============================================================

const LOBO_LICOES = [
  {
    id: 'l1', titulo: 'Clean Code — código limpo', xp: 130,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p><strong>Clean Code</strong> é código fácil de ler, entender e modificar.
      Código limpo é escrito para humanos, não para máquinas.</p>
      <div class="code-example"><span class="c-cm">// ❌ Código sujo</span>
<span class="c-kw">function</span> <span class="c-fn">calc</span>(x, y, t) {
  <span class="c-kw">if</span> (t == <span class="c-num">1</span>) <span class="c-kw">return</span> x + y
  <span class="c-kw">if</span> (t == <span class="c-num">2</span>) <span class="c-kw">return</span> x - y
  <span class="c-kw">if</span> (t == <span class="c-num">3</span>) <span class="c-kw">return</span> x * y
}

<span class="c-cm">// ✅ Clean Code</span>
<span class="c-kw">function</span> <span class="c-fn">calcularPrecoFinal</span>(preco, desconto) {
  <span class="c-kw">return</span> preco - desconto
}
<span class="c-kw">function</span> <span class="c-fn">calcularPrecoComImposto</span>(preco, taxaImposto) {
  <span class="c-kw">return</span> preco * (<span class="c-num">1</span> + taxaImposto)
}

<span class="c-cm">/* Regras principais:
   - Nomes descritivos e sem abreviações
   - Funções fazem UMA coisa só
   - Máximo 20 linhas por função
   - Comentários explicam o POR QUÊ, não o O QUÊ
   - DRY: Don't Repeat Yourself */</span></div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// Comentários que agregam valor</span>
<span class="c-cm">// ❌ Desnecessário — o código já diz isso</span>
i++ <span class="c-cm">// incrementa i</span>

<span class="c-cm">// ✅ Explica o motivo, não o quê</span>
<span class="c-cm">// Offset de 1 porque a API usa índice base-1</span>
<span class="c-kw">const</span> paginaAPI = paginaAtual + <span class="c-num">1</span>

<span class="c-cm">// Magic numbers — evite!</span>
<span class="c-cm">// ❌</span>
<span class="c-kw">if</span> (estoque < <span class="c-num">300</span>) alertarReposicao()

<span class="c-cm">// ✅</span>
<span class="c-kw">const</span> MINIMO_ESTOQUE_LITROS = <span class="c-num">300</span>
<span class="c-kw">if</span> (estoque < MINIMO_ESTOQUE_LITROS) <span class="c-fn">alertarReposicao</span>()</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'O que significa DRY em Clean Code?', opcoes: ["Don't Repeat Yourself — evite duplicação de código", 'Delete Redundant Yield', 'Dynamic Runtime Yield', 'Develop Reliable Yield'], correta: 0, explicacao: 'DRY = Don\'t Repeat Yourself. Se você copia e cola código, extraia para uma função. Código duplicado significa que ao corrigir um bug, você precisa lembrar de corrigir em todos os lugares.' },
      { tipo: 'multipla', pergunta: 'Por que funções devem fazer apenas UMA coisa?', opcoes: ['Para usar menos memória', 'Facilita testes, reutilização e entendimento — o nome descreve exatamente o que faz', 'É obrigatório pela linguagem', 'Para compilar mais rápido'], correta: 1, explicacao: 'Funções que fazem muitas coisas são difíceis de nomear, testar e reutilizar. "calcularEEnviarEmail" faz duas coisas — separe em calcular() e enviarEmail().' },
      { tipo: 'completar', pergunta: 'Complete a constante com nome descritivo para o mínimo de estoque:', codigo: 'const ___ = 300\nif (estoque < MINIMO_ESTOQUE_LITROS) alertar()', resposta: 'MINIMO_ESTOQUE_LITROS', explicacao: 'Constantes com nomes descritivos em MAIÚSCULAS eliminam "magic numbers" — números sem contexto no código. Qualquer dev entende o que 300 significa ao ver MINIMO_ESTOQUE_LITROS.' }
    ]
  },

  {
    id: 'l2', titulo: 'SOLID — os 5 princípios', xp: 140,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p><strong>SOLID</strong> são 5 princípios para código orientado a objetos flexível e manutenível:</p>
      <div class="code-example"><span class="c-kw">S</span> — Single Responsibility  <span class="c-cm">uma classe, uma responsabilidade</span>
<span class="c-kw">O</span> — Open/Closed           <span class="c-cm">aberto para extensão, fechado para modificação</span>
<span class="c-kw">L</span> — Liskov Substitution    <span class="c-cm">subclasses substituem a classe pai</span>
<span class="c-kw">I</span> — Interface Segregation  <span class="c-cm">interfaces específicas > uma geral</span>
<span class="c-kw">D</span> — Dependency Inversion   <span class="c-cm">dependa de abstrações, não implementações</span>

<span class="c-cm">// S — Single Responsibility</span>
<span class="c-cm">// ❌ Uma classe fazendo tudo</span>
<span class="c-kw">class</span> Posto {
  <span class="c-fn">calcularEstoque</span>() { ... }
  <span class="c-fn">enviarEmailRelatorio</span>() { ... }  <span class="c-cm">// responsabilidade diferente!</span>
  <span class="c-fn">salvarNoBanco</span>() { ... }         <span class="c-cm">// responsabilidade diferente!</span>
}

<span class="c-cm">// ✅ Cada classe tem uma responsabilidade</span>
<span class="c-kw">class</span> PostoService { <span class="c-fn">calcularEstoque</span>() { ... } }
<span class="c-kw">class</span> EmailService  { <span class="c-fn">enviarRelatorio</span>() { ... } }
<span class="c-kw">class</span> PostoRepository { <span class="c-fn">salvar</span>() { ... } }</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// O — Open/Closed</span>
<span class="c-cm">// ❌ Modificar para cada novo tipo</span>
<span class="c-kw">function</span> <span class="c-fn">calcularPreco</span>(tipo, litros) {
  <span class="c-kw">if</span> (tipo === <span class="c-str">'gasolina'</span>) <span class="c-kw">return</span> litros * <span class="c-num">5.89</span>
  <span class="c-kw">if</span> (tipo === <span class="c-str">'etanol'</span>) <span class="c-kw">return</span> litros * <span class="c-num">3.99</span>
  <span class="c-cm">// Toda vez que tiver combustível novo, edita aqui</span>
}

<span class="c-cm">// ✅ Extensível sem modificar o existente</span>
<span class="c-kw">class</span> Combustivel {
  <span class="c-fn">calcularPreco</span>(litros) { <span class="c-kw">return</span> litros * <span class="c-kw">this</span>.preco }
}
<span class="c-kw">class</span> Gasolina <span class="c-kw">extends</span> Combustivel { preco = <span class="c-num">5.89</span> }
<span class="c-kw">class</span> Etanol   <span class="c-kw">extends</span> Combustivel { preco = <span class="c-num">3.99</span> }
<span class="c-kw">class</span> Diesel   <span class="c-kw">extends</span> Combustivel { preco = <span class="c-num">6.29</span> }</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'O que diz o princípio S do SOLID?', opcoes: ['Classes devem ser estáticas', 'Uma classe deve ter apenas uma razão para mudar (uma responsabilidade)', 'Sempre use subclasses', 'Singletons são obrigatórios'], correta: 1, explicacao: 'Single Responsibility: uma classe deve ter apenas uma responsabilidade. Se ela precisa mudar por dois motivos diferentes, está fazendo coisas demais — separe em duas classes.' },
      { tipo: 'multipla', pergunta: 'O que significa "aberto para extensão, fechado para modificação" (Open/Closed)?', opcoes: ['O código não pode ser modificado jamais', 'Adicione funcionalidades novas criando código novo, sem alterar o código que já funciona', 'Use sempre herança', 'Métodos devem ser públicos'], correta: 1, explicacao: 'OCP: ao precisar de nova funcionalidade, estenda (nova classe, novo método) em vez de modificar código existente. Código modificado pode quebrar o que já funcionava.' },
      { tipo: 'completar', pergunta: 'SOLID é um acrônimo — complete a letra D:', codigo: '// S-O-L-I-___: Dependency Inversion Principle', resposta: 'D', explicacao: 'D = Dependency Inversion: módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações (interfaces). Facilita testes e troca de implementações.' }
    ]
  },

  {
    id: 'l3', titulo: 'Design Patterns — padrões de projeto', xp: 140,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p><strong>Design Patterns</strong> são soluções reutilizáveis para problemas comuns de software.</p>
      <div class="code-example"><span class="c-cm">// SINGLETON — garante uma única instância</span>
<span class="c-kw">class</span> ConfigApp {
  <span class="c-kw">static</span> instancia = <span class="c-kw">null</span>
  <span class="c-kw">static</span> <span class="c-fn">getInstance</span>() {
    <span class="c-kw">if</span> (!ConfigApp.instancia)
      ConfigApp.instancia = <span class="c-kw">new</span> ConfigApp()
    <span class="c-kw">return</span> ConfigApp.instancia
  }
}

<span class="c-cm">// OBSERVER — notifica múltiplos observadores</span>
<span class="c-kw">class</span> EventEmitter {
  listeners = {}
  <span class="c-fn">on</span>(evento, fn) { (this.listeners[evento] ??= []).<span class="c-fn">push</span>(fn) }
  <span class="c-fn">emit</span>(evento, dados) { this.listeners[evento]?.<span class="c-fn">forEach</span>(fn => <span class="c-fn">fn</span>(dados)) }
}

<span class="c-cm">// FACTORY — cria objetos sem expor a lógica</span>
<span class="c-kw">function</span> <span class="c-fn">criarCombustivel</span>(tipo) {
  <span class="c-kw">const</span> tipos = { gasolina: Gasolina, etanol: Etanol, diesel: Diesel }
  <span class="c-kw">return</span> <span class="c-kw">new</span> tipos[tipo]()
}</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// REPOSITORY — abstrai o acesso a dados</span>
<span class="c-kw">class</span> PostoRepository {
  <span class="c-kw">async</span> <span class="c-fn">findById</span>(id) {
    <span class="c-kw">return</span> db.<span class="c-fn">query</span>(<span class="c-str">'SELECT * FROM postos WHERE id=$1'</span>, [id])
  }
  <span class="c-kw">async</span> <span class="c-fn">save</span>(posto) {
    <span class="c-kw">return</span> db.<span class="c-fn">query</span>(<span class="c-str">'INSERT INTO postos...'</span>, [...])
  }
}

<span class="c-cm">// Service usa Repository — não sabe do banco</span>
<span class="c-kw">class</span> PostoService {
  constructor(<span class="c-kw">private</span> repo: PostoRepository) {}
  <span class="c-kw">async</span> <span class="c-fn">obterPosto</span>(id: <span class="c-kw">number</span>) {
    <span class="c-kw">return</span> <span class="c-kw">this</span>.repo.<span class="c-fn">findById</span>(id)
  }
}</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'Para que serve o padrão Singleton?', opcoes: ['Para criar múltiplas instâncias', 'Para garantir que uma classe tenha apenas uma instância em todo o app', 'Para herança múltipla', 'Para logging'], correta: 1, explicacao: 'Singleton garante uma única instância — útil para conexão de banco, configurações globais, cache. Em Node.js o require/import já faz isso naturalmente para módulos.' },
      { tipo: 'multipla', pergunta: 'O que o padrão Observer faz?', opcoes: ['Observa erros no código', 'Permite que objetos se inscrevam para receber notificações de eventos', 'Cria cópias de objetos', 'Valida dados de entrada'], correta: 1, explicacao: 'Observer (pub/sub): objetos se inscrevem em eventos. Quando o evento ocorre, todos os inscritos são notificados. Base de sistemas de eventos, streams e frameworks reativos.' },
      { tipo: 'completar', pergunta: 'O padrão ___ abstrai o acesso a dados do banco, isolando a lógica de negócio:', codigo: '// Padrão ___ separa acesso a dados da lógica de negócio', resposta: 'Repository', explicacao: 'Repository encapsula a lógica de acesso a dados. A camada de serviço não sabe se os dados vêm de PostgreSQL, MongoDB ou uma API. Facilita testes (você pode mockar o repositório).' }
    ]
  },

  {
    id: 'l4', titulo: 'Git avançado — branching e rebase', xp: 130,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>Git além do básico — fluxos de trabalho em equipe.</p>
      <div class="code-example"><span class="c-cm"># Fluxo de trabalho em equipe</span>
git checkout -b feature/nova-funcionalidade  <span class="c-cm"># criar branch</span>
git add -p              <span class="c-cm"># adicionar por partes (interativo)</span>
git commit -m "feat: adicionar medição de tanque"
git push origin feature/nova-funcionalidade

<span class="c-cm"># Rebase — reaplica commits em cima de outro branch</span>
git fetch origin
git rebase origin/main  <span class="c-cm"># histórico linear, sem merge commits</span>

<span class="c-cm"># Cherry-pick — pegar commit específico de outro branch</span>
git cherry-pick abc1234

<span class="c-cm"># Bisect — achar qual commit causou um bug</span>
git bisect start
git bisect bad          <span class="c-cm"># commit atual tem o bug</span>
git bisect good v1.0    <span class="c-cm"># versão sem bug</span>
<span class="c-cm"># Git testa commits até achar o culpado</span></div>`,
    exemplo: `<div class="code-example"><span class="c-cm"># Conventional Commits — padrão de mensagens</span>
feat:     nova funcionalidade
fix:      correção de bug
docs:     documentação
style:    formatação (sem lógica)
refactor: refatoração
test:     testes
chore:    tarefas (build, deps)

<span class="c-cm"># Exemplos:</span>
git commit -m <span class="c-str">"feat: adicionar endpoint POST /medicoes"</span>
git commit -m <span class="c-str">"fix: corrigir cálculo de arqueação no tanque 3"</span>
git commit -m <span class="c-str">"refactor: extrair validação para PostoValidator"</span>

<span class="c-cm"># .gitignore essencial</span>
node_modules/
.env
*.log
dist/
.DS_Store</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'Qual a diferença entre git merge e git rebase?', opcoes: ['São iguais', 'merge cria um commit de merge. rebase reaplica commits criando histórico linear', 'rebase é mais seguro', 'merge só funciona no main'], correta: 1, explicacao: 'Merge preserva o histórico exato (com ramificações). Rebase reaplica commits criando histórico linear como se sempre tivessem sido desenvolvidos em cima do branch atual. Rebase é mais limpo mas reescreve histórico.' },
      { tipo: 'multipla', pergunta: 'O que é um Conventional Commit?', opcoes: ['Um commit feito de forma tradicional', 'Um padrão de mensagem de commit com tipo, escopo e descrição', 'Um commit assinado digitalmente', 'O primeiro commit de um repositório'], correta: 1, explicacao: 'Conventional Commits: "tipo(escopo): descrição". Permite gerar changelogs automaticamente, fazer releases semânticos e comunicar claramente o que cada commit faz.' },
      { tipo: 'completar', pergunta: 'Complete o tipo de commit para uma nova funcionalidade:', codigo: '___(escopo): descrição da funcionalidade', resposta: 'feat', explicacao: 'feat = feature (funcionalidade nova). É o tipo mais comum junto com fix. Commits feat incrementam a versão minor (1.0.0 → 1.1.0) e fix incrementam o patch (1.0.0 → 1.0.1) no versionamento semântico.' }
    ]
  },

  {
    id: 'l5', titulo: 'CI/CD — integração e entrega contínua', xp: 140,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p><strong>CI/CD</strong> automatiza testes, builds e deploys — seu código vai para produção com segurança e rapidez.</p>
      <div class="code-example"><span class="c-cm"># GitHub Actions — .github/workflows/ci.yml</span>
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  teste:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npm run build

  deploy:
    needs: teste       <span class="c-cm"># só deploia se os testes passarem</span>
    runs-on: ubuntu-latest
    steps:
      - run: npm run deploy</div>`,
    exemplo: `<div class="code-example"><span class="c-cm"># Pipeline completo</span>
<span class="c-cm"># 1. Push → trigger automático</span>
<span class="c-cm"># 2. Instalar dependências</span>
<span class="c-cm"># 3. Rodar lint (qualidade de código)</span>
<span class="c-cm"># 4. Rodar testes unitários</span>
<span class="c-cm"># 5. Build da aplicação</span>
<span class="c-cm"># 6. Testes de integração</span>
<span class="c-cm"># 7. Deploy automático (se tudo passou)</span>

<span class="c-cm"># Variáveis secretas no GitHub Actions</span>
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
  JWT_SECRET: ${{ secrets.JWT_SECRET }}

<span class="c-cm"># Estratégia de branches</span>
main     → produção (deploy automático)
develop  → homologação
feature/* → desenvolvimento</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'O que CI significa em CI/CD?', opcoes: ['Continuous Improvement', 'Continuous Integration — integrar e testar código frequentemente', 'Code Inspection', 'Container Infrastructure'], correta: 1, explicacao: 'CI (Continuous Integration) = integrar o código de todos os devs frequentemente com testes automáticos. CD = Continuous Delivery/Deployment = entregar/deployar automaticamente quando os testes passam.' },
      { tipo: 'multipla', pergunta: 'Por que usar "needs: teste" antes do job de deploy?', opcoes: ['É obrigatório pela sintaxe', 'Para garantir que o deploy só acontece se os testes passaram', 'Para economizar recursos', 'Para paralelizar a execução'], correta: 1, explicacao: '"needs: job_anterior" cria dependência entre jobs. O deploy só executa se o job "teste" tiver sucesso. Sem isso, código com falha poderia ir para produção.' },
      { tipo: 'completar', pergunta: 'Complete o trigger para executar a pipeline ao dar push no main:', codigo: 'on:\n  ___:\n    branches: [main]', resposta: 'push', explicacao: 'on: push: branches: [main] dispara a pipeline quando há push na branch main. Outros triggers: pull_request, schedule (cron), workflow_dispatch (manual).' }
    ]
  },

  {
    id: 'l6', titulo: 'Docker — containerização', xp: 150,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p><strong>Docker</strong> empacota seu app e todas as suas dependências em um container isolado.
      "Funciona na minha máquina" deixa de existir.</p>
      <div class="code-example"><span class="c-cm"># Dockerfile — receita do container</span>
FROM node:20-alpine        <span class="c-cm"># imagem base</span>
WORKDIR /app              <span class="c-cm"># diretório de trabalho</span>

COPY package*.json ./     <span class="c-cm"># copiar package.json primeiro</span>
RUN npm ci                <span class="c-cm"># instalar dependências</span>

COPY . .                  <span class="c-cm"># copiar código</span>
RUN npm run build         <span class="c-cm"># build</span>

EXPOSE 3000               <span class="c-cm"># porta que o app usa</span>
CMD ["node", "dist/index.js"]  <span class="c-cm"># comando ao iniciar</span>

<span class="c-cm"># Comandos principais</span>
docker build -t meu-app .     <span class="c-cm"># criar imagem</span>
docker run -p 3000:3000 meu-app <span class="c-cm"># rodar container</span>
docker ps                      <span class="c-cm"># containers rodando</span></div>`,
    exemplo: `<div class="code-example"><span class="c-cm"># docker-compose.yml — orquestrar múltiplos serviços</span>
version: '3.8'
services:
  api:
    build: .
    ports: ['3000:3000']
    environment:
      DATABASE_URL: postgres://user:senha@db/appdb
    depends_on: [db]

  db:
    image: postgres:16
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: appdb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:

<span class="c-cm"># docker-compose up -d → sobe tudo em background</span></div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'Qual o benefício principal do Docker?', opcoes: ['Deixar o app mais rápido', 'Garantir que o app roda igualmente em qualquer ambiente (dev, staging, produção)', 'Substituir o Node.js', 'Fazer backup automático'], correta: 1, explicacao: 'Docker empacota o app com todas as suas dependências — a mesma imagem roda no laptop do dev, no CI e no servidor de produção. Elimina "funciona na minha máquina".' },
      { tipo: 'multipla', pergunta: 'O que é um Dockerfile?', opcoes: ['Documentação do projeto', 'Receita de instruções para criar uma imagem Docker', 'Arquivo de configuração do docker-compose', 'Script de deploy'], correta: 1, explicacao: 'Dockerfile é um arquivo de texto com instruções para construir uma imagem Docker. Cada instrução cria uma camada (layer) — o Docker as cacheia para builds mais rápidos.' },
      { tipo: 'completar', pergunta: 'Complete o comando para rodar o container mapeando a porta 3000:', codigo: 'docker run -p ___:3000 meu-app', resposta: '3000', explicacao: 'docker run -p HOST:CONTAINER mapeia porta do host para o container. -p 3000:3000 = porta 3000 do host vai para porta 3000 do container. Acesse em localhost:3000.' }
    ]
  },

  {
    id: 'l7', titulo: 'Testes automatizados', xp: 140,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>Testes automatizados garantem que o código funciona e continua funcionando após mudanças.</p>
      <div class="code-example"><span class="c-cm">// Jest — framework de testes JavaScript</span>
<span class="c-cm">// npm install --save-dev jest</span>

<span class="c-cm">// Funções a testar</span>
<span class="c-kw">function</span> <span class="c-fn">calcularEstoque</span>(tanque, vendas) {
  <span class="c-kw">return</span> tanque - vendas
}

<span class="c-cm">// Arquivo de teste: calc.test.js</span>
<span class="c-fn">describe</span>(<span class="c-str">'calcularEstoque'</span>, () => {
  <span class="c-fn">test</span>(<span class="c-str">'retorna a diferença entre tanque e vendas'</span>, () => {
    <span class="c-fn">expect</span>(<span class="c-fn">calcularEstoque</span>(<span class="c-num">15000</span>, <span class="c-num">12500</span>)).<span class="c-fn">toBe</span>(<span class="c-num">2500</span>)
  })

  <span class="c-fn">test</span>(<span class="c-str">'retorna 0 quando tudo foi vendido'</span>, () => {
    <span class="c-fn">expect</span>(<span class="c-fn">calcularEstoque</span>(<span class="c-num">1000</span>, <span class="c-num">1000</span>)).<span class="c-fn">toBe</span>(<span class="c-num">0</span>)
  })
})</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// Tipos de teste</span>
<span class="c-cm">// Unitário — testa uma função isolada</span>
<span class="c-fn">test</span>(<span class="c-str">'somar funciona'</span>, () => {
  <span class="c-fn">expect</span>(<span class="c-fn">somar</span>(<span class="c-num">2</span>, <span class="c-num">3</span>)).<span class="c-fn">toBe</span>(<span class="c-num">5</span>)
})

<span class="c-cm">// Integração — testa componentes juntos</span>
<span class="c-fn">test</span>(<span class="c-str">'POST /medicoes salva no banco'</span>, <span class="c-kw">async</span> () => {
  <span class="c-kw">const</span> resp = <span class="c-kw">await</span> <span class="c-fn">request</span>(app).<span class="c-fn">post</span>(<span class="c-str">'/medicoes'</span>)
    .<span class="c-fn">send</span>({ posto_id: <span class="c-num">1</span>, litros: <span class="c-num">5000</span> })
  <span class="c-fn">expect</span>(resp.status).<span class="c-fn">toBe</span>(<span class="c-num">201</span>)
  <span class="c-fn">expect</span>(resp.body.id).<span class="c-fn">toBeDefined</span>()
})

<span class="c-cm">// Matchers comuns:</span>
<span class="c-fn">toBe</span>()       <span class="c-cm">// igualdade estrita</span>
<span class="c-fn">toEqual</span>()    <span class="c-cm">// igualdade profunda (objetos)</span>
<span class="c-fn">toBeTruthy</span>() <span class="c-cm">// valor truthy</span>
<span class="c-fn">toThrow</span>()    <span class="c-cm">// lança exceção</span></div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'O que é um teste unitário?', opcoes: ['Testa o sistema inteiro', 'Testa uma unidade isolada (função, método) sem dependências externas', 'Testa a interface do usuário', 'Testa a performance'], correta: 1, explicacao: 'Teste unitário isola e testa uma única função ou método. Dependências (banco, API) são "mockadas". Unitários são rápidos, precisos e fáceis de debugar.' },
      { tipo: 'multipla', pergunta: 'Qual a função do expect() no Jest?', opcoes: ['Executar o teste', 'Define o valor a ser testado e encadeia matchers que verificam condições', 'Importar módulos de teste', 'Criar mocks automáticos'], correta: 1, explicacao: 'expect(valor).matcher() é a sintaxe de asserção do Jest. expect(2+2).toBe(4) verifica que 2+2 é 4. Se a condição falhar, o teste falha com mensagem descritiva.' },
      { tipo: 'completar', pergunta: 'Complete o matcher para verificar se o valor é exatamente 42:', codigo: 'expect(resultado).___(42)', resposta: 'toBe', explicacao: 'toBe usa Object.is para comparação estrita — ideal para primitivos (números, strings, booleans). Para objetos e arrays, use toEqual que faz comparação profunda.' }
    ]
  },

  {
    id: 'l8', titulo: 'Arquitetura em camadas', xp: 140,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>Separar o código em camadas com responsabilidades claras facilita manutenção e testes.</p>
      <div class="code-example"><span class="c-cm">// Arquitetura em 3 camadas</span>

<span class="c-cm">// 1. ROUTES (Controller) — recebe requisição, chama Service</span>
router.<span class="c-fn">post</span>(<span class="c-str">'/medicoes'</span>, <span class="c-kw">async</span> (req, res) => {
  <span class="c-kw">const</span> resultado = <span class="c-kw">await</span> MedicaoService.<span class="c-fn">registrar</span>(req.body)
  res.<span class="c-fn">status</span>(<span class="c-num">201</span>).<span class="c-fn">json</span>(resultado)
})

<span class="c-cm">// 2. SERVICE (Business Logic) — regras de negócio</span>
<span class="c-kw">class</span> MedicaoService {
  <span class="c-kw">static async</span> <span class="c-fn">registrar</span>(dados) {
    <span class="c-fn">validarDados</span>(dados)  <span class="c-cm">// regra de negócio</span>
    <span class="c-kw">const</span> litros = <span class="c-fn">calcularLitros</span>(dados.cm, dados.posto_id)
    <span class="c-kw">return</span> MedicaoRepository.<span class="c-fn">save</span>({ ...dados, litros })
  }
}

<span class="c-cm">// 3. REPOSITORY — acesso ao banco</span>
<span class="c-kw">class</span> MedicaoRepository {
  <span class="c-kw">static async</span> <span class="c-fn">save</span>(medicao) {
    <span class="c-kw">return</span> db.<span class="c-fn">query</span>(<span class="c-str">'INSERT INTO medicoes...'</span>)
  }
}</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// Estrutura de pastas</span>
src/
  routes/
    postos.routes.js
    medicoes.routes.js
  services/
    PostoService.js
    MedicaoService.js
  repositories/
    PostoRepository.js
    MedicaoRepository.js
  models/
    Posto.js
  middlewares/
    auth.middleware.js
    validation.middleware.js
  utils/
    arqueacao.js
  app.js
  server.js</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'Por que separar routes, services e repositories em camadas?', opcoes: ['Para usar mais arquivos', 'Cada camada tem uma responsabilidade — facilita testes, manutenção e reuso', 'É obrigatório pelo Node.js', 'Para usar mais RAM'], correta: 1, explicacao: 'Separação de responsabilidades: Route = recebe req/res. Service = regras de negócio. Repository = banco de dados. Assim você pode testar o Service sem banco real, e trocar o banco sem mexer na lógica.' },
      { tipo: 'multipla', pergunta: 'Onde ficam as regras de negócio na arquitetura em camadas?', opcoes: ['Nas routes', 'Nos repositories', 'Nos services', 'No banco de dados'], correta: 2, explicacao: 'Service Layer = regras de negócio. Validações, cálculos, orquestração de chamadas. Routes só chamam services, repositories só acessam banco. Services contêm a lógica que torna seu app único.' },
      { tipo: 'completar', pergunta: 'A camada que acessa o banco de dados diretamente se chama:', codigo: '// Camada de acesso a dados: ___', resposta: 'Repository', explicacao: 'Repository Pattern: a camada Repository abstrai todo acesso ao banco. Services chamam repositories, não o banco diretamente. Trocar PostgreSQL por MongoDB = trocar apenas os repositories.' }
    ]
  },

  {
    id: 'l9', titulo: 'Cloud — AWS e deploy em produção', xp: 150,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>A nuvem é onde apps modernos rodam. AWS é a maior plataforma cloud — mas comece pelo Railway/Render para simplicidade.</p>
      <div class="code-example"><span class="c-cm">// Serviços AWS essenciais para devs</span>
EC2      <span class="c-cm">→ servidor virtual (VPS)</span>
RDS      <span class="c-cm">→ banco de dados gerenciado</span>
S3       <span class="c-cm">→ armazenamento de arquivos</span>
Lambda   <span class="c-cm">→ funções serverless</span>
ECS/EKS  <span class="c-cm">→ containers gerenciados</span>
CloudFront <span class="c-cm">→ CDN global</span>
Route 53 <span class="c-cm">→ DNS</span>
IAM      <span class="c-cm">→ permissões e usuários</span>

<span class="c-cm">// Alternativas mais simples para começar:</span>
Railway  <span class="c-cm">→ deploy Node.js/Python/Docker (já usa!)</span>
Render   <span class="c-cm">→ similar ao Railway</span>
Vercel   <span class="c-cm">→ frontends e serverless</span>
Supabase <span class="c-cm">→ PostgreSQL gerenciado (já usa!)</span></div>`,
    exemplo: `<div class="code-example"><span class="c-cm"># Variáveis de ambiente no Railway</span>
DATABASE_URL    = postgresql://...
JWT_SECRET      = ...
NODE_ENV        = production
PORT            = 3000

<span class="c-cm"># railway.json ou Procfile</span>
web: node dist/server.js

<span class="c-cm"># Boas práticas de produção</span>
- Nunca commitar .env
- Usar HTTPS (obrigatório)
- Rate limiting (limitar requisições)
- Health check endpoint (/health)
- Logs estruturados (JSON)
- Monitoramento (Sentry, Grafana)
- Backups do banco de dados</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'Qual serviço AWS você usaria para hospedar arquivos estáticos (imagens, PDFs)?', opcoes: ['EC2', 'Lambda', 'S3', 'RDS'], correta: 2, explicacao: 'S3 (Simple Storage Service) é o padrão para armazenar arquivos. Barato, durável (99.999999999%), pode servir arquivos diretamente ou via CloudFront CDN.' },
      { tipo: 'multipla', pergunta: 'O que é serverless (como AWS Lambda)?', opcoes: ['Aplicação sem banco de dados', 'Funções que executam sob demanda sem gerenciar servidores — você paga por execução', 'API sem autenticação', 'Frontend sem backend'], correta: 1, explicacao: 'Serverless: você só escreve a função, a nuvem gerencia a infraestrutura. Escala automaticamente, você paga por milissegundo de execução. Ideal para tarefas esporádicas e APIs com tráfego variável.' },
      { tipo: 'completar', pergunta: 'Complete o endpoint de health check para monitoramento:', codigo: 'app.get(\'/___ \', (req, res) => res.json({ status: \'ok\' }))', resposta: 'health', explicacao: '/health é o endpoint padrão que load balancers e sistemas de monitoramento chamam para verificar se o app está funcionando. Retorna 200 se OK, 500 se com problema.' }
    ]
  },

  {
    id: 'l10', titulo: 'Code Review — revisão de código', xp: 130,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p><strong>Code Review</strong> é quando outro dev revisa seu código antes de ir para produção.
      É a prática mais eficaz para encontrar bugs e melhorar a qualidade.</p>
      <div class="code-example"><span class="c-cm">// Pull Request — como escrever bem</span>
<span class="c-cm">// Título: tipo(escopo): o que faz</span>
feat(medicoes): adicionar endpoint POST /medicoes

<span class="c-cm">// Descrição do PR</span>
## O que muda
- Endpoint POST /medicoes para registrar medição
- Validação de campo cm (0-999)
- Conversão automática cm → litros via arqueação

## Como testar
1. POST /medicoes com { posto_id: 1, cm: 85 }
2. Verificar retorno com litros calculados

## Checklist
- [x] Testes escritos
- [x] .env atualizado no README
- [x] Sem console.log() esquecidos</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// Comentários de code review construtivos</span>

<span class="c-cm">// ❌ Ruim — ataque pessoal</span>
<span class="c-cm">// "Isso está errado, você deveria saber melhor"</span>

<span class="c-cm">// ✅ Bom — sugestão com motivo</span>
<span class="c-cm">// "Suggestion: extrair para uma constante nomeada</span>
<span class="c-cm">//  melhora legibilidade. O que acha de:</span>
<span class="c-cm">//  const LIMITE_CM = 999?"</span>

<span class="c-cm">// Prefixos úteis nos comentários</span>
nit:        <span class="c-cm">// detalhe menor, não bloqueante</span>
blocking:   <span class="c-cm">// precisa corrigir antes do merge</span>
suggestion: <span class="c-cm">// sugestão, não obrigatório</span>
question:   <span class="c-cm">// dúvida, precisa de esclarecimento</span>
praise:     <span class="c-cm">// elogio (use mais!)</span></div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'Qual o objetivo principal do code review?', opcoes: ['Mostrar que o revisor sabe mais', 'Encontrar bugs, melhorar qualidade e compartilhar conhecimento entre o time', 'Atrasar o desenvolvimento', 'Substituir testes automatizados'], correta: 1, explicacao: 'Code review encontra bugs antes da produção, dissemina conhecimento, mantém consistência do código e serve como mentoria. É a prática com melhor custo-benefício em engenharia de software.' },
      { tipo: 'multipla', pergunta: 'O que significa um comentário "nit:" em code review?', opcoes: ['Erro crítico que bloqueia o merge', 'Detalhe menor não bloqueante — o autor pode ou não corrigir', 'Solicitação de nova feature', 'Bug encontrado'], correta: 1, explicacao: '"nit" (nitpick) = detalhe de formatação ou estilo que não bloqueia o merge. Usar esse prefixo é importante para o autor saber a prioridade: blocking (deve corrigir) vs nit (opcional).' },
      { tipo: 'completar', pergunta: 'Complete o prefixo para um comentário que DEVE ser corrigido antes do merge:', codigo: '___: Esta validação pode causar SQL injection — use parâmetros preparados', resposta: 'blocking', explicacao: '"blocking:" indica que o problema deve ser corrigido antes do merge. Reservado para bugs reais, problemas de segurança ou violações graves de boas práticas.' }
    ]
  },

  {
    id: 'l11', titulo: 'Monitoramento e observabilidade', xp: 140,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>Saber o que acontece com seu app em produção é essencial. Os 3 pilares da observabilidade:</p>
      <div class="code-example"><span class="c-cm">// 1. LOGS — o que aconteceu</span>
<span class="c-cm">// Estruturado em JSON para ser parseável</span>
<span class="c-fn">console</span>.<span class="c-fn">log</span>(JSON.<span class="c-fn">stringify</span>({
  level: <span class="c-str">'info'</span>,
  msg: <span class="c-str">'Medição registrada'</span>,
  posto_id: <span class="c-num">3</span>,
  litros: <span class="c-num">12750</span>,
  timestamp: <span class="c-kw">new</span> Date().<span class="c-fn">toISOString</span>()
}))

<span class="c-cm">// 2. MÉTRICAS — números ao longo do tempo</span>
<span class="c-cm">// Requests por segundo, latência p95, taxa de erro</span>

<span class="c-cm">// 3. TRACES — jornada de uma requisição</span>
<span class="c-cm">// Sentry, DataDog, Jaeger</span>

<span class="c-cm">// Health check endpoint</span>
app.<span class="c-fn">get</span>(<span class="c-str">'/health'</span>, <span class="c-kw">async</span> (req, res) => {
  <span class="c-kw">const</span> dbOk = <span class="c-kw">await</span> <span class="c-fn">checkDb</span>()
  res.<span class="c-fn">status</span>(dbOk ? <span class="c-num">200</span> : <span class="c-num">503</span>).<span class="c-fn">json</span>({ db: dbOk })
})</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// Sentry — captura de erros em produção</span>
<span class="c-kw">const</span> Sentry = <span class="c-fn">require</span>(<span class="c-str">'@sentry/node'</span>)
Sentry.<span class="c-fn">init</span>({ dsn: process.env.SENTRY_DSN })

<span class="c-cm">// Captura erros não tratados</span>
app.<span class="c-fn">use</span>(Sentry.<span class="c-fn">Handlers.errorHandler</span>())

<span class="c-cm">// Alertas por threshold</span>
<span class="c-cm">// taxa de erro > 1% → Slack alert</span>
<span class="c-cm">// latência p95 > 500ms → PagerDuty</span>
<span class="c-cm">// memória > 80% → escalar horizontalmente</span></div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'Por que usar logs estruturados em JSON em vez de strings?', opcoes: ['JSON ocupa menos espaço', 'Permite filtrar, agregar e alertar automaticamente em ferramentas como Grafana e Datadog', 'É mais rápido de escrever', 'É obrigatório pelo Node.js'], correta: 1, explicacao: 'Logs JSON são parseáveis por ferramentas. Você consegue filtrar por posto_id=3, calcular média de latência, criar dashboards e alertas automáticos. Logs como strings são difíceis de analisar em escala.' },
      { tipo: 'multipla', pergunta: 'O que é o p95 em métricas de latência?', opcoes: ['95% das requisições com erro', '95% das requisições são respondidas abaixo desse tempo', 'Performance score de 95', 'Percentual de uptime'], correta: 1, explicacao: 'p95 (percentil 95) = 95% das requisições são mais rápidas que esse valor. p95 = 500ms significa que 5% das requisições levam mais de 500ms. Mais informativo que a média, que mascara outliers.' },
      { tipo: 'completar', pergunta: 'Complete o status HTTP para serviço indisponível:', codigo: 'res.status(___).json({ erro: "Serviço indisponível" })', resposta: '503', explicacao: '503 Service Unavailable = servidor está temporariamente incapaz de processar (banco offline, sobrecarga). Load balancers usam esse status para parar de enviar tráfego para uma instância com problema.' }
    ]
  },

  {
    id: 'l12', titulo: 'Segurança em APIs', xp: 150,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>Segurança não é opcional — é parte da arquitetura desde o início.</p>
      <div class="code-example"><span class="c-cm">// 1. SQL INJECTION — use parâmetros preparados</span>
<span class="c-cm">// ❌ Vulnerável</span>
db.<span class="c-fn">query</span>(<span class="c-str">\`SELECT * FROM users WHERE email = '\${email}'\`</span>)

<span class="c-cm">// ✅ Seguro</span>
db.<span class="c-fn">query</span>(<span class="c-str">'SELECT * FROM users WHERE email = $1'</span>, [email])

<span class="c-cm">// 2. RATE LIMITING — limitar requisições por IP</span>
<span class="c-kw">const</span> rateLimit = <span class="c-fn">require</span>(<span class="c-str">'express-rate-limit'</span>)
app.<span class="c-fn">use</span>(<span class="c-fn">rateLimit</span>({ windowMs: <span class="c-num">15</span>*<span class="c-num">60</span>*<span class="c-num">1000</span>, max: <span class="c-num">100</span> }))

<span class="c-cm">// 3. CORS restrito em produção</span>
app.<span class="c-fn">use</span>(<span class="c-fn">cors</span>({ origin: <span class="c-str">'https://meusite.com'</span> }))

<span class="c-cm">// 4. HELMET — headers de segurança</span>
app.<span class="c-fn">use</span>(<span class="c-fn">helmet</span>())</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// Validação de entrada com Joi/Zod</span>
<span class="c-kw">const</span> { z } = <span class="c-fn">require</span>(<span class="c-str">'zod'</span>)

<span class="c-kw">const</span> MedicaoSchema = z.<span class="c-fn">object</span>({
  posto_id: z.<span class="c-fn">number</span>().<span class="c-fn">int</span>().<span class="c-fn">positive</span>(),
  cm: z.<span class="c-fn">number</span>().<span class="c-fn">min</span>(<span class="c-num">0</span>).<span class="c-fn">max</span>(<span class="c-num">999</span>),
  combustivel: z.<span class="c-fn">enum</span>([<span class="c-str">'gasolina'</span>, <span class="c-str">'etanol'</span>, <span class="c-str">'diesel'</span>])
})

app.<span class="c-fn">post</span>(<span class="c-str">'/medicoes'</span>, (req, res) => {
  <span class="c-kw">const</span> result = MedicaoSchema.<span class="c-fn">safeParse</span>(req.body)
  <span class="c-kw">if</span> (!result.success)
    <span class="c-kw">return</span> res.<span class="c-fn">status</span>(<span class="c-num">400</span>).<span class="c-fn">json</span>(result.error)
  <span class="c-cm">// dados validados em result.data</span>
})</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'O que é SQL Injection e como prevenir?', opcoes: ['Inserção de registros duplicados — use UNIQUE', 'Injeção de código SQL malicioso via input — use parâmetros preparados ($1, $2)', 'Erro de sintaxe SQL — valide a query', 'Timeout de conexão — use connection pool'], correta: 1, explicacao: 'SQL Injection: atacante digita código SQL no campo (ex: email = "x\' OR 1=1 --"). Com query concatenada, ele acessa tudo. Com parâmetros preparados ($1), o input é sempre tratado como dado, nunca como código.' },
      { tipo: 'multipla', pergunta: 'Para que serve o rate limiting?', opcoes: ['Para limitar o tamanho dos arquivos', 'Para limitar o número de requisições por IP em um período, prevenindo abuso e DDoS', 'Para limitar o banco de dados', 'Para comprimir respostas'], correta: 1, explicacao: 'Rate limiting previne: ataques de força bruta em login, scraping excessivo, DDoS. Ex: máximo 100 requisições por IP em 15 minutos. Express-rate-limit é simples de configurar.' },
      { tipo: 'completar', pergunta: 'Complete para usar parâmetros preparados (seguro contra SQL Injection):', codigo: 'db.query(\'SELECT * FROM users WHERE id = ___\', [userId])', resposta: '$1', explicacao: '$1, $2, $3 são placeholders do PostgreSQL. O driver substitui $1 pelo primeiro valor do array [userId], tratando-o sempre como dado — nunca como código SQL.' }
    ]
  },

  {
    id: 'l13', titulo: 'Metodologias ágeis — Scrum e Kanban', xp: 120,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>Metodologias ágeis organizam o trabalho em equipe para entregar valor continuamente.</p>
      <div class="code-example"><span class="c-cm">// SCRUM — sprints de 1-4 semanas</span>
Papéis:
  Product Owner  → define o produto e prioridades
  Scrum Master   → remove impedimentos
  Dev Team       → desenvolve

Cerimônias:
  Sprint Planning  → planejar o sprint
  Daily Standup   → 15min diários:
    - O que fiz ontem?
    - O que farei hoje?
    - Algum bloqueio?
  Sprint Review    → demo do que foi feito
  Retrospectiva    → o que melhorar?

<span class="c-cm">// KANBAN — fluxo contínuo</span>
TODO → IN PROGRESS → REVIEW → DONE

<span class="c-cm">// WIP Limit — máximo de tarefas em andamento</span>
<span class="c-cm">// Reduz multitasking e aumenta foco</span></div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// User Story — como escrever</span>
Como [tipo de usuário]
Quero [funcionalidade]
Para que [benefício]

Exemplo:
Como gerente de posto
Quero ver o estoque atual de cada tanque
Para que eu possa pedir reposição antes de acabar

Critérios de aceite:
- Dashboard mostra litros e % de cada tanque
- Atualização em tempo real (< 5min delay)
- Alerta visual quando abaixo de 20%

<span class="c-cm">// Definition of Done</span>
- Código revisado por outro dev
- Testes escritos e passando
- Deploy em staging funcionando
- Product Owner aprovou</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'O que é um Daily Standup no Scrum?', opcoes: ['Uma reunião de 1 hora para discutir o projeto', 'Uma reunião rápida (15min) onde cada dev fala o que fez, fará e seus bloqueios', 'Uma revisão mensal de código', 'Uma apresentação do produto ao cliente'], correta: 1, explicacao: 'Daily Standup: 15 minutos, em pé (evita reunião longa), cada dev responde as 3 perguntas. Objetivo é sincronização rápida e identificação de bloqueios — não é um relatório para o gestor.' },
      { tipo: 'multipla', pergunta: 'Qual a diferença entre Scrum e Kanban?', opcoes: ['Não há diferença', 'Scrum usa sprints com tempo fixo. Kanban tem fluxo contínuo sem sprints', 'Kanban é para devs, Scrum para designers', 'Scrum é mais moderno'], correta: 1, explicacao: 'Scrum: trabalho organizado em sprints (1-4 semanas) com planejamento, cerimônias e papéis. Kanban: fluxo contínuo, sem sprints, limites de WIP. Kanban é mais simples para equipes pequenas.' },
      { tipo: 'completar', pergunta: 'Complete o Daily Standup: o que fiz, o que farei e...', codigo: '// Daily: o que fiz | o que farei | ___ bloqueios', resposta: 'quais', explicacao: 'A terceira pergunta do standup: "Tenho algum bloqueio?" — impedimentos que você não consegue resolver sozinho. O Scrum Master é responsável por remover esses bloqueios.' }
    ]
  },

  {
    id: 'l14', titulo: 'Performance e otimização', xp: 140,
    teoria: `<h3>🐺 Aro diz:</h3>
      <p>Apps lentos perdem usuários. Otimize onde realmente importa — meça antes de otimizar.</p>
      <div class="code-example"><span class="c-cm">// Backend — otimizações comuns</span>

<span class="c-cm">// 1. N+1 problem — o erro mais comum</span>
<span class="c-cm">// ❌ N+1: 1 query para postos + N para vendas</span>
<span class="c-kw">const</span> postos = <span class="c-kw">await</span> db.<span class="c-fn">query</span>(<span class="c-str">'SELECT * FROM postos'</span>)
<span class="c-kw">for</span> (<span class="c-kw">const</span> posto <span class="c-kw">of</span> postos) {
  posto.vendas = <span class="c-kw">await</span> db.<span class="c-fn">query</span>(<span class="c-str">'SELECT * FROM vendas WHERE posto_id=$1'</span>, [posto.id])
}

<span class="c-cm">// ✅ 1 query com JOIN</span>
<span class="c-kw">const</span> resultado = <span class="c-kw">await</span> db.<span class="c-fn">query</span>(<span class="c-str">`
  SELECT p.*, json_agg(v.*) as vendas
  FROM postos p
  LEFT JOIN vendas v ON v.posto_id = p.id
  GROUP BY p.id
`</span>)</div>`,
    exemplo: `<div class="code-example"><span class="c-cm">// 2. Índices — o maior ganho de performance em DB</span>
<span class="c-cm">-- Adicionar índice na coluna mais buscada</span>
CREATE INDEX CONCURRENTLY idx_vendas_posto_data
ON vendas(posto_id, data DESC)

<span class="c-cm">// 3. Cache com Redis</span>
<span class="c-kw">async function</span> <span class="c-fn">getRelatorio</span>(postoId) {
  <span class="c-kw">const</span> cached = <span class="c-kw">await</span> redis.<span class="c-fn">get</span>(<span class="c-str">\`relatorio:\${postoId}\`</span>)
  <span class="c-kw">if</span> (cached) <span class="c-kw">return</span> JSON.<span class="c-fn">parse</span>(cached)

  <span class="c-kw">const</span> dados = <span class="c-kw">await</span> db.<span class="c-fn">query</span>(<span class="c-str">/*query pesada*/</span>)
  <span class="c-kw">await</span> redis.<span class="c-fn">setEx</span>(<span class="c-str">\`relatorio:\${postoId}\`</span>, <span class="c-num">300</span>, JSON.<span class="c-fn">stringify</span>(dados))
  <span class="c-kw">return</span> dados
}

<span class="c-cm">// 4. Pagination — nunca busque tudo</span>
<span class="c-kw">const</span> { page = <span class="c-num">1</span>, limit = <span class="c-num">20</span> } = req.query
<span class="c-kw">const</span> offset = (page - <span class="c-num">1</span>) * limit</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: 'O que é o problema N+1 em banco de dados?', opcoes: ['Ter mais de N tabelas', '1 query inicial + N queries individuais para cada resultado — causa lentidão exponencial', 'N usuários simultâneos', 'N tentativas de conexão + 1 sucesso'], correta: 1, explicacao: 'N+1: buscar 100 postos (1 query) e depois buscar as vendas de cada um (100 queries = N). Total: 101 queries. Solução: JOIN que traz tudo em 1 query. É o erro de performance mais comum com ORMs.' },
      { tipo: 'multipla', pergunta: 'Por que usar paginação nas APIs?', opcoes: ['Para economizar memória do servidor', 'Para não sobrecarregar cliente e servidor com dados desnecessários — retornar só a página pedida', 'É obrigatório pelo protocolo HTTP', 'Para melhorar a segurança'], correta: 1, explicacao: 'Retornar 100.000 registros de uma vez consome muita memória, aumenta a latência e provavelmente o cliente nem vai usar todos. Paginação (page + limit) retorna apenas o que o usuário vê.' },
      { tipo: 'completar', pergunta: 'Complete para calcular o offset da paginação (página 3, 20 por página):', codigo: 'const offset = (___ - 1) * limit  // page=3, limit=20 → offset=40', resposta: 'page', explicacao: 'offset = (pagina - 1) × limite. Página 1 → offset 0. Página 2 → offset 20. Página 3 → offset 40. Use na query: LIMIT 20 OFFSET 40.' }
    ]
  },

  {
    id: 'l15', titulo: 'Mini-Prova — Engenharia de Software', xp: 300,
    tipo: 'prova',
    teoria: `<h3>🐺 Mini-Prova do Lobo!</h3>
      <p>Mínimo de <strong>70%</strong> para passar e desbloquear o Corvo!</p>`,
    exemplo: `<div class="code-example">// Você está pronto, dev! 🐺</div>`,
    exercicios: [
      { tipo: 'multipla', pergunta: '[PROVA] O que significa S no SOLID?', opcoes: ['Static classes', 'Single Responsibility — uma classe, uma responsabilidade', 'Singleton Pattern', 'Structured Programming'], correta: 1, explicacao: 'S = Single Responsibility. Uma classe deve ter apenas uma razão para mudar. Facilita testes, manutenção e reuso.' },
      { tipo: 'multipla', pergunta: '[PROVA] O que é o problema N+1 em banco de dados?', opcoes: ['Ter N+1 tabelas', '1 query + N queries individuais — use JOIN para resolver', 'N usuários + 1 admin', 'Índice faltando'], correta: 1, explicacao: 'N+1: buscar N itens e fazer 1 query extra por item. Resultado: N+1 queries quando 1 com JOIN bastaria.' },
      { tipo: 'multipla', pergunta: '[PROVA] Para que serve o CI/CD?', opcoes: ['Interface de usuário', 'Automatizar testes e deploy — garantindo qualidade contínua', 'Banco de dados', 'Segurança'], correta: 1, explicacao: 'CI/CD: integração contínua (testes automáticos) + entrega contínua (deploy automático quando testes passam).' },
      { tipo: 'multipla', pergunta: '[PROVA] O que um Dockerfile define?', opcoes: ['Variáveis de ambiente', 'Receita para criar uma imagem Docker do app', 'Configuração do banco', 'Rotas da API'], correta: 1, explicacao: 'Dockerfile = instrução por instrução para construir a imagem. FROM (base), RUN (comandos), COPY (arquivos), CMD (startup).' },
      { tipo: 'multipla', pergunta: '[PROVA] Como prevenir SQL Injection?', opcoes: ['Usar HTTPS', 'Usar parâmetros preparados ($1) em vez de concatenar strings', 'Validar apenas no frontend', 'Usar MongoDB'], correta: 1, explicacao: 'Parâmetros preparados ($1, $2) tratam o input como dado, nunca como código SQL. Concatenar strings na query é sempre vulnerável.' }
    ]
  }
]
