import promptSync from "prompt-sync";
const prompt = promptSync();
const birthdayAgeCalculator = () => {
    //Prompt the user for birth year
    const birthYear = parseInt(prompt('Enter your birth year(eg, 2001): '), 10);
    // Prompt the user for future year
    const futureYear = parseInt(prompt('Enter a future year(eg, 2025): '), 10);
    // Age is the difference between future year and birth year
    const age = futureYear - birthYear;
    console.log(`You will be ${age} years old in ${futureYear}`);
};
birthdayAgeCalculator();
