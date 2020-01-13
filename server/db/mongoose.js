const mongoose = require('mongoose');

const URL_MONGODB = 'mongodb://127.0.0.1:27017/restaurant_api';

mongoose.connect(URL_MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
