import express from "express";
import {
  createProduce,
  deleteProduce,
  editProduce,
  getAllProduce,
} from "../controllers/adminProduceController.ts";
import {
  uploadProduceImages,
  handleUploadErrors,
} from "../middleware/uploadMiddleware.ts";
import { adminAuthenticate } from "../middleware/authenticationMiddleware.ts";

const adminProduceRouter = express.Router();

// Route to create a new produce item with image uploads
adminProduceRouter.post(
  "/",
  adminAuthenticate,
  uploadProduceImages,
  handleUploadErrors,
  createProduce,
);
adminProduceRouter.get("/", adminAuthenticate, getAllProduce);
adminProduceRouter.delete("/:produceId", adminAuthenticate, deleteProduce);
adminProduceRouter.patch(
  "/",
  adminAuthenticate,
  uploadProduceImages,
  handleUploadErrors,
  editProduce,
);

export default adminProduceRouter;
