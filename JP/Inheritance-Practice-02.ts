class In_practice_01{

    Num_1 : number = 50;
    Num_2 : number = 10;

  main_method_add(){

    return this.Num_1+ this.Num_2;

  } 

  main_method_mul(){

   return this.Num_1* this.Num_2;

  }

  main_method_avg(){

  return this.Num_1 / this.Num_2 * 10 ;

  }
  
}

class In_practice_02 extends In_practice_01{

    second_method_div(){
       
        return this.Num_1 / this.Num_2

    }

}
  
var magic = new In_practice_02();

console.log("This is second class addition of :" +magic.Num_1+ " and " +magic.Num_2+ " and calling the method from first class: " +magic.main_method_add());  // this method derives from first class

console.log("This is second class average of :" +magic.Num_1+ " and " +magic.Num_2+ " and calling the method from first class: " +magic.main_method_avg());  // this method derives from first class


class In_practice_03 extends In_practice_02{

    third_method_sup(){

        return this.Num_1 - this.Num_2;
    }

}

var magic_2 = new In_practice_03();

console.log("This is third class Division of :" +magic.Num_1+ " and " +magic.Num_2+ " and calling the method from second class: " +magic_2.second_method_div());  // this method derives from second class

console.log("This is third class Addition of :" +magic.Num_1+ " and " +magic.Num_2+ " and calling the method from first class: " +magic_2.main_method_add());  // this method derives from first class

console.log("This is third class Average of :" +magic.Num_1+ " and " +magic.Num_2+ " and calling the method from first class: " +magic_2.main_method_avg());  // this method derives from first class

console.log("This is third class Multiple of :" +magic.Num_1+ " and " +magic.Num_2+ " and calling the method from first class: " +magic_2.main_method_mul());  // this method derives from first class

