function shiftColor() {
    // Generate random RGB values
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Set the background color to the random RGB values
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Call the shiftColor function every 2000 milliseconds (2 second)
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'background-color 2s ease';
    setInterval(shiftColor, 2000);
});
