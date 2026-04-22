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
 * @fileoverview dbkBlocks On Blockly.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Blocks.Raspberry.Controles');
goog.require('Blockly.Blocks');


/*
var cor_controles = 32;
var cor_delay_parar = 40;
var cor_repeticao = 25;
var cor_selecao = 18;
var cor_arduino = 50;
*/
var cor_controles = 25;
var cor_delay_parar = 25;
var cor_repeticao = 25;
var cor_selecao = 25;
var cor_arduino = 500;


var GPIOOutputCode = GPIO_output_code;


 Blockly.Blocks['sleep'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_delay_parar);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/delay.png", 25, 25, "*"))
        .appendField(Blockly.Msg.CONTROLS_SLEEP)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.CONTROLS_SLEEP_VERY_LITTLE_TIME, "0.12"],[Blockly.Msg.CONTROLS_SLEEP_HALF_HALF_A_SECOND, "0.25"],
                                                [Blockly.Msg.CONTROLS_SLEEP_HALF_A_SECOND, "0.5"],[Blockly.Msg.CONTROLS_SLEEP_ONE_SECOND, "1"],
                                                [Blockly.Msg.CONTROLS_SLEEP_TWO_SECONDS, "2"], [Blockly.Msg.CONTROLS_SLEEP_THREE_SECONDS, "3"],
                                                [Blockly.Msg.CONTROLS_SLEEP_FIVE_SECONDS, "5"], [Blockly.Msg.CONTROLS_SLEEP_TEN_SECONDS, "10"]]),
                                                 "time");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_SLEEP_TOOLTIP);
  }
};

Blockly.Blocks['repetir'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_repeticao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/loop.png", 30, 30, "*"))
        .appendField(Blockly.Msg.CONTROLS_REPEAT_REPEAT)
        .appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "numero_repeticoes")
        .appendField(Blockly.Msg.CONTROLS_REPEAT_TIMES)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 17, 30, "*"));
	this.setInputsInline(true);
    this.appendStatementInput("repeat_code");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_TOOLTIP);
  }
};

Blockly.Blocks['repetir_sempre'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_repeticao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/infinity.png", 30, 30, "*"))
        .appendField(Blockly.Msg.CONTROLS_REPEAT_FOREVER)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 40, 30, "*"));
	this.setInputsInline(true);
    this.appendStatementInput("repeat_code");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_REPEAT_FOREVER_TOOLTIP);
  }
};


/*

Blockly.Blocks['parar_repeticao_do_programa'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_delay_parar);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/parar_programa.png", 30, 30, "*"))
        .appendField("Parar Programa")
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 27, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Força a parada do repetição do programa definitivamente');
  }
};
*/

Blockly.Blocks['enquanto'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_repeticao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/enquanto.png", 30, 30, "*"))
        .appendField(Blockly.Msg.CONTROLS_WHILE_WHILE);
    this.appendValueInput("condicao")
         .setCheck('Boolean');
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_WHILE_DO)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 11, 30, "*"));
    this.appendStatementInput("codigo_enquanto");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_WHILE_TOOLTIP);
  }
};

Blockly.Blocks['condicional_simples'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_selecao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/interrogacao_se.png", 30, 30, "*"));
    this.appendValueInput("condicao")
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_IF);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_DO)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 0, 30, "*"));
    this.appendStatementInput("codigo_condicional");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_TOOLTIP);
  }
};

Blockly.Blocks['condicional_completo'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_selecao );
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/interrogacao_se.png", 30, 30, "*"));
    this.appendValueInput("condicao")
        .setCheck('Boolean')
        .appendField(Blockly.Msg.CONTROLS_IF_ELSE_IF);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_IF_ELSE_DO)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 0, 30, "*"));
    this.appendStatementInput("codigo_condicional");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/seta_senao.png", 30, 17, "*"))
        .appendField(Blockly.Msg.CONTROLS_IF_ELSE_ELSE)
		//.appendField(new Blockly.FieldImage("../blockly/blocks/rasberry/icons/invisible.png", 42, 17, "*"))
    this.appendStatementInput("codigo_execcao");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
  }
};


Blockly.Blocks['startSerial'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/arduino_icon.png", 30, 15, "*"))
      .appendField(Blockly.Msg.CONTROLS_COMPORT_PORT)
      .appendField(new Blockly.FieldDropdown(
        this.generateOptions), 'comPort');
     this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 30, 0, "*"))
      .appendField(Blockly.Msg.CONTROLS_COMPORT_ARDUINO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_COMPORT_TOOLTIP);
    this.setColour(cor_arduino);
  },

  generateOptions: function() {
    var options = [];
    var ComOptions = [];
    if (document.location.hostname == 'localhost') {
         ArdublocklyServer.requestSerialPorts(function(jsonObj) {
             Ardublockly.setSerialPortsHtml(
             ArdublocklyServer.jsonToHtmlDropdown(jsonObj));
          });
    }
    var ComOptions = document.getElementById('serial_port');
    var size = ComOptions.options.length;
    if (size == 0) {
        options.push(["COM Port unknown", "COMPortUnknown"]);
    }else{
        for(var i = 0; i < size; i++) {
             var serialValue = String(ComOptions.options[i].text);
             options.push([serialValue, serialValue]);
         }
    }
    return options;
    },

   onchange: function(e) {
       if ((GPIOOutputCode == 'R') || (GPIOOutputCode == 'C')){
                this.setWarningText(Blockly.Msg.ARDUINO_SERIAL_BLOCK_NOT_ALLOWED);
                this.setDisabled(true);
       }else{
           this.setDisabled(false);

           var blocks = [];
           for (var blockID in Blockly.mainWorkspace.blockDB_) {
              if (Blockly.mainWorkspace.blockDB_[blockID].type == this.type) {
                    blocks.push(Blockly.mainWorkspace.blockDB_[blockID]);
                    if(blocks.length > 1){
                        break;
                    }
              }
            }
            if(blocks.length == 1){
               wisard_first_block_id = this.id;
               this.setWarningText(null);
               this.setDisabled(false);
            }else if (blocks.length > 1) {
                if (this.id != wisard_first_block_id){
                       this.setWarningText(Blockly.Msg.CREAT_WISARD_BLOCK_ALREADY_USED);
                       this.setDisabled(true);
                }
            }

            for (var blockID in Blockly.mainWorkspace.blockDB_) {
              if (Blockly.mainWorkspace.blockDB_[blockID].type == this.type) {
                        if (this.isInFlyout){
                            this.setWarningText(Blockly.Msg.ARDUINO_SERIAL_BLOCK_ALREADY_USED);
                            this.setDisabled(true);
                            break;
                         }
               }
            }
       }
   },

};


//------------------------------------


Blockly.Blocks['corrupt_code_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 11, 30, "*"))
        .appendField("******* Bloco Corrompido *******");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['corrupt_condition_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 3, 25, "*"))    
        .appendField("******** Bloco Corrompido *******");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['gera_codigo_teste'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(500);
    this.appendDummyInput()
        .appendField("Gera Codigo Teste");
	this.setInputsInline(false);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Gera Codigo para testar Python');
  }
};

Blockly.Blocks['gera_codigo_teste_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(500);
    this.appendDummyInput()
        .appendField("Gera Codigo Teste 2");
	this.setInputsInline(false);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip('Gera Codigo para testar Python');
  }
};



