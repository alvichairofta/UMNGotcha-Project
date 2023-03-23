const canvas = document.getElementById("canvas1");
const arrowL = document.getElementById("left-arrow");
const arrowR = document.getElementById("right-arrow");
characters = ["Sources/Dog.png", "Sources/Cat.jpg"];

const ctx = canvas.getContext("2d");
const playerImg = new Image();
playerImg.src = characters[0];

const CANVAS_WIDTH = (canvas.width = 110);
const CANVAS_HEIGHT = (canvas.height = 110);

const spriteWidth = 96; //kucing = 141
const spriteheight = 96; //kucing = 141
let frameX = 0;
let frameY = 7;
let gameFrame = 0;
let character;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteheight, spriteWidth, spriteheight, 20, 10, spriteWidth, spriteheight);
  if (gameFrame % 50 == 0) {
    if (frameX < 1) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
