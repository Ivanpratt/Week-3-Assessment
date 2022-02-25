let pickerButton = document.getElementById('randombutton')
let RestaurantOfChoice = document.getElementById('randomText')

function pickRestaurant() {
	let restaurantArray = ["Little India", "El Mexiquense Grill", "Braza Grill", "Sabaidee", "Aubergine Kitchen", "Harvest Restaurant", "Slapfish", "Porky's Kaua'i", "Laid back Poke Shack", "Chubby's Cafe"];

	let pickedRestaurant = restaurantArray[Math.floor(Math.random() * restaurantArray.length)];

    RestaurantOfChoice.textContent = `. Your new Restaurant of Choice is: ${pickedRestaurant}`
}





pickerButton.addEventListener('click', pickRestaurant)