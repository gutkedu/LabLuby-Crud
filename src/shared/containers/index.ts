import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUserRepository";
import { CarsRepository } from "../../modules/cars/repositories/implementations/CarsRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { StoreRepository } from "../../modules/store/repositories/implementation/StoreRepository";
import { IStoreRepository } from "../../modules/store/repositories/IStoreRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
);

container.registerSingleton<IStoreRepository>(
  "StoreRepository",
  StoreRepository
);
