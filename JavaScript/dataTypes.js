//primitive

var x = 10;
var str = "Hello World";
let boolVal = true;

console.log(typeof(boolVal));

var z; //undefined
var a = null;

var obj = {a:10};
//obj = null;

//console.log(obj.a);
//console.log(typeof(obj.a));

//non-primitives
//objects
var emp = {
    id:001
}

//second way
var emp2 = new Object();
emp2.id = 001;

function Emp3(){

}

//arrays

var arr = [1,"2",3];
//arrays are index based and index starts form 0

//console.log(arr[0]);
arr[2];

arr[3] = 4;
console.log(arr[3]);

console.log("array length: " + arr.length)
for(var i=0; i<arr.length; i++){
    console.log((arr[i]));
}

//array of objects

var arrayOfObj = [
    {
        id:001
    },
    {
        id:002
    },
    {
        id:003
    }
];

for()



