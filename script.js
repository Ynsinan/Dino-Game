let container = document.querySelector('#container');
let dino = document.querySelector('#dino');
let block = document.querySelector('#block');
let road = document.querySelector('#road');
let cloud = document.querySelector('#cloud');
let score = document.querySelector('#score');
let gameOver = document.querySelector('#gameOver');


let interval = null;
let playerScore = 0;


// let scoreCount = () => {
//     playerScore++;
//     score.innerHTML = `Score ${playerScore}`;

// }
function scoreCount() {
    playerScore++;
    score.innerHTML = `Score ${playerScore}`;
}

//2 mili saniyede bir skor arttırıcak
// 

window.addEventListener('keydown', (start) => {
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimete 1s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimete 50s linear infinite";

        let playerScore = 0;
        interval = setInterval(scoreCount, 200);

    }
});


//Dino zıplama 

window.addEventListener("keydown", (item) => {
    console.log(item);
    if (item.key == "ArrowUp") {
        if (dino.classList != "dinoAcive") {
            dino.classList.add("dinoActive");
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500)
        }
    }
});

//Game over 


let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    // console.log("dinoBottom" + dinoBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    // console.log("BlockLeft " + blockLeft);
    if (dinoBottom <= 30 && blockLeft >= 20 && blockLeft <= 145) {
        console.log("Game Over");

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;

    }
}, 10)

