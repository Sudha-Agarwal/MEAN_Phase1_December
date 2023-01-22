async function f(){
    console.log("Async function");
   
    let result = await promise;
    //let result1 = await promise1;

    console.log(result);
    console.log('hello');
}

let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('promise resolved');
    }, 2000);
})

f();
