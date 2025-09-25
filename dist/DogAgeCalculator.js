import promptSync from "prompt-sync";
const prompt = promptSync();
const dogAge = () => {
    const humanYears = parseInt(prompt("Enter your dog's age in human years: "), 10);
    if (isNaN(humanYears) || humanYears <= 0) {
        console.log("Invalid input: Age must be a positive whole number.");
        return;
    }
    // Multiply humanYears by 7 to get the dogYears
    const dogYears = humanYears * 7;
    console.log(`Dog's age: ${dogYears} dog years`);
};
dogAge();
