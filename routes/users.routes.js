const userRouter = require("express").Router();
const userController = require('../controllers/users.controller')

//middlewares de control de acceso a rutas protegidas
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');

// POST
userRouter.post("/",getAccessToken, decodeToken, adminRoutes, userController.createUser);
// userRouter.post("/", ()=>{console.log('llega');});

// GET
userRouter.get("/", userController.readUser);
// userRouter.get("/", ()=>{console.log('llega');});

// DELETE
userRouter.delete("/", getAccessToken, decodeToken, adminRoutes, userController.deleteUser);

//para probar JWT
userRouter.get('/all', getAccessToken, decodeToken, adminRoutes, userController.getAllUsers);

module.exports = userRouter;