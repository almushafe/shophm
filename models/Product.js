import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true }, // Consider using Number if price is numeric
});

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);