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
 * @fileoverview Gerador de Código do raspberry para o robo.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Python.Robo');
goog.require('Blockly.Python');


//--------------------------------------------
//Generators included by RLQ - BlockWiSARD
//--------------------------------------------


//*******************************************************
//Inicializa Pinos etc.
//*******************************************************

//Define os pinos utilizados pelos motores do robo


var pino_motor_direito_1_IN1 = raspberry_pino_motor_direito_1_IN1;
var pino_motor_direito_2_IN2 = raspberry_pino_motor_direito_2_IN2;
var pino_enable_motor_direito = raspberry_pino_enable_motor_direito;

var pino_motor_esquerdo_1_IN3 = raspberry_pino_motor_esquerdo_1_IN3;
var pino_motor_esquerdo_2_IN4 = raspberry_pino_motor_esquerdo_2_IN4;
var pino_enable_motor_esquerdo = raspberry_pino_enable_motor_esquerdo;

var velocidade_robo = raspberry_velocidade_robo;
var velocidade_motor_direito = raspberry_velocidade_motor_direito;
var velocidade_motor_esquerdo = raspberry_velocidade_motor_esquerdo;


function inicializa_definicoes_robo() {

  Blockly.Python.definitions_['import_GpiozeroRobot'] = 'from gpiozero import Robot';


  Blockly.Python.definitions_['pino_motor_direito_1_IN1'] ='pinoMotorDireitoRobo_1_IN1 = ' + pino_motor_direito_1_IN1;
  Blockly.Python.definitions_['pino_motor_direito_2_IN2'] ='pinoMotorDireitoRobo_2_IN2 = ' + pino_motor_direito_2_IN2;
  Blockly.Python.definitions_['pinoMotorEsquerdo_1_IN3'] ='pinoMotorEsquerdoRobo_1_IN3 = ' + pino_motor_esquerdo_1_IN3;
  Blockly.Python.definitions_['pino_motor_esquerdo_2_IN4'] ='pinoMotorEsquerdoRobo_2_IN4 = ' + pino_motor_esquerdo_2_IN4;

  Blockly.Python.definitions_['velocidade_motor_direito_robo'] ='velocidadeMotorDireitoRobo = ' + velocidade_motor_direito;
  Blockly.Python.definitions_['velocidade_motor_esquerdo_robo'] ='velocidadeMotorEsquerdoRobo = ' + velocidade_motor_esquerdo;


  Blockly.Python.definitions_['robot'] = 'robot = Robot(left=(pinoMotorEsquerdoRobo_1_IN3, pinoMotorEsquerdoRobo_2_IN4)' +
                                        ', right=(pinoMotorDireitoRobo_1_IN1, pinoMotorDireitoRobo_2_IN2))';

 //Blockly.Python.definitions_['velocidade_robo'] ='velocidadeRobo = ' + velocidade_robo
 // Blockly.Python.definitions_['pino_enable_motor_esquerdo'] ='pinoEnableMotorEsquerdo= '+ pino_enable_motor_esquerdo +';'
 // Blockly.Python.definitions_['pino_enable_motor_direito'] ='pinoEnableMotorDireito= '+ pino_enable_motor_direito +';'
};



//*************************************************************************
//Faz o robo andar para a frente
//*******************************************************

Blockly.Python['mover_robo_para_frente'] = function(block) {
  inicializa_definicoes_robo();
  var code = "robot.value=(velocidadeMotorDireitoRobo,velocidadeMotorEsquerdoRobo)\n";
  return code;
};


//*******************************************************
//Faz o robo andar para trás
//*******************************************************

Blockly.Python['mover_robo_para_tras'] = function(block) {
  inicializa_definicoes_robo();
  //var code = "robot.value=(-velocidadeMotorDireitoRobo,-velocidadeMotorEsquerdoRobo)\n";
  var code = "robot.value=(-velocidadeMotorDireitoRobo,-velocidadeMotorEsquerdoRobo)\n";
  return code;
};

//*******************************************************
//Faz o robo virar para a esquerda
//*******************************************************

Blockly.Python['virar_robo_para_esquerda'] = function(block) {
  inicializa_definicoes_robo();
  var code = "robot.value=(velocidadeMotorDireitoRobo,-velocidadeMotorEsquerdoRobo)\n";
  return code;
};

//*******************************************************
//Faz o robo virar para a direita
//*******************************************************

Blockly.Python['virar_robo_para_direita'] = function(block) {
  inicializa_definicoes_robo();
  var code = "robot.value=(-velocidadeMotorDireitoRobo,velocidadeMotorEsquerdoRobo)\n";
  return code;
};

