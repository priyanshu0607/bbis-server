const express = require("express");
const app = express();
const billRoutes = require("./routes/bill.js");
const userRoutes = require("./routes/users.js");
const itemRoutes = require("./routes/items.js");
var cors = require("cors");
app.use(cors({
    origin: '*', // or '*' to allow all origins
    credentials: true, // Allow cookies to be sent
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version'], // Allowed headers
  }));

app.use(express.json());

/* API Routes */
app.use("/api/bill", billRoutes);
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
const pool = require("./db");
app.listen(3000, () => {
    console.log("Listening at port 3000");
   
});
