const { DataTypes } = require('sequelize');
const Sips = require('./sips.model');
const Cliente = require('./cliente.model');

const Factura = sequelize.define('factura', {
  id_factura: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_sips: {
    type: DataTypes.INTEGER,
    references: {
      model: Sips,
      key: 'id_sips',
    },
  },
  cups: {
    type: DataTypes.STRING(30),
    references: {
      model: Cliente,
      key: 'cups',
    },
  },
  fecha_factura: {
    type: DataTypes.DATE,
  },
  importe_total_factura: {
    type: DataTypes.DOUBLE,
  },
  dias_facturacion: {
    type: DataTypes.INTEGER,
  },
  energia_reactiva: {
    type: DataTypes.DOUBLE,
  },
  impuesto_electrico: {
    type: DataTypes.DOUBLE,
  },
  alquiler_equipo: {
    type: DataTypes.DOUBLE,
  },
  otros_costes: {
    type: DataTypes.DOUBLE,
  },
  descuento: {
    type: DataTypes.DOUBLE,
  },
},
{
    db,
    modelName: 'usuario',
    tableName: 'usuario',
    timestamps:false,
}
);

Factura.removeAttribute('id')

// Definir las claves foráneas
Factura.belongsTo(Sips, { foreignKey: 'id_sips', targetKey: 'id_sips' });
Factura.belongsTo(Cliente, { foreignKey: 'cups', targetKey: 'cups' });

Factura.sync();

module.exports = Factura;