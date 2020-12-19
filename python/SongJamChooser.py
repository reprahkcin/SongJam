import random

tempo = random.randrange(200, 80, -2)
possibleKeys = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#"
]
possibleSignatures = [
    "3/4",
    "4/4",
    "6/8"
]

possibleInstruments = [
    "Horns",
    "Orchestral Strings",
    "Synth",
    "Realistic Piano or Organ"
]

possibleGenres = [
    "Rock",
    "Country",
    "Hip-Hop",
    "Electronic",
    "R&B",
    "Jazz",
    "Pop",
    "Soul",
    "Blues"

]

possiblePlugins = [
    "EQ",
    "Compressor or Limiter",
    "Gates",
    "Reverb",
    "Delay",
    "Chorus",
    "Phase or Flange",
    "Pitch Correction",
    "Automation"
]

possibleSubjects = [
    "Love",
    "Hate",
    "Current Event",
    "Fictional Story",
    "True Story",
    "Other Perspective",
    "Funny"
]

print("Random Tempo is: " + str(tempo) + "bpm")

pickedKey = random.choice(possibleKeys)
print("Random Key is: " + pickedKey)

pickedSignature = random.choice(possibleSignatures)
print("Random Time Signature is: " + pickedSignature)

pickedInstrument = random.choice(possibleInstruments)
print("Random Instrument is: " + pickedInstrument)

pickedGenre = random.choice(possibleGenres)
print("Random Genre is: " + pickedGenre)

pickedPlugin = random.choice(possiblePlugins)
print("Bonus points for creative use of: " + pickedPlugin)

pickedSubject = random.choice(possibleSubjects)
print("Random Subject is: " + pickedSubject)
