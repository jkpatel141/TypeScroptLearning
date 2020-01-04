interface Person
{
  firstname: string;
  secondname: string;

}

function addName(Employee: Person): { firstname: string; address: string } 
{
var newPerson = {firstname: "Ram", address: "South Bopal"}
newPerson.firstname=Employee.firstname;
newPerson.address=Employee.secondname;
return newPerson;
//console.log(newPerson)
}

var myPerson = addName({firstname: "Shayam", secondname: "Sundar" });

console.log(myPerson.firstname)
console.log(myPerson.address)


