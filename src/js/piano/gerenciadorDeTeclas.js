import * as Tone from "tone";

const getCorrectNote = {
  a: "C5",
  s: "D5",
  d: "E5",
  f: "F5",
  g: "G5",
  h: "A5",
  j: "B5",
};

const getCorrectLetterFromNote = {
  do: "a",
  re: "s",
  mi: "d",
  fa: "f",
  sol: "g",
  la: "h",
  si: "j",
};

const synthTriggerAttack = (note) => {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();
  synth.triggerAttackRelease(getCorrectNote[note], 0.2, now);
}

const reproduceAudio = (key) => {
  synthTriggerAttack(key);

  const [firstColor, secondColor] = replaceColor(key);

  if (!firstColor || !secondColor) return;

  setTimeout(() => changeColor(firstColor, secondColor, key), 200);
  setTimeout(() => changeColor(secondColor, firstColor, key), 400);

};

function changeColor(firstColor, secondColor, key) {
  const keyElement = document.getElementById(key)
  keyElement.className = keyElement.className.replace(firstColor, secondColor);
}

function replaceColor(note) {
  switch (note) {
    case "a":
      return ["bg-blue-100", "bg-blue-200"];
    case "s":
      return ["bg-emerald-100", "bg-emerald-200"];
    case "d":
      return ["bg-purple-100", "bg-purple-200"];
    case "f":
      return ["bg-orange-100", "bg-orange-200"];
    case "g":
      return ["bg-pink-100", "bg-pink-200"];
    case "h":
      return ["bg-yellow-100", "bg-yellow-200"];
    case "j":
      return ["bg-slate-100", "bg-slate-200"];
    default:
      null;
  }
}

export const getSound = (e, theSoundOriginatedFromAClick = false) => {
  let keyInstance;

  if (theSoundOriginatedFromAClick) {
    keyInstance = e.target.id;
  } else {
    keyInstance = e.key;
  }

  reproduceAudio(keyInstance);
};
