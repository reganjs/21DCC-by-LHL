/* Your task is to create a function that will take in an array representing the roster of astronauts, and return an array containing the 
jobs of each astronaut as a string.

In other terms, for each astronaut of the roster, you want to take the job and add it to a list, then return said list. */

const listAstronautJobs = (roster) => {
    astronautJobs = [];
    for (let rosterIndex = 0; rosterIndex < roster.length; rosterIndex++) {
        astronautJobs.push(roster[rosterIndex].job);
        return astronautJobs;
    }
};