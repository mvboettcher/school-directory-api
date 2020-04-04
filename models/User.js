const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
    required: [true, 'Please add a valid email'],
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'Please add a sex'],
  },
  type: {
    type: String,
    enum: ['administration', 'teacher', 'student'],
    required: [true, 'Please add a type'],
  },
})

module.exports = mongoose.model('User', UserSchema)
