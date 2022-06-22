window.onload = function() {

let item1 = document.querySelector("item1");
let item2 = document.querySelector('item2');
let item3 = document.querySelector("item3");
const arrayOfItems = [item1, item2, item3];
let form = document.getElementById("groceries")

let sortedArray = arrayOfItems.sort();

form.addEventListener("submit", function(event) { 
  
  event.preventDefault();
})
}