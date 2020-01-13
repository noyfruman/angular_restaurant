const express = require('express');
const router = new express.Router();
const Order = require('../models/order');


router.post('/order',async(req,res)=>{
    const order = await new Order(req.body);
    order.save().then(()=>{
        res.status(201).send(order);
    }).catch(e=>{
        res.status(500).send(e)
    })
});

router.get('/meal/:name',async(req,res)=>{
    const _name = req.params.name;
    try{
        const meal = await Order.findOne({name:_name});
        if(!meal ){
            return res.status(400).send('Meal is not found');
        }
        res.send(meal )
    }catch (e) {
        res.status(500).send();
    }
});
router.delete('/meal/:name',async (req,res)=>{
    const _name = req.params.name;
    try{
        const meal =await Order.findOneAndDelete({name:_name});
        if(!meal){
            return res.status(400).send(`${name} is not in the menu`);
        }
        res.status(200).send(meal);
    }catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;