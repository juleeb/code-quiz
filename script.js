//create variables from HTML
var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var question = document.querySelector("#question");
var answerBtn = document.querySelector("#answer");
var counter = document.querySelector("#counter");
var bt1 = document.querySelector("bt1");
var bt2 = document.querySelector("bt2");
var bt3 = document.querySelector("bt3");
var bt4 = document.querySelector("bt4");

//create variable
var questionsecond = 15;
var score = 0;
var questionIndex = 0;

//create addEventListener to start button
startBtn.addEventListener("click", startquiz)

//create function to hide start button and show question, answer button, and start time
function startquiz() {
  console.log('start');
  startBtn.classList.add("hide");
  question.classList.remove("hide");
  answerBtn.classList.remove("hide");
  timeEl.classList.remove("hide");
  counter.classList.remove("hide");

//create timer with function to start after start button is clicked inside startquiz function
var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "You Have " + secondsLeft + " Seconds Left";

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        makeQuestions();
      }
      
      }, 1000);
  }

setTime();

generateQuestions();
}

//create object for questions
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses'
  },
  {
      title: 'Array in JavaScript can be used to store ____.',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: 'all of the above'
  },
  {
      title: 'String values must be enclosed within ____ when being assigned to variable.',
      choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
      answer: 'parenthesis'
  },
  {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
      answer: 'console.log'
  }
];

//create function overall to generate quiz
function generateQuestions() {
  
  questions.forEach((question) => {
    // assign each item in question.choices to the .textContent and value attribute of each button
    question.textContent = questions.title;
    bt1.textContent = questions.title[choices[0]];
    })
    }

//create function for question to show random/shuffled


//create function for correct answer and -15 for wrong answer


//create fucntion for score counter


//create function for after time is over to show alert time is over
  
