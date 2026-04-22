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
 * @fileoverview Generating Code for BlockWiSARD special Blocks.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Python.Raspberry.Sensores');
goog.require('Blockly.Python');

//--------------------------------------------
//Generators included by RLQ - BlockWiSARD
//--------------------------------------------

//Definie o tipo de saída do Código (Raspberry ou ARduino)
var GPIOOutputCode = GPIO_output_code;


function  converte_pino_para_string(pino){
     if (pino  < 10) {
           var pinoStr = '"0' + pino.toString() +'"';
       }else{
           var pinoStr = '"' + pino.toString() +'"';
       }
    return pinoStr
}


if (GPIOOutputCode == 'A'){
    //variáveis sensor distância
    var pino_ultrasonic_echo=arduino_pino_ultrasonic_echo;
    var pino_ultrasonic_trigger=arduino_pino_ultrasonic_envio_sinal;
    //variáveis sensor luz
    var pino_LDR_luz=arduino_pino_LDR_luz;
    var valor_margem_luz_baixa=arduino_valor_margem_luz_baixa;
    var valor_margem_luz_alta=arduino_valor_margem_luz_alta;
    //Variáveis sensor toque
    var pino_sensor_toque = arduino_pino_sensor_toque;
    //Variáveis Interruptores
    var pino_interruptor_verde = arduino_pino_interruptor_verde;
    var pino_interruptor_vermelho = arduino_pino_interruptor_vermelho;
    var pino_interruptor_azul = arduino_pino_interruptor_azul;
    var pino_interruptor_amarelo = arduino_pino_interruptor_amarelo;
    var pino_interruptor_preto = arduino_pino_interruptor_preto;

} else {
    //variáveis sensor distância
    var pino_ultrasonic_echo=raspberry_pino_ultrasonic_echo;
    var pino_ultrasonic_trigger=raspberry_pino_ultrasonic_envio_sinal;
    var ultrasonic_delay_leitura=raspberry_ultrasonic_delay_leitura;
    //variáveis sensor luz
    var pino_LDR_luz=raspberry_pino_LDR_luz;
    var valor_margem_luz_baixa=raspberry_valor_margem_luz_baixa;
    var valor_margem_luz_alta=raspberry_valor_margem_luz_alta;
    //Variáveis sensor toque
    var pino_sensor_toque = raspberry_pino_sensor_toque;
    //Variáveis Interruptores
    var pino_interruptor_verde = raspberry_pino_interruptor_verde;
    var pino_interruptor_vermelho = raspberry_pino_interruptor_vermelho;
    var pino_interruptor_azul = raspberry_pino_interruptor_azul;
    var pino_interruptor_amarelo = raspberry_pino_interruptor_amarelo;
    var pino_interruptor_preto = raspberry_pino_interruptor_preto;
    /*
    //variáveis sensor refletância
    var pino_sensor_linha_esquerdo = raspberry_pino_sensor_linha_esquerdo;
    var pino_sensor_linha_direito = raspberry_pino_sensor_linha_direito;
    var valor_margem_refletancia_baixa=raspberry_valor_margem_refletancia_baixa;
    var valor_margem_refletancia_alta=raspberry_valor_margem_refletancia_alta;
    //Variáveis potenciômetro
    var pino_potenciometro = raspberry_pino_potenciometro;
    var med_val_potenciometro_sup = raspberry_med_val_potenciometro_sup;
    var med_val_potenciometro_inf = raspberry_med_val_potenciometro_inf;
    */
}


//Variaveis que guardam valores lidos pelos Sensores
  var varButtonState = 'estadoBotao';
  var buttonDispName = 'botao';

  var varDistance = 'distancia';
  var distanceSensorDispName = 'sensorDistancia';

  var varInitialLuminosity = 'luminosidadeInicial';
  var varLuminosity = 'luminosidade';
  var LDRDispName = 'sensorLuz';

  var redSwitchDispName = 'interruptorVermelho';
  var greenSwitchDispName = 'interruptorVerde';
  var yellowSwitchDispName = 'interruptorAmarelo';
  var blueSwitchDispName = 'interruptorAzul';
  var blackSwitchDispName = 'interruptorPreto';
  var varRedSwitchState = 'estadoInterruptorVermelho';
  var varGreenSwitchState = 'estadoInterruptorVerde';
  var varYellowSwitchState = 'estadoInterruptorAmarelo';
  var varBlueSwitchState = 'estadoInterruptorAzul';
  var varBlackSwitchState = 'estadoInterruptorPreto';

  var varTextFromKeybord = 'textFromKeybord';




