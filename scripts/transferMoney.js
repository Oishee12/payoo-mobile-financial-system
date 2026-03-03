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
            alert(`Send money successfully
                 from the account number ${userAccountNumber} 
                at ${new Date().toLocaleString()}`);
                const history = document.getElementById('transactions');
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="w-11/12 mx-auto pt-5">
            Send money successfully
                 from the account number ${userAccountNumber} 
                at ${new Date().toLocaleString()}
        </div>`
                history.appendChild(div);
        }
        else{
            alert('Invalid pin.');
            return;
        }

        const newBalance = getBalance() - transferAmount;
        setBalance(newBalance);
    });