const mongooes=require("mongoose")

const ProductSchema= new mongooes.Schema({
    product_name:{
        type:String,
        required:true,
        unique: true
    },
    product_price:{
        type:Number,
        required:true,
    },
    isInStock:{
        type:Boolean,
        required:true,
    },
    category:{
        type:[String],
        require:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    confimPassword:{
        type:String,
        required:true,
        minLength:6,
        validate:{
            validator:function(){
                return this.password=== this.confimPassword;
            },
            message:"password and confrim passwords not same",
        }
    }
},
{timestamps:true}
);
ProductSchema.pre("save", function(){
    console.log("this is pre hook");
    this.confimPassword= null
});
// pre hoock check catagory 
const validCategory=["electronics","mobiles","laptops"]
ProductSchema.pre("save", function(next){
    const invalidCategory= this.category.filter((category)=>{
        return !validCategory.includes(category)
    })
    if(invalidCategory.length){
         throw new Error ("invalid category")
    } else {
        // valid scanrio
        next()
    }
})
// pre hook for price range
ProductSchema.pre("save", function(next){
    if(this.product_price>100000){
        // throw new Error("price range out of capasity")
        return next(
            new Error(`invalid category`)
        )
    }
    else{
        next();
    }
})

// post HOOK
ProductSchema.post("save", function(){
console.log("this is post hook", this.confimPassword);
})
const ProductModel= mongooes.model("productsdb2",ProductSchema);

module.exports= ProductModel;