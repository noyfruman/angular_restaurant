const express = require('express');
const Table = require('../models/table');
const router = new express.Router();


router.post('/table',async(req,res)=>{
    const _number =  req.body.number;
    console.log(_number);

    try{
        const table = await Table.findOne({number: _number});
        if(table){
            return res.status(500).send('Table is already exists!!!!');
        }
    }catch (e) {

    }
    const table = new Table(req.body);
    table.save().then(()=>{
        res.status(201).send(table);
    }).catch(e=>{
        res.send(e)
    })

});

router.get('/table/:number',async(req,res)=>{
    const _number = req.params.number;

    try{
        const table = await Table.findOne({number:_number});
        if(!table ){
            return res.status(400).send('Table is not find');
        }
        res.send(table);
    }catch (e) {
        res.status(500).send();
    }
});
router.delete('/table/:number',async (req,res)=>{
    const _number = req.params.number;
    try{
        const table =await Table.findOneAndDelete({number :_number});
        if(!table){
            return res.status(400).send(`Table ${number} is not exists!!!`);
        }
        res.status(200).send(table);
    }catch (e) {

    }
});


module.exports = router;