//*****************************************************************
//SENSOR DE TOQUE
//*****************************************************************


Blockly.Python['le_estado_sensor_toque'] = function(block) {

  if (GPIOOutputCode == 'A'){

      var pinoSensorToqueStr = converte_pino_para_string(pino_sensor_toque);
      Blockly.Python.definitions_['pinoSensorToque'] =  'pinoSensorToque =' + pinoSensorToqueStr;
      var code = 'comando =' + '"PR"+' + 'pinoSensorToque' + '+"0000"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n' +
                    varButtonState + ' = int('  + arduindoSerialVarName +'.readline().decode())\n';
  }else {
      Blockly.Python.definitions_['pinoSensorToque'] =  'pinoSensorToque =' + pino_sensor_toque;
      Blockly.Python.definitions_['import_GpiozeroButton'] = 'from gpiozero import Button';
      Blockly.Python.definitions_[buttonDispName] = buttonDispName + ' = Button(pinoSensorToque)';

      var code = varButtonState + ' = ' + buttonDispName +'.value\n';
  }

  return code;

};


Blockly.Python['condicionante_sensor_toque'] = function(block) {
 var dropdown_botao = block.getFieldValue('estadoBotao');

 Blockly.Python.definitions_[varButtonState] = varButtonState + ' = None';

  if(dropdown_botao == 1){
	  var code = varButtonState + ' == 1';
  } else if(dropdown_botao == 0){
	  var code = varButtonState + ' == 0';
  }

  return [code, Blockly.Python.ORDER_CONDITIONAL];

};

//------------------------------------------
//INTERRUPTOR
//------------------------------------------

Blockly.Python['le_estado_interruptor'] = function(block) {
  var cor_interruptor = block.getFieldValue('corInterruptor');

  	//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(cor_interruptor) {
		case '#ff0000':
			var dispName = redSwitchDispName;
			var nomeVariavelInterruptor = varRedSwitchState;
			var nomePinoInterruptor = 'pinoInterruptorVermelho';
			break;
		case '#00ff00':
			var dispName = greenSwitchDispName;
			var nomeVariavelInterruptor = varGreenSwitchState;
			var nomePinoInterruptor ='pinoInterruptorVerde';
			break;
		case '#0000ff':
			var dispName = blueSwitchDispName;
			var nomeVariavelInterruptor = varBlueSwitchState;
			var nomePinoInterruptor = 'pinoInterruptorAzul';
			break;
		case '#ffff00':
			var dispName = yellowSwitchDispName;
			var nomeVariavelInterruptor = varYellowSwitchState ;
			var nomePinoInterruptor = 'pinoInterruptorAmarelo';
			break;
		case '#000000':
			var dispName = blackSwitchDispName;
			var nomeVariavelInterruptor = varBlackSwitchState ;
			var nomePinoInterruptor = 'pinoInterruptorPreto';
			break;
	}


   if (GPIOOutputCode == 'A'){

      Blockly.Python.definitions_['pinoInterruptorVermelho'] =  'pinoInterruptorVermelho =' +  converte_pino_para_string(pino_interruptor_vermelho);
      Blockly.Python.definitions_['pinoInterruptorVerde'] =  'pinoInterruptorVerde =' +  converte_pino_para_string(pino_interruptor_verde);
      Blockly.Python.definitions_['pinoInterruptorAmarelo'] =  'pinoInterruptorAmarelo =' +  converte_pino_para_string(pino_interruptor_amarelo);
      Blockly.Python.definitions_['pinoInterruptorAzul'] =  'pinoInterruptorAzul =' +  converte_pino_para_string(pino_interruptor_azul);
      Blockly.Python.definitions_['pinoInterruptorPreto'] =  'pinoInterruptorPreto =' +  converte_pino_para_string(pino_interruptor_preto);
      var code = 'comando =' + '"PR"+' + nomePinoInterruptor + '+"0000"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n' +
                    nomeVariavelInterruptor + ' = int('  + arduindoSerialVarName +'.readline().decode())\n';
  }else {
      Blockly.Python.definitions_['import_GpiozeroButton'] = 'from gpiozero import Button';
      Blockly.Python.definitions_['pinoInterruptorVermelho'] =  'pinoInterruptorVermelho =' + pino_interruptor_vermelho;
      Blockly.Python.definitions_['pinoInterruptorVerde'] =  'pinoInterruptorVerde =' + pino_interruptor_verde;
      Blockly.Python.definitions_['pinoInterruptorAmarelo'] =  'pinoInterruptorAmarelo =' + pino_interruptor_amarelo;
      Blockly.Python.definitions_['pinoInterruptorAzul'] =  'pinoInterruptorAzul =' + pino_interruptor_azul;
      Blockly.Python.definitions_['pinoInterruptorPreto'] =  'pinoInterruptorPreto =' + pino_interruptor_preto;
      Blockly.Python.definitions_[redSwitchDispName] = redSwitchDispName + ' = Button(pinoInterruptorVermelho)';
      Blockly.Python.definitions_[greenSwitchDispName] = greenSwitchDispName + ' = Button(pinoInterruptorVerde)';
      Blockly.Python.definitions_[yellowSwitchDispName] = yellowSwitchDispName + ' = Button(pinoInterruptorAmarelo)';
      Blockly.Python.definitions_[blueSwitchDispName] = blueSwitchDispName + ' = Button(pinoInterruptorAzul)';
      Blockly.Python.definitions_[blackSwitchDispName] = blackSwitchDispName + ' = Button(pinoInterruptorPreto)';
      var code =   nomeVariavelInterruptor + '=' + dispName +'.value\n';
  }
  return code;
};


