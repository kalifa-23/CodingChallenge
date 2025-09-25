import promptSync from "prompt-sync";
const prompt = promptSync();
const bookReadingTracker = () => {
    // Prompt Jay for the numbers of a page in the book
    const pages = parseInt(prompt('How many pages in the book? '), 10);
    // Prompt Jay How many pages does he read each day?
    const pagePerDay = parseInt(prompt('How many pages does Jay read each day? '), 10);
    if (pagePerDay <= 0) {
        console.log('Pages per day must be at least 1.');
        return;
    }
    // Days it takes Jay to complete the pages
    const days = Math.ceil(pages / pagePerDay);
    console.log(`It will take Jay ${days} ${days > 1 ? 'days' : 'day'} to finish the book.`);
};
bookReadingTracker();
