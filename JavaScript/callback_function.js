function first(callback){
    callback();
}

function second(){
    console.log("second called");
}

var x = "Hello";
first(second);


//synchronous programming
console.log("one");
console.log("two");

//some blocking code - making a request to server for some data


console.log(datafromserver);

console.log("three");


