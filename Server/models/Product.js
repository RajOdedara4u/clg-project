const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        image : {
            type : String,
            required : true
        },
        desc : {
            type : String,
            required : true
        },
        oPrice : {
            type : Number,
            required : true
        },
        auther : {
            type : String,
        },
        year : {
            type : String,
            required : true,
            default : new Date().getFullYear() // Outputs: 2024
            
        },
        discount : {
            type : Number,
            default : 40
        },
        rating : {
            type : String,
            default : "4.6"
        },
        price : {
            type : Number,
            required : true
        },
        category : {
            type : Array,
            required : true,
            default : ["#books"]
        },
    },
)


module.exports = mongoose.model("product",productSchema);