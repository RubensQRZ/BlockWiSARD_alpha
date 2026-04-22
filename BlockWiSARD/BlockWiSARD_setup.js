//GPIO Output Code -  'A' = Arduino  'C' = Somente Computador, sem GPIO

var GPIO_output_code = 'C';

//Comunicação Arduido
var arduino_serial_speed = 9600;
var arduino_tempo_espera_ComPort = 2.0;

//WiSARD
var wisard_tempo_espera_cam = 5;
var wisard_idcam = 0;																																														;

var wisard_adress_size= 16;
var wisard_limite_confianca = 0.5;
var wisard_tamanho_retina= 200;  //tamanho em pixels
var wisard_verbose= 'False';
var wisard_bleaching = 'False';
var wisard_ignore_zero = 'False';
var BlockWiSARD_threshold_value = 75; //Não está sendo usado


//VOZ  --   / sexo_fala_defaut -> 'm' para masculino ou 'f' para feminino
//Se o Windows tiver sintetizadores para as vozes masculina e feminina instaladas,
//             usualmnete a fala feminida tem o índice 0 e a masculina o índice 1
var BlockWiSARD_indice_fala_feminina = 0
var BlockWiSARD_indice_fala_masculina = 0
var BlockWiSARD_sexo_fala_default = 'f';
var BlockWiSARD_velocidade_fala_lenta = '120';
var BlockWiSARD_velocidade_fala_normal = '170';
var BlockWiSARD_velocidade_fala_rapida = '280';
var BlockWiSARD_nacionalidade = "pt"; //Parâmetro não utilizado
var BlockWiSARD_tontalidade_fala_default= '3'; // Parâmetro não utilizado


//LEDs
var raspberry_pino_LED_verde=27;
var raspberry_pino_LED_amarelo=22;
var raspberry_pino_LED_vermelho=5;
var raspberry_pino_LED_azul=10;
var raspberry_velocidade_baixa_blink=1;
var raspberry_velocidade_media_blink=0.5;
var raspberry_velocidade_alta_blink=0.15;

var arduino_pino_LED_verde=11;
var arduino_pino_LED_amarelo=10;
var arduino_pino_LED_vermelho=9;
var arduino_pino_LED_azul=8;
var arduino_velocidade_baixa_blink=1;
var arduino_velocidade_media_blink=0.5;
var arduino_velocidade_alta_blink=0.15;


//LED RGB
var raspberry_pino_RGB_vermelho=26;
var raspberry_pino_RGB_verde=19;
var raspberry_pino_RGB_azul=13;

var arduino_pino_RGB_vermelho=2;
var arduino_pino_RGB_verde=4;
var arduino_pino_RGB_azul=5;

//SERVO
var raspberry_pino_Servo_Motor=18;
var raspberry_Servo_Motor_min_angle=0;
var raspberry_Servo_Motor_max_angle=180;
var raspberry_Servo_Motor_min_pulse_width=0.0005; //0.0006
var raspberry_Servo_Motor_max_pulse_width=0.0025; //0.0024

var arduino_pino_Servo_Motor=1;


//MOTOR DC
var raspberry_pino_MotorDC=11;
var raspberry_velocidade_baixa_motorDC=0.5;
var raspberry_velocidade_media_motorDC=0.7;
var raspberry_velocidade_alta_motorDC=1.0;

var arduino_pino_MotorDC=3;
var arduino_velocidade_baixa_motorDC=90;
var arduino_velocidade_media_motorDC=130;
var arduino_velocidade_alta_motorDC=250;


//LCD
var raspberry_pino_rs=26;
var raspberry_pino_rw="None";
var raspberry_pino_enable=19;
var raspberry_pino_dados_4=13;
var raspberry_pino_dados_5=6;
var raspberry_pino_dados_6=10;
var raspberry_pino_dados_7=11;
var raspberry_tamanho_linha_LCD=16;
var raspberry_numero_linhas_LCD=2;

var arduino_pino_rs=31;
var arduino_pino_rw=33;
var arduino_pino_enable=35;
var arduino_pino_dados_4=30;
var arduino_pino_dados_5=32;
var arduino_pino_dados_6=34;
var arduino_pino_dados_7=36;


//DISPLAY 7SEG
var raspberry_pino_segmento_F=12;
var raspberry_pino_segmento_G=16;
var raspberry_pino_segmento_E=20;
var raspberry_pino_segmento_D=21;
var raspberry_pino_segmento_A=26;
var raspberry_pino_segmento_B=19;
var raspberry_pino_segmento_C=13;

var arduino_pino_segmento_F=26;
var arduino_pino_segmento_G=28;
var arduino_pino_segmento_E=23;
var arduino_pino_segmento_D=25;
var arduino_pino_segmento_A=24;
var arduino_pino_segmento_B=22;
var arduino_pino_segmento_C=27;
var arduino_pino_ponto_decimal=29;

//BUZZER
var raspberry_pino_buzzer=6;
var arduino_pino_buzzer=4;


//SENSOR_DISTANCIA (echo=23, triguer=24)
var raspberry_pino_ultrasonic_echo=23;
var raspberry_pino_ultrasonic_envio_sinal=24;
var raspberry_ultrasonic_delay_leitura=100;

var arduino_pino_ultrasonic_echo=7;
var arduino_pino_ultrasonic_envio_sinal=6;

//SENSOR_LUZ (A luz varia entre 0 (sem luz) e 1 (com luz)
var raspberry_pino_LDR_luz=4;
var raspberry_valor_margem_luz_alta =  0.1;
var raspberry_valor_margem_luz_baixa = 0.2;

var arduino_pino_LDR_luz= 1 //Deve-se colocar apenas o número do pino analógico, sema letra
var arduino_valor_margem_luz_alta =  70;
var arduino_valor_margem_luz_baixa = 90;

//SENSOR_REFLETANCIA
var raspberry_pino_sensor_linha_direito=3;
var raspberry_pino_sensor_linha_esquerdo=4;
var raspberry_valor_margem_refletancia_baixa = 0.2;
var raspberry_valor_margem_refletancia_alta = 0.2;


//POTENCIOMETRO
var raspberry_pino_potenciometro = 3;
var raspberry_med_val_potenciometro_sup = 0.2;
var raspberry_med_val_potenciometro_inf = 0.2;

//SENSOR DE TOQUE
var raspberry_pino_sensor_toque = 2;

var arduino_pino_sensor_toque = 5;


//INTERRPUTORES
var raspberry_pino_interruptor_verde = 7;
var raspberry_pino_interruptor_vermelho = 8;
var raspberry_pino_interruptor_amarelo = 9;
var raspberry_pino_interruptor_azul = 25;
var raspberry_pino_interruptor_preto = 17;

var arduino_pino_interruptor_verde = 40;
var arduino_pino_interruptor_vermelho = 41;
var arduino_pino_interruptor_amarelo = 42;
var arduino_pino_interruptor_azul = 43;
var arduino_pino_interruptor_preto = 44;


//ROBO -- Velocidade do Motor (0 ate 1)

var raspberry_pino_motor_direito_1_IN1= 12;
var raspberry_pino_motor_direito_2_IN2= 16;
var raspberry_pino_enable_motor_direito="None";

var raspberry_pino_motor_esquerdo_1_IN3=20;
var raspberry_pino_motor_esquerdo_2_IN4=21;
var raspberry_pino_enable_motor_esquerdo="None";

var raspberry_velocidade_motor_esquerdo=0.8;
var raspberry_velocidade_motor_direito=0.8;

var raspberry_velocidade_robo=0.5;

