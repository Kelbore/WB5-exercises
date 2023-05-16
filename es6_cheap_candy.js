"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79}
];

const under4 = products.filter((item) => item.price < 4);
under4.forEach((item) => {
    console.log(item.price.toFixed(2), item.product);
});

const mandmCandy = products.filter((item) => item.product.indexOf('M&Ms') !== -1);
mandmCandy.forEach((item) => {
    console.log(`Candy ${item.product} has M&Ms in its name`);
})

//do we carry swedish fish
const foundFish = products.find((item) => item.product === 'Swedish Fish');
if(foundFish) {
    console.log('Yes, we have swedish fish');
} else  {
    console.log('No, we do not have swedish fish');
}