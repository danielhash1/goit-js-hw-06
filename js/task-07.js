// el search
const controlText = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");


// addEventListener w/ font-size
controlText.addEventListener(`input`, evt => {
    changeText.style.fontSize = `${evt.target.value}px`

})