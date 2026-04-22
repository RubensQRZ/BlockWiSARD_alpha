/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview  BlockWiSARD specific pt-br strings.

 */
'use strict';

goog.provide('Blockly.Msg.pt');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq_ardublockly.json, and they show up in the translation
 * console.
 * Note the strings have to be surrounded by single quotation marks: ''
 */


/*  BlockWiSARD Blocks Verification Messages ****************/

Blockly.Msg.CREAT_WISARD_BLOCK_ALREADY_USED = 'O Programa pode ter apenas um Bloco Criar WiSARD';
Blockly.Msg.REQUIRE_CREATEWISARD_BLOCK = 'Para usar esse Bloco você precisa ANTES\n' + ' usar o Bloco "Criar WiSARD"';
Blockly.Msg.REQUIRE_CREATEWISARD_AND_GETPICTURE_BLOCKS = 'Para usar esse Bloco você precisa ANTES\n' + ' usar os Blocos "Criar WiSARD e\n' + '"Fotografar Imagem"';
Blockly.Msg.REQUIRE_PREVIOUS_CONDITIONAL_ClASSIFY_PICTURE_BLOCKS = 'Para usar esse Bloco você precisa ANTES\n' + ' usar os Blocos "Criar WiSARD", "Aprender",\n' +
                                                '"Fotografar Imagem" e  "Reconhecer Imagem Fotografada"';
Blockly.Msg.REQUIRE_PREVIOUS_ClASSIFY_PICTURE_BLOCKS = 'Para usar esse Bloco você precisa ANTES\n' + ' usar os Blocos "Criar WiSARD", "Aprender",\n' +
                                                'e "Fotografar Imagem"';

Blockly.Msg.ARDUINO_SERIAL_BLOCK_ALREADY_USED  = 'O Programa pode ter apenas um Bloco Porta Serial Arduino';
Blockly.Msg.ARDUINO_SERIAL_BLOCK_NOT_PRESENT = 'Para usar esse Bloco você precisa antes usar o bloco\n' +
                                                ' "Usar Porta Serial para Comunicação com Arduino"';
Blockly.Msg.ARDUINO_SERIAL_BLOCK_NOT_ALLOWED = 'Este Bloco pode ser usado apenas\n' +  ' no modo GPIO arduino';
Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE = 'Os blocos do Robot podem seru usados apenas com a Raspberry Pi';
Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE = 'Esse Bloco está disponível para uso apenas\n' + ' com placas Arduino ou Raspberry Pi';



Blockly.Msg.INITIAL_LUMINOSITY_ALREADY_VERIFIED =  'O programa pode ter apenas um Bloco Verificar Luminosidade Inicial';
Blockly.Msg.REQUIRE_BUTTON_BLOCK = 'Para usar esse Bloco você precisa ANTES\n' + ' usar o Bloco "Verificar a posição do botão"';
Blockly.Msg.REQUIRE_SWITCH_BLOCK = 'Para usar esse Bloco você precisa ANTES\n' + ' usar o Bloco "Ler Estado do Interruptor" da cor selecionada';
Blockly.Msg.REQUIRE_DISTANCE_SENSOR_BLOCK =  'Para usar esse Bloco você precisa ANTES\n' + ' usar o Bloco "Verificar Distância"';
Blockly.Msg.REQUIRE_LDR_BLOCKS =  'Para usar esse Bloco você precisa ANTES\n' + 'usar os Blocos "Guardar Luminosidade Inicial" e\n' + '"Verificar Luminosidade"';
Blockly.Msg.REQUIRE_KEYBOARD_INPUT = 'Para usar esse Bloco você precisa ANTES\n' + ' usar o Bloco "Ler Texto do Teclado"';
Blockly.Msg.REQUIRE_WHILE_IF_BLOCK = 'Este bloco deve ser colocado dentro de um bloco\n' +'"Enquanto" ou "Se" ou "Se/Senão"';

Blockly.Msg.REQUIRE_WRITE_SPEAK_BLOCK ='Este bloco precisa estar dentro de um bloco "Escrever na tela do computador" \n' +
                                       'ou "Escrever no LCD", ou "FALAR"';

Blockly.Msg.REQUIRE_LUMINOSITY_BLOCK =  'Para usar esse Bloco você precisa ANTES\n' + 'usar o Bloco "Verificar Luminosidade"';
Blockly.Msg.REQUIRE_INITIAL_LUMINOSITY_BLOCK =  'Para usar esse Bloco você precisa ANTES\n' + 'usar o Bloco "Verificar Luminosidade Inicial"';

Blockly.Msg.REQUIRE_WRITE_SPEAK_BLOCK ='Este bloco precisa estar dentro de um bloco "Mostrar imagem na tela do computador" \n';
Blockly.Msg.REQUIRE_SHOW_PICTURE_ON_SCREEN_BLOCK ='This block must be within a "Write on your computer screen" block \n' +
                                       'or "Write on the LCD", or "TALK"';
Blockly.Msg.REQUIRE_LUMINOSITY_BLOCK =  'Para usar esse Bloco você precisa ANTES\n' + 'usar o Bloco "Verificar Luminosidade"';
Blockly.Msg.REQUIRE_INITIAL_LUMINOSITY_BLOCK =  'Para usar esse Bloco você precisa ANTES\n' + 'usar o Bloco "Verificar Luminosidade Inicial"';
Blockly.Msg.REQUIRE_GETPICTURE_BLOCK = 'Para usar esse Bloco você precisa ANTES\n' +'usar o Bloco "Fotografar Imagem"\n';








 //-----------------

//Default Programa Name
Blockly.Msg.DEFAULT_PROGRAM_NAME= 'nome_do_programa';

//Python Code Accordion Title and options
Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_COMPUTER= 'Código Python (Somente Computador)';
Blockly.Msg.COMPUTER_MODE = 'Sem GPIO (Apenas Computador)';
Blockly.Msg.ARDUINO_MODE = 'Arduino (Computador + Arduino)';
Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_RASPBERRY= 'Código Python (Raspberry)';
Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_ARDUINO= 'Código Python (Computador + Arduino)';


//Delelte Blocks Text Message
Blockly.Msg.DELETE_BLOCKS_ALERT_TITLE = 'Apagar todos os Blocos?';
Blockly.Msg.DELETE_BLOCKS_ALERT_TEXT = 'Existem blocos na área de trabalho. Você tem certeza\n ' +
                                       'que deseja apagá-los e começar um novo programa?';

//RELOAD System Text Message
Blockly.Msg.RELOAD_ALERT_TITLE = 'Fazer Reload do Ambiente?';
Blockly.Msg.RELOAD_ALERT_TEXT =  'Existem blocos na área de trabalho.\n' +
		                         'Se você recarregar a página todos os blocos serão apagados.\n' +
                                 'Deseja continuar?';

//FIELD RÓTULO (field_rotulo.js) and  ROTULOS (rotulos.js)
Blockly.Msg.RENAME_ROTULO = 'Renomear rótulo...';
Blockly.Msg.RENAME_ROTULO_TITLE =  'Renamear todos os rótulos "%1" para:'
Blockly.Msg.NEW_ROTULO = 'Novo rótulo...';
Blockly.Msg.NEW_ROTULO_TITLE = 'Nome do novo rótulo:';
Blockly.Msg.NEW_ROULO_NAME = "nome_do_rotulo_";

/*BlockWiSARD Blocks **************************/

//Wisard Blocks  -------------------------------

Blockly.Msg.CREATE_WISARD_BLOCK_CREATE = "Criar WiSARD";
Blockly.Msg.CREATE_WISARD_BLOCK_CREATE_TOOLTIP = "Cria uma Rede Neural WiSARD";

Blockly.Msg.LEARN_WITH_FOLDER_IMAGES_LEARN = "Aprender ";
Blockly.Msg.LEARN_WITH_FOLDER_IMAGES_FOLDER = " com as imagens da pasta:";
Blockly.Msg.LEARN_WITH_FOLDER_IMAGES_TOOLTIP = " Ensina a WiSARD com imagens da pasta indicada";
Blockly.Msg.LEARN_WITH_FOLDER_LABEL_NAME = "rótulo";

