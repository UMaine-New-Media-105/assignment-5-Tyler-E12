//sets the arrays for the sprites
let img1Sprites = [];
let img2Sprites = [];
let numSprites = 20;
let numSpriteNew = 4;
let stars = [];

//loads image files for the sprites
function preload() {
  img1 = loadImage("images/xwingscaled.png");
  img2 = loadImage("images/tiescaled.png");
}

function setup() {
  createCanvas(800, 800);

  // Creating the stars
  for (let i = 0; i < 30; i++) {
    stars[i] = new Star(random(width), random(height));
  }

  // Creating the sprites
  for (let i = 0; i < numSprites; i++) {
    img1Sprites[i] = new Sprite(random(width), random(height), img1);
  }
  for (let i = 0; i < numSprites; i++) {
    img2Sprites[i] = new Sprite(random(width), random(height), img2);
  }
}

function draw() {
  background(0);

  // Drawing the stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].show();
  }

  // Drawing the sprites
  for (let i = 0; i < numSprites; i++) {
    img1Sprites[i].move();
    img1Sprites[i].show();
    img2Sprites[i].move();
    img2Sprites[i].show();
  }
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = random(4, 7);
    this.speed = 0.4;
  }
  //creates the jittering in the background stars
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }
  }

  show() {
    fill("gold");
    noStroke();
    rect(this.x, this.y, this.diameter);
  }
}

class Sprite {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.diameter = random(40, 50);
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }
  //makes the sprites bounce off the boundaries of the canvas.
  move() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  show() {
    image(this.img, this.x, this.y, this.diameter, this.diameter);
  }
}
