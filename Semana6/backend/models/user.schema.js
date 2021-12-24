import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const userSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  todos: [{
    type: Types.ObjectId,
    required: true,
    ref: 'ToDo'
  }],
});

export default model('User', userSchema);
