import { Router } from 'express';
import  { createToDo, getToDosByUser, doneToDo, deleteToDo } from '../controllers/todos.controller.js'
import { createToDoValidator } from '../validator/todos.validator.js';
const router = Router();

/**
 * GET
 */
router.get(
  '/user/:userId',
  getToDosByUser
);

/**
 * POST
 */
router.post(
  '/',
  createToDoValidator,
  createToDo
);

/**
 * PATCH
 */
 router.patch(
  '/:todoId',
  doneToDo
);


/**
 * DELETE
 */
 router.delete(
  '/:todoId',
  deleteToDo
);



export default router;
