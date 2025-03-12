const mongoose=require('mongoose')
 
const UserSchema= new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        minlength:5,
        maxlength:10
    },
    // prenom:{
    //     type:string,
    //     minlength:5,
    //     maxlength:10
    // },
    password:{
        type:String,
        minlength:5,
    }
})
module.exports=mongoose.model('User',UserSchema)