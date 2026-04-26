import express, { Application } from "express";
import expenseRoutes from "./routes/expenseRoutes";
import authRoutes from "./routes/authRoutes";
import profileRoutes from "./routes/profileRoutes";
import analyticsRoutes from "./routes/analyticsRoutes";
import { errorHandler } from "./middleware/errorHandler";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

connectDB();

const allowedOrigins: string[] = [
  "http://localhost:3000",
];

if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
}

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from TS + Express");
});

app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use("/uploads", express.static("uploads"));

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Cannot Find ${req.method} ${req.originalUrl}`,
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});