/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Code for WiSARD special Blocks.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Python.wisard');
goog.require('Blockly.Python');

//--------------------------------------------
//Generators included by RLQ - BlockWiSARD
//--------------------------------------------

var wisardVerbose=wisard_verbose;
var wisardAdressSize = wisard_adress_size;
var wisardBleaching = wisard_bleaching;
var wisardConfidence= wisard_limite_confianca;
var wisardIgnoreZero = wisard_ignore_zero;
var wisardRetinaHeight= wisard_tamanho_retina;
var wisardRetinaWidth= wisard_tamanho_retina;
var nome_var_altura_retina = "alturaRetina";
var nome_var_largura_retina = "larguraRetina";
var array_pattern_values = [];
var array_train_pattern_values = [];
var label_value;
var var_nome_imagem_tratada = 'handledImage';
var var_nome_imagem_branca = "whiteImage";
var var_rotulo_imagem_reconhecida = 'rotuloImgemReconhedia';
var idCam = wisard_idcam;
var tempo_espera_cam = wisard_tempo_espera_cam;
var nome_janela_camera = "'WebCAM'";
var nome_janela_imagem = "'Imagem'";
var nome_janela_imagem_mental = "'Imagem Mental'";
var nome_janela_imagem_fotografada = "'Imagem processada e fotografada'";
var threshold_value = BlockWiSARD_threshold_value;



/*************************************************/
/*Códigos Auxiliares                             */
/*************************************************/


function codigo_cria_janela_exibicao_imagens(){
    var codigo =
       "   cv2.destroyAllWindows()\n"+
       "   graphics = tkinter.Tk()\n"+
       "   halfScreenWidth =  round((graphics.winfo_screenwidth()/2) + (10 * graphics.winfo_screenheight()/100))\n" +
       /*
       "   halfScrennHeight = round((graphics.winfo_screenheight()/2)- (10 * graphics.winfo_screenheight()/100))\n" +
       */
       "   graphics.destroy()\n" +
       "   cv2.namedWindow(title, cv2.WINDOW_NORMAL)\n" +
       "   cv2.moveWindow(title,halfScreenWidth+100,10)\n" +
       "   cv2.resizeWindow(title,w+100,h+100)\n" +       
       "   k = cv2.waitKey(10)\n";
    return codigo;
}


function codigo_conecta_camera(){
    var codigo =
    "   cam = cv2.VideoCapture(idcam)\n" +
    "   if cam is None or not cam.isOpened():\n" +
    "      print('" + Blockly.Msg.CAM_ID_ALLERT + "' + str(idcam) + '"+ Blockly.Msg.CAM_ID_NOT_AVAIABLE + "')\n" +
    "      sys.exit(1)\n" +
    "   return(cam)\n";
    return codigo;
}

function codigo_treina_imagens_disco(){
    var codigo =
    "   print('"+ Blockly.Msg.PRINT_TREINING_WISARD_WITH_FOLDER_IMAGES + "',label,'...', end='')\n" +
    "   criaJanelaExibicaoImagens("+ nome_var_largura_retina +"," + nome_var_altura_retina +"," + nome_janela_imagem  +")\n" +
    "   X = []\n" +
    "   y = []\n" +
    "   formats = ['*.jpg','*.png','*.bmp']\n" +
    "   currentpath = os.path.dirname(os.path.abspath(__file__))\n" +
    "   parentpath = os.path.dirname(currentpath)\n" +
    "   for format in formats:\n" +
    "      path = os.path.join (parentpath, 'A-IMAGENS_TREINO', folderName, format)\n" +
    "      files = glob.glob(path)\n" +
    "      if files:\n" +
    "         for name in files:\n" +
    "            try:\n" +
    "               img = cv2.imread(name)\n" +
    "               imgToImput = preparaImagemParaWiSARD(img)\n" +
    "               cv2.imshow("+ nome_janela_imagem +",imgToImput)\n" +
    "               k = cv2.waitKey(10)\n" +
    "               input_data = [(1 if e==255 else 0) for e in imgToImput.flatten()]\n" +
    "               X.append(input_data)\n" +
    "               y.append(label)\n" +
    "            except IOError as exc:\n" +
    "               if exc.errno != errno.EISDIR:\n" +
    "                  raise\n" +
    "         wsd.fit(X, y)\n" +
    "   cv2.destroyWindow("+ nome_janela_imagem +")\n" +
    "   print('"+ Blockly.Msg.PRINT_END_TREINING_WISARD_WITH_FOLDER_IMAGES + "')\n";

    return codigo;
}


