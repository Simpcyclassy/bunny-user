import {
  controller,
  httpPost,
  requestBody,
  request,
  response,
  httpGet,
  requestParam,
  httpDelete,
  httpPatch
} from "inversify-express-utils";
import { Request, Response } from "express";
import dotenv from "dotenv";

import { UserDTO, User } from "@app/data/user";
import { BaseController } from "@app/data/utils";
import { UserService } from "@app/services/authentication";
import { UserRepo } from "@app/data/user";
import { isUser, isID, isUserUpdate } from "./user.validator";
import { secure } from "@app/data/utils";


dotenv.config()

type ControllerResponse = User | User[] | string;

@controller("/users")
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

  @httpGet("/")
  async getAllUsers(@request() req: Request, @response() res: Response) {
    const user = await UserRepo.all({});
    this.handleSuccess(req, res, user);
  }

  @httpPatch("/:id", secure(isID), secure(isUserUpdate))
  async updateUser(
    @request() req: Request,
    @response() res: Response,
    @requestParam("id") id: string,
    @requestBody() body: UserDTO
  ) {
    const update: any = {
      name: body.name,
    };

    const user = await UserRepo.atomicUpdate(id, update);
    this.handleSuccess(req, res, user);
  }

  @httpDelete("/:id", secure(isID))
  async deleteUser(
    @request() req: Request,
    @response() res: Response,
    @requestParam("id") id: string
  ) {
    const user = await UserRepo.destroy(id);
    this.handleSuccess(req, res, user);
  }

}
