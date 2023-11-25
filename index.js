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
    collisionBlocks: collisionBlocks,
    imageSrc: './images/king-sprite/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './images/king-sprite/idle.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './images/king-sprite/idleLeft.png',
        }, 
        runRight: {
            frameRate: 8,
            frameBuffer: 2,
            loop: true,
            imageSrc: './images/king-sprite/runRight.png',
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 2,
            loop: true,
            imageSrc: './images/king-sprite/runLeft.png',
        }, 
        enterDoor: {
            frameRate: 8,
            frameBuffer: 2,
            loop: false,
            imageSrc: './images/king-sprite/enterDoor.png',
        }, 
    },
})

const doors = [
    new Sprite({
        position: {
            x: 750,
            y: 385
        },
        imageSrc: './images/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
        autoplay: false
    }),
]

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

function animate(){
    window.requestAnimationFrame(animate)

    backgroundMap1.draw()
    collisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.draw()
    })

    doors.forEach((door)=> {
        door.draw()
    })

  player.velocity.x = 0;

player.handleInput(keys)
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
