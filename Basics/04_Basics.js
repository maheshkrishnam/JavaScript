//      switch statement

/*
let month = "feb"

switch (month) {
  case 'jan':
    console.log("jan")            // if break is not at the end of every case then all the case will automatically run without checking for wheather it is true or not  --> except default
    break;
  case 'feb':
    console.log("feb")
    break;
  case 'march':
    console.log("march")
    break;
  
  default:
    break;
}
*/



////////////////////          LOOP        /////////////////////



/*
//    for of        --> arr, string, map

const arr = [1,2,3,4,5,6]
for (const num of arr) {
  // console.log(num)
}

const string = "Mahesh Krishnam"
for (const char of string) {
  // console.log(char)
}


//    map

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

for (const key of map) {        // prints as [key, value]
  // console.log(key)
}

for (const [key, value] of map) {       // so already defining it like [key, value] so that it can access key and value seperately
  // console.log(`${key} -> ${value}`)
}


//objects are not iterable through 'for of'

const obj = {
  name: 'Mahesh',
  rollNumber: 220120011
}
for (const key of obj) {
  // console.log(key)
}
*/



/*
//  for in        --> object, array
//                --> only key is obtained --> not its value

const obj = {
  name: 'Mahesh',
  rollNumber: 220120011,
}
for (const key in obj) {        //  key only returns all key value, not the value 
  // console.log(key)
}

for (const key in obj) {
  // console.log(`${key} -> ${obj[key]}`)        // you can do obj[key] to get its value at a particular key
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

for (const key in map) {        // map is not accessible with 'for in' loop
  console.log(key)            // nothing will be printed
}
*/



/*
//    forEach       -->   array
                //  never returns a value

const arr = [1,2,3,4,5,6,7]
arr.forEach(function (value) {            // we can use normal function but without giving it a name    --> no name given to the function
  // console.log(value)
});

arr.forEach(element => {            // can also use arrow function --> again without name of function
  // console.log(element)
});

function print(value) {
  // console.log(value)
}
arr.forEach(print)        // you have only to give function reference not to call function --> without ()

arr.forEach((value, index, array) => {
  // console.log(`value is: ${value}, index is: ${index}, array is: ${array}`)
})
                          // you can eve access more things from an array using 'forEach' loop like  --> index and array itself


const obj = [               // object inside array 
  {
    name: 'Mahesh',
    rollNumber: 220120011,
  },
  {
    name: 'Hitesh',
    rollNumber: 220120012,
  },
]
obj.forEach(element => {
  console.log(element.name)           // you can access object values in this way
});
*/



/*
//    filter()

const myArr = [1,2,3,4,5,6,7,8,9,10]

const filterArr1 = myArr.filter( (num) => num > 4 )       // if you are using inline or () paranthesis then you don't have to return anything
// console.log(filterArr1)

const filterArr2 = myArr.filter( (num) => {num > 4} )       // if you are using block then you have to use return statement to return something, if you don't return something it will return nothing
// console.log(filterArr2)

const mapArr = myArr.map( (num) => num + 10 )           // automatically return the final value after doing the given operation
// console.log(mapArr)
*/




//    reduce()

const myArr = [1,2,3,4,5,6]
const initialValue = 0            // initialValue can be directly passed into the reduce function
const reduceArr1 = myArr.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue )       // returns the sum of all element of myArr with initialValue added in it    --> used in shopping websites to add all price
console.log(reduceArr1)

const reduceArr2 = myArr.reduce( function (accumulator, currentValue)  {      //  using normal function above one was using arrow function
  return accumulator + currentValue }, initialValue )
console.log(reduceArr2)