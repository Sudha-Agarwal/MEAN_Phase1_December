function display(){
    alert("hi");
    display1();

    var x = 10; //dataType:number
    x = "Hello"; //dataTtype:string
    x = true; //dataType:boolean

    //Arithmetic operator

    x = 10;
    y = 20;

    console.log(x / y);
    document.write(x);

    x = x + 10;
    //or
    x += 10; //Assignment Operator
    x -= 10;

    x *= 10;

    x = 10;
    y = 20;

    //comparision operators
    // 1. == equal to

    x == y; //false

    //2. not equal

    x != y; //true

    //3. greater than

    x > y; //false
    x >= y; 

    //4. less than

    x < y; //true
    x <= y; 


    //logical operator
    //&& || !

    //&& - logical and
    //if both conditions are true it will true else false

    // || - logical or
    //if atleast one condition is true it will true else false

    // ! - negate
    //convert false into true and true into false

    //How to do we compare

    if(x != y || x >10){
        //this block is executed when the condition is true
        console.log("x is not equal to Y");
    }

    else{
        //this block is executed when the condition is false
        console.log("x is equal to y");
    }
}


function display1(){
    alert("called from display");
}