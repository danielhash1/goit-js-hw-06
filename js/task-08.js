const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', handleSubmit); // task #1

// the function of sending a form
function handleSubmit(evt) {
    // task #2
    evt.preventDefault(); 
    
    const {
        elements: { email, password },
     } = evt.currentTarget;

    // task #3
    if (email.value === "" || password.value === "") {
        return alert('Fill in all fields');
    };

    // task #4
    const userInfo = {
        email: email.value,
        password: password.value
    };

    // task #5
    console.log(userInfo);

    evt.currentTarget.reset();
}


