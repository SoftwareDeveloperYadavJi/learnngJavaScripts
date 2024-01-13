const nums = [1,2,3,4]
const totalAmout = nums.reduce((accu,val) => (accu + val),0)

const totatPrice = nums.reduce(function (acc , val){
    return acc + val
},0)

// console.log(totatPrice);

const shopppingCart = [
    {corces:"JavaScripts Development",
    price:999},
    {corces:"Python Development",
    price:2391},
    {corces:"Java Development",
    price:2011},
    {corces:"backEnd Development",
    price:9199},
    {corces:"Mobile Development",
    price:1999}
]


// this is how we aad the all the value from the array object this is the real world senerio
const shopingValue = shopppingCart.reduce((acc,val) =>{
    return acc + val.price
},0)

console.log(shopingValue)