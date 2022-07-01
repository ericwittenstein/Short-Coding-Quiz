// initialize initial variables from index file
var timerEl = document.querySelector("#timeLeft");
var questionsEl = document.querySelector("#questionBox");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submitBtn");
var startBtn = document.querySelector("#startBtn");
var initialsEl = document.querySelector("#initials");

var currentQ = 0;
var time = 180;
var timerId;

function startQuiz() {
    // hide start screen
    var welcomeEl = document.getElementById("welcome");
    welcomeEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
  
    getQuestion();
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