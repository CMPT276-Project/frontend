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

    //above bottom of canvas
    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity;
    } else this.velocity.y = 0;

    // collision check with the map
    const col = Math.floor(this.position.x / this.width);
    const row = Math.floor(this.position.y / this.height);
    const index = row * 32 + col;

    if (mapCollision[index] === 1) {
      this.position.y = row * this.height;
      this.velocity.y = 0;
    }
  }
}
