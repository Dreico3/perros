const { Sequelize,DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/* "nombre": "pator aleman",
"altura": "1.26m",
"peso": "25kg",
"AñosVida": 12 */
var db = new Sequelize('postgres://postgres:tigres@localhost:5432/dogs', {
  logging: false,
});
const Perro = db.define('perro', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //altura
  height: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //peso
  weight: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bred_for:{
    type: DataTypes.STRING,
    allowNull:false
  },
  life_span: {
    type: DataTypes.INTEGER,
  },
  image:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
      isUrl:true
    }
  }
});


const Temperamento = db.define('temperamento', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
Perro.belongsToMany(Temperamento, { through: 'page_temperamet' });
Temperamento.belongsToMany(Perro, { through: 'page_temperamet' });
module.exports = {
  Perro,
  Temperamento,
  db
}
