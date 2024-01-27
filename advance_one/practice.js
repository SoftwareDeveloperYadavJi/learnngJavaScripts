function promisPractice(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const value = false;
            if(value){
                console.log("Promis is await")
                resolve()
            }else{
                reject("Something went wrong")
            }
        })
    })
}

promisPractice().then((result) => {
    console.log("Promisis resolve ");
}).catch((err) => {
    console.log(err);
});