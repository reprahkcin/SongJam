const subjects = [
    "Love",
    "Hate",
    "Sex",
    "Drugs",
    "Money",
    "Death",
    "Birth",
    "Fear",
    "Envy",
    "Violence",
    "Deviation from the Norm",
    "Prosperity",
    "Despair",
    "Fable - Fictional story with a lesson",
    "Third-person narrative",
    "Something that annoys you",
    "Something that brings you joy",
    "Something that brings you pain",
    "A Time When You Were Wrong",
    "Party Song",
    "Nonsense",
    "Tribute or Gratitude",
    "Fantastical Adventure",
    "Getting into trouble",
    "The Best Part of the Human Experience",
    "The Worst Part of the Human Experience",
    "Identify a Problem and Propose a Solution",
    "Historical Figure or Event",
    "Philosophy",
    "Mental Illness",
    "Common Ground",
    "A Line in the Sand",
    "Giving Up",
    "Moving On",
    "Standing your ground",
    "Extended Metaphor",
    "Something you learned",
    "Something you accomplished",
    "Friends and Family",
    "Uncomfortable Conversation",
    "Injustice",
    "Awkward Phychadelic Experience",
    "Betrayal",
    "Experience that left you Feeling Hopeful",
    "Holiday",
    "Insecurity",
    "Nature",
    "Accomplishment",
    "The Origins of the Universe",
    "Crush",
    "Obsession",
    "Highly Intellectual",
    "Political Cause That's Important to You",
    "Headline of the Day"
    

]

function selectRandomSubject(){
    let alreadyPicked = [];
    let randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    //look in already picked array, if subject exists, pick again
    //if id doesn't, do the following:
    let textBox = document.getElementById('subject');
    alreadyPicked.push(randomSubject)
    textBox.innerHTML = randomSubject;
}
