import promptSync from "prompt-sync";
const prompt = promptSync();
const sellingPrice = 1.5;
const costPrice = 0.5;
//profit per cup is selling price minus cost price
const profitPerCup = sellingPrice - costPrice;
const lemonadeProfit = () => {
    const cupSold = parseInt(prompt("How many cups of lemonade did Sara sell today? "), 10);
    if (isNaN(cupSold) || cupSold < 0) {
        console.log("Please enter a valid number of cups!");
        return;
    }
    // total profit is number of cups times profit per cup
    const totalProfit = profitPerCup * cupSold;
    console.log(`The profit Sara made by selling ${cupSold} ${cupSold > 1 ? "cups" : "cup"} is $${totalProfit.toFixed(2)}`);
};
lemonadeProfit();
