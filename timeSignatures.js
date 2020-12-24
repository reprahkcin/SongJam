const timeSignatures = [
    "4/4 - Common Time",
    "3/4 - Waltz Time",
    "1/2 - March Time",
    "6/8 - Eighth Note Waltz"
]

var minTempo = 65;
var maxTempo = 200;

function getRandomTempo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function selectRandomTimeSignature(){
    let randomTimeSignature = timeSignatures[Math.floor(Math.random() * timeSignatures.length)];
    let randomTempo = getRandomTempo(minTempo, maxTempo);
    let textBox = document.getElementById('time-signature');
    textBox.innerHTML = randomTimeSignature + " @ " + randomTempo + "bpm";
}