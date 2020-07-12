'use strict';

function main() {
  handleStartButtonSubmit();
  registerAnswerSubmission();
  moveToNextQuestion();
  restartQuiz();
  render();
}

// Data
const store = {
  quizTemplate: [
    {
      question: "What stage in life does one have the strongest ability to taste sweet foods?",
      answers: ['Infancy', 'Puberty', 'Adulthood'],
      correctAnswer: 0,
      image: [`images/cake.png`, `A watercolor drawing of a piece of cake`]
    },
    {
      question: "Sour taste acts as a protective/warning system...",
      answers: ['To allow us to detect proton level of acids', 'To makes us scrunch up our face', 'To help us create saliva in our mouth'],
      correctAnswer: 0,
      image: [`images/grapefruit.png`, `A water color drawing of a sliced grapefruit`]
    },
    {
      question: "The ___ of our tongue is sensitive to bitter tastes so we can spit out poisonous or spoiled foods before we swallow them.",
      answers: ['Underside', 'Front', 'Back'],
      correctAnswer: 2,
      image: [`images/wine.png`, `A watercolor drawing of a wine bottle, a wine glass, an a bunch of grapes`]
    },
    {
      question: "What is the Japanese coined term for the 5th basic taste meaning ‘savory’?",
      answers: ['Unagi', 'Umami', 'Sarriette'],
      correctAnswer: 1,
      image: [`images/sushi.png`, `A watercolor drawing of a piece of shrimp sushi`]
    },
    {
      question: "Which substance do we need in order to function correctly?",
      answers: ['Sugar', 'Salt', 'Thyme'],
      correctAnswer: 1,
      image: [`images/popcorn.png`, `A watercolor drawing of a box of popcorn`]
    }
  ],
  quizStarted: false,
  submitedAnswer: '',
  userAnsweredRight: false,
  questionNumber: 0,
  score: 0

};



// These functions return HTML templates

function generateStartPage() {

  return `<h1> The Five Basic Tastes</h2>
  <main class="flexgroup">
    <p id="generateStartMessage">Quiz yourself on how well you know your five basic tastes!</p>
    <figure>
    <img class="startImage" src="images/flavor-wheel.jpg" alt="Wheel of taste buds">
    </figure>
    <button id="startButton" class="animateButton" ><span>Start Quiz! <span></button>
  </main>`;

}

//This function returns the questions view
function generateQuestions() {
  let currentQuestion = getCurrentQuestionOptions();
  return (
    `
      <main class="marginTop" >
        <figure class="centerImage">
          <img src="${generateImageSrc()}" alt="${generateImageAlt()}">
        </figure>
        <form>
          <h2>${getCurrentQuestionOptions()}</h2>
          <section>
          ${generateAnswers()}
          </section>
          <br>
          <div><button class="button">Submit Answer</button></div>
        </form>

      </main>

    <footer>
      <p>Correct = ${store.score} Incorrect = ${store.questionNumber-store.score-1}</p>
      <p>Question ${getQuestionNumber()} of 5</p>
    </footer>`
  );
}

function generateImageSrc(){
  let imageSrc = ""; 
  let imageTemplate = store.quizTemplate;
  for (let i = 0; i <imageTemplate.length; i++){
    if ((store.questionNumber - 1) === i){
      imageSrc = imageTemplate[i].image[0];
    }
  }
  return imageSrc;
}

function generateImageAlt(){
  let imageAlt = "";
  let imageTemplate = store.quizTemplate;
  for (let i = 0; i <imageTemplate.length; i++){
    if ((store.questionNumber - 1) === i){
      imageAlt = imageTemplate[i].image[1];
    }
  }
  return imageAlt;
}

function getCurrentQuestionOptions(){
  let questionTemplate = store.quizTemplate;
  for (let i = 0; i < questionTemplate.length; i++){
    if ((store.questionNumber - 1) === i){
      return questionTemplate[i].question;
    }
  }
}

function generateAnswers() {
  let answersArray = getCurrentAnswerOptions();
  return (answersArray.reduce((html, answer, i) =>
    html + `<label> <input name="option" type="radio" value="${i}" required="required">${answer} </label><br>`
    , ''));
}

function getCurrentAnswerOptions(){
  let answerTemplate = store.quizTemplate;
  for (let i = 0; i < answerTemplate.length; i++){
    if ((store.questionNumber -1) === i){
      return answerTemplate[i].answers;
    }
  }
}

//This function returns answers view
function generateReviewAnswers() {
  if(store.userAnsweredRight === true) {
    return generateCorrectAnswerPage();
  } 
  return generateIncorrectAnswerPage();
}

