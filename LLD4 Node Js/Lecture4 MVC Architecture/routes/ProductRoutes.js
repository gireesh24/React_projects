const express=require("express")
const {
    getAllProducts,
    getProductById,
    productUpdateById,
    productUpdateForPatch,
    createProduct,
    deleteProduct
        }=require("../controlers/ProductController");
const productRouter=express.Router();


//get all products
productRouter.get("/",getAllProducts); //  /api/products

//get product by id
productRouter.get("/:id", getProductById);

//update products by id
productRouter.put("/:id",productUpdateById)

// update product attribute by id
productRouter.patch("/:id",productUpdateForPatch)

// create a product
productRouter.post("/",createProduct)
productRouter.delete("/:id",deleteProduct)

module.exports= productRouter;