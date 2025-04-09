const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 900
canvas.height = 600
const paddleHeight = 75
const paddleWidth = 10
const initialPaddlesY = canvas.height / 2
let player2Y = initialPaddlesY
let player1Y = initialPaddlesY
const player1X = 0
const player2X = canvas.width - paddleWidth
let wPressed = false
let sPressed = false
arrowUp = false
arrowDownd = false
let ballX = canvas.width / 2
let ballY = canvas.height - 30
let ballDX = 2
let ballDY = 2
const ballRadious = 10
let interval = 0

function drawBall() {
  ctx.beginPath()
  ctx.arc(ballX, ballY, ballRadious, 0, Math.PI * 2)
  ctx.fillStyle = "green"
  ctx.fill()
}

function drawPlayers(x, y) {
  ctx.beginPath()
  ctx.fillStyle = "blue"
  ctx.fillRect(x, y, paddleWidth, paddleHeight)
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawPlayers(player1X, player1Y)
  drawPlayers(player2X, player2Y)

  ballX += ballDX
  ballY += ballDY

  if (
    ballY + ballDY > canvas.height - ballRadious ||
    ballY + ballDY < ballRadious
  ) {
    ballDY = -ballDY
  }

  if (ballX + ballDX > canvas.width - ballRadious) {
    if (ballY > player2Y && ballY < player2Y + paddleHeight) {
      ballDX = -ballDX
    }
  }

  if (ballX + ballDX < ballRadious) {
    if (ballY > player1Y && ballY < player1Y + paddleHeight) {
      ballDX = -ballDX
    }
  }

  if (wPressed) {
    player1Y = Math.max(player1Y - 7, 0)
  } else if (sPressed) {
    player1Y = Math.min(player1Y + 7, canvas.height - paddleHeight)
  }

  if (arrowUp) {
    player2Y = Math.max(player2Y - 7, 0)
  } else if (arrowDownd) {
    player2Y = Math.min(player2Y + 7, canvas.height - paddleHeight)
  }
}

document.addEventListener("keydown", keyDownHandler)
document.addEventListener("keyup", keyUpHandler)

function keyDownHandler(e) {
  if (e.key.toLowerCase() === "w") {
    wPressed = true
  } else if (e.key.toLowerCase() === "s") {
    sPressed = true
  } else if (e.key === "ArrowUp") {
    arrowUp = true
  } else if (e.key === "ArrowDown") {
    arrowDownd = true
  }
}

function keyUpHandler(e) {
  if (e.key.toLowerCase() === "w") {
    wPressed = false
  } else if (e.key.toLowerCase() === "s") {
    sPressed = false
  } else if (e.key === "ArrowUp") {
    arrowUp = false
  } else if (e.key === "ArrowDown") {
    arrowDownd = false
  }
}

interval = setInterval(draw, 10)
