import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/employees", usersRoutes);
router.use(authenticateRoutes);

export { router }

