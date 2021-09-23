

// déclaration des variable aleatoires
var counter_win = 0;
var counter_loose= 0;
var choix = [ "free","printf","open","malloc"];
var choix1 =choix.sort(function(a, b){return 0.5 - Math.random()})
var myres = choix[(Math.random()*choix.length)|0];
console.log(myres)


class Question {



    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer =answer ;

    }
    bonneReponse(choice) {

        return this.answer === choice;
    }

}
    let questions=[
        new Question(
            " SELECT A FUNCTION THAT CAN PRINT ? ",
            choix1,
            myres,
        )

    ];

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestion().bonneReponse(answer)) {
            this.score++;
            counter_win++;
            var element =document.querySelector('h1')

        }else{
            counter_loose++;


        }

        this.currentQuestionIndex++;
    }
    hasEnded() {

        return this.currentQuestionIndex >= this.questions.length;
    }
}


const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function() {
        endtestHTML = `
      <h1> bien essayé !</h1>
      <h3> Votre score est de : ${quiz.score}</h3>`;
        this.elementShown("quiz", endtestHTML);
        quizApp();
    },
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function() {
                quiz.guess(guess);
                quizApp();
            }
        }

        for(let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            guessHandler("guess" + i, choices[i]);
        }
    },

};

// Game logic
quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.counterw();

    }
}
// création d'un jeu
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);

