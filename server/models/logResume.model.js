const mongoose = require("mongoose");

const logResumeSchema = mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  count:{
    type: Number,
    require: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});


logResumeSchema.index( 
  {
    ip: 'text', 
    // count: 'text', 
    // '$**': 'text'
  },{
    weights: {
      ip: 5,
      // count: 1,
    },
  }
); 


const LogResume = mongoose.model("LogResume", logResumeSchema);

module.exports = LogResume;
