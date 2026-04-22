//**************************************************************
//Servidor DuinoBerryServer Versão Beta1.00
//Autor: Rubens Lacerda Queiroz
//23/05/2019
//**************************************************************

//---------------------------------------------------------------
//Para incluir o tratamento de novos comandos, inserir uma nova 
//cláusula "else if ( comando == "CC") { }". Lembrando que os 
//comandos enviados pelo Scriptvox possuem o formato CCPPVVVV...V*, 
//sendo CC o identificador do comando, PP um número de Pino e
//VVVV...V um valor de uso diveso.  
//---------------------------------------------------------------

#include <Servo.h>
#include <Ultrasonic.h>
#include <Thermistor.h>
#include <LiquidCrystal.h>

Servo meu_Servo;
String frase,comando,valor_str;
int pino,valor;

//LCD
bool inicializa_pinos_lcd = true;
bool begin_lcd = true;
int lcd_pino_rs,lcd_pino_rw,lcd_pino_enable,lcd_pino_dados_4,lcd_pino_dados_5,lcd_pino_dados_6,lcd_pino_dados_7;

int inicializa_lcd(LiquidCrystal lcd){
   lcd.begin(16,2);  
}


int seta_pinos_lcd(){
   String pinosLCD = frase.substring(4,18);
   lcd_pino_rs = pinosLCD.substring(0,2).toInt();
   lcd_pino_rw = pinosLCD.substring(2,4).toInt();
   lcd_pino_enable = pinosLCD.substring(4,6).toInt();
   lcd_pino_dados_4 = pinosLCD.substring(6,8).toInt();
   lcd_pino_dados_5 = pinosLCD.substring(8,10).toInt();
   lcd_pino_dados_6 = pinosLCD.substring(10,12).toInt();
   lcd_pino_dados_7 = pinosLCD.substring(12,14).toInt();
}

//7SEG
bool inicializa_pinos_7SEG = true; 
int pinoF, pinoG, pinoE, pinoD, pinoA, pinoB, pinoC, pinoPD;
int STF, STG, STE, STD, STA, STB, STC, STPD;

int define_pinos_7SEG(String pinos7Seg){
   pinoF = pinos7Seg.substring(0,2).toInt();
   pinoG = pinos7Seg.substring(2,4).toInt();
   pinoE = pinos7Seg.substring(4,6).toInt();
   pinoD = pinos7Seg.substring(6,8).toInt();
   pinoA = pinos7Seg.substring(8,10).toInt();
   pinoB = pinos7Seg.substring(10,12).toInt();
   pinoC = pinos7Seg.substring(12,14).toInt();
   pinoPD = pinos7Seg.substring(14,16).toInt();

   pinMode(pinoF, OUTPUT);
   pinMode(pinoG, OUTPUT);
   pinMode(pinoE, OUTPUT);
   pinMode(pinoD, OUTPUT);
   pinMode(pinoA, OUTPUT);
   pinMode(pinoB, OUTPUT);
   pinMode(pinoC, OUTPUT);
   pinMode(pinoPD, OUTPUT);
}

int define_valores_segmentos_7SEG(String valores7Seg){
   STF = valores7Seg.substring(16,17).toInt();
   STG = valores7Seg.substring(17,18).toInt();
   STE = valores7Seg.substring(18,19).toInt();
   STD = valores7Seg.substring(19,20).toInt();
   STA = valores7Seg.substring(20,21).toInt();
   STB = valores7Seg.substring(21,22).toInt();
   STC = valores7Seg.substring(22,23).toInt();
   STPD = valores7Seg.substring(23,24).toInt();
}

//BUZZER
int tocar_sirene (int pino, int valor){
   pinMode(pino, OUTPUT);
   for (int frequencia = 150; frequencia < 1800; frequencia += 1)
   {
    tone(pino, frequencia,10);
    delay(valor);
   }
   for (int frequencia = 1800; frequencia > 150; frequencia -= 1)
   {
    tone(pino, frequencia,10);
    delay(valor);
   }
  
}


