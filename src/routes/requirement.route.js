const { Router } = require('express');
const requirementModel = require('../models/requirement.model');
const { createRequirement } = require('../controllers/requirement.controller');

const requirementRouter = Router();

// post
requirementRouter.post('/send',createRequirement);
// get
requirementRouter.get('/get',async(req,res)=>{
  try {
    const requirements = await requirementModel.find();
    res.status(200).json(requirements);
  } catch (error) {
    console.log(error);
  }
})

module.exports = requirementRouter;