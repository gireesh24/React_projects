const http=require('http')

const server=http.createServer((req,res)=>{
    res.setHeader("Content_type","text/html")
    if(req.url==="/home"){
        res.write("<h1>welcome to home page</h1>")
       return   res.end()
    }
    else if(req.url==="/home/main"){
      
        res.write("<html><head><title>Node Js</title></head><body>");
        res.write("<h1>Hello, World! I am node</h1>");
        res.write("<h3>welcome to main page</h3>");
        res.write("<body><p> this is p tag text in main module</p></body>");
        res.write("</body></html>");
    }
    else{
        res.write("<h5>hello this sample http server</h5>")
      
    }
    res.end();
    console.log(req)

})

const port=2000
server.listen(2000,"localhost",()=>{
    console.log("server started")
})

// to http module run comand in vs node filename
// to start nodemon project install nodemon to project and run file in terminal like nodemon filename