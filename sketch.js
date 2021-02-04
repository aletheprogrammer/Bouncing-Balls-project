let balls = [];

const g = {
  gravX: 0.985, // rolling time
  gravY: 0.987
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //iterates the Ball class
  for (let i = 0; i < 1; i++) {
    let x = random(width);
    let y = random(100, 200);
    let r = random(60, 100)
    balls[i] = new Ball(x, y, r);
  }
}

function touchStarted() {
  let r = random(60, 100);
  let c = color(random(0, 255), random(0, 255), random(0, 255))
  let s = new Ball(mouseX, mouseY, r, c);
  
      balls.push(s);
   
  
}

function draw() {
  background(220);
  // iterates drawing balls
  for (let i = 0; i < balls.length; i++) {
    balls[i].motion();
    balls[i].bouncing();
    balls[i].ballDraw();
  }
}
