import MainService from "../../services/main.services";
import BaseController from "../base.controller";
import validator from "../../helpers/validation.helper";
import generalHelper from "../../helpers/general.helper";
const Settings = require("../../config/app.config");
export class personController extends BaseController {

  //Cityname get
  
  async cityList(req, res) {
    let result;
    try {
      let data = await MainService.cityListqury();
      if (data.length != 0) {
        result = super.response(
          200,
          data,
          "Successfully retrieved list"
        );
      } else {
        result = super.response(400, "", "No records found");
      }
      super.respond(req, res, result);

    } catch (ex) {
      result = super.response(500, ex.message, "Internal Server Error");
      super.respond(req, res, result);

    }
  }





  // login


  async login_info(req, res) {
    let result;
    try {
      console.log("sri")

      let rules = {

        email: "required",
        password: "required",
      };
      let validate = await validator.validate(rules, req.body);
      if (validate.status == 200) {
        // create 
        let query = {
          email: req.body.email,
          password: req.body.password

        };//condition 
        console.log("sri2")
        let data = await MainService.login_infoList(query);
        console.log(data)

        //token insert

        let token = await generalHelper.tokenGenerate(

          data,
          Settings.config.AUTHORIZE_TOKEN

        );
        console.log(token)
        let refresh_token = await generalHelper.tokenGenerate(
          data,
          Settings.config.REFRESH_TOKEN
        );
        console.log(refresh_token)



        let logindetails = {
          token: token,
          refresh_token: refresh_token,
          email: data.content[0].email,
          password: data.content[0].password
        };
        console.log(logindetails)



        if (data.length != 0) {
          data = super.response(200, logindetails, "sucess")
          super.respond(req, res, data);
        } else {
          result = super.response(400, "", "No records found");
        }
      } else {
        result = super.response(
          validate.status,
          validate.error,
          "please fill required fields"
        );
        super.respond(req, res, result);

      }
    } catch (ex) {
      result = super.response(500, ex.message, "Internal Server Error");
      super.respond(req, res, result);
    }
  }


  //create

  async createList(req, res) {
    let result;
    try {
      let query = {
        firstname: req.body.firstname, middlename: req.body.middlename, lastname: req.body.lastname, district: req.body.district, city: req.body.city,
        gender: req.body.gender, phone: req.body.phone, address: req.body.address, email: req.body.email
      };// condition
      let data = await MainService.newListstuds(query);
      if (data.length != 0) {
        result = super.response(
          200,
          data,
          "Successfully retrieved list"
        );
      } else {
        result = super.response(400, "", "No records found");
      }
      super.respond(req, res, result);

    } catch (ex) {
      result = super.response(500, ex.message, "Internal Server Error");
      super.respond(req, res, result);

    }
  }

}



export default new personController();
