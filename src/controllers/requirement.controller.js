const requirementModel = require('../models/requirement.model');

// Controller to create a requirement
const createRequirement = async (req, res, next) => {
  const { name, email, number, query } = req.body;

  try {
    // Input validation
    if (!name || !email || !number || !query) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const requirement = await requirementModel.create({ name, email, number, query });
    return res.status(201).json({ message: 'Requirement created successfully', data: requirement });
  } catch (error) {
    next(error); // Pass error to the error-handling middleware
  }
};

module.exports = { createRequirement };
