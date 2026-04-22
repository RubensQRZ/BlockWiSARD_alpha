/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview BlockWiSARDBlocks On Blockly.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Blocks.Raspberry.Sensores_test_parent_blocks);
goog.require('Blockly.Blocks');

var cor_condicionantes = 65;
var cor_sensores = 80;
var cor_sensor_init = 100;

var conditionalTypes = ['enquanto', 'condicional_simples', 'condicional_completo'];


/*********************************************************************************
/* Funções para desabilitar blocos - Tipo 1
**********************************************************************************/

/*

function getBlocksByType(type) {
  var blocks = [];
  for (var blockID in Blockly.mainWorkspace.blockDB_) {
    if (Blockly.mainWorkspace.blockDB_[blockID].type == type) {
      blocks.push(Blockly.mainWorkspace.blockDB_[blockID]);
    }
  }
  return(blocks);

}



function disableConditionIfPairBlockNoPresent(caller,pairBlockType,message){

    if (caller.parentBlock_ == null) {
	  caller.setWarningText(Blockly.Msg.REQUIRE_WHILE_IF_BLOCK);
      if (!caller.isInFlyout && !caller.getInheritedDisabled()) {
           caller.setDisabled(true);
	  }
    }else {
       if (getBlocksByType(pairBlockType).length == 0){
           caller.setWarningText(message);
           if (!caller.isInFlyout && !caller.getInheritedDisabled()) {
               caller.setDisabled(true);
           }
      }else {
           caller.setWarningText(null);
           caller.setDisabled(false);
     }
    }
}

*/
//----------------------------------------------------------------------


/*********************************************************************************
/* Funções para desabilitar blocos - Tipo 2
**********************************************************************************/


function findPairBlockBefore(typeSearch,caller) {
  var found_dependent_before = false;
  var blocks = [];
  var listPos = [0,0];
  var listBlocks = Blockly.mainWorkspace.getAllBlocks(true);
  var parent = null;
  var last_parent = null;
  
  //var ideOuputContent = document.getElementById('content_ide_output');
  //ideOuputContent.innerHTML = listBlocks[i].getFieldValue("corInterruptor") ;
  for (var i = 0; i < listBlocks.length; i++) {
    if (listBlocks[i].type == typeSearch) {
        
        parent = listBlocks[i].getParent();
	      
        listPos[0] = i+1;
	      blocks [0] = 1;
	      break;
    /*} else if (listBlocks[i].id == caller.id) {
	      listPos[1] = i+1;
    */
    }
  }

  while  (parent != null){
     last_parent = parent.getParent();
     if (last_parent != null){
        parent = last_parent;
     }
  }
  
  for (var k = 0; k < listBlocks.length; i++) {
    if (listBlocks[i].id == parent.id) {
	      
	      break;
    }
  }

  for (var j = i; j < listBlocks.length; j++) {
     if (listBlocks[j].id == caller.id) {
	       listPos[1] = j+1;
         break;
     }
  }

  if ((blocks.length > 0) && ( listPos[1] > listPos[0])){
    found_dependent_before = true;
  }

  return(found_dependent_before);

}


function findPairSwitchBlockBefore(caller) {
  var found_dependent_before = false;
  var blocks = [];
  var listPos = [0,0];
  var listBlocks = Blockly.mainWorkspace.getAllBlocks(true);
  //var ideOuputContent = document.getElementById('content_ide_output');
  //ideOuputContent.innerHTML = listBlocks[i].getFieldValue("corInterruptor") ;
  for (var i = 0; i < listBlocks.length; i++) {
    if (listBlocks[i].type == 'le_estado_interruptor') {
      if (listBlocks[i].getFieldValue("corInterruptor") == caller.getFieldValue("corInterruptor")){
	       listPos[0] = i+1;
	       blocks [0] = 1;
	       break;
       }
     }else if (listBlocks[i].id == caller.id) {
	    listPos[1] = i+1;
    }
  }

  for (var j = i; j < listBlocks.length; j++) {
     if (listBlocks[j].id == caller.id) {
	       listPos[1] = j+1;
     }
  }

  if ((blocks.length > 0) && ( listPos[1] > listPos[0])){
    found_dependent_before = true;
  }

  return(found_dependent_before);

}


