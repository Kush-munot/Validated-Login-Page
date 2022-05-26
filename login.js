const Password = document.getElementById('password');
const userName = document.getElementById('usrName');

const form = document.getElementById('loginForm');
const loginElement = document.getElementById('login');


form.addEventListener('submit' , (e) => {
    let messages = [];

    /* PASSWORD VALIDATIONS */
    if(Password.value.length < 8){
        messages.push('Password must contain 8 or more characters in it.');
    }
    if(Password.value.length >= 17){
        messages.push('Password must be less than 17 characters.');
    }

    if(Password.value === 'password@123' || Password.value === 'qwerty@123' || Password.value === '1q2w3e4r@'){
        messages.push('Please try something else. These are the most common Passwords and easy to crack.');
    }

    var str = Password.value;
    var upperCase = 0,lowerCase = 0,number = 0,special = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] >= "A" && str[i] <= "Z") 
            upperCase++;
        else if (str[i] >= "a" && str[i] <= "z") 
            lowerCase++;
        else if (str[i] >= "0" && str[i] <= "9") 
            number++;
        else 
            special++;
    }

    if(upperCase === 0){
        messages.push('The Password must contain atleast one Uppercase Letter.');
    }

    if(lowerCase === 0){
        messages.push('The Password must contain atleast one Lowercase Letter.');
    }

    if(number === 0){
        messages.push('The Password must contain atleast one Numeral.');
    }

    if(special === 0){
        messages.push('The Password must contain atleast one Special Character.');
    }

    if(messages.length > 0){
        e.preventDefault()
        loginElement.innerText = messages.join(', ')
    }   
});



