document.getElementById('diposit-button').addEventListener('click', function () {
    // get the amount deposit 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // deposit balance thaka deposit input update kora
    const depositTotal = document.getElementById('deposit-total');
    const preDepositiveText = depositTotal.innerText;
    const preDepositiveAmount = parseFloat(preDepositiveText);

    // sum of depositive 
    const newDepositiveTotal = newDepositAmount + preDepositiveAmount;

    depositTotal.innerText = newDepositiveTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear input deposit input field
    depositInput.value = '';
});

// withdrow money field ( handel it)
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get amound withdrow
    const withdrowInput = document.getElementById('withdraw-input');
    const newWithdrowInputText = withdrowInput.value;
    const newWithdrowInputAmount = parseFloat(newWithdrowInputText);

    // withdrow balance thaka input update
    const withdrowTotal = document.getElementById('withdraw-total');
    const preWithdrowTotalText = withdrowTotal.innerText;
    const preWithdrowTotalAmount = parseFloat(preWithdrowTotalText);
    // withdrow amnount add 
    const totalwithdrowAmmount = preWithdrowTotalAmount + newWithdrowInputAmount;
    withdrowTotal.innerText = totalwithdrowAmmount;

    // total balance thaka withdrow and input new balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance - totalwithdrowAmmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear input withdrow input field
    withdrowInput.value = '';
});
