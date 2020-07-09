'use strict';

function main() {

  handleStartButtonSubmit();

}

function handleStartButtonSubmit() {
  $("#startButton").on("click", function (event) {
    event.preventDefault();
    $("#pageView").html(pageView2)
  })
};

const = 


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
}
}



let pageView2 = `<div class="flexgroup">

<main>

  <div class="flexItem"><img src="images/grapefruit.png" alt="Orange grapefruit"></div>
  <form>
    <h2>Sour taste is a good biochemical protective/warning system because:</h2>
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
  <p>Question 1 of 5</p>
</footer>

</div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.js" crossorigin="anonymous">
</script>
<script src="app.js">
</script>`



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
// checkUserInput() // next button brings user to answer page
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