import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },

},
{
    timestamps:true//createdAt and updatedAt

});


const Product = mongoose.model("Product", productSchema);
//put singular and capitalize the first letter
export default Product;