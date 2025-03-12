require('dotenv').config()
const express=require('express')
const PORT=process.env.PORT||5001
const connectDB=require('./db')
const userRoutes=require("./routes/auth")
const router=express.Router()
const app=express()

app.use(express.json())
connectDB()
router.get('/',(req,res)=>{
    res.send('bienvenue dans auth')
})
app.use('/auth',userRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})