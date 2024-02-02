 const questions = [
    {
        question:"What is the national bird of India?",
        answers:[
            { text: "peacock" , correct:true},
            { text: "pigeon" , correct:false},
            { text: "crow" , correct:false},
            { text: "parrot" , correct:false},
        ]
    },
    {
        question:"What is the capital of France?",
        answers:[
            { text: "Berlin" , correct: false},
            { text: "Rome" , correct: false},
            { text: "madrid" , correct: false},
            { text: "paris" , correct: true},
        ]
    },
    {
        question:"What is the largest planet in our solar system?",
        answers:[
            { text: "Mars" , correct: false},
            { text: "Jupiter" , correct: true},
            { text: "venus" , correct: false},
            { text: "saturn" , correct: false},
        ]
    },
    {
        question:" Who wrote the play Romeo and Juliet?",
        answers:[
            { text: "William Shakespeare" , correct: true},
            { text: "Jane Austen" , correct: false},
            { text: " Charles Dickens" , correct: false},
            { text: "Emily Brontë" , correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("nxt-btn");

        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz(){
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = "Next";
            showQuestion();
        }
        function showQuestion(){
             resetstate();
              let currentQuestion = questions[currentQuestionIndex];
              let questionNo = currentQuestionIndex + 1;
              questionElement.innerHTML = questionNo + "." + currentQuestion.question;

       
       currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct; 
            }
            button.addEventListener("click,selectAnswer")
            
        });
    }

    function resetstate() {
        nextButton.style.display = "none";
        while (answerButton.firstChild) {
            answerButton.removeChild(answerButton.firstChild);
        }
    }
      startQuiz();
