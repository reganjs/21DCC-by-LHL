/* Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. The function 
will then parse a message from each object, add it to an array then return the built array.

Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch. */

const parseTranscripts = (messages) => {

    var x = [];
    for (let i = 0; i < messages.length; i++) {
        x.push(messages[i].origin + ": " + messages[i].message);
    }
    return x;
};