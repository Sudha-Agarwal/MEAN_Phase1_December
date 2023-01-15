function getPromise(URL){
    let promise = new Promise(function(resolve,reject){
        let req = new XMLHttpRequest();

        req.open("GET",URL);

        req.onload = function(){
            if(req.status == 200){
                resolve(req.response);
            }
            else{
                reject("There is an error");
            }
        }
        req.send();
    })

    return promise;
}
var URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

let promise = getPromise(URL);

let consumer = function(){
    promise.then(function(data){
        console.log(data);
        document.getElementById("demo").innerHTML = data;
    }).catch(function(error){
        console.log(error);
        document.getElementById("demo").innerHTML = error;
    })
};



