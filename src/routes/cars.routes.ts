import { Router } from "express";

import { CreateCarController } from "../modules/cars/useCases/createCar/CreateCarController";
import { ListCarsController } from "../modules/cars/useCases/listCars/ListCarsController";
import { ShowCarController } from "../modules/cars/useCases/showCar/ShowCarController";
import { RemoveCarController } from "../modules/cars/useCases/removeCar/RemoveCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const showCarController = new ShowCarController();
const removeCarController = new RemoveCarController();

carsRoutes.post("/", createCarController.handle);

carsRoutes.get("/", listCarsController.handle);

carsRoutes.delete("/", removeCarController.handle);

carsRoutes.get("/", showCarController.handle);

export { carsRoutes }