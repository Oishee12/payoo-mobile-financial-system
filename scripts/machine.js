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