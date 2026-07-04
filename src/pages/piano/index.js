import * as Tone from "tone";

const notesByKey = {
  a: "C5",
  s: "D5",
  d: "E5",
  f: "F5",
  g: "G5",
  h: "A5",
  j: "B5",
  k: "C6",
};

const colorsByKey = {
  a: ["bg-blue-100", "bg-blue-200"],
  s: ["bg-emerald-100", "bg-emerald-200"],
  d: ["bg-purple-100", "bg-purple-200"],
  f: ["bg-orange-100", "bg-orange-200"],
  g: ["bg-pink-100", "bg-pink-200"],
  h: ["bg-yellow-100", "bg-yellow-200"],
  j: ["bg-slate-100", "bg-slate-200"],
  k: ["bg-gray-100", "bg-gray-200"],
};

const synth = new Tone.Synth().toDestination();
const piano = document.getElementById("piano");
const input = document.getElementById("notesToPlay");
const playButton = document.getElementById("button_play");
const playIcon = document.getElementById("play");
const stopIcon = document.getElementById("stop");

let isPlaying = false;
let audioStarted = false;

document.addEventListener("keydown", (event) => playNote(event.key));

piano.addEventListener("click", (event) => {
  playNote(event.target.id);
});

playButton.addEventListener("click", playSongFromInput);

async function playNote(key) {
  const normalizedKey = key.toLowerCase();
  const note = notesByKey[normalizedKey];

  if (!note) return;

  await startAudio();
  synth.triggerAttackRelease(note, 0.2, Tone.now());
  animateKey(normalizedKey);
}

async function startAudio() {
  if (audioStarted) return;

  await Tone.start();
  audioStarted = true;
}

function animateKey(key) {
  const keyElement = document.getElementById(key);
  const colors = colorsByKey[key];

  if (!keyElement || !colors) return;

  const [normalColor, activeColor] = colors;

  keyElement.classList.replace(normalColor, activeColor);

  setTimeout(() => {
    keyElement.classList.replace(activeColor, normalColor);
  }, 200);
}

function playSongFromInput() {
  if (isPlaying) return;

  const notes = input.value.toLowerCase().split("").filter((key) => notesByKey[key]);

  if (notes.length === 0) return;

  isPlaying = true;
  playIcon.classList.add("hidden");
  stopIcon.classList.remove("hidden");

  notes.forEach((key, index) => {
    setTimeout(() => {
      playNote(key);

      if (index === notes.length - 1) {
        isPlaying = false;
        playIcon.classList.remove("hidden");
        stopIcon.classList.add("hidden");
      }
    }, index * 300);
  });
}
