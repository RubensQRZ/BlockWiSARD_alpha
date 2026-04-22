import pyttsx3
import winsound
import os

engine = pyttsx3.init()

voices = engine.getProperty("voices")

sexoFala = 0

velocidadeFala = 170

def soundToPlay(sound):
   currentpath = os.path.dirname(os.path.abspath(__file__))
   parentpath = os.path.dirname(currentpath)
   soundPath = os.path.join (parentpath,'BlockWiSARD','sound', sound)
   return soundPath


sexoFala = 0
velocidadeFala = 170
engine.setProperty("voice", voices[sexoFala].id)
engine.setProperty("rate",velocidadeFala)
engine.say("'abc'")
engine.runAndWait()
winsound.PlaySound(None,winsound.SND_PURGE)
winsound.PlaySound(soundToPlay('cat.wav'),winsound.SND_NOSTOP)
