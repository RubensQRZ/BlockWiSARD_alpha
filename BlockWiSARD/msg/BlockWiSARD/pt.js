var BlockWiSARD = BlockWiSARD || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Portuguese",
  title: "BlockWiSARD",
  blocks: "Blocos",
  version: "Beta 1.00",

  /* Menu*/

  open: "Abrir",
  save: "Salvar",
  new_prog: "Novo",
  deleteAll: "Excluir Todo",
  settings: "Configurações",
  documentation: "Documentação",
  reportBug: "Reportar erro",
  examples: "Exemplos",

  program:"Programa",
  python_code: "Código Python",
  idle: "IDLE",
  reload: "Reload",
  about:"Sobre",

  deleteAll: "Excluir Todo",
  settings: "Configurações",
  documentation: "Documentação",
  reportBug: "Reportar erro",
  examples: "Exemplos",


  /*about modal*/

  aboutModalTitle: "Sobre a BlockWiSARD",
    aboutModalText:
        '<p>'+
		'<strong>BlockWiSARD</strong>  é um projeto do <strong>PPGI</strong>  - Programa de Pós-Graduação em Informática da <strong>UFRJ</strong> '+
		'(<a href="http://www.ppgi.ufrj.br" target="_blank">www.ppgi.ufrj.br</a>)  realizado com apoio da Coordenação de Aperfeiçoamento de Pessoal de '+
        '    Nível Superior – Brasil  <strong>CAPES</strong> – Código de Financiamento 001.'+
		'(<a href="https://www.capes.gov.br/" target="_blank">https://www.capes.gov.br/</a>).'+
		'</p>'+
		'<p>'+
		'A <strong>BlockWiSARD</strong> é um ambiente de programação em blocos que possibilita o o aprendizado conjunto de  conceitos básicos de programação '+
        'e primitivas de Inteligência Artificial.'+
		'</p>'+
		'<p>'+
		'A <strong> BlockWiSARD </strong> está sendo  desenvolvida por <strong> Rubens Lacerda Queiroz </strong>'+
		'como parte de sua Tese de Doutorado em Informática.'+
		'</p>'+
		'<p>'+
		'Esta é a versão cliente-side da <strong> BlockWiSARD </strong>.'+
		'</p>'+
		'<p>'+
		'A <strong>BlockWiSARD </strong> possui também uma versão de demonstraão WEB, que pode ser usada para gerar os códigos Python que podem ser baixados e rodadados na máquina local, '+
        'desde que se façam as instalações dos pacotes Python necessários.'+
		'</p>'+
		'<p>'+
		'A <strong> BlockWiSARD </strong> foi desenvolvida com base no Ambiente  <strong>DuinoBlocks4Kids</strong> (<a href="http://ginape.nce.ufrj.br/LIVRE/paginas/db4k/db4k.html" target="_blank">http://ginape.nce.ufrj.br/LIVRE/paginas/db4k/db4k.html</a>) '+
        'que foi construído a partir do ambiente <strong>Ardublockly</strong> (<a href="https://ardublockly.embeddedlog.com/" target="_blank">https://ardublockly.embeddedlog.com/</a>) e '+
		'utiliza as bibliotecas <strong>Blockly</strong> (<a href="https://developers.google.com/blockly/" target="_blank">https://developers.google.com/blockly/</a> ) e '+
		'<strong> Materialize</strong> (<a href="http://materializecss.com" target="_blank">http://materializecss.com/</a>).'+
		'</p>'
		,


  //Settings
  compilerLocation: "Localização do Compilador",
  IDLElocation: "Localização Python IDLE",
  wisardTrainFolderDefault: "quadrado",
  compilerLocationDefault: "Localização do Compilador desconhecido",
  sketchFolder: "Pasta do Sketch",
  sketchFolderDefault: "Pasta do Sketch desconhecida",
  arduinoBoard: "Placa do Arduino",
  arduinoBoardDefault: "Placa do Arduino desconhecida",
  comPort: "Porta COM",
  comPortDefault: "Porta COM desconhecida",
  defaultIdeButton: "Botão IDE padrão",
  defaultIdeButtonDefault: "Opções de IDE desconhecidos",
  language: "Língua",
  languageDefault: "Língua desconhecida",
  sketchName: "Nome do Sketch",
  output_GPIO: "GPIO (Raspberry/Arduino/Sem GPIO)",

    /* Python output */
  pythonOpMainTitle: "Saída Interpretador Python",
  pythonOpWaiting: "Esperando pela saída do interpretador Python..",
  pythonOpUploadedTitle: "Programa carregado com Sucesso",
  pythonOpVerifiedTitle: "Programa verificado com Sucesso",
  pythonOpOpenedTitle: "Código Python aberto Python IDLE",
  pythonOpOpenedBody: "Código Python deve ter sido carregado no IDLE python",
  pythonOpErrorTitle: "Ocorreu um erro",


  // Arduino console output
  arduinoOpMainTitle: "Saída da IDE Arduino",
  arduinoOpWaiting: "Esperando pela saída da IDE...",
  arduinoOpUploadedTitle: "Sketch enviada com sucesso",
  arduinoOpVerifiedTitle: "Código verficado com sucesso",
  arduinoOpOpenedTitle: "Sketch aberto com sucesso",
  arduinoOpOpenedBody: "O Sketch deveria estar carregado no Arduino IDE.",
  arduinoOpErrorUpVerTitle: "Compilação o Enviando falhou",
  arduinoOpErrorSketchTitle: "Sketch não encontrado",
  arduinoOpErrorFlagTitle: "Argumento de linha de comando inválido",
  arduinoOpErrorFlagPrefTitle: "Preferência passada para flag 'get-pref' não existe",
  arduinoOpErrorIdeDirTitle: "Incapaz de encontrar o Arduino IDE",
  arduinoOpErrorIdeDirBody: "O diretório do compilador não foi definido.<br>" +
                            "Por favor, configurá-lo nas Configurações.",
  arduinoOpErrorIdeOptionTitle: "Que devemos fazer com o Sketch?",
  arduinoOpErrorIdeOptionBody: "A opção do IDE option não foi definida.<br>" +
                               "Por favor, selecione uma opção do IDE nas Configurações.",
  arduinoOpErrorIdePortTitle: "Porta Serial Port indisponível",
  arduinoOpErrorIdePortBody: "A Porta Serial não está acessível.<br>" +
                             "Por favor, verifique se o Arduino está conectado corretamente ao computador e selecione uma Porta Serial nas Configurações.",
  arduinoOpErrorIdeBoardTitle: "Placa do Arduino desconhecida",
  arduinoOpErrorIdeBoardBody: "A placa do Arduino não foi definida.<br>" +
                              "Por favor, selecione a placa do Arduino adequada nas Configurações.",
  //Modals
  noServerTitle: "Aplicação BlockWISARD não está rodando",
  noServerBody: "<p>Não será possível rodar o programa Python gerado pelos blocos. </p>" +
                "<p>Para enviar o programa python gerado pelos blocos para o interpretador" +
                " python você deve intalar a BlockWiSARD no seu computador.</p>" +
                "<p>No entanto, você pode baixar o programa python gerado pelos blocos acessando o menu" +
                " oculto no canto superior esquerdo desta página e selecionando a opção," +
                " <strong>Código Python</strong> e depois a opção <strong>Salvar</strong>." +
                " Para rodar o programa salvo no seu computador você precisa ter os pacotes" +
                " python requeridos instalados."
  ,
  noServerNoLangBody: "Se a aplicação Ardublockly não está em execução, a língua não pode ser completamente mudada.",
  addBlocksTitle: "Blocos Adicionais",
  // Alerts
  loadNewBlocksTitle: "Carregar novos blocos?",
  loadNewBlocksBody: "Carregando um novo arquivo XML irá a substituir os blocos do espaço de trabalho.<br>" +
                     "Tem certeza que você quer continuar?",
  discardBlocksTitle: "Excluir Blocos?",
  discardBlocksBody: "Há 17 blocos na área de trabalho.<br>" +
                     "Tem certeza que você quer excluir eles?",
  invalidXmlTitle: "XML Inválido",
  invalidXmlBody: "O arquivo XML não foi convertido em blocos com êxito. Por favor, revise o código XML e tente novamente.",
  cleanWorkSpaceAndOpenTitle: 'Abrir progrma em Blocos?',
  cleanWorkSpaceAndOpenBody:'Abrir um programa Salvo fará com que os blocos presentes na área de trabalho ' +
                            'sejam repostos.\nVocê tem certeza de que deseja continuar?',
  //Tooltips
  uploadingSketch: "Enviando o Programa para o Interpretador Python ...",
  stopProgram: 'Parando a Execução do Programa',
  uploadSketch: "Enviar Programa",
  verifyingSketch: "Verificando Sketch...",
  verifySketch: "Verifique o Sketch",
  openingSketch: "Abrindo o Programa na Python IDLE...",
  openSketch: "Abrir Programa na Python IDLE",
  notImplemented: "Função ainda não implementada",
  //Prompts
  ok: "OK",
  okay: "Okay",
  cancel: "Cancelar",
  return: "Retorno",
  //Cards
  arduinoSourceCode: "Código Fonte do Arduino",
  blocksXml: "Blocos XML",





  /* Toolbox Categories*/
  catWiSARD: "WiSARD",
  catControls: "Controles",
  catConditions: "Condições",
  catSensors: "Sensores",
  catLEDs: "LEDs",
  catMotors: "Motores",
  catDisplays: "Displays",
  catAudio: "Áudio",
  catRobot: "Robô",
};
