const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{ type: String, required: true},
  progress: { type: Number, required: true },
  questions: [{id_qst: String} ]
});


module.exports = mongoose.model('Module', userSchema);