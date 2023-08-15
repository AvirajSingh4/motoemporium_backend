const schema_mongoose = require('mongoose');

const CustomerSellDetails = schema_mongoose.Schema(
   {
      cname: { type: String },
      cemail: { type: String },
      cphone: { type: String },
      ccar: { type: String },
      creg: { type: String },
      ckm: { type: String },
      cdat: { type: String },
      cprice: { type: String },
      cowner: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('customersell', CustomerSellDetails);