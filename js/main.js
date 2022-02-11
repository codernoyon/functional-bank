function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValueNumber = parseFloat(inputValueText);
    inputField.value = "";
    return inputValueNumber;
};


function updateTotalField(totalId, depositAmount) {
    const total = document.getElementById(totalId);
    const totalText = total.innerText;
    const totalNumber = parseFloat(totalText);
    total.innerText = totalNumber + depositAmount;
    
};

// get current balance 
function getCurrentBalance() {
    const balance = document.getElementById("current-balance");
    const balanceText = balance.innerText;
    const balanceNumber = parseFloat(balanceText);
    return balanceNumber;
};

// update balance as nedeed
function updateBalance(amount, isAdd) {
    const balance = document.getElementById("current-balance");
    const balanceNumber = getCurrentBalance();
    if (isAdd == true) {
        balance.innerText = balanceNumber + amount;
    }else{
        balance.innerText = balanceNumber - amount;
    }
}

document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotalField("current-deposit", depositAmount);
        updateBalance(depositAmount, true);
    }else {
        alert("Please input a Positive amount.")
    }
    
    
    
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField("current-withdraw", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else if (withdrawAmount > currentBalance) {
        alert("you dont have sufficient balane")
    }else {
        alert("Please input a Positive amount.")
    }
    
    
});