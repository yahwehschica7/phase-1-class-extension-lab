class Polygon {
    constructor(array) {
        this.array = []
        }
   
    get countSides() {
       let sides = this.array.map(index => console.log(index))       
      }

    get perimeter() {
        this.array.map(index => {
            console.log(index)
        })
    }
    // Use the get keyword to make a getter method countSides that 
    // counts the number of sides (each index in the array).   
}

class Triangle extends Polygon {

}


class Square extends Polygon {

}