import { Router } from "express";

import { CreateCarController } from "../modules/cars/useCases/createCar/CreateCarController";
import { ListCarsController } from "../modules/cars/useCases/listCars/ListCarsController";
import { ShowCarController } from "../modules/cars/useCases/showCar/ShowCarController";
import { RemoveCarController } from "../modules/cars/useCases/removeCar/RemoveCarController";
import { ShowCarStatusController } from "../modules/cars/useCases/showCarStatus/ShowCarStatusController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const showCarController = new ShowCarController();
const removeCarController = new RemoveCarController();
const showCarStatusController = new ShowCarStatusController();

carsRoutes.post("/", createCarController.handle);

//carsRoutes.get("/status", showCarStatusController.handle);

carsRoutes.get("/", listCarsController.handle);

carsRoutes.delete("/:id", removeCarController.handle);

carsRoutes.get("/:id", showCarController.handle);

export { carsRoutes }