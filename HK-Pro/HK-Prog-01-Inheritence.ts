class Fruits {
    Name:string;
    Color:string;
    Size:string;
    constructor (Name : string, Color : string, Size : string){
    this.Name = Name;
    this.Color = Color;
    this.Size = Size;
        }
}
class Melons extends Fruits {
Type:string;
Shape:string;
Origin:string;
constructor (Name: string, Color : string, Size : string, Type : string, Shape : string, Origin : string ){
    super(Name, Color, Size);
    this.Name = Name;
    this.Color = Color;
    this.Size = Size;
    this.Type = Type;
    this.Shape = Shape;
    this.Origin = Origin;
}

Food(){
    return this.Name + " " +this.Color + " "+ this.Type +" " +this.Shape;
}
}
var obj = new Melons ("Watermelon","Red","Medium","Sweet", "Round","India")

console.log(obj.Food())

