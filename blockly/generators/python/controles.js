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
 * @fileoverview Generating Code for DBK special Blocks.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Python.Raspberry.Controles');
goog.require('Blockly.Python');

//--------------------------------------------
//Generators included by RLQ - DB4K
//--------------------------------------------


var arduinoSerialSpeed = arduino_serial_speed;
var arduinoTempoEsperaComPort = arduino_tempo_espera_ComPort;
var arduindoSerialVarName = "ArduinoSerial";
var arduinoSerialSpeedName = "velocidadeComunicacao"
var arduinoSerialNumberName = "COMPortNumber"

//--------------------------------------------
//Bloco Esperar
//--------------------------------------------


Blockly.Python['sleep'] = function(block) {
  var time = block.getFieldValue('time');
   Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
  // TODO: Assemble Arduino into code variable.
  var code =  'sleep(' + time + ')\n';
  return code;
};

//--------------------------------------------
//Bloco Repetir
//--------------------------------------------
Blockly.Python['repetir'] = function(block) {
  var branch= Blockly.Python.statementToCode(block, 'repeat_code');
  var repeats = block.getFieldValue('numero_repeticoes');
  branch = Blockly.Python.addLoopTrap(branch, block.id);

  if (branch.length == 0){
    var code ='for count in range(' + repeats + '):()\n';
  }else {
    var code ='for count in range(' + repeats + '):\n'	 +
             branch + '\n'
  }
  
  return code;
};

//--------------------------------------------
//Bloco Repetir Sempre
//--------------------------------------------
Blockly.Python['repetir_sempre'] = function(block) {
  var branch= Blockly.Python.statementToCode(block, 'repeat_code');
  var repeats = block.getFieldValue('numero_repeticoes');
  branch = Blockly.Python.addLoopTrap(branch, block.id);

  if (branch.length == 0){
    var code ='while True:()\n';
  }else {
    var code ='while True:\n'	 +
         branch + '\n'
  }
  
  return code;
};


//--------------------------------------------
//Bloco Enquanto
//--------------------------------------------
Blockly.Python['enquanto'] = function(block) {
  var value_condicao = Blockly.Python.valueToCode(block, 'condicao',
      Blockly.Python.ORDER_NONE) || 'False';
  var statements_codigo_enquanto = Blockly.Python.statementToCode(block, 'codigo_enquanto');

  if (statements_codigo_enquanto.length == 0){
     var code = 'while ' + value_condicao + ':()\n';
  }else {
     var code = 'while ' + value_condicao + ':\n' +
	            statements_codigo_enquanto + '\n';
  }
  return code;
};

//--------------------------------------------
//Bloco Condicional Simples
//--------------------------------------------
Blockly.Python['condicional_simples'] = function(block) {
  var value_condicao =  Blockly.Python.valueToCode(block, 'condicao',
      Blockly.Python.ORDER_NONE) || 'False';

  var statements_codigo_condicional = Blockly.Python.statementToCode(block, 'codigo_condicional');

  if (statements_codigo_condicional.length == 0){
     var code = 'if ' + value_condicao + ':()\n';
  }else {
     var code = 'if ' + value_condicao + ':\n' +
	          statements_codigo_condicional + '\n';
  }

  return code;
  
};

//--------------------------------------------
//Bloco Condicional Completo
//--------------------------------------------
Blockly.Python['condicional_completo'] = function(block) {
  var value_condicao =  Blockly.Python.valueToCode(block, 'condicao',
      Blockly.Python.ORDER_NONE) || 'False';
  var statements_codigo_condicional = Blockly.Python.statementToCode(block, 'codigo_condicional');
  var statements_codigo_execcao = Blockly.Python.statementToCode(block, 'codigo_execcao');

  if (statements_codigo_condicional.length == 0){
      var codeIF = 'if ' + value_condicao + ':()\n';
  }else {
      var codeIF = 'if ' + value_condicao + ':\n' +
	  		    statements_codigo_condicional;
  }

  if (statements_codigo_execcao.length == 0){
      var codeElse = 'else:()\n';
  }else {
       var codeElse = 'else:\n' +
	          statements_codigo_execcao + '\n';
  }


  var code = codeIF + codeElse;
  
  return code ;
  
}


//--------------------------------------------
//Bloco Comunicação Arduino
//--------------------------------------------



function codigo_inicializa_Porta_Serial(){
    var codigo =

	"   try:\n" +
	"	   ser = serial.Serial(port,speed)\n" +
	"	   sleep("+ arduinoTempoEsperaComPort + ")\n" +
	"	   ser.reset_input_buffer()\n" +
	"	   sleep(0.5)\n" +
	"	   return ser\n" +
	"   except serial.SerialException:\n" +
	"	   print('"+ Blockly.Msg.CONTROLS_COMPORT_SERIAL_UNDEFINED +"')\n" +
	"	   sys.exit(1)\n";

    return codigo;
}


Blockly.Python['startSerial'] = function(block) {
  var serialNumber = "'" + block.getFieldValue('comPort') + "'";
  Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
  Blockly.Python.definitions_['com_port_number'] = arduinoSerialNumberName +"=" + serialNumber;
  Blockly.Python.definitions_['com_port_speed'] = arduinoSerialSpeedName +"=" + arduinoSerialSpeed;
  Blockly.Python.definitions_['Import_serial'] = 'import serial';
  Blockly.Python.definitions_['function_inicializa_Porta_Serial'] =
        'def inicializa_Porta_Serial(port,speed):\n'+ codigo_inicializa_Porta_Serial();

  return arduindoSerialVarName + "= inicializa_Porta_Serial("+arduinoSerialNumberName+","+ arduinoSerialSpeedName +")\n" ;

};






//-----------------------------------------------------------------
//*****************************************************************
//------------------------------------------------------------


Blockly.Python['corrupt_code_block'] = function(block) {
  var code = "#codigo corrompido\n";
  return code;
};

Blockly.Python['corrupt_condition_block'] = function(block) {
  var code = "#codigo corrompido\n";
  return code;
};

Blockly.Python['gera_codigo_teste'] = function(block) {

  //Blockly.Python.definitions_['first_line'] = '#!/usr/bin/env python;'
  //Blockly.Python.definitions_['second_line'] = '# -*- coding: utf-8 -*-;'
  Blockly.Python.definitions_['future1'] = 'from __future__ import print_function'
  Blockly.Python.definitions_['cv2'] = 'import cv2'
  Blockly.Python.definitions_['time'] = 'import time'
  Blockly.Python.definitions_['sys'] = 'import sys'
  Blockly.Python.definitions_['os'] = 'import os'

  var code = "path=os.path.dirname(os.path.abspath(__file__))\n" +
             "image = cv2.imread(path + '/imagem.jpeg',0)\n" +
			 "cv2.imshow('image',image) # the title and path to image\n" +
			 "cv2.waitKey(0) # Waits for the next key to be pressed\n" +
		     "cv2.destroyAllWindows()\n";
  return code;
};




Blockly.Python['gera_codigo_teste_2'] = function(block) {
  Blockly.Python.definitions_['Tkinter'] = 'from tkinter import *';
  Blockly.Python.definitions_['callback_blocoteste'] = 'def callback():\n'  +
                               '   print (e.get()) # This is the text you may want to use later';

  var code = "master = Tk()\n" +
             "e = Entry(master)\n" +
		     "e.pack()\n" +
		     "e.focus_set()\n" +
		     "b = Button(master, text = 'OK', width = 10, command = callback)\n" +
		     "b.pack()\n" +
		     "mainloop()\n";
  return code;
};



