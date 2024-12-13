const { Schema, model } = require('mongoose');
const moment = require('moment');

// Create schema
const requirementSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true }, // Adjusted field name to lowercase for consistency
  query: { type: String, required: true },
  createdAt: { 
    type: String, 
    default: () => moment().format('YYYY-MM-DD HH:mm:ss') // Custom format using Moment.js
  }, // Automatically sets the current date and time
});

module.exports = model('Requirement', requirementSchema);
