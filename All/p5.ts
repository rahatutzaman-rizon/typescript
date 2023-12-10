//Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.


interface Car {
    make: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    licenseNumber: string;
}

function CarDriver(car: Car, driver: Driver): { car: Car; driver: Driver } {
    return { car, driver };
}


const Car: Car = { make: 'audi', model: ' e-Tron ', year: 2023 };
const Driver: Driver = { name: 'karim', licenseNumber: 'ED1A23' };

const combinedDetails = CarDriver(Car, Driver);
console.log("Combined Details:", combinedDetails);
