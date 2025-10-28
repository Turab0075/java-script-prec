//----- primitive datatypes 

// 7 types: numbers, string, boolean, bigint, undefined , null , symbol

const score = 100
const scoreValue = 100.5

const loggedIn= false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber=124356854332564

//refrence (non-primtive data types)

//Array,object,function

const heros =["ironman" ,"spiderman" , "thor"];

let myObj = {
         name: "turab",
         age: 18,


};
const myFunction= function(){
    console.log("hello world");
    
}
console.log(typeof anotherId)

//https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitve)   heap (non primitive)


let userName = "turab007"

let userName2 = userName

userName2 = "turab008"
console.log(userName)
console.log(userName2);

let oneUser = {
     email :  "turab12@gmail.com",
     upi:"turab@ypl"
}
let secUser = oneUser


secUser.email = "turab321@gmail.com"

console.log (oneUser)
console.log (secUser)


