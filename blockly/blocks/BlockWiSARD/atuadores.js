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

goog.provide('Blockly.Blocks.Raspberry.Atuadores');
goog.require('Blockly.Blocks');

Blockly.FieldColour.COLOURS = ['#0f0','#ff0','#f00','#00f'];
Blockly.FieldColour.COLUMNS = 4;

var cor_acender_led = 160;
var cor_apagar_led = 140;
var cor_piscar_led = 167;
var cor_ledRGB = 95;
var cor_motor = 196;
var cor_servo = 184;
var cor_lcd = 328;
var cor_monitor = 340;
var cor_7Seg = 315; 
var cor_buzzer = 240;
var cor_fala = 220;


//----------------------------------------------------------------------------
//  LED
//----------------------------------------------------------------------------


Blockly.Blocks['acender_led'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_acender_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/led_on.png", 30, 30, "*"))
        .appendField(Blockly.Msg.LED_ON_TURNON)
        .appendField(Blockly.Msg.LED_ON_LED_BEFORE)
        .appendField(new Blockly.FieldColour("#ff0000"), "cor_led")
        .appendField(Blockly.Msg.LED_ON_LED_AFTER);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LED_ON_TOOLTIP);
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


Blockly.Blocks['apagar_led'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_apagar_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/led_off_long.png", 30, 30, "*"))
        .appendField(Blockly.Msg.LED_OFF_TURNOFF)
        .appendField(Blockly.Msg.LED_OFF_LED_BEFORE)
        .appendField(new Blockly.FieldColour("#ff0000"), "cor_led")
        .appendField(Blockly.Msg.LED_OFF_LED_AFTER);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LED_OFF_TOOLTIP);
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

Blockly.Blocks['piscar_led'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + Blockly.Msg.LEDBLINK_OPT_SLOW;
	var val_2 = '\u25CE' + "  " + Blockly.Msg.LEDBLINK_OPT_MEDIUM;
    var val_3 = '\u25CB' + "  " + Blockly.Msg.LEDBLINK_OPT_FAST;
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_acender_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/led_blink.png", 30, 30, "*"))
        .appendField(Blockly.Msg.LEDBLINK_BLINK)
        .appendField(Blockly.Msg.LEDBLINK_LED_BEFORE)
        .appendField(new Blockly.FieldColour("#ff0000"), "cor_led")
        .appendField(Blockly.Msg.LEDBLINK_LED_AFTER)
		.appendField(new Blockly.FieldDropdown([[val_3, "high"],[val_2, "middle"],[val_1, "low"]]), "velocidade_blink"); 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RGBLED_TOOLTIP);
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


Blockly.Blocks['led_rgb'] = {
  init: function() {
var colourRed = new Blockly.FieldColour('#ffffff');
colourRed.setColours(['#f00','#fff']).setColumns(2);
var colourGreen = new Blockly.FieldColour('#ffffff');
colourGreen.setColours(['#0f0','#fff']).setColumns(2);
var colourBlue = new Blockly.FieldColour('#ffffff');
colourBlue.setColours(['#00f','#fff']).setColumns(2); 
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_acender_led);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/led_RGB.png", 30, 30, "*"))
        .appendField(Blockly.Msg.RGBLED_TURNON)
		.appendField(colourRed, "luzVermelha")
		.appendField(colourGreen, "luzVerde")
		.appendField(colourBlue, "luzAzul")
        .appendField(Blockly.Msg.RGBLED_RGB);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RGBLED_TOOLTIP);
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


//----------------------------------------------------------------------------
//  MOTORES
//----------------------------------------------------------------------------


Blockly.Blocks['girar_motor'] = {
  init: function() {
	var val_1 = '\u25CB' + "  " + Blockly.Msg.DCMOTOR_SLOW;
	var val_2 = '\u25CE' + "  " + Blockly.Msg.DCMOTOR_MEDIUM_SPEED;
    var val_3 = '\u25CF' + "  " + Blockly.Msg.DCMOTOR_FAST;
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_motor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/motor_move_2.png", 30, 30, "*"))
        .appendField(Blockly.Msg.DCMOTOR_MOVE)
        .appendField(new Blockly.FieldDropdown([[val_3, "high"],[val_2, "middle"],[val_1, "low"]]), "velocidade_motor");    
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.DCMOTOR_TOOLTIP);
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

Blockly.Blocks['parar_motor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_motor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/helice.png", 30, 30, "*"))
		.appendField(Blockly.Msg.DCMOTOR_STOP_MOTOR)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 63, 30, "*"));
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.DCMOTOR_STOP_TOOLTIP);
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

