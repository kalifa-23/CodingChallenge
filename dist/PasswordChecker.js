import promptSync from "prompt-sync";
const prompt = promptSync();
const passwordChecker = () => {
    const secret = "lemon123";
    const password = prompt("Enter your password: ");
    if (!password) {
        console.log("Invalid input: Password cannot be empty.");
        return;
    }
    if (password === secret) {
        console.log("Access granted.");
    }
    else {
        console.log("Access denied.");
    }
};
passwordChecker();
