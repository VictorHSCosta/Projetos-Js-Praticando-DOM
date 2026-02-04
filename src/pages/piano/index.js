import { getSound } from "./utils/gerenciadorDeTeclas";

const soundElement = document.getElementById("musicDiv");

document.addEventListener("keydown", (e) => getSound(e, soundElement));
