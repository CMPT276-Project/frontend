class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 75;
    this.height = 75;
    this.sides = {
      bottom: this.position.y + this.height,
    };

    this.gravity = 1;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;

    // Constrain player within the canvas
    if (this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x = 0;
    } else if (this.position.x + this.width > canvas.width) {
      this.position.x = canvas.width - this.width;
      this.velocity.x = 0;
    }

    //above bottom of canvas
    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.position.y = canvas.height - this.height;
      this.velocity.y = 0;
    }
  }
}
