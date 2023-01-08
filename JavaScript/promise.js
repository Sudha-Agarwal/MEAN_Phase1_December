function myAyncFunction(name){

return new Promise(function(resolve,reject,param){
    if(name == "Sudha"){
        resolve("Here is Sudha")
    }
    else{
        reject("Oops! This is not Sudha");
    }
});
}

/*myAyncFunction("Sudha").then(function(val){
    console.log(val)
})*/


function asyncFun(name){
    let promise = new Promise(function(resolve,reject){
    if(name =="Sudha"){
        resolve("Resolved");//function calling
    }
    else{
        reject("rejected");
    }
});
return promise;
}

function resolve(data){
    console.log(data);
}

function reject(data){
    console.log(data);

}
asyncFun("Sudha1").then(function (data){
    console.log(data);
}).catch(function (data){
    console.log(data);
});