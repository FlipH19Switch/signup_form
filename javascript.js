let passDiv = document.getElementById('user_password');
let passConfDiv = document.getElementById('user_password_confirmation');
let passMismatch = document.getElementById('password-mismatch');

function checkPassMatch() { 
    if (passDiv.value === passConfDiv.value) {

        passDiv.classList.remove("error");
        passConfDiv.classList.remove("error");
        passMismatch.parentNode.removeChild(passMismatch);
    
    }
}