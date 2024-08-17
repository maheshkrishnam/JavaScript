

// * debounce


const input = document.querySelector(".input");
const output = document.querySelector(".output");

const debounce = function(fn, time){
  let id = null;
  return function(){
    if(id){
      clearTimeout(id);
    }
    id = setTimeout(fn, time);
  }
}

const fWrite = ()=>{
  output.innerHTML = input.value;
}

input.addEventListener('keyup', 
  debounce(fWrite, 1000)
)

let count = 0;

const f = ()=>{
  count++;
  console.log("count : " + count);
}


const func = function(fn, time){
  let id = null;
  return function(){
    if(id){
      clearTimeout(id);
    }
    id = setTimeout(fn, time);
  }
}

const r = func(f, 3000);
// setTimeout(r, 1000);
// setTimeout(r, 1000);
// setTimeout(r, 1000);r




const person = {
  name: "Mahesh",
  rollNumber: 220120011,
}

function checkName(){
  return !!this.name;
}

// * these are four way you can call or assign a object or something a method 

// checkName();
person.checkName = checkName;                       // assigning person a method
const result1 = person.checkName();
// console.log(result1);

const result2 = checkName.call(person);
// console.log(result2);

const assignFn1 = checkName.bind(person);              // assigning function so that we can use it later
// console.log(assignFn1());

const assignFn2 = checkName.apply(person);
// console.log(assignFn2);






const obj = {
  name: "Mahesh",
  fn: function (x){
    console.log(`name is: ${this.name} and passed arguement is ${x}`);
  }
  // fn: (x)=>{
  //   console.log(x);
  // }
}

const memoizedFn = (fx)=>{
  const map = new Map();
  return function (x){
    if(map.has(x)){
      console.log("memo");
      return map.get(x);
    } else{
      const memoVal = fx.call(this, x);
      map.set(x, memoVal);
      console.log("no memo");
      return memoVal;
    }
  }
} 

obj.memoizedFn = memoizedFn(obj.fn);
// obj.memoizedFn(1);
// obj.memoizedFn(2);
// obj.memoizedFn(1);