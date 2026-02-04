let colorSelect = "bg-black";
let elementRef = document.getElementById("bg-black");

const square = document.getElementById("square");

let isDrawing = false; // O nosso "interruptor"

square.addEventListener("mousedown", () => isDrawing = true);
square.addEventListener("mouseup", () => isDrawing = false);
square.addEventListener("mouseleave", () => isDrawing = false); // Para de desenhar se o mouse sair da área

square.addEventListener("mousemove", drawColor)

elementRef.classList.add("border-green-600")

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


function drawColor(e) {
    if (!isDrawing) return; // Se o mouse não estiver pressionado, não faz nada

    // 1. Usamos offsetX/Y para pegar o lugar exato dentro da div
    const x = e.offsetX;
    const y = e.offsetY;

    const newDiv = document.createElement("div")

    // 2. Classes de estilo fixo do Tailwind (que existem no CSS)
    newDiv.classList.add("absolute")
    newDiv.classList.add(colorSelect) // Ex: "bg-black"
    newDiv.classList.add("h-2")
    newDiv.classList.add("w-2")
    newDiv.classList.add("rounded-full")
    newDiv.classList.add("-translate-x-1/2") // Centraliza a bolinha no mouse
    newDiv.classList.add("-translate-y-1/2")

    // 3. Posição exata usamos STYLE (CSS Puro), não classes dinâmicas
    newDiv.style.left = `${x}px`;
    newDiv.style.top = `${y}px`;
    newDiv.style.zIndex = "100";
    newDiv.style.position = "absolute";

    square.appendChild(newDiv)
}

