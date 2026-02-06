import express from "express";
import {
  activateProduce,
  createProduce,
  deleteProduce,
  editProduce,
  getAllProduce,
  suspendProduce,
} from "../controllers/producerProduceController.ts";
import {
  uploadProduceImages,
  handleUploadErrors,
} from "../middleware/uploadMiddleware.ts";
import { producerAuthenticate } from "../middleware/authenticationMiddleware.ts";

const producerProduceRouter = express.Router();

// Route to create a new produce item with image uploads
producerProduceRouter.post(
  "/",
  producerAuthenticate,
  uploadProduceImages,
  handleUploadErrors,
  createProduce,
);

producerProduceRouter.get("/", producerAuthenticate, getAllProduce);

producerProduceRouter.delete(
  "/:produceId",
  producerAuthenticate,
  deleteProduce,
);

producerProduceRouter.post(
  "/suspend/:produceId",
  producerAuthenticate,
  suspendProduce,
);

producerProduceRouter.post(
  "/activate/:produceId",
  producerAuthenticate,
  activateProduce,
);

producerProduceRouter.patch(
  "/",
  producerAuthenticate,
  uploadProduceImages,
  handleUploadErrors,
  editProduce,
);

export default producerProduceRouter;
