const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        }
    },
    {timestamps : true}
)

userSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,12)
    next()
})

module.exports = mongoose.model("user",userSchema);