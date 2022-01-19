import { Router } from "express";

import { SellCarController } from "../modules/store/useCases/sellCar/SellCarController";
import { ReserveCarController } from "../modules/store/useCases/reserveCar/ReserveCarController";
import { ListStoreController } from "../modules/store/useCases/listStore/ListStoreController";

const sellCarController = new SellCarController();
const reserveCarController = new ReserveCarController();
const listStoreController = new ListStoreController();

const storeRoutes = Router();

storeRoutes.post("/sell", sellCarController.handle);

storeRoutes.post("/reserve", reserveCarController.handle);

storeRoutes.get("/", listStoreController.handle);

export { storeRoutes }