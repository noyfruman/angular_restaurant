const express = require('express');
const router = new express.Router();
const Meal = require('../models/meal');


router.post('/meal',async(req,res)=>{
    const io = req.app.get('io');
    const meal = await new Meal(req.body);
    meal.save().then(()=>{
        res.status(201).send(meal);
        io.emit('New meal added!!');
    }).catch(e=>{
        res.status(500).send(e)
    })
});
router.get('/meals', async(req,res)=>{
    const meals = await Meal.find({});
    if(!meals){
        return new Error('Unable to return meals!!!')
    }
    res.send(meals);
});
router.get('/meal/:name',async(req,res)=>{
    const _name = req.params.name;
    console.log(req.params);
    try{
        const meal = await Meal.findOne({name: _name});
        if(!meal ){
            return res.status(400).send('Meal is not found');
        }
        res.send(meal )
    }catch (e) {
        res.status(500).send();
    }
});
router.get('/meal/:name',async(req,res)=>{
    const _name = req.params.name;

    try{
        const meal = await Meal.findOne({name:_name});
        if(!meal ){
            return res.status(400).send('Meal is not found');
        }
        res.send(meal )
    }catch (e) {
        res.status(500).send();
    }
});
router.get('/meal/:name/:type/:price',async(req,res)=>{
    const _name = req.params.name;
    const _type = req.params.type;
    const _price = req.params.price;
    const meal = await Meal.findOne({name:_name,type:_type,price:_price});
    if(!meal){
        return res.status(400).send('Meal not found!!!')
    }
    res.send(meal);
});
router.patch('/meal/:name',async(req,res)=>{
   const _name = req.params.name;
   try{
       const meal = await Meal.findOneAndUpdate({name:_name},req.body,{new:true,runValidation:true});
       if(!meal){
           return res.status(400).send()
       }
       await meal.save();
       console.log('meal update!!')
       res.send(meal)
   }catch (e) {
        res.status(400).send(e);
   }
});
router.delete('/meal/:name',async (req,res)=>{
    const _name = req.params.name;
    try{
        const meal =await Meal.findOneAndDelete({name:_name});
        if(!meal){
            return res.status(400).send(`${name} is not in the menu`);
        }
        res.status(200).send(meal);
    }catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;