import { linkComponent } from "./link";

const menu = document.getElementById("menu");

const div = linkComponent("pages/jogo-da-velha/index.html", "bg-gray-500", "Jogo da Velha", menu);

const allClass = [
  "border-white border-r-2 border-b-2 w-6 h-6",
  "border-white border-r-2 border-b-2 w-6 h-6",
  "border-white border-b-2 w-6 h-6",
  "border-white border-r-2 border-b-2 w-6 h-6",
  "border-white border-r-2 border-b-2 w-6 h-6",
  "border-white border-b-2 w-6 h-6",
  "border-white border-r-2 w-6 h-6",
  "border-white border-r-2 w-6 h-6",
];

allClass.forEach((e) => {
  const divChild = document.createElement("div");
  divChild.className = e;
  div.appendChild(divChild);
});
