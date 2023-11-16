const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

class Sprite {
    constructor(position) {
        this.position = position
        this.image = new Image()
    }
}


//call constructor in Player.js file
const player = new Player()

// Set default for keys
const keys = {
    w: {
        pressed: false
    },
    ArrowUp: {
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
    } 

}

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width, canvas.height)

    player.velocity.x = 0

    if ((keys.d.pressed)||(keys.ArrowRight.pressed)) player.velocity.x = 5
    else if ((keys.s.pressed)||(keys.ArrowLeft.pressed)) player.velocity.x = -5
    player.draw()
    player.update()
}
animate()

