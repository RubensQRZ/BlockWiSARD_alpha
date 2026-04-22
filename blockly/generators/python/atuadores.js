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

goog.provide('Blockly.Python.Raspberry.Atuadores');
goog.require('Blockly.Python');

//--------------------------------------------
//Generators included by RLQ - raspberry
//--------------------------------------------

//******************************************************
//Inicializa Pinos etc.
//*******************************************************

// Carrega os valores dos pinos do arquivo raspberry_setup.ini 
//para as variáveis globais raspberry_pino_xxxxxx  ou arduino_pino_xxxxxx

//Definie o tipo de saída do Código (Raspberry ou ARduino)

var GPIOOutputCode = GPIO_output_code;


//Converte os números dos pinos Arduino para Strings

function  converte_pino_para_string(pino){
     if (pino  < 10) {
           var pinoStr = '"0' + pino.toString() +'"';
       }else{
           var pinoStr = '"' + pino.toString() +'"';
       }
    return pinoStr
}


//Define os pinos utilizados pelos atuadores
if (GPIOOutputCode == 'A'){
    //LEDs
    var pinoLedVerde = arduino_pino_LED_verde;
    var pinoLedAmarelo = arduino_pino_LED_amarelo;
    var pinoLedVermelho = arduino_pino_LED_vermelho;
    var pinoLedAzul = arduino_pino_LED_azul;
    var velocidade_baixa_blink=arduino_velocidade_baixa_blink;
    var velocidade_media_blink=arduino_velocidade_media_blink;
    var velocidade_alta_blink=arduino_velocidade_alta_blink;
    //LED RGB
    var pino_rgb_vermelho = arduino_pino_RGB_vermelho;
    var pino_rgb_verde = arduino_pino_RGB_verde;
    var pino_rgb_azul = arduino_pino_RGB_azul;
    //Servo
    var pino_servo_motor = arduino_pino_Servo_Motor;
    //Motor DC
    var pino_motor_DC = arduino_pino_MotorDC;
    var velocidade_baixa_motorDC=arduino_velocidade_baixa_motorDC;
    var velocidade_media_motorDC=arduino_velocidade_media_motorDC;
    var velocidade_alta_motorDC=arduino_velocidade_alta_motorDC;
    //LCD
    var pino_rs = arduino_pino_rs;
    var pino_rw = arduino_pino_rw;
    var pino_enable = arduino_pino_enable;
    var pino_dados_4 = arduino_pino_dados_4;
    var pino_dados_5 = arduino_pino_dados_5;
    var pino_dados_6 = arduino_pino_dados_6;
    var pino_dados_7 = arduino_pino_dados_7;
    //Display de 7 segmentos
    var pino_segmento_F = arduino_pino_segmento_F;
    var pino_segmento_G = arduino_pino_segmento_G;
    var pino_segmento_E = arduino_pino_segmento_E;
    var pino_segmento_D = arduino_pino_segmento_D;
    var pino_segmento_A = arduino_pino_segmento_A;
    var pino_segmento_B = arduino_pino_segmento_B;
    var pino_segmento_C = arduino_pino_segmento_C;
    var pino_ponto_decimal = arduino_pino_ponto_decimal;
    //Buzzer
    var pino_buzzer = arduino_pino_buzzer;
    var tempo_sirene=10;
} else{
    //LEDs
    var pinoLedVermelho = raspberry_pino_LED_vermelho;
    var pinoLedAmarelo = raspberry_pino_LED_amarelo;
    var pinoLedVerde = raspberry_pino_LED_verde;
    var pinoLedAzul = raspberry_pino_LED_azul;
    var velocidade_baixa_blink=raspberry_velocidade_baixa_blink;
    var velocidade_media_blink=raspberry_velocidade_media_blink;
    var velocidade_alta_blink=raspberry_velocidade_alta_blink;
    //LED RGB
    var pino_rgb_vermelho = raspberry_pino_RGB_vermelho;
    var pino_rgb_verde = raspberry_pino_RGB_verde;
    var pino_rgb_azul = raspberry_pino_RGB_azul;
    //Servo
    var pino_servo_motor = raspberry_pino_Servo_Motor;
    var servo_min_angle = raspberry_Servo_Motor_min_angle;
    var servo_max_angle = raspberry_Servo_Motor_max_angle;
    var servo_min_pulse_width = raspberry_Servo_Motor_min_pulse_width;
    var servo_max_pulse_width = raspberry_Servo_Motor_max_pulse_width;
    //MotorDC
    var motorDC_name = "motorDC"
    var pino_motor_DC = raspberry_pino_MotorDC;
    var velocidade_baixa_motorDC=raspberry_velocidade_baixa_motorDC;
    var velocidade_media_motorDC=raspberry_velocidade_media_motorDC;
    var velocidade_alta_motorDC=raspberry_velocidade_alta_motorDC;
    //LCD
    var lcdName = 'lcd';
    var pino_rs = raspberry_pino_rs;
    var pino_enable = raspberry_pino_enable;
    var pino_dados_4 = raspberry_pino_dados_4;
    var pino_dados_5 = raspberry_pino_dados_5;
    var pino_dados_6 = raspberry_pino_dados_6;
    var pino_dados_7 = raspberry_pino_dados_7;
    var tamanho_linha_lcd = raspberry_tamanho_linha_LCD;
    var numero_linhas_lcd = raspberry_numero_linhas_LCD;
    //Display de 7 segmentos
    var display_7SEG_name = 'display7SEG';
    var pino_segmento_F = raspberry_pino_segmento_F;
    var pino_segmento_G = raspberry_pino_segmento_G;
    var pino_segmento_E = raspberry_pino_segmento_E;
    var pino_segmento_D = raspberry_pino_segmento_D;
    var pino_segmento_A = raspberry_pino_segmento_A;
    var pino_segmento_B = raspberry_pino_segmento_B;
    var pino_segmento_C = raspberry_pino_segmento_C;
    //Buzzer
    var buzzer_name = 'tonalBuzzer';
    var pino_buzzer = raspberry_pino_buzzer;
    var tempo_sirene=10;

}



