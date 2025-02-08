// Q.1 How to take command line argument/input ?
// Ans. we can get by process.argv.
// console.log(process.argv[0])
// console.log(process.argv[1])
// console.log(process.argv[2])

// How to create & delete file based on command line ?
// Ans. We can use of fs module(file sytem module)

// import fs module
const fs = require("fs")

const action = process.argv[2];
const fileName = process.argv[3];
const data = process.argv[4]

if(action == "create"){
    fs.writeFileSync(fileName,data)
}
else if(action == "delete"){
    fs.unlinkSync(fileName)
}
else{
    console.log("Please Enter Right values ")
}