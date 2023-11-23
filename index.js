const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

class Sprite {
  constructor(position) {
    this.position = position;
    this.image = new Image();
  }
}

//call constructor in Player.js file
const player = new Player();
const map = new Image();
map.src = "images/Background Map 1.png";

// Set default for keys
const keys = {
  w: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

function animate() {
  //update canvas size on each animation frame
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.requestAnimationFrame(animate);
  c.drawImage(map, 0, 0, canvas.width, canvas.height);

  player.velocity.x = 0;

  if (keys.d.pressed || keys.ArrowRight.pressed) player.velocity.x = 5;
  else if (keys.s.pressed || keys.ArrowLeft.pressed) player.velocity.x = -5;
  player.draw();
  player.update();
}

//listen for window resize events
window.addEventListener("resize", () => {
  //update canvas size on window resize
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();
