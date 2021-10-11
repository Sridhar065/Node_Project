import * as express from "express";
import masterController from "./studentController";
import middleware from "../../middlewares/auth";
export default express
  .Router() 
  .get("/get-city",  masterController. cityList)
  .post("/get-createlist",  masterController. createList)
  .post("/get-login_in",  masterController. login_info)
 

