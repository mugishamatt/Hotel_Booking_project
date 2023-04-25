

const mongoose = require("mongoose");

const COLLECTION_NAME = "rooms";

const schema = mongoose.Schema;
const roomsSchema = new schema({

	name: { type: String, require:true},
    maxOccupancy:{ type: Number, require:true},
	aminities :String,
	Price: { type: Number, require:true},
	phoneNumber:{ type: Number, require:true},
    description:{ type: String, require:true},
	category:String,
	currentBookings:[],
	imagesUrl: [],


},
{
 timestamps:true
});

const roomsModel = mongoose.model(COLLECTION_NAME,roomsSchema);
  
  module.exports = roomsModel;
  