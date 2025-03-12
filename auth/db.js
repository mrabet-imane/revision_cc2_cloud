const mongoose=require('mongoose')
const connectDB= async ()=>{
    console.log('MongoDB URI:', process.env.DB_URI);

    try{
        await mongoose.connect(process.env.DB_URI,{
           useNewUrlParser:true,
           useUnifiedTopology:true 
        })
        console.log("database connected")
    }catch (e){
        console.log('err',e.message)
        process.exit(1)
        
    }
}
module.exports=connectDB