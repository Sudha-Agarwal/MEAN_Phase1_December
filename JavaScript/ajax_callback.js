function makeAjaxCall(url, methodType, callback){

    var xhr = new XMLHttpRequest();
    xhr.open(methodType, url);
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){      
                callback(xhr.response);
            }
        }
    }
}


function display(data){
    document.getElementById("demo").innerHTML = data;
}
var URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
makeAjaxCall(URL, "GET", display);