Blockly.Blocks['mover_servomotor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/servo_move.png", 30, 30, "*"))
        .appendField(Blockly.Msg.SERVO_MOVE)
        .appendField(new Blockly.FieldAngle(90), "posicao_ponteiro_servo")
		.appendField(Blockly.Msg.SERVO_DEGREES);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SERVO_TOOLTIP);
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


Blockly.Blocks['detach_servomotor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/servo_detach.png", 30, 30, "*"))
        .appendField(Blockly.Msg.SERVO_DETACH);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SERVO_DETACH_TOOLTIP);
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

//----------------------------------------------------------------------------
//  DISPLAYS
//----------------------------------------------------------------------------

Blockly.Blocks['escrever_lcd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_lcd);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/lcd4.png", 30, 30, "*"))
        .appendField(Blockly.Msg.LCD_WRITE)
    this.appendValueInput("TEXT")
        .setCheck('String');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_LINE)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), "numero_linha")
        .appendField(Blockly.Msg.LCD_LCD);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCD_TOOLTIP);
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

Blockly.Blocks['limpar_lcd'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_lcd);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/limpar_lcd4.png", 30, 30, "*"))
		.appendField(Blockly.Msg.LCDCLEAN_CLEAN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LCDCLEAN_TOOLTIP);
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


Blockly.Blocks['escrever_display_7s']={
    init:function(){
        this.setHelpUrl('http://www.example.com/');
        this.setColour(cor_7Seg);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/display7SegOn.png", 30, 30, "*"))
            .appendField(Blockly.Msg.SEVENSEG_WRITE)
            .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"]]),"numerosD7S")
            .appendField(Blockly.Msg.SEVENSEG_7SEG);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.SEVENSEG_TOOLTIP);
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


Blockly.Blocks['limpar_display_7s']={
    init:function(){
        this.setHelpUrl('http://www.example.com/');
        this.setColour(cor_7Seg);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/display7SegOff.png", 30, 30,"*"))
            .appendField(Blockly.Msg.SEVENSEGCLEAN_CLEAN)
            .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 63, 30, "*"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.SEVENSEGCLEAN_TOOLTIP );
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

//--------------------------------------
//Buzzer
//---------------------------------------


Blockly.Blocks['tocar_nota_buzzer'] = {
  init: function() {

    var grave = '\u25CF' + "  " + Blockly.Msg.BUZZER_OPT_DEEP_TONE;
	var medio = '\u25CE' + "  " + Blockly.Msg.BUZZER_OPT_MEDIUM_TONE;
    var agudo = '\u25CB' + "  " + Blockly.Msg.BUZZER_OPT_HIGH_TONE;

	var natural = '  '+ '\u0020' + Blockly.Msg.BUZZER_OPT_ACCIDENTAL_NATURAL;
    var bemol =  '  ' + '\u266D' + Blockly.Msg.BUZZER_OPT_ACCIDENTAL_FLAT;
    var sustenido = '  ' +'\u266F' + Blockly.Msg.BUZZER_OPT_ACCIDENTAL_SHARP;

	this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/buzzer_notas.png", 30, 30, "*"))
        .appendField(Blockly.Msg.BUZZER_PLAY)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.BUZZER_C_NOTE , "C"], [Blockly.Msg.BUZZER_D_NOTE , "D"], [Blockly.Msg.BUZZER_E_NOTE , "E"],
												[Blockly.Msg.BUZZER_F_NOTE , "F"], [Blockly.Msg.BUZZER_G_NOTE , "G"], [Blockly.Msg.BUZZER_A_NOTE , "A"],
												[Blockly.Msg.BUZZER_B_NOTE , "B"]]), "nota_musical")
        .appendField(new Blockly.FieldDropdown([[medio, "3"],[grave, "2"], [agudo, "4"]]), "altura")
        .appendField(new Blockly.FieldDropdown([[natural,""],[bemol, "b"], [sustenido, "#"]]), "acidente")
	    .appendField(Blockly.Msg.BUZZER_BUZZER)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 26, 30, "*"));
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.BUZZER_TOOLTIP);
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


