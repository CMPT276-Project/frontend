const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

let parsedCollisions;
let collisionBlocks;
let backgroundMap;
let doors;

//call constructor in Player.js file
const player = new Player({
  imageSrc: "./images/king-sprite/idle.png",
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./images/king-sprite/idle.png",
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./images/king-sprite/idleLeft.png",
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./images/king-sprite/runRight.png",
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./images/king-sprite/runLeft.png",
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 2,
      loop: false,
      imageSrc: "./images/king-sprite/enterDoor.png",
      onComplete: () => {
        console.log("animation complete");
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            if (level === 3) level = 1
            else level++
            levels[level].init();
            if(level === 3) player.switchSprite("idleLeft")
            else player.switchSprite("idleRight")
            player.preventInput = false;
            gsap.to(overlay, {
              opacity: 0,
            });
          },
        });
      },
    },
  },
});

let level = 3
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionMap1.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2d();
      player.collisionBlocks = collisionBlocks;

      if (player.currentAnimation) player.currentAnimation.isActive = false;

      player.position.x = 150

      backgroundMap = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./images/backgroundMap1.png",
      });

      doors = [
        // door to next level 
        new Sprite({
          position: {
            x: 150,
            y: 385,
          },
          imageSrc: "./images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
        //trivia door 1
        new Sprite({
            position: {
              x: 550,
              y: 385,
            },
            imageSrc: "./images/doorOpen.png",
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
          }),
          //trivia door 2
          new Sprite({
            position: {
              x: 650,
              y: 385,
            },
            imageSrc: "./images/doorOpen.png",
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
          }),
          //trivia door 3
          new Sprite({
            position: {
              x: 750,
              y: 385,
            },
            imageSrc: "./images/doorOpen.png",
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
          }),
      ];
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionMap4.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2d();
      player.collisionBlocks = collisionBlocks;
      player.position.x = 100;
      player.position.y = 100;

      if (player.currentAnimation) player.currentAnimation.isActive = false;

      backgroundMap = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./images/backgroundMap4.png",
      });

      //door to level
      doors = [
        //leads to map
        new Sprite({
          position: {
            x: 110,
            y: 191,
          },
          imageSrc: "./images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
        //leads to trivia
        new Sprite({
          position: {
            x: 120,
            y: 385,
          },
          imageSrc: "./images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
        //leads to trivia
        new Sprite({
          position: {
            x: 260,
            y: 385,
          },
          imageSrc: "./images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
        //door to trivia
        new Sprite({
          position: {
            x: 810,
            y: 285,
          },
          imageSrc: "./images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ];
    },
  },

  3: {
    init: () => {
      parsedCollisions = collisionMap2.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2d();
      player.collisionBlocks = collisionBlocks;

      if (player.currentAnimation) player.currentAnimation.isActive = false;

      player.position.x = 120

      backgroundMap = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: "./images/backgroundMap2.png",
      });

      doors = [
        // map door
        new Sprite({
          position: {
            x: 120,
            y: 320,
          },
          imageSrc: "./images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
        //trivia door 1
        new Sprite({
            position: {
              x: 420,
              y: 255,
            },
            imageSrc: "./images/doorOpen.png",
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
          }),
          //trivia door 2
          new Sprite({
            position: {
              x: 700,
              y: 385,
            },
            imageSrc: "./images/doorOpen.png",
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
          }),
          //trivia door 3
          new Sprite({
            position: {
              x: 800,
              y: 385,
            },
            imageSrc: "./images/doorOpen.png",
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
          }),
      ];
    },
  },
};

// Set default for keys
const keys = {
  w: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  Space: {
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

const overlay = {
  opacity: 0,
};

function animate() {
  window.requestAnimationFrame(animate);

  backgroundMap.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

  doors.forEach((door) => {
    door.draw();
  });

  player.velocity.x = 0;

  player.handleInput(keys);
  player.draw();
  player.update();

  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}

//listen for window resize events
window.addEventListener("resize", () => {
  //update canvas size on window resize
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

levels[level].init();
animate();
