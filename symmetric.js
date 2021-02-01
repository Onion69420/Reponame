class Array {
 
    constructor(array){
        this.array = array;
    }
 
    symmetric() {
 
        for (let i = 0; i < Math.floor(this.array.length/2); i++) {
            if(this.array[i] != this.array[this.array.length -1 -i]) {
                console.log(this.array, "is not symmetric");
                return false;
            }
        }
        console.log(this.array, "is symmetric");
        return true;
    }
 
}
 
let myArray = new Array([1, 2, 3, 3, 1]);
let myOtherArray = new Array([1, 2, 3, 3, 2, 1]);
 
myArray.symmetric();
myOtherArray.symmetric();