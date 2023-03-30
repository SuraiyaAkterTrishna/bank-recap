document.getElementById('withdraw-btn').addEventListener('click', function(){
    // withdraw
    const newWithdrawAmount = getInputElementValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-element');
    const totalWithdrawValue = newWithdrawAmount + previousWithdrawAmount;
    const totalWithdrawAmount = updateTotal('withdraw-element', totalWithdrawValue);
    // balance
    const previousBalance = getTextElementValueById('balance-element');
})