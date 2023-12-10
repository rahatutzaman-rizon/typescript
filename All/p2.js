// Create an interface called Person with optional properties address and phone. 
// The address property itself will be another object containing city and street properties. 
// Implement a function named getAddressCity that takes an argument of type Person and returns the city 
// from the address property of the Person object.Use optional chaining to prevent any type errors
function getAddressCity(person) {
    var _a;
    return (_a = person.address) === null || _a === void 0 ? void 0 : _a.city;
}
