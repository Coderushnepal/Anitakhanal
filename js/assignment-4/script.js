var word = document.getElementById("word");
var wrongLettersContainer = document.getElementById("wrong-letters");
var finalMsg = document.getElementById("finalMsg");
var playAgainBtn = document.getElementById("play-button");
var indication = document.getElementById("indication");
var popup = document.getElementById("popupcontainer");
var figureparts = document.querySelectorAll(".figure-part");
var wordList = [
    'travel',
    'dance',
    'success',
    'hope',
    'dreamy',
    'blackiee',
    'smilly',
];

let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
var correctLetters = [];
var wrongLetters = [];

// display word function

function displayWord(){
    word.innerHTML = `
${selectedWord
    .split("")
    .map((letter) =>
 `<span class="letter"> 
 ${correctLetters.includes(letter) ? letter : ""}
</span>`
) 
.join("")}
`;
    const innerWord = word.innerText.replace(/\n/g,"");
    if(innerWord === selectedWord){
        finalMsg.innerText = "congratulation you won";
        popup.style.display = "flex";
    }
}

// wrong letter function
function updateWrongLetter(){
    wrongLettersContainer.innerHTML = `
    ${
        wrongLetters.length > 0 ? "<p> wrong </p>" : ""
    }
    ${wrongLetters.map(
        (letter) => `<span> ${letter} </span>`
    )}

    `;
}

// display body figureparts
figureparts.forEach((part, index) => {
    var errors = wrongLetters.length;
    if(index < errors) {
        part.style.dislpay = "block";
    }else {
        part.style.display = "none";
    }
});

// check if lost
if(wrongLetters.length === figureparts.length){
    finalMsg.innerHTML = "unfortunately you lost :(";
    popup.style.display = "block";
}

// show notification
function showIndication() {
    indication.innerHTML = "you have already entered this letter";
    indication.style.display = "block";
    setTimeout(() => {
        indication.style.display = "none";
        
    }, 2000);

}



window.addEventListener("keydown", (e) => {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        var letter = e.key;
        console.log(letter);
    }
    if(selectedWord.includes(letter)){
       if(!correctLetters.includes(letter)){
           correctLetters.push(letter);
           displayWord();
       }else {
           showIndication();
       } 
    }else{
        if(!wrongLetters.includes(letter)){
            wrongLetters.push(letter);
            updateWrongLetter();
        } else {
            showIndication();
        }
    }
});

playAgainBtn.addEventListener("click", function(){
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    displayWord();
    updateWrongLetter();
    popup.style.display = "none";
})

displayWord();




