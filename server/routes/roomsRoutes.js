


const {createRoom,getAllRooms,getRoomById}=require('../controllers/roomsController')


const express=require('express')
const router=express.Router();


router.post('/addroom',createRoom)
router.get('/getAll',getAllRooms)

router.get('/:id',getRoomById )



module.exports=router;