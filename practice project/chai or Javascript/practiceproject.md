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