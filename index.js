const button = document.getElementById('movingButton');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (event) => {
    // Get the mouse position relative to the container
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the button's position and dimensions
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    // Calculate the distance between the mouse and the button
    const distanceX = mouseX - buttonX;
    const distanceY = mouseY - buttonY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Set a threshold distance to trigger the button move
    const threshold = 80; // pixels

    // If the mouse is within the threshold, move the button
    if (distance < threshold) {
        // Calculate a new random position for the button within the container
        const containerRect = container.getBoundingClientRect();
        const newLeft = Math.random() * (containerRect.width - buttonRect.width);
        const newTop = Math.random() * (containerRect.height - buttonRect.height);

        // Apply the new position
        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
    }
});
