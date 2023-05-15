let cart = [
    { item: 'Bread', price: 3.29, quantity: 2 },
    { item: 'Milk', price: 4.09, quantity: 1 },
    { item: 'T-Bone Steak', price: 12.99, quantity: 2 },
    { item: 'Baking Potato', price: 1.89, quantity: 6 },
    { item: 'Iceberg Lettuce', price: 2.06, quantity: 1 },
    { item: 'Ice Cream - Vanilla', price: 6.81, quantity: 1 },
    { item: 'Apples', price: 0.66, quantity: 6 },
  ];

  //forEach loop
  function onlyTheName(array) {
    return array.item;
  }

  let arrayList = cart.map(onlyTheName);

  function displayName(array) {
    console.log(array);
  }
  
  arrayList.forEach(displayName);

  // reduce function
  function getSum(sum, item) {
    const elementCost = item.price * item.quantity;
    sum += elementCost;
    return sum;
  }
 
  let total = cart.reduce(getSum, 0);
  console.log("---");
  console.log(`The total cost is ${total}`);
  console.log("---");

  //sort the list
  cart.sort(function (a,b){
    if(a.item < b.item) return -1;
    else if (a.item === b.item) return 0;
    else return 1;
  });

  for(const itemName of cart) {
    console.log(itemName.item);
  }
