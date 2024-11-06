const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('start-button').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', selectAnswer);
        optionsDiv.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedAnswer = e.target.textContent;
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    const resultDiv = document.getElementById('result');
    // Corrected string interpolation using backticks
    resultDiv.textContent = `Your score is: ${score} out of ${questions.length}`;
    resultDiv.classList.remove('hidden');
}