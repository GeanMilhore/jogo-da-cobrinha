let canvas = document.getElementById('snake')
let context = canvas.getContext("2d") // Renderiza o desenho que vai ser manipulado ( "2d" passa um plano 2d )
let box = 32 // pixel de cada quadradinho
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG(){
  context.fillStyle = "lightgreen"
  context.fillRect(0, 0, 16 * box, 16 * box) // desenha o nosso retangulo
}

// A cobrinha vai se comportar como um array de coordenadas
function criarCobrinha(){
  for (i = 0; i<snake.length; i++){
    context.fillStyle = "green"
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}

criarBG()
criarCobrinha()
