// Requires the object that represents our database
const { db } = require('../config/db_pgsql');

const { DataTypes } = require('sequelize');

const cliente = db.define("cliente", {
    cups: {
        field: 'cups',
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    id_usuario:{
        field:'id_usuario',
        type: DataTypes.INTEGER,
    },
    nombre_cliente:{
        field:'nombre_cliente',
        type: DataTypes.STRING(50),
    },
    direccion:{
        field:'direccion',
        type: DataTypes.STRING(50),
    }
},
    {
        db,
        modelName: 'cliente',
        tableName: 'cliente',
        timestamps:false
    }
);

// This syncs our model with our database.
// Users.sync({alter:true});
cliente.removeAttribute('id')
cliente.sync();

module.exports = cliente;