'use strict';

function main() {

  handleStartButtonSubmit();
  generateQuestion();
  getQuestion();
  getAnswer();
  registerNextQuestions();
}

function handleStartButtonSubmit() {
  $('#startButton').on('click', function (event) {
    event.preventDefault();
    let questionView2 =
      $('#pageView').html(view2Quetions);
    console.log("this is working");
  });
}


function getQuestion() {
  let quizTemplateArr = questionPages.quizTemplate;
  let questionOnPage = '';
  let questionNumber = 5;
  for (let i = 0; i < quizTemplateArr.length; i++) {
    if (questionNumber === (i + 1)) {
      questionOnPage = quizTemplateArr[i].question;
    }
  }
  return (questionOnPage);
}

function getAnswer() {
  let quizTemplateArr = questionPages.quizTemplate;
  let answerOnPage = '';
  let questionNumber = 5;
  for (let i = 0; i < quizTemplateArr.length; i++) {
    if (questionNumber === (i + 1)) {
      answerOnPage = quizTemplateArr[i].answers;
    }
  }
  return (answerOnPage);
}


// function getOptions(qObj){return inputs and label string  (same object, diff name Diddy Kong)
// loop Diddy Kong's answers, create inputs in a string and return string 
// use currentQuestion() to get questionObject OR from parameter
// }

function generateQuestion(quizTemplateObj, viewObj) {
  // let options = getOptions(questionsObj)
  //pass DK thru tubes (DK === parameter & tubes === function)

  console.log('hey there');
  // iterate over the array
  // pul; the question and the answers 
}

function generateImage() {
  let quizTemplateArr = questionPages.quizTemplate;
  let imageOnPage = '';
  let questionNumber = 5;
  for (let i = 0; i < quizTemplateArr.length; i++) {
    if (questionNumber === (i + 1)) {
      imageOnPage = quizTemplateArr[i].image;
    }
  }
  return (imageOnPage);
}

function registerNextQuestions(){
  $('.pageView').on('click', '.button', function (event) {
    event.preventDefault();
    questionPages.quizTemplate[0].questionNumber++;
    })
}