Blockly.Python['condicionante_interruptor'] = function(block) {
  var cor_interruptor = block.getFieldValue('corInterruptor');
  var dropdown_interruptor = block.getFieldValue('estadoInterruptor');
  /*
  Blockly.Python.definitions_[redSwitchDispName] = redSwitchDispName + ' = Button(' + pino_interruptor_vermelho + ')';
  Blockly.Python.definitions_[greenSwitchDispName] = greenSwitchDispName + ' = Button(' + pino_interruptor_verde + ')';
  Blockly.Python.definitions_[yellowSwitchDispName] = yellowSwitchDispName + ' = Button(' + pino_interruptor_amarelo + ')';
  Blockly.Python.definitions_[blueSwitchDispName] = blueSwitchDispName + ' = Button(' + pino_interruptor_azul + ')';
  Blockly.Python.definitions_[blackSwitchDispName] = blackSwitchDispName + ' = Button(' + pino_interruptor_preto + ')';
  */
  Blockly.Python.definitions_[varRedSwitchState] = varRedSwitchState + ' = None';
  Blockly.Python.definitions_[varGreenSwitchState] = varGreenSwitchState + '  = None';
  Blockly.Python.definitions_[varYellowSwitchState] = varYellowSwitchState + '  = None';
  Blockly.Python.definitions_[varBlueSwitchState] = varBlueSwitchState  + ' = None';
  Blockly.Python.definitions_[varBlackSwitchState] = varBlackSwitchState  + ' = None';

	//Troca o Valor Hexadecimal da Cor pelo "pino" Referente à cor
	switch(cor_interruptor) {
		case '#ff0000':
			var nomeVariavelInterruptor = varRedSwitchState;
			break;
		case '#00ff00':
			var nomeVariavelInterruptor = varGreenSwitchState;
			break;
		case '#0000ff':
			var nomeVariavelInterruptor = varBlueSwitchState;
			break;
		case '#ffff00':
			var nomeVariavelInterruptor = varYellowSwitchState;
			break;
		case '#000000':
			var nomeVariavelInterruptor = varBlackSwitchState;
			break;
	}

    if(dropdown_interruptor == 1){
	   var code =  nomeVariavelInterruptor + ' == 1';
    } else if(dropdown_interruptor == 0){
	   var code = nomeVariavelInterruptor + ' == 0';
    }

  return [code, Blockly.Python.ORDER_CONDITIONAL];

};


