let counterValue = 0;  // creating a variable


// searching of elements
const counter = document.querySelector("#value"); 
const minusButton = document.querySelector(`button[data-action="decrement"]`);
const plusButton = document.querySelector(`button[data-action="increment"]`);

// + listener to buttons
plusButton.addEventListener(`click`, () => {
    counterValue++; // counter + 1
    counter.textContent = counterValue; // new updated value of counter
});


// - listener to buttons
minusButton.addEventListener(`click`, () => {
    counterValue -= 1; // counter - 1;
    counter.textContent = counterValue; // new updated value of counter
});

