const allElements = Array.from(document.getElementById("elements-box").children)
  .map((value) => value.id)
  .filter(Boolean);

const screen = document.getElementById("display");

// we need to add a listener on all buttons

allElements.forEach((value) => {
  const element = document.getElementById(value);

  element.addEventListener("click", clickOnButton);
});

function clickOnButton(event) {
  //filtra comandos especiais como c e =
  switch (event.target.innerText.toString()) {
    case "C":
      clearScreen(screen);
      return;
      break;
    case "=":
      calculate();
      return;
      break;
    default:
      break;
  }

  let valueOfScreen = screen.innerText.toString();

  screen.innerText = extractTextFromEvent(valueOfScreen, event);
}

function extractTextFromEvent(value, event) {
  if (value == "0") {
    return event.target.innerText.toString();
  }

  return value + event.target.innerText.toString();
}

function clearScreen(screen) {
  screen.innerText = "0";
}

function calculate() {
  const valueOfScrean = screen.innerText
    .replace("x", "*")
    .split(/([+\-x/%])/)
    .join(" ");

  // só usei aqui pq é uma calculadora
  try {
    screen.innerText = eval(valueOfScrean);
  } catch (e) {
    screen.innerText = "ERRO " + e;
  }
}
