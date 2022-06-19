
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  userName:{ type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilType: { type: String, required: true },
  coins: { type: Number, required: true },
  vision: { type: String, required: true },
  img: { type: String, required: true },
  learning_Progress: { type: Number, required: true },
  todo: [{goal : String, progess : Number, created_at: Date}],
  badges: [ {id_badge: String }],
  questions: [ {id_qst: String }],
  answers: [{contenu: String} ]

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);