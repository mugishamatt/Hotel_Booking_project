const {createUsers,userLogin,getAllUsers}=require('../controllers/usersControllers')


const express=require('express')
const router=express.Router();


router.post('/users',createUsers)
router.post('/users/login',userLogin)
router.get('/admin/users',getAllUsers)
// // router.delete('/:id',deleteStudent)
// // router.patch('/:id',updateStudent )
// router.post('/')


module.exports=router;