const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const requirementRouter = require('./src/routes/requirement.route');
const teamRouter = require('./src/routes/team.route');
const blogRouter = require('./src/routes/blog.route');
const authRouter = require('./src/routes/signup.route');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

let port = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('<h1 style="text-align:center; margin-top:100px">hello Everyone this is suretech backend</h1>');
});

//all routes
app.use("/",requirementRouter)
app.use("/team",teamRouter)
app.use("/blogs",blogRouter)
app.use("/",authRouter)

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${process.env.PORT}`);
});