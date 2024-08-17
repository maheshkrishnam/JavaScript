// Deep copy --> don't share the same refrence point, means its copy change then it will not change
// Shallow copy --> it share the same refrence point, if one change another will change


////////////////////////////////        ARRAY         ////////////////////////////////


/*
let arr = [1, 2, 3, 4, 5]
console.log(arr[1])

// --->  array methods <-- //
arr.push(6)       // enter the new element in last of array
console.log(arr)
arr.pop()        // remove element from last of array
console.log(arr)

arr.unshift(9)        // insert element in the starting of the array  --> leads to shift in all elements  --> bad for competitive programming
console.log(arr)
arr.shift()       // remove the element from the starting of the array
console.log(arr)

console.log(arr.includes(2))
console.log(arr.indexOf(2))

let joinArr = arr.join()        // function join() will join the elements of array with 'comma' seperation
console.log(joinArr)
console.log(typeof joinArr)       // --> data type will become "String"
*/


/*
const newArr = [-1,0,1,2,3,4]
console.log(newArr)
const sliceArr = newArr.slice(0,3)        // --> slice <--  don't change the original array it just make a copy of a given section of array, here [0,3)
console.log(sliceArr)
console.log(newArr)

const spliceArr = newArr.splice(0,3)        // --> splice <--  cut out the mentioned part out and also make a change in original array
console.log(spliceArr)
console.log(newArr)
*/


/*
const marvel = ['ironman', 'thor', 'captain america']
const dc = ['superman', 'wonder woman', 'flash']

// marvel.push(dc)
// console.log(marvel)       // push the entire array dc as an element in array marvel  --> make changes in the original array
// console.log(marvel.concat(dc))        // concatinate each element of dc into marvel  --> make changes in original array

const spreadArray = [...marvel, ...dc]      // better than concat, majorly used  --> spread each item of marvel and dc and insert into a new array  --> don't changes the original array
console.log(spreadArray)
console.log(marvel)
*/


/*
const Arr = [1,2,3,[4,5,6,[7,8,9]],10,[11,12],13,14,[15]]
console.log(Arr.flat(1))        // flat returns all the element inisde a single array   --> we have to give the depth of array, till where we have to solve the array

console.log(Array.isArray(Arr))
console.log(Array.from("Mahesh"))
console.log(Array.of(100,200,300))
*/






////////////////////////////////        OBJECT        ////////////////////////////////




/*          // Object literals

const sym = Symbol("symbol one")

const user = {
  name : "Mahesh Krishnam",
  rollNumber : 220120011,
  email: "220120011@iit.ac.in",       // every key is taken by system as string like here email is taken as "email"
  "college Name": "IIT Dharwad",        // already written as "college Name"  --> if we can't write it inside " ", there is no way we can access its value
  [sym]: "symbol1",               // symbol is written inside []   --> type is string
  fun: function(){
    console.log("Hello Mahesh");       // function inside Object
    return this.name           //  ** it will print this.name  --> (this refers to the obejct inside which it is written)   --> if nothing was returned it will become a void function and then return nothing then it will print "undefined"
  },
  insideUser: {           // Object inside Object
    Name: "Mahesh",
    "Roll Number": 2,
  },
  day: ["Monday", "Tuesday"],
  areYouFine: true,
}

console.log(user)       // symbol is written like this -->  [Symbol(symbol one)]: 'symbol1'
console.log(user.name)
console.log(user.email)
console.log(user["college Name"])       // we can print value by two ways  --> first by '.'   and   --> second by putting it in square bracket 
console.log(user.fun())       // function 
console.log(user.insideUser["Name"])
console.log(user.insideUser.Name)
console.log(user[sym])
console.log(typeof user[sym]) 

user.email = "MC22BT011@iitdh.ac.in"
console.log(user.email)

// Object.freeze(user)        // freeze the object given inside it  --> don't let user to change any of its value

user.address = "Mathiyapur, Danapur cantt, Patna"
console.log(user)                                 // symbol always written in last output in user even if you add something like i have added address, but then also symbol came in last
console.log(user.address)

*/




          // Object singleton

/*
const Obj1 = {}       // --> Non singleton
const Obj2 = new Object()       // --> Singleton object
console.log(Obj1 , Obj2)        // both have same internal thing only difference is their declaration
*/



/*
const obj = {
  user: {
    fullname: {
      firstName: "Mahesh",
      lastName: "Krishnam",
    }
  }
}
console.log(obj.user.fullname)
console.log(obj.user.fullname.firstName)        // we can do as many looping of object we want
*/



/*
const obj1 ={
  1:'A', 2:'B', 3:'C',
}
const obj2 ={
  4:'D', 5:'E',
}
const obj3 ={
  6:'F', 7:'G', 8:'H',
}

// const obj4 ={obj1, obj2, obj3}        // this will lead to make objects inside object
// console.log(obj4)

// to overcome thia issue we will use Object. assign({}, obj1, obj2, obj3)
const obj4 = Object.assign({}, obj1, obj2, obj3)        // Object.assign have two arguement first as "target" and another as source, here target is {} and sources are  obj1, obj2 and obj3  --> all these three objects are going or appending in {}, which is an empty object and it is prefered to use an empty object to make merge many objects
console.log(obj4)

// method 2
const obj5 = {...obj1, ...obj2, ...obj3}        // ... is spread operator
console.log(obj5)

console.log(Object.keys(obj1))        // return all the key as string array
console.log(Object.values(obj1))        // return all the value as string array
console.log(obj1.hasOwnProperty('1'))       // check for a particular property given as arguement
*/


/*
const user = {
  name: "mahesh",
  rollNumber: 220120011,
  email: "220120011@iitdh.ac.in",
}
const {email} = user        //  destructuring Object    --> we can also destructure array
console.log(email)
const {rollNumber: roll} =  (user)      // we can assign short name for the longer key in object while destructuring
console.log(roll)
*/