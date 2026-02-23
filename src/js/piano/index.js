import { getSound } from "./gerenciadorDeTeclas";

const pianoElement = document.getElementById("piano");

document.addEventListener("keydown", (e) => getSound(e));

pianoElement.addEventListener("click", (e) => getSound(e, true));

const temporizadorElement = document.getElementById("temporizador");

function teste(e) {
    const x = e.pageX
    const y = e.pageY

    const element = document.createElement("div")
    element.style.position = "absolute"
    element.style.left = x + "px"
    element.style.top = y + "px"
    element.style.width = "30px"
    element.style.height = "30px"
    element.style.backgroundColor = "red"
    temporizadorElement.appendChild(element)
}

temporizadorElement.addEventListener("click", (e) => {
    //asdaconsole.log(e)
})
