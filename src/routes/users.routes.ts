import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/account/useCases/listUsers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listUsersController.handle);

export { usersRoutes }