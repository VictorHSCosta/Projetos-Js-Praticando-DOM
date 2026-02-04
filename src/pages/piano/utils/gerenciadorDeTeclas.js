let audioInstance;

const getCorretKey = {
  a: "./audios/GrandPianoShort_37_C5_78_SP.wav",
  s: "./audios/GrandPianoShort_39_D5_78_SP.wav",
  d: "./audios/GrandPianoShort_65_E7_78_SP.wav",
  f: "./audios/GrandPianoShort_66_F7_78_SP.wav",
  g: "./audios/GrandPianoLong_68_G7_78_SP.wav",
  h: "./audios/GrandPianoShort_22_A3_78_SP.wav",
  j: "./audios/GrandPianoShort_60_B6_78_SP.wav",
  default: null,
};

const getCorrectNote = {
  a: "do",
  s: "re",
  d: "mi",
  f: "fa",
  g: "sol",
  h: "la",
  j: "si",
};

const createAudioElement = (component) => {
  const audio = document.createElement("audio");
  audio.controls = true;
  audio.preload = "auto";

  const source = document.createElement("source");
  source.src = "./audios/GrandPianoShort_37_C5_78_SP.wav";
  source.type = "audio/wav";

  audio.appendChild(source);
  component.appendChild(audio);

  return audio;
};

const reproduceAudio = (url, key) => {
  audioInstance.src = url;
  audioInstance.volume = 1;
  audioInstance.currentTime = 0;
  audioInstance.play().catch(() => {
    // Reprodução automática pode ser bloqueada pelo navegador sem interação do usuário.
  });

  const [firstColor, secondColor] = replaceColor(getCorrectNote[key]);

  setTimeout(() => changeColor(firstColor, secondColor, key), 200);
  setTimeout(() => changeColor(secondColor, firstColor, key), 400);
};

function changeColor(firstColor, secondColor, key) {
  const keyElement = document.getElementById(getCorrectNote[key]);
  keyElement.className = keyElement.className.replace(firstColor, secondColor);
}

function replaceColor(note) {
  switch (note) {
    case "do":
      return ["bg-blue-100", "bg-blue-200"];
    case "re":
      return ["bg-emerald-100", "bg-emerald-200"];
    case "mi":
      return ["bg-purple-100", "bg-purple-200"];
    case "fa":
      return ["bg-orange-100", "bg-orange-200"];
    case "sol":
      return ["bg-pink-100", "bg-pink-200"];
    case "la":
      return ["bg-yellow-100", "bg-yellow-200"];
    case "si":
      return ["bg-slate-100", "bg-slate-200"];
    default:
      null;
  }
}

export const getSound = (e, component) => {
  if (!audioInstance) {
    audioInstance = createAudioElement(component);
  }

  let keyInstance = e.key;

  reproduceAudio(getCorretKey[keyInstance], keyInstance);
};
