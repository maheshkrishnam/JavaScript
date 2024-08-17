/*
const promiseOne = new Promise();       // new is constructure function here --> create multiple instances from same object literals
const data = new Date();                // every time it will give a new copy(instances) of that function in which you can work;
// empty object is created --> constructure function is called every time --> inject values --> you will get a new instance
*/

function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  return this;
}

const user1 = User('Mahesh', 123, '220120011@.iitdh.ac.in');      // without writting new it will also give some extra details about node
const user2 = User('Hitesh', 456, '220120012@.iitdh.ac.in');      // also overwrite the old properties

// console.log(user1);
// console.log(user2);

const user3 = new User('Mahesh', 123, '220120011@.iitdh.ac.in');      // new keyword preserve the uniqueness of the object 
const user4 = new User('Hitesh', 456, '220120012@.iitdh.ac.in');      // it creates a fresh new instance of object
// console.log(user3);
// console.log(user4);





//  Prototype     --> prototypal behaviour
// --> comes through new keyword
// every thing in js is Object or every thing in js takes object property after multiple inheritence  --> object as parent
// object have null as parent 
// if new property is linked to prototype of a object then new keyword helps new property to get linked with object


function square(num){
  return num*num;
}
square.power = 2;

// console.log(square(5));
// console.log(square.power);
// console.log(square.prototype);

function createUser(name, password){
  this.name = name;
  this.password = password;
}

createUser.prototype.changePassword = function(){
  this.password = 123456789;
}

createUser.prototype.printMe = function(){
  // console.log(`${this.password}`);
}

const user5 = new createUser('Mahesh', 123);
const user6 = createUser('Hitesh', 123);

// user6,printMe();        // it will give error as no new prototype is injected inside object
user5.printMe();        // using new we have injected new protypal behaviour of object inside it

user5.changePassword();       // password changed
user5.printMe();



const hero = {
  spiderman: 'sling',
  thor: 'bijli',
  blackpanther: 'blacpanther',
}

Object.prototype.sayHii = function(){           // inserting property sayHii into the Object --> highest heirarchy
  console.log("Hii");
}

// hero.sayHii();

const arr = [1,2,3,4];
Array.prototype.sayHello = function(){
  console.log('Hello');
}

// hero.sayHello();               // it will give error as hero is object type dataype and we have only given Array property of sayHello
// arr.sayHello();





// call

function createPlayer1(username, password, email) {
  this.username = username;                                 // we have set username through this.username what if we want to do it with a function
  this.password = password;
  this.email = email;
}

const player1 = new createPlayer1('Mahesh', 1234, 'game@gamil.com');
// console.log(player1)


function setUsername(username){
  this.username = username;                     // this represent setUsername but not the username coming from the database
    // when setUsername is called and then done it will delete this.username after calling itself
}

function createPlayer2(username, password, email) {
  // setUsername(username);
  setUsername.call(this, username);          // we are giving this as setUsername get deleted after execution and this.username together get deleted --> if we give this refrence into the function into the setUsername then it will set the value and then get deleted  -> we are using .call to call and store the value into this refrenced to createPlayer2
  this.password = password;
  this.email = email;
}

const player2 = new createPlayer2('Mahesh', 1234, 'game@gamil.com');
// console.log(player2);





//  Class

class creatingUser{
  constructor(username, id, password){
    this.username = username;
    this.id = id;
    this.password = password;
  }

  changeUsername(){
    return `${this.username.toUpperCase()}`
  }

  changePassword(){
    return `${this.password}abc`
  }
}

const user7 = new creatingUser('Mahesh', 2, 123);            // new keyword is used to invoke class constructor
// console.log(user7);

// behind the scene

function cUser(username, id, password){
  this.username = username;
  this.id = id;
  this.password = password;
}

cUser.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`;
}

cUser.prototype.changePassword = function(){
  return `${this.password}abc`;
}

const user8 = new cUser('Hitesh', 1, 1234);            // new keyword is used to invoke class constructor
// console.log(user8);

// upto here




//  Extending class       --> giving extended class all features of old one from which it get extended

class userTeacher{
  constructor(username){
    this.username = username;
  }
  logMe(){
    console.log(`Username : ${this.username}`);
  }
}

class Teacher extends userTeacher{
  constructor(username, subject, email, password){
    super(username);                           // this.username = username;
    this.subject = subject;
    this.email = email;
    this.password = password;
  }

  addSubject(subject){
    console.log(`${subject} added by ${this.username}`);
  }
}

const Mahesh = new Teacher('Mahesh', 'Chemistry', 'mahesh@gmail.com', 123);
const Hitesh = new Teacher('Hitesh', 'Physics', 'hitesh@gmail.com', 123);

// Mahesh.addSubject('Mathematics');
// Mahesh.logMe();                     // Mahesh can access features of both userTeacher and Teacher
// console.log(Mahesh);
// console.log(Hitesh);
// console.log(Mahesh == Hitesh);
// console.log(Mahesh == Teacher);
// console.log(Mahesh instanceof Teacher);
// console.log(Mahesh instanceof userTeacher);
// console.log(Teacher instanceof userTeacher);



class userAccess{
  constructor(username){
    this.username = username;
  }
  logMe(){
    console.log(`Welcome ${this.username}`);
  }
  static introduceMe(){                                        // static keyword --> stops its instances and child to access this feature
    console.log(`I am ${this.username}`);
  }
}

const Aka = new userAccess('Mahesh Krishnam');
// console.log(Aka)
// Aka.introduceMe();                                     // its instance is not able to access static feature

class AkaMahesh extends userAccess{
  constructor(username, email){
    super(username);
    this.email = email;
  }
}

console.log(AkaMahesh);
const userMahesh = new AkaMahesh('Mahesh', '220120011@iitdh.ac.in');
userMahesh.logMe();
AkaMahesh.introduceMe();          // extended class itself is accessing static functions but non of their instances are able to access it

// userMahesh.introduceMe();              // instance of child not able to access static functions