import "dotenv/config";
import cors from "cors";
import express, { Application } from "express";
import analyticsRoutes from "./routes/analyticsRoutes";
import authRoutes from "./routes/authRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import profileRoutes from "./routes/profileRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app: Application = express();

const allowedOrigins = ["http://localhost:3000"];

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

app.get("/", (_req, res) => {
  res.send("Hello from TS + Express");
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
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

export default app;
