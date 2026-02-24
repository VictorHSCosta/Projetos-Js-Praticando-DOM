import { getSound , getNoteFromLetter } from "./gerenciadorDeTeclas";

const pianoElement = document.getElementById("piano");

document.addEventListener("keydown", (e) => getSound(e));

pianoElement.addEventListener("click", (e) => getSound(e, true));

const temporizadorElement = document.getElementById("temporizador");

document.getElementById("StartMusic").addEventListener("click", () => { console.log("opaaaa") ,getNoteFromLetter()});

temporizadorElement.addEventListener("click", (e) => {
    //asdaconsole.log(e)
})
