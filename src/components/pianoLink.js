import { linkComponent , createDiv } from "./link";

const menu = document.getElementById('menu');

const div = linkComponent("pages/piano/index.html" , "bg-gray-500" , "Piano" , menu , "bg-orange-300 p-8 grid grid-cols rounded-lg shadow-lg hover:bg-orange-400 transition duration-300")

const secontDiv = createDiv("flex flex-row items-center justify-center relative")

const allClass = [
    ...Array(8).fill("h-8 w-3 bg-white border-black border-[1px] rounded-sm"),
    "inline-block absolute h-5 w-2 bg-black rounded-sm top-0 left-2",
    "inline-block absolute h-5 w-2 bg-black rounded-sm top-0 left-8",
    "inline-block absolute h-5 w-2 bg-black rounded-sm top-0 left-11",
    "inline-block absolute h-5 w-2 bg-black rounded-sm top-0 right-5",
    "inline-block absolute h-5 w-2 bg-black rounded-sm top-0 right-[6px]"
]

allClass.forEach((e) => {
    const divChild = createDiv(e)
    secontDiv.appendChild(divChild)
})

div.appendChild(secontDiv)



