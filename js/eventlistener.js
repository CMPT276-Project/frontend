//Event Listener for Pushing Keydown
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    // move player up
    case "w":
    case "Space":
    case "ArrowUp":
      if (player.velocity.y === 0) {
        player.velocity.y = -15;
        break;
      }
    //move player to the right
    case "d":
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    //move player to the left
    case "a":
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
  }
});

//Event listener for letting go of key, i.e velocity = 0
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    //move player to the right
    case "d":
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    //move player to the left
    case "a":
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
  }
});
