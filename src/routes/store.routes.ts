import { Router } from "express";

import { SellCarController } from "../modules/store/useCases/sellCar/SellCarController";
import { ReserveCarController } from "../modules/store/useCases/reserveCar/ReserveCarController";
import { ListStoreController } from "../modules/store/useCases/listStore/ListStoreController";
import { ShowUserCarController } from "../modules/store/useCases/showUserCar/ShowUserCarController";

const sellCarController = new SellCarController();
const reserveCarController = new ReserveCarController();
const listStoreController = new ListStoreController();
const showUserCar = new ShowUserCarController();

const storeRoutes = Router();

storeRoutes.post("/sell", sellCarController.handle);

storeRoutes.post("/reserve", reserveCarController.handle);

storeRoutes.get("/", listStoreController.handle);

storeRoutes.get("/:user", showUserCar.handle);

export { storeRoutes }