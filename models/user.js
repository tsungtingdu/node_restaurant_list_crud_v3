const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, require: true, },
  password: { type: String, require: true, },
  date: { type: Date, default: Date.now }
}, { collection: 'users' })

module.exports = mongoose.model('userList', userSchema)