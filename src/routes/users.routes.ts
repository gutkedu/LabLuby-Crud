import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthentication } from "../middlewares/ensureAuthentication";

import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { ListUserByIdController } from "../modules/account/useCases/listUserById/ListUserByIdController";
import { ListUsersController } from "../modules/account/useCases/listUsers/ListUsersController";
import { RemoveUserController } from "../modules/account/useCases/removeUser/RemoveUserController";
import { UpdateUserAvatarController } from "../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController";
import { UpdateUserInfoController } from "../modules/account/useCases/updateUserInfo/UpdateUserInfoController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const removeUserController = new RemoveUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const updateUserInfoController = new UpdateUserInfoController();
const listUserByIdController = new ListUserByIdController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/",
  ensureAuthentication,
  listUsersController.handle
);

usersRoutes.delete("/:id",
  ensureAuthentication,
  removeUserController.handle
);

usersRoutes.patch("/avatar",
  ensureAuthentication,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

usersRoutes.put("/:id",
  ensureAuthentication,
  updateUserInfoController.handle
);

usersRoutes.get("/:id",
  ensureAuthentication,
  listUserByIdController.handle
);

export { usersRoutes }