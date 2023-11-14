export const calculator = (num1, num2) => {

    const add = num1 + num2;

    const subtract = num1 - num2;

    const multiply = num1 * num2;

    let divide;
    if (num2 === 0) divide = "Impossible";
    else divide = num1 / num2;

    return { add, subtract, multiply, divide }
}