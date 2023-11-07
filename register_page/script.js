function togglePassword() {
    var passwordField = document.getElementById('password');
    var passwordConfirmField = document.getElementById('password_comfirm');
    var toggleButton = document.querySelector('.toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordConfirmField.type='text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        passwordConfirmField.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

function register(){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?~]/;
    var passwordvalue = document.getElementById('password').value;
    var passworConfirmdvalue = document.getElementById('password_comfirm').value;
    var emailvalue = document.getElementById('email').value;
    var usernamevalue = document.getElementById('username').value;
    if (usernamevalue === ''){
        alertify.error('Username Required');
        return;
    }
    if (emailvalue ===''){
        alertify.error('Email Required');
        return;
    }else{
        if (!/@/.test(emailvalue)){
            alertify.error('Email must contain a "@"');
            return;
        }
    }


    if (passwordvalue === passworConfirmdvalue){
        if((/[0-9]/.test(passwordvalue))){
            if((/[a-z]/.test(passwordvalue))){
                if((/[A-Z]/.test(passwordvalue))){
                    if(specialChars.test(passwordvalue)){
                        if(passwordvalue.length>=12){
                            alertify.success("Successfully Registred")
                        }else{
                            alertify.error('Password must be at least 12 Character long');
                        }
                    }else{
                        alertify.error('Password must contain at least a Special Character');
                    }
                }else{
                    alertify.error('Password must contain at least a upper case Letter');
                }
            }else{
                alertify.error('Password must contain at least a lower case Letter');
            }
        }else{
            alertify.error('Password must contain at least a Number');
        }
    }else{
        alertify.error('Passwords must be Identical');
    }
}