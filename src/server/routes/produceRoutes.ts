import express from "express";
import {
  fetchSingleProduce,
  getAllProduce,
} from "../controllers/produceController.ts";

const produceRouter = express.Router();

produceRouter.get("/", getAllProduce);
produceRouter.get("/:produceId", fetchSingleProduce);

export default produceRouter;
