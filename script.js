function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinSring = pin + '';
    if (pinSring.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const newPin = getPin();
    document.getElementById('display-pin').value = newPin;
}

document.getElementById('button-parent').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('display-number');
    if (isNaN(number)) {
        calc = '';
    }
    else {
        const prevNumber = calc.value;
        const currentNumber = number;
        const afterNumber = prevNumber + currentNumber;
        calc.value = afterNumber;
    }

});
document.getElementById('clear').addEventListener('click', function () {
    const calcy = document.getElementById('display-number');
    calcy.value = '';
});
function verify() {
    const pin = document.getElementById('display-pin');
    const typedPin = document.getElementById('display-number');
    const failMessage = document.getElementById('fail');
    const successMessage = document.getElementById('success');
    if (pin.value == typedPin.value) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none'
    }
    else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block'

    }
}