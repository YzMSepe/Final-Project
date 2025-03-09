const quizContent = [
    { question: "What is Sustainable Development Goal (SDG) 13 focused on?", 
        options: ["Gender Equality", "Life on Land", "Partnership Goals", "Climate Action"], answer: 3 },
    { question: "What is the primary objective of SDG 13?",
      options: ["To stop pollution", "To take urgent action to combat climate change", "To clean the ocean", "To build more factories"], answer: 1 },
    { question: "Which factor significantly contributes to climate change?", 
      options: ["Political Dynasties", "World War 2", "Greenhouse Gases", "People"], answer: 2 },
    { question: "What is a possible consequence of climate change?", 
      options: ["Decrease in greenhouse gases", "Stable weather patterns", "Disruptions in the ecosystem", "Teenage pregnancy"], answer: 2 },
    { question: "What can individuals do to combat climate change?", 
        options: ["Join climate action awareness groups", "Do nothing", "Pollute the planet more", "Drink water"],  answer: 0 }
];

let questionIndex = 0;
let totalScore = 0;
let hasAnswered = false;

function displayQuiz() 
{
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("prevBtn").disabled = questionIndex === 0;

    const currentQ = quizContent[questionIndex];
    document.getElementById("quizQuestion").textContent = currentQ.question;

    const choicesContainer = document.getElementById("answerChoices");
    choicesContainer.innerHTML = "";
    hasAnswered = false;

    for (let i = 0; i < currentQ.options.length; i++) 
    {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = currentQ.options[i];
        choiceButton.classList.add("choiceBtn");
        choiceButton.onclick = function () 
        {
            if (!hasAnswered) 
            {
                verifyAnswer(i, choiceButton);
            }
        };
        choicesContainer.appendChild(choiceButton);
    }
}

function verifyAnswer(selectedIdx, buttonElement) 
{
    if (hasAnswered) return;

    let correctAnswerIndex = quizContent[questionIndex].answer;
    switch (selectedIdx) 
    {
        case correctAnswerIndex:
            buttonElement.classList.add("correct");
            totalScore++;
            break;
        default:
            buttonElement.classList.add("incorrect");
            document.querySelectorAll(".choiceBtn")[correctAnswerIndex].classList.add("correct");
            break;
    }

    hasAnswered = true;
    document.getElementById("nextBtn").disabled = false;
}

function nextQue() 
{
    if (questionIndex < quizContent.length - 1) 
    {
        questionIndex++;
        displayQuiz();
    } 
    else
    {
        results();
    }
}

function prevQue() 
{
    if (questionIndex > 0) 
    {
        questionIndex--;
        displayQuiz();
    }
}

function results() 
{
    document.getElementById("score").textContent = `YOUR SCORE: ${totalScore}/${quizContent.length}`;

    let resultMessage = "";

    if (totalScore < 3) {
        resultMessage = "Keep learning! Learning about climate and taking action soon will be of great help!";
    } else {
        resultMessage = "Great job! You're about to change the planet!";
    }

    document.getElementById("resultMessage").textContent = resultMessage;
    document.getElementById("quizQuestion").textContent = "Quiz Completed! Remember: Climate action begins with YOU!";
    document.getElementById("answerChoices").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
}

displayQuiz();  