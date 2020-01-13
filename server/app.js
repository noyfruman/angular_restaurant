const express = require('express');
const MealRoute = require('./routes/meal');
const TableRoute = require('./routes/table');
const OrderRoute = require('./routes/order');
const socket = require('socket.io');
const http = require('http');
require('./db/mongoose');



const PORT = process.env.PORT || 3000;
const app = express();

const server = http.createServer(app);
const io = socket(server);
app.set('io',io);

app.use(express.json());
app.use(MealRoute);
app.use(TableRoute);
app.use(OrderRoute);


server.listen(PORT,()=>{
   console.log(`Server is up at ${PORT}`);
});