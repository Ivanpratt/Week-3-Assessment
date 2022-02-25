let colorButton = document.getElementById('color')
let placeButton = document.getElementById('place')
let ritualButton = document.getElementById('ritual')


let alertColorButton = function() {
    alert('My Favorite Color is Dark Blue')

}

let alertPlaceButton = function() {
    alert('my favorite Place is the mountains (anywhere warm)')
}

let alertRirtualButton = function() {
    alert('my favorite ritual is "The 3 X 33 Method" money ritual to manifest more money out of thin air')
}


colorButton.addEventListener('click', alertColorButton)
placeButton.addEventListener('click', alertPlaceButton)
ritualButton.addEventListener('click', alertRirtualButton)
