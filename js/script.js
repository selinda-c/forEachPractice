window.onload = function() {
let form = document.getElementById("groceries")

form.addEventListener("submit", function(event) { 
  event.preventDefault();
  let item1 = document.querySelector("input#item1").value;
  let item2 = document.querySelector('input#item2').value;
  let item3 = document.querySelector("input#item3").value;
  const arrayOfItems = [item1, item2, item3];

  let sortedArray = arrayOfItems.sort();
  
  sortedArray.forEach(function(item){
    const itemList = document.getElementById("itemList")
    const lineItem = document.createElement("li");
    const addItem = lineItem.append(item)
    itemList.append(addItem)
  });
})
}