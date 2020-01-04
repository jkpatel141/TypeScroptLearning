var testMethod = /** @class */ (function () {
    function testMethod(testString) {
        this.testString = testString;
    }
    testMethod.prototype.test = function () {
        return this.testString.blink;
    };
    return testMethod;
}());
var check = new testMethod("Audi");
console.log(check.test());
