const usersModels = require('../models/users.model');
const { createToken } = require('../config/jsonWebToken');
let bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const user = await usersModels.findOne({ where: { email: email} });
        if(user){
            bcrypt.compare(password, user.password).then((result)=>{
                if (result) {
                    const token = createToken({ email: user.email, role: user.role });
                    res.status(200)
                        .cookie('access_token', token, { secure: true, httpOnly: true })
                        .json({ role: user.role, cookie: token });
                } else {
                    res.status(400).json({ msg: "wrong credentials invalid password" });
                }
            }).catch((error) => {
                res.status(500).json({ msg: "Internal server error" });
            });
        }else{
            res.status(400).json({ msg: "wrong credentials user not found" });
        }
        
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
};

const logout = async (req, res) => {
    try {
        res.status(200)
            .cookie('access_token', "", { secure: true, httpOnly: true })
            .send();
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" });
    }
};

const loginController = {
    login,
    logout,
};


module.exports = loginController;