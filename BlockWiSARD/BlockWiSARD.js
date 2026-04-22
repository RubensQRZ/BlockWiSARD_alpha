/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 */
'use strict';

/** Create a namespace for the application. */
BlockWiSARD = BlockWiSARD || {};

  var GPIO_OPT = {
    'C':  Blockly.Msg.COMPUTER_MODE,
    'A':  Blockly.Msg.ARDUINO_MODE,
    /*R': 'Raspberry',*/ 
  }

BlockWiSARD.atualizaPinos= function (tipoGPIO){
    //Define os pinos utilizados pelos LEDs
    if (tipoGPIO == 'A'){
        //LEDs
        pinoLedVerde = arduino_pino_LED_verde;
        pinoLedAmarelo = arduino_pino_LED_amarelo;
        pinoLedVermelho = arduino_pino_LED_vermelho;
        pinoLedAzul = arduino_pino_LED_azul;
        velocidade_baixa_blink=arduino_velocidade_baixa_blink;
        velocidade_media_blink=arduino_velocidade_media_blink;
        velocidade_alta_blink=arduino_velocidade_alta_blink;
        //LED RGB
        pino_rgb_vermelho = arduino_pino_RGB_vermelho;
        pino_rgb_verde = arduino_pino_RGB_verde;
        pino_rgb_azul = arduino_pino_RGB_azul;
        //Servo
        pino_servo_motor = arduino_pino_Servo_Motor;
        //Motor DC
        pino_motor_DC = arduino_pino_MotorDC;
        velocidade_baixa_motorDC=arduino_velocidade_baixa_motorDC;
        velocidade_media_motorDC=arduino_velocidade_media_motorDC;
        velocidade_alta_motorDC=arduino_velocidade_alta_motorDC;
        //LCD
        pino_rs = arduino_pino_rs;
        pino_rw = arduino_pino_rw;
        pino_enable = arduino_pino_enable;
        pino_dados_4 = arduino_pino_dados_4;
        pino_dados_5 = arduino_pino_dados_5;
        pino_dados_6 = arduino_pino_dados_6;
        pino_dados_7 = arduino_pino_dados_7;
        //Display de 7 segmentos
        pino_segmento_F = arduino_pino_segmento_F;
        pino_segmento_G = arduino_pino_segmento_G;
        pino_segmento_E = arduino_pino_segmento_E;
        pino_segmento_D = arduino_pino_segmento_D;
        pino_segmento_A = arduino_pino_segmento_A;
        pino_segmento_B = arduino_pino_segmento_B;
        pino_segmento_C = arduino_pino_segmento_C;
        pino_ponto_decimal = arduino_pino_ponto_decimal;
        //Buzzer
        pino_buzzer = arduino_pino_buzzer;
        tempo_sirene=10;
         //variáveis sensor distância
        pino_ultrasonic_echo=arduino_pino_ultrasonic_echo;
        pino_ultrasonic_trigger=arduino_pino_ultrasonic_envio_sinal;
        //variáveis sensor luz
        pino_LDR_luz=arduino_pino_LDR_luz;
        valor_margem_luz_baixa=arduino_valor_margem_luz_baixa;
        valor_margem_luz_alta=arduino_valor_margem_luz_alta;
        //Variáveis sensor toque
        pino_sensor_toque = arduino_pino_sensor_toque;
        //Variáveis Interruptores
        pino_interruptor_verde = arduino_pino_interruptor_verde;
        pino_interruptor_vermelho = arduino_pino_interruptor_vermelho;
        pino_interruptor_azul = arduino_pino_interruptor_azul;
        pino_interruptor_amarelo = arduino_pino_interruptor_amarelo;
        pino_interruptor_preto = arduino_pino_interruptor_preto;

    } else{
       /* 
        //LEDs
        pinoLedVermelho = raspberry_pino_LED_vermelho;
        pinoLedAmarelo = raspberry_pino_LED_amarelo;
        pinoLedVerde = raspberry_pino_LED_verde;
        pinoLedAzul = raspberry_pino_LED_azul;
        velocidade_baixa_blink=raspberry_velocidade_baixa_blink;
        velocidade_media_blink=raspberry_velocidade_media_blink;
        velocidade_alta_blink=raspberry_velocidade_alta_blink;
        //LED RGB
        pino_rgb_vermelho = raspberry_pino_RGB_vermelho;
        pino_rgb_verde = raspberry_pino_RGB_verde;
        pino_rgb_azul = raspberry_pino_RGB_azul;
        //Servo
        pino_servo_motor = raspberry_pino_Servo_Motor;
        //MotorDC
        pino_motor_DC = raspberry_pino_MotorDC;
        velocidade_baixa_motorDC=raspberry_velocidade_baixa_motorDC;
        velocidade_media_motorDC=raspberry_velocidade_media_motorDC;
        velocidade_alta_motorDC=raspberry_velocidade_alta_motorDC;
        //LCD
        pino_rs = raspberry_pino_rs;
        pino_enable = raspberry_pino_enable;
        pino_dados_4 = raspberry_pino_dados_4;
        pino_dados_5 = raspberry_pino_dados_5;
        pino_dados_6 = raspberry_pino_dados_6;
        pino_dados_7 = raspberry_pino_dados_7;
        //Display de 7 segmentos
        pino_segmento_F = raspberry_pino_segmento_F;
        pino_segmento_G = raspberry_pino_segmento_G;
        pino_segmento_E = raspberry_pino_segmento_E;
        pino_segmento_D = raspberry_pino_segmento_D;
        pino_segmento_A = raspberry_pino_segmento_A;
        pino_segmento_B = raspberry_pino_segmento_B;
        pino_segmento_C = raspberry_pino_segmento_C;
        //Buzzer
        pino_buzzer = raspberry_pino_buzzer;
        tempo_sirene=10;
       //variáveis sensor distância
        pino_ultrasonic_echo=raspberry_pino_ultrasonic_echo;
        pino_ultrasonic_trigger=raspberry_pino_ultrasonic_envio_sinal;
        ultrasonic_delay_leitura=raspberry_ultrasonic_delay_leitura;
        //variáveis sensor luz
        pino_LDR_luz=raspberry_pino_LDR_luz;
        valor_margem_luz_baixa=raspberry_valor_margem_luz_baixa;
        valor_margem_luz_alta=raspberry_valor_margem_luz_alta;
        //Variáveis sensor toque
        pino_sensor_toque = raspberry_pino_sensor_toque;
        //Variáveis Interruptores
        pino_interruptor_verde = raspberry_pino_interruptor_verde;
        pino_interruptor_vermelho = raspberry_pino_interruptor_vermelho;
        pino_interruptor_azul = raspberry_pino_interruptor_azul;
        pino_interruptor_amarelo = raspberry_pino_interruptor_amarelo;
        pino_interruptor_preto = raspberry_pino_interruptor_preto; 
        */
    }

}

