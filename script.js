let randomChange = document.getElementById("randomChange");
images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg', 'image8.jpg','image9.jpg','image10.jpg','image11.jpg','image12.jpg','image13.jpg','image14.jpg','image15.jpg','image16.jpg','image17.jpg','image18.jpg',];

let imgCount =  images.length;

let number = Math.floor(Math.random() * imgCount);

window.onload = function(){

	randomChange.style.backgroundImage = "url("+images[number]+")";
	randomChange.style.backgroundSize = "cover";
	randomChange.style.backgroundPosition = "center";
}


function show_clock(){

	let h = document.getElementsByClassName('hr')[0];
	let m = document.getElementsByClassName('mn')[0];
	let s = document.getElementsByClassName('ss')[0];

	let date = new Date(); 

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
	m.style.transform = `rotate(${6 * minutes}deg)`;
	s.style.transform = `rotate(${6 * seconds}deg)`;

	let sound = new Audio('sound - Copy.mp3');
	sound.play();
}


setInterval(show_clock, 1000);