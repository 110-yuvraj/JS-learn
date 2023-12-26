//  Primitive

/* 7 types : 
1. String
2. Number
3. Boolean
4. null (empty)
5. undefined(var declare hai lekin usme abhi koi value intialize nahi ki hai), 
6. symbol (kisi bhi value ko unique banane ke liye symbol use hota)
7. BigInt (for big values such as scientific values )*/

// Q.1: JavaScript is statically typed or dynamically typed language
// Ans :  JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Refrence (Non Primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Thor", "Hulk"];
let myObj = {
    name: "yuvraj",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof null);
console.log(typeof myObj);
console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3
