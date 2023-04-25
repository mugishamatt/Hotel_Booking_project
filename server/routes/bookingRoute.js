const express=require('express')
const router=express.Router();
const moment =require("moment")
const bookingModel=require("../models/bookingModel")

const roomsModel=require('../models/roomsModel')



router.post('/bookroom',async (req,res)=>{
    const {room,
        checkin,
        checkout,
        totalAmount,
        totalDays}=req.body
    try {
        const data = new bookingModel({
            room:room.name,
            checkin: moment(checkin).format("DD-MM-YYYY"),
            checkout:moment(checkout).format("DD-MM-YYYY"),
            roomid:room._id,
            totalAmount,
            totalDays,
            // userid:userid,
            transactionid:'001'
        }
            
          
        );
       const booking= await data.save()
// updating room with current bookind
        const oldroom = await roomsModel.findOne({ _id: room._id });
      
        oldroom.currentBookings.push({
          bookingid: booking._id,
          checkin: moment(checkin).format("DD-MM-YYYY"),
          checkout: moment(checkout).format("DD-MM-YYYY"),
        //   userid: user._id,
          status:'booked'
        });
        await oldroom.save();
     
        res.status(200).send({ success: true, message: "booking added succefuly" });
      } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, message: "  booking  failed" });
      }
    }

)

module.exports=router;