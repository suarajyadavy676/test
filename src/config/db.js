const {connect} = require('mongoose');
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log('DB Connected');
  } catch (err) {
    console.log("error in mongodb connection",err);
    process.exit(1);
  }
};
module.exports = connectDB;