function disableConditionIfPairBlockNoPresent(caller,pairBlockType,message){
    if (caller.parentBlock_ == null) {
	  caller.setWarningText(Blockly.Msg.REQUIRE_WHILE_IF_BLOCK);
      if (!caller.isInFlyout && !caller.getInheritedDisabled()) {
           caller.setDisabled(true);
	  }
    }else {
       if (pairBlockType == 'le_estado_interruptor'){
               if (!findPairSwitchBlockBefore(caller)){
                  caller.setWarningText(message);
                  if (!caller.isInFlyout && !caller.getInheritedDisabled()) {
                      caller.setDisabled(true);
                  }
               }else {
                  caller.setWarningText(null);
                  caller.setDisabled(false);
               }
       }else{
              if (!findPairBlockBefore(pairBlockType,caller)){
                  caller.setWarningText(message);
                  if (!caller.isInFlyout && !caller.getInheritedDisabled()) {
                      caller.setDisabled(true);
                  }
               }else {
                  caller.setWarningText(null);
                  caller.setDisabled(false);
               }
        }
    }
}


function verifyArduinoSerialBlockBefore(blockid){
      if (GPIOOutputCode == 'A'){
            if (!findPairBlockBefore("startSerial",blockid)){
               if (!blockid.isInFlyout && !blockid.getInheritedDisabled()) {
                   blockid.setDisabled(true);
               }
               blockid.setWarningText(Blockly.Msg.ARDUINO_SERIAL_BLOCK_NOT_PRESENT);
            }else {
               blockid.setWarningText(null);
               blockid.setDisabled(false);
            }
       }else {
             blockid.setWarningText(null);
             blockid.setDisabled(false);
       }
}


/*********************************************************************************
/* Sensor de Toque
**********************************************************************************/
Blockly.Blocks['le_estado_sensor_toque'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/botao.png", 30, 30, "*"))
        .appendField(Blockly.Msg.PUSH_BUTTON);
    this.setColour(cor_sensores);
 this.setTooltip(Blockly.Msg.PUSH_BUTTON_TOOLTIP);
 this.setHelpUrl("");
  },
  onchange: function(e) {
       if (GPIOOutputCode == 'C'){
                this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
                this.setDisabled(true);
       }else{
           this.setDisabled(false);
           verifyArduinoSerialBlockBefore(this);
       }
   },
};


Blockly.Blocks['condicionante_sensor_toque'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + Blockly.Msg.PUSH_BUTTON_COND_PRESSED;
    var val_2 = '\u25CB' + "  " + Blockly.Msg.PUSH_BUTTON_COND_UNPRESSED;
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/botao.png", 25, 25, "*"))
        .appendField(Blockly.Msg.PUSH_BUTTON_COND_BUTTON)
        .appendField(new Blockly.FieldDropdown([[val_1,"1"], [val_2,"0"]]), "estadoBotao");
    this.setOutput(true, null);
    this.setColour(cor_condicionantes);
    this.setTooltip(Blockly.Msg.PUSH_BUTTON_COND_TOOLTIP);
    this.setHelpUrl('');
  },
  onchange: function(e) {
     if (GPIOOutputCode == 'C'){
        this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
        this.setDisabled(true);
     }else{
        this.setDisabled(false);
        disableConditionIfPairBlockNoPresent(this,'le_estado_sensor_toque',Blockly.Msg.REQUIRE_BUTTON_BLOCK);
        if (!this.disabled){
            verifyArduinoSerialBlockBefore(this);
        }
     }
  },

};


/*********************************************************************************
/* Interruptor
**********************************************************************************/
Blockly.Blocks['le_estado_interruptor'] = {
  init: function() {
    var campoCorInterruptores = new Blockly.FieldColour('#ff0000');
    campoCorInterruptores.setColours(['#0f0','#ff0','#f00','#00f','#000']).setColumns(4);

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/interruptor.png", 30, 30, "*"))
        .appendField(Blockly.Msg.SWITCH_VERIFY)
        .appendField(Blockly.Msg.SWITCH_SWITCH_BEFORE)
		.appendField(campoCorInterruptores, "corInterruptor")
	    .appendField(Blockly.Msg.SWITCH_SWITCH_AFTER);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SWITCH_TOOLTIP);
  },
  onchange: function(e) {
       if (GPIOOutputCode == 'C'){
                this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
                this.setDisabled(true);
       }else{
           this.setDisabled(false);
           verifyArduinoSerialBlockBefore(this);
       }
   },
};


