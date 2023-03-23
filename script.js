const canvas = document.getElementById("character");
const arrowL = document.getElementById("left-arrow");
const arrowR = document.getElementById("right-arrow");
characters = ["Sources/Dog.png", "Sources/Cat.jpg"];

const ctx = canvas.getContext("2d");
const playerImg = new Image();
playerImg.src = characters[1];

const CANVAS_WIDTH = (canvas.width = 150);
const CANVAS_HEIGHT = (canvas.height = 150);

const spriteWidth = 141; //kucing = 141
const spriteheight = 141; //kucing = 141
let frameX = 0;
let frameY = 5;
let gameFrame = 0;
let character;

arrowL.addEventListener("click", function () {
  character = characters[0];
  playerImg.src = character;
});

arrowR.addEventListener("click", function () {
  character = characters[1];
  playerImg.src = character;
});

// if(character == characters[0]){

// }else if(character == characters[1]){

// }

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteheight, spriteWidth, spriteheight, 5, -25, spriteWidth, spriteheight);
  if (gameFrame % 25 == 0) {
    if (frameX < 3) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
