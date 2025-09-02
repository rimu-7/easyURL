import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { authRoutes } from "./routes/authRoutes.js";
import { urlRoutes } from "./routes/urlRoutes.js";
import useragent from "express-useragent";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();

// ========================
// CORS Configuration
// ========================
const allowedOrigins = [
  "https://easyurl-online.netlify.app/", 
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman, mobile apps)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// ========================
// Middleware
// ========================
app.set("trust proxy", true);
app.use(express.json());
app.use(useragent.express());

// ========================
// Database Connection
// ========================
connectDB();

// ========================
// Routes
// ========================
app.get("/", (req, res) => {
  res.send("Hello There!");
});

authRoutes(app);
urlRoutes(app);
userRoutes(app);

// ========================
// Fallback for 404
// ========================
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ========================
// Error Handler
// ========================
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ error: err.message || "Server error" });
});

// ========================
// Start Server
// ========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
