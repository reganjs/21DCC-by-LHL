/* Making sure that a value is within a specific range is a common task in programming. In this case, the structure given is a gauge 
object with a current value, a minimum and a maximum. If the current value is between the minimum and maximum, then everything is peachy,
if not, we return a message saying that there is trouble.

Your task is to create a function that will take the gauge object as a parameter, and will return true if the current value 
is between the minimum and maximum, and return false if the value is outside those. */

const checkGaugeStatus = (gauge) => {
    if (gauge.current > gauge.min && gauge.current < gauge.max) {
        return true;
    }
    return false;
};