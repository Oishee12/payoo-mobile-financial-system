document.getElementById("cashout-btn").addEventListener('click', function(){
    const cashoutNumberInput = document.getElementById('cashout-number');
    const agentNumber = cashoutNumberInput.value;
    if(agentNumber.length != 11){
        alert('Invalid Agent Number!');
        return;
    }

    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;

    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;

    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount!");
        return;
    }
    
    const cashoutPinInput = document.getElementById('cashout-pin');
    const pin = cashoutPinInput.value;
    if(pin === '1234'){
        alert(`Cash Out Successfully from 
            ${agentNumber} at ${new Date().toLocaleString()}`);
        balanceElement.innerText = newBalance;

        const history = document.getElementById('transactions');
        const div = document.createElement('div');
        div.innerHTML = `

        <div class="w-11/12 mx-auto py-5">
            Cash Out Successfully from 
            ${agentNumber} at ${new Date().toLocaleString()}
        </div>`;
           
            history.append(div);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})