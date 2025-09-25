import promptSync from "prompt-sync";
const prompt = promptSync();
const classDeskPlanner = () => {
    const students = parseInt(prompt("Enter total number of students: "), 10);
    const desksPerRow = parseInt(prompt("Enter number of desks per row: "), 10);
    if (isNaN(students) || isNaN(desksPerRow) || students <= 0 || desksPerRow <= 0) {
        console.log("Invalid input: Both values must be positive whole numbers.");
        return;
    }
    const rows = Math.floor(students / desksPerRow);
    const partial = students % desksPerRow;
    console.log(`Full rows: ${rows}`);
    console.log(`Students in last row: ${partial}`);
};
classDeskPlanner();
