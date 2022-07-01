// initialize initial variables from index file
var timerEl = document.querySelector("#timeLeft");
var questionsEl = document.querySelector("#questionBox");
var choicesEl = document.querySelector("#choices");
var submitBtnEl = document.querySelector("#submitBtn");
var startBtnEl = document.querySelector("#startBtn");
var initialsEl = document.querySelector("#initials");
var welcomeEl = document.getElementById("welcome");

var currentQ = 0;
var time = 180;
var timerId;

function startQuiz() {
    // first hide the welcome box
    welcomeEl.setAttribute("class", "contentHide");

    // next unhide the questions box
    questionsEl.setAttribute("class", "content");

    // set the timer using the timeCountDown function with interval 1000ms aka 1 sec
    timerId = setInterval(timeCountDown, 1000);

    // set the text of the timer to the time that will now be counting down
    timerEl.textContent = time;
    getQuestion();
}

function timeCountDown() {
    // de-increment (decrement?) timer
    time--;
    timerEl.textContent = time;

    // if the timer reaches zero
    if (time <= 0) {
        quizOver();
    }
}

getQuestion() {

}

quizOver() {
    
}

// list of questions pulled from google
var questions = [
    {
        question: "Which of the following are JavaScript data types?",
        choices: ["String", "Number", "Boolean", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "The (===) operator is used to compare what?",
        choices: ["Length", "Value", "Value and Type", "File Size"],
        answer: "Value and type"
    },
    {
        question: "Where should you find the link to the custom (script.js) file in an html file?",
        choices: ["Header", "Wherever it is called", "In the file name", "Right before the end of the body"],
        answer: "alerts"
    },
    {
        question: "Within a function declaration, what is the term for the information inside the parentheses ()?",
        choices: ["Parameters", "Attributes", "Identity", "Variables"],
        answer: "Parameters"
    },
    {
        question: "Functions that are called to/used within another function are called what?",
        choices: ["Repetitive functions", "Callback functions", "Cursive functions", "Null functions"],
        answer: "Callback functions"
    }
];

// when start putton is pressed
startBtnEl.onclick = startQuiz;