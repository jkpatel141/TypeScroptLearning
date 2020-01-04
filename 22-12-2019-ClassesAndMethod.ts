class testMethod {

   testString : String;
   
   constructor(testString : String){

    this.testString = testString;

   }

   test(){
 
    return this.testString;
    }
}

let check = new testMethod("Audi")

console.log(check.test())