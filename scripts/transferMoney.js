document.getElementById('send-money-btn')
    .addEventListener('click', () => {
        const userAccountNumber = getValueFromInput('user-account-number');
        if(userAccountNumber.length !== 11){
            alert("Invalid account number");
        }
        const transferAmount = getValueFromInput('transfer-amount');
        if(transferAmount <= 0){
            alert('Invalid amount');
            return;
        }
        const pin = getValueFromInput('transfer-pin');
        if(pin === '1234'){
            alert('Send money successfully.');
        }
        else{
            alert('Invalid pin.');
        }
        console.log(pin, typeof(pin));
    });