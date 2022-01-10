/* Your task is to write a function that takes in the temperature, weather condition, wind speed, and direction as parameters and store 
them inside a structure that holds each value as properties.

There's a small and important detail for this one, you must convert the temperature from Fahrenheit to Celsius and convert the wind speed
from miles/hour to meters/second, and round both of them before storing them.

The information that LARRY gave you about temperature conversions are in the hint section.

The goal of this challenge is to convert multiple values, store them and group them inside an object. You can learn more about arrays 
by clicking the link below.

Fahrenheit to Celsius with : (temp - 32) * 5/9

Miles/hour to meters/seconds with : speed / 2.237

*/

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
    let weather = { temperature, condition, windSpeed, windDirection };
    weather.temperature = Math.round((weather.temperature - 32) * 5 / 9);
    weather.windSpeed = Math.round(weather.windSpeed / 2.237);
    return weather;
};