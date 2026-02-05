// Variáveis Globais
let colorSelect = "black";
let elementRef = document.getElementById("black");
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
const canvas = document.getElementById("square");
const ctx = canvas.getContext("2d");
elementRef.classList.add("border-green-600")
const clearButton = document.getElementById("clear");

// Adiciona evento de click para todos os botões
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", chooseColor)
}

// Eventos do Mouse
canvas.addEventListener("mousedown", mouseDownEvent)
canvas.addEventListener("mouseup", mouseUpEvent)
canvas.addEventListener("mousemove", mouseMoveEvent)

// AJUSTE DE TAMANHO: Faz o canvas interno ter o mesmo tamanho da tela
window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});


function chooseColor(e) {
    if (elementRef) {
        elementRef.classList.remove("border-green-600")
        elementRef.classList.add("border-black")
    }

    elementRef = document.getElementById(e.target.id)
    colorSelect = e.target.id

    elementRef.classList.remove("border-black")
    elementRef.classList.add("border-green-600")
}

function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

function mouseUpEvent() {
    canDraw = false;
}

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.offsetX, e.offsetY);
    }
}

function draw(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round"; // Adicionado para suavidade

    // Converte de "bg-red-600" para "red" usando nosso objeto
    ctx.strokeStyle = colorSelect || "black";

    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(x, y);
    ctx.stroke();

    mouseX = x;
    mouseY = y;
}

// Botão Limpar
document.getElementById("clear").addEventListener("click", () => { clearCanvas() })

function clearCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
