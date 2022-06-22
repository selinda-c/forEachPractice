window.onload = function() {
let form = document.getElementById("groceries")

form.addEventListener("submit", function(event) { 
  event.preventDefault();
  let item1 = document.querySelector("input#item1").value;
  let item2 = document.querySelector('input#item2').value;
  let item3 = document.querySelector("input#item3").value;
  i1 = item1[0].toUpperCase() + item1.slice(1);
  i2 = item2[0].toUpperCase() + item2.slice(1);
  i3 = item3[0].toUpperCase() + item3.slice(1);
  const arrayOfItems = [i1, i2, i3];

  let sortedArray = arrayOfItems.sort();
  
  sortedArray.forEach(function(item){
    const itemList = document.querySelector("ul")
    const lineItem = document.createElement("li");
    lineItem.append(item)
    itemList.append(lineItem)
  });
});
};