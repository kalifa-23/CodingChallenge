import { parse } from "path";
import promptSync from "prompt-sync";
const prompt = promptSync();

const allowanceTracker = (): void => {
  const allowance: number = parseFloat(
    prompt("How much allowance per week? $")
  );
  const weeks: number = parseFloat(prompt("How many weeks will Noah save? "));

  if (isNaN(allowance) || allowance <= 0) {
    console.log("Invalid allowance amount. Please enter a positive number.");
    return;
  }

  if (isNaN(weeks) || weeks <= 0) {
    console.log("Invalid weeks. Please enter a positive number.");
    return;
  }

  // The total amount saved is allowance * weeks
  const amountSaved: number = allowance * weeks;
  const weekLabel = weeks === 1 ? "week" : "weeks";

  console.log(
    `Noah gets a weekly allowance of $${allowance.toFixed(
      2
    )} and after ${weeks} ${weekLabel}, he saved a total of $${amountSaved.toFixed(
      2
    )}`
  );
};

allowanceTracker();
