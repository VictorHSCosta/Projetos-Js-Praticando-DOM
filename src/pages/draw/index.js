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
canvas.addEventListener("pointerdown", startDrawing);
canvas.addEventListener("pointerup", stopDrawing);
canvas.addEventListener("pointercancel", stopDrawing);
canvas.addEventListener("pointerleave", stopDrawing);
canvas.addEventListener("pointermove", draw);
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
  const point = getCanvasPoint(event);

  canvas.setPointerCapture(event.pointerId);
  canDraw = true;
  mouseX = point.x;
  mouseY = point.y;
}

function stopDrawing(event) {
  if (typeof event.pointerId === "number" && canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }

  canDraw = false;
}

function draw(event) {
  if (!canDraw) return;

  const point = getCanvasPoint(event);

  context.beginPath();
  context.lineWidth = 5;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.strokeStyle = selectedColor;
  context.moveTo(mouseX, mouseY);
  context.lineTo(point.x, point.y);
  context.stroke();

  mouseX = point.x;
  mouseY = point.y;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height,
  };
}
