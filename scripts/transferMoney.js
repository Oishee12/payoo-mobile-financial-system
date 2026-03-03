document.getElementById('send-money-btn')
    .addEventListener('click', () => {
        const userAccountNumber = getValueFromInput('user-account-number');
        if(userAccountNumber.length !== 11){
            alert("Invalid account number");
        }
        const transferAmount = getValueFromInput('transfer-amount');
        if(transferAmount <= 0){
            alert('Invalid amount');
        }
        
    });