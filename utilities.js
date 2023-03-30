function getInputElementValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value= '';
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function updateTotal(elementId, newElementValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newElementValue;
}