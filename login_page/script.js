function togglePassword() {
    var passwordField = document.getElementById('password');
    var toggleButton = document.querySelector('.toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
}


function login(){
    var passwordvalue = document.getElementById('password').value;
    var usernamevalue = document.getElementById('username').value;

    if (usernamevalue === ''){
        alertify.error("Username Required");
        return;
    }

    if (passwordvalue === ''){
        alertify.error("Password Required");
        return;
    }
    alertify.success("Successfully LoggedIn ");
}