//Define variáeis da fala sintetizada
var indice_fala_feminina = BlockWiSARD_indice_fala_feminina;
var indice_fala_masculina = BlockWiSARD_indice_fala_masculina;
var velocidade_fala_lenta = BlockWiSARD_velocidade_fala_lenta;
var velocidade_fala_normal = BlockWiSARD_velocidade_fala_normal;
var velocidade_fala_rapida = BlockWiSARD_velocidade_fala_rapida;
var velocidade_fala = BlockWiSARD_velocidade_fala_normal;
var sexo_fala =  BlockWiSARD_sexo_fala_default ;
var velocidade_fala_padrao = BlockWiSARD_velocidade_fala_normal ;
var sexo_fala_padrao = BlockWiSARD_sexo_fala_default;
var nome_variavel_sexo_fala = "sexoFala";
var nome_variavel_velocidade_fala = "velocidadeFala";


//*****************************************************************************

//*******************************************************
//Acende LED
//*******************************************************

Blockly.Python['acender_led'] = function(block) {
  var colour_cor_led = block.getFieldValue('cor_led');
	//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(colour_cor_led) {
		case '#ff0000':
			var pinKey = "ledVermelho";
			var pinLed = pinoLedVermelho;
			var ledVarName = 'pinoLedVermelho'
			break;
		case '#00ff00':
			var pinKey = "ledVerde";
			var pinLed = pinoLedVerde;
			var ledVarName = 'pinoLedVerde'
			break;
		case '#0000ff':
			var pinKey = "ledAzul";
			var pinLed = pinoLedAzul;
			var ledVarName = 'pinoLedAzul'
			break;
		case '#ffff00':
			var pinKey = "ledAmarelo";
			var pinLed = pinoLedAmarelo;
			var ledVarName = 'pinoLedAmarelo'
			break;
	}



  if (GPIOOutputCode == 'A'){
        var pinLedStr = converte_pino_para_string(pinLed);
        Blockly.Python.definitions_[ledVarName] = ledVarName + '=' + pinLedStr
        var code = 'comando =' + '"DW"+' + ledVarName + '+"0001"'+'+ "*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
    
        Blockly.Python.definitions_[ledVarName] = ledVarName + '=' + pinLed
        Blockly.Python.definitions_['import_GpiozeroLed'] = 'from gpiozero import LED';
        Blockly.Python.definitions_[pinKey] = pinKey + '= LED(' + ledVarName + ')'
        var code = pinKey + '.on()\n';
  }

  return code;
 
};

//*******************************************************
//Apaga LED
//*******************************************************

Blockly.Python['apagar_led'] = function(block) {
  var colour_cor_led = block.getFieldValue('cor_led');

	
	//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(colour_cor_led) {
		case '#ff0000':
			var pinKey = "ledVermelho";
			var pinLed = pinoLedVermelho;
			var ledVarName = 'pinoLedVermelho'
			break;
		case '#00ff00':
			var pinKey = "ledVerde";
			var pinLed = pinoLedVerde;
			var ledVarName = 'pinoLedVerde'
			break;
		case '#0000ff':
			var pinKey = "ledAzul";
			var pinLed = pinoLedAzul;
			var ledVarName = 'pinoLedAzul'
			break;
		case '#ffff00':
			var pinKey = "ledAmarelo";
			var pinLed = pinoLedAmarelo;
			var ledVarName = 'pinoLedAmarelo'
			break;		
	}
	
  if (GPIOOutputCode == 'A'){
        var pinLedStr = converte_pino_para_string(pinLed);
        Blockly.Python.definitions_[ledVarName] = ledVarName + '=' + pinLedStr
        var code = 'comando =' + '"DW"+' + ledVarName + '+"0000"'+'+ "*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
        Blockly.Python.definitions_[ledVarName] = ledVarName + '=' + pinLed
        Blockly.Python.definitions_['import_GpiozeroLed'] = 'from gpiozero import LED';
        Blockly.Python.definitions_[pinKey] = pinKey + '= LED(' + ledVarName + ')'
        var code = pinKey + '.off()\n';
  }

  return code;
 
};

//*******************************************************
//Pisca LED
//*******************************************************

Blockly.Python['piscar_led'] = function(block) {
  var colour_cor_led = block.getFieldValue('cor_led');
  var dropdown_velocidade_blink = block.getFieldValue('velocidade_blink');

	//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(colour_cor_led) {
		case '#ff0000':
			var pinKey = "ledVermelho";
			var pinLed = pinoLedVermelho;
			var ledVarName = 'pinoLedVermelho'
			break;
		case '#00ff00':
			var pinKey = "ledVerde";
			var pinLed = pinoLedVerde;
			var ledVarName = 'pinoLedVerde'
			break;
		case '#0000ff':
			var pinKey = "ledAzul";
			var pinLed = pinoLedAzul;
			var ledVarName = 'pinoLedAzul'
			break;		
		case '#ffff00':
			var pinKey = "ledAmarelo";
			var pinLed = pinoLedAmarelo;
			var ledVarName = 'pinoLedAmarelo'
			break;		
	}
		
	
	  switch(dropdown_velocidade_blink) {
		case 'low':
			var time = velocidade_baixa_blink;
			break;
		case 'middle':
			var time = velocidade_media_blink
			break;
		case 'high':
			var time = velocidade_alta_blink;
			break;	
    }



  if (GPIOOutputCode == 'A'){
       
       Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
       var pinLedStr = converte_pino_para_string(pinLed);

        Blockly.Python.definitions_[ledVarName] = ledVarName + '=' + pinLedStr
        var code = 'comando =' + '"DW"+' + ledVarName + '+"0001"'+'+ "*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n' +
                    'sleep(' + time + ')\n' +
                    'comando =' + '"DW"+' + ledVarName + '+"0000"'+'+ "*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n' +
                    'sleep(' + time + ')\n';

  }else {
      Blockly.Python.definitions_[ledVarName] = ledVarName + '=' + pinLed
      Blockly.Python.definitions_[pinKey] = pinKey + '= LED(' + ledVarName + ')'
      Blockly.Python.definitions_['import_GpiozeroLed'] = 'from gpiozero import LED'
      var code = pinKey + '.blink('+ time +','+time+')\n'
  }

  return code;
 
};



//*******************************************************
// LED RGB
//*******************************************************

