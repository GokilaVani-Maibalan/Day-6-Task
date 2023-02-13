class Circle{

    radius = 2;
    color = "red";

       constructor(){
        
       }
    // constructor (rad){
    //    this.radius = radius;
    // }
    // constructor(rad,col){
    //     this.radius = rad;
    //     this.color = col;
    // }

    getRadius(){
        return `Radius: ${this.radius}`
    }

    set Radius(rad){
        this.radius = rad;
        // return ` New Radius: ${this.radius}`
    }

    getColor(){
       return `Color: ${this.color}`;
    }

    set Color(color){
        this.color = color;
        // return `New Color: ${this.color}`
    }

    toString(){
        return JSON.stringify(this)
    
    }

    getArea(){
        let area = (this.radius*this.radius*Math.PI)
        return `Area : ${area}`
    }

    getCircumference(){
        let circum = (this.radius*2*Math.PI)
        return `Circumference : ${circum}`
    }
}

let circle1 = new Circle()
// let circle
console.log(circle1)
console.log(circle1.getRadius())
console.log(circle1.getColor())
circle1.Radius = "5"
circle1.Color = "blue"
console.log(circle1)
console.log(circle1.toString())
console.log(circle1.getArea())
console.log(circle1.getCircumference())


