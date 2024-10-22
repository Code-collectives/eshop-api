import { Schema, model } from "mongoose";

const AdvertSchema = new Schema ({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  media: { type: String },

})

export const AdvertModel = model('Advert', AdvertSchema);
