// Arrays in JavaScript

const myArr = [2,5,8,9,12,28]
const newARR = [4,5,"Yuvraj",true];
// console.log(myArr[4]);
// Array can contain different values such as Numbers, boolean , Strings , objects and other Arrays as well
//  Array methods
// myArr.push(34);  //pushing element in the end of array
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(91);   //adding element in the front
// console.log(myArr)

// myArr.shift();  //removing from front
// console.log(myArr)

// console.log(myArr.includes(9));

const newArr = myArr.join();  //convert array to string 
// console.log(typeof myArr)
// console.log(typeof newArr)


const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("B",myArr );

const myn2 = myArr.splice(1,3)  //splice original array ko modify karta hai
console.log("c",myArr );
console.log(myn2);
