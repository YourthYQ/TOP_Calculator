const resultWrapper = document.querySelector(".result-wrapper");

const keys = document.querySelectorAll(".key");

const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operator");

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const equalButton = document.querySelector("#equals");

resultWrapper.textContent = "";




// Basic Functionality Implementations
const processInput = (value) => {
    resultWrapper.textContent += value;
}

const calculateResult = () => {
    try {
        resultWrapper.textContent = eval(resultWrapper.textContent);
    } catch {
        resultWrapper.textContent = "ERROR";
    }
}

function deleteLastEntry() {
    resultWrapper.textContent = resultWrapper.textContent.substring(
        0, 
        resultWrapper.textContent.length - 1
    );
}

function clearAll() {
    resultWrapper.textContent = "";
}

/*
const formatResult = (resultValue) => {
    // set the maximum length of result the screee can show
    const maxLength = 13

    // check if the resultLength exceed the maximum length
    if (resultValue.length > maxLength) {

        // check if the result contains a dot
        if (resultValue.indexOf(".") == -1) {

            let After_E = String(resultValue.length - 1);
            let Length_Of_Number_Between_Dot_And_E = maxLength - 3 - After_E.length;
            let Number_After_First_Digit = "";

            // Check if all trailing digit is 0, if so, then omit them
            if (Number(resultValue.substring(1, 1 + Length_Of_Number_Between_Dot_And_E + 1)) == 0) {
                Number_After_First_Digit = "";
            } else {
                Number_After_First_Digit = "." + resultValue.substring(1, 1 + Length_Of_Number_Between_Dot_And_E + 1);
            }

            // This Calculator does not round the last digit for case in this if-statement!

            resultValue = resultValue[0] 
            + Number_After_First_Digit
            + "e"
            + After_E;

        } else {
            let Index_Of_Dot = resultValue.indexOf(".");
            let Number_Before_Dot = resultValue.substring(0, Index_Of_Dot);
            let Number_After_Dot = resultValue.substring(Index_Of_Dot + 1);
            let Result_Without_Dot = Number_Before_Dot + Number_After_Dot;

            let Number_After_First_Digit = "";

            let After_E = String((Number_Before_Dot.length - 1) + (Number_After_Dot.length));
            let Length_Of_Number_Between_Dot_And_E = maxLength - 3 - After_E.length;

            // Check if all trailing digit is 0, if so, then omit them
            if (Number(Result_Without_Dot.substring(1, 1 + Length_Of_Number_Between_Dot_And_E + 1)) == 0) {
                Number_After_First_Digit = "";
            } else {
                Number_After_First_Digit = "." + Result_Without_Dot.substring(1, 1 + Length_Of_Number_Between_Dot_And_E + 1);
            }

            // This Calculator does not round the last digit for case in this if-statement!

            resultValue = Result_Without_Dot[0] 
            + Number_After_First_Digit
            + "e"
            + After_E;

            // resultValue = Number(eval(resultWrapper.textContent)).toFixed(13);
            // eval() used to evaluate the input and do the calculation
            // Number() used to type cast string to number
            // .toFixed() used to format the decimal places
        }

    }
    return resultValue;
}
*/




// Adding `click` event listeners for MOUSE interactions
// colorHoverEffect for Mouse
keys.forEach((key) => {
    key.addEventListener("mouseenter", () => {
        key.textContent == "=" 
        ? key.style.backgroundColor = "rgba(13, 79, 157, 0.752)"
        : key.style.backgroundColor = "rgba(227, 227, 227, 0.552)";
    });
    key.addEventListener("mouseleave", () => {
        key.textContent == "=" 
        ? key.style.backgroundColor = "#0d4f9d"
        : key.style.backgroundColor = "white";
    })
});

numberKeys.forEach((key) => {
    key.addEventListener("click", () => {
        processInput(key.textContent);
    });
});
operatorKeys.forEach((key) => {
    key.addEventListener("click", () => {
        processInput(key.textContent);
    });
});
equalButton.addEventListener('click', calculateResult);
clearButton.addEventListener('click', clearAll);
deleteButton.addEventListener('click', deleteLastEntry);




// // Adding `keydown` event listeners for KEYBOARD interactions
// colorHoverEffect for Keyboard
const colorHoverEffect = (key) => {
    let btn;
    if (!isNaN(key)) {
        btn = document.querySelector(`#number${key}`);
    } else if (key == ".") {
        btn = document.querySelector(`#dot`);
    } else if (key == "+") {
        btn = document.querySelector(`#add`);
    } else if (key == "-") {
        btn = document.querySelector(`#substract`);
    } else if (key == "*") {
        btn = document.querySelector(`#multiply`);
    } else if (key == "/") {
        btn = document.querySelector(`#divide`);
    } else if (key == "=" || key == "Enter") {
        btn = document.querySelector(`#equals`);
    } else if (key == "Backspace") {
        btn = document.querySelector(`#delete`);
    } else if (key == "Escape") {
        btn = document.querySelector(`#clear`);
    }

    if (btn != null) {
        if (key != "=" && key != "Enter") {
            btn.style.backgroundColor = "rgba(148, 148, 148, 1)";
            setTimeout(() => {
                btn.style.backgroundColor = "white";
            }, 35);
            // asetTimeout() is used for a delay in the execution
            /* Unit of time in `setTimeout()` is milliseconds
             * 1 second = 1000 milliseconds
             */
        } else {
            btn.style.backgroundColor = "rgba(226, 238, 253, 1)";
            setTimeout(() => {
                btn.style.backgroundColor = "#0d4f9d";
            }, 35);
        }
    }
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    colorHoverEffect(key);
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
            processInput(key);
            break;
        case 'Enter':
        case '=':
            calculateResult();
            break;
        case 'Backspace':
            deleteLastEntry();
            break;
        case 'Escape':  // 'Esc' key to clear
            clearAll();
            break;
    }
});

// Mouse Only
/*
for (const key of numberKeys) {
    key.addEventListener("click", () => {
        resultWrapper.textContent += key.textContent;
    });
}

for (const key of operatorKeys) {
    key.addEventListener("click", () => {
        resultWrapper.textContent += key.textContent;
    });
}

clearButton.addEventListener("click", () => {
    resultWrapper.textContent = "";
});

deleteButton.addEventListener("click", () => {
    resultWrapper.textContent = resultWrapper.textContent.substring(
        0, 
        resultWrapper.textContent.length - 1
    );
});

equalButton.addEventListener("click", () => {
    try {
        resultWrapper.textContent = eval(resultWrapper.textContent);
    } catch {
        resultWrapper.textContent = "ERROR";
    }
});
*/