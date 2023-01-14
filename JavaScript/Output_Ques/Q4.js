let sum = 0; 
const a = [1, 2, 3];
a.forEach(getSum);
print(sum);
function getSum(ele) {
   sum += ele;
}

function print(sum){
    console.log(sum)
}