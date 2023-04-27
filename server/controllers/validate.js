const jwt=require('jsonwebtoken');
const bcrypt = require("bcrypt");
const TOKEN_SECRET='mamt123'
exports.adminValidate = (req, res, next) => {
    const header = req.headers.authorization;
    //  console.log(header)
    if (!header) {

    return res.status(401).send({success:false,message:"No token added"});
    }
    const arr = header.split(" ");
 
    if (arr.length !== 2) {
  
    return res.status(401).send({success:false,message:"Please use Bearer schema"});
  
    }
    const token = arr[1];
    
    try {
      const payLoad = jwt.verify(token, TOKEN_SECRET);
       if (payLoad.role==="admin"){  
      next();
       }else{
        return res.status(401).send("Authorisazion denied!!only admin")
       }
    } catch (err) {
        return res.status(401).send("Invalid token");
       
    }
  };