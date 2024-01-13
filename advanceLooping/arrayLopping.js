const myarr = [1,2,3,4,5,6,7]


// sipmple for loop
// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element)
// }

// for of loop 
// for (const iterator of myarr) {
//     console.log(iterator)
// }


// function that does not have name called callback funtion


// forEach loop with arrow function
// In this function take three parameter first is the value ,index_number, and the array itself
// and these all parameter are not madatry to put you can put one or more                              
// myarr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


// For_Each loop with noraml function
// myarr.forEach(function(item){
//     console.log(item)
// })


// This is also possible we can write the function standlone and later pass it as refrance
// printMe = (val) =>{
//     console.log(val)
// }
// myarr.forEach(printMe)


const arrayObject = [
    {lagname:"java",
    extenstion:"Java"},
    {lagname:"JavaScripts",
    extenstion:"js"},
    {lagname:"Python",
    extenstion:"py"}
]

arrayObject.forEach( (item) =>{
    console.log(item.extenstion)
} )
