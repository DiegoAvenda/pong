const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 900
canvas.height = 600

const canvasWidht = canvas.width
const canvasHeight = canvas.height

ctx.strokeRect(0, 0, canvasWidht, canvasHeight)

ctx.rect(5, canvasHeight / 2, 9, 50)
ctx.fillStyle = "blue"
ctx.fill()
