document.getElementById('deposit-btn').addEventListener('click', function(){
    // deposit
    const newDepositAmount = getInputElementValueById('deposit-field');
    const previousDepositAmount = getTextElementValueById('deposit-element');
    const totalDepositValue = newDepositAmount + previousDepositAmount;
    const totalDepositAmount = updateTotal('deposit-element', totalDepositValue);
    // balance
    const previousBalance = getTextElementValueById('balance-element');

})