// finding input
const checkInput = document.querySelector("#validation-input");

// addListener
checkInput.addEventListener(`blur`, evt => {

    // check for  data-length="6"
    if (evt.target.value.length == checkInput.getAttribute("data-length")) {
        
        checkInput.classList.add("valid");

        // if invalid
        if (checkInput.classList.contains("invalid")) {
            checkInput.classList.remove("incalid)")
        }
        // if valid
    }  else {
        if (checkInput.classList.contains("valid")) {
            checkInput.classList.remove("valid")
        }

        checkInput.classList.add("invalid")
    }
})

