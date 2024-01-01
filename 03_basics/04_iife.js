// Imediately Invoked Function Expression (IIFE)
/*
global scope ke polution se bachne ke liye hum IIFE ka use karte hai
matlb ye to execute hoga hi kuch ho na ho, 
*/

// named IIFE
(function chai(){
    console.log(`DB connected`);
})();           //yaha last me semicolon lagana important hai warna function ko pata nahi chalega return kaha se hona hai

(function hello(){
    console.log('Hello world');
})();

// with parameter passing
(function hello(name){
    console.log(`hello ${name}`);
})('Yuvraj');
// using arrow functions

(()=>{
    console.log("IIFE using arrow function")
})();
