const express=require('express')
const router=express.Router();
const Chef=require('../models/Chef');


router.get('/all',async (req,res)=>{
    const chefs=await Chef.find()
    res.json(chefs)
})
router.post('/add',async(req,res)=>{
    const { nom,specialite}=req.body
    if(!nom||!specialite){
        return res.status(400).json({message:'champs obligatoire'})
    }
    const newchef=new Chef({nom,specialite})
    await newchef.save()
    res.status(201).json({message:"ajouter avec sucess"})
})


router.put('/update/:nom', async (req, res) => {
    const { nom } = req.params; 
    const { updates } = req.body; 
    const chefExist = await Chef.findOne({ nom });
    if (!chefExist) {
        return res.status(404).json({ message: 'Chef not found' });
    }
    Object.assign(chefExist, updates);
    await chefExist.save();
    res.status(200).json({ message: "Successfully updated", chef: chefExist });
   
});

router.delete('/delete/:name', async (req, res) => {
    const { name } = req.params;
    const deletedChef = await Chef.findOneAndDelete({ nom: name });

    if (!deletedChef) {
        return res.status(404).json({ message: 'Chef non trouvé' });
    }
    res.status(200).json({ message: 'Chef supprimé avec succès', chef: deletedChef });
});

router.get('/search', async (req, res) => {
    const { term } = req.query; 

   
    const chefs = await Chef.find({
        $or: [
            { nom: { $regex: term, $options: 'i' } },
            { specialite: { $regex: term, $options: 'i' } },
            { age: { $regex: term, $options: 'i' } }
        ]
    });

    res.status(200).json({ chefs });
});


module.exports=router