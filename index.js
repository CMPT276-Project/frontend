const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

let parsedCollisions 
let collisionBlocks 
let backgroundMap 
let doors

//call constructor in Player.js file
const player = new Player({
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
            onComplete: () => {
                console.log('animation complete')
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level++
                        levels[level].init()
                        player.switchSprite('idleRight')
                        player.preventInput = false
                        gsap.to(overlay, {
                            opacity: 0, 
                        })
                    },
                })
            },
        }, 
    },
})

let level = 1
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionMap1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2d()
            player.collisionBlocks = collisionBlocks

            if (player.currentAnimation) player.currentAnimation.isActive = false


            backgroundMap = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './images/backgroundMap1.png'
            })

            doors = [
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
        },
    },
    2: {
        init: () => {
            parsedCollisions = collisionMap4.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2d()
            player.collisionBlocks = collisionBlocks
            player.position.x = 100
            player.position.y = 100

            if (player.currentAnimation) player.currentAnimation.isActive = false

            backgroundMap = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './images/backgroundMap4.png'
            })

            doors = [
                new Sprite({
                    position: {
                        x: 100,
                        y: 385
                    },
                    imageSrc: './images/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                }),
            ]
        },
    },
}

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

const overlay= {
    opacity: 0,
}

function animate(){
    window.requestAnimationFrame(animate)

    backgroundMap.draw()
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

    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    c.restore()
}

//listen for window resize events
window.addEventListener("resize", () => {
  //update canvas size on window resize
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

levels[level].init()
animate();