Blockly.Msg.PHOTOGRAPH_IMAGE = "Fotografar imagem";
Blockly.Msg.PHOTOGRAPH_IMAGE_TOOLTIP = "Fotografa uma imagem com a webcam e prepara ela para treinar a WiSARD";
Blockly.Msg.SHOW_IMAGE_BEFORE = "Mostrar";
Blockly.Msg.SHOW_IMAGE_AFTER = "na tela do computador";
Blockly.Msg.SHOW_IMAGE_TOOLTIP = "Mostra uma imagem na tela do computador";
Blockly.Msg.SHOW_PHOTOGRAPHED_IMAGE = "Imagem fotografada";
Blockly.Msg.SHOW_PHOTOGRAPHED_IMAGE_TOOLTIP = "Mostra a imagem fotografada já preparada para treinar a WiSARD";
Blockly.Msg.SHOW_WHITE_IMAGE = "Imagem branca";
Blockly.Msg.SHOW_WHITE_IMAGE_TOOLTIP = "Mostra uma imagem branca";

Blockly.Msg.CAM_ID_ALLERT= "Atenção: a câmera de índice ";
Blockly.Msg.CAM_ID_NOT_AVAIABLE= ' não está disponível';

Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_LEARN = "Aprender ";
Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_PHOTOGRAPH = " com a imagem fotografada";
Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_TOOLTIP =  " Ensina a WiSARD com a imagem previamente fotografada pela WebCan";
Blockly.Msg.LEARN_WITH_PICTURE_LABEL_NAME = "rótulo";
Blockly.Msg.LEARN_WITH_SINGLE_IMAGE_SAVE = "( Salvar Imagem";

Blockly.Msg.RECOGNIZE_PHOTOGRAPHED_IMAGE = "Reconhecer a imagem fotografada";
Blockly.Msg.RECOGNIZE_PHOTOGRAPHED_IMAGE_TOOLTIP = "Solicita à WiSARD o reconhecimento da imagem fotografada pela WebCam";
Blockly.Msg.RECOGNIZE_PHOTOGRAPHED_IMAGE_LABEL_NAME = "rótulo";


Blockly.Msg.CONDICTION_RECOGNIZE_IMAGE = "imagem reconhecida = ";
Blockly.Msg.CONDICTION_RECOGNIZE_IMAGE_TOOTIP = "Verifica se a imagem reconhecida pela WISARD corresponde ao Rótulo indicado";

Blockly.Msg.CONDICTION_UNCLISSIFIED_IMAGE = "imagem não foi reconhecida";
Blockly.Msg.CONDICTION_UNCLISSIFIED_IMAGE_TOOLTIP = "Verifica se a WiSARD não conseguiu reconhecer a imagem";

Blockly.Msg.SHOW_MENTAL_IMAGE_SHOW = "Mostrar Imagem Mental do/da";
Blockly.Msg.SHOW_MENTAL_IMAGE_TOOTIP = "Mostra a Imagem Mental do objeto especificado";

Blockly.Msg.MENTAL_IMAGE_GENERATING = "Criando imagem mental do/da"
Blockly.Msg.MENTAL_IMAGE_SHOWN = "'Apresentação Finalizada'";
Blockly.Msg.MENTAL_IMAGE_CLASS_NOT_TRAINED_BEFORE = "'Ainda não aprendi '";
Blockly.Msg.MENTAL_IMAGE_CLASS_NOT_TRAINED_AFTER = "''";

Blockly.Msg.PRINT_CREATING_WISARD = "Criando a WiSARD ...";
Blockly.Msg.PRINT_END_CREATE_WISARD = "WiSARD Criada";
Blockly.Msg.PRINT_TREINING_WISARD_WITH_FOLDER_IMAGES= "Treinando a WiSARD com imagens da pasta: ";
Blockly.Msg.PRINT_END_TREINING_WISARD_WITH_FOLDER_IMAGES= ": Treino Finalizado";

//Control Blocks ----------------------------------

Blockly.Msg.CONTROLS_SLEEP = "Esperar";
Blockly.Msg.CONTROLS_SLEEP_TOOLTIP = "Faz o programa esperar alguns segundos antes de executar o próximo comando";
Blockly.Msg.CONTROLS_SLEEP_VERY_LITTLE_TIME = "muito pouco";
Blockly.Msg.CONTROLS_SLEEP_HALF_HALF_A_SECOND = "metade de meio segundo";
Blockly.Msg.CONTROLS_SLEEP_HALF_A_SECOND = "meio segundo";
Blockly.Msg.CONTROLS_SLEEP_ONE_SECOND = "1 segundo";
Blockly.Msg.CONTROLS_SLEEP_TWO_SECONDS = "2 segundos";
Blockly.Msg.CONTROLS_SLEEP_THREE_SECONDS = "3 segundos";
Blockly.Msg.CONTROLS_SLEEP_FIVE_SECONDS = "5 segundos";
Blockly.Msg.CONTROLS_SLEEP_TEN_SECONDS = "10 segundos";

Blockly.Msg.CONTROLS_REPEAT_REPEAT = "Repetir";
Blockly.Msg.CONTROLS_REPEAT_TIMES = "vezes";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Faz o programa repetir algumas vezes os comandos colocados dendro desse bloco";

Blockly.Msg.CONTROLS_REPEAT_FOREVER = "Repetir Sempre";
Blockly.Msg.CONTROLS_REPEAT_FOREVER_TOOLTIP = "Faz o programa repetir 'infinitamente' os comandos colocados dentro desse bloco";

Blockly.Msg.CONTROLS_WHILE_WHILE = "Enquanto";
Blockly.Msg.CONTROLS_WHILE_DO = "faça";
Blockly.Msg.CONTROLS_WHILE_TOOLTIP = "Faz o Programa executar os comandos internos enquanto a condição especificada for atendida";

Blockly.Msg.CONTROLS_IF_IF = "Se";
Blockly.Msg.CONTROLS_IF_DO = "então faça";
Blockly.Msg.CONTROLS_IF_TOOLTIP = "Executa os comandos internos se a condição especificada for atendida";

Blockly.Msg.CONTROLS_IF_ELSE_IF = "Se";
Blockly.Msg.CONTROLS_IF_ELSE_DO = "então faça";
Blockly.Msg.CONTROLS_IF_ELSE_ELSE = "senão, faça";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Executa os comandos internos se a condição especificada for atendida";


Blockly.Msg.CONTROLS_COMPORT_PORT = "Usar Porta Serial";
Blockly.Msg.CONTROLS_COMPORT_ARDUINO = "para comunicação com o Arduino";
Blockly.Msg.CONTROLS_COMPORT_TOOLTIP = "Define a porta serial para comunicação\n" +
                                       " com a placa Arduino conectada ao computador";
Blockly.Msg.CONTROLS_COMPORT_SERIAL_UNDEFINED = "A porta COM não foi definida corretamente ou está desconectada";


//Sensors and Conditions Blocks ---------------------------------

Blockly.Msg.PUSH_BUTTON = "Verificar a Posição do Botão";
Blockly.Msg.PUSH_BUTTON_TOOLTIP = "Lê e guarda estado do botão";
Blockly.Msg.PUSH_BUTTON_COND_BUTTON = "Botão";
Blockly.Msg.PUSH_BUTTON_COND_PRESSED = "Pressionado";
Blockly.Msg.PUSH_BUTTON_COND_UNPRESSED = "Não pressionado";
Blockly.Msg.PUSH_BUTTON_COND_TOOLTIP = "Verifica se o Botão está pressionado ou solto";

