const {Schema,model} = require('mongoose')

// schema
const signupSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
})
// model
const Signup = model('Signup',signupSchema)
module.exports = Signup