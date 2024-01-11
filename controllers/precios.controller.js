const preciosModel = require("../models/precios.model");

const getAllprecios = async (req, res) => {
  try {
    let precios = await preciosModel.findAll();
    res.status(200).json(precios);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const readprecios = async (req, res) => {
  const email = 
  try {
    let precios = await preciosModel.findOne({ where: { sistema,cia, } });
    res.status(200).json(precios);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const createprecios = async (req, res) => {
  try {
    const data = req.body;
    if(data.role == null){
      data.role = 'asesor';
    }
    console.log('datos para el precios ', data);
    let answer = await preciosModel.create(data);
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const updateprecios = async (req, res) => {
  try {
    const data = req.body;
    const id = data.id_precios;
    if (id) {
      let result = await preciosModel.update(data,{ where: { id_precios: id } });
      res
          .status(201)
          .json({ message: "precios actualizado", updatedprecios: { data } });
      if (result.matchedCount == 0)
        res.status(400).json({ message: `precios con ID ${id} no encontrado` });
      else if (result.modifiedCount == 0)
        res.status(400).json({ message: `precios con ID ${id} no modificado` });
      else if (result.acknowledged && result.modifiedCount > 0)
        res
          .status(201)
          .json({ message: "precios actualizado", updatedprecios: { data } });
    } else {
      res.status(400).json({ message: "formato de precios erroneo" });
    }
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

const deleteprecios = async (req, res) => {
  try {
    const data = req.body;
    const email = data.email;
    if (email) {
      let result = await preciosModel.destroy({ where: { email: email } });
      if (result.deletedCount == 0)
        res.status(400).json({ message: `precios con email ${email} no encontrado` });
      else
        res
          .status(200)
          .json({ message: "precios BORRADO", precios: { data } });
    } else {
      res.status(400).json({ message: "formato de precios erroneo" });
    }
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  readprecios,
  createprecios,
  deleteprecios,
  getAllprecios,
};
