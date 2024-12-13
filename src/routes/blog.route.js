const {Router} = require('express')
const blog = require('../models/blogs.model')

const blogRouter = Router()

// get all blogs data
blogRouter.get('/',async(req,res)=>{
  try {
    const blogs = await blog.find()
    res.status(200).json(blogs)
  } catch (error) {
    console.log(error);
  }
})

// post blog data
blogRouter.post('/',async(req,res)=>{
  try {
    const {category,image,title,description} = req.body
    const blogData = await blog.create({category,image,title,description})
    res.status(200).json(blogData)
  } catch (error) {
    console.log(error);
  }
})

// update blog data
blogRouter.put('/:id',async(req,res)=>{
  try {
    const {id} = req.params
    const {category,image,title,description} = req.body
    const blogData = await blog.findByIdAndUpdate(id,{category,image,title,description})
    res.status(200).json(blogData)
  } catch (error) {
    console.log(error);
  }
})
// delete blog data
blogRouter.delete('/:id',async(req,res)=>{
  try {
    const {id} = req.params
    const blogData = await blog.findByIdAndDelete(id)
    res.status(200).json(blogData)
  } catch (error) {
    console.log(error);
  }
})
module.exports = blogRouter