//BlockWiSARD --- GPIO Options ----------------------------------------------------

BlockWiSARD.changeGPIOOutput = function() {
  var gpioMenu = document.getElementById('gpio');
  var gipioSelectedIndex = gpioMenu.options.selectedIndex;

  	switch(gipioSelectedIndex) {
		case 0:
		    GPIOOutputCode = 'C';
		    document.getElementById('python_code_title').textContent =
		    Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_COMPUTER;
		    document.getElementById('python_code_logo').textContent = '{C}';
			break;
		case 1:
		    GPIOOutputCode = 'A';
		    BlockWiSARD.atualizaPinos(GPIOOutputCode);
		    document.getElementById('python_code_title').textContent =
		    Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_ARDUINO;
		    document.getElementById('python_code_logo').textContent = '{A}';
			break;
		/*
		case 2:
		    GPIOOutputCode = 'R';
		    BlockWiSARD.atualizaPinos(GPIOOutputCode);
		    document.getElementById('python_code_title').textContent =
		    Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_RASPBERRY;
		    document.getElementById('python_code_logo').textContent = '{R}';
			break;
		*/
	}

	var delayInMilliseconds = 100;
    setTimeout(function() {
        var xml = Blockly.Xml.workspaceToDom(Ardublockly.workspace);
        Ardublockly.workspace.clear();
        Blockly.Xml.domToWorkspace(xml,Ardublockly.workspace);
    }, delayInMilliseconds);

};


BlockWiSARD.populateGPIOMenu = function(selected_GPIO_output_code,languageVl) {

  if (languageVl == "en") {
       GPIO_OPT = {
        'C': 'No GPIO (Computer Only)',
        'A': 'Arduino (Computer + Arduino)',
      //'R': 'Raspberry',
      }
  }else {
       GPIO_OPT = {
        'C': 'Sem GPIO (Apenas Computador)',
        'A': 'Arduino (Computador + Arduino)',
      //'R': 'Raspberry',
      }
  }

  var gpioMenu = document.getElementById('gpio');
  gpioMenu.options.length = 0;

  for (var GPIO_output in GPIO_OPT) {
    var option = new Option(GPIO_OPT[GPIO_output], GPIO_output);
    if (GPIO_output == selected_GPIO_output_code) {
      option.selected = true;
    }
    gpioMenu.options.add(option);
  }

    switch(selected_GPIO_output_code) {
		/*
		case 'R':
		    document.getElementById('python_code_title').textContent =
		    Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_RASPBERRY;
		    document.getElementById('python_code_logo').textContent = '{R}';
			break;
		*/
		case 'A':
		    document.getElementById('python_code_title').textContent =
		    Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_ARDUINO;
		    document.getElementById('python_code_logo').textContent = '{A}';
			break;
		case 'C':
		    document.getElementById('python_code_title').textContent =
		    Blockly.Msg.PYTHON_CODE_ACCORDION_TITLE_COMPUTER;
		    document.getElementById('python_code_logo').textContent = '{C}';
			break;
	}

  gpioMenu.onchange = BlockWiSARD.changeGPIOOutput;
};


BlockWiSARD.setPythonAccordionTitle = function(selected_GPIO_output_code, languageVl) {

  if (languageVl == "en") {
    var code_title = "Python Code ";
    var gpio_title_arduino = "(Arduino GPIO)";
    //var gpio_title_raspberry = "(Raspberry GPIO)";
    var gpio_title_computer = "(No GPIO)";
  }else {
    var code_title = "Código Python ";
    var gpio_title_arduino = "(GPIO Arduino)";
    //var gpio_title_raspberry = "(GPIO RaspberryPI)";
    var gpio_title_computer = "(Sem GPIO)";
  }

    switch(selected_GPIO_output_code) {
		/*
		case 'R':
		    document.getElementById('python_code_title').textContent = code_title + gpio_title_raspberry;
		    document.getElementById('python_code_logo').textContent = '{R}';
			break;
		*/
		case 'A':
		    document.getElementById('python_code_title').textContent = code_title + gpio_title_arduino;
		    document.getElementById('python_code_logo').textContent = '{A}';
			break;
		case 'C':
		    document.getElementById('python_code_title').textContent = code_title + gpio_title_computer;
		    document.getElementById('python_code_logo').textContent = '{C}';
			break;
	}
 }
