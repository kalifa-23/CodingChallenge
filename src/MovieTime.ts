import promptSync from "prompt-sync";
const prompt = promptSync();

const movieTime = (): void => {
  // Ask for user input
  const movies: number = parseInt(prompt("Enter number of movies: "), 10);
  const minutesEach: number = parseInt(prompt("Enter minutes per movie: "), 10);

  // Validate input
  if (isNaN(movies) || movies <= 0) {
    console.log(
      "Invalid input: number of movies must be a positive whole number."
    );
    return;
  }

  if (isNaN(minutesEach) || minutesEach <= 0) {
    console.log("Invalid input: minutes per movie must be a positive number.");
    return;
  }

  // Calculate total watch time
  const totalMinutes = movies * minutesEach;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  console.log(`Total watch time: ${hours} hour(s) and ${minutes} minute(s).`);
};

movieTime();
