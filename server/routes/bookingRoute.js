const express=require('express')
const router=express.Router();
const moment =require("moment")
const bookingModel=require("../models/bookingModel")

const roomsModel=require('../models/roomsModel')



router.post('/bookroom',async (req,res)=>{
    const {room,
        userid,
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
            userid:userid,
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
          userid: userid,
         
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
router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await bookingModel.find({});
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// router.get("/getallbookings", async (req, res) => {
//   const {bookingid,roomid } = req.body;
//   try {
//     const room= await roomsModel.find({_id: roomid});
//     const bookings=room.currentBookings
//     const temp=bookings.filter(booking=>booking.bookingid.toString()!==bookingid)
//     console.log(temp);
//     res.send(room);
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// });

module.exports=router;