//*******************************************************
//Faz o robo virar para a direita ou esquerda aleatóreamente
//*******************************************************

Blockly.Python['virar_robo_para_esquerda_ou_direita'] = function(block) {
  inicializa_definicoes_robo();
  Blockly.Python.definitions_['import_ramdom'] = 'import random';

 var code =  'rand_number = random.randint(1,2); \n '
           + 'if rand_number == 1: \n'
		       + '   robot.value=(velocidadeMotorDireitoRobo,-velocidadeMotorEsquerdoRobo)\n'
		       + 'else:'
		       + '   robot.value=(-velocidadeMotorDireitoRobo,velocidadeMotorEsquerdoRobo)\n';

 return code;
};

//*******************************************************
//Faz o robo parar durante o tempo previsto no bloco delay
//*******************************************************

Blockly.Python['parar_robo'] = function(block) {
  inicializa_definicoes_robo();
  var code = "robot.value=(0,0)\n";
  return code;
};



/*


function inicializa_definicoes_robo() {

  Blockly.Python.definitions_['import_GpiozeroRobot'] = 'from gpiozero import Robot';


  Blockly.Python.definitions_['pino_motor_direito_1_IN1'] ='pinoMotorDireitoRobo_1_IN1 = ' + pino_motor_direito_1_IN1
  Blockly.Python.definitions_['pino_motor_direito_2_IN2'] ='pinoMotorDireitoRobo_2_IN2 = ' + pino_motor_direito_2_IN2
  Blockly.Python.definitions_['pinoMotorEsquerdo_1_IN3'] ='pinoMotorEsquerdoRobo_1_IN3 = ' + pino_motor_esquerdo_1_IN3
  Blockly.Python.definitions_['pino_motor_esquerdo_2_IN4'] ='pinoMotorEsquerdoRobo_2_IN4 = ' + pino_motor_esquerdo_2_IN4

  Blockly.Python.definitions_['velocidade_robo'] ='velocidadeRobo = ' + velocidade_robo


  Blockly.Python.definitions_['robot'] = 'robot = Robot(left=(pinoMotorEsquerdoRobo_1_IN3, pinoMotorEsquerdoRobo_2_IN4)' +
                                         ', right=(pinoMotorDireitoRobo_1_IN1, pinoMotorDireitoRobo_2_IN2))'


 // Blockly.Python.definitions_['pino_enable_motor_esquerdo'] ='pinoEnableMotorEsquerdo= '+ pino_enable_motor_esquerdo +';'
 // Blockly.Python.definitions_['pino_enable_motor_direito'] ='pinoEnableMotorDireito= '+ pino_enable_motor_direito +';'
};



//*************************************************************************
//Faz o robo andar para a frente
//*******************************************************

Blockly.Python['mover_robo_para_frente'] = function(block) {
  inicializa_definicoes_robo();
  var code = "robot.forward(velocidadeRobo)\n";
  return code;
};


//*******************************************************
//Faz o robo andar para trás
//*******************************************************

Blockly.Python['mover_robo_para_tras'] = function(block) {

  inicializa_definicoes_robo();
  var code = "robot.backward(velocidadeRobo)\n";
  return code;


};

//*******************************************************
//Faz o robo virar para a esquerda
//*******************************************************

Blockly.Python['virar_robo_para_esquerda'] = function(block) {

  inicializa_definicoes_robo();
  var code = "robot.left(velocidadeRobo)\n";
  return code;

};


//*******************************************************
//Faz o robo virar para a direita
//*******************************************************

Blockly.Python['virar_robo_para_direita'] = function(block) {

  inicializa_definicoes_robo();
  var code = "robot.right(velocidadeRobo)\n";
  return code;

};


//*******************************************************
//Faz o robo virar para a direita ou esquerda aleatóreamente
//*******************************************************

Blockly.Python['virar_robo_para_esquerda_ou_direita'] = function(block) {

  inicializa_definicoes_robo();
   Blockly.Python.definitions_['import_ramdom'] = 'import random';


 var code =  ' rand_number = andom.randint(1,2); \n '
           + 'if rand_number == 1: \n'
		   + '   robot.left(velocidadeRobo)\n'
		   + 'else:'
		   + '   robot.right(velocidadeRobo)\n'

  return code;

};

//*******************************************************
//Faz o robo parar durante o tempo previsto no bloco delay
//*******************************************************

Blockly.Python['parar_robo'] = function(block) {

  inicializa_definicoes_robo();
  var code = "robot.stop()\n";
  return code;
};
 */
