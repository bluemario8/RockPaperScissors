let userScore = 0;
let cpuScore = 0;
let tieScore = 0;

let userScoreElem = document.getElementById("userscore");
let cpuScoreElem = document.getElementById("cpuscore");
let tieScoreElem = document.getElementById("tiescore");
let yourChoiceElem = document.getElementById("yourchoice");
let cpuChoiceElem = document.getElementById("cpuchoice");
let resultElem = document.getElementById("result");


function getCpuChoice()
{
    let rng = Math.floor(Math.random() * 3);

    switch (rng)
    {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
    }
}

function rock()
{
    let cpuChoice = getCpuChoice();

    yourChoiceElem.innerText = "Rock";
    cpuChoiceElem.innerText = cpuChoice;

    if (cpuChoice === "rock")
    {
        resultElem.innerText = "Tie";
        tieScore++;
        tieScoreElem.innerText = tieScore;
    }
    else if (cpuChoice === "paper")
    {
        resultElem.innerText = "Computer Won";
        cpuScore++;
        cpuScoreElem.innerText = cpuScore;
    }
    else
    {
        resultElem.innerText = "You won";
        userScore++;
        userScoreElem.innerText = userScore;
    }
}
function paper()
{
    console.log("paper");
}
function scissors()
{
    console.log("scissors");
}