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
        // validate:{
        //     validator:function(){
        //         return this.password=== this.confimPassword;
        //     },
        //     message:"password and confrim passwords not same",
        // }
    }
},
{timestamps:true}
);
const ProductModel= mongooes.model("productsdb2",ProductSchema);

module.exports= ProductModel;