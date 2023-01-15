let addTwoNum = (num1, num2) => num1 + num2;  

console.log("Default value = " + addTwoNum(1,2));


var sqr = num => { 
    var res=  num + num;
    return res*res;
}

var arr = [5,6];
//arr.sort();

//arr.forEach(res => console.log(res * res));



//console.log(arr);

//console.log(addTwoNum(1,2));
//console.log(sqr(5));

var obj = {
    id:20,
    counter: function(){
        console.log(this.id);
        setTimeout(function(){
            console.log(this.id);
        }.bind(this),1000)
    }
}

var obj1 = {
    id:20,
    counter:function(){        
        setTimeout(() => {
            console.log(this.id)
        },1000)
    }
}
obj.counter();