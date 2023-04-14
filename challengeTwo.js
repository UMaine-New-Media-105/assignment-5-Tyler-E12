let bubbles = []; //creates the array for the bubbles

function setup() {
  createCanvas(960, 540);
  for (let i = 0; i < 50; i++) {
    //bubbles are created until there's 50
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  //sets the bubble's class
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = random(20, 80);
    this.speed = 3;
  }

  move() {
    //sets the jittering for the bubbles
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
    //the actual construction of the bubble
    noFill();
    strokeWeight(3);
    stroke("red");
    ellipse(this.x, this.y, this.diameter);
  }
}
