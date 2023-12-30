// const tinderUser = new Object()      <-- SingleTon Object

const tinderUser = {
    
}

tinderUser.id = "123abc"

tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// console.log(tinderUser);


const regularUser= {
    email: "some@gmail.com",
    fullName : {
        userFullName :{
            firstName : "Yuvraj",
            lastname : "Singh Solanki"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1,obj2};

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj4 = {...obj1, ...obj2, ...obj3}     //spread operator

// console.log(obj3)

const users = [
{
    id: 1,
    email : "yuviraj@gmail.com"
},
{
    id: 2,
    email: "tx@gmail.com"
}
,
{
    id: 3,
    email: "txsdf@gmail.com"
}

]
// console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




