class ArrayExample{
    customer: string[] = ["pk","hk","ds","jp","vd","nc"];

    test_method(){

        return this.customer.pop();
    }
    
    test_method_1(){

        for (var i=0; i<this.customer.length; i++){

            console.log("This is print command : " +this.customer[i]);
        
        }

      
    }

    test_method_push(pushing : string){

        return this.customer.push(pushing);
      
    }


}

var student = new ArrayExample()

console.log("Fourth position in array is"+ " "+ student.customer[3])
console.log("2nd place in array is"+" "+ student.customer[1])
console.log("Array with pop method"+" "+ student.test_method())
console.log("Array with push method"+" "+ student.test_method_push("testing"))

student.test_method_1();



