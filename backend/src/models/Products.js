/*
   Products: 
   nameProduct string
   Amount init
   productDescrition string
   price decimal
   size string
   idSupplier objectid
   idCategory string
*/


import { Schema, model } from "mongoose";

const ProductsSchema = new Schema(
    {
        nameProduct: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            default: 0 
        },
        productDescription: {
            type: String,
            required: true
        },
        price: {
            type: Number, 
            required: true
        },
        size: {
            type: String,
            required: false 
        },
        idSupplier: {
            type: Schema.Types.ObjectId,
            required: true 
        },
        idCategory: {
            type: String,
            required: true
        }
    }
);


export default model("Products", ProductsSchema);