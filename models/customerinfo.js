const schema_mongoose = require('mongoose');

const CustomerDetails = schema_mongoose.Schema(
   {
      cname: { type: String },
      cemail: { type: String },
      cphone: { type: String },
      ccar: { type: String },
      cbudget: { type: String },
      cfuel: { type: String },
      cmessage: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('customerreq', CustomerDetails);