Blockly.Blocks['parar_som_buzzer'] = {
  init: function() {


	this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/buzzer_notone.png", 30, 30, "*"))
        .appendField(Blockly.Msg.BUZZEROFF_SILENCE)
		.appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 28, 30, "*"));
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.BUZZEROFF_TOOLTIP);
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


Blockly.Blocks['tocar_sirene_buzzer'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + Blockly.Msg.BUZZERSIREN_OPT_SLOW;
	var val_2 = '\u25CB' + "  " + Blockly.Msg.BUZZERSIREN_OPT_FAST;
	this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/buzzer_sirene.png", 30, 30, "*"))
        .appendField(Blockly.Msg.BUZZERSIREN_PLAY)
        .appendField(new Blockly.FieldDropdown([[val_2, "0"],[val_1, "1"]]), "velocidade")
	    .appendField(Blockly.Msg.BUZZERSIREN_BUZZER);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.BUZZESIREN_TOOLTIP);
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

//-----------------------------------------------
//Tela do Computador
///---------------------------------------------

Blockly.Blocks['escrever_no_terminal_de_video'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_monitor);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/monitor_texto.png", 30, 30, "*"))
        .appendField(Blockly.Msg.SCREEN_WRITESPEAK)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "falar")
        .appendField(")")
    this.appendValueInput("TEXT")
        .setCheck('String');
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SCREEN_SCREEN);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SCREEN_TOOLTIP);
  }

};

Blockly.Blocks['text_write'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function() {  
    var validator = function(newValue) {
      return newValue.replace(/\'/g, '');
    };    
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_valores);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput('abc',validator), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    // Text block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          Blockly.Msg.TEXT_TEXT_TOOLTIP;
    });
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @this Blockly.Block
   * @private
   */
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
};



//----------------------------------------------------------------------------
//  AUDIO Computador
//----------------------------------------------------------------------------

Blockly.Blocks['configurar_fala'] = {
  init: function() {
   var masculina = '\u25CB' + "  " + Blockly.Msg.SPEAKSETUP_OPT_MASC ;
    var feminina = '\u25CF' + "  " + Blockly.Msg.SPEAKSETUP_OPT_FEM;
    var velocidade_baixa = '\u25CB' + "  " + Blockly.Msg.SPEAKSETUP_OPT_LOW_SPEED;
   var velocidade_media= '\u25CE' + "  " + Blockly.Msg.SPEAKSETUP_OPT_MEDIUM_SPEED;
    var velocidade_alta= '\u25CF' + "  " + Blockly.Msg.SPEAKSETUP_OPT_HIGH_SPEED;

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_fala);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/falar.png", 20, 20, "*"))
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 1, 20, "*"))
        .appendField(Blockly.Msg.SPEAKSETUP_SET)
   this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 30, 0, "*"))
        .appendField(Blockly.Msg.SPEAKSETUP_SEX)
        .appendField(new Blockly.FieldDropdown([[feminina, "f"],[masculina, "m"]]), "sexo");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/invisible.png", 30, 0, "*"))
        .appendField(Blockly.Msg.SPEAKSETUP_SPEED)
        .appendField(new Blockly.FieldDropdown([[velocidade_media, "m"],[velocidade_baixa, "b"],[velocidade_alta, "a"]]), "velocidade");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SPEAKSETUP_TOOLTIP);
  }
};


Blockly.Blocks['falar'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_fala);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/falar.png", 30, 30, "*"))
        .appendField(Blockly.Msg.SPEAK_SPEAK);
    this.appendValueInput("TEXT")
        .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.SPEAK_TOOLTIP);
  }
};



