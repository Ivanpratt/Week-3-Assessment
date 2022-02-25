console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let duckImage = document.getElementById('duckImage')

function userCompliment() {
	let compliments = ["Beautiful", "Breathtaking", "BStunning"];

	let finalCompliment = compliments[Math.floor(Math.random() * compliments.length)];

	alert(`You are ${finalCompliment}!`);
}


duckImage.addEventListener('mouseover', userCompliment)