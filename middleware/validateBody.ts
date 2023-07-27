/**
 * 
*/

import { Request, Response, NextFunction } from "express";
import Ajv, {JSONSchemaType} from "ajv";
import { UserDocument } from "../schemas/User"
const ajv = new Ajv();



function validateBody(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    let userId = '';
    if (req.body.userId) {
      userId = req.body.userId;
      delete req.body.userId;
    }
    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      const err = ajv.errors ? ajv.errors[0] : 'validate-body error';
      console.log("ajv.errors: ", err);
      res.status(400).send(err);
      return;
    }
    req.body.userId = userId;
    next();
  };
}

module.exports = { validateBody }
