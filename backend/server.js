import express from "express";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/productRoute";
import uploadRoute from "./routes/uploadRoute";
import orderRoute from "./routes/orderRoute";

import path from "path";
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/uploads", uploadRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x) => x._id === productId);
//   if (product) res.send(product);
//   else res.status(404).send({ msg: "Product Not found" });
// });
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));

app.listen(5000, () => console.log("server started at http://localhost:5000"));
