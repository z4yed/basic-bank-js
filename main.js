
const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function (event) {

    let depositInput = document.getElementById('deposit-input');

    // getting total deposit amount
    let previousDeposit = document.getElementById('deposit-total')
    let currentDeposit = parseFloat(depositInput.value);

    let totalBalance = document.getElementById('total-balance');

    if (typeof currentDeposit == 'number' && currentDeposit >= 0) {
        // updating total deposit amount
        previousDeposit.innerText = parseFloat(previousDeposit.innerText) + currentDeposit;
        depositInput.value = '';

        // updating total balance
        totalBalance.innerText = parseFloat(totalBalance.innerText) + currentDeposit;
    }
    else {
        alert("Input is INVALID. ")
    }

});

const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function(event){

    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawAmount = parseFloat(withdrawInput.value);
    
    let totalBalance = document.getElementById('total-balance');
    
    if (typeof withdrawAmount == 'number' && withdrawAmount >= 0 && withdrawAmount <= parseFloat(totalBalance.innerText)){
        const withdrawTotal = document.getElementById('withdraw-total');
        withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + withdrawAmount;
        withdrawInput.value = '';

        totalBalance.innerText = parseFloat(totalBalance.innerText) - withdrawAmount;
    }
    else if (parseFloat(totalBalance.innerText) < withdrawAmount){
        alert("Not Enough Money!!")
        withdrawInput.value = '';
    }
    else {
        alert("Invalid Input!!")
    }

});