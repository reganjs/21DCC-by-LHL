// Your task is to write a function that will take in a list of data entries in the shape of an array of objects. The function 
// will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object 
// containing arrays.

const organizeData = (receivedData) => {
    return receivedData.reduce((acc, obj) => {
        if (!acc[obj.type]) {
            acc[obj.type] = [];
        }
        acc[obj.type].push(obj.data);
        return acc;
    }, {});
}