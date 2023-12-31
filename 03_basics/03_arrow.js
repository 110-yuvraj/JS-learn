const user = {
    username: "yuvraj",
    age: 543,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);    //this refers to current context
        console.log(this)
    }
}
user.welcomeMessage()
console.log(this);
// user.username = "yuvi"
// user.welcomeMessage()

// function chai(){
//     let username = "yuvraj"
//     console.log(this.username);
// }

// chai()
// const chai = function () {
//     let username = "yuvraj"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "yuvraj"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "yuvraj"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()