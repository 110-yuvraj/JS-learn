// singleton object
// Object.create     <--- This is constructor method
// object literals

const mySym = Symbol("key1");
const User={
    name: "Yuvraj",
    "Full Name": "Yuvraj Singh Solanki",
    [mySym]:"mykey1",
    age : 24,
    location: "Indore",
    email: "yuvi@google.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]
}

// console.log(User);
// console.log(User.email);            //1st way
// console.log(User["email"]);         //2nd way
// console.log(User["Full Name"]);
// console.log(User[mySym]);
// console.log(typeof User[mySym]);

User.email = "Yuvirajput@amazon.com"

// console.log(User.email);

// Object.freeze(User);      //Now our object is freezed no changes will propagate now

User.email = "rajputyuvi@meta.com"

// console.log(User.email);

// console.log(User);

User.greeting = function(){
    console.log("Hello user");
}


User.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(User.greeting());
console.log(User.greetingtwo());





