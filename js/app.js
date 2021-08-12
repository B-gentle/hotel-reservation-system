$(function() {
	$(".btn").click(function(){
		$(".submenu").slideToggle(500);
	});
});

let x = document.querySelector('#checkInDate');
x.addEventListener('input', dueDate);

function dueDate() {
  let y = x.value;
  alert(parseInt(y) + 3);
  let c = document.createElement(input);
//   c.setAttribute(type)
};

let selectRoom = document.getElementById("select-room");
let chooseMeal = document.querySelector('#chooseMeal');
let roomPrice = document.getElementById('roomPrice');
let foodPrice = document.getElementById("foodPrice");
chooseMeal.addEventListener('change', pricetag)
selectRoom.addEventListener('change', pricet);
  
function pricetag(price, select) {
  return foodPrice.value  = chooseMeal.value;
}

function pricet() {
  return roomPrice.value = selectRoom.value;
}

// function pricetag(price, select) {
//   return price.value = select.value;
// }

// pricetag(roomPrice, selectRoom);
// pricetag(foodPrice, chooseMeal);

