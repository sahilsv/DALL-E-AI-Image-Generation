import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

// this allows us to pool our dotenv variables from dotenv file
dotenv.config();

const app = express();
app.use(cors());
// accepts json objects with size limit 50mb
app.use(express.json({ limit: "50mb" }));

// We've created API endpoints that we can hook onto from our frontend side
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8800, () =>
      console.log("Server has started on port http://localhost:8800")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
