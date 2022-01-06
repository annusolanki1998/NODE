const hobbies = ['Sports' , 'Cooking'];
// for(let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);


// Array methods
// hobbies.push("Cricket");
// console.log(hobbies);


//slice method
// const copiedArray = hobbies.slice();
// console.log(copiedArray);

const copiedArray = [...hobbies] //spread operator
console.log(copiedArray);

//Rest operator
 
const toArray = (arg1 , arg2 , arg3) => {
    return [arg1 , arg2 , arg3]
}
console.log(toArray(1,2,3,4));

const toArray1 = (...args) => {
    return args;

}
console.log(toArray1(1,2,3,4));



