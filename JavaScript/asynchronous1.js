//function definition
function first(var_name){
    console.log("first");   
   var_name();
}

function second(){
    console.log("second");
}
first(second);//here some string is an argument

//open file
//file read operation - it takes some time
//printing file data

//callback functions are called after completion of a task

function readData(){
    //here will read the data from a file.
    setTimeout(function(){
      return "file data";
    }, 1000);
}

var data = readData();
console.log(data);

function readDataCallback(callback1){
    setTimeout(function(){
        var data = "file data";
        callback1(data);
    },1000);
}

function print(data_x){
    console.log(data_x);
}

readDataCallback(print);


addEventListener("click", function(){
    console.log(clicked);
});















function getTodoCallback(callback1){
    var data = "file data";
    callback1(data);
}

function print(data_y){
    console.log(data_y);
}

getTodoCallback(print);
// one more way
getTodoCallback(function(data_y){
    console.log(data_y);
});












//JS is executed line by line

//some lines of code

//some code to get data from server/or from file

//some other lines of code

//line of code to display data coming from the server



//To make JS asynchronous we have:
//1. Callback
//2.Promise
//3. Async await
//4.SetTimeOut

