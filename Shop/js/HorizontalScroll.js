  // JavaScript code for handling scroll behavior
  const container = document.getElementById('container-HorizontalScroll_id');
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    // When mouse button is pressed down on container
    isDown = true;
    startX = e.pageX - container.offsetLeft; // Starting X position of mouse
    scrollLeft = container.scrollLeft; // Current scroll position
  });

  container.addEventListener('mouseleave', () => {
    // When mouse leaves the container area
    isDown = false; // Reset flag
  });

  container.addEventListener('mouseup', () => {
    // When mouse button is released
    isDown = false; // Reset flag
  });

  container.addEventListener('mousemove', (e) => {
    // When mouse is moved inside the container
    if (!isDown) return; // If mouse button is not pressed, do nothing
    e.preventDefault(); // Prevent default scroll behavior
    const x = e.pageX - container.offsetLeft; // Current X position of mouse
    const walk = (x - startX) * 3; // Calculate the distance to move (scroll speed)
    container.scrollLeft = scrollLeft - walk; // Adjust scroll position
  });