//*************************************************************************
//Sensor Distância
//*************************************************************************


function codigo_verifica_distancia(){
    var codigo =
       "   distancia = 0\n"+
       "   for i in range(10):\n" +
       "      distancia =  distancia +" + distanceSensorDispName +".distance\n" +
       "   distancia = (distancia*100)/10\n" +
       "   sleep(0.01)\n" +
       "   return int(distancia)\n";
    return codigo;
// O comando sleep foi incluido devido a um problema possivelmente na biblioteca GPIOZero que não 
// funcionava seguinte situação:
//
// while True:
//   distancia = sensorDistancia.distance*100
//   while distancia < 10:
//      print('Perto', distancia,'m')
//      distancia = sensorDistancia.distance*100
}


Blockly.Python['le_distancia'] = function(block) {
  Blockly.Python.definitions_[varDistance] = varDistance + '= 0';
  if (GPIOOutputCode == 'A'){
      Blockly.Python.definitions_['pino_sensor_distancia_Trig'] = 'pinoSensorDistanciaTrig ='+ converte_pino_para_string(pino_ultrasonic_trigger);
      Blockly.Python.definitions_['pino_sensor_distancia_Echo'] = 'pinoSensorDistanciaEcho ='+ converte_pino_para_string(pino_ultrasonic_echo);

      var code = 'comando =' + '"DT"+' + 'pinoSensorDistanciaTrig+' + 'pinoSensorDistanciaEcho+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n' +
                    varDistance + ' = int('  + arduindoSerialVarName +'.readline().decode())\n';
  }else {
      Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
      Blockly.Python.definitions_['function_verifica_distancia'] =
        'def verificaDistancia():\n'+ codigo_verifica_distancia();
    
      Blockly.Python.definitions_['import_GpiozeroDistanceSensor'] = 'from gpiozero import DistanceSensor';
      Blockly.Python.definitions_['pino_sensor_distancia_Trig'] = 'pinoSensorDistanciaTrig ='+ pino_ultrasonic_trigger;
      Blockly.Python.definitions_['pino_sensor_distancia_Echo'] = 'pinoSensorDistanciaEcho ='+ pino_ultrasonic_echo;
      Blockly.Python.definitions_[distanceSensorDispName] = distanceSensorDispName + '= DistanceSensor(pinoSensorDistanciaEcho,pinoSensorDistanciaTrig)';
      var code = varDistance + ' = verificaDistancia()\n';
  }


  return code;

};

Blockly.Python['condicionante_sensor_distancia'] = function(block) {
  var dropdown_operador = block.getFieldValue('operador');
  var val_distancia = block.getFieldValue('distancia');

  /*
  Blockly.Python.definitions_['import_GpiozeroDistanceSensor'] = 'from gpiozero import DistanceSensor';
  Blockly.Python.definitions_['pino_sensor_distancia_Trig'] = 'pinoSensorDistanciaTrig ='+ pino_ultrasonic_trigger;
  Blockly.Python.definitions_['pino_sensor_distancia_Echo'] = 'pinoSensorDistanciaEcho ='+ pino_ultrasonic_echo;
  Blockly.Python.definitions_[distanceSensorDispName] = distanceSensorDispName + '= DistanceSensor(pinoSensorDistanciaEcho,pinoSensorDistanciaTrig)';
   */
  Blockly.Python.definitions_[varDistance] = varDistance + '= 0';

  var OPERATORS = {
    'igual': '== ',
    'menor': ' < ',
    'maior': ' > ',
  };

  var tipo_operador = OPERATORS[block.getFieldValue('operador')];

  var code =  varDistance +  tipo_operador +  val_distancia;

  return [code, Blockly.Python.ORDER_CONDITIONAL];

};

