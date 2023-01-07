class Person{
    constructor(fName,lName){
        this.fName = fName;
        this.lName = lName;
    }
    showDetails(){
        console.log(this.fName + " " + this.lName);
    }
}

class Student extends Person{
    constructor(fName, lName, rollNo){
        super(fName,lName);
        //this.fName = fName;
        //this.lName = lName;
        this.rollNo = rollNo;
    }

    showDetails(){
        super.showDetails();
        console.log("Roll No " + this.rollNo);

    }
}
let obj = new Student("Sudha","Agarwal", 123);

obj.showDetails();