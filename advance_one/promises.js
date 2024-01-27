const promisOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task Done")
        resolve()
    },1000)
})


promisOne.then(function(){
    console.log("Promis is complete")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
    },1000)
}).then(function(){
    console.log("Asyn task 2 complete")
})


const PromisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "example@.com"})
    },1000)
})

PromisThree.then(function(user){
    console.log(user);
})


const pormisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "nitin@1524",password : "123"})
        }else{
            reject("Error : Something went wrong")
        }
    },1000)
})

pormisFour.then(function(user){
    console.log(user)
    return user.username
}).then((user)=>{
    console.log(user);
}).catch(function(error){
    console.log(error);
})
