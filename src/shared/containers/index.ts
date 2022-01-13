import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUserRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

