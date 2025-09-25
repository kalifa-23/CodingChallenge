import promptSync from "prompt-sync";
const prompt = promptSync();

const passwordChecker = (): void => {
  const secret: string = "lemon123";

  const password: string = prompt("Enter your password: ");

  if (!password) {
    console.log("Invalid input: Password cannot be empty.");
    return;
  }

  if (password === secret) {
    console.log("Access granted.");
  } else {
    console.log("Access denied.");
  }
};

passwordChecker();
