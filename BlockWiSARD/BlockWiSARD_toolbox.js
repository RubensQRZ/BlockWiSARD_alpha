/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var BlockWiSARD = BlockWiSARD || {};
//*************************************************************
//Original Ardublockly blocks where replaced by DB4K blocks ( Modified by RLQ DB4K)

BlockWiSARD.TOOLBOX_XML =
'<xml>'+
'  <sep></sep>' +
'  <sep_strong></sep_strong>' +

'	<category id = "catWiSARD" name= "WiSARD">' +
'      <block type="create_wisard"></block>' +
'	    <block type="block_wisard_train_pattern_picture_group"></block>' +
'	    <block type="block_wisard_train_pattern_picture_single"></block>' +
'	    <block type="block_wisard_classify_pattern_picture"></block>' +
'	    <block type="block_wisard_show_mental_Image"></block>' +
/**
'       <block type="block_wisard_train_pattern_text"></block>' +
'	    <block type="block_wisard_classify_pattern_text"></block>' +
'       <block type="label_get"></block>' +
**/
'	</category>' +	
	
'  <sep_strong></sep_strong>' +
	
'  <category id = "catControls" name="Controles">' +
'  		<block type="sleep"></block>' +
'		<block type="repetir"></block>' +
'		<block type="repetir_sempre"></block>' +
'		<block type="enquanto"></block>' +	
'	    <block type="condicional_simples"></block>' +
'	    <block type="condicional_completo"></block>' +
//'	    <block type="gera_codigo_teste"></block>' +
//'	    <block type="gera_codigo_teste_2"></block>' +
'	    <block type="startSerial"></block>' +
/*
'	    <block type="corrupt_code_block"></block>' +
'	    <block type="corrupt_condition_block"></block>' +
*/
' </category>' +
	
'	<sep></sep>' +
	
'	<category id = "catConditions" name="Condições">' +
'	    <block type="block_wisard_condicionante_classify_pattern_picture"></block>' +
'	    <block type="block_wisard_condicionante_unclassified"></block>' +
'		<block type="condicionante_texto_teclado"></block>' +
'	    <block type="condicionante_sensor_luz"></block>' +
'		<block type="condicionante_sensor_distancia"></block>' +
'		<block type="condicionante_sensor_toque"></block>' +
'		<block type="condicionante_interruptor"></block>' +
'	</category>' +	
	
' <sep_strong></sep_strong>' +
	
'	<category id = "catSensors" name="Sensores">' +
'	    <block type="block_wisard_get_picture"></block>' +
'	    <block type="apresenta_imagem_fotografada"></block>' +
'	    <block type="le_texto_teclado"></block>' +
'	    <block type="apresenta_texto_teclado"></block>' +
'	    <block type="espera_tecla_enter"></block>' +
'	    <block type="le_distancia"></block>' +
'	    <block type="apresenta_distancia"></block>' +
'	    <block type="guarda_luminosidade_ambiente"></block>' +
'	    <block type="apresenta_luminosidade_inicial"></block>' +
'	    <block type="le_luminosidade"></block>' +
'	    <block type="apresenta_luminosidade"></block>' +
'	    <block type="le_estado_sensor_toque"></block>' +
'	    <block type="le_estado_interruptor"></block>' +

'	</category>' +
	
' <sep_strong></sep_strong>' +
	
'    <category id = "catLEDs" name="LEDs">' +
'		<block type="acender_led"></block>' +
'		<block type="apagar_led"></block>' +
'		<block type="piscar_led"></block>' +
'		<block type="led_rgb"></block>' +
'	</category>' +
	
'	<sep></sep>' +
	
' 	<category id = "catMotors" name="Motores">' +
'	    <block type="mover_servomotor"></block>' +
'	    <block type="detach_servomotor"></block>' +
'		<block type="girar_motor"></block>' +
'		<block type="parar_motor"></block>' +
'	</category>' +
	
'   <sep></sep>' +
	
'    <category id = "catDisplays" name="Displays">' +

'		<block type="escrever_no_terminal_de_video" inline="true">' +
'          <value name="TEXT">' +
'           <shadow type="text_write">' +
'              <field name="TEXT">abc</field>' +
'           </shadow>' +
'          </value>' +
'       </block>' +


'		<block type="mostra_imagem_no_terminal_de_video" inline="true">' +
'          <value name="IMAGE">' +
'           <shadow type="apresenta_imagem_branca">' +
'           </shadow>' +
'          </value>' +
'       </block>' +

'		<block type="escrever_lcd" inline="true">' +
'          <value name="TEXT">' +
'           <shadow type="text_write">' +
'              <field name="TEXT">abc</field>' +
'           </shadow>' +
'          </value>' +
'       </block>' +

'		<block type="limpar_lcd"></block>' +
'		<block type="escrever_display_7s"></block>' +
'		<block type="limpar_display_7s"></block>' +
'	</category>' +
	
'	<sep></sep>' +
	
'	<category id = "catAudio" name="Áudio" >' +
'	    <block type="configurar_fala"></block>' +

'	    <block type="falar" inline="true">' +
'          <value name="TEXT">' +
'           <shadow type="text_speak">' +
'              <field name="TEXT">abc</field>' +
'           </shadow>' +
'          </value>' +
'       </block>' +

'	    <block type="tocar_som"></block>' +
'	    <block type="parar_som"></block>' +
'	    <block type="tocar_nota_buzzer"></block>' +
'	    <block type="parar_som_buzzer"></block>' +
'	    <block type="tocar_sirene_buzzer"></block>' +
'	</category>' +
		
' <sep_strong></sep_strong>' +
	
'	<category id = "catRobot" name="Robô">' +
'  		<block type="mover_robo_para_frente"></block>' +
'		<block type="mover_robo_para_tras"></block>' +
'		<block type="virar_robo_para_direita"></block>' +
'		<block type="virar_robo_para_esquerda"></block>' +
'		<block type="virar_robo_para_esquerda_ou_direita"></block>' +
'		<block type="parar_robo"></block>' +
'	</category>' +
	
' <sep></sep>' +
	
'</xml>';



//-----------------------------------------------------------------------------