Blockly.Python['led_rgb'] = function(block) {
    var colour_luzvermelha = block.getFieldValue('luzVermelha');
    var colour_luzverde = block.getFieldValue('luzVerde');
    var colour_luzazul = block.getFieldValue('luzAzul');

    //Define se a cor vai estar acesa ou apagada

    switch(colour_luzvermelha) {
            case '#ff0000':
                var val_luzvermelha = '1';
                var val_luzvermelha_arduino = "0255";
                break;
            case '#ffffff':
                var val_luzvermelha = '0';
                var val_luzvermelha_arduino = "0000";
                break;
    }

    switch(colour_luzverde) {
            case '#00ff00':
                var val_luzverde = '1';
                var val_luzverde_arduino = "0255";
                break;
            case '#ffffff':
                var val_luzverde = '0';
                var val_luzverde_arduino = "0000";
                break;
    }

    switch(colour_luzazul) {
            case '#0000ff':
                var val_luzazul = '1';
                var val_luzazul_arduino = "0255";
                break;
            case '#ffffff':
                var val_luzazul = '0';
                var val_luzazul_arduino = "0000";
                break;
    }

      if (GPIOOutputCode == 'A'){


           var pinLedVermelhoStr = converte_pino_para_string(pino_rgb_vermelho);
           var pinLedVerdeStr = converte_pino_para_string(pino_rgb_verde);
           var pinLedAzulStr = converte_pino_para_string(pino_rgb_azul);

            Blockly.Python.definitions_["pinoRGBVermelho"] = "pinoRGBVermelho =" + pinLedVermelhoStr;
            Blockly.Python.definitions_["pinoRGBVerde"] = "pinoRGBVerde =" + pinLedVerdeStr;
            Blockly.Python.definitions_["pinoRGBAzul"] = "pinoRGBAzul =" + pinLedAzulStr;


            var code = 'comando =' + '"AW"+' + "pinoRGBVermelho" + '+"'+ val_luzvermelha_arduino +'"+ "*"\n' +
                        arduindoSerialVarName +'.write(comando.encode())\n' +
                        'comando =' + '"AW"+' + "pinoRGBVerde" + '+"'+ val_luzverde_arduino +'"+ "*"\n' +
                        arduindoSerialVarName +'.write(comando.encode())\n' +
                        'comando =' + '"AW"+' + "pinoRGBAzul" + '+"'+ val_luzazul_arduino +'"+ "*"\n' +
                        arduindoSerialVarName +'.write(comando.encode())\n';

      }else {
            Blockly.Python.definitions_['ledRGB'] = 'ledRGB = RGBLED (red=' + pino_rgb_vermelho +
                                                              ', green=' + pino_rgb_verde +
                                                              ', blue=' + pino_rgb_azul + ')'

            Blockly.Python.definitions_['import_GpiozeroRGBLED'] = 'from gpiozero import RGBLED';

            var code = 'ledRGB.color = (' + val_luzvermelha +',' + val_luzverde +',' + val_luzazul +')\n'
      }

   return code;
 
};


//*******************************************************
//Move Servo Motor
//*******************************************************

Blockly.Python['mover_servomotor'] = function(block) {
  var angulo = block.getFieldValue('posicao_ponteiro_servo');
  var servoName = 'meu_Servo';

  if (GPIOOutputCode == 'A'){

       var pinoServoStr = converte_pino_para_string(pino_servo_motor);

       var anguloServoStr = '"' + angulo.toString() +'"';

       Blockly.Python.definitions_['pinoServo'] ='pinoServo = '+ pinoServoStr;

       var code = 'comando =' + '"SV"+' + "pinoServo" + '+'+ anguloServoStr+ '+ "*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';

  }else {

          Blockly.Python.definitions_['import_GpiozeroAngularServo'] = 'from gpiozero import AngularServo';
          Blockly.Python.definitions_['pinoServoMotor'] = 'pinoServoMotor = ' + pino_servo_motor;
          Blockly.Python.definitions_['servo_min_angle'] = 'servoMinAngle = ' + servo_min_angle;
          Blockly.Python.definitions_['servo_max_angle'] = 'servoMaxAngle = ' + servo_max_angle;
          Blockly.Python.definitions_['servo_min_pulse_width'] = 'servoMinPulseWidth = ' + servo_min_pulse_width;
          Blockly.Python.definitions_['servo_max_pulse_width'] = 'servoMaxPulseWidth = ' + servo_max_pulse_width;

          Blockly.Python.definitions_['ServoMotor'] = servoName  + '= AngularServo(pinoServoMotor,' +
                                                                   'min_angle=servoMinAngle, ' +
                                                                   'max_angle=servoMaxAngle, ' +
                                                                   'min_pulse_width=servoMinPulseWidth, ' +
                                                                   'max_pulse_width=servoMaxPulseWidth) ';

          var code = servoName + '.angle = ' + angulo +'\n';	  
		     

  }


  return code;

};


//*******************************************************
//Detach Servo Motor
//*******************************************************


Blockly.Python['detach_servomotor'] = function(block) {
  var servoName = 'meu_Servo';

  if (GPIOOutputCode == 'A'){

       var pinoServoStr = converte_pino_para_string(pino_servo_motor);

       Blockly.Python.definitions_['pinoServo'] ='pinoServo = '+ pinoServoStr;

       var code = 'comando =' + '"DS"+' + "pinoServo" + '+"0000"'+'+ "*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';

  }else {

          Blockly.Python.definitions_['import_GpiozeroAngularServo'] = 'from gpiozero import AngularServo';
          Blockly.Python.definitions_['pinoServoMotor'] = 'pinoServoMotor = ' + pino_servo_motor;
          Blockly.Python.definitions_['servo_min_angle'] = 'servoMinAngle = ' + servo_min_angle;
          Blockly.Python.definitions_['servo_max_angle'] = 'servoMaxAngle = ' + servo_max_angle;
          Blockly.Python.definitions_['servo_min_pulse_width'] = 'servoMinPulseWidth = ' + servo_min_pulse_width;
          Blockly.Python.definitions_['servo_max_pulse_width'] = 'servoMaxPulseWidth = ' + servo_max_pulse_width;

          Blockly.Python.definitions_['ServoMotor'] = servoName  + '= AngularServo(pinoServoMotor,' +
                                                                   'min_angle=servoMinAngle, ' +
                                                                   'max_angle=servoMaxAngle, ' +
                                                                   'min_pulse_width=servoMinPulseWidth, ' +
                                                                   'max_pulse_width=servoMaxPulseWidth) ';

          var code = servoName + '.detach()\n';	  
		     

  }


  return code;

};

//*******************************************************
//Gira Motor DC
//*******************************************************

