const word = document.getElementById("word");
const wrongLetters = document.getElementById("wrong-letters");
const finalMsg = document.getElementById("finalMsg");
const playAgainBtn = document.getElementById("play-button");
const indication = document.getElementById("indication");
const popup = document.getElementById("popupcontainer");
const figureparts = document.querySelectorAll(".figure-part");
const wordList = [
    'travel',
    'dance',
    'sucess',
    'hope',
    'dreamy',
    'blackiee',
    'smilly',
];

let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
const correctLetters = ["a"];
const wrongLetters = [];

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
    wrongLetters.innerHTML = `
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
    const errors = wrongLetters.length;
    if(index < errors) {
        part.style.dislpay = "block";
    }else {
        part.style.display = "none";
    }
});

// check if lost
if(wrongLetters.length === figureparts.length){
    finalMsg.innerText = "unfortunately you lost :(";
    popup.style.display = "flex";
}

// show notification
function showIndication() {
    indication.classList.add("show");
    setTimeout(() => {
        indication.classList.remove("show");
        
    }, 2000);

}



window.addEventListener("keydown", (e) => {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
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

displayWord();




