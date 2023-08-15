const schema_mongoose = require('mongoose');

const serDetails = schema_mongoose.Schema(
   {
      sername: { type: String },
      serservice: { type: String },
      seremail: { type: String },
      sermobile: { type: String },
      sermake: { type: String },
      serdate: { type: String },
      sertime: { type: String },
      sergender: { type: String },
      seraddress: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('sercollection', serDetails);