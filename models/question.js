const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  contenu:{ type: String, required: true},
  created_at: { type: Date, required: true },
  bonus: [{id_bonus: String }],
  answers: [{contenu: String,abv: Date,coins: Number, isCorrect: Boolean} ]
});


module.exports = mongoose.model('Question', userSchema);