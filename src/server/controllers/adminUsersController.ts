import { Request, Response } from "express";
import Producer from "../models/producerModel.ts";
import User from "../models/userModel.ts";

type UserQuery = {
  status?: "active" | "suspended";
  isVerified?: "true" | "false";
  page?: string;
};

export const getAllProducers = async (
  req: Request<{}, {}, {}, UserQuery>,
  res: Response,
) => {
  try {
    const admin = req.admin;
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. Admin credentials required.",
      });
    }

    const { status, isVerified, page = "1" } = req.query;

    const filter: any = {};

    // optional status filter
    if (status === "active" || status === "suspended") {
      filter.status = status;
    }

    // optional isVerified filter
    if (isVerified === "true" || isVerified === "false") {
      filter.isVerified = isVerified === "true";
    }

    const limit = 10;
    const pageNumber = Math.max(parseInt(page as string, 10) || 1, 1);
    const skip = (pageNumber - 1) * limit;

    const producers = await Producer.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Producer.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: producers,
      page: pageNumber,
      pages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    console.error("Error fetching producers:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const getAllFarmers = async (
  req: Request<{}, {}, {}, UserQuery>,
  res: Response,
) => {
  try {
    const admin = req.admin;
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. Admin credentials required.",
      });
    }

    const { status, isVerified, page = "1" } = req.query;

    const filter: any = {};

    // optional status filter
    if (status === "active" || status === "suspended") {
      filter.status = status;
    }

    // optional isVerified filter
    if (isVerified === "true" || isVerified === "false") {
      filter.isVerified = isVerified === "true";
    }

    const limit = 10;
    const pageNumber = Math.max(parseInt(page as string, 10) || 1, 1);
    const skip = (pageNumber - 1) * limit;

    const farmers = await User.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: farmers,
      page: pageNumber,
      pages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    console.error("Error fetching farmers:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const verifyProducer = async (
  req: Request<{ producerId: string }>,
  res: Response,
) => {
  try {
    const admin = req.admin;

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. Admin credentials required.",
      });
    }

    const { producerId } = req.params;
    const producer = await Producer.findById(producerId);

    if (!producer) {
      return res.status(404).json({
        success: false,
        message: "Producer not found",
      });
    }

    if (producer.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Producer is already verified",
      });
    }

    producer.isVerified = true;
    producer.status = "active";
    await producer.save();

    res.status(200).json({
      success: true,
      message: "Producer verified successfully",
    });
  } catch (error: any) {
    console.error("Error verifying producer:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
