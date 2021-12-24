import { body } from 'express-validator';

const signupUserValidator = [
  body('full_name').notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('password', 'The password must be between 6 and 12 characters long').isLength({ min: 6, max: 12 }),
  body('birthdate').isDate()
];

const loginUserValidator = [
  body('email').isEmail().normalizeEmail(),
  body('password', 'The password must be between 6 and 12 characters long').isLength({ min: 6, max: 12 }),
];

export { signupUserValidator, loginUserValidator };
