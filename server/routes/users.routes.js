const userRouter = require("express").Router();
const userController = require('../controllers/users.controller')

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');
const apiKeyValidator = require('../middleware/apiKeyValidator')

// POST // con api key para primer user
userRouter.post("/apiKey",apiKeyValidator, userController.createUser);

// POST // solo el admin
userRouter.post("/",getAccessToken, decodeToken, adminRoutes, userController.createUser);

// GET client asesor route demo
userRouter.get("/", getAccessToken, decodeToken, clientRoutes, userController.readUser);

// DELETE
userRouter.delete("/", getAccessToken, decodeToken, adminRoutes, userController.deleteUser);

//client /api/users/all asesor route demo // when definitive  add middlewares
userRouter.get('/all',userController.getAllUsers);

module.exports = userRouter;