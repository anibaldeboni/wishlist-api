const { Schema, model } = require('mongoose');

const passwdSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  password: {
    type: String,
    trim: true,
    required: 'Password is required',
    validate: [
      (input) => input.length >= 6,
      'Password must be six characters longer',
    ],
  },
});

module.exports = model('Password', passwdSchema);
