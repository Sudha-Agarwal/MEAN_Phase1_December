
    function fullName(city){
        return this.firstName + " " + this.lastName + " " + city;
    }


const Sudha = {
    firstName: 'Sudha',
    lastName:'Agarwal'
}

const Sudha1 = {
    firstName: 'Sudha1',
    lastName:'Agarwal1'
}

console.log(fullName.call(Sudha,"Delhi"));
var fullName = fullName.bind(Sudha1,"Delhi");
console.log(fullName());