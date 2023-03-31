document.getElementById('deposit-btn').addEventListener('click', function(){
    // deposit calculate
    const newDepositAmount = getInputElementValueById('deposit-field');
    const previousDepositAmount = getTextElementValueById('deposit-element');
    const totalDepositValue = newDepositAmount + previousDepositAmount;
    const totalDepositAmount = updateTotal('deposit-element', totalDepositValue);
    // balance calculate
    const previousBalance = getTextElementValueById('balance-element');
    const totalBalanceValue = previousBalance + newDepositAmount;
    const totalBalanceAmount = updateTotal('balance-element', totalBalanceValue);
})