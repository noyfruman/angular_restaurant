const mongoose = require('mongoose');
const validator = require('validator');
const creditCardRegex = require('credit-card-regex');

const Order = mongoose.model('orders',{
    orderID: {
        type: Number
    },
    totalPrice:{
        type: Number,
        validate(value){
            if(value <=0 ) {
                return new Error('The price is incorrect!!!!');
            }
        }
    },
    meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'meal' }],
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    creditCard:{
      type: String,
      validate(value){
          if(!creditCardRegex().test(value)){
              throw new Error('incorrect credit-card!!!')
          }
      }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("incorrect email!!!")
            }
        }
    },
    phone:{
        type: String,
        required: true,
        unique: true
    }

});
module.exports = Order;