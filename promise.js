function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Your promise is resolve");
                resolve();

            }
            else {
                console.log("Your promise is rejected");
                reject();
            }

        }, 2000)
    })
}
func2()
.then(() => {console.log("Promise Fullfilled : Thank you")})
.catch(() => {console.log("Sorry for that" )})