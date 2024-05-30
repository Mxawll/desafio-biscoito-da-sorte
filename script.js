// variables
const luckyMessage = [
   "A felicidade está dentro de você.",
   "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
   "Você tem o poder de realizar seus sonhos.",
   "A mudança é a única constante na vida.",
   "A sorte é o que acontece quando a preparação encontra a oportunidade.",
]

const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const fortuneCookie = document.querySelector(".fortuneCookie")
const btnAgain = document.querySelector(".btnAgain")
const message = document.querySelector(".message")

// events
fortuneCookie.addEventListener("click", handleClick)
btnAgain.addEventListener("click", handleClick)

// functions
function handleClick() {
   message.textContent = generateRandomMessage()
   toggleScreen()
}

function generateRandomMessage() {
   const luckyMessageIndex = Math.round(Math.random()) * (luckyMessage.length - 1)
   const randomMessage = luckyMessage[luckyMessageIndex]
   return randomMessage
}

function toggleScreen() {
   screenOne.classList.toggle("hide")
   screenTwo.classList.toggle("hide")
}