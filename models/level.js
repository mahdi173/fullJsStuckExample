const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{ type: String, required: true},
  img: { type: Date, required: true },
  totalCoins: { type: Number, required: true },
  users: [{id_user:String}]
});


module.exports = mongoose.model('Level', userSchema);