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

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}