Blockly.Python['apresenta_distancia'] = function(block) {
  Blockly.Python.definitions_[varDistance] = varDistance + '= 0';
  var code = varDistance;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//*************************************************************************
//Sensor Luz
//*************************************************************************


function codigo_verifica_luminosidade(){
    var codigo =
       "   luminosidade = 0\n"+
       "   for i in range(10):\n" +
       "      luminosidade =  luminosidade +" + LDRDispName +".value\n" +
       "   sleep(0.01)\n" +
       "   luminosidade = luminosidade/10\n" +
       "   return luminosidade\n";
    return codigo;
}
// O comando sleep foi incluido devido a um problema possivelmente na biblioteca GPIOZero que
// não funcionava em determinadas situações


Blockly.Python['guarda_luminosidade_ambiente'] = function(block) {
  Blockly.Python.definitions_[varInitialLuminosity] = varInitialLuminosity + ' = 0';
  if (GPIOOutputCode == 'A'){
      Blockly.Python.definitions_['pinoSensorLuz'] = 'pinoSensorLuz = '+ converte_pino_para_string(pino_LDR_luz);
      var code = 'comando =' + '"AR"+' + 'pinoSensorLuz' + '+"0000"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n' +
                    varInitialLuminosity + ' = int('  + arduindoSerialVarName +'.readline().decode())\n';
  }else {
      Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
      Blockly.Python.definitions_['import_GpiozeroLightSensor'] = 'from gpiozero import LightSensor';
      Blockly.Python.definitions_['pinoSensorLuz'] = 'pinoSensorLuz ='+ pino_LDR_luz;
      Blockly.Python.definitions_[LDRDispName] = LDRDispName + ' = LightSensor(pinoSensorLuz)';
      Blockly.Python.definitions_['function_verifica_distancia'] =
        'def verificaLuminosidade():\n'+ codigo_verifica_luminosidade();
      
      var code = varInitialLuminosity + ' = verificaLuminosidade()\n';
      
  }

  return code;

};

Blockly.Python['le_luminosidade'] = function(block) {
   Blockly.Python.definitions_[varLuminosity] = varLuminosity + ' = 0';
  if (GPIOOutputCode == 'A'){
      Blockly.Python.definitions_['pinoSensorLuz'] = 'pinoSensorLuz = ' + converte_pino_para_string(pino_LDR_luz);
      var code = 'comando =' + '"AR"+' + 'pinoSensorLuz' + '+"0000"+'  +'"*"\n' +
                    arduindoSerialVarName +'.write(comando.encode())\n' +
                    varLuminosity + ' = int('  + arduindoSerialVarName +'.readline().decode())\n';
  }else {
      Blockly.Python.definitions_['import_Time'] = 'from time import sleep';
      Blockly.Python.definitions_['import_GpiozeroLightSensor'] = 'from gpiozero import LightSensor';
      Blockly.Python.definitions_['pinoSensorLuz'] = 'pinoSensorLuz ='+ pino_LDR_luz;
      Blockly.Python.definitions_[LDRDispName] = LDRDispName + ' = LightSensor(pinoSensorLuz)';
      Blockly.Python.definitions_['function_verifica_distancia'] =
        'def verificaLuminosidade():\n'+ codigo_verifica_luminosidade();
      var code =  varLuminosity + ' = verificaLuminosidade()\n';
  }

  return code;
};


Blockly.Python['condicionante_sensor_luz'] = function(block) {
  var dropdown_operador = block.getFieldValue('operador');

  Blockly.Python.definitions_[varInitialLuminosity] = varInitialLuminosity + ' = 0';
  Blockly.Python.definitions_[varLuminosity] = varLuminosity + ' = 0';

  if (dropdown_operador == "maior"){
      var code =  varLuminosity + ' > ( ' + varInitialLuminosity + ' + ' + valor_margem_luz_alta +')';
  }
  if (dropdown_operador == "igual"){
      var code =  '('+ varLuminosity + ' <= (' + varInitialLuminosity + ' + ' + valor_margem_luz_alta +')' +
                   ' and ('+ varLuminosity + ' >= (' + varInitialLuminosity + ' - ' + valor_margem_luz_baixa +'))' ;
  }
  if (dropdown_operador == "menor"){
      var code = varLuminosity +' < ('+ varInitialLuminosity + ' - ' + valor_margem_luz_baixa +')';
  }

  return [code, Blockly.Python.ORDER_CONDITIONAL];

};


Blockly.Python['apresenta_luminosidade_inicial'] = function(block) {
  Blockly.Python.definitions_[varInitialLuminosity] = varInitialLuminosity + ' = 0';
  var code = varInitialLuminosity;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['apresenta_luminosidade'] = function(block) {
  Blockly.Python.definitions_[varLuminosity] = varLuminosity + ' = 0';
  var code = varLuminosity;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//------------------------------------------------
//Teclado
//-------------------------------------------------


Blockly.Python['espera_tecla_enter'] = function(block) {

  Blockly.Python.definitions_[varTextFromKeybord] = varTextFromKeybord + ' ="'+"'"+"'"+'"';

  var code = 'input()\n'
  return code;

}


Blockly.Python['le_texto_teclado'] = function(block) {

  Blockly.Python.definitions_[varTextFromKeybord] = varTextFromKeybord + ' ="'+"'"+"'"+'"';

  //var aspas = "'" + '"' + "'"
  //var code =  varTextFromKeybord + '=' +  aspas + '+ input()+' +  aspas + '\n';
  var code = varTextFromKeybord + '= input()\n'
  return code;

}


Blockly.Python['condicionante_texto_teclado'] = function(block) {
  var texto_teclado = block.getFieldValue('texto_teclado');

  Blockly.Python.definitions_[varTextFromKeybord] = varTextFromKeybord + ' ="'+"'"+"'"+'"';

  //var code =  varTextFromKeybord + " == '" + '"' + texto_teclado +'"' +"'";
  var code =  varTextFromKeybord + " == '" + texto_teclado + "'";

  return [code, Blockly.Python.ORDER_CONDITIONAL];

};

Blockly.Python['apresenta_texto_teclado'] = function(block) {
  Blockly.Python.definitions_[varTextFromKeybord] = varTextFromKeybord + ' ="'+"'"+"'"+'"';
  var code =  varTextFromKeybord ;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/*



//*****************************************************************
//SENSOR SEGUIDOR DE LINHA
//*****************************************************************
function codigo_verifica_refletancia(){

var codigo =
		'int refletancia = 0;\n' +
		'for (int i = 0; i<10;++i){\n' +
		'refletancia = analogRead(pino_sensor_reflexo) + refletancia;\n' +
		'}\n' +
		'refletancia = refletancia/10;\n' +
		'return refletancia;\n';

return codigo;

}

Blockly.Arduino['sensor_linha'] = function(block) {
  var dropdown_reflexo = block.getFieldValue('REFLEXO');
  var dropdown_direcao = block.getFieldValue('DIRECAO');

  if (tipo_leitura_sensor == 'a'){
		  //Declara a função que verifica a refletancia
		  var nome_funcao = 'verifica_refletancia' ;
		  var func = ['\n'+'int ' + Blockly.Arduino.DEF_FUNC_NAME + '(int pino_sensor_reflexo)\n{\n' +
		  codigo_verifica_refletancia() + '}\n'];
		  var funcName = Blockly.Arduino.addFunction(nome_funcao, func.join('\n'));
		  //
		  var pino_sensor_linha_direito = pino_analogico_sensor_linha_direito;
		  var pino_sensor_linha_esquerdo = pino_analogico_sensor_linha_esquerdo;
		  if(dropdown_direcao == 'DIREITA'){
		  Blockly.Arduino.definitions_['referencia_reflexo_direita'] ='int referencia_reflexo_direita;';
		  Blockly.Arduino.definitions_['pino_seguidor_direita'] = 'int pino_seguidor_direita = ' +  pino_sensor_linha_direito +';';
		  Blockly.Arduino.addSetup('io_' + "referencia_reflexo_direita", 'referencia_reflexo_direita = '+ funcName + '(pino_seguidor_direita);', false);
		  if(dropdown_reflexo == 'MUITO'){
				var code = 'analogRead(pino_seguidor_direita) > referencia_reflexo_direita + ' + valor_margem_refletancia_alta;
			}
			else if(dropdown_reflexo == 'POUCO'){
				var code = 'analogRead(pino_seguidor_direita) < referencia_reflexo_direita - ' + valor_margem_refletancia_baixa;
			}
		  } else if(dropdown_direcao == 'ESQUERDA'){
		  Blockly.Arduino.definitions_['referencia_reflexo_esquerda'] ='int referencia_reflexo_esquerda;';
		  Blockly.Arduino.definitions_['pino_seguidor_esquerda'] = 'int pino_seguidor_esquerda = ' + pino_sensor_linha_esquerdo +';';
		  Blockly.Arduino.addSetup('io_' + "referencia_reflexo_esquerda", 'referencia_reflexo_esquerda = '+ funcName + '(pino_seguidor_esquerda);', false);
			if(dropdown_reflexo == 'MUITO'){
				var code = 'analogRead(pino_seguidor_esquerda) > referencia_reflexo_esquerda + ' + valor_margem_refletancia_alta;
			}
			else if(dropdown_reflexo == 'POUCO'){
				var code = 'analogRead(pino_seguidor_esquerda) < referencia_reflexo_esquerda - ' + valor_margem_refletancia_baixa;
			}
		  }
  } else {
      var pino_sensor_linha_direito = pino_digital_sensor_linha_direito;
	  var pino_sensor_linha_esquerdo = pino_digital_sensor_linha_esquerdo;
      if(dropdown_direcao == 'DIREITA'){
		  var pinSetupSensorReflexoDireita = 'pinMode(' + "pino_seguidor_direita" + ', INPUT);';
		  Blockly.Arduino.addSetup('io_' + "pino_seguidor_direita", pinSetupSensorReflexoDireita, false);
		  Blockly.Arduino.definitions_['pino_seguidor_direita'] = 'int pino_seguidor_direita = ' +  pino_sensor_linha_direito +';';
		  //código
		  if(dropdown_reflexo == 'MUITO'){
			 var code = 'digitalRead (' + pino_sensor_linha_direito + ')== 0';
		  }else if(dropdown_reflexo == 'POUCO'){
			  var code = 'digitalRead (' + pino_sensor_linha_direito + ')== 1';
		  }
	  }else if(dropdown_direcao == 'ESQUERDA'){
		  var pinSetupSensorReflexoEsquerda = 'pinMode(' + "pino_seguidor_esquerda" + ', INPUT);';
		  Blockly.Arduino.definitions_['pino_seguidor_esquerda'] = 'int pino_seguidor_esquerda = ' + pino_sensor_linha_esquerdo +';';
		  Blockly.Arduino.addSetup('io_' + "pino_seguidor_esquerda", pinSetupSensorReflexoEsquerda, false);
		  //código
		  if(dropdown_reflexo == 'MUITO'){
			 var code = 'digitalRead (' + pino_sensor_linha_esquerdo + ')== 0';
		  } else if(dropdown_reflexo == 'POUCO'){
		    var code = 'digitalRead (' + pino_sensor_linha_esquerdo + ')== 1';
		  }
	  }
  }
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];

};


//*****************************************************************
//POTENCIOMETRO
//*****************************************************************

Blockly.Arduino['potenciometro'] = function(block) {
  var dropdown_potenciometro = block.getFieldValue('potenciometro');

  //Definitions
  Blockly.Arduino.definitions_['pino_potenciometro'] = 'int pino_potenciometro = ' +  pino_analogico_potenciometro +';';

  if (dropdown_potenciometro == "BAIXO"){
	  var code = '(analogRead(pino_potenciometro) > '+ med_val_potenciometro_sup  +')';
  }
  if (dropdown_potenciometro == "MEDIO"){
	  var code = '((' + med_val_potenciometro_inf + ' < analogRead(pino_potenciometro)) && (analogRead(pino_potenciometro) < ' + med_val_potenciometro_sup + '))';
  }
  if (dropdown_potenciometro == "ALTO"){
	  var code = '(analogRead(pino_potenciometro) < ' + med_val_potenciometro_inf +')';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];

};

*/


