// searching of elements
const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

// event listener to input 
textInput.addEventListener(`input`, evt => {
    textOutput.textContent = evt.target.value;  // input value to span

    if (evt.target.value === '') {
        textOutput.textContent = `Anonymous`;  // if input is empty
    }

})

