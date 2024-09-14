// manago db pasword : dBYDYNrt4stNUKPn
// manago db user name: gireeshvysyaraju
// mongo DB connection string :mongodb+srv://gireeshvysyaraju:dBYDYNrt4stNUKPn@cluster0.g58qy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const express=require("express")
const app=express()
const port=3030;

app.use(express.json())
// DB setup to project
const mongooes=require("mongoose");
const DbUrl="mongodb+srv://gireeshvysyaraju:dBYDYNrt4stNUKPn@cluster0.g58qy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongooes.connect(DbUrl)
.then(function(connection){
    console.log("connection established successfully");
}).catch(function(err){
    console.log(err)
});
// create schema
const Product_schema=new mongooes.Schema({
    product_name: {
        type: String,
        required: true,
        unique: true,
      },
      product_price: {
        type: Number,
        required: true,
      },
      isInStock: {
        type: Boolean,
        default: true,
      },
      category: {
        type: String,
        required: true,
      }
},{timestamps:true})

// create model
const Product_model=mongooes.model("Product", Product_schema);

// write a post call to write a data to DB
// app.post("/products", async (req,res)=>{
//     const body=req.body;
//     const product=await Product_model.create({
//         product_name:body.product_name,
//         product_price:body.product_price,
//         isInStock:body.isInStock
//     });
//     console.log(product)
//     return res.status(201).json({message:"data created successfully", product:product})
// });

app.post("/api/products", async (req, res) => {
    try {
      const body = req.body;
      const product = await Product_model.create({
        product_name: body.product_name,
        product_price: body.product_price,
        category: body.category,
        isInStock: body.isInStock
      });
      console.log(product);
      return res
        .status(201)
        .json({ message: "Product created successfully", product: product });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });
app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome to home page"})
})
// retrive data by DB
// app.get("/data", async (req,res)=>{
//   const data= await Product_model.find();
//    const time= Date.now;
// console.log(`[${timestamp}]`, 'This is a log message');
//   return res.status(200).send(data);
// })
app.get("/data", async (req, res) => {
  try {
    const data = await Product_model.find();
    const timestamp = Date.now();  // Corrected: Use Date.now() to get the current timestamp
    // console.log(`[${timestamp}]`, 'This is a log message');
    console.log(`${new Date().toISOString()}- ${req.method}`)
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: "Something went wrong" });
  }
});

// retrive data by id
app.get("/data/:id", async (req,res)=>{
  try{
  const id=req.params.id;
  const data=await Product_model.findById(id);
  return res.status(200).send(data);
  }
  catch(err){
    return res.status(500).send(err)
  }
})
// update data
app.put("/data/:id", async (req,res)=>{
  try{
    const id=req.params.id;
    const body= req.body;
    const updatedData= await Product_model.findByIdAndUpdate(id,body,{new:true});
    return res.status(201).json({
      message:"your data updated",
      yourUpdatedData: updatedData
    })
  }catch(err){
    return res.status(500).json({
      message:"please pass valid product id"
    })
  }
})

// update single attribute with  patch and we can update with  put also by passing signle attributes
app.patch("/data/:id", async (req,res)=>{
  try{
    const newProduct= await Product_model.findByIdAndUpdate(req.params.id, req.body,{new: true});
    return res.status(201).json({
      message:"your data updated in patch"
    })
  }catch(err){
    return res.status(500).json({
      message:"there is some internal error",
      err
    })
  }
})

// delete call
app.delete("/data/:id", async (req,res)=>{
  try{
   await Product_model.findByIdAndDelete(req.params.id);
    const latestdata= await Product_model.find();
    return res.status(200).json({
      message:"your data dleeted successfully",
     latestdata
    })
  }catch(err){
    return res.status(500).send(err);
  }
})

app.listen(port,(req,res)=>{
    console.log("server started succesfully")
})