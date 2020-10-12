const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  tracking: {
    type: {},
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});


const Log = mongoose.model("Log", logSchema);

module.exports = Log;
