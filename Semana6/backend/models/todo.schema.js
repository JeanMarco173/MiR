import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description.'],
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  creator: {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  },
});

export default model('ToDo', todoSchema);