//ROOT FUNCTIONS
function addFunction(a, b) {
    return a + b;
}

function subtractFunction(a, b){
    return a - b;
}

function multiplyFunction(a, b){
    return a * b;
}

function divideFunction(a, b){
    return a / b;
}

const add = "add";
const subtract = "subtract";
const multiply = "multiply";
const divide = "divide";
var currentOperation;

function operate(operation, a, b){
    if (operation == "add") {
        return addFunction(a, b);
    }else if (operation == "subtract") {
        return subtractFunction(a, b);
    }else if (operation == "multiply") {
        return multiplyFunction(a, b);
    }else if (operation == "divide") {
        return divideFunction(a, b);
    }
}

function Calculate(a, b) {
    var a = parseInt(storedValue);
    var b = parseInt(currentValue);
    c = operate(currentOperation, a, b);
    storedValue = "0";
    currentValue = c.toString();
    displayValue = currentValue;
    inputBox.value = displayValue;
    return { a, b };
}

//CALCULATOR VARIABLES
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn0 = document.getElementById("btn0");
var btnPlus = document.getElementById("btn-plus");
var btnMinus = document.getElementById("btn-minus");
var btnDivide = document.getElementById("btn-divide");
var btnMultiply = document.getElementById("btn-multiply");
var btnEquals = document.getElementById("btn-equals");
var btnDelete = document.getElementById("btn-delete");
var btns = document.querySelectorAll(".btn");

var inputBox = document.getElementById("input-box");
var currentValue = 0;
var storedValue = 0;
var displayValue = "";

//BUTTONS
btns.forEach(function(currentBtn) {
    currentBtn.addEventListener("click", function() {

        //NUMBERS
        if (currentBtn == btn1) {
            currentValue += "1";
            displayValue += "1";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn2) {
            currentValue += "2";
            displayValue += "2";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn3) {
            currentValue += "3";
            displayValue += "3";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn4) {
            currentValue += "4";
            displayValue += "4";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn5) {
            currentValue += "5";
            displayValue += "5";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn6) {
            currentValue += "6";
            displayValue += "6";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn7) {
            currentValue += "7";
            displayValue += "7";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn8) {
            currentValue += "8";
            displayValue += "8";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn9) {
            currentValue += "9";
            displayValue += "9";
            inputBox.value = displayValue;
        }
        if (currentBtn == btn0) {
            currentValue += "0";
            displayValue += "0";
            inputBox.value = displayValue;
        }

        //OPERATIONS
        if (currentBtn == btnPlus) {
            if (parseInt(storedValue) < 0 ||
                parseInt(storedValue) > 0) {
                    var { a, b } = Calculate(a, b);
                    currentOperation = add;
            }
            storedValue = currentValue;
            currentValue = "0";
            displayValue += " + ";
            currentOperation = add;
            inputBox.value = displayValue;
        }
        if (currentBtn == btnMinus) {
            if (parseInt(storedValue) < 0 ||
                parseInt(storedValue) > 0) {
                    var { a, b } = Calculate(a, b);
                    currentOperation = subtract;
            }
            storedValue = currentValue;
            currentValue = "0";
            displayValue += " - ";
            currentOperation = subtract;
            inputBox.value = displayValue;
        }
        if (currentBtn == btnDivide) {
            if (parseInt(storedValue) < 0 ||
                parseInt(storedValue) > 0) {
                    var { a, b } = Calculate(a, b);
                    currentOperation = divide;
            }
            storedValue = currentValue;
            currentValue = "0";
            displayValue += " / ";
            currentOperation = divide;
            inputBox.value = displayValue;
        }
        if (currentBtn == btnMultiply) {
            if (parseInt(storedValue) < 0 ||
                parseInt(storedValue) > 0) {
                    var { a, b } = Calculate(a, b);
                    currentOperation = multiply;
            }
            storedValue = currentValue;
            currentValue = "0";
            displayValue += " * ";
            currentOperation = multiply;
            inputBox.value = displayValue;
        }
        if (currentBtn == btnEquals) {
            var { a, b } = Calculate(a, b);
        }
        if (currentBtn == btnDelete) {
            currentValue = "0";
            storedValue = "0"
            displayValue = "";
            inputBox.value = displayValue;
        }
    });
});

