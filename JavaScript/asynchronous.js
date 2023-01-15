
function getTodo1(){
    console.log("before setTimeout");

    //simulating code delay using setTimeout

    setTimeout(function(){
        var a = 10;
        var b= 20;
        console.log("setTimeout called " + (a*b));
    },1000);

    console.log("after setTimeout");

}

//getTodo1();

//without callback
function getTodo(){
    setTimeout(function(){
        return {text:"Complete data"};
    },1000);
}

//let data = getTodo();
//console.log(data.text);

//getTodo();

//with callback

function getTodoCallback(callback1){
    setTimeout(() =>{
        var data = {text:"Data complete"};
        callback1(data);
    },2000);
}

function printData(data){
    console.log(data.text);
}
//getTodoCallback(printData);

//second way - with anonymous functions
getTodoCallback(data =>{
    console.log(data.text);
});


function abc(){

    return function xyz(){
        
    }
}