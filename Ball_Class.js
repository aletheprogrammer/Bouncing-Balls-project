
class Ball {
  constructor(_x, _y, _diam, _c = 255) {
    this.x = _x;
    this.y = _y;
    this.diam = _diam;
    this.speedX = random(-30, 30);
    this.speedY = 0;
    this.rgb = _c;
  }

  contains(pX, pY) {
    let d = dist(pX, pY, this.x, this.y);
    if (d <= this.diam) {
      return true
      
    }
  }

  // Motion
  motion() {
    this.speedX *= g.gravX;
    this.x += this.speedX;
    this.speedY += g.gravY;
    this.y += this.speedY;
  }

  // Bouncing
  bouncing() {
    if (this.y > height - this.diam / 2) {
      this.speedY *= -0.91; // ball weight
      this.y = height - this.diam / 2;
    }
    if (this.x > width - this.diam / 2) {
      this.speedX *= -1;
    }
    if (this.x < 0 + this.diam / 2) {
      this.speedX *= -1;
    }
  }

  // Ball
  ballDraw() {
    fill(this.rgb)
    ellipse(this.x, this.y, this.diam);
  }

}