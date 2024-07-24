const mongoose = require('mongoose');
const User = require('./models/user');

const URL = 'mongodb://localhost:27017/MongooseDB_lab';

mongoose.connect(URL, {})
  .then(() => {
    console.log("MongoDB connected");

    const sampleUsers = [
      { email: "pj@company.org", username: "PJ" },
      { email: "trish@company.org", username: "Trish" },
      { email: "paddy@company.org", username: "Paddy" }
    ];

    User.insertMany(sampleUsers)
      .then(() => {
        console.log("Sample users inserted");
        mongoose.connection.close();
      })
      .catch(err => {
        console.log(err);
        mongoose.connection.close();
      });
  })
  .catch(err => console.log(err));
