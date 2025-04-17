require("dotenv").config({ path: "./emp.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");
const axios =require ('./axios');
const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error("Error: MONGO_URI is not defined in emp.env");
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/api", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));