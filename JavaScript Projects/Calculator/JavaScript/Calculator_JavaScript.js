// create an object to keep track of values
const Calculator = {
    // display 0 on the screen
    Display_Value: '0',
    // hold the first operand for any expressions; set it to null for now
    First_Operand: null,
    // check whether or not the second operand has been input
    Wait_Second_Operand: false,
    // hold the operator; set to null
    operator: null,
};

// modify values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // check to see if Wait_Second_Operand is true and set
    // Display_Value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // overwrite Display_Value if the current value is 0
        // otherwise add onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
// handle decimal points
function Input_Decimal(dot) {
    //prevents bugs caused by accidental clicking on the decimal point
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // if Display_Value doesn't contain a decimal point, add a decimal point
        Calculator.Display_Value += dot;
    }
}

// handle operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // when an operator key is pressed, convert the current number displayed on the screen to a number
    // and then store the result in Calculator.First_Operand if it does't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // check if an operator already exists and if Wait_Second_Operand is true, then update the operator and
    // and exit from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // check if an operator already exists
    const Value_Now = First_Operand || 0;
    // if operator exists, property lookup is performed for the operator in the Perform_Calculation object
    // and the function that matches the operator is executed
    let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
    // add a fixed amount of numbers after the decimal
    result = Number(result).toFixed(9)
    // remove any trailing 0's
    result = (result * 1).toString()
    Calculator.Display_Value = parseFloat(result);
    Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// update the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // target variable is an object that represents the element that was clicked
    const { target } = event;
    // if the clicked element is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
}

if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
}
// ensure AC clears the number from the Calculator
if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
}

Input_Digit(target.value);
Update_Display();
})