Blockly.Blocks['text_speak'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function() {
	  
    var validator = function(newValue) {
      return newValue.replace(/\'/g, '');
    };  
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_valores);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput('abc',validator), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    // Text block is trivial.  Use tooltip of parent block if it exists.
    this.setTooltip(function() {
      var parent = thisBlock.getParent();
      return (parent && parent.getInputsInline() && parent.tooltip) ||
          Blockly.Msg.TEXT_TEXT_TOOLTIP;
    });
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @this Blockly.Block
   * @private
   */
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }

};




Blockly.Blocks['tocar_som'] = {
  init: function() {
      
    //	var sound_1 = '\u25CB' + "  " + Blockly.Msg.DCMOTOR_SLOW; 
    
	var sound_01 = Blockly.Msg.PLAY_SOUND_CAT; 
	var sound_02 = Blockly.Msg.PLAY_SOUND_DOG;     
	var sound_03 = Blockly.Msg.PLAY_SOUND_COW;       
	var sound_04 = Blockly.Msg.PLAY_SOUND_ROOSTER; 
	var sound_05 = Blockly.Msg.PLAY_SOUND_NOTE_C; 
	var sound_06 = Blockly.Msg.PLAY_SOUND_NOTE_D;    
 	var sound_07 = Blockly.Msg.PLAY_SOUND_NOTE_E; 
	var sound_08 = Blockly.Msg.PLAY_SOUND_NOTE_F;       
  	var sound_09 = Blockly.Msg.PLAY_SOUND_NOTE_G; 
	var sound_10 = Blockly.Msg.PLAY_SOUND_NOTE_A;    
 	var sound_11 = Blockly.Msg.PLAY_SOUND_NOTE_B; 
	var sound_12 = Blockly.Msg.PLAY_SOUND_NOTE_C2;     
	var sound_13 = Blockly.Msg.PLAY_SOUND_BEEP;
	var sound_14 = Blockly.Msg.PLAY_SOUND_BEEP_BEEP_FAST;
	var sound_15 = Blockly.Msg.PLAY_SOUND_BEEP_BEEP_FAST_BASS;
	var sound_16 = Blockly.Msg.PLAY_SOUND_BEEP_BEEP_SLOW;
	var sound_17 = Blockly.Msg.PLAY_SOUND_BEEP_BEEP_SLOW_BASS;
 	var sound_18 = Blockly.Msg.PLAY_SOUND_CAMERA;
	var sound_19 = Blockly.Msg.PLAY_SOUND_PROCESSING;

       
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_fala);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/playsound.png", 30, 30, "*"))
        .appendField(Blockly.Msg.PLAY_SOUND_PLAY)
        .appendField(new Blockly.FieldDropdown([[sound_01, "cat.wav"],                                                
                                                [sound_02, "dog.wav"],
                                                [sound_03, "cow.wav"],
                                                [sound_04, "rooster.wav"],
                                                [sound_05, "note_C.wav"],
                                                [sound_06, "note_D.wav"],
                                                [sound_07, "note_E.wav"],
                                                [sound_08, "note_F.wav"],
                                                [sound_09, "note_G.wav"],
                                                [sound_10, "note_A.wav"], 
                                                [sound_11, "note_B.wav"],
                                                [sound_12, "note_C2.wav"],                                               
                                                [sound_13, "singlebeep.wav"],
                                                [sound_14, "beepbeep_fast_high.wav"],
                                                [sound_15, "beepbeep_fast_bass.wav"],
                                                [sound_16, "beepbeep_slow_high.wav"],
                                                [sound_17, "beepbeep_slow_bass.wav"],
                                                [sound_18, "camera.wav"],
                                                [sound_19, "processing.wav"]                     
                                                ]), "sound")
	    .appendField(new Blockly.FieldCheckbox("TRUE"), "wait_sound")
        .appendField(Blockly.Msg.PLAY_SOUND_UNTIL_DONE);		
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.PLAY_SOUND_TOOLTIP);
  }
};

Blockly.Blocks['parar_som'] = {
  init: function() {
    
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_fala);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/BlockWiSARD/icons/stopsound.png", 25, 25, "*"))
        .appendField(Blockly.Msg.STOP_SOUND_STOP);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.STOP_SOUND_TOOLTIP);
  }
};

