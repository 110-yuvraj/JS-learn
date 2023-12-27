let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate1 = new Date(2023, 0, 23, 5, 7);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toString());

// let newDate = new Date("01-14-2023");
// console.log(newDate.toLocaleDateString())

let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getHours())
console.log(newDate.getDay())


newDate.toLocaleDateString('default',{
    weekday: "long"
})