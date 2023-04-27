

const express = require('express');
const mongoose = require('mongoose');
const roomRoutes=require('./routes/roomsRoutes')
const usersRoutes=require('./routes/usersRoutes')
const bookingRoute=require('./routes/bookingRoute')

const cors=require('cors')


const app=express();
app.use(express.json());
app.use(cors());

app.use('/rooms',roomRoutes)
app.use('/',usersRoutes)
app.use('/bookings',bookingRoute)
//connection to database
 async function main(){
     return mongoose.connect("mongodb://localhost:27017/HotelDB")

 }
 main().then(()=>console.log("database is connected")).catch((err)=>console.log(err))


app.listen(4000,()=>console.log("listerning on port  4000....")) 