Blockly.Python['girar_motor'] = function(block) {
  var dropdown_velocidade_motor = block.getFieldValue('velocidade_motor');


  switch(dropdown_velocidade_motor) {
		case 'low':
			var velocidade_momento = velocidade_baixa_motorDC;
			var velocidadeMotorStr = '"' + velocidade_baixa_motorDC.toString() +'"';
			break;
		case 'middle':
			var velocidade_momento = velocidade_media_motorDC;
		    var velocidadeMotorStr = '"' + velocidade_media_motorDC.toString() +'"';
			break;
		case 'high':
			var velocidade_momento = velocidade_alta_motorDC;
			var velocidadeMotorStr = '"' + velocidade_alta_motorDC.toString() +'"';
			break;
  }



  if (GPIOOutputCode == 'A'){
        var pinoMotorDCStr = converte_pino_para_string(pino_motor_DC);
        Blockly.Python.definitions_['pinoMotorDC'] =  'pinoMotorDC =' + pinoMotorDCStr;
        var code = 'comando =' + '"AW"+' + 'pinoMotorDC+' + velocidadeMotorStr  +'+ "*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
        Blockly.Python.definitions_['pinoMotorDC'] =  'pinoMotorDC =' + pino_motor_DC;
        Blockly.Python.definitions_['import_PWMOutputDevice'] = 'from gpiozero import PWMOutputDevice';
        Blockly.Python.definitions_[motorDC_name] = motorDC_name + '= PWMOutputDevice(pinoMotorDC)';
        var code = motorDC_name +'.value=' + velocidade_momento +'\n';
  }

  return code;

};


//*******************************************************
//Para Motor DC
//*******************************************************


Blockly.Python['parar_motor'] = function(block) {

  if (GPIOOutputCode == 'A'){
        var pinoMotorDCStr = converte_pino_para_string(pino_motor_DC);
        Blockly.Python.definitions_['pinoMotorDC'] =  'pinoMotorDC =' + pinoMotorDCStr;
        var code = 'comando =' + '"AW"+' + 'pinoMotorDC' + '+"0"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
      Blockly.Python.definitions_['import_PWMOutputDevice'] = 'from gpiozero import PWMOutputDevice';
      Blockly.Python.definitions_['pinoMotorDC'] =  'pinoMotorDC =' + pino_motor_DC;
      Blockly.Python.definitions_[motorDC_name] = motorDC_name + '= PWMOutputDevice(pinoMotorDC)';
      var code = motorDC_name +'.off()\n'
  }
  return code;
};



//*******************************************************
//Escreve no LCD
//*******************************************************


//comando = "LR"+ "00" + "31 33 35 30 32 34 36 Teste LCD" + "*"
//lcd_pino_rs,lcd_pino_rw,lcd_pino_enable,lcd_pino_dados_4,lcd_pino_dados_5,lcd_pino_dados_6,lcd_pino_dados_7)

Blockly.Python['escrever_lcd'] = function(block) {
  var texto = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_NONE) || '\'\'';

   if (texto.charAt(0)== '"'){
    var final = texto.length - 2;
    texto = texto.substr(1,final)
  }

  var numero_linha = block.getFieldValue('numero_linha');

  switch(numero_linha) {
	case '1':
		var posicao_cursor = lcdName + '.set_cursor(0,0)\n';
		var posicaoCursorStr =  '"00"';
		break;
	case '2':
		var posicao_cursor = lcdName + '.set_cursor(0,1)\n';
	    var posicaoCursorStr =  '"01"';
		break;
  }

   if (GPIOOutputCode == 'A'){
      Blockly.Python.definitions_['lcd_pino_rs'] ='lcd_pino_rs = '+  converte_pino_para_string(pino_rs);
      Blockly.Python.definitions_['lcd_pino_rw'] ='lcd_pino_rw = '+  converte_pino_para_string(pino_rw);
      Blockly.Python.definitions_['lcd_pino_enable'] ='lcd_pino_enable = '+ converte_pino_para_string(pino_enable);
      Blockly.Python.definitions_['lcd_pino_dados_4'] ='lcd_pino_dados_4 = '+ converte_pino_para_string(pino_dados_4);
      Blockly.Python.definitions_['lcd_pino_dados_5'] ='lcd_pino_dados_5 = '+ converte_pino_para_string(pino_dados_5);
      Blockly.Python.definitions_['lcd_pino_dados_6'] ='lcd_pino_dados_6 = '+ converte_pino_para_string(pino_dados_6);
      Blockly.Python.definitions_['lcd_pino_dados_7'] ='lcd_pino_dados_7 = '+ converte_pino_para_string(pino_dados_7);

      var code = 'comando =' + '"LR"+' + posicaoCursorStr + '+'
                    +'lcd_pino_rs+' + 'lcd_pino_rw+' + 'lcd_pino_enable+' + 'lcd_pino_dados_4+'
                    +'lcd_pino_dados_5+' +'lcd_pino_dados_6+' +'lcd_pino_dados_7'
                    + '+str(' + texto + ')+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
      Blockly.Python.definitions_['import_AdafruitCharLCD'] = 'import Adafruit_CharLCD as LCD' ;
      Blockly.Python.definitions_['lcd_pino_rs'] ='lcd_pino_rs = '+ pino_rs ;
      Blockly.Python.definitions_['lcd_pino_enable'] ='lcd_pino_enable = '+ pino_enable;
      Blockly.Python.definitions_['lcd_pino_dados_4'] ='lcd_pino_dados_4 = '+ pino_dados_4;
      Blockly.Python.definitions_['lcd_pino_dados_5'] ='lcd_pino_dados_5 = '+ pino_dados_5;
      Blockly.Python.definitions_['lcd_pino_dados_6'] ='lcd_pino_dados_6 = '+ pino_dados_6;
      Blockly.Python.definitions_['lcd_pino_dados_7'] ='lcd_pino_dados_7 = '+ pino_dados_7;

      Blockly.Python.definitions_['LCD'] = lcdName +' = LCD.Adafruit_CharLCD(' + pino_rs + ',' +
                                                                           pino_enable + ',' +
                                                                           pino_dados_4 + ',' +
                                                                           pino_dados_5 + ',' +
                                                                           pino_dados_6 + ',' +
                                                                           pino_dados_7 + ',' +
                                                                           tamanho_linha_lcd + ',' +
                                                                           numero_linhas_lcd + ')' ;

      var code = posicao_cursor + lcdName + ".message(" + texto + ")\n";
  }

  return code;


};


//*******************************************************
//Apaga o LCD
//*******************************************************

