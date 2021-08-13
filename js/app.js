$(function() {
	$(".btn").click(function(){
		$(".submenu").slideToggle(500);
	});
});

let checkInDate = document.querySelector('#checkInDate');
let duration = document.querySelector('#duration');
let checkOutDate = document.querySelector('#checkOutDate');
console.log(duration);
duration.addEventListener('input', dueDate);

function dueDate() {
  let durationValue = duration.value;
  let checkInDateValue = checkInDate.value;

  if (durationValue  && checkInDateValue){
    let outputDate = parseFloat(checkInDateValue + durationValue);
    checkOutDate.value = outputDate;
    alert(durationValue);
  //   c.setAttribute(type)
  }else{
    alert("enter duration");
  };
  
};

let selectRoom = document.getElementById("select-room");
let chooseMeal = document.querySelector('#chooseMeal');
let roomPrice = document.getElementById('roomPrice');
let foodPrice = document.getElementById("foodPrice");
chooseMeal.addEventListener('change', pricetag);
selectRoom.addEventListener('change', pricet);
  
function pricetag() {
 foodPrice.value  = chooseMeal.value;
 }

function pricet() {
   roomPrice.value = selectRoom.value;
}

