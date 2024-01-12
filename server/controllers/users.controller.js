const usersModel = require("../models/users.model");
const { validationResult } = require('express-validator');

const getAllUsers = async (req, res) => {
  try {
    let user = await usersModel.findAll();
    res.status(200).json(user);
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

const readUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const email = req.body.email
    let user = await usersModel.findOne({ where: { email: email } });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ msg: "wrong credentials user not found" });
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    /*
    data{
      name:""
      email:"@"
      password:"HASH"
      role:""
    }
    */
    if (data.role == null) {
      //default role unprivileged user
      data.role = 'asesor';
    }
    // console.log('datos para el user ', data);
    let answer = await usersModel.create(data);
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// const updateUser = async (req, res) => {
//   try {
//     const data = req.body;
//     const id = data.id_user;
//     if (id) {
//       let result = await usersModel.update(data,{ where: { id_user: id } });
//       res
//           .status(201)
//           .json({ message: "User actualizado", updatedUser: { data } });
//       if (result.matchedCount == 0)
//         res.status(400).json({ message: `User con ID ${id} no encontrado` });
//       else if (result.modifiedCount == 0)
//         res.status(400).json({ message: `User con ID ${id} no modificado` });
//       else if (result.acknowledged && result.modifiedCount > 0)
//         res
//           .status(201)
//           .json({ message: "User actualizado", updatedUser: { data } });
//     } else {
//       res.status(400).json({ message: "formato de User erroneo" });
//     }
//   } catch (error) {
//     console.log(`ERROR: ${error.stack}`);
//     res.status(400).json({ msj: `ERROR: ${error.stack}` });
//   }
// };

const deleteUser = async (req, res) => {
  try {
    const data = req.body;
    const email = data.email;
    if (email) {
      let result = await usersModel.destroy({ where: { email: email } });
      if (result.deletedCount == 0)
        res.status(400).json({ message: `User con email ${email} no encontrado` });
      else
        res
          .status(200)
          .json({ message: "User BORRADO", user: { data } });
    } else {
      res.status(400).json({ message: "formato de User erroneo" });
    }
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  readUser,
  createUser,
  deleteUser,
  getAllUsers,
};
