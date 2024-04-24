const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);

const db =
  "mongodb+srv://pmravi1997:prajapati@backenddb.6e3omxr.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3002, () => {
      console.log("server started on port 3002");
    });
  })
  .catch((error) => {
    console.error("COnnection failed", error);
  });
