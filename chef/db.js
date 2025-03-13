const mongoose=require('mongoose')

const connectDB= async ()=>{
    try{
        mongoose.connect(process.env.DB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('connected Database')

    }catch(e){
        console.log("erreur",e)
    }
}
module.exports=connectDB