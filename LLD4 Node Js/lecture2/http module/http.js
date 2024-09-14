const http=require('http')
// create a server
const server=http.createServer((req,res)=>{
    // set response header
    res.setHeader('Content-Type','text/http');

    // res.write('hello World write method');
    res.write(`<html><body>
        <h1>this is http response</h1></body></html>`)
 res.statusCode=200;
// res.end("hello, world")
res.end();

});
const port=2098;

server.listen(port,()=>{
    console.log(`server is running on ${port}`)
})