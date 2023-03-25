const cat = document.getElementById("canvas1");
const goat = document.getElementById("canvas2");
const dog = document.getElementById("canvas3");
const arrowL = document.getElementById("left-arrow");
const arrowR = document.getElementById("right-arrow");
let characters = ["Sources/Cat.png", "Sources/Goat.png", "Sources/Dog.png"];

const ctx1 = cat.getContext("2d");
const ctx2 = goat.getContext("2d");
const ctx3 = dog.getContext("2d");
const CatImg = new Image();
CatImg.src = characters[0];
const GoatImg = new Image();
GoatImg.src = characters[1];
const DogImg = new Image();
DogImg.src = characters[2];

const CAT_WIDTH = (cat.width = 150);
const CAT_HEIGHT = (cat.height = 150);
const GOAT_WIDTH = (goat.width = 150);
const GOAT_HEIGHT = (goat.height = 150);
const DOG_WIDTH = (dog.width = 120);
const DOG_HEIGHT = (dog.height = 120);

const goatwidth = 96;
const goatheight = 96;
const dogwidth = 96;
const dogheight = 96;
const catwidth = 141;
const catheight = 141;
let cframeX = 0;
let cframeY = 5;
let gframeX = 0;
let gframeY = 4;
let dframeX = 0;
let dframeY = 4;
let gameFrame = 0;
let character;

animateCat();
animateGoat();
animateDog();

const catCard = document.getElementById("catCard");
const goatCard = document.getElementById("goatCard");
const dogCard = document.getElementById("dogCard");
const catButton = document.getElementById("cat");
const goatButton = document.getElementById("goat");
const dogButton = document.getElementById("dog");
const start = document.getElementById("start");
const charName = document.getElementById("characterName");
let input = 0;

catButton.addEventListener("click", function () {
  input = 1;
  goatCard.style.backgroundColor = "#90c2e7";
  catCard.style.backgroundColor = "#84DCC6";
  dogCard.style.backgroundColor = "#90c2e7";
});
goatButton.addEventListener("click", function () {
  input = 2;
  goatCard.style.backgroundColor = "#84DCC6";
  catCard.style.backgroundColor = "#90c2e7";
  dogCard.style.backgroundColor = "#90c2e7";
});
dogButton.addEventListener("click", function () {
  input = 3;
  goatCard.style.backgroundColor = "#90c2e7";
  catCard.style.backgroundColor = "#90c2e7";
  dogCard.style.backgroundColor = "#84DCC6";
});

console.log(input);
console.log(charName.value);

function animateCat() {
  ctx1.clearRect(0, 0, CAT_WIDTH, CAT_HEIGHT);
  ctx1.drawImage(CatImg, cframeX * catwidth, cframeY * catheight, catwidth, catheight, 5, -5, catwidth, catheight);
  if (gameFrame % 25 == 0) {
    if (cframeX < 3) cframeX++;
    else cframeX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animateCat);
}

function animateGoat() {
  ctx2.clearRect(0, 0, GOAT_WIDTH, GOAT_HEIGHT);
  ctx2.drawImage(GoatImg, gframeX * goatwidth, gframeY * goatheight, goatwidth, goatheight, 25, 40, goatwidth, goatheight);
  if (gameFrame % 25 == 0) {
    if (gframeX < 3) gframeX++;
    else gframeX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animateGoat);
}

function animateDog() {
  ctx3.clearRect(0, 0, DOG_WIDTH, DOG_HEIGHT);
  ctx3.drawImage(DogImg, dframeX * dogwidth, dframeY * dogheight, dogwidth, dogheight, 10, 15, dogwidth, dogheight);
  if (gameFrame % 25 == 0) {
    if (dframeX < 3) dframeX++;
    else dframeX = 0;
  }

  gameFrame++;
  requestAnimationFrame(animateDog);
}
