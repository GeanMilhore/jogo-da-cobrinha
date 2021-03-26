let canvas = document.getElementById('snake')
let context = canvas.getContext("2d") // Renderiza o desenho que vai ser manipulado ( "2d" passa um plano 2d )
let box = 32 // pixel de cada quadradinho

function criarBG(){
  context.fillStyle = "lightgreen"
  context.fillRect(0, 0, 16 * box, 16 * box) // desenha o nosso retangulo
}

criarBG()