import express from 'express'
import { register, login, logout ,updateProfile } from '../controllers/user.controller.js';
import  isAuthenticated  from '../middleware/isAuthenticated.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route("/logout").get(logout);
router.route('/update/profile').put(isAuthenticated, updateProfile);

export default router;