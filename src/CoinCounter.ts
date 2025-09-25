import promptSync from "prompt-sync";
const prompt = promptSync();

const coinCounter = (): void => {
  const pennies: number = parseInt(prompt("Enter number of pennies: "), 10);
  const nickels: number = parseInt(prompt("Enter number of nickels: "), 10);
  const dimes: number = parseInt(prompt("Enter number of dimes: "), 10);
  const quarters: number = parseInt(prompt("Enter number of quarters: "), 10);

  if (
    isNaN(pennies) || isNaN(nickels) || isNaN(dimes) || isNaN(quarters) ||
    pennies < 0 || nickels < 0 || dimes < 0 || quarters < 0
  ) {
    console.log("Invalid input: All coin counts must be non-negative whole numbers.");
    return;
  }

  const totalCents: number = (pennies * 1) + (nickels * 5) + (dimes * 10) + (quarters * 25);
  const dollars: number = totalCents / 100;

  console.log(`Total amount: $${dollars.toFixed(2)}`);
};

coinCounter();
