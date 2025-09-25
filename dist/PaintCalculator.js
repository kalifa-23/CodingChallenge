import promptSync from "prompt-sync";
const prompt = promptSync();
const paintCalculator = () => {
    const width = parseInt(prompt("Enter the wall width(ft): "), 10);
    const height = parseInt(prompt("Enter the wall height(ft): "), 10);
    if (isNaN(width) || isNaN(height)) {
        console.log("Invalid input: width and height must be numbers.");
        return;
    }
    if (width <= 0 || height <= 0) {
        console.log("Invalid input: width and height must be greater than 0.");
        return;
    }
    // Calculate the Area of the wall
    const Area = width * height;
    // One can of paint covers 50 square feet.
    const oneCanOfPaint = 50;
    const cans = Math.ceil(Area / oneCanOfPaint);
    const canLabel = cans > 1 ? "cans" : "can";
    console.log(`Oliver needs ${cans} ${canLabel} of paint for an area of ${Area} sq units.`);
};
paintCalculator();
