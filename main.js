const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 900
canvas.height = 600

const paddleHeight = 75
const paddleWidth = 10
let player1Y = canvas.height / 2

let wPressed = false
let sPressed = false

function drawPlayer1() {
  ctx.fillStyle = "blue"
  ctx.fillRect(5, player1Y, paddleWidth, paddleHeight)
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
  drawPlayer1()

  if (wPressed) {
    player1Y = Math.max(player1Y - 7, 0)
  } else if (sPressed) {
    player1Y = Math.min(player1Y + 7, canvas.height - paddleHeight)
  }
}

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

function keyDownHandler(e) {
  if (e.key === "w") {
    wPressed = true
  } else if (e.key === "s") {
    sPressed = true
  }
}

function keyUpHandler(e) {
  if (e.key === "w") {
    wPressed = false
  } else if (e.key === "s") {
    sPressed = false
  }
}

setInterval(draw, 10)