Blockly.Msg.SWITCH_VERIFY = "Verificar a posição do";
Blockly.Msg.SWITCH_SWITCH_BEFORE= "interruptor "
Blockly.Msg.SWITCH_SWITCH_AFTER = ""
Blockly.Msg.SWITCH_TOOLTIP = "Lê e guarda o estado do interruptor com a cor indicada";
Blockly.Msg.SWITCH_COND_SWITCH_BEFORE = "Interruptor ";
Blockly.Msg.SWITCH_COND_SWITCH_AFTER = "";
Blockly.Msg.SWITCH_COND_ON = "Ligado";
Blockly.Msg.SWITCH_COND_OFF = "Desligado";
Blockly.Msg.SWITCH_COND_TOOLTIP = "Verifica se o Interruptor está ligado ou desligado";

Blockly.Msg.ULTRASONIC = "Verificar Distância";
Blockly.Msg.ULTRASONIC_TOOLTIP = "Verifica e guarda a Distância lida pelo sensor de distância";
Blockly.Msg.ULTRASONIC_COND_DISTANCE = "Distância";
Blockly.Msg.ULTRASONIC_COND_GREATER_THAN = " > maior que";
Blockly.Msg.ULTRASONIC_COND_LESS_THAN = " < menor que";
Blockly.Msg.ULTRASONIC_COND_TOOLTIP = "Verifica se a distância lida pelo sensor de distância é > ou menor que a distância especificada";

Blockly.Msg.LDR_INIT = "Verificar Luminosidade Inicial";
Blockly.Msg.LDR_INIT_TOOLTIP = "Verifica e guarda a Luminosidade Inicial do Ambiente";
Blockly.Msg.LDR = "Verificar Luminosidade";
Blockly.Msg.LDR_TOOLTIP = "Verifica e guarda a Luminosidade Atual do Ambiente";
Blockly.Msg.LDR_COND_CURRENT_LUMINOSITY = "Luz atual";
Blockly.Msg.LDR_COND_INITIAL_LUMINOSITY = "Luz inicial";
Blockly.Msg.LDR_COND_GREATER_THAN = " > maior que";
Blockly.Msg.LDR_COND_IQUALS = " = igual à";
Blockly.Msg.LDR_COND_LESS_THAN = " < menor que";
Blockly.Msg.LDR_COND_TOOLTIP = "Verifica se a luminosidade do atual do ambiente é maior que, igual ou menor que a luminosidade inicial";

Blockly.Msg.KEYBOARD = "Ler Texto Digitado";
Blockly.Msg.KEYBOARD_TOOLTIP = "Lê e guarda o texto digitado no teclado (Após digitar o texto o usuário deverá teclar a tecla ENTER)";
Blockly.Msg.KEYBOARD_COND_TEXT = "Texto digitado no teclado igual a ";
Blockly.Msg.KEYBOARD_COND_TOOLTIP = "Verifica se o texto digitado pelo usuário é igual a texto especificado";

Blockly.Msg.ENTERKEY = "Esperar Tecla Enter";
Blockly.Msg.ENTERKEY_TOOLTIP = "Pausa o programa até que a tecla enter serja apertada";


Blockly.Msg.SHOW_DISTANCE_VALUE_VALUE = "Distância lida";
Blockly.Msg.SHOW_DISTANCE_VALUE_TOOLTIP = "Mostra o valor da distância lido pelo sensor de distância";
Blockly.Msg.SHOW_INITIAL_LUMINOSITY_VALUE_VALUE = "Luminosidade inicial lida";
Blockly.Msg.SHOW_INITIAL_LUMINOSITY_TOOLTIP = "Mostra o valor da luminosidade Inicial lido pelo sensor de luz";
Blockly.Msg.SHOW_LUMINOSITY_VALUE_VALUE = "Luminosidade lida";
Blockly.Msg.SHOW_LUMINOSITY_TOOLTIP = "Mostra o valor da luminosidade atual lido pelo sensor de luz";
Blockly.Msg.SHOW_KEYBORDTEXT_TEXT = "Texto digitado";
Blockly.Msg.SHOW_KEYBORDTEXT_TOOLTIP = "Mostra o texto digitado lido do teclado";

//Actuators Blocks ---------------------------------


Blockly.Msg.LED_ON_TURNON = "Acender o";
Blockly.Msg.LED_ON_LED_BEFORE = "LED";
Blockly.Msg.LED_ON_LED_AFTER = "";
Blockly.Msg.LED_ON_TOOLTIP = "Acende o LED com a cor indicada";

Blockly.Msg.LED_OFF_TURNOFF = "Apaga o";
Blockly.Msg.LED_OFF_LED_BEFORE = "LED";
Blockly.Msg.LED_OFF_LED_AFTER = "";
Blockly.Msg.LED_OFF_TOOLTIP = "Apaga o LED com a cor indicada";

Blockly.Msg.LEDBLINK_OPT_FAST = "Rápido";
Blockly.Msg.LEDBLINK_OPT_MEDIUM = "Velocidade Média";
Blockly.Msg.LEDBLINK_OPT_SLOW = "Devagar";
Blockly.Msg.LEDBLINK_BLINK = "Piscar o";
Blockly.Msg.LEDBLINK_LED_BEFORE  = "LED";
Blockly.Msg.LEDBLINK_LED_AFTER  = "";
Blockly.Msg.RGBLED_TOOLTIP = "Pisca o LED da cor indicada";

Blockly.Msg.RGBLED_TURNON = "Acendar a luz ";
Blockly.Msg.RGBLED_RGB = " do LED RGB";
Blockly.Msg.RGBLED_TOOLTIP = "Acende as diferentes cores do LED RGB";

Blockly.Msg.DCMOTOR_MOVE = "Girar Motor DC";
Blockly.Msg.DCMOTOR_FAST = "Rápido";
Blockly.Msg.DCMOTOR_MEDIUM_SPEED = "Velocidade Média";
Blockly.Msg.DCMOTOR_SLOW = "Devagar";
Blockly.Msg.DCMOTOR_TOOLTIP = "Faz o Motor DC girar na velocidade indicada";

Blockly.Msg.DCMOTOR_STOP_MOTOR = "Parar Motor DC";
Blockly.Msg.DCMOTOR_STOP_TOOLTIP = "Faz o Motor DC parar";

Blockly.Msg.SERVO_MOVE = "Mover Servo Motor para";
Blockly.Msg.SERVO_DEGREES = "graus";
Blockly.Msg.SERVO_TOOLTIP = "Faz o ponteiro do Servo Motor mover-se para a posição indicada";

Blockly.Msg.SERVO_DETACH = "Desconectar Servo Motor";
Blockly.Msg.SERVO_DETACH_TOOLTIP = "Desconecta o Servo Motor";

Blockly.Msg.LCD_WRITE = "Escrever ";
Blockly.Msg.LCD_LINE = "na linha";
Blockly.Msg.LCD_LCD = "do display LCD 16x2";
Blockly.Msg.LCD_LCD_DEFAULT_VALUE = "Oi";
Blockly.Msg.LCD_TOOLTIP = "Escreve um texto digitado ou valor no display de LCD na linha indicada (Máximo de 16 caracteres e espaços em cada linha)";

Blockly.Msg.LCDCLEAN_CLEAN = "Limpar LCD 16x2";
Blockly.Msg.LCDCLEAN_TOOLTIP = "Limpa o texto das duas linhas do discplay de LCD";

Blockly.Msg.SEVENSEG_WRITE = "Escrever ";
Blockly.Msg.SEVENSEG_7SEG  = "no Display de 7 Segmentos";
Blockly.Msg.SEVENSEG_TOOLTIP = "Escreve, no Display de 7 Segmentos, o número indicado";

Blockly.Msg.SEVENSEGCLEAN_CLEAN = "Limpar Display de 7 Segmentos";
Blockly.Msg.SEVENSEGCLEAN_TOOLTIP = "Limpa o Display de 7 Segmentos";

