//1 
function processUnionType(input: string | number): number | string{
    if (typeof input === 'string') {
        return input.length;
    } else {
        return input * input;
    }
}

//2
interface Address {
    city: string;
    street: string;
}

interface Person {
    address?: Address;
    phone?: string;
}

function getAddressCity(person: Person): string | undefined {
    return person.address?.city;
}


//3
class Cat {
  
}

function isCat(obj: any): obj is Cat {
    return obj instanceof Cat;
}

const myObject: unknown = new Cat();

if (isCat(myObject)) {
    console.log(" it is a cat.");
} else {
    console.log(" it is not a cat.");
}



//4
function sumNumbers(mixedData: any[]): number {
    let total = 0;
    for (const item of mixedData) {
      if (typeof item === "number") {
        total += item;
      } else if (typeof item === "string") {
        
        const number = Number(item);
        if (!isNaN(number)) {
          total += number;
        }
      }
    }
    return total;
  }
  

  const mixedData = [1, "two", 3, "four", 5];
  const sumList = sumNumbers(mixedData);
  console.log("The sum of the all numbers:", sumList);
  
//5
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

//6

function TotalArraySum(param: unknown): void {
    if (Array.isArray(param) && param.every((item) => typeof item === 'number')) {
        const sum: number = (param as number[]).reduce((acc, curr) => acc + curr, 0);
        console.log("Sum of numbers:", sum);
    } else {
        console.error("Error: Parameter is not an array of numbers.");
    }
}


const ArrayMatch: unknown = [1, 2, 3, 4, 5];
const StringMatch: unknown = " text message ";

TotalArraySum(ArrayMatch); 
TotalArraySum(StringMatch);


//7

function findFirstOccurrence<T>(arr: T[], value: T): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
const ArrayList: number[] = [1, 2, 3, 4, 5, 3, 6];
const numberToCount: number = 3;
const numberofIndex = findFirstOccurrence(ArrayList, numberToCount);


const stringsArrayList: string[] = ['apple', 'banana', 'orange', 'banana', 'kiwi'];
const stringToCount: string = 'banana';
const stringofIndex = findFirstOccurrence(stringsArrayList, stringToCount);


