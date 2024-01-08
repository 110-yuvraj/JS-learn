
let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a)
}
let div = document.querySelector("div");
div.onmouseover = ()=>{
    console.log("You are inside the box");
};

let modebtn = document.querySelector("#mode");
let currMode = "light";
modebtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currMode);
})