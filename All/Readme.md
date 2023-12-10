## What are some benefits of using TypeScript over JavaScript in a project?
  
- Less Errors: It helps catch mistakes     early with static typing.
- Clearer Code: Type annotations make code more readable and organized.
- Better Tools: TypeScript integrates well with tools, improving development efficiency.
- Early Problem Spotting: It identifies issues early, leading to more reliable code.



## What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

#### optional chainig:

- Purpose: Simplifies accessing properties on potentially null values.
- How it works: If user?.address?.city is null or undefined, the whole expression is undefined.

- example :
 - const user = {
  profile: {
    name: "karim",
    age: 30,
  },
  };


const age = user?.profile?.age;

console.log(age); 

#### nullish coalescing (??)
- Purpose: Provides a default value for null or undefined.
- How it works: value ?? "Default" assigns "Default" if value is null or undefined.
- example:
const username = user?.name ?? "rahim";


const username = undefined ?? "rahim";

console.log(username); // Output: "rahim"



## How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.
- fetchData function uses async/await to make an asynchronous request to fetch data. 
- example:
 async function fetchData(): Promise<string> {
  const response = await fetch('');
  const data: string = await response.json();
  return data;
}
- Advantages Over Callbacks or Promises:
Readability: Async/Await makes code easier to understand.
Error Handling: Simplifies dealing with errors using try/catch.
Sequencing: Helps in arranging tasks one after another for better structure.


## How can you use TypeScript's enums, and what are their advantages?.
- Declare enums for clear and meaningful representation of values.
- example 
 - enum Animal {
  Dog,
  Cat,
  Fish,
}

- function introducePet(pet: Animal): string {
  switch (pet) {

    case Animal.Dog:

      return 'Woof! I am a dog.';
    case Animal.Cat:

      return 'Meow! I am a cat.';

    case Animal.Fish:
      return 'Glub glub! I am a fish.';
  }
}

const myPet: Animal = Animal.Cat;
console.log(introducePet(myPet));


- advantage:
- Enhance code organization and make it more understandable.
- Increased type safety





# Explain the role of type guards in TypeScript and provide an example of a custom type guard.

 Type guards refine variable types, enhancing type safety in specific code blocks.
Custom type guard hasProperty checks if an object has a specified property, allowing safer property access.
- example:
function hasProperty(obj: any, prop: string): obj is 
{ [key: string]: any } {
  return prop in obj;
}

# Can you give an example of how to use "readonly" properties in TypeScript?

- The readonly keyword is used before the property declaration (readonly name: string).

- Defining a type with readonly properties
  type Book = {
  readonly title: string;
  readonly author: string;
  readonly pages: number;
};


- const book: Book = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  pages: 100,
};




# Explain what a union type is in TypeScript and provide an example of its usage.

- A union type in TypeScript that  allows a variable to hold values of multiple specified types and function parameteruse different definitions.
- example:
let data: string | number;

data = 'Hello';

console.log(data);

data = 42;

console.log(data);

function printData(input: string | number): void {

  console.log('Data:', input);
}

printData('ALLTYPE');   
printData(120332);    




