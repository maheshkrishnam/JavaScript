/////////////////////////////////       FUNCTION        ////////////////////////////////


/*
function sum(num1, num2){       // it have two paramenter as num1 and num2 

}
sum       // --> it is just refrence 
sum(3, 5)       // --> after using paranthesis, function is called
                // when values are passed by calling function it is called arguement
*/


/*
function user(username = "Mahesh"){       // default value is taken as "Mahesh" if not given as arguement during function call
  return `${username} just logged in`
}

console.log(user("Hitesh"))
console.log(user())
*/


/*
function calculateSum(...args){       // ... are both spread and rest operator
  return args                             // return an array of the parameter args
}
console.log(calculateSum(100, 200, 300, 400))


function userDetail(user){
  return `Our user is ${user.name} and customer id is ${user.id}`
}
const Mahesh = {
  name: "Mahesh Krishnam",
  id: 220120011
}
console.log(userDetail(Mahesh))

function arrElement(arr, element){
  return arr[element-1]
}
const arr = [1,2,3,4,5]
console.log(arrElement(arr, 3))
*/


/*
console.log(addOne(5))        // when we declare function without storing it inside a variable, then it is accessable before the function call also
function addOne(num){
  return num + 1
}

console.log(addTwo(5))        // but when we try to access a function before decclaration when it is stored instored inside a variable, then it leads to error
const two = function addTwo(num){
  return num + 2}
*/


/*
const username = "mahesh"

const user = {
  username: "Mahesh",
  rollNumber: 220120011,
  fun: function(){
    console.log(this)
  },
}

username: "mahesh"
user.fun()            // it prints the values inside object user 
console.log(this)         // it does not print anything just {}  --> it doesn't have to do with elements inside onbjects also not printing that is written outside all the objects like username = "mahesh"
                      // when console.log(this) is run on webpage it give some value as it has this as 'window object'
function fun(){
  let username = "mahesh"
  console.log(this)             // when this is called inside a function it give the global properties
  console.log(this.username)        // this don't work in function  --> only works inside objects
}
fun()

const one = function(){
  let username = "mahesh"
  console.log(this)
  console.log(this.username)
}
console.log(one())
*/



/*
// Arrow Function

const sum = (num1, num2) => (num1 + num2)       // while using array function only use () and no use of return
console.log(sum(4,5))
const objReturn = () => ({username: "mahesh"})        // while returning an object, we have to write object inside ()
console.log(objReturn())
*/


/*
// IIFE  --> done to remove pollution caused due to global scope variable or decrlaration

( function one(){
  console.log("Connected")
})();                               // --> last paranthesis is used to immediately call the function or you can just say its the syntex to immediately call the function for execution
                                // --> semicolon is neccessary to avoid error here, as we have to tell the immediately invoked function where it have to stop and don't cause error when another IIFE is called
( (name) => {
  console.log(`${name} Connected`)
})("Mahesh")                        // way of giving arguement to the IIFE
*/



