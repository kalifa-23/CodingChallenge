import promptSync from "prompt-sync";
const prompt = promptSync();
const multiplicationTable = () => {
    const maxMultiply = 10;
    // Prompt for the number
    const number = parseInt(prompt("Enter a number: "), 10);
    if (isNaN(number) || number === 0) {
        console.log("Number shouldn't be 0\n");
        return;
    }
    console.log(`The multiplication table of ${number} up to ${maxMultiply}.`);
    for (let i = 1; i <= maxMultiply; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
};
multiplicationTable();
