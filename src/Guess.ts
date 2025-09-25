import promptSync from "prompt-sync";
const prompt = promptSync();

const guessNumber = (): void =>{
    const secretNumber = 7;

    // Prompt the user to guess
    const guessNum: number = parseInt(prompt('Guess the number (one try): '));

    if(isNaN(guessNum)){
        console.log('Invalid guess');
    }else if(guessNum < secretNumber){
        console.log('Too low');
    }else if(guessNum > secretNumber){
        console.log('Too high')
    }else{
        console.log('Correct!')
    }
}

guessNumber()