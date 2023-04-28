//sets the arrays for the sprites
let img1Sprites = [];
let img2Sprites = [];
let numSprites = 20;
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

  // Drawing the sprites in img1Sprites array
  for (let i = 0; i < img1Sprites.length; i++) {
    img1Sprites[i].move();
    img1Sprites[i].show();

    // Check for collisions with other img1Sprites
    for (let j = i + 1; j < img1Sprites.length; j++) {
      if (
        dist(
          img1Sprites[i].x,
          img1Sprites[i].y,
          img1Sprites[j].x,
          img1Sprites[j].y
        ) <
        img1Sprites[i].diameter + img1Sprites[j].diameter
      ) {
        // Create a new sprite where there's a collision if its under the limit
        if (img1Sprites.length < 30) {
          let newX = (img1Sprites[i].x + img1Sprites[j].x) / 2;
          let newY = (img1Sprites[i].y + img1Sprites[j].y) / 2;
          img1Sprites.push(new Sprite(newX, newY, img1));
          break;
        }
      }
    }

    // Check for collisions with img2Sprites
    for (let j = 0; j < img2Sprites.length; j++) {
      if (
        dist(
          img1Sprites[i].x,
          img1Sprites[i].y,
          img2Sprites[j].x,
          img2Sprites[j].y
        ) <
        img1Sprites[i].diameter + 5
      ) {
        // Remove img1 sprite instance and break out of the loop
        img1Sprites.splice(i, 1);
        break;
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    img2Sprites[i].move();
    img2Sprites[i].show();
  }
}
//draws the stars
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
//draws the sprites
class Sprite {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.diameter = random(60, 70);
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }
  //makes the sprites bounce off the boundaries of the canvas
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
