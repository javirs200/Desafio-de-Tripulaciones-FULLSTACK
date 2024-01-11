// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const usuarios = db.define("usuarios", {
    id_usuario: {
        field: 'id_usuario',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    email: {
        field: 'email',
        unique: 'true',
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    contraseña:{ // esto tiene que estar en hash 
        field: 'password',
        type: DataTypes.STRING(50)
    },
    rol: {
        field: 'role',
        type: DataTypes.STRING(50)
    },
},
    {
        db,
        modelName: 'usuarios',
        tableName: 'usuarios' 
    }
);

// This syncs our model with our database.
Users.sync({alter:true});

module.exports = usuarios;