const possibleGenres = [
    "Rock",
    "Hip Hop",
    "Blues",
    "Electronic",
    "Country Western",
    "Folk",
    "Heavy Metal",
    "Punk",
    "Pop",
    "Jazz/Experimental"
]

function selectRandomGenre(){
    let randomGenre = possibleGenres[Math.floor(Math.random() * possibleGenres.length)];
    let textBox = document.getElementById('genre');
    textBox.innerHTML = randomGenre;
}