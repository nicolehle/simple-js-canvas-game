
// Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);


// Background image

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
  bgReady = true;
};
bgImage.src = "img/background.png";



// Hero image

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
  heroReady = true;
};
heroImage.src = "img/hero.png";



// Monster Image

var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
  monsterReady = true;
};
monsterImage.src = "img/monster.png";



// Game objects

var hero = {
  speed: 256,
  x: 0,
  y: 0
};

var monster = {
  x: 0,
  y: 0
}

var monsterCaught = 0;



// Player Input
// Handle keyboard controls

var keysDown = {};

addEventListener("keydown", function(e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
  delete keysDown[e.keyCode];
}, false);



// Reset the game when the player catches a monster

var reset = function() {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Throw the moster randomly on the screen

  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
}
