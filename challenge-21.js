/* Your last (!) task is to write a function that will take in an array of exchanged messages and an array of organized data. 
The goal is to parse each message, add them to a list and return an object containing two keys, transcript with the messages, 
missionData with the missionData object.

Each message should be parsed using the same structure as the first challenge;

"Origin: Message"

You can reuse the function of the first challenge if you want! */

const parseMissionSummary = (exchanges, missionData) => {
    let messageLog = [];
    for (let message of exchanges) {
        messageLog.push(`${message.origin}: ${message.message}`);
    }
    return { transcript: messageLog, missionData };
};