//shape object
class Shape {
    constructor(type) {
      this.type = type;
    }
    getType() {
      return `This is a ${this.type}`;
    }
}
  
//Triangle object (Inheritance)
class Triangle extends Shape {
  constructor(type, a, b, c) {
    super(type), (this.a = a), (this.b = b), (this.c = c);
  }
  getPerimeter() {
  const result = this.a + this.b + this.c;
    return result;
  }
}
  
const triangle = new Triangle("triangle", 4, 3, 6);

//Test
console.log(triangle.getPerimeter());
console.log(triangle.getType());