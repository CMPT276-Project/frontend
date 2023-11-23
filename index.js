const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

const parsedCollisions = collisionMap1.parse2D()
console.log(parsedCollisions)

const collisionBlocks = parsedCollisions.createObjectsFrom2d()

const backgroundMap1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './images/backgroundMap1.png'
})

//call constructor in Player.js file
const player = new Player({
    collisionBlocks: collisionBlocks
})

// Set default for keys
const keys = {
    w: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    Space: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    s: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
};


function animate() {
  //update canvas size on each animation frame
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

function animate(){
    window.requestAnimationFrame(animate)

    backgroundMap1.draw()
    collisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.draw()
    })

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
