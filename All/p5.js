//Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.
function CarDriver(car, driver) {
    return { car: car, driver: driver };
}
var Car = { make: 'audi', model: ' e-Tron ', year: 2023 };
var Driver = { name: 'karim', licenseNumber: 'ED1A23' };
var combinedDetails = CarDriver(Car, Driver);
console.log("Combined Details:", combinedDetails);
