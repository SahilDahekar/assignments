const fs = require('fs');

fs.readFile("./a.txt", "utf8", (err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File Contents: " + data);
    }
})

console.log("Before Sum");

function calculateSum(){
    let sum = 0;

    for(let i = 0; i < 10; i++){
        sum++;
    }

    console.log(sum);
}

calculateSum();

console.log("After Sum");