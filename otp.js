/* import { r } from './index.js' */

const otpForm = document.getElementById('otp-form');
const otpElement = document.getElementById('otps');

/* var otpCode = Math.floor(100000 + r * 900000); */

otpForm.addEventListener('submit' , (e) => {
    /* OTP VALIDATION */    
    let otpMessages = [];
    /* if(otp.value === otpCode.toString()) */
    if(otp.value === '123456'){
        otpMessages.push('OTP Matched!! Proceed to Login');
    }else{
        otpMessages.push('Entered OTP Doesnot Match');
    }

    if(otpMessages.length > 0){
        e.preventDefault()
        otpElement.innerText = otpMessages.join(', ')
    }
});