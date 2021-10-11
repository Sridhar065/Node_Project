import Service from "./service";
import connectionService from "./connection.services";
import { Sequelize } from "sequelize";
import { query } from "express";
const sequelize = require("sequelize");
const Op = sequelize.Op;
import SequelizeService from "../services/enable.service";
const SEQUELIZE = SequelizeService.connect();


class MainService extends Service {


   
      
  

       




























      //Cityname Get
      async cityListqury() {

        let Employee = connectionService.Cty_in();
        return await Employee.findAll({
          tableHint: sequelize.TableHints.NOLOCK
        });
      }

      //login
      async login_infoList(query) {
 
        let Employee = connectionService.login_in();
        console.log(query)
        let datacreate= await Employee.findAll({where:query});
        console.log(datacreate)
          if (datacreate.length != 0) {
            return this.response(
              200,datacreate,
             
              "Login successfully"
            );
       
          } else {
            return this.response(400, "", "Not inserted");
          }
        }



       // create
       async newListstuds(query) {

        let mang = connectionService.studs();
        let datacreate= await mang.create(query);
          tableHint: sequelize.TableHints.NOLOCK
          if (datacreate) {
            return this.response(
              200,"",
             
              "Added successfully"
            );
       
          } else {
            return this.response(400, "", "Not inserted");
          }
        }

       
     

}

export default new MainService();
