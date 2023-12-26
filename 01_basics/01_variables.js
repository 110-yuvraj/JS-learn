const account_Id = 205121110;
let account_Email = "yuvi@gmail.com";
var accountPassword = "12345";
accountcity = "Indore";

// account_Id = 110   --> Not allowed

/* 
Prefer not to use var because of issue in block scope
and functional scope
*/


// Hoisting in JavaScript:
// Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.

account_Email = "yuvirajput@gmail.com";
accountPassword = "54321";
accountcity = "bhopal";
let accountstate;
console.log(account_Id);
console.table([
  account_Id,
  account_Email,
  accountPassword,
  accountcity,
  accountstate,
]);
