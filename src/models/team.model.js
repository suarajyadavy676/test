const { Schema, model } = require('mongoose');

// Schema for a single team member
const singleTeamSchema = new Schema({
  category: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  linkedinUrl: { type: String, required: true }, // Fixed typo in field name
  linkedinLogo: { type: String, required: true },
});

// Main schema containing an array of team members
const teamCollectionSchema = new Schema({
  teamData: [singleTeamSchema],
});

const TeamCollection = model('TeamCollection', teamCollectionSchema);

module.exports = TeamCollection;
