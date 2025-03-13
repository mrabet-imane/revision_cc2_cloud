const express=require('express')
const connectDB=require('./db')
require('dotenv').config()
const app=express()
const chefRoutes=require('./routes/chef')
const router=express.Router()

const PORT=process.env.PORT||5001

app.use(express.json())
connectDB()

router.get('/',(req,res)=>{
    res.send('bienvenue dans espace chef')
})
app.use('/chef',chefRoutes)
app.listen(PORT,()=>{
    console.log(`service is running on port:${PORT}`)
})

