

const roomsModel=require("../models/roomsModel");

exports.createRoom= async (req,res,next)=>{
    try {
        const data = new roomsModel(
          req.body
        );
        await data.save()
        res.status(200).send({ success: true, message: "room added succefuly" });
      } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, message: "addi  room failed" });
      }
    }

exports.getAllRooms= async (req,res,next)=>{
    try {
     
       const data= await roomsModel.find({})
     res.status(200).send({ success: true, room: data});
      } catch (error) {
        console.log(error);
        res.status(400).send({ success: false, message: "failed getting room" });
      }
}




exports.getRoomById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const room = await roomsModel.findOne({ _id: id });
    // console.log(room)
    if (!room) {
      res.send({ success: false, message: "room  doesnt exist" });
    } else {
      res.send(room);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ success: false, message: "failed getting room" });
  }
}
exports.deleteRoom = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await roomsModel.findByIdAndDelete(id)
    console.log(data);
    res.send("deleted succefully");
  } catch (error) {
    console.log(error);
  }
};
exports.updateRoom= async(req, res) =>{
 
  try {
    
    const {id} =req.params;
    const updatedRoom = await roomsModel.updateOne({_id:id}, {$set:req.body})

    res.status(200).send({success: true, message:"updated successfuly", data: updatedRoom})
  } catch (error) {
    console.log(error)
    res.status(400).send({success:false, message:"does not exist"})
  }
}
