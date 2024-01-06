// let heading  = document.querySelector("h2");

// console.dir(heading)


// heading.innerText = heading.innerText+" From Apna College"  



let divs = document.querySelectorAll(".box")
// console.log(divs);
let i = 1;
for(div of divs){
    div.innerText = `new unique value ${i}`
    i++;
}
// divs[0].innerText = "new Unique value 1";
// divs[1].innerText = "new Unique value 2";
// divs[2].innerText = "new Unique value 3";