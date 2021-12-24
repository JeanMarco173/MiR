import { validationResult } from 'express-validator';
import mongoose from 'mongoose';

// Models
import ToDo from '../models/todo.schema.js';
import User from '../models/user.schema.js';

// Utils
import { asyncHandler } from '../middlewares/asyncHandler.middleware.js';
import HttpError from '../models/http-error.model.js';

//Controllers
const createToDo = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, creator } = req.body;

  const newToDo = new ToDo({
    title,
    description,
    creator,
  });

  const user = await User.findById(creator);

  if (!user) {
    return next(new HttpError('Could not find user for provided id', 404));
  }

  // Mongoose Transaction
  const session = await mongoose.startSession();
  await session.withTransaction(async () => {
    await newToDo.save({ session });
    await user.todos.push(newToDo);
    await user.save({ session });
  });
  await session.endSession();
  // Finish Mongoose Transaction

  res.status(201).json({ data: newToDo, status: 'OK' , message: 'Todos registered'});
});

const getToDosByUser = asyncHandler(async (req, res, next) => {
  const { userId } = req.params;

  const todosByUser = await User.findById(userId).populate({
    path: 'todos',
    select: { __v: 0, active: 0 },
  });
  if (!todosByUser || !todosByUser.todos.length) {
    return next(
      new HttpError('Could not find a todos for the provided user id.', 404)
    );
  }

  const { todos } = todosByUser;

  res.status(200).json({ data: todos, status: 'OK', message: 'Todos by user' });
});

const doneToDo = asyncHandler(async (req, res, next) => {
  const { todoId } = req.params;

  const todoUpdated = await ToDo.findByIdAndUpdate(
    todoId,
    { isDone: true }
  ).select({ __v: 0, active: 0 })

  res.status(200).json({ data: todoUpdated, status: 'OK', message: 'Todo updated' });
});

const deleteToDo = asyncHandler(async (req, res, next) => {
  const { todoId } = req.params;

  const session = await mongoose.startSession();
  await session.withTransaction(async () => {
    const todo = await ToDo.findByIdAndDelete(todoId, {
      session,
    }).populate('creator');
    todo.creator.todos.pull(todo);
    await todo.creator.save({ session });
  });
  session.endSession();

  res.status(200).json({ data: {}, status: 'OK', message: 'Deleted place.', });
});

export { createToDo, getToDosByUser, doneToDo, deleteToDo };