Blockly.Python['limpar_lcd'] = function(block) {

   if (GPIOOutputCode == 'A'){
      Blockly.Python.definitions_['lcd_pino_rs'] ='lcd_pino_rs = '+  converte_pino_para_string(pino_rs);
      Blockly.Python.definitions_['lcd_pino_rw'] ='lcd_pino_rw = '+  converte_pino_para_string(pino_rw);
      Blockly.Python.definitions_['lcd_pino_enable'] ='lcd_pino_enable = '+ converte_pino_para_string(pino_enable);
      Blockly.Python.definitions_['lcd_pino_dados_4'] ='lcd_pino_dados_4 = '+ converte_pino_para_string(pino_dados_4);
      Blockly.Python.definitions_['lcd_pino_dados_5'] ='lcd_pino_dados_5 = '+ converte_pino_para_string(pino_dados_5);
      Blockly.Python.definitions_['lcd_pino_dados_6'] ='lcd_pino_dados_6 = '+ converte_pino_para_string(pino_dados_6);
      Blockly.Python.definitions_['lcd_pino_dados_7'] ='lcd_pino_dados_7 = '+ converte_pino_para_string(pino_dados_7);

      var code = 'comando =' + '"LC"+' + '"00"' + '+'
                    +'lcd_pino_rs+' + 'lcd_pino_rw+' + 'lcd_pino_enable+' + 'lcd_pino_dados_4+'
                    +'lcd_pino_dados_5+' +'lcd_pino_dados_6+' +'lcd_pino_dados_7'
                    + '+"' + '' + '"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
      Blockly.Python.definitions_['import_AdafruitCharLCD'] = 'import Adafruit_CharLCD as LCD' ;
      Blockly.Python.definitions_['lcd_pino_rs'] ='lcd_pino_rs = '+ pino_rs ;
      Blockly.Python.definitions_['lcd_pino_enable'] ='lcd_pino_enable = '+ pino_enable;
      Blockly.Python.definitions_['lcd_pino_dados_4'] ='lcd_pino_dados_4 = '+ pino_dados_4;
      Blockly.Python.definitions_['lcd_pino_dados_5'] ='lcd_pino_dados_5 = '+ pino_dados_5;
      Blockly.Python.definitions_['lcd_pino_dados_6'] ='lcd_pino_dados_6 = '+ pino_dados_6;
      Blockly.Python.definitions_['lcd_pino_dados_7'] ='lcd_pino_dados_7 = '+ pino_dados_7;

      Blockly.Python.definitions_['LCD'] = lcdName +' = LCD.Adafruit_CharLCD(' + pino_rs + ',' +
                                                                           pino_enable + ',' +
                                                                           pino_dados_4 + ',' +
                                                                           pino_dados_5 + ',' +
                                                                           pino_dados_6 + ',' +
                                                                           pino_dados_7 + ',' +
                                                                           tamanho_linha_lcd + ',' +
                                                                           numero_linhas_lcd + ')' ;
      var code = lcdName + '.clear()\n';
      }

  return code;
  };




//*******************************************************
// Escrever no Display de 7 segmentos
//*******************************************************

Blockly.Python['escrever_display_7s']=function(block){
var numeroDisplay7s =block.getFieldValue('numerosD7S');

	switch(numeroDisplay7s) {
		case '0':
		    //-------------(f,g,e,d,a,b,c)
			var pins_on = '(1,0,1,1,1,1,1)';
			var strOutputs = '"10111110"';
			break;
	    case '1':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(0,0,0,0,0,1,1)';
			var strOutputs = '"00000110"';
			break;
		case '2':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(0,1,1,1,1,1,0)';
			var strOutputs = '"01111100"';
			break;
		case '3':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(0,1,0,1,1,1,1)';
			var strOutputs = '"01011110"';
			break;
		case '4':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(1,1,0,0,0,1,1)';
			var strOutputs = '"11000110"';
			break;
		case '5':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(1,1,0,1,1,0,1)';
			var strOutputs = '"11011010"';
			break;
		case '6':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(1,1,1,1,1,0,1,0)';
			var strOutputs = '"11111010"';
			break;
		case '7':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(0,0,0,0,1,1,1)';
			var strOutputs = '"00001110"';
			break;
		case '8':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(1,1,1,1,1,1,1)';
			var strOutputs = '"11111110"';
			break
		case '9':
		    //-------------(f,g,e,d,a,b,c,x)
			var pins_on = '(1,1,0,1,1,1,1)';
			var strOutputs = '"11011110"';
			break;
	}

   if (GPIOOutputCode == 'A'){
      Blockly.Python.definitions_['pino_segmento_F'] =  'pinoSegmento_F_7SEG =' + converte_pino_para_string(pino_segmento_F);
      Blockly.Python.definitions_['pino_segmento_G'] =  'pinoSegmento_G_7SEG =' + converte_pino_para_string(pino_segmento_G);
      Blockly.Python.definitions_['pino_segmento_E'] =  'pinoSegmento_E_7SEG =' + converte_pino_para_string(pino_segmento_E);
      Blockly.Python.definitions_['pino_segmento_D'] =  'pinoSegmento_D_7SEG =' + converte_pino_para_string(pino_segmento_D);
      Blockly.Python.definitions_['pino_segmento_A'] =  'pinoSegmento_A_7SEG =' + converte_pino_para_string(pino_segmento_A);
      Blockly.Python.definitions_['pino_segmento_B'] =  'pinoSegmento_B_7SEG =' + converte_pino_para_string(pino_segmento_B);
      Blockly.Python.definitions_['pino_segmento_C'] =  'pinoSegmento_C_7SEG =' + converte_pino_para_string(pino_segmento_C);
      Blockly.Python.definitions_['pino_ponto_decimal'] =  'pinoPontoDecimal_7SEG =' + converte_pino_para_string(pino_ponto_decimal);

      var code = 'comando =' + '"7S"+' + '"00"' + '+'
                    +'pinoSegmento_F_7SEG+' + 'pinoSegmento_G_7SEG+' + 'pinoSegmento_E_7SEG+' + 'pinoSegmento_D_7SEG+'
                    +'pinoSegmento_A_7SEG+' +'pinoSegmento_B_7SEG+' +'pinoSegmento_C_7SEG+' +'pinoPontoDecimal_7SEG'
                    + '+' + strOutputs + '+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {

      Blockly.Python.definitions_['import_GpiozeroLEDBoard'] = 'from gpiozero import LEDBoard';
      Blockly.Python.definitions_['pino_segmento_F'] =  'pinoSegmento_F_7SEG =' + pino_segmento_F;
      Blockly.Python.definitions_['pino_segmento_G'] =  'pinoSegmento_G_7SEG =' + pino_segmento_G;
      Blockly.Python.definitions_['pino_segmento_E'] =  'pinoSegmento_E_7SEG =' + pino_segmento_E;
      Blockly.Python.definitions_['pino_segmento_D'] =  'pinoSegmento_D_7SEG =' + pino_segmento_D;
      Blockly.Python.definitions_['pino_segmento_A'] =  'pinoSegmento_A_7SEG =' + pino_segmento_A;
      Blockly.Python.definitions_['pino_segmento_B'] =  'pinoSegmento_B_7SEG =' + pino_segmento_B;
      Blockly.Python.definitions_['pino_segmento_C'] =  'pinoSegmento_C_7SEG =' + pino_segmento_C;

      Blockly.Python.definitions_[display_7SEG_name] = display_7SEG_name + '= LEDBoard(' +
                                                                          ' pinoSegmento_F_7SEG,' +
                                                                          ' pinoSegmento_G_7SEG,' +
                                                                          ' pinoSegmento_E_7SEG,' +
                                                                          ' pinoSegmento_D_7SEG,' +
                                                                          ' pinoSegmento_A_7SEG,' +
                                                                          ' pinoSegmento_B_7SEG,' +
                                                                          ' pinoSegmento_C_7SEG)';

      var code = display_7SEG_name +'.value = ' + pins_on +'\n';
  }


  return code;

};

