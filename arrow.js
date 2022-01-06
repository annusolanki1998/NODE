let myname = "Annu";
let age = 23;
let hasHobbies = true;

const summerizeUser = (userName , userAge , userHasHobby) => {
    return (
        'Name is '  +
         userName +
         ', Age is ' +
         userAge +
         ', and the hasHobby is: ' +
         userHasHobby 
    );
} ;
const add = (a,b) => a+b;
console.log(add(1,2));
const addOne = a => a+2;
console.log(addOne(2));
const addRandom = () => 1+5;
console.log(addRandom());

console.log(summerizeUser(myname, age, hasHobbies));