Blockly.Blocks['condicionante_interruptor'] = {
  init: function() {
    var campoCorInterruptores = new Blockly.FieldColour('#ff0000');
    campoCorInterruptores.setColours(['#0f0','#ff0','#f00','#00f','#000']).setColumns(4);
    var val_1 = '\u25CF' + "  " + Blockly.Msg.SWITCH_COND_ON;
    var val_2 = '\u25CB' + "  " + Blockly.Msg.SWITCH_COND_OFF;

    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/interruptor.png", 25, 25, "*"))
        .appendField(Blockly.Msg.SWITCH_COND_SWITCH_BEFORE)
		.appendField(campoCorInterruptores, "corInterruptor")
        .appendField(Blockly.Msg.SWITCH_COND_SWITCH_AFTER)
        .appendField(new Blockly.FieldDropdown([[val_1,"1"], [val_2,"0"]]), "estadoInterruptor");
    this.setOutput(true, null);
    this.setColour(cor_condicionantes);
    this.setTooltip(Blockly.Msg.SWITCH_COND_TOOLTIP);
    this.setHelpUrl('');
  },
  onchange: function(e) {
     if (GPIOOutputCode == 'C'){
        this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
        this.setDisabled(true);
     }else{
        this.setDisabled(false);
         disableConditionIfPairBlockNoPresent(this,'le_estado_interruptor',Blockly.Msg.REQUIRE_SWITCH_BLOCK);
        if (!this.disabled){
            verifyArduinoSerialBlockBefore(this);
        }
     }
  },
};


/*********************************************************************************
/* Sensor de Distância
**********************************************************************************/

Blockly.Blocks['le_distancia'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/sensor_distancia.png", 30, 30, "*"))
        .appendField(Blockly.Msg.ULTRASONIC);
    this.setColour(cor_sensores);
 this.setTooltip(Blockly.Msg.ULTRASONIC_TOOLTIP);
 this.setHelpUrl("");
  },
  onchange: function(e) {
       if (GPIOOutputCode == 'C'){
                this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
                this.setDisabled(true);
       }else{
           this.setDisabled(false);
           verifyArduinoSerialBlockBefore(this);
       }
   },
};

Blockly.Blocks['condicionante_sensor_distancia'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_condicionantes);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/sensor_distancia.png", 25, 25, "*"))
        .appendField(Blockly.Msg.ULTRASONIC_COND_DISTANCE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ULTRASONIC_COND_GREATER_THAN, "maior"],[Blockly.Msg.ULTRASONIC_COND_LESS_THAN, "menor"]]), "operador")
        .appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.numberValidator), "distancia")	
        .appendField("cm");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ULTRASONIC_COND_TOOLTIP);
  },

  onchange: function(e) {
     if (GPIOOutputCode == 'C'){
        this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
        this.setDisabled(true);
     }else{
        this.setDisabled(false);
        disableConditionIfPairBlockNoPresent(this,'le_distancia',Blockly.Msg.REQUIRE_DISTANCE_SENSOR_BLOCK);
        if (!this.disabled){
            verifyArduinoSerialBlockBefore(this);
        }
     }
  },

};




/***********************************************************************************************/
/* Sensor de Luz
***********************************************************************************************/

Blockly.Blocks['guarda_luminosidade_ambiente'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/sensor_luz.png", 30, 30, "*"))
        .appendField(Blockly.Msg.LDR_INIT);
    this.setColour(cor_sensor_init);
 this.setTooltip(Blockly.Msg.LDR_INIT_TOOLTIP);
 this.setHelpUrl("");
  },
   onchange: function(e) {
       if (GPIOOutputCode == 'C'){
                this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
                this.setDisabled(true);
       }else{
           this.setDisabled(false);
           verifyArduinoSerialBlockBefore(this);
       }
       for (var blockID in Blockly.mainWorkspace.blockDB_) {
            if (Blockly.mainWorkspace.blockDB_[blockID].type == this.type) {
                  if (this.isInFlyout){
                      this.setWarningText(Blockly.Msg.INITIAL_LUMINOSITY_ALREADY_VERIFIED);
                      this.setDisabled(true);
                      break;
                   }
             }
        }
   },


};


Blockly.Blocks['le_luminosidade'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/sensor_luz.png", 30, 30, "*"))
        .appendField(Blockly.Msg.LDR);
    this.setColour(cor_sensores);
 this.setTooltip(Blockly.Msg.LDR_TOOLTIP);
 this.setHelpUrl("");
  },
  onchange: function(e) {
       if (GPIOOutputCode == 'C'){
                this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
                this.setDisabled(true);
       }else{
           this.setDisabled(false);
           verifyArduinoSerialBlockBefore(this);
       }
   },
};


