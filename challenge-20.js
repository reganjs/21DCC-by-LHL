/* Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. 
The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. 
If one of the values is a mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to 
the values inside the dataEntries object values.*/

const confirmReentryPlans = (speed, missionData, checks) => {
    if (speed < checks.maxSpeed && speed > checks.minSpeed) {
        const types = Object.keys(missionData);
        for (let type of types) {
            if (missionData[type].length != checks.dataEntries[type]) {
                return false;
            }
        }
        return true;
    }
    return false;
};