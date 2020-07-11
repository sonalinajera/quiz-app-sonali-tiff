'use strict';

function main() {
  handleStartButtonSubmit();
  render();
}

function handleStartButtonSubmit() {
  $('#startButton').on('click', function (event) {
    event.preventDefault();

    console.log('hey girl hey');
  });
}

function startQuiz() {

}


function render() {
  let html = ``;
  if (store.quizStarted === true){
    html += generateQuestions();
  $('body').html(html);
}
}


function sampleQuestions(){
  let questionTemplate = store.quizTemplate;
  for (let i = 0; i < questionTemplate.length; i++){
    if ((store.questionNumber - 1) === i){
      return questionTemplate[i].question;
    }
  }
}

//input: Single question from arr matching page #
//output: render question page view
function generateQuestions() {
  let currentQuestion = sampleQuestions();
  return (
    `  <div class="flexgroup">

    <main>

    <div class="flexItem"><img src="${generateImageSrc()}" alt="${generateImageAlt()}"></div>
      <form>
        <h2>${sampleQuestions()}</h2>
        ${generateAnswers()}
        <br>
         <button class="button">Next</button>
      </form>

    </main>

    <footer>
      <p>Correct: 2, Incorrect:1</p>
      <p>Question ${getQuestionNumber()} of 5</p>
    </footer>`
  )
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

function sampleAnswers(){
    let answerTemplate = store.quizTemplate;
    for (let i = 0; i < answerTemplate.length; i++){
      if ((store.questionNumber -1) === i){
          return answerTemplate[i].answers;
      }
    }
}

function generateAnswers() {
  let answersArray = sampleAnswers();
  return (answersArray.reduce((html, answer, i) =>
    html + `<label> <input name="option" type="radio" value="${i}">${answer}</label><br>`
    , ''))
}


function getAnswerArray(quizTemplateArray, pageNumber) {

  // let quizTemplateArr = store.quizTemplate;
  // let answerOnPage = '';
  // let questionNumber = 5;
  // for (let i = 0; i < quizTemplateArr.length; i++) {
  //   if (questionNumber === (i + 1)) {
  //     answerOnPage = quizTemplateArr[i].answers;
  //   }
  // }
  // return (answerOnPage);
}


// handle clicks 

function handleStartButtonSubmit() {
  $('#startButton').on('click', function (event) {
    event.preventDefault();
    store.quizStarted = true;
    store.questionNumber++;
    render();
  });
}

function registerNextQuestions() {
  $('.pageView').on('click', '.button', function (event) {
    event.preventDefault();
    store.quizTemplate[0].questionNumber++;
  })
}

function getQuestionNumber() {
  return store.questionNumber;
}

function updateUserScore() {
  // will keep track of user score
}

function checkUserInputButton() {
  // will check user input against correct answer
  // if answer is a match generate correct answer page
  // else generate incorrect answer page  
}




//data model v
const store = {
  quizTemplate: [
    {
      question: "At what stage of your life do you have the strongest ability to taste sweet foods?",
      answers: ['Infancy', 'Adulthood', 42],
      // update correct answer from string to number value, then compare index answer picked to correct answer value
      correctAnswer: 0,
      image: [`images/cake.png`, `A watercolor drawing of a piece of cake`]
    },
    {
      question: "Sour taste is a good biochemical protective/warning system because...",
      answers: ['It allows us to detect proton level of acids', 'It makes us scrunch up our face', 'It helps create saliva in your mouth'],
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
      question: "What is the Japanese coined name for the 5th basic taste meaning ‘savory’?",
      answers: ['Unagi', 'Umami', 'Sarriette'],
      correctAnswer: 1,
      image: [`images/sushi.png`, `A watercolor drawing of a piece of shrimp sushi`]
    },
    {
      question: "Which substance do we need to consume in order to function correctly?",
      answers: ['Sugar', 'Salt', 'Thyme'],
      correctAnswer: 1,
      image: [`images/popcorn.png`, `A watercolor drawing of a box of popcorn`]
    }
  ],
  quizStarted: false,
  submitedAnswers: '',
  questionNumber: 0, //ea click = questionNumber++
  score: 0
};




// renderQuestion() //pulls view to code
// generateQuestion() //brings proper question to view
// countPageNumber() // counts page user is on
// updateUserScore() // counts total correct vs incorrect
// checkUserInputButton() // next button brings user to answer page
// isAnswerCorrect() // tests checkUserInput() if true return correctAnswerPage else return incorrectAnswerPage
// correctAnswerPage() // displays html for correct page and calls countPageNumber() & updateUserScore
// inccorectAnswerPage // displays html for incorrect page and calls countPageNumber() & updateUserScore
// finalQuestionCheck() // button that determines whether user will move forward to next question or results page
// displayFinalResults() // user see results view with total score 
// restartButton() // user can restart quiz 


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

$(main);