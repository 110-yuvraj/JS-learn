# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-o9su7g?file=index.html)


# Solution code

## project 1

```javascript
console.log("yuvraj");
const buttons = document.querySelectorAll('.button');
// console.log(btn);
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";

    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";

    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";

    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";

    }
  });
});
```

## project 2 solution

```javascript
let body = document.querySelector("body");
let container = document.querySelector(".container");
container.style.backgroundColor = "skyblue"

const  form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML = "Please giva a valid Height";
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML = "Please giva a valid Weight";
  }
  else{
   const bmi =  (weight/((height*height)/10000)).toFixed(2);
   let personType = ""
   if(bmi<18.6){
     personType = "Under Weight";
    }
    else if(bmi>=18.6 && bmi<=24.9){
      personType = "Normal"
    }
    else{
      personType = "over weight"
    }
    results.innerHTML = `<span><p>Your BMI index is ${bmi} and You are ${personType}</p></span>`
    
  }
  
});

```
## project 3
```javascript
const clock = document.getElementById('clock');


setInterval(function(){
let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)
```