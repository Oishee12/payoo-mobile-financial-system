function getValueFromInput(id) {
   const input = document.getElementById(id);
   const value = input.value;
   return value;
}

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = Number(balanceElement.innerText);
    return balance;
}

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// buttons functionality 
function showOnly(id){
    const pages = ['add-money', 'cash-out', 'transactions', 'transfer-money'];
    for(const sectionId of pages){
        const section = document.getElementById(sectionId);
            section.classList.add('hidden');
    }
    const selected = document.getElementById(id);
        selected.classList.remove('hidden');

    // const addMoney = document.getElementById('add-money');
    // const cashOut = document.getElementById('cash-out');
    // const transactions = document.getElementById('transactions');
    // addMoney.classList.add('hidden');
    // cashOut.classList.add('hidden');
    // transactions.classList.add('hidden');
}