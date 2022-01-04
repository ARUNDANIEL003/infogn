const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Student = new Schema({
  student_name: {
    type: String
  },
  student_email: {
    type: String
  },
   age: {
    type: String
  },
  gender: {
    type: String
  },
  mobile: {
    type: String
  },
  address: {
    type: String
  },
  dob: {
    type: Date
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', Student)