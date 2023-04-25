
const usersModel = require("../models/usersModel");


// const bcrypt = require("bcrypt");
exports.createUsers = async (req, res, next) => {
    // const user = await usersModel.findOne({ email: req.body.email });
  
    // if (user) {
      
    //   return res.status(400).send({
    //     success: false,
    //     message: "The provided email already exists",
    //   });
    // }
  
    const { password } = req.body;
    // const passwordhsd = bcrypt.hashSync(password, 6);
    const { name, email, role } = req.body;
  
    try {
      const data = await usersModel.addUser(
        name,
        email,
        password,
        role
      );
      res.status(200).send({ success: true, message: "user added succefuly" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ success: false, message: "User already exists" });
    }
  };
  exports.userLogin = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const data = await usersModel.userLogin(email);
      if ((!data||data.password!==password)) {
        return res
          .status(200)
          .send({ success: false, message: "no user found with this email or invalid password"});
      }
  
      // const checkPassord = bcrypt.compareSync(password, data.password);
      // if (!checkPassord) {
      //   return res .status(200).send({ success: false, message: "invalid password" });
      // }
  
      res.status(200).json({ success: true, message: "logged in successfully", email: data.email });

  
      // const token = jwt.sign(
      //   {
      //     name: data.name,
      //     phone: data.phone,
      //     role: data.role,
      //   },
      //   TOKEN_SECRET
      // );
  
      // return res.status(200).json({ success: true, token: token });
    } catch (error) {
      console.log(error);
      res.status(400).send({ success: false, message: "invalid password" });
    }
  };
  exports.getAllUsers=async (req,res,next)=>{
    try {
     const usrData =await usersModel.getAllUsers();
     res.status(200).send(usrData);
   } catch (error) {
     console.log(error);
     res.status(500).send("server error");
   }
 }