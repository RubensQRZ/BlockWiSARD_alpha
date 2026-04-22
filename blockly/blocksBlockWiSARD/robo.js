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
goog.provide('Blockly.Blocks.Robo');
goog.require('Blockly.Blocks');

//Definie o tipo de saída do Código (Raspberry ou ARduino)
var GPIOOutputCode = GPIO_output_code;


var cor_blocos_robo=270;

Blockly.Blocks['mover_robo_para_frente'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_robo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/robo_andar_frente.png", 30, 30, "*"))
        .appendField(Blockly.Msg.ROBOT_FORWARD)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 0, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ROBOT_FORWARD_TOOLTIP);
    },

   onchange: function(e) {
       if (GPIOOutputCode == 'C'){
           this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
           this.setDisabled(true);
       }else if (GPIOOutputCode == 'A'){
            if (!this.isInFlyout){
                this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
                this.setDisabled(true);
            }
       }else{
           this.setDisabled(false);
       }
   },
};



Blockly.Blocks['mover_robo_para_tras'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_robo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/robo_andar_atras.png", 30, 30, "*"))
        .appendField(Blockly.Msg.ROBOT_BACKWARDS)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 12, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ROBOT_BACKWARDS_TOOLTIP );
  },

   onchange: function(e) {
       if (GPIOOutputCode == 'C'){
           this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
           this.setDisabled(true);
       }else if (GPIOOutputCode == 'A'){
            if (!this.isInFlyout){
                this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
                this.setDisabled(true);
            }
       }else{
           this.setDisabled(false);
       }
   },
};


Blockly.Blocks['virar_robo_para_direita'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_robo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/robo_virar_direita.png", 30, 30, "*"))
        .appendField(Blockly.Msg.ROBOT_TURNRIGHT )
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 50, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ROBOT_TURNRIGHT_TOOLTIP);
  },

   onchange: function(e) {
       if (GPIOOutputCode == 'C'){
           this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
           this.setDisabled(true);
       }else if (GPIOOutputCode == 'A'){
            if (!this.isInFlyout){
                this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
                this.setDisabled(true);
            }
       }else{
           this.setDisabled(false);
       }
   },
};



Blockly.Blocks['virar_robo_para_esquerda'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_robo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/robo_virar_esquerda.png", 30, 30, "*"))
        .appendField(Blockly.Msg.ROBOT_TURNLEFT)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 31, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ROBOT_TURNLEFT_TOOLTIP);
  },

   onchange: function(e) {
       if (GPIOOutputCode == 'C'){
           this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
           this.setDisabled(true);
       }else if (GPIOOutputCode == 'A'){
            if (!this.isInFlyout){
                this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
                this.setDisabled(true);
            }
       }else{
           this.setDisabled(false);
       }
   },
};

Blockly.Blocks['virar_robo_para_esquerda_ou_direita'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_robo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/robo_virar_direita_esquerda.png", 30, 30, "*"))
        .appendField(Blockly.Msg.ROBOT_TURNRIGHTLEFT)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 3, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ROBOT_TURNRIGHTLEFT_TOOLTIP);
  },

   onchange: function(e) {
       if (GPIOOutputCode == 'C'){
           this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
           this.setDisabled(true);
       }else if (GPIOOutputCode == 'A'){
            if (!this.isInFlyout){
                this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
                this.setDisabled(true);
            }
       }else{
           this.setDisabled(false);
       }
   },
};


Blockly.Blocks['parar_robo'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_blocos_robo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/robo_parar.png", 30, 30, "*"))
        .appendField(Blockly.Msg.ROBOT_STOP)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 42, 30, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ROBOT_STOP_TOOLTIP);
  },

   onchange: function(e) {
       if (GPIOOutputCode == 'C'){
           this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
           this.setDisabled(true);
       }else if (GPIOOutputCode == 'A'){
            if (!this.isInFlyout){
                this.setWarningText(Blockly.Msg.ROBOT_BLOCKS_NOT_AVAILABLE);
                this.setDisabled(true);
            }
       }else{
           this.setDisabled(false);
       }
   },
};
