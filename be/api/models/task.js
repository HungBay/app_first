var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [
      {
        type: String,
        enum: [0, 1, 2],
      },
    ],
    default: [0],
  },
});

module.exports = mongoose.model("task", TaskSchema);
