// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const Users = db.define("Users", {
    idUser: {
        field: 'id_user',
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
    password:{ // esto tiene que estar en hash 
        field: 'password',
        type: DataTypes.STRING(50)
    },
    role: {
        field: 'role',
        type: DataTypes.STRING(50)
    },
},
    {
        db,
        modelName: 'Users',
        tableName: 'users',
        timestamps: 'true', 
    }
);

// This syncs our model with our database.
Users.sync({alter:true});

module.exports = Users;