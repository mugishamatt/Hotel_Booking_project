

const mongoose = require("mongoose");

const COLLECTION_NAME = "users";

const schema = mongoose.Schema;
const usersSchema = new schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
});
const usersModule = mongoose.model(COLLECTION_NAME, usersSchema);

class Users{
   static async addUser(name, email, password, role) {
        try {
          const user = new usersModule({
            name: name,
            email: email,
            password: password,
            role: role,
          });
          const data = await user.save();
          return data;
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
      static async userLogin(email) {
        try {
          const data = await usersModule.findOne({ email });
          console.log(data);
          return data;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
      static async getAllUsers() {
        try {
          const data = await usersModule.find();
          console.log(data);
          return data;
        } catch (error) {
          console.log(error);
          return null;
        }
      }

}

module.exports = Users;