function codigo_treina_imagem_unica(){
    var codigo =
    "   X = []\n" +
    "   y = []\n" +
    "   try:\n" +
    "      input_data = [(1 if e==255 else 0) for e in imagem.flatten()]\n" +
    "      X.append(input_data)\n" +
    "      y.append(label)\n" +
    "   except IOError as exc:\n" +
    "      if exc.errno != errno.EISDIR:\n" +
    "         raise\n" +
    "   wsd.fit(X, y)\n"+
    "   if salvar:\n" +
    "      currentpath = os.path.dirname(os.path.abspath(__file__))\n" +
    "      parentpath = os.path.dirname(currentpath)\n" +
    "      path = os.path.join (parentpath, 'A-IMAGENS_TREINO', label)\n" +
    "      if not os.path.isdir(path):\n" +
    "         try:\n" +
    "            os.mkdir(path)\n" +
    "            index =len(os.listdir(path)) + 1\n" +
    "            image_name = label + '_' + str (index) + '.jpg'\n" +
    "            image_path = os.path.join(path,image_name)\n" +
    "            cv2.imwrite(image_path, imagem)\n" +
    "         except OSError as error:\n" +
    "            print(error)\n" +
    "      else: \n" +
    "            index =len(os.listdir(path)) + 1\n" +
    "            image_name = label + '_' + str (index) + '.jpg'\n" +
    "            image_path = os.path.join(path,image_name)\n" +
    "            cv2.imwrite(image_path, imagem)\n";

    return codigo;
}

function codigo_reconhece_imagem(){
    var codigo =
    "   Z=[]\n" +
    "   input_data = [(1 if e==255 else 0) for e in imagemTratada.flatten()]\n" +
    "   Z.append(input_data)\n" +
    "   out = wsd.predict(Z)\n" +
    "   #image_id_conf =  [out[0]['class'],out[0]['confidence']]\n" +
    "   #if image_id_conf[1]<" + wisardConfidence +":\n" +
    "      #return 'nao sei'\n" +
    "   #else:\n" +
    "   return out[0]";
    return codigo;
}

function codigo_prepara_imagem_para_WiSARD(){
    var codigo =
    "   image_gray = cv2.cvtColor(imagemCapturada, cv2.COLOR_BGR2GRAY)\n" +
    "   _, inverted_image = cv2.threshold(image_gray,0, 255, cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)\n" +
    "   _, uninverted_image = cv2.threshold(inverted_image, 0, 255, cv2.THRESH_BINARY_INV)\n" +
    "   try:\n" +
    "      _, contours, hierarchy = cv2.findContours(inverted_image, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)\n" +
    "   except:\n" +
    "      contours, hierarchy = cv2.findContours(inverted_image, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)\n" +
    "   x1, y1, w1, h1 = cv2.boundingRect(uninverted_image)\n" +
    "   fullSize = w1 * h1\n" +
    "   detected_image = uninverted_image\n" +
    "   if contours:\n" +
    "      maxSize = 1\n" +
    "      for contour in contours:\n" +
    "         x2, y2, w2, h2 = cv2.boundingRect(contour)\n" +
    "         if ((w2 * h2) >= maxSize) and (w2<=w1) and (h2<=h1):\n" +
    "            maxSize = w2 * h2\n" +
    "            detected_image = uninverted_image[y2:y2 + h2, x2:x2 + w2]\n" +
    "   detected_image = adaptaImagemRetina(detected_image,("+ nome_var_largura_retina +"," + nome_var_altura_retina +"))\n" +
    "   return detected_image\n";

    return codigo;
}


