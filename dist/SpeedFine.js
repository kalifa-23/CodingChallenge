import promptSync from "prompt-sync";
const prompt = promptSync();
const speedFineCalculator = () => {
    const limit = parseInt(prompt("Enter the speed limit: "));
    const speed = parseInt(prompt("Enter Mia's speed: "));
    const limitCharge = 5;
    if (isNaN(limit) || limit <= 0) {
        console.log("Invalid speed limit. Please enter a positive number.");
        return;
    }
    if (isNaN(speed) || speed <= 0) {
        console.log("Invalid speed. Please enter a positive number.");
        return;
    }
    if (speed > limit) {
        // fine is charge based on the speed - limit multiply by limite charge
        const fine = (speed - limit) * limitCharge;
        console.log(`Fine: $${fine.toFixed(2)}`);
    }
    else {
        console.log("No fine. Drive safe!");
    }
};
speedFineCalculator();
