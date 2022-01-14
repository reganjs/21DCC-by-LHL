/* Your task is to write a function that will take in an array of objects containing switches. The function will change the value of the
isOn property to true for every switch in the list, and then return the updated array.

You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not 
toggled!*/

const switchAllTogglesOn = (toggleList) => {
    for (let i = 0; i < toggleList.length; i++) {
        toggleList[i].isOn = true;
    }
    return toggleList
}