function codigo_adapta_imagem_retina(){
    var codigo =
    "   '''\n" +
    "   This method code was developed by \n"+
    "      https://stackoverflow.com/users/5087436/alkasm &\n" +
    "      https://stackoverflow.com/users/492372/london-guy\n" +
    "   '''\n" +
    "   h, w = img.shape[:2]\n" +
    "   sh, sw = size\n\n" +
    "   # interpolation method\n" +
    "   if h > sh or w > sw: # shrinking image\n" +
    "      interp = cv2.INTER_AREA\n\n" +
    "   else: # stretching image\n" +
    "      interp = cv2.INTER_CUBIC\n\n" +
    "   # aspect ratio of image\n" +
    "   aspect = float(w)/h\n" +
    "   saspect = float(sw)/sh\n\n" +
    "   if (saspect > aspect) or ((saspect == 1) and (aspect <= 1)):  # new horizontal image\n" +
    "       new_h = sh\n" +
    "       new_w = np.round(new_h * aspect).astype(int)\n" +
    "       pad_horz = float(sw - new_w) / 2\n" +
    "       pad_left, pad_right = np.floor(pad_horz).astype(int), np.ceil(pad_horz).astype(int)\n" +
    "       pad_top, pad_bot = 0, 0\n\n" +
    "   elif (saspect < aspect) or ((saspect == 1) and (aspect >= 1)):  # new vertical image\n" +
    "      new_w = sw\n" +
    "      new_h = np.round(float(new_w) / aspect).astype(int)\n" +
    "      pad_vert = float(sh - new_h) / 2\n" +
    "      pad_top, pad_bot = np.floor(pad_vert).astype(int), np.ceil(pad_vert).astype(int)\n" +
    "      pad_left, pad_right = 0, 0\n\n" +
    "   # set pad color\n" +
    "   if len(img.shape) == 3 and not isinstance(padColor, (list, tuple, np.ndarray)): # color image but only one color provided\n" +
    "      padColor = [padColor]*3\n\n" +
    "   # scale and pad\n" +
    "   scaled_img = cv2.resize(img, (new_w, new_h), interpolation=interp)\n" +
    "   scaled_img = cv2.copyMakeBorder(scaled_img, pad_top, pad_bot, pad_left, pad_right, borderType=cv2.BORDER_CONSTANT, value=padColor)\n\n" +
    "   return scaled_img\n";

    return codigo;
}

function codigo_apresenta_imagem_mental(){
    var codigo =
    "   print('"+ Blockly.Msg.MENTAL_IMAGE_GENERATING + "',label,'...')\n" +
    "   try:\n" +
    "      classMentalImage = wsd.mental_image(label)\n"+
    "      mentalImage = np.asarray(classMentalImage).reshape(("+nome_var_largura_retina +","+ nome_var_altura_retina+"))\n" +
    "      mentalImage =(np.array(mentalImage) / np.max(mentalImage)) * 255\n"+ 
    "      mentalImage = mentalImage.astype(np.uint8)\n" +
    "      criaJanelaExibicaoImagens("+ nome_var_largura_retina +"," + nome_var_altura_retina +"," + nome_janela_imagem_mental  +")\n" +
    "      cv2.imshow("+nome_janela_imagem_mental +",mentalImage)\n" +
    "      k=cv2.waitKey(10) \n" +
    "      print("+ Blockly.Msg.MENTAL_IMAGE_SHOWN +")\n" +
    "   except:\n" +
    "      print("+ Blockly.Msg.MENTAL_IMAGE_CLASS_NOT_TRAINED_BEFORE + "+label+" + Blockly.Msg.MENTAL_IMAGE_CLASS_NOT_TRAINED_AFTER +")\n";

    return codigo;
}

