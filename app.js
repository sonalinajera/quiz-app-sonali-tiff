'use strict';

function main() {

  handleStartButtonSubmit();
  generateQuestion();

}

function handleStartButtonSubmit() {
  $('#startButton').on('click', function (event) {
    event.preventDefault()
    let questionView2 = 
    $('#pageView').html(view2Quetions)
    console.log("this is working");
  });
}


function generateQuestion(questionsObj, viewObj) {

 let someVar = `<div class="flexgroup">

<main>

  <div class="flexItem"><img src="images/grapefruit.png" alt="Orange grapefruit"></div>
  <form>
    <h2>${questionPages.questions[0]}:</h2>
    <label for="infancy">
      <input name="sweet" type="radio" value="infancy">
      it allows us to detect proton level of acids
    </label>
    <br>

    <label for="puberty">
      <input name="sweet" type="radio" value="puberty">
      scrunches up your face
    </label>
    <br>
    <label for="age42">
      <input name="sweet" type="radio" value="age42">
      helps create saliva in your mouth
    </label>
    <br>
    <br>
    <button class="button">Next</button>
  </form>

</main>

<footer>
  <p>Correct: 2, Incorrect:1</p>
  <p></p>
</footer>

</div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous">
</script>
<script src="app.js">
</script>`
console.log('hey there');
  // iterate over the array
  // pul; the question and the answers 
}

function generateImage() {
  //will show the right image above the question
}

function countPageNumber() {
  //will update current page number
}

function updateUserScore() {
  // will keep track of user score
}

function checkUserInputButton() {
  // will check user input against correct answer
  // if answer is a match generate correct answer page
  // else generate incorrect answer page  
}



const questionPages = {
  questions: [
    {
      question: "At what stage of your life do you have the strongest ability to taste sweet foods?",
      answers: [
        "Infancy",
        "Puberty",
        "Age 42"
      ],
      correctAnswer: "Infancy"
    },
    {
      question: "Sour taste is a good biochemical protective/warning system because...",
      answers: [
        "It allows us to detect proton level of acids",
        "It causes your face to scrunch up ",
        "It helps create saliva in your mouth"
      ],
      correctAnswer: "allows us to detect proton level of acids"
    },
    {
      question: "The ___ of our tongue is sensitive to bitter tastes so we can spit out poisonous or spoiled foods before we swallow them.",
      answers: [
        "Back",
        "Underside",
        "Front"
      ],
      correctAnswer: "Back"
    },
    {
      question: "What is the Japanese coined name for the 5th basic taste meaning ‘savory’?",
      answers: [
        "Unagi",
        "Sarriette",
        "Umami"
      ],
      correctAnswer: "Umami"
    },
    {
      question: "Which substance do we need to consume in order to function correctly?",
      answers: [
        "Sugar",
        "Salt",
        "Thyme"
      ],
      correctAnswer: "Salt"
    }
  ]
}






let view2Quetions = `<div class="flexgroup">

<main>

  <div class="flexItem"><img src="images/grapefruit.png" alt="Orange grapefruit"></div>
  <form>
    <h2>${questionPages.questions[4].question}</h2>
    <label for="infancy">
      <input name="sweet" type="radio" value="infancy">
      it allows us to detect proton level of acids
    </label>
    <br>

    <label for="puberty">
      <input name="sweet" type="radio" value="puberty">
      scrunches up your face
    </label>
    <br>
    <label for="age42">
      <input name="sweet" type="radio" value="age42">
      helps create saliva in your mouth
    </label>
    <br>
    <br>
    <button class="button">Next</button>
  </form>

</main>

<footer>
  // counter idea 
  // <p>${questionPages.answers} === true {return +1 for correct & 0 for incorrect} else {return 0 for correct & +1 for incorrect}</p>
  <p>Correct: 2, Incorrect:1</p>
  <p>${questionPages.questions.indexOf(questionPages.questions[0]) + 1} of ${questionPages.questions.length}</p>
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

  <footer>
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

<footer>
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