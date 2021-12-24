import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

// Models
import User from '../models/user.schema.js'

// Utils
import HttpError from '../models/http-error.model.js';
import { asyncHandler } from '../middlewares/asyncHandler.middleware.js';

//Controllers
const getUserByEmail = asyncHandler(async (email) => {
  //find user by email
  const filter = { email }
  const existingUser = await User.findOne(filter);
  if (existingUser) {
    return existingUser;
  }else{
    return false;
  }
});

const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().select('-__v');
  res.status(200).json({ data: users, status: 'OK' });
});

const signupUser = asyncHandler(async (req, res, next) => {
  //Validate body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors);
  }
  const { full_name, email, password, birthdate } = req.body;
  //Find user existing
  const existingUser = await getUserByEmail(email);
  if(existingUser){
    return next(
      new HttpError('User exists already, please login instead.', 404)
    );
  }else{
    //crypt password
    const hash = await bcrypt.hash(password, 10);
    //register new user
    const newUser = new User({
      full_name,
      email,
      birthdate,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({ data: newUser, status: 'OK' });
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  //Validate body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors);
  }
  const { email, password } = req.body;
  //Find user in BD
  const user = await getUserByEmail(email);
  if(user){
    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch) res.status(200).json({ data: user, status: 'OK' });
    else return next( new HttpError('User email or password incorrect.', 404) );
  }else{
    return next(
      new HttpError('User email or password incorrect.', 404)
    );
  }
});

export { getUsers, signupUser, loginUser };
