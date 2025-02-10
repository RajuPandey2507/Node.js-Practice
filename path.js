//Q.1 How to create multiple file using for loop & create file inside folder ?
// first import fs module.
const fs = require("fs")

// how to get path folder ?
// we can use the path core module for creating inside a folder.
const path = require("path")

const myFolder = path.join(__dirname,"myfolder");
for(let i = 0;i < 3;i++){
    fs.writeFileSync(`${myFolder}/show${i}.txt`,`the file no ${i}`)

}

// how to get file name in single folder ?
fs.readdir(myFolder,(err,item)=>{
    // console.log(item)
    //for seprate file name getting use for Each method
    item.forEach((items,index)=>{
        console.log(`file ${index} name is ${items}`)
    })
})
// const deleteData = fs.unlinkSync("data.txt")
// console.log(deleteData)
