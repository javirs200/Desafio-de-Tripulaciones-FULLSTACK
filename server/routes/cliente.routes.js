const clienteRouter = require("express").Router();
const clienteController = require('../controllers/cliente.controler')

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');
const apiKeyValidator = require('../middleware/apiKeyValidator')

// POST // con api key para primer user
clienteRouter.get("/", clienteController.readCliente);

module.exports = clienteRouter;