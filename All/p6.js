//Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.
function TotalArraySum(param) {
    if (Array.isArray(param) && param.every(function (item) { return typeof item === 'number'; })) {
        var sum = param.reduce(function (acc, curr) { return acc + curr; }, 0);
        console.log("Sum of numbers:", sum);
    }
    else {
        console.error("Error: Parameter is not an array of numbers.");
    }
}
var ArrayMatch = [1, 2, 3, 4, 5];
var StringMatch = " text message ";
TotalArraySum(ArrayMatch);
TotalArraySum(StringMatch);
