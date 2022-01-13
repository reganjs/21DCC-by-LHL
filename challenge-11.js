/* Your task is to write a function that will take in a list of platforms and a date as a string. That function will update the date 
property on the first platform with an empty date and then return the platform list.

In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform 
list.*/

const bookFreePlatform = (platformList, missionDate) => {
    for (let whoGivesAShit of platformList) {
        if (whoGivesAShit.bookDate === undefined) {
            whoGivesAShit.bookDate = missionDate
            break;
        }
    }
    return platformList;
}