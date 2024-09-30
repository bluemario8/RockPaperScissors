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
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
    }
}

function rock()
{
    let cpuChoice = getCpuChoice();

    yourChoiceElem.innerText = "Rock";
    cpuChoiceElem.innerText = cpuChoice;

    if (cpuChoice === "Rock")
    {
        resultElem.innerText = "Tie";
        tieScore++;
        tieScoreElem.innerText = tieScore;
    }
    else if (cpuChoice === "Paper")
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
    let cpuChoice = getCpuChoice();

    yourChoiceElem.innerText = "Paper";
    cpuChoiceElem.innerText = cpuChoice;

    if (cpuChoice === "Paper")
    {
        resultElem.innerText = "Tie";
        tieScore++;
        tieScoreElem.innerText = tieScore;
    }
    else if (cpuChoice === "Scissors")
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

function scissors()
{
    let cpuChoice = getCpuChoice();

    yourChoiceElem.innerText = "Scissors";
    cpuChoiceElem.innerText = cpuChoice;

    if (cpuChoice === "Scissors")
    {
        resultElem.innerText = "Tie";
        tieScore++;
        tieScoreElem.innerText = tieScore;
    }
    else if (cpuChoice === "Rock")
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