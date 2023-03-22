// function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// element search
const body = document.querySelector("body");
const changeBtnColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

// addListener 
changeBtnColor.addEventListener(`click`, (el) => {
  
  
  // call the function for a random color
  let color = getRandomHexColor();


  // changing the background color to a random color
  body.style.backgroundColor = color;

  
  // display color name in the span element
  spanColor.textContent = color;

});