const TeamCollection = require("../models/team.model");

// Fetch all team members
const getAllTeam = async (req, res) => {
  try {
    const collection = await TeamCollection.findOne();
    res.status(200).json(collection || { teamData: [] });
  } catch (err) {
    res.status(500).json({ error: "Error fetching team data: " + err.message });
  }
};

// Add a new team member
const addTeam = async (req, res) => {
  const newTeam = req.body;
  try {
    let collection = await TeamCollection.findOne();
    // console.log("collection", collection);

    if (!collection) {
      // Create a new document if none exists
      collection = new TeamCollection({ teamData: [newTeam] });
    } else {
      // Add the new team member to the array
      collection.teamData.push(newTeam);
    }

    const savedCollection = await collection.save();
    res.status(201).json(savedCollection);
  } catch (err) {
    res.status(500).json({ error: "Error adding team member: " + err.message });
  }
};

// Update a team member by name
const updateTeam = async (req, res) => {
  const { name } = req.params; // Team member's name
  const updates = req.body;

  try {
    const collection = await TeamCollection.findOne();
    if (!collection) return res.status(404).json({ message: "Team collection not found" });

    // Find and update the team member
    const teamMember = collection.teamData.find((member) => member.name === name);
    if (!teamMember) return res.status(404).json({ message: "Team member not found" });

    Object.assign(teamMember, updates); // Update fields of the team member
    await collection.save();

    res.status(200).json({ message: "Team member updated successfully", teamMember });
  } catch (err) {
    res.status(500).json({ error: "Error updating team member: " + err.message });
  }
};

// Delete a team member by name
const deleteTeam = async (req, res) => {
  const { name } = req.params; // Team member's name

  try {
    const collection = await TeamCollection.findOne();
    if (!collection) return res.status(404).json({ message: "Team collection not found" });

    // Filter out the team member to be deleted
    collection.teamData = collection.teamData.filter((member) => member.name !== name);
    await collection.save();

    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting team member: " + err.message });
  }
};

module.exports = { getAllTeam, addTeam, updateTeam, deleteTeam };
