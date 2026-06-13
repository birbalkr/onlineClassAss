// Find Expensive Products

let prices= [100,250,500,150,700];

var newArray = prices.filter(function(price){
    return price > 300;
})

console.log(newArray);
