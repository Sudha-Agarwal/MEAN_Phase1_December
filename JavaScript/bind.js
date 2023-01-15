const person = { 
    firstName:'Sudha',
    lastName:'Agarwal',
    fullName:function(){
        return this.firstName + this.lastName;
    }
}

const member = {
    firstName:'ABC',
    lastName:'XYZ'
}

let fullName = person.fullName.bind(member);

console.log(fullName());