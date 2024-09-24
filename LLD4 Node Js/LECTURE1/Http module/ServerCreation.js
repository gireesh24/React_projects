const http=require('http')

const server=http.createServer((req,res)=>{
    res.setHeader("Content_type","text/plin")
    if(req.url==="/home"){
        res.write("welcome to home page")
       return   res.end()
    }
    else if(req.url==="/home/main"){
        res.write("welcome to main module")
    }
    else{
        res.write("hello this sample http server")
      
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