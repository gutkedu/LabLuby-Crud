import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/account/useCases/listUsers/ListUsersController";
import { RemoveUserController } from "../modules/account/useCases/removeUser/RemoveUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const removeUserController = new RemoveUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listUsersController.handle);

usersRoutes.delete("/", removeUserController.handle);

export { usersRoutes }