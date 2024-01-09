// when we make the object construct then it's singleton 
// when we make the object form literal then it's not consider as singleton


// object is like a key value pair 
const myObj = {
    name:"Nitin",
    age:20,
    cores:"computer Science",
    university: "parul"
}

// console.log(myObj["name"]);
myObj.age = 10

 //Object.freeze(myObj)// this funcation fress the object and futher user will not able to change the any data


// myObj.name = "kajal"
// console.log(myObj)

// console.log(myObj);

myObj.greeting = function(){
    console.log(`hello good after noon ${this.name}`)
}


// console.log(Object.values(myObj))


const obj2 = {1:"a", 2:"b", 3:"c"}
const obj3 = {4:"l",6:"y",9:'"p'}

const combineObj = {obj2,obj3} 


const newCombination = Object.assign({},obj2,obj3)
const usingSprerador = {...obj2 , ...obj3}

// console.log(newCombination);
// console.log(usingSprerador)
// console.log(combineObj);

const getkety = Object.keys(newCombination)
// console.log(getkety)

const user = [
    {
        id:1,
        email:"nitiny1524@gmail.com"
    },
    {

    },
    {

    }
]
// console.log(user[0].email)


const tinderUser = {
    id:"Nitin",
    logIn:[12,3,34,4],
    proferseion:"Engginer",
    working: "Microsoft"
}

// console.log(Object.keys(tinderUser)) // this make the array of every keys in the object
// console.log(Object.values(tinderUser)) // this make the array of every value in the Object
// console.log(Object.entries(tinderUser)) // this make the array of every key and value differently



// console.log(tinderUser.hasOwnProperty('place')) // this cheak weather the preporty os blong to the perticular object or not


