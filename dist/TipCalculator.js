import promptSync from "prompt-sync";
const prompt = promptSync();
const tipCalculator = () => {
    // Prompt for user Input
    const bill = parseInt(prompt("Enter the total bills: "), 10);
    const tipPercent = parseFloat(prompt("Enter the tip percentage(%): "));
    const people = parseInt(prompt("Enter the number of people: "), 10);
    if (bill <= 0) {
        console.log(" Invalid input: bill must be greater than 0.");
        return;
    }
    if (tipPercent < 0) {
        console.log("Invalid input: tip percent cannot be negative.");
        return;
    }
    if (people <= 0 || !Number.isInteger(people)) {
        console.log(" Invalid input: number of people must be a positive whole number.");
        return;
    }
    // Calculate tip & per person share
    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    const perPerson = total / people;
    console.log(`Each person pays $${perPerson.toFixed(2)} (Total: $${total.toFixed(2)}, Tip: $${tip.toFixed(2)})`);
};
tipCalculator();
