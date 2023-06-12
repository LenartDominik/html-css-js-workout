// Get the .box element
let box = document.querySelector('.box');

// Define an array of colors
let colors = ['red', 'blue', 'green', 'yellow'];

// Set an initial color
let currentIndex = 0;
box.style.borderColor = colors[currentIndex];

// Use setInterval to change the border color every 3 seconds
setInterval(function () {
	currentIndex = (currentIndex + 1) % colors.length;
	box.style.borderColor = colors[currentIndex];
}, 3000);
