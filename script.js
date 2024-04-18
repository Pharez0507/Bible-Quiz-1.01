const questions = [
    { question: 'In which testament is Genesis?', answer: 'Old Testament' },
    { question: 'In which testament is Matthew?', answer: 'New Testament' },
    { question: 'In which testament is Psalms?', answer: 'Old Testament' },
    { question: 'In which testament is Revelation?', answer: 'New Testament' },
    { question: 'In which testament is Isaiah?', answer: 'Old Testament' },
    { question: 'In which testament is John?', answer: 'New Testament' },
    { question: 'In which testament is Exodus?', answer: 'Old Testament' },
    { question: 'In which testament is Acts?', answer: 'New Testament' },
    { question: 'In which testament is Proverbs?', answer: 'Old Testament' },
    { question: 'In which testament is Romans?', answer: 'New Testament' },
    { question: 'In which testament is Job?', answer: 'Old Testament' },
    { question: 'In which testament is Mark?', answer: 'New Testament' },
    { question: 'In which testament is Leviticus?', answer: 'Old Testament' },
    { question: 'In which testament is Luke?', answer: 'New Testament' },
    { question: 'In which testament is Ecclesiastes?', answer: 'Old Testament' },
    { question: 'In which testament is John the Baptist mentioned?', answer: 'New Testament' },
    { question: 'In which testament is Deuteronomy?', answer: 'Old Testament' },
    { question: 'In which testament is Acts?', answer: 'New Testament' },
    { question: 'In which testament is Joshua?', answer: 'Old Testament' },
    { question: 'In which testament is James?', answer: 'New Testament' },
    { question: 'In which book did Moses receive the Ten Commandments?', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "I am the resurrection and the life."', answer: 'New Testament' },
    { question: 'In which book did David write many of the Psalms?', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "Love your enemies and pray for those who persecute you."', answer: 'New Testament' },
    { question: 'In which book did Solomon build the temple in Jerusalem?', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "Blessed are the merciful, for they shall receive mercy."', answer: 'New Testament' },
    { question: 'In which book did Elijah confront the prophets of Baal?', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "You are the light of the world."', answer: 'New Testament' },
    { question: 'In which book did Daniel interpret dreams for King Nebuchadnezzar?', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "Ask and it will be given to you."', answer: 'New Testament' },
    { question: 'In which book did Paul write, "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."', answer: 'New Testament' },
    { question: 'In which book did the prophet Ezekiel see a vision of dry bones coming to life?', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "I am the way and the truth and the life. No one comes to the Father except through me."', answer: 'New Testament' },
    { question: 'In which book did the apostle Peter write, "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect."', answer: 'New Testament' },
    { question: 'In which book did the prophet Jeremiah lament, "Is there no balm in Gilead? Is there no physician there? Why then is there no healing for the wound of my people?"', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "Come to me, all you who are weary and burdened, and I will give you rest."', answer: 'New Testament' },
    { question: 'In which book did the apostle John write, "But if anybody does sin, we have an advocate with the Father—Jesus Christ, the Righteous One."', answer: 'New Testament' },
    { question: 'In which book did the prophet Isaiah foresee, "The wolf will live with the lamb, the leopard will lie down with the goat, the calf and the lion and the yearling together; and a little child will lead them."', answer: 'Old Testament' },
    { question: 'In which book did Jesus say, "I am the good shepherd. The good shepherd lays down his life for the sheep."', answer: 'New Testament' },
    { question: 'In which book did the apostle Paul write, "For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile."', answer: 'New Testament' }
];

let score = 0;
const shuffledQuestions = questions.slice(); // Make a copy to shuffle
let questionsAsked = 0; // Track the number of questions asked

const quizQuestion = document.getElementById("quiz-question");
const answerBtnLeft = document.getElementById("answer-btn-left");
const answerBtnRight = document.getElementById("answer-btn-right");
const skipBtn = document.getElementById("skip-btn");
const resultDiv = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");
const loadingDiv = document.querySelector(".loading");

// Shuffle the questions array
shuffledQuestions.sort(() => Math.random() - 0.5);

function displayQuestion() {
    if (questionsAsked >= 15) { // Stop after 15 questions
        showResult();
        return;
    }
    const question = shuffledQuestions[questionsAsked];
    quizQuestion.textContent = question.question;
    questionsAsked++;
}

answerBtnLeft.addEventListener("click", function() {
    checkAnswer('Old Testament');
});

answerBtnRight.addEventListener("click", function() {
    checkAnswer('New Testament');
});

skipBtn.addEventListener("click", function() {
    displayQuestion();
});

function checkAnswer(selectedAnswer) {
    const currentQuestion = shuffledQuestions[questionsAsked - 1];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }
    displayQuestion();
}

function showResult() {
    
    const quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    resultDiv.style.display = "block";
    const userName = document.getElementById("name").value;
    scoreDisplay.textContent = `Hey ${userName}, your score is ${score} out of 15`;
}

const nameBtn = document.getElementById("name-btn");
const nameInput = document.getElementById("name");

nameBtn.addEventListener("click", function() {
    const userName = nameInput.value.trim();
    if (userName) {
        const quiz = document.getElementById("quiz");
        quiz.style.display = "block";
        displayQuestion();
    } else {
        alert("Please enter your name to start the quiz.");
    }
});

retryBtn.addEventListener("click", function() {
    loadingDiv.style.display = "block";
    setTimeout(function() {
        location.reload();
    }, 2000);
});