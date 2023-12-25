const account_Id = 205121110;
let account_Email = "yuvi@gmail.com"
var accountPassword = "12345"
accountcity = "Indore"

// account_Id = 110   --> Not allowed

/* 
Prefer not to use var because of issue in block scope
and functional scope
*/

account_Email = "yuvirajput@gmail.com"
accountPassword = "54321"
accountcity = "bhopal"
let accountstate;
console.log(account_Id);
console.table([account_Id,account_Email, accountPassword,accountcity, accountstate])
