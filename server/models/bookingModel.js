

const mongoose = require("mongoose");

const COLLECTION_NAME = "bookings";

const schema = mongoose.Schema;
const bookingSchema = new schema({

	room: { type: String, require:true},
    roomid:{ type: String, require:true},
	
	userid: { type: String, require:true},
	checkin:{ type: String, require:true},
    checkout:{ type: String, require:true},
	totalAmount:{type:Number,required:true},
	totalDays:{type:Number,required:true},
	status:{
        type:String,required:true,default :"booked"
    },
    transactionid:{ type: String, require:true},
},
{
 timestamps:true
});

const bookingModel = mongoose.model(COLLECTION_NAME,bookingSchema);
  
  module.exports = bookingModel;
  