function codigo_fotografa_e_trata(){
    var codigo =
    
    "   cv2.destroyAllWindows()\n"+  
    "   title = " + nome_janela_camera + " \n" +
    "   graphics = tkinter.Tk()\n"+
    "   halfScreenWidth =  round((graphics.winfo_screenwidth()/2) + (10 * graphics.winfo_screenheight()/100))\n" +
    "   halfScrennHeight = round((graphics.winfo_screenheight()/2)- (10 * graphics.winfo_screenheight()/100))\n" +
    "   graphics.destroy()\n" +
    "   ret,frame = cam.read()\n" +
    "   heightCAM, widthCAM, channels = frame.shape\n" +
    "   heightCAM = round((80 * heightCAM)/100)\n" +
    "   widthCAM = round((80 *widthCAM)/100)\n" +
    "   print('Capturando a Imagem')\n" +
    "   cv2.namedWindow(title, cv2.WINDOW_NORMAL)\n" +
    "   cv2.moveWindow(title,halfScreenWidth,halfScrennHeight)\n" + 
    "   cv2.resizeWindow(title,widthCAM,heightCAM)\n" +          
    "   startTime = time()\n" +
    "   elapsedTime = 0\n" +
    "   while elapsedTime < " + wisard_tempo_espera_cam + " :\n" +
    "      ret,frame = cam.read()\n" +
    "      frame = cv2.flip(frame, 1)\n" + 
    "      cv2.imshow(title, frame)\n" +
    "      k = cv2.waitKey(1)\n" +
    "      elapsedTime = time() - startTime\n" +
    "   image_to_rec = preparaImagemParaWiSARD(frame)\n" +
    "   print('Imagem Capturada')\n" +
    "   return image_to_rec\n";
    return codigo;
}

function codigo_mostra_imagem_fotografada(){
    var codigo =
    "   try:\n" +
    "      criaJanelaExibicaoImagens("+ nome_var_largura_retina +"," + nome_var_altura_retina +"," + nome_janela_imagem_fotografada  +")\n" +
    "      cv2.imshow("+nome_janela_imagem_fotografada +",imagem)\n" +
    "      k=cv2.waitKey(10) \n" +
    "   except:\n" +
    "      print("+ Blockly.Msg.NO_IMAGE_WAS_PHOTOGRAFED +")\n";
    return codigo;
}


function codigo_cria_imagem_branca(){
    var codigo =
    "   imagemBranca = np.zeros(["+ nome_var_largura_retina +"," + nome_var_altura_retina+ ",1],dtype=np.uint8)\n" +
    "   imagemBranca.fill(255)\n" +
    "   return imagemBranca\n";
    return codigo;
}






/*************************************************/
/*Códigos Blocos                                 */
/*************************************************/

Blockly.Python['create_wisard'] = function(block) {
  var addressSize = wisardAdressSize
  var verbose = wisardVerbose;
  Blockly.Python.definitions_['import_PyWANN3'] = 'from  PyWANN3.WiSARD import WiSARD';

  Blockly.Python.definitions_['addressSize'] = 'addressSize =' + wisardAdressSize;
  Blockly.Python.definitions_['ignoreZero'] = 'ignoreZero =' + wisardIgnoreZero ;
  Blockly.Python.definitions_['bleaching'] = 'bleaching =' + wisardBleaching;
  Blockly.Python.definitions_['confidence'] = 'confidence =' + wisardConfidence ;


  var code =
             "print('"+ Blockly.Msg.PRINT_CREATING_WISARD + "')\n" +
             "wsd = WiSARD(num_bits_addr= addressSize, ignore_zero_addr=ignoreZero, bleaching=bleaching, confidence_threshold = confidence)\n" +
	         "print('"+ Blockly.Msg.PRINT_END_CREATE_WISARD  + "')\n";
  return code;
}


