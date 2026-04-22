from gpiozero import LED

pinoLedVermelho=5

ledVermelho= LED(pinoLedVermelho)


while True:
  if KeyboardInterrupt:
      print("oi")
      break
  else:
    ledVermelho.on()
