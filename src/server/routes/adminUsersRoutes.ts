import express from "express";
import {
  getAllProducers,
  getAllFarmers,
  verifyProducer,
  suspendFarmer,
  activateFarmer,
  suspendProducer,
  activateProducer,
} from "../controllers/adminUsersController.ts";
import { adminAuthenticate } from "../middleware/authenticationMiddleware.ts";

const adminUsersRouter = express.Router();

adminUsersRouter.get("/producers", adminAuthenticate, getAllProducers);
adminUsersRouter.post("/producers/verify", adminAuthenticate, verifyProducer);
adminUsersRouter.post("/producers/suspend", adminAuthenticate, suspendProducer);
adminUsersRouter.post(
  "/producers/activate",
  adminAuthenticate,
  activateProducer,
);

adminUsersRouter.get("/farmers", adminAuthenticate, getAllFarmers);
adminUsersRouter.post("/farmers/suspend", adminAuthenticate, suspendFarmer);
adminUsersRouter.post("/farmers/activate", adminAuthenticate, activateFarmer);

export default adminUsersRouter;
