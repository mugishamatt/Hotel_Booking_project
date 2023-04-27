const {
  createRoom,
  getAllRooms,
  getRoomById,
  deleteRoom,
  updateRoom,
} = require("../controllers/roomsController");
const { adminValidate } = require("../controllers/validate");

const express = require("express");
const router = express.Router();

router.post("/addroom", adminValidate, createRoom);
router.get("/getAll", getAllRooms);

router.get("/:id", getRoomById);
router.delete("/:id", adminValidate, deleteRoom);

router.put("/:id", adminValidate, updateRoom);

module.exports = router;
