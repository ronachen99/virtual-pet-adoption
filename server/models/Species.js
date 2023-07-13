// import required dependencies
const mongoose = require("mongoose");

const { Schema } = mongoose;

// define the species Schema
const speciesSchema = new Schema({
  speciesType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  needs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Need",
    },
  ],
});

// create the Species model
const Species = mongoose.model("Species", speciesSchema);

module.exports = Species;
