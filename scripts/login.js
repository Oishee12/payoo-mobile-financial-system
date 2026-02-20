// console.log('js file connected successfully');

document.getElementById('login-btn').addEventListener('click', function(){
    const inputNumber = document.getElementById('input-number');
    const number = inputNumber.value;
    // console.log(number);
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    // console.log(pin);
    if(number === '01234567890' && pin === '1234'){
        alert('Login Successfully.');
    }
    else{
            alert("Login Failed. Your pin is 1234");
            return;
        }
})