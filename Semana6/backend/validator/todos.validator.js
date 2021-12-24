import { body } from 'express-validator';

const createToDoValidator = [
  body('title').notEmpty(),
  body('description').notEmpty(),
  body('creator').notEmpty()
];

export { createToDoValidator };