//*******************************************************
// Linpa Display de 7 segmentos
//*******************************************************

Blockly.Python['limpar_display_7s']=function(block){

  if (GPIOOutputCode == 'A'){

      var strOutputs = '"0000000"';

      Blockly.Python.definitions_['pino_segmento_F'] =  'pinoSegmento_F_7SEG =' + converte_pino_para_string(pino_segmento_F);
      Blockly.Python.definitions_['pino_segmento_G'] =  'pinoSegmento_G_7SEG =' + converte_pino_para_string(pino_segmento_G);
      Blockly.Python.definitions_['pino_segmento_E'] =  'pinoSegmento_E_7SEG =' + converte_pino_para_string(pino_segmento_E);
      Blockly.Python.definitions_['pino_segmento_D'] =  'pinoSegmento_D_7SEG =' + converte_pino_para_string(pino_segmento_D);
      Blockly.Python.definitions_['pino_segmento_A'] =  'pinoSegmento_A_7SEG =' + converte_pino_para_string(pino_segmento_A);
      Blockly.Python.definitions_['pino_segmento_B'] =  'pinoSegmento_B_7SEG =' + converte_pino_para_string(pino_segmento_B);
      Blockly.Python.definitions_['pino_segmento_C'] =  'pinoSegmento_C_7SEG =' + converte_pino_para_string(pino_segmento_C);
      Blockly.Python.definitions_['pino_ponto_decimal'] =  'pinoPontoDecimal_7SEG =' + converte_pino_para_string(pino_ponto_decimal);

      var code = 'comando =' + '"7S"+' + '"00"' + '+'
                    +'pinoSegmento_F_7SEG+' + 'pinoSegmento_G_7SEG+' + 'pinoSegmento_E_7SEG+' + 'pinoSegmento_D_7SEG+'
                    +'pinoSegmento_A_7SEG+' +'pinoSegmento_B_7SEG+' +'pinoSegmento_C_7SEG+' +'pinoPontoDecimal_7SEG'
                    + '+' + strOutputs + '+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {

      Blockly.Python.definitions_['import_GpiozeroLEDBoard'] = 'from gpiozero import LEDBoard';
      Blockly.Python.definitions_['pino_segmento_F'] =  'pinoSegmento_F_7SEG =' + pino_segmento_F;
      Blockly.Python.definitions_['pino_segmento_G'] =  'pinoSegmento_G_7SEG =' + pino_segmento_G;
      Blockly.Python.definitions_['pino_segmento_E'] =  'pinoSegmento_E_7SEG =' + pino_segmento_E;
      Blockly.Python.definitions_['pino_segmento_D'] =  'pinoSegmento_D_7SEG =' + pino_segmento_D;
      Blockly.Python.definitions_['pino_segmento_A'] =  'pinoSegmento_A_7SEG =' + pino_segmento_A;
      Blockly.Python.definitions_['pino_segmento_B'] =  'pinoSegmento_B_7SEG =' + pino_segmento_B;
      Blockly.Python.definitions_['pino_segmento_C'] =  'pinoSegmento_C_7SEG =' + pino_segmento_C;


      Blockly.Python.definitions_[display_7SEG_name] = display_7SEG_name + '= LEDBoard(' +
                                                                          ' pinoSegmento_F_7SEG,' +
                                                                          ' pinoSegmento_G_7SEG,' +
                                                                          ' pinoSegmento_E_7SEG,' +
                                                                          ' pinoSegmento_D_7SEG,' +
                                                                          ' pinoSegmento_A_7SEG,' +
                                                                          ' pinoSegmento_B_7SEG,' +
                                                                          ' pinoSegmento_C_7SEG)' ;
      var code = display_7SEG_name +'.off()\n';
      }

  return code;
};


//-----------------------------------------------------------------------------
//Blocos Buzzer
//-------------------------------------------------------------------------------

