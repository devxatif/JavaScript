// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint


const score = 100
const scoreValue = 100.3

const LoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);
// console.log(id==anotherId);
// console.log(id);
// console.log(anotherId);

// const bigint = 3453623592845726n


// Reference (Non Primitive)

// Array, On=bject, Functions

const heros = ['ironman', "batman", "spiderman"]

let myObj = {
    name : "atif",
    age : 23,
} 
const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3