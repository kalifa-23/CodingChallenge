import promptSync from "prompt-sync";
const prompt = promptSync();
const groceryBill = () => {
    const item1 = parseFloat(prompt("Enter price of item 1: "));
    const item2 = parseFloat(prompt("Enter price of item 2: "));
    const item3 = parseFloat(prompt("Enter price of item 3: "));
    if (isNaN(item1) || isNaN(item2) || isNaN(item3) || item1 < 0 || item2 < 0 || item3 < 0) {
        console.log("Invalid input: All prices must be positive numbers.");
        return;
    }
    const total = item1 + item2 + item3;
    console.log(`Total grocery bill: $${total.toFixed(2)}`);
};
groceryBill();
