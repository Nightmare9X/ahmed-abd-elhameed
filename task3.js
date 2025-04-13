function calc(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            result = "no division by zero duh.";
        } else {
            result = num1 / num2;
        }
    } else {
        result = "Invalid operator";
    }

    console.log(result);
}


calc(10, 5, "+"); 
calc(10, 5, "-"); 
calc(10, 5, "*"); 
calc(10, 5, "/");
calc(10, 5, "^"); 