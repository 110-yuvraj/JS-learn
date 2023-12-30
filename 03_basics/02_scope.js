

// if(true){
//     let a = 10
// const b = 20
// var c = 30
// }
// // console.log(a)       --> it will not print
// // console.log(b)       --> it will not print
// console.log(c);       //--> it will print because var has scope problem 

// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner: ", a);
// }
// console.log(a);
// var c = 300
// if(true){
//     var c = 10
//     const b = 20
//     console.log("Inner: ", c);
// }
// console.log(c);

function one(){
    const username = "yuvraj"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);        --> it will throw error
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}