Blockly.Blocks['condicionante_sensor_luz'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_condicionantes);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/sensor_luz.png", 25, 25, "*"))
        .appendField(Blockly.Msg.LDR_COND_CURRENT_LUMINOSITY)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LDR_COND_GREATER_THAN , "maior"],
                                                [Blockly.Msg.LDR_COND_IQUALS, "igual"],
                                                [Blockly.Msg.LDR_COND_LESS_THAN, "menor"]]), "operador")
        .appendField(Blockly.Msg.LDR_COND_INITIAL_LUMINOSITY);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.LDR_COND_TOOLTIP);
  },

   onchange: function(e) {

     if (GPIOOutputCode == 'C'){
        this.setWarningText(Blockly.Msg.BLOCKS_NOT_AVAILABLE_IN_COMPUTER_MODE);
        this.setDisabled(true);
     }else{
          if (this.parentBlock_ == null) {
            this.setWarningText(Blockly.Msg.REQUIRE_WHILE_IF_BLOCK);
            if (!this.isInFlyout && !this.getInheritedDisabled()) {
               this.setDisabled(true);
            }
          } else {
                if (!findPairBlockBefore("le_luminosidade",this) || !findPairBlockBefore("guarda_luminosidade_ambiente",this)){
                   this.setWarningText(Blockly.Msg.REQUIRE_LDR_BLOCKS);
                   if (!this.isInFlyout && !this.getInheritedDisabled()) {
                       this.setDisabled(true);
                   }
                }else {
                   this.setWarningText(null);
                   this.setDisabled(false);
                }
          }
          if (!this.disabled){
            verifyArduinoSerialBlockBefore(this);
          }
     }
   },

};

//-------------------------------------------------------
//le texto teclado
//-------------------------------------------------------

Blockly.Blocks['le_texto_teclado'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
 	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/teclado.png", 30, 30, "*"))
        .appendField(Blockly.Msg.KEYBOARD);
    this.setColour(cor_sensores);
 this.setTooltip(Blockly.Msg.KEYBOARD_TOOLTIP);
 this.setHelpUrl("");
  }
};


Blockly.Blocks['condicionante_texto_teclado'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_condicionantes);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/teclado.png", 25, 25, "*"))
        .appendField(Blockly.Msg.KEYBOARD_COND_TEXT)
        .appendField(new Blockly.FieldTextInput(""), "texto_teclado");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.KEYBOARD_COND_TOOLTIP);
  },

  onchange: function(e) {
     disableConditionIfPairBlockNoPresent(this,'le_texto_teclado',Blockly.Msg.REQUIRE_KEYBOARD_INPUT);
  },

};





/*
Blockly.Blocks['sensor_temperatura'] = {
  init: function() {
	var val_1 = '\u25CB' + "  " + "Baixa";
	var val_2 = '\u25CE' + "  " + "Ambiente";
	var val_3 = '\u25CF' + "  " + "Alta";
	var graus_centigrados = 'C';
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_condicionantes);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/sensor_temperatura.png", 40, 40, "*"))
        .appendField("Temperatura")
        .appendField(new Blockly.FieldDropdown([[val_3,"alta"],[val_2,"ambiente"],[val_1,"baixa"]]), "temperatura");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['sensor_linha'] = {
  init: function() {
	var val_pouco = '\u25CB' + "  " + "Pouco";
    var val_muito = '\u25CF' +  "  " +  "Muito";
    var val_direito = "Direito " + '\u25BA';
    var val_esquerdo = '\u25C4' + " Esquerdo";
	this.setColour(cor_condicionantes);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/sensor_refletancia.png", 40, 40, "*"))
        .appendField(new Blockly.FieldDropdown([[val_pouco, "POUCO"],[val_muito, "MUITO"]]), "REFLEXO")
		.appendField("Reflexo no lado")
        .appendField(new Blockly.FieldDropdown([[val_direito, "DIREITA"], [val_esquerdo, "ESQUERDA"]]), "DIRECAO");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['potenciometro'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Alto";
	var val_2 = '\u25CE' + "  " + "Médio";
    var val_3 = '\u25CB' + "  " + "Baixo";
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/potenciometro.png", 40, 40, "*"))
        .appendField("Potenciômetro")
        .appendField(new Blockly.FieldDropdown([[val_1,"ALTO"], [val_2,"MEDIO"], [val_3 ,"BAIXO"]]), "potenciometro");
    this.setOutput(true, null);
    this.setColour(cor_condicionantes);
    this.setNextStatement(false);
    
 }
};




*/
