//Event Listener for Pushing Keydown
window.addEventListener("keydown", (event) => {
  if (player.preventInput) return;
  switch (event.key) {
    // move player up
    case "w":
      if (player.velocity.y === 0) {
        player.velocity.y = -20;
      }
      break;
    case "ArrowUp":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.preventInput = true;
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.switchSprite("enterDoor");
          door.play();
          //if collision then return do not jump
          return;
        }
      }
      if (player.velocity.y === 0) player.velocity.y = -20;
      break;
    case "Space":
      if (player.velocity.y === 0) {
        player.velocity.y = -20;
      }
      break;
    //move player to the right
    case "d":
      keys.d.pressed = true;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    //move player to the left
    case "a":
      keys.a.pressed = true;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
  }
});

//Event listener for letting go of key, i.e velocity = 0
window.addEventListener("keyup", (event) => {
  console.log(event);
  switch (event.key) {
    //move player to the right
    case "d":
      keys.d.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    //move player to the left
    case "a":
      keys.a.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
  }
});
