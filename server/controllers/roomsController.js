

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
