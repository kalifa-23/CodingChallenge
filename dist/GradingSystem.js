import promptSync from "prompt-sync";
const prompt = promptSync();
const gradingSystemChecker = () => {
    // Prompt for score (0-100) and print letter grade.
    const score = parseInt(prompt('Enter your test score (0-100): '), 10);
    let grade;
    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        case score <= 60:
            grade = 'D';
            break;
        default:
            grade = 'Invalid Input. Enter score(0 - 100)';
    }
    console.log(`You grade for the score ${score}% is ${grade}.`);
};
gradingSystemChecker();
