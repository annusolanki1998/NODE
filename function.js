var myname = "Annu";
var age = 23;
var hasHobbies = true;

function sumarizeUser(userName, userAge, userHasHobby){

    return (
        'Name is '  + 
        userName +   
        ', Age is '  + 
        userAge +  
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

console.log(sumarizeUser(myname,age,hasHobbies));