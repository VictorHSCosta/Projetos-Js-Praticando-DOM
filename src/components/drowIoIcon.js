import { linkComponent, createDiv } from "./link";

const menu = document.getElementById("menu");

console.log(menu);

const div = linkComponent(
  "pages/Draw.io/index.html",
  "bg-gray-500",
  "Drow.io",
  menu,
  "w-32 h-32 bg-gray-700 rounded-2xl flex flex-col items-center justify-center transition-all duration-150 hover:scale-110"
);

const screen = createDiv("h-4/6 bg-white w-4/6 mt-3 rounded-xl border-4 border-amber-950");

const colorPalette = createDiv("border-amber-950 h-5 w-4/6 rounded-full flex gap-1 justify-center");

div.appendChild(screen);

div.appendChild(colorPalette);

const colors = [
  "bg-black border-2",
  "bg-gray-300 border-2",
  "bg-red-600 border-2",
  "bg-green-700 border-2"
];

colors.forEach(color => {
  const colorDiv = createDiv(`${color} w-3 h-4/6 mt-1 rounded-full`);
  colorPalette.appendChild(colorDiv);
});