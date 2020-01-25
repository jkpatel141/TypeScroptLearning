class Car{

  carComp : String;  
  carName : String;
  carModel : Number;
  carColor : String;
  carPrice : Number;
  carTax : Number;

   constructor(carComp :String, carName : String, carModel : Number, carColor : String, carPrice : Number, carTax : Number  ){

       this.carComp = carComp;
       this.carName = carName;
       this.carModel = carModel;
       this.carColor = carColor;
       this.carPrice = carPrice;
       this.carTax = carTax;

   }

   carDetails(){
    
    return "The companey name is : "+this.carComp +"<br>The car name: "+ this.carName +"<br>The module: "+ this.carModel +"<br> Car color is: "+ this.carColor +"<br> Car Price is: "+ this.carPrice +"<br>Total car Tax: "+ this.carTax; 

   }

}

 let aCar = new Car("Audi", "A47", 10230,"Blue",1000000.3265,10)

 document.write(aCar.carDetails())
 