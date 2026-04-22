var BlockWiSARD = BlockWiSARD || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "English",
  title: "BlockWiSARD",
  blocks: "Blocks",
  version: "Beta 1.00",

  /* Menu*/

  open: "Open",
  save: "Save",
  new_prog: "New",
  deleteAll: "Delete All",
  settings: "Settings",
  documentation: "Documentation",
  reportBug: "Report Bug",
  examples: "Examples",

  program:"Program",
  python_code: "Python Code",
  idle: "IDLE",
  reload: "Reload",
  about:"About",

  deleteAll: "Delete",
  settings: "Setting",
  documentation: "Documentation",
  reportBug: "Reportr Error",
  examples: "Exemples",


  /*about modal*/

  aboutModalTitle: "About BlockWiSARD",
  aboutModalText:
        '<p>'+
		'<strong>BlockWiSARD</strong>  is a project of the <strong>PPGI</strong>  - Programa de Pós-Graduação em Informática da <strong>UFRJ</strong> - '+
		'Universidade Federal do Rio de Janeiro ' +
		'(<a href="http://www.ppgi.ufrj.br" target="_blank">www.ppgi.ufrj.br</a>)  financed in part by the Coordenação de Aperfeiçoamento de Pessoal de '+
        '    Nível Superior – Brasil  <strong>CAPES</strong> – Finance Code 001.'+
		'(<a href="https://www.capes.gov.br/" target="_blank">https://www.capes.gov.br/</a>).'+
		'</p>'+
		'<p>'+
		'<strong>BlockWiSARD</strong> is a block programming environment that enables the joint learning of basic programming concepts '+
        'and Artificial Intelligence primitives.'+
		'</p>'+
		'<p>'+
		'<strong> BlockWiSARD </strong> is being developed by <strong> Rubens Lacerda Queiroz </strong>'+
		'as part of his Doctoral Dissertation in Informatics.'+
		'</p>'+
		'<p>'+
		'This is the cliente-side version of <strong> BlockWiSARD </strong>.' +
		'</p>'+
		'<p>'+
		'<strong>BlockWiSARD </strong> also has a WEB demo version, which can be used to generate Python code that can be downloaded ' +
	    'and run on the local machine, as long as you install the required Python packages.'+
		'</p>'+
		'<p>'+
		'<strong> BlockWiSARD </strong> was developed based on <strong>DuinoBlocks4Kids</strong> (<a href="http://ginape.nce.ufrj.br/LIVRE/paginas/db4k/db4k.html" target="_blank">http://ginape.nce.ufrj.br/LIVRE/paginas/db4k/db4k.html</a>) '+
        'a fork of  <strong>Ardublockly</strong> (<a href="https://ardublockly.embeddedlog.com/" target="_blank">https://ardublockly.embeddedlog.com/</a>) and '+
		'uses  <strong>Blockly</strong> (<a href="https://developers.google.com/blockly/" target="_blank">https://developers.google.com/blockly/</a> ) and'+
		'<strong> Materialize</strong> (<a href="http://materializecss.com" target="_blank">http://materializecss.com/</a>) libraries.'+
		'</p>'
		,

 /* Settings */
  compilerLocation: "Compiler Location",
  IDLElocation: "Python IDLE location",
  wisardTrainFolderDefault: "quadrado",
  compilerLocationDefault: "Compiler Location unknown",
  sketchFolder: "Sketch Folder",
  sketchFolderDefault: "Sketch Folder unknown",
  arduinoBoard: "Arduino Board",
  arduinoBoardDefault: "Arduino Board unknown",
  comPort: "COM Port",
  comPortDefault: "COM Port unknown",
  defaultIdeButton: "Default IDE Button",
  defaultIdeButtonDefault: "IDE options unknown",
  language: "Language",
  languageDefault: "Language unknown",
  sketchName: "Sketch Name",
  output_GPIO: "GPIO (Raspberry/Arduino/No GPIO)",

  /* Python output */
  pythonOpMainTitle: "Python Output",
  pythonOpWaiting: "Waiting for Python output...",
  pythonOpUploadedTitle: "Successfully Uploaded Programn",
  pythonOpVerifiedTitle: "Successfully Verified Program",
  pythonOpOpenedTitle: "Python Code opened in Python IDLE",
  pythonOpOpenedBody: "Python code must have been loaded in  python IDLE",
  pythonOpErrorTitle: "An error has occurred",


  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE output",
  arduinoOpWaiting: "Waiting for the IDE output...",
  arduinoOpUploadedTitle: "Successfully Uploaded Sketch",
  arduinoOpVerifiedTitle: "Successfully Verified Sketch",
  arduinoOpOpenedTitle: "Sketch opened in IDE",
  arduinoOpOpenedBody: "The sketch should be loaded in the Arduino IDE.",
  arduinoOpErrorTitle: "There has been an error",
  arduinoOpErrorIdContext_0: "No error.",
  arduinoOpErrorIdContext_1: "Build or Upload failed.",
  arduinoOpErrorIdContext_2: "Sketch not found.",
  arduinoOpErrorIdContext_3: "Invalid command line argument.",
  arduinoOpErrorIdContext_4: "Preference passed to 'get-pref' flag does not exist.",
  arduinoOpErrorIdContext_5: "Not Clear, but Arduino IDE sometimes errors with this.",
  arduinoOpErrorIdContext_50: "Unexpected error code from Arduino IDE",
  arduinoOpErrorIdContext_51: "Could not create sketch file",
  arduinoOpErrorIdContext_52: "Invalid path to internally created sketch file",
  arduinoOpErrorIdContext_53: "Unable to find Arduino IDE<br>" +
                              "The compiler directory has not been set correctly.<br>" +
                              "Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "What should we do with the Sketch?<br>" +
                              "The launch IDE option has not been set.<br>" +
                              "Please select an IDE option in the Settings.",
  arduinoOpErrorIdContext_55: "Serial Port unavailable<br>" +
                              "The Serial Port is not accessible.<br>" +
                              "Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdContext_56: "Unknown Arduino Board<br>" +
                              "The Arduino Board has not been set.<br>" +
                              "Please select the appropriate Arduino Board from the settings.",
  arduinoOpErrorIdContext_52: "Unexpected server error.",
  arduinoOpErrorIdContext_64: "Unable to parse sent JSON.",
  arduinoOpErrorUnknown: "Unexpected error",

  /* Modals */
  noServerTitle: "BlockWiSARD app not running",
  noServerBody: "<p>Cannot run block-generated Python program.</p>" +
                "<p>To send the block-generated python program to the python interpreter" +
                " you must install BlockWiSARD on your computer. </p>" +
                "<p>However, you can download the generated python program by going to the hidden menu" +
                " at the top left of this page and selecting the option <strong>Python Code" +
                " </strong> and then the <strong> Save </strong> option. To run the program" +
                " saved on your computer you need to have the required python packages installed."
  ,
  noServerNoLangBody: "If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "Load new blocks?",
  loadNewBlocksBody: "Loading a new XML file will replace the current blocks from the workspace.<br>" +
                     "Are you sure you want to proceed?",
  discardBlocksTitle: "Delete blocks?",
  discardBlocksBody: "There are %1 blocks on the workspace.<br>" +
                     "Are you sure you want to delete them?",
  invalidXmlTitle: "Invalid XML",
  invalidXmlBody: "The XML file was not successfully parsed into blocks. Please review the XML code and try again.",
  cleanWorkSpaceAndOpenTitle: 'Open Block Program?',
  cleanWorkSpaceAndOpenBody:'Opening a Saved program will reset any blocks in the workspace.\n ' +
                            'Are you sure you want to continue?',
  /* Tooltips */
  uploadingSketch: "Sending Program to Python Interpreter",
  stopProgram: 'Stoping Programa Execution',
  uploadSketch: "Send Program",
  verifyingSketch: "Verifying Sketch...",
  verifySketch: "Verify the Sketch",
  openingSketch: "Opening Program in Python IDLE...",
  openSketch: "Open Program in Python IDLE",
  notImplemented: "Function not yet implemented",
  /* Prompts noServerBody*/
  ok: "OK",
  okay: "Okay",
  cancel: "Cancel",
  return: "Return",
  // Cards
  arduinoSourceCode: "Arduino Source Code",
  blocksXml: "Blocks XML",

  /* Toolbox Categories*/
  catWiSARD: "WiSARD",
  catControls: "Control",
  catConditions: "Conditions",
  catSensors: "Sensors",
  catLEDs: "LEDs",
  catMotors: "Motors",
  catDisplays: "Displays",
  catAudio: "Audio",
  catRobot: "Robot",
};
