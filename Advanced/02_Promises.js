//  way 1

const promiseOne = new Promise((resolve, reject) => {           // Promise is an object in JS, if promise is complete it will produce a resolve value and if something went wrong it will produce the reason of failure
  setTimeout(() => {
    resolve();                        // resolve connect promise to its then value  --> promiseOne connects to promiseOne.then()
    console.log('Async task 1');
  }, 1000);
})

promiseOne.then(() => {
  console.log('Async 1 resolved');        //  **it will always execute after the task given to the promise is completed -->  wheather you keep resolve above or below
})



//  way 2

new Promise(function (resolve, reject) {
  setTimeout(function(){
    console.log('Async task 2');
    resolve();
  }, 2000);
}).then(function(){
  console.log('Async 2 resolved');
})



// way 3

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    //  work to be done 
    resolve({username: 'Mahesh', email: '220120011@iitdh.ac.in'});        //  data obtained by doing work is passed into resolve()
  }, 1000)
})

promiseThree.then(function(data){           //  then() funtion will take the data passed into resolve()
  console.log(data);                        //  it will be done earlier than promise in way 2 because it was called after 2000 ms later
})



// way 4

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    const error = true;
    if (!error){
      resolve({username: 'Mahesh Krishnam', rollNumber: 220120011});
    } else{
      reject("E: error detected");              // when you write reject in the promise function then you have to call catch function after --> if not done it will give an error
    }
  }, 1000)
})

const storePromise = promiseFour.then(function(user){        //  return statement of then is sent to next then after it, it can't be stored inside a variable
  console.log(user);
  return user.username;
}).then(function(username){               //  you can make a ladder of then --> return statement in previous then is send to next then 
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(function(){
  console.log('Promise is either complete or something went wrong');            //  it is the default funtion that run while performing promise
})

// console.log(storePromise);        //  it will show that promise is pending means promise is not completed yet



//  way 5

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    const error = false;
    if (!error){
      resolve({username: 'Mahesh Krishnam', rollNumber: 220120011});
    } else{
      reject("E: error detected in promise five");              // when you write reject in the promise function then you have to call catch function after --> if not done it will give an error
    }
  }, 1000)
})

async function promiseFiveResponse(){               //  use of async and await (using try ans catch inside async function) instead of then and catch            --> async make a function return a promise 
  try {
    const response = await promiseFive;           //  await makes a function to wait for a promise
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}
promiseFiveResponse()



// async function getAllUser(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('E: ', error);
//   }
// }
// getAllUser()



fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data);
})
.catch(function(error){
  console.log(error);
})