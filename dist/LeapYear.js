import promptSync from "prompt-sync";
const prompt = promptSync();
const leapYear = () => {
    const Year = parseInt(prompt("Enter a Year(e.g 2003): "), 10);
    if (isNaN(Year) || Year <= 0) {
        console.log("Invalid input: Year must be a positive whole number.");
        return;
    }
    if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
        console.log(`${Year} is a leap Year.`);
    }
    else {
        console.log(`${Year} is not a leap Year.`);
    }
};
leapYear();
