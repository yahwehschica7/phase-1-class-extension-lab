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
    triangleTest() {
        if (this.array[0] +this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0]
            && this.array[0] + this.array[2] > this.array[1]) { 
                return true
       }
    }
    get isValid() {
         if (this.countSides === 3 && this.triangleTest()) {
             return true
         } else {
             return false
        }
    }
}
        
        
class Square extends Polygon {
     equivalentSides() {
            if (this.array[0] === this.array[1] && this.array[0] === this.array[2]
                && this.array[0] === this.array[3]) { 
                    return true
           }
        }    
    get isValid() {
        if (this.countSides === 4 && this.equivalentSides()) {
            return true
        } else {
            return false
        }
    }
    get area() {
        return this.array[0] * this.array[1]
    }
}

