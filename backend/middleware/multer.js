import multer from "multer";
import path from "path";

const resumestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/Desktop/JobPortal_Project_YT/backend/public")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = path.extname(file.originalname);
    cb(null, file.originalname + '-' + uniqueSuffix + ext)
  }
})

// const resumeUpload = multer({ storage: resumestorage })

// export default resumeUpload