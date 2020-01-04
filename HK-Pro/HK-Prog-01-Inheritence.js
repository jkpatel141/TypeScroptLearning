var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fruits = /** @class */ (function () {
    function Fruits(Name, Color, Size) {
        this.Name = Name;
        this.Color = Color;
        this.Size = Size;
    }
    return Fruits;
}());
var Melons = /** @class */ (function (_super) {
    __extends(Melons, _super);
    function Melons(Name, Color, Size, Type, Shape, Origin) {
        var _this = _super.call(this, Name, Color, Size) || this;
        _this.Name = Name;
        _this.Color = Color;
        _this.Size = Size;
        _this.Type = Type;
        _this.Shape = Shape;
        _this.Origin = Origin;
        return _this;
    }
    Melons.prototype.Food = function () {
        return this.Name + " " + this.Color + " " + this.Type + " " + this.Shape;
    };
    return Melons;
}(Fruits));
var obj = new Melons("Watermelon", "Red", "Medium", "Sweet", "Round", "India");
console.log(obj.Food());
