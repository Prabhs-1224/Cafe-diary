require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();

connectDB(process.env.MONGO_URI).catch(e => {
  console.error("Mongo connection failed:", e.message);
  process.exit(1);
});

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true, methods: ["GET","POST","PUT","DELETE","OPTIONS"], allowedHeaders: ["Content-Type","Authorization"] }));
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

// serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/entries", require("./routes/entries"));

app.get("/", (_req, res) => res.send("Latte Letters API running ☕✨"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 API listening on http://localhost:${PORT}`));