Blockly.Python['block_wisard_train_pattern_picture_group'] = function(block) {

  var rotulo = block.getFieldValue('label');
  var folder_name = block.getFieldValue('nome_da_pasta');

  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  Blockly.Python.definitions_['import_glob'] = 'import glob';
  Blockly.Python.definitions_['import_errno'] = 'import errno';
  Blockly.Python.definitions_['import_os'] = 'import os';
  Blockly.Python.definitions_['import tkinter'] = 'import tkinter';

  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;

  Blockly.Python.definitions_['function_adapta_imagem_retina'] =
        'def adaptaImagemRetina(img, size, padColor=255):\n'+ codigo_adapta_imagem_retina();

  Blockly.Python.definitions_['function_prepara_imagem_para_WiSARD'] =
        'def preparaImagemParaWiSARD(imagemCapturada):\n'+ codigo_prepara_imagem_para_WiSARD();

  Blockly.Python.definitions_['function_train_pattern_picture_group'] =
        'def aprendaComImagensDaPasta(label,folderName):\n'+ codigo_treina_imagens_disco();

  Blockly.Python.definitions_['function_cria_janela_exibicao_imagens'] =
        'def criaJanelaExibicaoImagens(w,h,title):\n'+ codigo_cria_janela_exibicao_imagens();

  /*var rotuloList = Blockly.Rotulos.allRotulos(this.workspace); */

  var code = "aprendaComImagensDaPasta('"+ rotulo +"','" + folder_name+"')\n";
  return code;
};


Blockly.Python['block_wisard_train_pattern_picture_single'] = function(block) {
  var rotulo = block.getFieldValue('label');
  var salvar =  block.getFieldValue('salvar');

  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  Blockly.Python.definitions_['import_glob'] = 'import glob';
  Blockly.Python.definitions_['import_errno'] = 'import errno';
  Blockly.Python.definitions_['import_os'] = 'import os';

  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;

  Blockly.Python.definitions_['function_adapta_imagem_retina'] =
        'def adaptaImagemRetina(img, size, padColor=255):\n'+ codigo_adapta_imagem_retina();

  Blockly.Python.definitions_['function_prepara_imagem_para_WiSARD'] =
        'def preparaImagemParaWiSARD(imagemCapturada):\n'+ codigo_prepara_imagem_para_WiSARD();

  Blockly.Python.definitions_['function_train_pattern_picture_single'] =
        'def aprendaComImagemFotografada(imagem,salvar,label):\n'+ codigo_treina_imagem_unica();

  switch(salvar) {
	case 'FALSE':
       var code = "aprendaComImagemFotografada("+ var_nome_imagem_tratada + "," + "False"  +",'"+ rotulo +"')\n";
	   break;
	case 'TRUE':
       var code = "aprendaComImagemFotografada("+ var_nome_imagem_tratada + "," + "True"  + ",'"+ rotulo +"')\n";
	   break;
  }
  return code;
};


Blockly.Python['block_wisard_classify_pattern_picture'] = function(block) {

  var rotulo = block.getFieldValue('label');

  Blockly.Python.definitions_['import_sys'] = 'import sys';
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_os'] = 'import os';
  Blockly.Python.definitions_['import_Time'] = 'from time import sleep';

  Blockly.Python.definitions_['function_rec_picture'] =
        'def reconheceImagem(imagemTratada):\n'+ codigo_reconhece_imagem();

   var code =  var_rotulo_imagem_reconhecida +  "=reconheceImagem(" + var_nome_imagem_tratada +")\n"

  return code;

};


Blockly.Python['block_wisard_condicionante_classify_pattern_picture'] = function(block) {
  var rotulo = block.getFieldValue('label');

  Blockly.Python.definitions_[var_rotulo_imagem_reconhecida] = var_rotulo_imagem_reconhecida + '= ""';

  var code = var_rotulo_imagem_reconhecida + '=="' + rotulo +'"';

  return [code, Blockly.Python.ORDER_CONDITIONAL];

};

