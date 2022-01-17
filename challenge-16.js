/* Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return
the average speed rounded to the first decimal point.

Each object contains the altitude in meters, and a time stamp in seconds.*/

const getAverageSpeed = (firstPosition, secondPosition) => {
    speed = (secondPosition.altitude - firstPosition.altitude) / (secondPosition.time - firstPosition.time);
    speed = Math.round(speed * 10) / 10
    return speed;
};