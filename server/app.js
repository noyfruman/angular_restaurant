const express = require('express');
const MealRoute = require('./routes/meal');
const TableRoute = require('./routes/table');
const OrderRoute = require('./routes/order');

require('./db/mongoose');



const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(MealRoute);
app.use(TableRoute);
app.use(OrderRoute);


app.listen(PORT,()=>{
   console.log(`Server is up at ${PORT}`);
});