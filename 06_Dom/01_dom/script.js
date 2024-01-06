// console.log("hello!");
// Accessing elements by ID
// let heading = document.getElementById("heading");
// console.log(heading);


// Acessing elements by class
// let headings = document.getElementsByClassName("samename");
// console.log(headings);                    //it returns a HTML collection


// Accessing elements by tags
// let tagss = document.getElementsByTagName("p");
// console.log(tagss);
// console.dir(tagss);


// Accessing elements using query selector
// we can use anything here for accessing the elements we can use IDs , className, TagName etc.
// let First_elements = document.querySelector("p");
// using the ID
let First_elements = document.querySelector("#heading");
console.dir(First_elements)


// we can also select multiple tags 
// let All_elements = document.querySelectorAll("p");
// console.dir(All_elements);

// accessing using the class Name we have to give . before the classname
let All_elements = document.querySelectorAll(".samename");
console.dir(All_elements);