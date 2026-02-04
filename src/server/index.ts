import "dotenv/config";
import next from "next";
import app from "./app.js";
import mongoose from "mongoose";
import type { Request, Response } from "express";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

nextApp.prepare().then(async () => {
  // Connect to MongoDB Atlas
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }

  // Define a simple route for testing
  app.get("/api", (req: Request, res: Response) => {
    res.json({ message: "Hello from Express API!" });
  });

  // Handle all other Next.js requests
  app.use((req: Request, res: Response) => {
    return handle(req, res);
  });

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running at http://localhost:${PORT}`);
  });
});

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({
    status: "error",
    message: err?.message ?? "Internal Server Error",
  });
});
