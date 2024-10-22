import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const AdvertSchema = new Schema ({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  media: { type: String },

}, {
  timestamps:true
});

AdvertSchema.plugin(toJSON);

export const AdvertModel = model('Advert', AdvertSchema);
