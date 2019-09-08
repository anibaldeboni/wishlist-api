const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Username is required',
    validate: [
      (input) => input.length >= 3,
      'Username must be three characters longer',
    ],
  },
  email: {
    type: String,
    unique: true,
    required: 'Email is required',
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  password: { type: Schema.Types.ObjectId, ref: 'Password' },
});

module.exports = model('User', userSchema);
