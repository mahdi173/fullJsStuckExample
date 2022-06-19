const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{ type: String, required: true},
  img: { type: Date, required: true }
});


module.exports = mongoose.model('Badge', userSchema);


