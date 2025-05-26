import express from "express";
import {User} from "../models/user.model.js";
import {register,login,logout,updateProfile} from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
// import resumeUpload from "../middleware/multer.js"
import multer from "multer";

const router = express.Router();

// const resumeStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/assets");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     // const ext = file.originalname.split('.').pop();
//     var newname = file.fieldname + '-' + uniqueSuffix + file.originalname
//     req.body['file'] = newname
//     cb(null, newname);
//   }
// });
// const resumeUpload = multer({ storage: resumeStorage });


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update/profile").post(isAuthenticated, updateProfile);
export default router;
