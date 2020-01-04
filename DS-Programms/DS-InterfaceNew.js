var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addName = function () {
        return this.firstname + " " + this.secondname;
    };
    return Employee;
}());
var test = new Employee();
test.firstname = "testing-1";
test.secondname = "testing-2";
console.log(test.addName());
// function addName(Employee: Person): { firstname: string; address: string }
// {
// var newPerson = {firstname: "Ram", address: "South Bopal"}
// newPerson.firstname = Employee.firstname
// newPerson.address = Employee.secondname
// return (newPerson);
// }
// var myPerson = addName({firstname: "Shayam", secondname: "Sundar" });
// console.log(myPerson.firstname)
// console.log(myPerson.address)
