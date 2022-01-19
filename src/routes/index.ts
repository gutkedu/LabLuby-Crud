import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { storeRoutes } from "./store.routes";

const router = Router();

router.use("/store", storeRoutes);
router.use("/employees", usersRoutes);
router.use("/vehicles", carsRoutes);
router.use(authenticateRoutes);


export { router }

