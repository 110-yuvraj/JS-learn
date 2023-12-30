function YourName(){
    console.log("Yuvraj")
    console.log("Singh")
    console.log("Rajput")
}

// YourName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3,6)  //--> 9
// addTwoNumbers(5,"9")  // 59
// addTwoNumbers(5,"a")    //5a
function addTwoNumbers(number1, number2){
    return number1+number2;
}
const result = addTwoNumbers(8,29)
// console.log("Result:",result)
// console.log(`Result of this addition is ${result}`);


// function logInUser(userName){
//     if(userName==undefined){
//         console.log("Please enter the userName")
//         return
//     }
//     return `${userName} just logged in`
// }
function logInUser(userName="yuvi"){        //default value function
    if(userName==undefined){
        console.log("Please enter the userName")
        return
    }
    return `${userName} just logged in`
}

// console.log(logInUser("yuvraj"));
// console.log(logInUser());       //it will give undefined


function calculateCartprice(...num1){       //... rest operator
    return num1
}

console.log(calculateCartprice(200,400,500));   //it will add the values to the array

const user = {
    username : "Yuvraj",
    age: 24
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and age is ${anyObject.age}`)
}
handleObject(user);
handleObject({
    username: "yuvi rajput",
    age: 25
});
const newArr = [200, 34, 36,76]
function returnvalue(getArr){
    return getArr[2];
}
console.log(returnvalue(newArr));

