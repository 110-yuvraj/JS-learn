const score = 500
// console.log(score)

const balance = new Number(100);
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));  //how many numbers after decimal 

const otherNumber = 123.8567
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

const maxi = Number.MAX_VALUE
const mini = Number.MIN_VALUE

// console.log(maxi);
// console.log(mini);

// +++++++++++++++Maths+++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(5.6))
// console.log(Math.min(6,2,5,7))


console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);