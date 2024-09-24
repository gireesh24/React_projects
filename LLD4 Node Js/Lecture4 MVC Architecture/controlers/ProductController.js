
const Product_model=require("../models/Product")

 const getAllProducts=async (req, res) => {
    try {
      const data = await Product_model.find();
    //   const timestamp = Date.now();  // Corrected: Use Date.now() to get the current timestamp
      // console.log(`[${timestamp}]`, 'This is a log message');
    //   console.log(`${new Date().toISOString()}- ${req.method}`)
      return res.status(200).send(data);
    } catch (error) {
      return res.status(500).send({ error: "Something went wrong" });
    }
  };

  const getProductById= async (req,res)=>{
    try{
    const id=req.params.id;
    const data=await Product_model.findById(id);
    return res.status(200).send(data);
    }
    catch(err){
      return res.status(500).send(err)
    }
  };

  const productUpdateById= async (req,res)=>{
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
  };

  const productUpdateForPatch= async (req,res)=>{
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
  };

  // delete call
const deleteProduct= async (req,res)=>{
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
  };
  // create a product to DB
  const createProduct = async (req, res) => {
    try {
      const body = req.body;
      console.log("creating product");
      const product = await Product_model.create({
        product_name: body.product_name,
        product_price: body.product_price,
        category: body.category,
        isInStock: body.isInStock,
        password: body.password,
        confimPassword:body.confimPassword
      }); 
      // auto save
      console.log("product crearted", product);
      return res
        .status(201)
        .json({ message: "Product created successfully", product: product });
    } catch (err) {
        console.log("failed to create a product")
      return res.status(500).json({ message:" post call catch block caaled" ,
        error: err.message
       });
    }
  };

  module.exports={
    getAllProducts,
    getProductById,
    productUpdateById,
    productUpdateForPatch,
    deleteProduct,
    createProduct
  };