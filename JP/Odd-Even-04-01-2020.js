var testing04 = /** @class */ (function () {
    function testing04() {
    }
    testing04.prototype.OddEven = function () {
        var num = document.getElementById('num').value;
        if (num % 2 == 0) {
            document.getElementById('result').innerHTML = num + '  Is Even Number';
        }
        else {
            document.getElementById('result').innerHTML = num + '  Is Odd Number';
        }
    };
    return testing04;
}());
var testing = new testing04();
