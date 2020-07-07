var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
var timeEl = document.querySelector("#time");
var scoreEl = document.querySelector("#score");
var highscoreDiv = document.getElementById("highscore")
var score = 0;
var time = 75;
var timerInterval;
var clickedanswerbutton = "";
var finalscoreEl = document.querySelector("#end-quiz");
var highscores = localStorage.getItem("highscores") ? JSON.parse(localStorage.getItem("highscores")) : []
var showscores = document.getElementById("showHS");
var restartBtn = document.getElementById("restart-btn");
var startpage = document.querySelector(".start-quiz");
var restartButton = document.getElementById("restart")
var resetEl = document.querySelector("#reset");

var questions = [
    {
      question: 'Commonly used data types DO NOT include:',
      answers: ['strings', 'booleans', 'alerts', 'numbers'],
      correct: 'strings'
    },
    {
      question: 'The condition in an if / else statement is enclosed within ____.',
      answers: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      correct: 'parentheses'
    },
    {
        question: 'Array in JavaScript can be used to store ____.',
        answers: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correct: 'all of the above'
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variable.',
        answers: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        correct: 'parenthesis'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correct: 'console.log'
    }
  ];

var questionNum = questions.length;

resetEl.classList.add("hide");
startButton.addEventListener("click", startGame)

function startGame() {
    console.log("start");
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");

    var questioncount = 0;
    generatequestion(questioncount);

    timer();
};

function generatequestion(i) {
    clikcedanswerbutton = "false";
    questionContainer.setAttribute("index", i);
    var currentquestion = questions[i];
    questionEl.innerText = currentquestion.question;
    

    while (answerButtonEl.hasChildNodes()) {
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }

    for (var j = 0; j < questions[i].answers.length; j++) {
        var answerlistbt = document.createElement("button");
        var answer = currentquestion.answers[j];
        answerlistbt.innerText = answer;
        answerlistbt.setAttribute("id", "bts" + j);
        answerButtonEl.appendChild(answerlistbt);
    }
};

answerButtonEl.addEventListener("click", function(event) {
    var currentIndex = questionContainer.getAttribute("index");
    var selected = event.target.innerText;
    var correctselected = questions[currentIndex].correct;
    clikcedanswerbutton = "true";

    if(selected == correctselected) {
        score += 10;
        document.getElementById("score").textContent = score;
        currentIndex++;

        if (currentIndex < questionNum) {
            setTimeout(function() {
                generatequestion(currentIndex);
            });
        }
        else {
            setTimeout(function() {
                endQuiz();
            });
        }
    } 
    else {
        time -= 15;
        currentIndex++;
        if (currentIndex < questionNum) {
            setTimeout(function() {
                generatequestion(currentIndex);
            });
        }
        else {
            setTimeout(function() {
                endQuiz();
            });
        }
    }
});

function timer() {
    timerInterval = setInterval(function() {
        time--;
        if (time <= 0) {
            time = 0;
            timeEl.textContent = "Time Left: " + time;
            endQuiz();
        }
        timeEl.textContent = "Time Left: " + time;
        var currentIndex = questionContainer.getAttribute("index");
        if (currentIndex === questionNum - 1 && clickedanswerbutton === "true") {
            clearInterval(timerInterval);
        };
        
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval)
    questionContainer.classList.add("hide");
    resetEl.classList.remove("hide");
    restartButton.addEventListener("click", function(e) {
    location.reload();
    }, false);
    setFinalScore();
  };

function setFinalScore() {
    questionContainer.classList.add("hide");
    finalscoreEl.classList.remove("hide");
    finalscoreEl.textContent = "Final Score : " + score;
    var inputEl = document.createElement("input");
    inputEl.setAttribute("id", "initial");
    inputEl.setAttribute("placeholder", "Enter Your Initials Here")
    console.log(inputEl);
    finalscoreEl.appendChild(inputEl);
    var submit = document.createElement("button");
    submit.setAttribute("id", "submitbt");
    submit.textContent = "Submit";
    finalscoreEl.appendChild(submit);
    submit.addEventListener("click", function() {
        highscores.push(inputEl.value + " - " + score);
        localStorage.setItem("highscores", JSON.stringify(highscores));
    });
};

highscores.forEach(a=>{
    var hs = document.createElement("li");
    hs.textContent = a
    highscoreDiv.appendChild(hs)
});

showscores.addEventListener("mouseenter", function(){
    highscoreDiv.classList.remove("hide");
});

showscores.addEventListener("mouseleave", function(){
    highscoreDiv.classList.add('hide');
});

