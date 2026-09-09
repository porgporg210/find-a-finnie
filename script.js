// A list of high-quality placeholder images from Unsplash
const images = [
    "dog.jpeg",
    "finnie.jpeg"
    "finn.jpeg",
    "sleepy dog.jpeg",
    "dogg.jpeg",
    "dawg.jpeg",
    "cute dog.jpeg",
    "mega goofy.jpeg",
	"eepy.jpeg",
	"mega sleepy.jpeg",
	"doggg.jpeg",
	"silly.jpeg",
	"cute.jpeg",
	"bad.jpeg",
	"pretty.jpeg",
	"goofy.jpeg",
	 "bye.jpeg",
	 "strechy.jpeg",
	 "aww.jpeg",
	 "toy.jpeg",
	 "so cute.jpeg"
	
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
