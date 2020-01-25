var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var In_practice_01 = /** @class */ (function () {
    function In_practice_01() {
        this.Num_1 = 50;
        this.Num_2 = 10;
    }
    In_practice_01.prototype.main_method_add = function () {
        return this.Num_1 + this.Num_2;
    };
    In_practice_01.prototype.main_method_mul = function () {
        return this.Num_1 * this.Num_2;
    };
    In_practice_01.prototype.main_method_avg = function () {
        return this.Num_1 / this.Num_2 * 10;
    };
    return In_practice_01;
}());
var In_practice_02 = /** @class */ (function (_super) {
    __extends(In_practice_02, _super);
    function In_practice_02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    In_practice_02.prototype.second_method_div = function () {
        return this.Num_1 / this.Num_2;
    };
    return In_practice_02;
}(In_practice_01));
var magic = new In_practice_02();
console.log("This is second class addition of :" + magic.Num_1 + " and " + magic.Num_2 + " and calling the method from first class: " + magic.main_method_add()); // this method derives from first class
console.log("This is second class average of :" + magic.Num_1 + " and " + magic.Num_2 + " and calling the method from first class: " + magic.main_method_avg()); // this method derives from first class
var In_practice_03 = /** @class */ (function (_super) {
    __extends(In_practice_03, _super);
    function In_practice_03() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    In_practice_03.prototype.third_method_sup = function () {
        return this.Num_1 - this.Num_2;
    };
    return In_practice_03;
}(In_practice_02));
var magic_2 = new In_practice_03();
console.log("This is third class Division of :" + magic.Num_1 + " and " + magic.Num_2 + " and calling the method from second class: " + magic_2.second_method_div()); // this method derives from second class
console.log("This is third class Addition of :" + magic.Num_1 + " and " + magic.Num_2 + " and calling the method from first class: " + magic_2.main_method_add()); // this method derives from first class
console.log("This is third class Average of :" + magic.Num_1 + " and " + magic.Num_2 + " and calling the method from first class: " + magic_2.main_method_avg()); // this method derives from first class
console.log("This is third class Multiple of :" + magic.Num_1 + " and " + magic.Num_2 + " and calling the method from first class: " + magic_2.main_method_mul()); // this method derives from first class
