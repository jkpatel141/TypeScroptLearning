interface Person
{
  firstname: string;
  secondname: string;
 addName() : string;
}

class Employee implements Person{

    firstname: string;
     secondname: string;
    

   addName() : string {
 
     return this.firstname + " " + this.secondname

    }

}

 var test =  new  Employee();

  test.firstname = "testing-1"
  test.secondname = "testing-2"
 console.log(test.addName())







