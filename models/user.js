const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: 'string',
  email: { type: String, unique: true },
  password: 'string'
});

module.exports = mongoose.model('user', userSchema)