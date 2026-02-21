document.getElementById('add-money-btn').addEventListener('click', function () {
    const addMoneyBank = getValueFromInput("add-money-bank");
    if (addMoneyBank === 'Select Bank') {
        alert('Please select a bank');
        return;
    }

    const accountNumber = getValueFromInput("bank-account-number");
    if (accountNumber.length !== 11) {
        alert("Invalid Account Number!");
        return;
    }

    const amount = getValueFromInput("add-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getValueFromInput('add-money-pin');
    if(pin === '1234'){
        alert(`Add Money Successfully 
            from ${addMoneyBank} at ${new Date().toLocaleString()}`);
        setBalance(newBalance);

        const history = document.getElementById('transactions');
        const div = document.createElement('div');
        div.innerHTML = `

        <div class="w-11/12 mx-auto py-5">
             Add Money Successfully from
             ${addMoneyBank} at ${new Date().toLocaleString()}
        </div>`;
           
            history.append(div);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})