function generateCorrectAnswerPage()  {
  return `
    <main class="marginTop" >
    <section>
      <h2>${getCurrentQuestionOptions()}</h2>
      <p class="fontHandlee">Congrats, you did kermit proud! </p>
      <p class="correctAnswer">Correct Answer: ${store.quizTemplate[store.questionNumber - 1].answers[store.quizTemplate[store.questionNumber - 1].correctAnswer]}</p>
      <p><img class="kermitGif" src="images/kermit-dance.gif" alt="A gif of Kermit the Frog dancing"></p>
    <section>
      <p><button id="navToNextQuestion">Next Question</button></p>
    </main>

    <footer>
    <p>Correct = ${store.score} Incorrect = ${store.questionNumber-store.score}</p>
    <p>Question ${getQuestionNumber()} of 5</p>
    </footer>`;
}

function generateIncorrectAnswerPage() {
  return `
    <main class="marginTop">
    <section>
      <h2>${getCurrentQuestionOptions()}</h2>
      <p class="wrongAnswerPicked">Your Answer: ${store.quizTemplate[store.questionNumber - 1].answers[parseInt(store.submitedAnswer)]}</p>
      <p class="correctAnswer">Correct Answer: ${store.quizTemplate[store.questionNumber - 1].answers[store.quizTemplate[store.questionNumber - 1].correctAnswer]}</p>
      <p class="fontHandlee">That wasn't it, better luck next time!<p>
      <p><img src="images/kermit-no.gif" alt="A gif of Kermit the Frog shaking his head no and bitting his muppet hands"></p>
    </section>
      <p><button id="navToNextQuestion">Next Question</button></p>
    </main>

    <footer>
    <p>Correct = ${store.score} Incorrect = ${store.questionNumber-store.score}</p>
    <p>Question ${getQuestionNumber()} of 5</p>
    </footer>`;
}

//This function returns the results view
function generateFinalResultsPage(){
  return ` <main class="finalScoreContainers">

    <h2 id="finalTitle">Final Results</h2>
    <section id="finalResultsScore">
    <p> ${store.score / 5 * 100} %</p>
    <p>You got ${store.score} right out of 5</p>
    </section>
    <p><button id="restart">Restart Quiz?</button></p>
  </main>`;
}

/********** RENDER FUNCTION(S) **********/


// render should 
//if start button is never clicked, render should never run
//if the startButton is clicked the next view should always be the Questions page
  //if user input is correct display correct page
  //if user input is incorrect display incorrect page
  // if user has answered the final question, display final results page

function render() {
  let html = ``;
  if (store.quizStarted === false) {
    html += generateStartPage();
  } else if (store.questionNumber === store.quizTemplate.length + 1) {
    html = generateFinalResultsPage();
  } else if (store.submitedAnswer === '') {
    html += generateQuestions();
  } else {
    html += generateReviewAnswers();
  }
  $('body').html(html);
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// listens for a click on start button, changes quizStarted to true, updates questionNumber to 1, calls render
function handleStartButtonSubmit() {
  $('body').on('click', '#startButton', function (event) {
    event.preventDefault();
    store.quizStarted = true;
    store.questionNumber++;
    render();
  });
}
// this function stores the index of the user answer selected

function registerAnswerSubmission() {
  $('body').on('click','.button',function (event) {
    event.preventDefault();
    //stores users answer choice
    store.submitedAnswer = parseInt($("input[name='option']:checked").val());
    //user answers correct
    if (store.submitedAnswer === store.quizTemplate[store.questionNumber - 1].correctAnswer) {
      store.score++;
      store.userAnsweredRight = true;
      render();
    } else if (store.quizTemplate[store.questionNumber - 1].answers[parseInt(store.submitedAnswer)] === undefined) {
       alert('You need to select an answer before continuing');
    } else {
      render();
    }
  });
}


function moveToNextQuestion () {
  $('body').on('click', '#navToNextQuestion', function(event) {
    event.preventDefault();
    store.userAnsweredRight = false;
    store.submitedAnswer = '';
    store.questionNumber++;
    render();
  });
}

function restartQuiz() {
  $('body').on('click', '#restart', function (event) {
    event.preventDefault();
    store.userAnsweredRight = false;
    store.submitedAnswer = '';
    store.questionNumber = 0;
    store.quizStarted = false;
    store.score= 0;
    render();
  });
  
}


function getQuestionNumber() {
  return store.questionNumber;
}


$(main);