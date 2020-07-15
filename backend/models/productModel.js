import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: String, default: 0, required: true },
  category: { type: String, required: true },
  countInStock: { type: String, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: String, default: 0, required: true },
  numReviews: { type: String, default: 0, required: true },
  reviews: [reviewSchema],
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
