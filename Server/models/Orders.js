const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        uemail : {
            type : String,
            required : true,
        },
        uname : {
            type : String,
            required : true
        },
        number : {
            type : Number,
            required : true
        },
        orderedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        },
        date : {
            type : Date,
            required : true,
            default : Date.now
        }
    },
)


module.exports = mongoose.model("order",orderSchema);