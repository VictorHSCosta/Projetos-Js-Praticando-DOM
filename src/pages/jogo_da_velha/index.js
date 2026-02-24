let tabuleiro = [["", "", ""], ["", "", ""], ["", "", ""]];

const Player1 = localStorage.getItem("player") || {
    name:"",
    points:"",
    isXOrO:"X"
}

const Player2AI = {
    name:"",
    points:"",
    isXOrO:"O"
}

const classButtonSelected = "bg-emerald-600 border-emerald-300 border-2"
const selectedClasses = classButtonSelected.split(" ")

const selectButttonPlayer = (e) => {
    if (e.target.id === "ButtonX") {
     ButtonO.classList.remove(...selectedClasses)
     ButtonX.classList.add(...selectedClasses)
    } else {
     ButtonX.classList.remove(...selectedClasses)
     ButtonO.classList.add(...selectedClasses)
    }
}

const getFrontEndBoadId = (position) => document.getElementById(`square${position}`)
const getPlayerName = () => document.getElementById("PlayerName").value

// Configura os 2 botoes do menu principal
const ButtonX =  document.getElementById("ButtonX")
const ButtonO =  document.getElementById("ButtonO")
ButtonX.addEventListener("click" ,(e) => selectButttonPlayer(e))
ButtonO.addEventListener("click" ,(e) => selectButttonPlayer(e))



// Adiciona um listening em cada uma das teclas 