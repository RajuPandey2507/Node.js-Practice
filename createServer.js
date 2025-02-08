// first import http core module.


const http = require("http");
const studentData = require("./staticData")
http.createServer((req,res)=>{
    // res.writeHead(200,{"content-type":"text/html"})
    // res.write("<h1>Connected Server Successfully</h1>")//html data send on server
    res.writeHead(200,{"content-type":"application\json"})
    // res.write(JSON.stringify([{name:"Ramu",age:21},{name:"Ramu1",age:20}]))
    // static json data send on sever same file.
    res.write(JSON.stringify(studentData));
    res.end();
}).listen(2000)
console