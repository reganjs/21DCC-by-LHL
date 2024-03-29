/* Your task is to write a function that will take in an array of toggle objects and a specific toggle name. The goal is to switch only 
the specific toggle, without affecting the other toggles and then return the updated array.

Don't forget that you can use your previous function from the fourth challenge to help you complete it faster!*/

const switchSpecificToggle = (toggleList, specificToggle) => {
    for (let i = 0; i < toggleList.length; i++) {
        if (toggleList[i].name === specificToggle) {
            toggleList[i].isOn = !toggleList[i].isOn;
        }
        return toggleList;
    };
};