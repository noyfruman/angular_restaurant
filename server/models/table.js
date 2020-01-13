const mongoose = require('mongoose');
const validator = require('validator');

const Table = mongoose.model('tables',{
    number:{
        type: Number,
        required: true,
        validate(value) {
            if(value < 1 || value > 20){
                throw new Error('Table number is not correct!!!!')
            }
        }
    },
    seats: {
        type: Number,
        required: true,
        validate(value) {
            if(value < 2 || value > 8){
                throw new Error('Igor, the table have to be  between 2 to 8!!!!')
            }
        }
    },
    available: {
        type: Boolean,
        default: true
    },
    area: {
       type: String,
       required: true,
    }

});

module.exports= Table;