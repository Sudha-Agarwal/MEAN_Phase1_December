//function returning function

function greeting(){
    let message = 'hi';

    function sayHi(){
        console.log(message);
    }

    return sayHi;
}

let hi = greeting();
hi();


//let counter = 0;
const add = (function(){   
    let counter = 0;
    return {
        increment: function(){
        counter +=1;
        return counter;
    },   
        decrement: function(){
            counter -=1;
        return counter;
        }
    }
})();

console.log(add.increment());
console.log(add.increment());
console.log(add.decrement());
//console.log(add());

//IIFE
//function statement
function abc(){
}
abc();

//function expression
let abc1 = function (param){
}

abc1("parameter");

(function(param){
    console.log(param);
})("parameter1");
//iife(); //no need to call explicitly
//console.log(add());


for(var index=1; index<=3; index++){    
    (function(index){
        setTimeout(function(){
        console.log('after ' + index + 'seconds ' + index);
    },index*1000)})(index);
}

for(let index=1; index<=3; index++){       
        setTimeout(function(){
        console.log('after ' + index + 'seconds ' + index);
    },index*1000);
}



