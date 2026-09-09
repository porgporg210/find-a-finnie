// A list of high-quality placeholder images from Unsplash
const images = [
    "img src="dog.jpeg",
    "images/finnie.jpeg",
    "images/finn.jpeg",
    "images/sleepy dog.jpeg",
    "images/dogg.jpeg",
    "images/dawg.jpeg",
    "images/cute dog.jpeg",
    "images/mega goofy.jpeg",
	"images/eepy.jpeg",
	"images/mega sleepy.jpeg",
	"images/doggg.jpeg",
	"images/silly.jpeg",
	"images/cute.jpeg",
	"images/bad.jpeg",
	"images/pretty.jpeg",
	"images/goofy.jpeg",
	 "images/bye.jpeg",
	 "images/strechy.jpeg",
	 "images/aww.jpeg",
	 "images/toy.jpeg",
	 "images/so cute.jpeg"
	
];

// 1. Get the current date
const today = new Date();

// 2. Create a unique number for today (YYYYMMDD format)
const dateString = today.getFullYear().toString() + 
                   (today.getMonth() + 1).toString().padStart(2, '0') + 
                   today.getDate().toString().padStart(2, '0');

// 3. Turn the date string into a regular number
const dateNum = parseInt(dateString);

// 4. Use the math modulo (%) operator to pick an index based on the date
// This guarantees it picks a number between 0 and the end of your list
const imageIndex = dateNum % images.length;

// 5. Update the website image with our chosen picture
document.getElementById('daily-image').src = images[imageIndex];
