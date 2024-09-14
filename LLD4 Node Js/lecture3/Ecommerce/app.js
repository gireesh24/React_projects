// import the express
const express=require('express')

// create an instance of an express application
const app=express();
const bodyParser=require('body-parser');
const productsDB=require("./ProductsDB");

// console.log(products)
function middleware(req,res,next){
    console.log('middleware called')
    console.log(`${req.method} ${req.url} ${req.status}`)
    next()
}
app.use(middleware)
//// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.post("/products",(req, res)=>{
    const newproduct=req.body;

})
app.get("/",(req,res)=>{
   res.status(200).send('home page')

})

app.get("/products",(req,res)=>{
    try{
    // res.send('this is product page');
    const productData=productsDB.productsData;
    res.status(200).send(productData)
    console.log(productData);
    console.log('products page called')
    }catch(err){
        res.status(500).send("somthing went worng")
    }
})

app.post("/products",(req,res)=>{
    // const newProduct=req.body;
    // const {title, price, category, image, rating}=newProduct;
    // if(!title || !price || !category || !image || !rating){
    //     return res.status(400).send({message:"product details are not present"})
    // }

    // try{
    //     // create new UUID
    //     const uuid= Math.floor((Math.random()*100)).toString();
    //     newProduct.id=Number(uuid)
    //     productsDB.productsData=[...productsDB.productsData, newProduct];

    //     res.status(201).send(newProduct)
    // }catch(err){
    //     res.status(500).send({message:"something wnet wrong"});
    // }
    const newProduct = req.body;

    const {title, price, category, image, rating} = newProduct;

    if(!title || !price || !category || !image || !rating){
      return res.status(400).send({message:"Product Details are not present"});  
    }

    try{
         //create a new UUID 

        const uuid  =  Math.floor((Math.random() * 100)).toString();

        newProduct.id = Number(uuid);

        productsDB.productsData = [...productsDB.productsData, newProduct];

        res.status(201).send(newProduct);
    }
    catch(err){
        res.status(500).send({message:"Something went wrong"});
    }

})
app.delete("/products",(req,res)=>{
 try{  
     productsDB.products=[];
    res.status(200).send("all products deleted")
 }
 catch(err){
    res.status(500).send('something went wrong')
 }
})
app.get("/products/:id",(req,res)=>{
    res.send('this is product page')
})
app.get("/contact",(req,res)=>{
    res.send('this is contact page')
})

// to handle worng urls
app.use((req,res)=>{
res.status(404).send('your trying invalid path')
})
// defining port number
const port=3098;

// make a app listner 
app.listen(port,()=>{
    console.log(`server is running succefully in port ${port}`)
})

// const productData=productsDB.productsData;

// console.log(productData)