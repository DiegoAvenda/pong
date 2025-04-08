const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 900
canvas.height = 600
const paddleHeight = 75
const paddleWidth = 10
let player1Y = canvas.height / 2
let wPressed = false
let sPressed = false
let ballX = canvas.width / 2
let ballY = canvas.height - 30
let ballDX = 2
let ballDY = -2

function drawBall() {
  ctx.beginPath()
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2)
  ctx.fillStyle = "green"
  ctx.fill()
}

function drawPlayer1() {
  ctx.beginPath()
  ctx.fillStyle = "blue"
  ctx.fillRect(5, player1Y, paddleWidth, paddleHeight)
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawPlayer1()

  ballX += ballDX
  ballY += ballDY

  if (wPressed) {
    player1Y = Math.max(player1Y - 7, 0)
  } else if (sPressed) {
    player1Y = Math.min(player1Y + 7, canvas.height - paddleHeight)
  }
}

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

function keyDownHandler(e) {
  if (e.key.toLowerCase === "w") {
    wPressed = true
  } else if (e.key.toLowerCase === "s") {
    sPressed = true
  }
}

function keyUpHandler(e) {
  if (e.key.toLowerCase === "w") {
    wPressed = false
  } else if (e.key.toLowerCase === "s") {
    sPressed = false
  }
}

setInterval(draw, 10)