//---------------------

void setup() {
  Serial.begin(9600);  
}

void loop() {
 	if (Serial.available()) {
		frase = Serial.readStringUntil('*');
		comando = frase.substring(0,2); 
		pino = frase.substring(2,4).toInt();
		valor = frase.substring(4).toInt();  


		if ( comando == "DW") {  
      pinMode(pino,OUTPUT);
		  digitalWrite(pino,valor);
		}
		else if ( comando == "DR") {
      pinMode(pino,INPUT);
		  Serial.println(digitalRead(pino));
		}
		else if ( comando == "AW") {
      pinMode(pino,OUTPUT); 
		  analogWrite(pino,valor);
		}
		else if ( comando == "AR") {
      pinMode(pino,INPUT);
		  Serial.println(analogRead(pino));
		}
    else if ( comando == "PR") {
      pinMode(pino,INPUT);
      Serial.println(digitalRead(pino));
    }
   
		else if ( comando == "BN") {
      pinMode(pino,OUTPUT);
		  tone(pino,valor);  
		}
		else if ( comando == "BM") {
      pinMode(pino,OUTPUT);
		  noTone(pino);
		}
    else if ( comando == "BS") {
      tocar_sirene(pino,valor);
    }
     else if ( comando == "TP") {
       Thermistor temp(pino);
       int tempInt = (int)temp.getTemp();
       Serial.println(tempInt);
		}
		else if ( comando == "DT") {
      pinMode(pino,OUTPUT);
      pinMode(valor,INPUT);
      Ultrasonic ultrasonic(pino,valor);
		  int distancia = 0;
		  for (int i = 0; i<10;++i){
			distancia = (ultrasonic.Ranging(CM)) + distancia;
		  }
		  distancia = distancia/10;
		  Serial.println(distancia);   
		}     
		else if ( comando == "SV") {   
      meu_Servo.attach(pino);
      meu_Servo.write(valor);
    }    
    else if ( comando == "DS") {   
      meu_Servo.detach();
    }    
    else if ( comando == "7S") {
      String pinos_valores_7Seg = frase.substring(4);
      if (inicializa_pinos_7SEG){
          define_pinos_7SEG(pinos_valores_7Seg);
          inicializa_pinos_7SEG = false;
      }
      define_valores_segmentos_7SEG(pinos_valores_7Seg);      
      digitalWrite(pinoF,STF);
      digitalWrite(pinoG,STG);
      digitalWrite(pinoE,STE);
      digitalWrite(pinoD,STD);
      digitalWrite(pinoA,STA);
      digitalWrite(pinoB,STB);
      digitalWrite(pinoC,STC);
      digitalWrite(pinoPD,STPD);   
    }
    else if ( comando == "LR") {  
      String texto = frase.substring(18);
      if (inicializa_pinos_lcd){
          seta_pinos_lcd();
          inicializa_pinos_lcd = false;
      }    
      LiquidCrystal lcd(lcd_pino_rs,lcd_pino_rw,lcd_pino_enable,lcd_pino_dados_4,lcd_pino_dados_5,lcd_pino_dados_6,lcd_pino_dados_7);
      if (begin_lcd){
          inicializa_lcd(lcd);  
          begin_lcd = false;
      }  
      lcd.setCursor(0,pino);
      lcd.print(texto);
    }
    else if ( comando == "LC") {  
      if (inicializa_pinos_lcd){
          seta_pinos_lcd();
          inicializa_pinos_lcd = false;   
      }   
      LiquidCrystal lcd(lcd_pino_rs,lcd_pino_rw,lcd_pino_enable,lcd_pino_dados_4,lcd_pino_dados_5,lcd_pino_dados_6,lcd_pino_dados_7);
      lcd.clear();
    }  
	}  
}
