/* Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two 
dates in days and return an object containing the name of the mission and a rounded day difference.

A part of the code has been written for you, and it is important that it stays the same for the tests to work out.*/

const timeRemaining = (launchDate, missionName, fakeToday) => {
    const today = fakeToday || new Date();
    const launch = new Date(launchDate);

    let timeR = {
        missionName: missionName,
        daysRemaining: Math.ceil(Math.abs((launch.getTime()) - today.getTime()) / 86400000)
    }
    return timeR
};