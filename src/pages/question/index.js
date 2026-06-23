const questions = [
  {
    title: "What is JavaScript?",
    options: [
      { text: "A programming language", isCorrect: true },
      { text: "A type of coffee", isCorrect: false },
      { text: "A brand of shoes", isCorrect: false },
      { text: "A musical instrument", isCorrect: false },
    ],
  },
  {
    title: "What is the capital of France?",
    options: [
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    title: "Which planet is known as the Red Planet?",
    options: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Venus", isCorrect: false },
    ],
  },
];

const title = document.getElementById("question-title");
const options = document.getElementById("options");
const result = document.getElementById("result");
const progress = document.getElementById("progress");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

renderQuestion();

nextButton.addEventListener("click", goToNextQuestion);

function renderQuestion() {
  const question = questions[currentQuestionIndex];

  answered = false;
  title.textContent = question.title;
  options.innerHTML = "";
  result.className = "mt-6 hidden rounded-lg border p-4 text-lg font-medium";
  result.textContent = "";
  progress.textContent = `${currentQuestionIndex + 1} de ${questions.length}`;
  nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Finalizar" : "Proxima";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className =
      "rounded-lg border border-gray-200 px-4 py-3 text-left text-gray-800 transition hover:border-blue-500 hover:bg-blue-50";
    button.textContent = option.text;

    button.addEventListener("click", () => answerQuestion(option, button));

    options.appendChild(button);
  });
}

function answerQuestion(option, button) {
  if (answered) return;

  answered = true;

  if (option.isCorrect) {
    score += 1;
    button.classList.add("border-green-500", "bg-green-50");
    showResult("Acertou!", "border-green-300 bg-green-50 text-green-800");
  } else {
    button.classList.add("border-red-500", "bg-red-50");
    showResult("Errou. Tente a proxima.", "border-red-300 bg-red-50 text-red-800");
  }
}

function showResult(message, className) {
  result.className = `mt-6 rounded-lg border p-4 text-lg font-medium ${className}`;
  result.textContent = message;
}

function goToNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  title.textContent = `Resultado: ${score} de ${questions.length}`;
  options.innerHTML = "";
  progress.textContent = "";
  nextButton.textContent = "Recomecar";
  showResult("Clique para jogar de novo.", "border-blue-300 bg-blue-50 text-blue-800");

  currentQuestionIndex = -1;
  score = 0;
}
