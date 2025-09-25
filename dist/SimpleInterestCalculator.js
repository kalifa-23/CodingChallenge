import promptSync from "prompt-sync";
const prompt = promptSync();
const simpleInterest = () => {
    const principal = parseFloat(prompt("Enter principal amount ($): "));
    const rate = parseFloat(prompt("Enter annual interest rate (%): "));
    const years = parseInt(prompt("Enter number of years: "), 10);
    if (isNaN(principal) || principal <= 0) {
        console.log("Invalid input: Principal must be a positive number.");
        return;
    }
    if (isNaN(rate) || rate <= 0) {
        console.log("Invalid input: Rate must be a positive number.");
        return;
    }
    if (isNaN(years) || years <= 0) {
        console.log("Invalid input: Years must be a positive whole number.");
        return;
    }
    // Interest = (Principal × Rate × Time) / 100
    const interest = (principal * rate * years) / 100;
    console.log(`Total interest earned: $${interest.toFixed(2)}`);
};
simpleInterest();
