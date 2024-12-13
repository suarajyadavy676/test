const {model,Schema} = require('mongoose')
const moment = require('moment');

const blogSchema = new Schema({
  category: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { 
    type: String, 
    default: () => moment().format('YYYY-MM-DD HH:mm:ss') // Automatically sets the current date and time
  },
})

// model
const blog = model('Blog',blogSchema)

module.exports = blog
