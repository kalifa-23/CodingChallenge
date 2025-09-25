import promptSync from "prompt-sync";
const prompt = promptSync();

const busTicketDiscount = (): void => {
  // Prompt for age
  const age: number = parseInt(prompt("Enter your age: "), 10);

  if (isNaN(age) || age <= 0) {
    console.log("Age must be at lest 1 year.");
  } else if (age <= 12 || age >= 65) {
    console.log("Discounted ticket.");
  } else {
    console.log("Full price");
  }
};

busTicketDiscount();
