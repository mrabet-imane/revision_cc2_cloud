const mongoose=require('mongoose')
const chefSchema=new mongoose.Schema({
    nom:{
        type:String,
        unique:true
    },
    specialite:{
        type:String
    },
    age:{
        type:String
    }
})
module.exports=mongoose.model('Chef',chefSchema)