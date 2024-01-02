const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index, arr);
// })

const myCoding = [
    {
        laguageName: "javascript",
        laguageFileName: "js"
    },
    {
        laguageName: "java",
        laguageFileName: "java"
    },
    {
        laguageName: "python",
        laguageFileName: "py"
    }
]

myCoding.forEach( (item)=>{
    console.log(`Name of language is ${item.laguageName} and file extension is ${item.laguageFileName}`);
})