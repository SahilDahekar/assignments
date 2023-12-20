const fs = require("fs");

fs.readFile("./a.txt", "utf8", (err,data) => {
    if(err){
        console.log(err);
    }
    else{
        const newData = data.replace(/\s+/g, " ");
        fs.writeFile("./a.txt", newData,"utf8", (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log("File Updated");
            }
        })
    }
})