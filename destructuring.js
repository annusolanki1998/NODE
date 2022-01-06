const { Console } = require("console");

const person = {
    myname: 'Annu',
    age: 23,
    greet() {
        console.log('Hi, I am ' + this.myname);
    }
};
const printName = ({ myname }) => {
    console.log(myname);
}


printName (person);

const { myname , age} = person;
console.log(myname, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