function countPageNumber() {
    return questionPages.quizTemplate[0].questionNumber;
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
const questionPages = {
  quizTemplate: [
    {
      question: "At what stage of your life do you have the strongest ability to taste sweet foods?",
      answers: `<label for="infancy">
      <input name="sweet" type="radio" value="infancy">Infancy
    </label>
    <br>

    <label for="puberty">
      <input name="sweet" type="radio" value="puberty">
      Puberty
    </label>
    <br>
    <label for="age42">
      <input name="sweet" type="radio" value="age42">
      Age 42
    </label>
    <br>
    <br>`,
      correctAnswer: "Infancy",
      image: `<img src="images/cake.png" alt="A watercolor drawing of a piece of cake"></div>`
    },
    {
      question: "Sour taste is a good biochemical protective/warning system because...",
      answers: `<label for="proton">
      <input name="sour" type="radio" value="proton">It allows us to detect proton level of acids
    </label>
    <br>

    <label for="scrunches">
      <input name="sour" type="radio" value="scrunches">
      It makes us scrunch up our face
    </label>
    <br>
    <label for="age42">
      <input name="sour" type="radio" value="age42">
      It helps create saliva in your mouth
    </label>
    <br>
    <br>`,
      correctAnswer: "It allows us to detect proton level of acids",
      image: `<img src="images/grapefruit.png" alt="A water color drawing of a sliced grapefruit"></div>`
    },
    {
      question: "The ___ of our tongue is sensitive to bitter tastes so we can spit out poisonous or spoiled foods before we swallow them.",
      answers: `<label for="back">
      <input name="bitter" type="radio" value="back">Back
    </label>
    <br>

    <label for="underside">
      <input name="bitter" type="radio" value="underside">
     Underside
    </label>
    <br>
    <label for="front">
      <input name="bitter" type="radio" value="front">
      front    
    </label>
    <br>
    <br>`,
      correctAnswer: "Back",
      image: `<img src="images/wine.png" alt="A watercolor drawing of a wine bottle, a wine glass, an a bunch of grapes"></div>`
    },
    {
      question: "What is the Japanese coined name for the 5th basic taste meaning ‘savory’?",
      answers: `<label for="umami">
      <input name="umami" type="radio" value="umami">Umami
    </label>
    <br>
    <label for="sarriette">
      <input name="umami" type="radio" value="sarriette">
     Sarriette
    </label>
    <br>
    <label for="unagi">
      <input name="umami" type="radio" value="unagi">
      Unagi    
    </label>
    <br>
    <br>`,
      correctAnswer: "Umami",
      image: `<img src="images/sushi.png" alt="A watercolor drawing of a piece of shrimp sushi"></div>`
    },
    {
      question: "Which substance do we need to consume in order to function correctly?",
      answers: `<label for="sugar">
      <input name="salty" type="radio" value="surgar">Sugar
    </label>
    <br>

    <label for="salt">
      <input name="salty" type="radio" value="salt">
     Salt
    </label>
    <br>
    <label for="thyme">
      <input name="salty" type="radio" value="thyme">
      Thyme    
    </label>
    <br>
    <br>`,
      correctAnswer: "Salt",
      image: `<img src="images/popcorn.png" alt="A watercolor drawing of a box of popcorn"></div>`
    }
  ]
}



let view2Quetions = `<div class="flexgroup">

<main>

  <div class="flexItem">${generateImage()}
  <form>
    <h2>${getQuestion()}</h2>
    ${getAnswer()}
    <button class="button">Next</button>
  </form>

</main>

<footer class="counters">
  <!-- counter idea // <p>$ curlyBracket questionPages.answers curlyBracket</p> === true {return +1 for correct & 0 for incorrect} else {return 0 for correct & +1 for incorrect} -->
  
  <p>Correct: 2, Incorrect:1</p>
  <p>${countPageNumber()}</p>
</footer>

</div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous">
</script>
<script src="app.js">
</script>`;

let view3CorrectAnswer = `<!--plug correct template into a variable-->
<!--Correct Template-->
<div class="flexgroup flexgroupAnswerMargin">

  <main>


    <div class="centerAnswers">
      <div>
        <h2>Question just answered that might be super long</h2>

        <p>Correct Answer</p>
      </div>

      <div>
        <figure>
          <!-- Inset Kermit meme  -->
          <img src="images/grapefruit.png" alt="">
        </figure>

        <p>Congrats, you did kermit proud!</p>
      </div>

    </div>
    <button class="button">Next</button>

  </main>

  <footer class="counters">
    <!-- Should update plus 1 not incorrect  -->
    <p>Correct: 2, Incorrect:1</p>
    <p>Question 1 of 5</p>
  </footer>

</div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous">
</script>
<script src="app.js">
</script>`;

let view3IncorrectAnswer = `<div class="flexgroup flexgroupAnswerMargin">

<main>

  <!--plug incorrect answer template into a variable-->
  <!--Incorrect Answer given Template-->
  <div class="centerAnswers">
    <div>
      <h2>Question just answered that might be super long</h2>
      <p> User Answer </p>
      <p>Correct Answer</p>
    </div>

    <div>
      <figure>
        <!-- Inset failure kermit  meme  -->
        <img src="images/grapefruit.png" alt="">
      </figure>

      <p>Womp, womp, womp! Better luck next time :/
      <p></p>
    </div>

  </div>
  <button class="button">Next</button>


</main>

<footer class="counters">
  <!-- should update incorrect plus one only -->
  <p>Correct: 2, Incorrect:1</p>
  <p>Question 1 of 5</p>
</footer>

</div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous">
</script>
<script src="app.js">
</script>`;

let view4Results = `<main>
  <div class="flexgroup flexgroupAnswerMargin">
    <h2>Final Results</h2>
    
    <p> 100 %</p>

    <p>You got X right out of 5</p>

    <!--Restart meme / maybe find back up image, this image should be hidden and only appear when submit is clicked, then after X seconds redirect to intro page-->
    <Figure class="hideImage">
    <img src="images/grapefruit.png" alt="">
    </Figure>
<!-- maybe we can change the text after the button is pressed once to 'here we go' or something  -->
    <button>Restart Quiz?</button>
    
  </div>

  </main> 
  <script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous">
  </script>
  <script src="app.js">
  </script>`;



/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
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

$(main)