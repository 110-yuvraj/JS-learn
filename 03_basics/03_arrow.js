const user = {
    username: "yuvraj",
    age: 543,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);    //this refers to current context
    }
}
user.welcomeMessage()
user.username = "yuvi"
user.welcomeMessage()