const mongoose = require('mongoose');
const validator = require('validator');

const Meal = mongoose.model('meals',{
   name:{
       type: String,
       required: true,
       trim : true
   },
   type:{
       type: String,
       required: true,
       trim: true
   },
    vegetarian: {
       type: Boolean,
        required: true,
        trim: true
   },
   description:{
       type: String,
       required: true,
       trim: true
   },
   price:{
       type: Number,
       required: true,
       validate(value){
           if(value < 0 ){
               // Client side errors.price.message
                throw new Error('Provide a postive price!!!')
           }
       }
   },
   img:{
       type: String
   }
});

module.exports = Meal;