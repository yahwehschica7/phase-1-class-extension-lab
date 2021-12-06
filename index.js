class Polygon {
    constructor(array) {
        this.array = array 
        }
   
    get countSides() {
        return this.array.length 
      }

    get perimeter() {
        return this.array.reduce((previousValue, currentValue) => 
            previousValue + currentValue);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (countSides > perimeter) {
            return false 
        } else {
            return true
        }
    }
}


class Square extends Polygon {
    get isValid() {
        if (countSides === 4) {
            return true
        } else {
            return false
        }
    }
    get area() {
        const area = countSides/2 * countsides/2
    }
}

