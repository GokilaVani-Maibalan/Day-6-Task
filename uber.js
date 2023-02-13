class Uber{
    // Final Uber Fare = ((base fare + rate of total time taken +
    //      rate of total distance covered) + 
    //      tolls and other fees
    constructor(bf,td,tol,cp){
       this.base_fare = bf;
       this.total_distance = td;
       this.tolls = tol;
       this.costPerKm = cp;
       if(this.tolls == undefined || this.total_distance == undefined){
        this.tolls = 0;
        this.total_distance = 0
       }
    }

    getBill(){
        let total = this.base_fare + (this.total_distance*this.costPerKm)+this.tolls;
        return `The total fare is : ${total}`
    }
}


let uber = new Uber (12,5,0,10)
console.log(uber.getBill())