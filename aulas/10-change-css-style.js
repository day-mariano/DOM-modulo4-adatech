const btLigth = document.getElementById("btLigth")
const btDark = document.getElementById("btDark")

btLigth.addEventListener('click', onClickbtLigth)
btDark.addEventListener('click', onClickbtDark)

function onClickbtLigth() {
  document.body.style.backgroundColor = "#ffffff"
  document.body.style.color = "#000000"
}

function onClickbtDark() {
  document.body.style.backgroundColor = "#000000"
  document.body.style.color = "#ffffff"
}

const estilos = window.getComputedStyle(document.body)

console.log('estilos:', estilos.backgroundColor)