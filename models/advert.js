// models/advert.mjs
import mongoose from 'mongoose';

const AdvertSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String },

});

export default mongoose.model('Advert', AdvertSchema);
