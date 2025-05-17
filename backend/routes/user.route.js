import express from 'express'
import { register, login, logout ,updateProfile } from '../controllers/user.controller.js';
import  isAuthenticated  from '../middleware/isAuthenticated.js';
const router = express.Router();
import { profileUpload } from '../middleware/multer.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route("/logout").get(logout);
router.route('/update/profile').put(isAuthenticated, profileUpload.fields([{ name: 'resume', maxCount: 1 }, { name: 'profilePhoto', maxCount: 1 }]), updateProfile);

export default router;