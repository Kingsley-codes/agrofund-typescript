import express from "express";
import {
  adminGetAllProduce,
  approveProduce,
  rejectProduce,
} from "../controllers/adminProduceControllers.ts";
import { adminAuthenticate } from "../middleware/authenticationMiddleware.ts";

const adminProduceRouter = express.Router();

adminProduceRouter.get("/", adminAuthenticate, adminGetAllProduce);
adminProduceRouter.post(
  "/approve/:produceId",
  adminAuthenticate,
  approveProduce,
);
adminProduceRouter.post("/reject/:produceId", adminAuthenticate, rejectProduce);

export default adminProduceRouter;
