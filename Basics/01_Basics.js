/*
const a = 12;
let b = 13;
var c = 14;
console.table([a,b,c]);
*/


/*
console.log(typeof null)
console.log(typeof undefined)
*/


/*
let score = "12b";
console.log(score);
let scoreinnumber = Number(score);
console.log(scoreinnumber);
// scoreinnumber is not a number but its type is number (typeof == NaN)
// null => 0, true => 1, false => 0, undefinite => NaN
console.log(typeof scoreinnumber);
*/


/*
console.log( 1 + 2 + "2" )
console.log( "1" + 1 + 2 )
*/


/*
console.log(null > 0)           // null is getting converted into number when comparision operator is used
console.log(null == 0)          // but not when equality check is done
console.log(null <= 0)
*/


/*
console.log("2" === 2)       // === strictly check the value along with their datatype
*/



// Non Primitive datatype
// Array, Objects and Functions


// const Number = 1234567891234n         // adding n to last of the number make it a bigint datatype


/*
const Id = Symbol("123")        // datatype == function
const arr = [ "a", "b", "c"]        //defining array   --> datatype object
let myFunction = function(){        // defining function   --> function
  console.log("Hello Wolrd!")
}
console.log(typeof Symbol)
console.log(typeof arr)
console.log(typeof myFunction)
*/


/*
// primtive datatype --> stack --> send copy --> it does not make changes in original variable when made change in new variable
let nameOne = "Mahesh"
let nameTwo = nameOne
nameTwo = "Krishnam"
console.table([nameOne, nameTwo])


// non-primtive datatype --> heap --> send refrence --> it make changes in original variable when made change in new variable
let userOne = {
  email: "maheshkrishnam456@gmail.com",
  roll: "220120011",
}
let userTwo = userOne
userTwo.roll = "MC22BT011"
console.table([userOne, userTwo])       // email changed for both userOne and userTwo
*/


/*
const gameName = new String("MaheshFC")       // you can access various function by defining like this 
                                              // without writing in above forate you can access all these functions
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))
*/


/*
let name = new String ("  my--name--is--mahesh--krishnam    ")
console.log(name)
console.log(name.trim())                // only trim from starting and ending don't remove in between 
console.log(name.substring(0,5))
console.log(name.slice(-29,30))
console.log(name.includes('mahesh'))
console.log(name.replace('--', '-'))
console.log(name.replaceAll('--', '-'))
let nameArray = name.split('-')
console.log(nameArray)
*/


/*
let name = new String ("  my--name--is--mahesh--krishnam    ")
console.log(typeof name)
const numberObj = new Number(123.456)           // by setting new 'Number' or 'String' it set datatype to 'Object'
console.log(typeof numberObj)
let number = 123.456
console.log(typeof number)
console.log(number.toString())
console.log(number.toFixed(1))        // round off to 1 digit after decimal
console.log(number.toPrecision(5))        // precision will starts from first digit of number
number = 1000000
console.log(number.toLocaleString('en-IN'))       // represents as given location
*/


/*
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.ceil(Math.random()*10))        // range of Math.random() is [0,1)
let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min)) + min)        // it will range between min to (max - 1)
console.log(Math.floor(Math.random()*(max-min+1)) + min)        // it will range between (min + 1) to max
*/


/*
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())        // Sat Nov 25 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())        // Sat Nov 25 2023
console.log(myDate.toLocaleString())        // 25/11/2023, 11:47:10 am
console.log(myDate.toLocaleDateString())        // 25/11/2023
console.log(typeof myDate)                    // Date() is object datatype
console.log(myDate.toUTCString())       // Sat, 25 Nov 2023 06:21:50 GMT
console.log(myDate.toTimeString())        // 11:51:50 GMT+0530 (India Standard Time)
console.log(myDate.getTimezoneOffset())        // -330  --> it is the difference in minute from UTC time zone and Local time zone
*/


/*
let myCreatedDate = new Date(2023, 10, 25)        // (year, month--, date, hour, minute, second)    --> month starts from index 0
console.log(myCreatedDate)
console.log(myCreatedDate.toString())
myCreatedDate = new Date("25-11-2023")        // way to represent "Date" in "String" form   --> dd-mm-yyyy or you can also represent in the form of yyyy-mm-dd
console.log(myCreatedDate.toLocaleString)
*/


/*
let mytimeStamp = Date.now()
console.log(mytimeStamp)
console.log(mytimeStamp.toLocaleString())
*/


/*
let date = new Date()
console.log(date)
console.log("Year is " + date.getFullYear())
console.log("Month is " + (date.getMonth() + 1))        // Month start from index zero
console.log("Date is " + date.getDate())
console.log("Date is " + date.getDay())
console.log("Hour is " + date.getHours())
console.log("Minute is " + date.getMinutes())
console.log("Second is " + date.getSeconds())
console.log("Time is " + date.getTime())
*/


/*
let newDate = new Date()
console.log(newDate.toLocaleString('default', {
  year: "numeric",        // write full year -->  2023
  // year: "2-digit",       // write just 23
  month: "short",
  weekday: "long",
}))
*/
