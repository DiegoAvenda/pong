const canvas = document.querySelector("canvas")
let player1ScoreElement = document.getElementById("player1Score")
let player2ScoreElement = document.getElementById("player2Score")
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
let arrowUp = false
let arrowDown = false
let ballX = canvas.width / 2
let ballY = canvas.height / 2
let ballDX = 2
let ballDY = 2
const ballRadious = 10
let interval = 0
let player1Score = 0
let player2Score = 0

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

  if (ballX + ballDX < ballRadious) {
    if (ballY > player1Y && ballY < player1Y + paddleHeight) {
      ballDX = -ballDX * 1.1
      ballDX *= 1.1
    } else {
      player2Score += 1
      player2ScoreElement.textContent = player2Score
      ballX = canvas.width / 2
      ballY = canvas.height / 2
    }
  }

  if (ballX + ballDX > canvas.width - ballRadious) {
    if (ballY > player2Y && ballY < player2Y + paddleHeight) {
      ballDX = -ballDX
    } else {
      player1Score += 1
      player1ScoreElement.textContent = player1Score
      ballX = canvas.width / 2
      ballY = canvas.height / 2
      ballDX = (Math.random() > 0.5 ? 1 : -1) * 2
      ballDY = (Math.random() > 0.5 ? 1 : -1) * 2
    }
  }

  if (wPressed) {
    player1Y = Math.max(player1Y - 7, 0)
  } else if (sPressed) {
    player1Y = Math.min(player1Y + 7, canvas.height - paddleHeight)
  }

  if (arrowUp) {
    player2Y = Math.max(player2Y - 7, 0)
  } else if (arrowDown) {
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
    arrowDown = true
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
    arrowDown = false
  }
}

interval = setInterval(draw, 10)
