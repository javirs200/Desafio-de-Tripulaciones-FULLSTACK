const express = require("express");
const { validationResult } = require('express-validator');

const node_env = process.env.NODE_ENV;

let apiKeyUSES = process.env.MY_API_KEY_USES;

const MY_API_KEY = process.env.MY_API_KEY;

const apiKeyValidator = express.Router();

apiKeyValidator.use(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (req.body.apiKey === MY_API_KEY && (apiKeyUSES > 0 || node_env === 'develop')) {
        console.log("API KEY ACCESS");
        apiKeyUSES --;
        next();
    }else{
        return res.status(400).json({ msj: 'api key erronea o inutilizada'});
    }
    
});

module.exports = apiKeyValidator;