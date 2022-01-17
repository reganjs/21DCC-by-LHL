/*Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the
most votes. There is always two lunch choices, and always an odd number of astronauts! */

const chooseLunchWinner = (listOfChoices) => {
    let count = 0;
    for (const choice of listOfChoices) {
        if (listOfChoices[0] === choice) {
            count++;
        } else {
            count--;
        }
    }
    return (count > 0 ? listOfChoices[0] : listOfChoices.find(obj => obj != listOfChoices[0]))
};