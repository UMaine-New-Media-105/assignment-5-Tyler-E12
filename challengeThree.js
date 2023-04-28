function preload() {
  img1 = loadImage("images/xwingscaled.png");
  img2 = loadImage("images/tiescaled.png");
}

let stars = []; //creates the array for the bubbles

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 30; i++) {
    stars[i] = new Star(random(width), random(height));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].show();
    image(img1, 50, 50, 100, 100);
    image(img2, 200, 200, 75, 75);
  }
}

class Star {
  //sets the star's class
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = random(1, 8);
    this.speed = 0.2;
  }

  move() {
    //sets the jittering for the stars
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
    //the actual construction of the stars
    fill("gold");
    noStroke();
    rect(this.x, this.y, this.diameter);
  }
}

