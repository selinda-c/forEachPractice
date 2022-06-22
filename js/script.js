window.onload = function() {
let form = document.getElementById("groceries")

form.addEventListener("submit", function(event) { 
  event.preventDefault();
  let item1 = document.querySelector("input#item1").value.toUpperCase();
  let item2 = document.querySelector('input#item2').value.toUpperCase();
  let item3 = document.querySelector("input#item3").value.toUpperCase();
  const arrayOfItems = [item1, item2, item3];

  let sortedArray = arrayOfItems.sort();
  
  sortedArray.forEach(function(item){
    const itemList = document.querySelector("ul")
    const lineItem = document.createElement("li");
    lineItem.append(item)
    itemList.append(lineItem)
  });
});
};