//standard methods
class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }

    area() {
      return this.sideLength * this.sideLength;
    }

    areaMessage() {
      return `The area of this square is ${this.area()}`;
    }
  }
  const square = new Square(5);
  square.area(); // => 25
  square.areaMessage();


  //static methods
  class CommonMath {
    static triple(number) {
      return number * number * number;
    }

    static findHypotenuse(a, b) {
      return Math.sqrt(a * a + b * b);
    }
  }

const num = CommonMath.triple(3);
num; // => 27
const c = CommonMath.findHypotenuse(3, 4);
c;

//get and set
class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }

    get area() {
      return this.sideLength * this.sideLength;
    }

    set area(newArea) {
      this.sideLength = Math.sqrt(newArea);
    }
  }

  //get and set private fields
  class Square {
    #sideLength;
    constructor(sideLength) {
      if (sideLength > 0) {
        this.#sideLength = sideLength;
      } else {
        throw new Error("A square's side length must be a positive value");
      }
    }

    get sideLength() {
      this.#sideLength;
    }

    set sideLength(sideLength) {
      if (sideLength > 0) {
        this.#sideLength = sideLength;
      } else {
        throw new Error("A square's side length must be a positive value");
      }
    }
  }
