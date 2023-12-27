const name = "yuvraj"
const repoCount = 50

// console.log(name + repoCount + " Value");  Old way
// string interpolation in Javascript ${} we can give variable
// Name inside ${} below is the example  ` ` backticks use karna hote hai
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Yuvi Rajput')

console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.indexOf('R'));

const  SubStr = gameName.substring(4,10); //yaha negative values nahi work karti
console.log(SubStr);

const slicestr = gameName.slice(3,7);
console.log(slicestr);

const newslice = gameName.slice(-9,3);
console.log(newslice);


const newStringOne = "   yuvraj    "
console.log(newStringOne);
console.log(newStringOne.trim());


const  url = "https://yuvi.com/yuvi%20rajput"
console.log(url.replace('%20','-'));
console.log(url.includes('%20'));

console.log(gameName.split(' '));
