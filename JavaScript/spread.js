var arr1=[1,2,3];
var arr2 = [4,5,6];

var arr3=[...arr1, ...arr2];

console.log(Math.min(...arr3));


let weakmap = new WeakMap();

weakmap.set("str", "abc");//not allowed

