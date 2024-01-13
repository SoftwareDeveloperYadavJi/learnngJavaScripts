// this automaticaly  return new array
const newArray = [1,2,3,4,5,6,7,8,9,10]

const newlyAddArray = newArray.map((item) => (item +10  ) )


// chainning is thw way by which we can combine multiple differt method or function it can be same or different
// hear we are using multiple method for the diser result 
const newopration = newArray.map((item) => item * 10).map((item) => item + 1).filter((item) => item > 50)

console.log(newopration)