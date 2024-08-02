let compChoiceNum;
let promptChoice;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const btns = document.querySelectorAll(".btns");
const restartbtn = document.querySelector("#restartbtn");

const playerWpn = document.querySelector("#playerWpn");
const compWpn = document.querySelector("#compWpn");
const txtChoice = document.querySelector("#txtChoice");
const compTxtChoice = document.querySelector("#compTxtChoice");
const playScores = document.querySelector("#playScores");
const compScores = document.querySelector("#compScores");
const txtBox = document.querySelector("#txtBox");

const restartGame = () => {
    playerWpn.src = "./icons/rock.png";
    compWpn.src = "./icons/erock.png";
    humanScore = 0;
    compScore = 0
    playScores.textContent = humanScore;
    compScores.textContent = compScore;
    txtBox.textContent = "Choose a weapon!"
    btns.forEach(btn => {
        btn.disabled = false;
    })

}


rockBtn.addEventListener("click", () => {
    getHumanChoice("Rock");
    playerWpn.src = "./icons/rock.png";
    txtChoice.textContent = "Rock";
});

paperBtn.addEventListener("click", () => {
    getHumanChoice("Paper");
    playerWpn.src = "./icons/paper.png";
    txtChoice.textContent = "Paper";
});

scissorBtn.addEventListener("click", () => {
    getHumanChoice("Scissors");
    playerWpn.src = "./icons/scissor.png";
    txtChoice.textContent = "Scissors";
});

function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);
    compChoiceNum = compNum + 1;
    let compChoice;

    if (compChoiceNum === 1) {
        console.log("Rock");
        compChoice = "Rock";
        compWpn.src = "./icons/erock.png";
        compTxtChoice.textContent = "Rock";
    } else if (compChoiceNum === 2) {
        console.log("Paper");
        compChoice = "Paper";
        compWpn.src = "./icons/epaper.png";
        compTxtChoice.textContent = "Paper";
    } else {
        console.log("Scissors");
        compChoice = "Scissors";
        compWpn.src = "./icons/escissor.png";
        compTxtChoice.textContent = "Scissors";
    }
    return compChoice;
}

const getHumanChoice = (choice) => {
    playRound(choice, getComputerChoice());
}


// function getHumanChoice() {
//     promptChoice = prompt("Choose Rock, Paper, or Scissors");


//     if (promptChoice.toLowerCase() === "rock") {
//         console.log("rock");
//         return "rock";
//     } else if (promptChoice.toLowerCase() === "paper") {
//         console.log("paper");
//         return "paper";
//     } else if (promptChoice.toLowerCase() === "scissors") {
//         console.log("scissors");
//         return "scissors";
//     } else if (promptChoice.toLowerCase() === "score") {
//         prompt(`Human: ${humanScore} Computer: ${compScore}`)
//         return null;
//     } else {
//         console.log("Invalid Input");
//         return null;
//     }
// }

let humanScore = 0;
let compScore = 0;

function playRound(humanChoice, compChoice) {

    if (humanChoice === "Rock" && compChoice === "Scissors") {
        humanScore++;
        playScores.textContent = humanScore;
        txtBox.textContent = "You win! Rock beats Scissors";

    } else if (humanChoice === "Paper" && compChoice === "Rock") {
        humanScore++;
        playScores.textContent = humanScore;
        txtBox.textContent = "You win! Paper beats Rock";
    } else if (humanChoice === "Scissors" && compChoice === "Paper") {
        humanScore++;
        playScores.textContent = humanScore;
        txtBox.textContent = "You win! Scissors beats Paper";
    } else if (humanChoice === compChoice) {
        txtBox.textContent = "Draw";
    } else {
        compScore++
        compScores.textContent = compScore;
        txtBox.textContent = `You lose! ${compChoice} beats ${humanChoice}`;

    }

    if (humanScore >= 5 || compScore >= 5) {

        if (humanScore > compScore) {
            txtBox.textContent = "Good job you won!";
        } else {
            txtBox.textContent = "Computer wins";
        }

        btns.forEach(btn => {
            btn.disabled = true;
        })
        restartbtn.style.display = "inline";
        restartbtn.addEventListener("click", () => {
            restartGame();
            restartbtn.style.display = "none";
        });
    }


}




// while (humanScore < 5 && compScore < 5) {
//     const humanSelection = getHumanChoice();
//     if (humanSelection) {
//         const compSelection = getComputerChoice();
//         playRound(humanSelection, compSelection)
//     }
// }


// const humanSelection = getHumanChoice();
// const compSelection = getComputerChoice();

// playRound(humanSelection, compSelection);
// playRound(humanSelection, compSelection);
// playRound(humanSelection, compSelection);
// playRound(humanSelection, compSelection);
// playRound(humanSelection, compSelection);

