const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
        },
        subject : {
            type : String,
            required : true
        },
        message : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            required : true,
            default : Date.now
        }
    },
)

module.exports = mongoose.model("message",messageSchema);