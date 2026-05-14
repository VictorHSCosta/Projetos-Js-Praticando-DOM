let questions = [];

questions.push({
  id: 1,
  title: "What is JavaScript?",
  options: [
    { id: 1, text: "A programming language", isCorrect: true },
    { id: 2, text: "A type of coffee", isCorrect: false },
    { id: 3, text: "A brand of shoes", isCorrect: false },
    { id: 4, text: "A musical instrument", isCorrect: false },
  ],
});

questions.push({
  id: 2,
  title: "What is the capital of France?",
  options: [
    { id: 1, text: "Berlin", isCorrect: false },
    { id: 2, text: "Madrid", isCorrect: false },
    { id: 3, text: "Paris", isCorrect: true },
    { id: 4, text: "Rome", isCorrect: false },
  ],
});

questions.push({
  id: 3,
  title: "Which planet is known as the Red Planet?",
  options: [
    { id: 1, text: "Earth", isCorrect: false },
    { id: 2, text: "Mars", isCorrect: true },
    { id: 3, text: "Jupiter", isCorrect: false },
    { id: 4, text: "Venus", isCorrect: false },
  ],
});

function errorModal() {
  const modal = document.createElement("div");

  const h1 = document.createElement("h1");

  h1.innerHTML = "Voce errou quer tentar denovo ?";

  modal.appendChild(h1);

  modal.classList += "absolute top-50 flex flex-col gap-5 bg-white";
}

const questionsDiv = document.getElementById("questions-div");

function answerQuestion(option) {}

function fetchQuestions() {
  const button = document.createElement("button");
}

console.log("cheguei");

errorModal();
