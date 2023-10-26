document.addEventListener("DOMContentLoaded", function() {
  // BEGIN: abpxx6d04wxr
  // Get the object to be bounced
  const object = document.getElementById("myObject");

  // Set the initial position and velocity of the object
  let x = 0;
  let y = 0;
  let vx = 7;
  let vy = 7;

  // Set the angle of the diagonal in degrees
  const angle = 40;

  // Convert the angle to radians
  const radians = angle * Math.PI / 180;

  // Set the slope of the diagonal
  const slope = Math.tan(radians);

  // Set the position and velocity update function
  function update() {
      // Update the position of the object
      x += vx;
      y += vy;

      // Check if the object has hit the left or right wall
      if (x < 0 || x + object.offsetWidth > window.innerWidth) {
          // Reverse the x velocity
          vx = -vx;
      }

      // Check if the object has hit the top or bottom wall
      if (y < 0 || y + object.offsetHeight > window.innerHeight) {
          // Reverse the y velocity
          vy = -vy;
      }

      // Check if the object has hit the diagonal
      if (y > slope * x) {
          // Reverse the y velocity
          vy = -vy;
      }

      // Update the position of the object
      object.style.left = x + "px";
      object.style.top = y + "px";
  }

  // Set the update interval
  setInterval(update, 25);
  // END: abpxx6d04wxr
});
