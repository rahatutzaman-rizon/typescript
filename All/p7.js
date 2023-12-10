//Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.
function findFirstOccurrence(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
var ArrayList = [1, 2, 3, 4, 5, 3, 6];
var numberToCount = 3;
var numberofIndex = findFirstOccurrence(ArrayList, numberToCount);
var stringsArrayList = ['apple', 'banana', 'orange', 'banana', 'kiwi'];
var stringToCount = 'banana';
var stringofIndex = findFirstOccurrence(stringsArrayList, stringToCount);
