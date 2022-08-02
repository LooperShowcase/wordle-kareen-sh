const NUMBER_OF_WORDS = 6;
const NUMBER_OF_CHARS = 5;


let words = document.getElementById("container");

for (let i = 0; i < NUMBER_OF_WORDS; i++) {

    let singleWord = document.createElement("div");
    singleWord.className = "word";

    for (let j = 0; j < NUMBER_OF_CHARS; j++) {

        let singleChar = document.createElement("div");
        singleChar.className = "char"
        singleWord.appendChild(singleChar);

    }
    words.appendChild(singleWord);
}

let currentWord = 0;
let currentChar = 0;
//let score = 0;
document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        if (currentChar > 0) {
            let wordDiv = words.children[currentWord];
            let charToDelete = wordDiv.children[currentChar - 1];
            charToDelete.innerHTML = "";
            currentChar--;
            //animateCSS(wordDiv, "headShake")
        }

    }
    else if (event.key === "Enter") {
        ;

        if (currentChar == 5) {
            let wordDiv = words.children[currentWord];
            animateCSS(wordDiv, "headShake");
            currentWord++;
            currentChar = 0;
            //score++;
        }

    }
    else if (currentChar < 5 && isLetter(event.key)) {
        let wordDiv = words.children[currentWord];
        let charDiv = wordDiv.children[currentChar];
        charDiv.innerHTML = event.key;
        currentChar++;
        animateCSS(charDiv, "pulse")

    }
});

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        //const node = document.querySelector(element);

        element.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            element.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        element.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

//console.log(h2 + score);
