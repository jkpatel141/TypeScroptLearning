// This program gives example of classes and its method used in typescript


class Company{
    employee1:string;
    employee2:string;
    salary:number;
    totalNumberOfDay:number;
    availabledays:number;
    salaryPerday:number;
    salarygiven:number;
    // salaryGiven:number;
    // salaryDeduct:number;

    salaryDeducted(){
         this.salaryPerday=this.salary / this.totalNumberOfDay
         console.log("Salary per day of the employee is:" + " " +this.salaryPerday)
         return this.salaryPerday*this.availabledays
    
    }

    constructor (Emp1:string, emp2:string, sal:number){
    this.employee1=Emp1
    this.employee2=emp2
    this.salary=sal
    }
  
}

var employee = new Company("Durgesh","Nisarg",10000)
employee.availabledays=20;
employee.totalNumberOfDay=30;

console.log("Employee names are" + " " + employee.employee1 + " " + employee.employee2)
console.log("SalaryGivenToEmployee is" + " " + employee.salaryDeducted())