Blockly.Msg.SCREEN_WRITESPEAK = "Escrever ( Falar";
Blockly.Msg.SCREEN_SCREEN  = "na Tela do computador";
Blockly.Msg.SCREEN_DEFAULT_VALUE = "Oi";
Blockly.Msg.SCREEN_TOOLTIP = "Escreve, na tela do computador, o texto digitado ou valor.\n" +
                             "Se a caixa de seleção 'Falar' estiver marcada\n" +
                             "o texto ou valor também é falado nas caixas de som do computador";

Blockly.Msg.SPEAKSETUP_OPT_MASC = "Masculino";
Blockly.Msg.SPEAKSETUP_OPT_FEM = "Feminino";
Blockly.Msg.SPEAKSETUP_OPT_DEEP_TONE = "Grave";
Blockly.Msg.SPEAKSETUP_OPT_MEDIUM_TONE = "Média";
Blockly.Msg.SPEAKSETUP_OPT_HIGH_TONE = "Aguda";
Blockly.Msg.SPEAKSETUP_OPT_LOW_SPEED = "Baixa";
Blockly.Msg.SPEAKSETUP_OPT_MEDIUM_SPEED = "Media";
Blockly.Msg.SPEAKSETUP_OPT_HIGH_SPEED = "Alta";
Blockly.Msg.SPEAKSETUP_SET = "Configurar a fala sintetizada";
Blockly.Msg.SPEAKSETUP_SEX = "Sexo";
Blockly.Msg.SPEAKSETUP_TONE = "Tonalidade";
Blockly.Msg.SPEAKSETUP_SPEED = "Velocidade";
Blockly.Msg.SPEAKSETUP_TOOLTIP = "Configura a fala sintetizada";

Blockly.Msg.SPEAK_SPEAK = "Falar";
Blockly.Msg.SPEAK_TOOLTIP = "Fala, através da caixa de som do computador, o texto digitado ou valor";


Blockly.Msg.PLAY_SOUND_PLAY = "Tocar";
Blockly.Msg.PLAY_SOUND_TOOLTIP= "Toca um áudio na caixa de som do computador.Se a caixa de seleção estiver marcada, o programa espera o som terminar antes de executar o próximo comando.";
Blockly.Msg.PLAY_SOUND_UNTIL_DONE = "até o fim";	


Blockly.Msg.PLAY_SOUND_CAT= "miau"; 
Blockly.Msg.PLAY_SOUND_DOG= "au-au";     
Blockly.Msg.PLAY_SOUND_COW= "muuu";       
Blockly.Msg.PLAY_SOUND_ROOSTER = "cócórócócó";
Blockly.Msg.PLAY_SOUND_NOTE_C= "nota Dó"; 
Blockly.Msg.PLAY_SOUND_NOTE_D="nota Ré";    
Blockly.Msg.PLAY_SOUND_NOTE_E="nota Mi"; 
Blockly.Msg.PLAY_SOUND_NOTE_F="nota Fá";       
Blockly.Msg.PLAY_SOUND_NOTE_G="nota Sol"; 
Blockly.Msg.PLAY_SOUND_NOTE_A="nota Lá";    
Blockly.Msg.PLAY_SOUND_NOTE_B="nota Si"; 
Blockly.Msg.PLAY_SOUND_NOTE_C2="note Dó (agudo)"; 

Blockly.Msg.PLAY_SOUND_BEEP = "beep";
Blockly.Msg.PLAY_SOUND_BEEP_BEEP_FAST = "beep-beep.. rápido";
Blockly.Msg.PLAY_SOUND_BEEP_BEEP_FAST_BASS = "beep-beep.. rápido (grave)";
Blockly.Msg.PLAY_SOUND_BEEP_BEEP_SLOW = "beep-beep.. lento";
Blockly.Msg.PLAY_SOUND_BEEP_BEEP_SLOW_BASS = "beep-beep.. lento (grave)";
Blockly.Msg.PLAY_SOUND_CAMERA= "câmera";
Blockly.Msg.PLAY_SOUND_PROCESSING= "processando dados";


Blockly.Msg.STOP_SOUND_STOP= "Parar som";
Blockly.Msg.STOP_SOUND_TOOLTIP= "Para de executar o áudio iniciado pelo bloco Tocar Som";

Blockly.Msg.BUZZER_OPT_ACCIDENTAL_FLAT = "  Bemol";
Blockly.Msg.BUZZER_OPT_ACCIDENTAL_NATURAL = "  Natural";
Blockly.Msg.BUZZER_OPT_ACCIDENTAL_SHARP = "  Sustenido";
Blockly.Msg.BUZZER_OPT_DEEP_TONE = "Grave";
Blockly.Msg.BUZZER_OPT_MEDIUM_TONE = "Médio";
Blockly.Msg.BUZZER_OPT_HIGH_TONE = "Agudo";
Blockly.Msg.BUZZER_A_NOTE = "Lá";
Blockly.Msg.BUZZER_B_NOTE = "Si";
Blockly.Msg.BUZZER_C_NOTE = "Dó";
Blockly.Msg.BUZZER_D_NOTE = "Ré";
Blockly.Msg.BUZZER_E_NOTE = "Mi";
Blockly.Msg.BUZZER_F_NOTE = "Fá";
Blockly.Msg.BUZZER_G_NOTE = "Sol";
Blockly.Msg.BUZZER_PLAY = "Tocar nota";
Blockly.Msg.BUZZER_BUZZER =  "no Buzzer";
Blockly.Msg.BUZZER_TOOLTIP = "Faz o buzzer tocar a nota especificada";

Blockly.Msg.BUZZEROFF_SILENCE = "Silenciar o Buzzer";
Blockly.Msg.BUZZEROFF_TOOLTIP = "Silencia o Buzzer";

Blockly.Msg.BUZZERSIREN_OPT_FAST = "rápida";
Blockly.Msg.BUZZERSIREN_OPT_SLOW = "lenta";
Blockly.Msg.BUZZERSIREN_PLAY = "Tocar uma sirene";
Blockly.Msg.BUZZERSIREN_BUZZER = "no Buzzer";
Blockly.Msg.BUZZESIREN_TOOLTIP = "Faz o buzzer tocar uma sirene na velocidade especificada";


//Robot Blocks ---------------------------------

Blockly.Msg.ROBOT_FORWARD = "Mover o Robô para frente";
Blockly.Msg.ROBOT_FORWARD_TOOLTIP = "Faz o Robô se movimentar para frente";
Blockly.Msg.ROBOT_BACKWARDS = "Mover o Robô para trás";
Blockly.Msg.ROBOT_BACKWARDS_TOOLTIP = "Faz o Robô se movimentar para trás";
Blockly.Msg.ROBOT_TURNRIGHT = "Girar o Robô para a direita";
Blockly.Msg.ROBOT_TURNRIGHT_TOOLTIP = "Faz o  Robô girar para a direita";
Blockly.Msg.ROBOT_TURNLEFT = "Girar o Robô para a esquerda";
Blockly.Msg.ROBOT_TURNLEFT_TOOLTIP = "Faz o Robô girar para a esquerda";
Blockly.Msg.ROBOT_TURNRIGHTLEFT = "Girar o Robô para qualquer lado";
Blockly.Msg.ROBOT_TURNRIGHTLEFT_TOOLTIP = "Faz o robô girar, aleatoriamente, para o lado direito ou esquerdo";
Blockly.Msg.ROBOT_STOP = "Parar o Robô";
Blockly.Msg.ROBOT_STOP_TOOLTIP = "Faz o Robô parar";


/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Carcater';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Texto';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Booleano';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Numero Pequeno';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Numero';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Numero Grande';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Vetor';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Nulo';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Indefinido';
/// Arduino Types - Place holder value, indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'Faltando Bloco Filho';




/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'Nova Instancia...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Renomeia Instancia..';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'Nome da Nova Instancia:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Renomeie "%1" instancias para:';


//Blockly and Ardublockly Originals

