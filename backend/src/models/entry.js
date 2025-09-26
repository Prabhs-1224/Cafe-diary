const { Schema, model, Types } = require("mongoose");

const entrySchema = new Schema({
  user: { type: Types.ObjectId, ref: "User", required: true },
  month: { type: String, required: true },
  cafeName: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  photo: { type: String }
}, { timestamps: true });

module.exports = model("Entry", entrySchema);
