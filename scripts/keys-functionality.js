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
        console.log(resultWrapper.textContent);
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