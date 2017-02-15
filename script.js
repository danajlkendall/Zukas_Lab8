var item1 = {name: "Avocados", price: 2.49};
var item2 = {name: "Almond Milk", price: 4.99};
var item3 = {name: "Granola", price: 5.49};
var item4 = {name: "Greek Yogurt", price: 1.25};

var list = [item1, item2, item3, item4];

for (var i=0; i<list.length; i++) {
  console.log(list[i].name+": $"+list[i].price);
};

var totalCost=0;

for (var i=0; i<list.length; i++) {
  totalCost = totalCost + list[i].price;
}

console.log("Total: $"+totalCost);
