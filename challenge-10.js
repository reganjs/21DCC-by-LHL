/* Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.

Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops. */

const averageWindSpeed = (weatherEntries) => {
    let total = 0;
    for (let weatherEntriesIndex = 0; weatherEntriesIndex < weatherEntries.length; weatherEntriesIndex++) {
        total += weatherEntries[weatherEntriesIndex].windSpeed;
    }
    return Math.round(total / weatherEntries.length);
};