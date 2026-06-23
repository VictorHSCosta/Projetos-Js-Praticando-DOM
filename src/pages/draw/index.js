const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const colorButtons = document.querySelectorAll("[data-color]");
const clearButton = document.getElementById("clear");

let selectedColor = "black";
let selectedButton = document.querySelector('[data-color="black"]');
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

selectedButton.classList.remove("border-black");
selectedButton.classList.add("border-green-500");

resizeCanvas();

window.addEventListener("resize", resizeCanvas);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
canvas.addEventListener("mousemove", draw);
clearButton.addEventListener("click", clearCanvas);

colorButtons.forEach((button) => {
  button.addEventListener("click", chooseColor);
});

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function chooseColor(event) {
  selectedButton.classList.remove("border-green-500");
  selectedButton.classList.add("border-black");

  selectedButton = event.currentTarget;
  selectedColor = selectedButton.dataset.color;

  selectedButton.classList.remove("border-black");
  selectedButton.classList.add("border-green-500");
}

function startDrawing(event) {
  canDraw = true;
  mouseX = event.offsetX;
  mouseY = event.offsetY;
}

function stopDrawing() {
  canDraw = false;
}

function draw(event) {
  if (!canDraw) return;

  context.beginPath();
  context.lineWidth = 5;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.strokeStyle = selectedColor;
  context.moveTo(mouseX, mouseY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();

  mouseX = event.offsetX;
  mouseY = event.offsetY;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