Blockly.Msg.ADD_COMMENT = "Adicionar comentário";
Blockly.Msg.AUTH = "Por favor autorize este aplicativo para permitir que o seu trabalho seja gravado e que ele seja compartilhado por você.";
Blockly.Msg.CHANGE_VALUE_TITLE = "Mudar valor:";
Blockly.Msg.CHAT = "Converse com o seu colaborador digitando nesta caixa!";
Blockly.Msg.CLEAN_UP = "Limpar blocos";
Blockly.Msg.COLLAPSE_ALL = "Recolher blocos";
Blockly.Msg.COLLAPSE_BLOCK = "Recolher bloco";
Blockly.Msg.COLOUR_BLEND_COLOUR1 = "cor 1";
Blockly.Msg.COLOUR_BLEND_COLOUR2 = "cor 2";
Blockly.Msg.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";  // untranslated
Blockly.Msg.COLOUR_BLEND_RATIO = "proporção";
Blockly.Msg.COLOUR_BLEND_TITLE = "misturar";
Blockly.Msg.COLOUR_BLEND_TOOLTIP = "Mistura duas cores em uma dada proporção (0,0 - 1,0).";
Blockly.Msg.COLOUR_PICKER_HELPURL = "https://pt.wikipedia.org/wiki/Cor";
Blockly.Msg.COLOUR_PICKER_TOOLTIP = "Escolher uma cor da palheta de cores.";
Blockly.Msg.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";  // untranslated
Blockly.Msg.COLOUR_RANDOM_TITLE = "cor aleatória";
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = "Escolher cor de forma aleatória.";
Blockly.Msg.COLOUR_RGB_BLUE = "azul";
Blockly.Msg.COLOUR_RGB_GREEN = "verde";
Blockly.Msg.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";  // untranslated
Blockly.Msg.COLOUR_RGB_RED = "vermelho";
Blockly.Msg.COLOUR_RGB_TITLE = "colorir com";
Blockly.Msg.COLOUR_RGB_TOOLTIP = "Cria uma cor de acordo com a quantidade especificada de vermelho, verde e azul. Todos os valores devem estar entre 0 e 100.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "encerra o laço";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continua com a próxima iteração do laço";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Encerra o laço.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Ignora o resto deste laço, e continua com a próxima iteração.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "Atenção: Este bloco só pode ser usado dentro de um laço.";
Blockly.Msg.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg.CONTROLS_FOREACH_TITLE = "para cada item %1 na lista %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "Para cada item em uma lista, atribui o item à variável '%1' e então realiza algumas instruções.";
Blockly.Msg.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg.CONTROLS_FOR_TITLE = "contar com %1 de %2 até %3 por %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "Faz com que a variável '%1' assuma os valores do número inicial ao número final, contando de acordo com o intervalo especificado e executa os blocos especificados.";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Acrescente uma condição para o bloco se.";
//Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Acrescente uma condição final para o bloco se.";
Blockly.Msg.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Acrescente, remova ou reordene seções para reconfigurar este bloco.";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "senão";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "senão se";
Blockly.Msg.CONTROLS_IF_MSG_IF = "se";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "Se um valor for verdadeiro, então realize algumas instruções.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "Se um valor for verdadeiro, então realize o primeiro bloco de instruções. Senão, realize o segundo bloco de instruções.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "Se o primeiro valor é verdadeiro, então realize o primeiro bloco de instruções.  Senão, se o segundo valor é verdadeiro, realize o segundo bloco de instruções.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "Se o primeiro valor for verdadeiro, então realize o primeiro bloco de instruções. Senão, se o segundo valor é verdadeiro, realize o segundo bloco de instruções. Se nenhum dos blocos for verdadeiro, realize o último bloco de instruções.";
Blockly.Msg.CONTROLS_REPEAT_HELPURL = "https://pt.wikipedia.org/wiki/Estrutura_de_repeti%C3%A7%C3%A3o#Repeti.C3.A7.C3.A3o_com_vari.C3.A1vel_de_controle";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "faça";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "repita %1 vezes";
//Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Faça algumas instruções várias vezes.";
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repita até";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repita enquanto";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "Enquanto um valor for falso, então faça algumas instruções.";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "Enquanto um valor for verdadeiro, então faça algumas instruções.";
Blockly.Msg.DELETE_ALL_BLOCKS = "Apagar todos os %1 blocos?";
Blockly.Msg.DELETE_BLOCK = "Remover bloco";
Blockly.Msg.DELETE_X_BLOCKS = "Remover %1 blocos";
Blockly.Msg.DISABLE_BLOCK = "Desabilitar bloco";
Blockly.Msg.DUPLICATE_BLOCK = "Duplicar";
Blockly.Msg.ENABLE_BLOCK = "Habilitar bloco";
Blockly.Msg.EXPAND_ALL = "Expandir blocos";
Blockly.Msg.EXPAND_BLOCK = "Expandir bloco";
Blockly.Msg.EXTERNAL_INPUTS = "Entradas externas";
Blockly.Msg.HELP = "Ajuda";
Blockly.Msg.INLINE_INPUTS = "Entradas incorporadas";
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = "criar lista vazia";
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = "Retorna uma lista, de tamanho 0, contendo nenhum registro";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "lista";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Acrescenta, remove ou reordena seções para reconfigurar este bloco de lista.";
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "criar lista com";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Acrescenta um item à lista.";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "Cria uma lista com a quantidade de itens informada.";
Blockly.Msg.LISTS_GET_INDEX_FIRST = "primeiro";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "nº a partir do final";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "nº";
Blockly.Msg.LISTS_GET_INDEX_GET = "obter";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "obter e remover";
Blockly.Msg.LISTS_GET_INDEX_LAST = "último";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "aleatório";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "remover";
Blockly.Msg.LISTS_GET_INDEX_TAIL = "";  // untranslated
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Retorna o primeiro item em uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = "Retorna o item da lista na posição especificada.  #1 é o último item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = "Retorna o item da lista na posição especificada.  #1 é o primeiro item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Retorna o último item em uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Retorna um item aleatório de uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Remove e retorna o primeiro item de uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = "Remove e retorna o item na posição especificada em uma lista.  #1 é o último item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = "Remove e retorna o item na posição especificada em uma lista.  #1 é o primeiro item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Remove e retorna o último item de uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Remove e retorna um item aleatório de uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Remove o primeiro item de uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = "Remove o item na posição especificada em uma lista.  #1 é o último item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = "Remove o item na posição especificada em uma lista.  #1 é o primeiro item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Remove o último item de uma lista.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Remove um item aleatório de uma lista.";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "até nº a partir do final";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "até nº";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "até último";
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "obtém sublista a partir do primeiro";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "obtém sublista de nº a partir do final";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "obtém sublista de nº";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = "";  // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "Cria uma cópia da porção especificada de uma lista.";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "encontre a primeira ocorrência do item";
Blockly.Msg.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg.LISTS_INDEX_OF_LAST = "encontre a última ocorrência do item";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "Retorna o índice da primeira/última ocorrência do item na lista.  Retorna 0 se o item não for encontrado.";
Blockly.Msg.LISTS_INLIST = "na lista";
Blockly.Msg.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 é vazia";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "Retorna ao verdadeiro se a lista estiver vazia.";
Blockly.Msg.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg.LISTS_LENGTH_TITLE = "tamanho de %1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "Retorna o tamanho de uma lista.";
Blockly.Msg.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg.LISTS_REPEAT_TITLE = "criar lista com item %1 repetido %2 vezes";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "Cria uma lista consistindo no valor informado repetido o número de vezes especificado.";
Blockly.Msg.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "como";
Blockly.Msg.LISTS_SET_INDEX_INSERT = "inserir em";
Blockly.Msg.LISTS_SET_INDEX_SET = "definir";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Insere o item no início de uma lista.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = "Insere o item na posição especificada em uma lista.  #1 é o último item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = "Insere o item na posição especificada em uma lista.  #1 é o primeiro item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Insere o item no final de uma lista.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Insere o item em uma posição qualquer de uma lista.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Define o primeiro item de uma lista.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = "Define o item da posição especificada de uma lista.  #1 é o último item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = "Define o item da posição especificada de uma lista.  #1 é o primeiro item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Define o último item de uma lista.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Define um item aleatório de uma lista.";
Blockly.Msg.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";  // untranslated
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = "ascending";  // untranslated
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = "descending";  // untranslated
Blockly.Msg.LISTS_SORT_TITLE = "sort %1 %2 %3";  // untranslated
Blockly.Msg.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";  // untranslated
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";  // untranslated
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = "numeric";  // untranslated
Blockly.Msg.LISTS_SORT_TYPE_TEXT = "alphabetic";  // untranslated
Blockly.Msg.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";  // untranslated
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = "Fazer uma lista a partir do texto";
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = "fazer um texto a partir da lista";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = "Juntar uma lista de textos em um único texto, separado por um delimitador.";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = "Dividir o texto em uma lista de textos, separando-o em cada delimitador.";
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = "com delimitador";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "falso";
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "Retorna verdadeiro ou falso.";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "verdadeiro";
Blockly.Msg.LOGIC_COMPARE_HELPURL = "https://pt.wikipedia.org/wiki/Inequa%C3%A7%C3%A3o";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "Retorna verdadeiro se ambas as entradas forem iguais.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "Retorna verdadeiro se a primeira entrada for maior que a segunda entrada.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "Retorna verdadeiro se a primeira entrada for maior ou igual à segunda entrada.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "Retorna verdadeiro se a primeira entrada for menor que a segunda entrada.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "Retorna verdadeiro se a primeira entrada for menor ou igual à segunda entrada.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "Retorna verdadeiro se ambas as entradas forem diferentes.";
Blockly.Msg.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
Blockly.Msg.LOGIC_NEGATE_TITLE = "não %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "Retorna verdadeiro se a entrada for falsa.  Retorna falsa se a entrada for verdadeira.";
Blockly.Msg.LOGIC_NULL = "nulo";
Blockly.Msg.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg.LOGIC_NULL_TOOLTIP = "Retorna nulo.";
Blockly.Msg.LOGIC_OPERATION_AND = "e";
Blockly.Msg.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg.LOGIC_OPERATION_OR = "ou";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "Retorna verdadeiro se ambas as entradas forem verdadeiras.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "Retorna verdadeiro se uma das estradas for verdadeira.";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "teste";
Blockly.Msg.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";  // untranslated
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "se falso";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "se verdadeiro";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "Avalia a condição em \"teste\". Se a condição for verdadeira retorna o valor \"se verdadeiro\", senão retorna o valor \"se falso\".";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+";  // untranslated
Blockly.Msg.MATH_ARITHMETIC_HELPURL = "https://pt.wikipedia.org/wiki/Aritm%C3%A9tica";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "Retorna a soma dos dois números.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Retorna o quociente da divisão dos dois números.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "Retorna a diferença entre os dois números.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Retorna o produto dos dois números.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "Retorna o primeiro número elevado à potência do segundo número.";
Blockly.Msg.MATH_CHANGE_HELPURL = "https://pt.wikipedia.org/wiki/Adi%C3%A7%C3%A3o";
Blockly.Msg.MATH_CHANGE_TITLE = "alterar %1 por %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Soma um número à variável \"%1\".";
Blockly.Msg.MATH_CONSTANT_HELPURL = "https://pt.wikipedia.org/wiki/Anexo:Lista_de_constantes_matem%C3%A1ticas";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "Retorna uma das constantes comuns: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), ou ∞ (infinito).";
Blockly.Msg.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";  // untranslated
Blockly.Msg.MATH_CONSTRAIN_TITLE = "restringe %1 inferior %2 superior %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "Restringe um número entre os limites especificados (inclusivo).";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷";  // untranslated
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "é divisível por";
Blockly.Msg.MATH_IS_EVEN = "é par";
Blockly.Msg.MATH_IS_NEGATIVE = "é negativo";
Blockly.Msg.MATH_IS_ODD = "é ímpar";
Blockly.Msg.MATH_IS_POSITIVE = "é positivo";
Blockly.Msg.MATH_IS_PRIME = "é primo";
Blockly.Msg.MATH_IS_TOOLTIP = "Verifica se um número é par, ímpar, inteiro, positivo, negativo, ou se é divisível por outro número.  Retorna verdadeiro ou falso.";
Blockly.Msg.MATH_IS_WHOLE = "é inteiro";
Blockly.Msg.MATH_MODULO_HELPURL = "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_m%C3%B3dulo";
Blockly.Msg.MATH_MODULO_TITLE = "resto da divisão de %1 ÷ %2";
Blockly.Msg.MATH_MODULO_TOOLTIP = "Retorna o resto da divisão de dois números.";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×";  // untranslated
Blockly.Msg.MATH_NUMBER_HELPURL = "https://pt.wikipedia.org/wiki/N%C3%BAmero";
Blockly.Msg.MATH_NUMBER_TOOLTIP = "Um número.";
Blockly.Msg.MATH_ONLIST_HELPURL = "";  // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "média da lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "maior da lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "mediana da lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "menor da lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "moda da lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "item aleatório da lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "desvio padrão da lista";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "soma de uma lista";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "Retorna a média aritmética dos números da lista.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "Retorna o maior número da lista.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "Retorna a mediana dos números da lista.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "Retorna o menor número da lista.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "Retorna uma lista do(s) item(ns) mais comum(ns) da lista.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "Retorna um elemento aleatório da lista.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "Retorna o desvio padrão dos números da lista.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "Retorna a soma de todos os números na lista.";
Blockly.Msg.MATH_POWER_SYMBOL = "^";  // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fração aleatória";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "Retorna uma fração aleatória entre 0.0 (inclusivo) e 1.0 (exclusivo).";
Blockly.Msg.MATH_RANDOM_INT_HELPURL = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "inteiro aleatório entre %1 e %2";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "Retorna um número inteiro entre os dois limites informados, inclusivo.";
Blockly.Msg.MATH_ROUND_HELPURL = "https://pt.wikipedia.org/wiki/Arredondamento";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "arredonda";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "arredonda para baixo";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "arredonda para cima";
Blockly.Msg.MATH_ROUND_TOOLTIP = "Arredonda um número para cima ou para baixo.";
Blockly.Msg.MATH_SINGLE_HELPURL = "https://pt.wikipedia.org/wiki/Raiz_quadrada";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "absoluto";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "raiz quadrada";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "Retorna o valor absoluto de um número.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "Retorna o número e elevado à potência de um número.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "Retorna o logaritmo natural de um número.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "Retorna o logaritmo em base 10 de um número.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "Retorna o oposto de um número.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "Retorna 10 elevado à potência de um número.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "Retorna a raiz quadrada de um número.";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-";  // untranslated
Blockly.Msg.MATH_TRIG_ACOS = "acos";  // untranslated
Blockly.Msg.MATH_TRIG_ASIN = "asin";  // untranslated
Blockly.Msg.MATH_TRIG_ATAN = "atan";  // untranslated
Blockly.Msg.MATH_TRIG_COS = "cos";  // untranslated
Blockly.Msg.MATH_TRIG_HELPURL = "https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_trigonom%C3%A9trica";
Blockly.Msg.MATH_TRIG_SIN = "sin";  // untranslated
Blockly.Msg.MATH_TRIG_TAN = "tan";  // untranslated
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "Retorna o arco cosseno de um número.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "Retorna o arco seno de um número.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "Retorna o arco tangente de um número.";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "Retorna o cosseno de um grau (não radiano).";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "Retorna o seno de um grau (não radiano).";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "Retorna a tangente de um grau (não radiano).";
Blockly.Msg.ME = "Eu";
Blockly.Msg.NEW_VARIABLE = "Nova variável...";
Blockly.Msg.NEW_VARIABLE_TITLE = "Nome da nova variável:";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = "";  // untranslated
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = "permitir declarações";
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = "com:";
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = "https://pt.wikipedia.org/wiki/Sub-rotina";
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Executa a função definida pelo usuário \"%1\".";
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = "https://pt.wikipedia.org/wiki/Sub-rotina";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "Executa a função definida pelo usuário \"%1\" e usa seu retorno.";
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = "com:";
Blockly.Msg.PROCEDURES_CREATE_DO = "Criar \"%1\"";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "Descreva esta função...";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";  // untranslated
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";  // untranslated
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "faça algo";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "para";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Cria uma função que não tem retorno.";
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";  // untranslated
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "retorna";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Cria uma função que possui um valor de retorno.";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "Atenção: Esta função tem parâmetros duplicados.";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "Destacar definição da função";
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "Se um valor é verdadeiro, então retorna um valor.";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "Atenção: Este bloco só pode ser utilizado dentro da definição de uma função.";
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = "nome da entrada:";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "Adiciona uma entrada para esta função";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "entradas";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Adiciona, remove, ou reordena as entradas para esta função.";
Blockly.Msg.REDO = "Refazer";
Blockly.Msg.REMOVE_COMMENT = "Remover comentário";
Blockly.Msg.RENAME_VARIABLE = "Renomear variável...";
Blockly.Msg.RENAME_VARIABLE_TITLE = "Renomear todas as variáveis '%1' para:";
Blockly.Msg.TEXT_APPEND_APPENDTEXT = "acrescentar texto";
Blockly.Msg.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg.TEXT_APPEND_TO = "para";
Blockly.Msg.TEXT_APPEND_TOOLTIP = "Acrescentar um pedaço de texto à variável \"%1\".";
Blockly.Msg.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "para minúsculas";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = "para Nomes Próprios";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "para MAIÚSCULAS";
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = "Retorna uma cópia do texto em um formato diferente.";
Blockly.Msg.TEXT_CHARAT_FIRST = "obter primeira letra";
Blockly.Msg.TEXT_CHARAT_FROM_END = "obter letra # a partir do final";
Blockly.Msg.TEXT_CHARAT_FROM_START = "obter letra nº";
Blockly.Msg.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "no texto";
Blockly.Msg.TEXT_CHARAT_LAST = "obter última letra";
Blockly.Msg.TEXT_CHARAT_RANDOM = "obter letra aleatória";
Blockly.Msg.TEXT_CHARAT_TAIL = "";  // untranslated
Blockly.Msg.TEXT_CHARAT_TOOLTIP = "Retorna a letra na posição especificada.";
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Acrescentar um item ao texto.";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "unir";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Acrescenta, remove ou reordena seções para reconfigurar este bloco de texto.";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = "até letra nº a partir do final";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = "até letra nº";
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = "até última letra";
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "no texto";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = "obter trecho de primeira letra";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = "obter trecho de letra nº a partir do final";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = "obter trecho de letra nº";
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = "";  // untranslated
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = "Retorna o trecho de texto especificado.";
Blockly.Msg.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "no texto";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = "encontre a primeira ocorrência do item";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = "encontre a última ocorrência do texto";
Blockly.Msg.TEXT_INDEXOF_TAIL = "";  // untranslated
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = "Retorna a posição da primeira/última ocorrência do primeiro texto no segundo texto.  Retorna 0 se o texto não for encontrado.";
Blockly.Msg.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 é vazio";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "Retorna verdadeiro se o texto fornecido for vazio.";
Blockly.Msg.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "criar texto com";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "Criar um pedaço de texto juntando qualquer número de itens.";
Blockly.Msg.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg.TEXT_LENGTH_TITLE = "tamanho de %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "Retorna o número de letras (incluindo espaços) no texto fornecido.";
Blockly.Msg.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg.TEXT_PRINT_TITLE = "imprime %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Imprime o texto, número ou valor especificado.";
Blockly.Msg.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = "Pede ao usuário um número.";
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = "Pede ao usuário um texto.";
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = "Pede um número com uma mensagem";
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = "Pede um texto com uma mensagem";
Blockly.Msg.TEXT_TEXT_HELPURL = "https://pt.wikipedia.org/wiki/Cadeia_de_caracteres";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "Uma letra, palavra ou linha de texto.";
Blockly.Msg.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = "remover espaços de ambos os lados de";
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = "remover espaços à esquerda de";
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = "remover espaços à direita de";
Blockly.Msg.TEXT_TRIM_TOOLTIP = "Retorna uma cópia do texto com os espaços removidos de uma ou ambas extremidades.";
Blockly.Msg.TODAY = "Hoje";
Blockly.Msg.UNDO = "Desfazer";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "item";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "Criar \"definir %1\"";
Blockly.Msg.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg.VARIABLES_GET_TOOLTIP = "Retorna o valor desta variável.";
Blockly.Msg.VARIABLES_SET = "definir %1 para %2";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "Criar \"obter %1\"";
Blockly.Msg.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg.VARIABLES_SET_TOOLTIP = "Define esta variável para o valor da entrada.";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;

