function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Error: Please enter valid numbers.";
    } else {
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "multi":
                result = num1 * num2;
                break;
            case "div":
                result = num2 !== 0 ? num1 / num2 : "Error: Division by zero.";
                break;
            default:
                result = "Error: Invalid operation.";
        }
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operation").value = "add";
    document.getElementById("result").innerHTML = "";
}
