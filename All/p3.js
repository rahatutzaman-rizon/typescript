//Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."s
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
function isCat(obj) {
    return obj instanceof Cat;
}
var myObject = new Cat();
if (isCat(myObject)) {
    console.log(" it is a cat.");
}
else {
    console.log(" it is not a cat.");
}