Blockly.Python['block_wisard_condicionante_unclassified'] = function(block) {

  Blockly.Python.definitions_[var_rotulo_imagem_reconhecida] = var_rotulo_imagem_reconhecida + '= ""';

  var code = var_rotulo_imagem_reconhecida + '=="' + 'none' +'"';

  return [code, Blockly.Python.ORDER_CONDITIONAL];

};


Blockly.Python['block_wisard_show_mental_Image'] = function(block) {

  var rotulo = block.getFieldValue('label');

  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  Blockly.Python.definitions_['import_glob'] = 'import glob';
  Blockly.Python.definitions_['import_errno'] = 'import errno';
  Blockly.Python.definitions_['import_os'] = 'import os';
  Blockly.Python.definitions_['import tkinter'] = 'import tkinter';  

  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;


  Blockly.Python.definitions_['function_cria_janela_exibicao_imagens'] =
        'def criaJanelaExibicaoImagens(w,h,title):\n'+ codigo_cria_janela_exibicao_imagens();
        
  Blockly.Python.definitions_['function_apresenta_imagem_mental'] =
        'def apresentaImagemMental(label):\n'+ codigo_apresenta_imagem_mental();

  var code = "apresentaImagemMental('"+ rotulo+"')\n";
  return code;
}



Blockly.Python['block_wisard_get_picture'] = function(block) {

  Blockly.Python.definitions_['import_sys'] = 'import sys';
  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
  Blockly.Python.definitions_['import_TimeTime'] = 'from time import time';
  Blockly.Python.definitions_['declara_cam'] = 'camId =' + idCam;
  Blockly.Python.definitions_['import tkinter'] = 'import tkinter';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';

  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;

  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;

  Blockly.Python.definitions_['function_connect_cam'] =
        'def conectaCamera(idcam):\n'+ codigo_conecta_camera();
  Blockly.Python.definitions_['function_get_picture'] =
        'def fotografaETrata(cam):\n'+ codigo_fotografa_e_trata();
  Blockly.Python.definitions_['function_prepara_imagem_para_WiSARD'] =
        'def preparaImagemParaWiSARD(imagemCapturada):\n'+ codigo_prepara_imagem_para_WiSARD();
  Blockly.Python.definitions_['function_adapta_imagem_retina'] =
        'def adaptaImagemRetina(img, size, padColor=255):\n'+ codigo_adapta_imagem_retina();
  Blockly.Python.definitions_['conecta_cam'] = 'cam = conectaCamera(camId)'

  var code = var_nome_imagem_tratada + '=fotografaETrata(cam)\n';

  return code

};


/*
Blockly.Python['block_wisard_show_picture'] = function(block) {

  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import tkinter'] = 'import tkinter';

  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;


  Blockly.Python.definitions_['function_cria_janela_exibicao_imagens'] =
        'def criaJanelaExibicaoImagens(w,h,title):\n'+ codigo_cria_janela_exibicao_imagens();

  Blockly.Python.definitions_['function_mostra_imagem_fotografada'] =
        'def apresentaImagemFotografada():\n'+ codigo_mostra_imagem_fotografada();

  var code = "apresentaImagemFotografada()\n";
  return code;
};

*/

Blockly.Python['apresenta_imagem_fotografada'] = function(block) {
  Blockly.Python.definitions_[var_nome_imagem_tratada] = var_nome_imagem_tratada + ' = None' ;
  var code =  var_nome_imagem_tratada ;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mostra_imagem_no_terminal_de_video'] = function(block) {
   var imagem_para_mostrar = Blockly.Python.valueToCode(block, 'IMAGE',
   Blockly.Python.ORDER_NONE);

  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import tkinter'] = 'import tkinter';

  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;


  Blockly.Python.definitions_['function_cria_janela_exibicao_imagens'] =
        'def criaJanelaExibicaoImagens(w,h,title):\n'+ codigo_cria_janela_exibicao_imagens();

  Blockly.Python.definitions_['function_mostra_imagem_fotografada'] =
        'def apresentaImagemFotografada(imagem):\n'+ codigo_mostra_imagem_fotografada();

  var code = "apresentaImagemFotografada("+ imagem_para_mostrar +")\n";

  return code;

};

