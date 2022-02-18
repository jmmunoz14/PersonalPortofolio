

if(getTitle == "Sign-up Form")
{
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange); 
}

if(getloginDisplay == 'true')
{
  
}


function onChange() {
    const password = document.querySelector('input[name=sign_up_password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    console.log(password.value)
    console.log(confirm.value)

    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}