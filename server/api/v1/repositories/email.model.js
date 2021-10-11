import SequelizeService from "../services/enable.service";
const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = SequelizeService.connect();

export default class Email extends Model {}
Email.init(
  {    
    id: {     
      type: Sequelize.INTEGER,
      primaryKey: true,     
      allowNull: false,
      autoIncrement:true
    },   
    email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
   
  
  },
  {
    sequelize,
    tableName: "Table_email"
  }
);
