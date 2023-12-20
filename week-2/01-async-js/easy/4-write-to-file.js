const fs = require('fs');

let content = "This is the content added to the file";

fs.writeFile("./a.txt",content ,"utf8" , (err) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log("Contents written to file successfully");
        fs.readFile("./a.txt", "utf8", (err,data) => {
            if(err){
                console.log(err);
            }
            else{
                console.log("File Contents: " + data);
            }
        })
    }
})