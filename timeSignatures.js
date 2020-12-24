const timeSignatureWeighted = [
    ["4/4 - Common Time", 40],
    ["3/4 - Waltz Time", 20],
    ["1/2 - March Time", 10],
    ["6/8 - Eighth Note Waltz", 20]
]



var minTempo = 65;
var maxTempo = 200;

function getRandomTempo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function selectRandomTimeSignature(){
    let timeSignatures = [];

    // Loop through the master entries.
    for (let i = 0; i < timeSignatureWeighted.length; ++i) {
    // Push the value over and over again according to its
    // weight.
    for (let j = 0; j < timeSignatureWeighted[i][1]; ++j) {
        timeSignatures.push(timeSignatureWeighted[i][0]);
    }
    }


    let randomTimeSignature = timeSignatures[Math.floor(Math.random() * timeSignatures.length)];
    let randomTempo = getRandomTempo(minTempo, maxTempo);
    let textBox = document.getElementById('time-signature');
    textBox.innerHTML = randomTimeSignature + " @ " + randomTempo + "bpm";
}