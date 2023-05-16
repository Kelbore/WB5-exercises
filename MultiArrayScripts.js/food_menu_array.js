let menu = [
    [
      {item: "Sausage and Egg Biscuit", price: 3.69},
      {item: "Bacon and Egg Biscuit", price: 3.49},
      {item: "Ham and Egg Biscuit", price: 3.29}
    ],
    [
      {item: "Cheese Burger", price: 4.49},
      {item: "Chicken Sandwich", price: 5.29},
      {item: "Hamburger", price: 3.99},
      {item: "Fried Rice", price: 6.99}  
    ],
    [
      {item: "Awaze Tibs", price: 9.99},
      {item: "Kitfo", price: 11.99},
      {item: "Derek Tibs", price: 9.99}, 
      {item: "Banatu", price: 10.99},
      {item: "Beyeayinetu", price: 8.99} 
    ]
];

const mealIndex = 0;
const mealNames = ["Breakfast", "Lunch", "Dinner"];
console.log(mealNames[mealIndex], 'Menu');
menu[mealIndex].forEach((food) => 
    console.log('-',food.item)
);

