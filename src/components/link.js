export function createSpanWithText(text){
    const span = document.createElement("span")
    span.className ="text-gray-700 font-medium mt-3 group-hover:text-gray-900 transition duration-300"
    span.innerText = text

    return span
}

export function createDiv(divClassname){
    const classNameDiv = divClassname || `p-8 grid grid-cols-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 bg-gray-400`  
    const div = document.createElement("div")
    div.className = classNameDiv 
    return div
}

function createLink(url){
    const link = document.createElement("a")
    link.className = "flex flex-col items-center group"
    link.href=url
    return link
}


export function linkComponent(url , colorDiv , subtitle = "Piano" , FatherElement, divClassname) {
    const link = createLink(url)
    const div = createDiv(divClassname)
    const span = createSpanWithText(subtitle)

    link.appendChild(div)
    FatherElement.appendChild(link)
    link.appendChild(span)

    return div
}