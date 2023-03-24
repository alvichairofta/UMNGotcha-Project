const cat = document.getElementById("canvas1");
const goat = document.getElementById("canvas2");
const dog = document.getElementById("canvas3");
const arrowL = document.getElementById("left-arrow");
const arrowR = document.getElementById("right-arrow");
characters = ["Sources/Cat.jpg", "Sources/Goat.png", "Sources/Dog.png"];

const ctx1 = cat.getContext("2d");
const ctx2 = goat.getContext("2d");
const ctx3 = dog.getContext("2d");
const playerImg = new Image();
playerImg.src = characters[1];

const CAT_WIDTH = (cat.width = 150);
const CAT_HEIGHT = (cat.height = 150);
const GOAT_WIDTH = (goat.width = 150);
const GOAT_HEIGHT = (goat.height = 150);
const DOG_WIDTH = (dog.width = 150);
const DOG_HEIGHT = (dog.height = 150);

const spriteWidth = 96; //kucing = 141
const spriteheight = 96; //kucing = 141
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
let character;

function animate() {
  ctx2.clearRect(0, 0, GOAT_WIDTH, GOAT_HEIGHT);
  ctx2.drawImage(playerImg, frameX * spriteWidth, frameY * spriteheight, spriteWidth, spriteheight, 25, 25, spriteWidth, spriteheight);
  if (gameFrame % 35 == 0) {
    if (frameX < 3) frameX++;
    else frameX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
