import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config";
import userRoute from "./routes/userRoutes";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";
import uploadRoute from "./routes/uploadRoute";

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
app.use("/api/uploads", uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));

let port = process.env.PORT;
if (port == null || port == "") {
  port = config.PORT;
}
app.listen(port, () => {
  console.log("Server has started at sucessfullt");
});
