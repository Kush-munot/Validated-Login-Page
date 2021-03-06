const name = document.getElementById('fname');
const phNum = document.getElementById('phno');
const ConfirmPassword = document.getElementById('cPassword');
const Password = document.getElementById('password');
const userName = document.getElementById('usrName');
const email = document.getElementById('email');

const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const r = Math.random();

function SendEmail(){
    var params = {
        to_name : document.getElementById('fname').value,
        otpCode : Math.floor(100000 +  r * 900000),
        email: document.getElementById('email').value

    }
    emailjs.send("service_pysea4o","template_wc7fi94",params).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}; 

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
    
    if(ConfirmPassword.value != Password.value){
        messages.push('The Confirmed Password does not match. Please Try Again.');
    }

    /* PHONE NUMBER VALIDATION */
    if(phNum.value.length < 10 || phNum.value.length > 10){
        messages.push('The phone number should be of 10 digits.');
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }   
});

/* export { r }; */


