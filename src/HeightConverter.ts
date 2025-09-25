import promptSync from "prompt-sync";
const prompt = promptSync();

const heightConverter = (): void => {
  const feet: number = parseInt(prompt("Enter height (feet): "), 10);
  const inches: number = parseInt(prompt("Enter height (inches): "), 10);

  if (isNaN(feet) || feet < 0) {
    console.log("Invalid input: Feet must be a whole number greater than or equal to 0.");
    return;
  }

  if (isNaN(inches) || inches < 0) {
    console.log("Invalid input: Inches must be a whole number greater than or equal to 0.");
    return;
  }

  if (inches >= 12) {
    console.log("Invalid input: Inches must be less than 12 (0–11).");
    return;
  }

  // centimeters = (feet × 12 + inches) × 2.54
  const centimeters: number = (feet * 12 + inches) * 2.54;

  console.log(`Height: ${centimeters.toFixed(2)} centimeters`);
};

heightConverter();