function Seleciona_frequencia_nota(nota,altura,acidente){

var frequencia;

	switch(altura) {
		case '2':
			switch (nota){
				case 'C':
					switch (acidente){
						case 'b': frequencia = 123;break;
						case '': frequencia = 131;break;
						case '#': frequencia = 139;break;
					}
				break;
				case 'D':
					switch (acidente){
						case 'b': frequencia = 139;break;
						case '': frequencia = 147;break;
						case '#': frequencia = 156;break;
					}
				break;
				case 'E':
					switch (acidente){
						case 'b': frequencia = 156;break;
						case '': frequencia = 165;break;
						case '#': frequencia = 175;break;
					}
				break;
				case 'F':
					switch (acidente){
						case 'b': frequencia = 165;break;
						case '': frequencia = 175;break;
						case '#': frequencia = 185;break;
					}
				break;
				case 'G':
					switch (acidente){
						case 'b': frequencia = 185;break;
						case '': frequencia = 196;break;
						case '#': frequencia = 208;break;
					}
				break;
				case 'A':
					switch (acidente){
						case 'b': frequencia = 208;break;
						case '': frequencia = 220;break;
						case '#': frequencia = 233;break;
					}
				break;
				case 'B':
					switch (acidente){
						case 'b': frequencia = 233;break;
						case '': frequencia = 247;break;
						case '#': frequencia = 262;break;
					}
				break;
			}
		break;
		case '3':
			switch (nota){
				case 'C':
					switch (acidente){
						case 'b': frequencia = 247;break;
						case '': frequencia = 262;break;
						case '#': frequencia = 277;break;
					}
				break;
				case 'D':
					switch (acidente){
						case 'b': frequencia = 277;break;
						case '': frequencia = 294;break;
						case '#': frequencia = 311;break;
					}
				break;
				case 'E':
					switch (acidente){
						case 'b': frequencia = 311;break;
						case '': frequencia = 330;break;
						case '#': frequencia = 349;break;
					}
				break;
				case 'F':
					switch (acidente){
						case 'b': frequencia = 330;break;
						case '': frequencia = 349;break;
						case '#': frequencia = 370;break;
					}
				break;
				case 'G':
					switch (acidente){
						case 'b': frequencia = 370;break;
						case '': frequencia = 392;break;
						case '#': frequencia = 415;break;
					}
				break;
				case 'A':
					switch (acidente){
						case 'b': frequencia = 415;break;
						case '': frequencia = 440;break;
						case '#': frequencia = 466;break;
					}
				break;
				case 'B':
					switch (acidente){
						case 'b': frequencia = 499;break;
						case '': frequencia = 494;break;
						case '#': frequencia = 523;break;
					}
				break;
			}
		break;
		case '4':
			switch (nota){
				case 'C':
					switch (acidente){
						case 'b': frequencia = 494;break;
						case '': frequencia = 523;break;
						case '#': frequencia = 554;break;
					}
				break;
				case 'D':
					switch (acidente){
						case 'b': frequencia = 554;break;
						case '': frequencia = 587;break;
						case '#': frequencia = 622;break;
					}
				break;
				case 'E':
					switch (acidente){
						case 'b': frequencia = 622;break;
						case '': frequencia = 659;break;
						case '#': frequencia = 698;break;
					}
				break;
				case 'F':
					switch (acidente){
						case 'b': frequencia = 659;break;
						case '': frequencia = 698;break;
						case '#': frequencia = 740;break;
					}
				break;
				case 'G':
					switch (acidente){
						case 'b': frequencia = 740;break;
						case '': frequencia = 784;break;
						case '#': frequencia = 831;break;
					}
				break;
				case 'A':
					switch (acidente){
						case 'b': frequencia = 831;break;
						case '': frequencia = 880;break;
						case '#': frequencia = 932;break;
					}
				break;
				case 'B':
					switch (acidente){
						case 'b': frequencia = 932;break;
						case '': frequencia = 988;break;
						case '#': frequencia = 1047;break;
					}
				break;
			}
		break;
	}
return frequencia;

}


Blockly.Python['tocar_nota_buzzer'] = function(block) {
  var nota_musical = block.getFieldValue('nota_musical');
  var altura = block.getFieldValue('altura');
  var acidente = block.getFieldValue('acidente');

  if (GPIOOutputCode == 'A'){

      var strFrequencia =  Seleciona_frequencia_nota(nota_musical,altura,acidente).toString() ;
      var pinoPinoBuzzerStr = converte_pino_para_string(pino_buzzer);
      Blockly.Python.definitions_['pinoBuzzer'] =  'pinoBuzzer =' + pinoPinoBuzzerStr;
      var code = 'comando =' + '"BN"+' + 'pinoBuzzer' + '+"' + strFrequencia + '"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
      Blockly.Python.definitions_['import_GpiozeroTonalBuzzer'] = 'from gpiozero import TonalBuzzer';
      Blockly.Python.definitions_['import_GpiozeroTones'] = 'from gpiozero.tones import Tone';
      Blockly.Python.definitions_['pinoBuzzer'] =  'pinoBuzzer =' + pino_buzzer;
      Blockly.Python.definitions_[buzzer_name] = buzzer_name + '= TonalBuzzer(pinoBuzzer,' +
                                                               ' mid_tone = Tone("A3"), ' +
                                                               ' octaves = 2)';

      var code = buzzer_name +'.play(Tone ("'+ nota_musical + acidente + altura+'"))\n';
  }

  return code;
};


Blockly.Python['parar_som_buzzer'] = function(block) {

  if (GPIOOutputCode == 'A'){
      var pinoPinoBuzzerStr = converte_pino_para_string(pino_buzzer);
      Blockly.Python.definitions_['pinoBuzzer'] =  'pinoBuzzer =' + pinoPinoBuzzerStr;
      var code = 'comando =' + '"BM"+' + 'pinoBuzzer' + '+"0000"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';
  }else {
      Blockly.Python.definitions_['import_GpiozeroTonalBuzzer'] = 'from gpiozero import TonalBuzzer';
      Blockly.Python.definitions_['import_GpiozeroTones'] = 'from gpiozero.tones import Tone';
      Blockly.Python.definitions_['pinoBuzzer'] =  'pinoBuzzer =' + pino_buzzer;
      Blockly.Python.definitions_[buzzer_name] = buzzer_name + '= TonalBuzzer(pinoBuzzer,' +
                                                               ' mid_tone = Tone("A3"), ' +
                                                               ' octaves = 2)';

      var code = buzzer_name +'.stop()\n';
  }


  return code;
};


Blockly.Python['tocar_sirene_buzzer'] = function(block) {
  var velocidade = block.getFieldValue('velocidade');

    if (GPIOOutputCode == 'A'){

      var pinoPinoBuzzerStr = converte_pino_para_string(pino_buzzer);
      Blockly.Python.definitions_['pinoBuzzer'] =  'pinoBuzzer =' + pinoPinoBuzzerStr;
      var code = 'comando =' + '"BS"+' + 'pinoBuzzer' +'+"' + velocidade +'"+' +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n';


    } else {
          Blockly.Python.definitions_['import_GpiozeroTonalBuzzer'] = 'from gpiozero import TonalBuzzer';
          Blockly.Python.definitions_['import_GpiozeroTones'] = 'from gpiozero.tones import Tone';
	  Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
          Blockly.Python.definitions_['pinoBuzzer'] =  'pinoBuzzer =' + pino_buzzer;
          Blockly.Python.definitions_[buzzer_name] = buzzer_name + '= TonalBuzzer(pinoBuzzer,' +
                                                                   ' mid_tone = Tone("A4"), ' +
                                                                   ' octaves = 4)';
								   
	  switch(velocidade) {
	    case "0":
		  velocidade = "0.001";
		  break;
	    case "1":
		  velocidade = "0.01";
		  break;
          }							   

          var code = 'for i in range(600,800):\n' +
                     '   ' + buzzer_name + '.play(Tone(frequency=i))\n' +
                     '   ' + 'sleep(' + velocidade + ')\n' +
                     'for i in range(-800,-600):\n' +
                     '   ' + buzzer_name + '.play(Tone(frequency=-i))\n' +
                     '   ' + 'sleep(' + velocidade + ')\n'+
		     'tonalBuzzer.stop()\n';
    }

  return code;
};



