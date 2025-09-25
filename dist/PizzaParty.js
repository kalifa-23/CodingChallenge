import promptSync from "prompt-sync";
const prompt = promptSync();
const pizzaPartySplit = () => {
    const pizza = parseInt(prompt("How many pizzas were ordered? "), 10);
    const people = parseInt(prompt("How many people are at the party?"), 10);
    // total slices is pizzas * 8, Since 1 pizza is 8 slices
    const totalSlice = pizza * 8;
    if (people === 0) {
        console.log("No people to share the pizza.");
        return;
    }
    // slices each person gets
    const slicePerPerson = totalSlice / people;
    // leftover slices (remainder);
    const leftOver = totalSlice % people;
    console.log(`Each person gets ${slicePerPerson} slices.`);
    console.log(`Leftover slices: ${leftOver}`);
};
pizzaPartySplit();
