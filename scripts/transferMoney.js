document.getElementById('send-money-btn')
    .addEventListener('click', () => {
        const userAccountNumber = document.getElementById('user-account-number');
        if(userAccountNumber !== 11){
            alert("Invalid account number");
        }
    });