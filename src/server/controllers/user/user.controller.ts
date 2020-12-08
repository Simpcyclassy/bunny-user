import {
  controller,
  httpPost,
  requestBody,
  request,
  response,
} from "inversify-express-utils";
import { Request, Response } from "express";
import dotenv from "dotenv";

import { UserDTO, User } from "@app/data/user";
import { BaseController } from "@app/data/utils";
import { UserService } from "@app/services/authentication";
import { isUser } from "./user.validator";
import { secure } from "@app/data/utils";


dotenv.config()

type ControllerResponse = User | User[] | string;

@controller("/user")
export class UserController extends BaseController<ControllerResponse> {
  @httpPost("/", secure(isUser))
  async createUser(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: UserDTO
  ) {
    const user = await UserService.createUser(body);

    this.handleSuccess(req, res, user);
  }
}
