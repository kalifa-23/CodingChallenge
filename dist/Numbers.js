import promptSync from "prompt-sync";
const prompt = promptSync();
const evenOddChecker = () => {
    // Prompt the user for Input
    const digit = parseInt(prompt("Enter a Number: "), 10);
    if (isNaN(digit)) {
        console.log("Enter a valid a number");
        return;
    }
    let result;
    // The modulo operator (%) gives remainder. If remainder by 2 is 0 => even.
    digit % 2 === 0 ? (result = "Even") : (result = "Odd");
    console.log(`The number ${digit} is ${result}`);
};
evenOddChecker();
