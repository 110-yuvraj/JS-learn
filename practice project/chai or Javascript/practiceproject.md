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

## project 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  Remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1;
    guessSlot.innerHTML = ''
    Remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  })
}
```


### project 5
```javascript
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
};
// console.log(randomColor);
// console.log(Math.floor(Math.random()*16))
let IntervalID;
const startChanging = function(){
  if(!IntervalID)
  IntervalID = setInterval(changeBg,1000)
  function changeBg(){
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChanging = function(){
  clearInterval(IntervalID);
  IntervalID = null;
};
const start = document.querySelector("#start").addEventListener('click',startChanging)

const stop = document.querySelector("#stop").addEventListener('click',stopChanging)

```

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});```