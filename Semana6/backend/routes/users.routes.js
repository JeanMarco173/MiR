import { Router } from 'express';
import { getUsers, signupUser, loginUser } from '../controllers/users.controller.js';
import { signupUserValidator, loginUserValidator } from '../validator/users.validators.js';
const router = Router();

/**
 * GET
 */
router.get(
  '/',
  getUsers
);

/**
 * POST
 */
router.post(
  '/',
  signupUserValidator,
  signupUser
);
router.post(
  '/login',
  loginUserValidator,
  loginUser
);

export default router;
