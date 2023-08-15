
const schema_mongoose = require('mongoose');

const buyDetails = schema_mongoose.Schema(
   {
      buyname: { type: String },
      buyemail: { type: String },
      buymobile: { type: String },
      buydob: { type: String },
      buypass: { type: String },
      buygender: { type: String },
      buycar: { type: String },
      buyaddress: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('buycollection', buyDetails);