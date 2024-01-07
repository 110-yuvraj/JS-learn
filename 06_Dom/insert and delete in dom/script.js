let newButton = document.createElement("button");
newButton.innerText = "click Me";
console.log(newButton);

let div = document.querySelector("div");
div.append(newButton);
div.before(newButton);

let para = document.querySelector("p");
para.remove();

