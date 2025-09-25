import promptSync from "prompt-sync";
const prompt = promptSync();

const groceryBill = (): void => {
  const item1: number = parseFloat(prompt("Enter price of item 1: "));
  const item2: number = parseFloat(prompt("Enter price of item 2: "));
  const item3: number = parseFloat(prompt("Enter price of item 3: "));

  if (isNaN(item1) || item1 < 0) {
    console.log("Invalid input: Item 1 price must be a positive number.");
    return;
  }

  if (isNaN(item2) || item2 < 0) {
    console.log("Invalid input: Item 2 price must be a positive number.");
    return;
  }

  if (isNaN(item3) || item3 < 0) {
    console.log("Invalid input: Item 3 price must be a positive number.");
    return;
  }

  const total: number = item1 + item2 + item3;

  console.log(`Total grocery bill: $${total.toFixed(2)}`);
};

groceryBill();