// Ardublockly strings
Blockly.Msg.ARD_ANALOGREAD = "read analog pin#";  // untranslated
Blockly.Msg.ARD_ANALOGREAD_TIP = "Return value between 0 and 1024";  // untranslated
Blockly.Msg.ARD_ANALOGWRITE = "set analog pin#";  // untranslated
Blockly.Msg.ARD_ANALOGWRITE_TIP = "Write analog value between 0 and 255 to a specific PWM Port";  // untranslated
Blockly.Msg.ARD_BUILTIN_LED = "set built-in LED";  // untranslated
Blockly.Msg.ARD_BUILTIN_LED_TIP = "Light on or off for the built-in LED of the Arduino";  // untranslated
Blockly.Msg.ARD_COMPONENT_WARN1 = "A %1 configuration block with the same %2 name must be added to use this block!";  // untranslated
Blockly.Msg.ARD_DEFINE = "Define";  // untranslated
Blockly.Msg.ARD_DIGITALREAD = "read digital pin#";  // untranslated
Blockly.Msg.ARD_DIGITALREAD_TIP = "Read digital value on a pin: HIGH or LOW";  // untranslated
Blockly.Msg.ARD_DIGITALWRITE = "set digitial pin#";  // untranslated
Blockly.Msg.ARD_DIGITALWRITE_TIP = "Write digital value HIGH or LOW to a specific Port";  // untranslated
Blockly.Msg.ARD_FUN_RUN_LOOP = "Arduino loop forever:";  // untranslated
Blockly.Msg.ARD_FUN_RUN_SETUP = "Arduino run first:";  // untranslated
Blockly.Msg.ARD_FUN_RUN_TIP = "Defines the Arduino setup() and loop() functions.";  // untranslated
Blockly.Msg.ARD_HIGH = "HIGH";  // untranslated
Blockly.Msg.ARD_HIGHLOW_TIP = "Set a pin state logic High or Low.";  // untranslated
Blockly.Msg.ARD_LOW = "LOW";  // untranslated
Blockly.Msg.ARD_MAP = "Map";  // untranslated
Blockly.Msg.ARD_MAP_TIP = "Re-maps a number from [0-1024] to another.";  // untranslated
Blockly.Msg.ARD_MAP_VAL = "value to [0-";  // untranslated
Blockly.Msg.ARD_NOTONE = "Turn off tone on pin #";  // untranslated
Blockly.Msg.ARD_NOTONE_PIN = "No tone PIN#";  // untranslated
Blockly.Msg.ARD_NOTONE_PIN_TIP = "Stop generating a tone on a pin";  // untranslated
Blockly.Msg.ARD_NOTONE_TIP = "Turns the tone off on the selected pin";  // untranslated
Blockly.Msg.ARD_PIN_WARN1 = "Pin %1 is needed for %2 as pin %3. Already used as %4.";  // untranslated
Blockly.Msg.ARD_PULSETIMEOUT_TIP = "Measures the duration of a pulse on the selected pin, if it is within the time-out in microseconds.";  // untranslated
Blockly.Msg.ARD_PULSE_READ = "measure %1 pulse on pin #%2";  // untranslated
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = "measure %1 pulse on pin #%2 (timeout after %3 μs)";  // untranslated
Blockly.Msg.ARD_PULSE_TIP = "Measures the duration of a pulse on the selected pin.";  // untranslated
Blockly.Msg.ARD_SERIAL_BPS = "bps";  // untranslated
Blockly.Msg.ARD_SERIAL_PRINT = "print";  // untranslated
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = "add new line";  // untranslated
Blockly.Msg.ARD_SERIAL_PRINT_TIP = "Prints data to the console/serial port as human-readable ASCII text.";  // untranslated
Blockly.Msg.ARD_SERIAL_PRINT_WARN = "A setup block for %1 must be added to the workspace to use this block!";  // untranslated
Blockly.Msg.ARD_SERIAL_SETUP = "Setup";  // untranslated
Blockly.Msg.ARD_SERIAL_SETUP_TIP = "Selects the speed for a specific Serial peripheral";  // untranslated
Blockly.Msg.ARD_SERIAL_SPEED = ":  speed to";  // untranslated
Blockly.Msg.ARD_SERVO_READ = "read SERVO from PIN#";  // untranslated
Blockly.Msg.ARD_SERVO_READ_TIP = "Read a Servo angle";  // untranslated
Blockly.Msg.ARD_SERVO_WRITE = "set SERVO from Pin";  // untranslated
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = "Degrees (0~180)";  // untranslated
Blockly.Msg.ARD_SERVO_WRITE_TIP = "Set a Servo to an specified angle";  // untranslated
Blockly.Msg.ARD_SERVO_WRITE_TO = "to";  // untranslated
Blockly.Msg.ARD_SETTONE = "Set tone on pin #";  // untranslated
Blockly.Msg.ARD_SPI_SETUP = "Setup";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_CONF = "configuration:";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_DIVIDE = "clock divide";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = "LSBFIRST";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_MODE = "SPI mode (idle - edge)";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_MODE0 = "0 (Low - Falling)";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_MODE1 = "1 (Low - Rising)";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_MODE2 = "2 (High - Falling)";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_MODE3 = "3 (High - Rising)";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = "MSBFIRST";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_SHIFT = "data shift";  // untranslated
Blockly.Msg.ARD_SPI_SETUP_TIP = "Configures the SPI peripheral.";  // untranslated
Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = "Send a SPI message to an specified slave device and get data back.";  // untranslated
Blockly.Msg.ARD_SPI_TRANS_NONE = "none";  // untranslated
Blockly.Msg.ARD_SPI_TRANS_SLAVE = "to slave pin";  // untranslated
Blockly.Msg.ARD_SPI_TRANS_TIP = "Send a SPI message to an specified slave device.";  // untranslated
Blockly.Msg.ARD_SPI_TRANS_VAL = "transfer";  // untranslated
Blockly.Msg.ARD_SPI_TRANS_WARN1 = "A setup block for %1 must be added to the workspace to use this block!";  // untranslated
Blockly.Msg.ARD_SPI_TRANS_WARN2 = "Old pin value %1 is no longer available.";  // untranslated
Blockly.Msg.ARD_STEPPER_COMPONENT = "stepper";  // untranslated
Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = "MyStepper";  // untranslated
Blockly.Msg.ARD_STEPPER_FOUR_PINS = "4";  // untranslated
Blockly.Msg.ARD_STEPPER_MOTOR = "stepper motor:";  // untranslated
Blockly.Msg.ARD_STEPPER_NUMBER_OF_PINS = "Number of pins";  // untranslated
Blockly.Msg.ARD_STEPPER_PIN1 = "pin1#";  // untranslated
Blockly.Msg.ARD_STEPPER_PIN2 = "pin2#";  // untranslated
Blockly.Msg.ARD_STEPPER_PIN3 = "pin3#";  // untranslated
Blockly.Msg.ARD_STEPPER_PIN4 = "pin4#";  // untranslated
Blockly.Msg.ARD_STEPPER_REVOLVS = "how many steps per revolution";  // untranslated
Blockly.Msg.ARD_STEPPER_SETUP = "Setup stepper motor";  // untranslated
Blockly.Msg.ARD_STEPPER_SETUP_TIP = "Configures a stepper motor pinout and other settings.";  // untranslated
Blockly.Msg.ARD_STEPPER_SPEED = "set speed (rpm) to";  // untranslated
Blockly.Msg.ARD_STEPPER_STEP = "move stepper";  // untranslated
Blockly.Msg.ARD_STEPPER_STEPS = "steps";  // untranslated
Blockly.Msg.ARD_STEPPER_STEP_TIP = "Turns the stepper motor a specific number of steps.";  // untranslated
Blockly.Msg.ARD_STEPPER_TWO_PINS = "2";  // untranslated
Blockly.Msg.ARD_TIME_DELAY = "wait";  // untranslated
Blockly.Msg.ARD_TIME_DELAY_MICROS = "microseconds";  // untranslated
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = "Wait specific time in microseconds";  // untranslated
Blockly.Msg.ARD_TIME_DELAY_TIP = "Wait specific time in milliseconds";  // untranslated
Blockly.Msg.ARD_TIME_INF = "wait forever (end program)";  // untranslated
Blockly.Msg.ARD_TIME_INF_TIP = "Wait indefinitely, stopping the program.";  // untranslated
Blockly.Msg.ARD_TIME_MICROS = "current elapsed Time (microseconds)";  // untranslated
Blockly.Msg.ARD_TIME_MICROS_TIP = "Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer";  // untranslated
Blockly.Msg.ARD_TIME_MILLIS = "current elapsed Time (milliseconds)";  // untranslated
Blockly.Msg.ARD_TIME_MILLIS_TIP = "Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer";  // untranslated
Blockly.Msg.ARD_TIME_MS = "milliseconds";  // untranslated
Blockly.Msg.ARD_TONEFREQ = "at frequency";  // untranslated
Blockly.Msg.ARD_TONE_FREQ = "frequency";  // untranslated
Blockly.Msg.ARD_TONE_PIN = "Tone PIN#";  // untranslated
Blockly.Msg.ARD_TONE_PIN_TIP = "Generate audio tones on a pin";  // untranslated
Blockly.Msg.ARD_TONE_TIP = "Sets tone on pin to specified frequency within range 31 - 65535";  // untranslated
Blockly.Msg.ARD_TONE_WARNING = "Frequency must be in range 31 - 65535";  // untranslated
Blockly.Msg.ARD_TYPE_ARRAY = "Array";  // untranslated
Blockly.Msg.ARD_TYPE_BOOL = "Boolean";  // untranslated
Blockly.Msg.ARD_TYPE_CHAR = "Character";  // untranslated
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "ChildBlockMissing";  // untranslated
Blockly.Msg.ARD_TYPE_DECIMAL = "Decimal";  // untranslated
Blockly.Msg.ARD_TYPE_LONG = "Large Number";  // untranslated
Blockly.Msg.ARD_TYPE_NULL = "Null";  // untranslated
Blockly.Msg.ARD_TYPE_NUMBER = "Number";  // untranslated
Blockly.Msg.ARD_TYPE_SHORT = "Short Number";  // untranslated
Blockly.Msg.ARD_TYPE_TEXT = "Text";  // untranslated
Blockly.Msg.ARD_TYPE_UNDEF = "Undefined";  // untranslated
Blockly.Msg.ARD_VAR_AS = "as";  // untranslated
Blockly.Msg.ARD_VAR_AS_TIP = "Sets a value to a specific type";  // untranslated
Blockly.Msg.ARD_WRITE_TO = "to";  // untranslated
Blockly.Msg.NEW_INSTANCE = "New instance...";  // untranslated
Blockly.Msg.NEW_INSTANCE_TITLE = "New instance name:";  // untranslated
Blockly.Msg.RENAME_INSTANCE = "Rename instance...";  // untranslated
Blockly.Msg.RENAME_INSTANCE_TITLE = "Rename all '%1' instances to:";  // untranslated

