var ArrayExample = /** @class */ (function () {
    function ArrayExample() {
        this.customer = ["pk", "hk", "ds", "jp", "vd", "nc"];
    }
    ArrayExample.prototype.test_method = function () {
        return this.customer.pop();
    };
    ArrayExample.prototype.test_method_1 = function () {
        for (var i = 0; i < this.customer.length; i++) {
            console.log("This is print command : " + this.customer[i]);
        }
    };
    ArrayExample.prototype.test_method_push = function (pushing) {
        return this.customer.push(pushing);
    };
    return ArrayExample;
}());
var student = new ArrayExample();
console.log("Fourth position in array is" + " " + student.customer[3]);
console.log("2nd place in array is" + " " + student.customer[1]);
console.log("Array with pop method" + " " + student.test_method());
console.log("Array with push method" + " " + student.test_method_push("testing"));
student.test_method_1();
