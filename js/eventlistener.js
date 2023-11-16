//Event Listener for Pushing Keydown
window.addEventListener('keydown', (event) => {
    console.log(event)
    switch(event.key){
        // move player up
        case 'w':
            if (player.velocity.y === 0){
                player.velocity.y = -15
                break
            }
        case 'ArrowUp':
            if (player.velocity.y === 0){
                player.velocity.y = -15
                break
            }
        //move player to the right
        case 'd':
            keys.d.pressed = true
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            break
        //move player to the left
        case 'a':
            keys.a.pressed = true
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break 
    }
})

//Event listener for letting go of key, i.e velocity = 0
window.addEventListener('keyup', (event) => {
    console.log(event)
    switch(event.key){
        //move player to the right
        case 'd':
            keys.d.pressed = false
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        //move player to the left
        case 'a':
            keys.a.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break 
    }
})