//-----------------------------------------
// Escrever no Terminal de Vídeo
//----------------------------------------

  Blockly.Python['escrever_no_terminal_de_video'] = function(block) {

  var texto_para_escrever = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_NONE) || '\'\'';
  var texto_para_falar = texto_para_escrever;
  var aspas = "'" + '"' + "'";

  if (texto_para_escrever.charAt(0)== '"'){
    var final = texto_para_escrever.length - 2;
    texto_para_escrever = texto_para_escrever.substr(1,final)
  }

  var falar =  block.getFieldValue('falar');
  Blockly.Python.definitions_['coding-utf-8'] = '# -*- coding: utf-8 -*-';

      switch(sexo_fala_padrao) {
        case 'f':
            var indice_fala = indice_fala_feminina;
            break;
        case 'm':
            var indice_fala = indice_fala_masculina;
            break;
    }


    switch(falar) {
      case 'FALSE':
         var code = 'print('+ texto_para_escrever  +')\n';
         break;
      case 'TRUE':
        Blockly.Python.definitions_['import_pyttsx3'] = 'import pyttsx3';
        Blockly.Python.definitions_['engine_fala'] =   'engine = pyttsx3.init()';
        Blockly.Python.definitions_['voices_fala'] =   'voices = engine.getProperty("voices")';
         Blockly.Python.definitions_[nome_variavel_sexo_fala] = nome_variavel_sexo_fala + ' = ' + indice_fala;
         Blockly.Python.definitions_[nome_variavel_velocidade_fala] = nome_variavel_velocidade_fala + ' = ' + velocidade_fala_padrao;


         var code = 'print('+ texto_para_escrever  +')\n' +
                    'engine.setProperty("voice", voices['+ nome_variavel_sexo_fala +'].id)\n' +
                    'engine.setProperty("rate",'+ nome_variavel_velocidade_fala +')\n' +
                    'engine.say('+ texto_para_escrever +')\n' +
                    'engine.runAndWait()\n';
         break;
  }

  return code;

}


Blockly.Python['text_write'] = function(block) {
  // Text value.
  var code = '"'+ Blockly.Python.quote_(block.getFieldValue('TEXT')) + '"';
  return [code, Blockly.Python.ORDER_ATOMIC];
};




//----------------------------------------------------
//Bloco Falar
//----------------------------------------------------


Blockly.Python['configurar_fala'] = function(block) {
  sexo_fala = block.getFieldValue('sexo');
  var velocidade = block.getFieldValue('velocidade');

    switch(sexo_fala) {
        case 'f':
            var indice_fala = indice_fala_feminina;
            break;
        case 'm':
            var indice_fala = indice_fala_masculina;
            break;
    }

   switch(velocidade) {
      case 'b':
         velocidade_fala = velocidade_fala_lenta;
         break;
      case 'm':
         velocidade_fala = velocidade_fala_normal;
         break;
      case 'a':
         velocidade_fala = velocidade_fala_rapida;
         break;
   }

   var code =  nome_variavel_sexo_fala + ' = ' + indice_fala  + '\n' +
               nome_variavel_velocidade_fala + ' = ' + velocidade_fala + '\n';

   return code;
};



Blockly.Python['falar'] = function(block) {
     var texto_para_falar = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_NONE) || '\'\'';
      var aspas = "'" + '"' + "'";

    switch(sexo_fala_padrao) {
        case 'f':
            var indice_fala = indice_fala_feminina;
            break;
        case 'm':
            var indice_fala = indice_fala_masculina;
            break;
    }

  Blockly.Python.definitions_['import_pyttsx3'] = 'import pyttsx3';
  Blockly.Python.definitions_['engine_fala'] =  'engine = pyttsx3.init()';
  Blockly.Python.definitions_['voices_fala'] =  'voices = engine.getProperty("voices")';
  Blockly.Python.definitions_[nome_variavel_sexo_fala] = nome_variavel_sexo_fala + ' = ' + indice_fala;
  Blockly.Python.definitions_[nome_variavel_velocidade_fala] = nome_variavel_velocidade_fala + ' = ' + velocidade_fala_padrao;

  var code =  'engine.setProperty("voice", voices['+ nome_variavel_sexo_fala +'].id)\n' +
              'engine.setProperty("rate",'+ nome_variavel_velocidade_fala +')\n' +
              'engine.say('+ texto_para_falar +')\n' +
              'engine.runAndWait()\n';

  return code;

};


Blockly.Python['text_speak'] = function(block) {
  // Text value.
  var code = '"'+ Blockly.Python.quote_(block.getFieldValue('TEXT')) + '"';
  return [code, Blockly.Python.ORDER_ATOMIC];
};



//*******************************************************
//Tocar e Parar Som
//*******************************************************

Blockly.Python['tocar_som'] = function(block) {
  var sound = "'" + block.getFieldValue('sound') + "'";
  var checkbox_wait_sound = block.getFieldValue('wait_sound') == 'TRUE';
  
  Blockly.Python.definitions_['winsound'] ='import winsound';
  Blockly.Python.definitions_['import_os'] = 'import os';

  function codigo_soudToPlay(){
  var codigo =
  
   "   currentpath = os.path.dirname(os.path.abspath(__file__))\n"+
   "   parentpath = os.path.dirname(currentpath)\n"+
   "   soundPath = os.path.join (parentpath,'BlockWiSARD','sound', sound)\n"+
   "   return soundPath\n";

  return codigo;
 }
  
  Blockly.Python.definitions_['function_play_sound'] =
        'def soundToPlay(sound):\n'+ codigo_soudToPlay();
		
  if (checkbox_wait_sound) {
     var code = "winsound.PlaySound(None,winsound.SND_PURGE)\n" +
				"winsound.PlaySound(soundToPlay("+ sound +"),winsound.SND_NOSTOP)\n";	   
  } else {
      var code = "winsound.PlaySound(None,winsound.SND_PURGE)\n" +
				 "winsound.PlaySound(soundToPlay("+ sound +"),winsound.SND_ASYNC)\n";	  
  }
  
  return code;
  


};


Blockly.Python['parar_som'] = function(block) {

  Blockly.Python.definitions_['winsound'] ='import winsound';
  var code = "winsound.PlaySound(None,winsound.SND_PURGE)\n";

  return code;

};

