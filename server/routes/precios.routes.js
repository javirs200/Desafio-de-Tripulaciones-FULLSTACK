const preciosRouter = require("express").Router();
const precios = require('../controllers/precios.controller');

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');

// GET /api/precios/cias body->{sistema} retrun cias[]
preciosRouter.get('/cias',getAccessToken, decodeToken, clientRoutes,precios.getCias);

// GET /api/precios/fijos/productos body->{sistema,cia}  retrun productosCia[]
preciosRouter.get('/fijos/productos',getAccessToken, decodeToken, clientRoutes,precios.getProductosFijosCia)

module.exports = preciosRouter;