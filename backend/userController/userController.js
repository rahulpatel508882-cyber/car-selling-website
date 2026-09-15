const UserModel = require('../Model/user/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


const SECRET_KEY = process.env.SECRET_KEY;
exports.addUser = async(req,res) =>{
  console.log(" add users seccess")
    const body = req.body;
    if(
        !body ||
        !body.name ||
        !body.email
    ){
        return res.status(400).json({msg:"all field are require"});
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    try{
        const data = await UserModel.create({
            name: body.name,
            email: body.email,
            password: hashedPassword,
        });
        console.log ("userdata-------",data);
        return res.status(201).json ({msg: " user created succesfully"});
    } catch(err){
        console.error("error data fetching from body", err);
        if (err.code === 11000){
          return res.status(409).json ({msg:"user alresdy exist"});
        }
        return res
        .status(500)
        .json({msg:"internal server error",Error:err.msg});
    }
};
exports.getUsers = async (req, res) => {
  try {
    // const data = await UserModel.find({}, { fullname: 1, email: 1, _id:0 });
    const data = await UserModel.find({});
    if (!data) {
      return res.status(404).json({ message: "No Records Found" });
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// api to delete user based on id
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID is Required" });
    }
    const result = await UserModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "No Record Found" });
    }
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


// api to update user using long way
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Id is Required" });
    }
    const { name, email, password } = req.body;
    const updatedUser = {};
    if (name) updatedUser.name = name;
    if (email) updatedUser.email = email;
    if (password) updatedUser.password = password;

    const result = await UserModel.findByIdAndUpdate(
      id,
      { $set: updatedUser },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "Id does not found" });
    }
    return res.status(200).json({
      message: "User is Updated Successfully",
      updatedData: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to Update User" });
  }
};

// api to updateUser in a easy way
exports.updateTheUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Id is Required" });
    }
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password: hashedPassword,
      },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res
      .status(200)
      .json({ msg: "User is Updated Successfully", user: result });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// api for login
// exports.loginUser = async (req, res) => {
//   const { name, password } = req.body;
//   if (!name || !password) {
//     return res.status(400).json({ msg: "Username and Password is Required" });
//   }
//   try {
//     const user = await UserModel.findOne({ name });
//     if (!user) {
//       return res.status(404).json({ msg: "User not found" });
//     }
//     // const validPassword = user.password === password;
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) {
//       return res.status(401).json({ msg: "Invalid Password" });
//     }

//     const token = jwt.sign(
//       { id: user.id, name: user.name },
//       SECRET_KEY,
//       {
//         expiresIn: "1h",
//       }
//     );
//     return res.status(200).json({ msg: "Login Successful", token });
//   } catch (err) {
//     return res.status(500).json({ msg: "Internal Server Error" });
//   }
// };
