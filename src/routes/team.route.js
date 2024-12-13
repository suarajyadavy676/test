const express = require('express');
const {
  getAllTeam,
  addTeam,
  updateTeam,
  deleteTeam,
} = require('../controllers/team.controller');

const teamRouter = express.Router();

// Routes
teamRouter.get('/', getAllTeam); // Fetch all team members
teamRouter.post('/', addTeam); // Add a new team member
teamRouter.put('/:name', updateTeam); // Update a team member by name
teamRouter.delete('/:name', deleteTeam); // Delete a team member by name

module.exports = teamRouter;