Blockly.Python['apresenta_imagem_branca'] = function(block) {

  Blockly.Python.definitions_['import_cv2'] = 'import cv2';
  Blockly.Python.definitions_['import_numpy'] = 'import numpy as np';
  Blockly.Python.definitions_['var_altura_retina'] = nome_var_altura_retina + '=' + wisardRetinaHeight;
  Blockly.Python.definitions_['var_largura_retina'] = nome_var_largura_retina  + '=' + wisardRetinaWidth;
  Blockly.Python.definitions_['function_cria_imagem_branca'] =
        'def criaImagemBranca():\n'+ codigo_cria_imagem_branca();
  Blockly.Python.definitions_['var_imagem_branca'] = var_nome_imagem_branca + " = criaImagemBranca()\n";

  var code =  var_nome_imagem_branca;
  return [code, Blockly.Python.ORDER_ATOMIC];
};









/*-----------------------------------------------------------------------------------------*/

Blockly.Python['block_wisard_train_pattern_text'] = function(block) {
  array_train_pattern_values [0] = Number(block.getFieldValue('value1'));
  array_train_pattern_values [1] = Number(block.getFieldValue('value2'));
  array_train_pattern_values [2] = Number(block.getFieldValue('value3'));
  array_train_pattern_values [3] = Number(block.getFieldValue('value4'));
  array_train_pattern_values [4] = Number(block.getFieldValue('value5'));
  array_train_pattern_values [5] = Number(block.getFieldValue('value6'));
  array_train_pattern_values [6] = Number(block.getFieldValue('value7'));
  array_train_pattern_values [7] = Number(block.getFieldValue('value8'));
  label_value = block.getFieldValue('label')

  var str_X = '[[';
  for (var i = 0; i < 7; i++) {
      str_X = str_X + array_train_pattern_values [i] + ',' ;
  }
	str_X = str_X + array_train_pattern_values [i] + ']]'

  var code  = "wsd.train(" + str_X  + ",['" + label_value + "'])\n"
  return code;
};


Blockly.Python['block_wisard_classify_pattern_text'] = function(block) {
  array_pattern_values [0] = Number(block.getFieldValue('value1'));
  array_pattern_values [1] = Number(block.getFieldValue('value2'));
  array_pattern_values [2] = Number(block.getFieldValue('value3'));
  array_pattern_values [3] = Number(block.getFieldValue('value4'));
  array_pattern_values [4] = Number(block.getFieldValue('value5'));
  array_pattern_values [5] = Number(block.getFieldValue('value6'));
  array_pattern_values [6] = Number(block.getFieldValue('value7'));
  array_pattern_values [7] = Number(block.getFieldValue('value8'));

  var rotulo = block.getFieldValue('label');

  var str_pattern = '[[';
  for (var i = 0; i < 7; i++) {
      str_pattern = str_pattern + array_pattern_values [i] + ',' ;
  }
	str_pattern = str_pattern + array_pattern_values [i] + ']]'

     Blockly.Python.definitions_['function_classify_text'] =  'def classificaEntrada(str_pattern):\n'+
                                                         '  out = wsd.classify(str_pattern)\n' +
                                                         '  return out[0]'

	 var code = "classificaEntrada("+ str_pattern + ")=='" + rotulo +"'";

     return [code, Blockly.Python.ORDER_CONDITIONAL];

};


/*
Blockly.Python['label_get'] = function(block) {
  var code = "'" + block.getFieldValue('VAR') + "'"
  return [code, Blockly.Python.ORDER_ATOMIC];
};
*/
