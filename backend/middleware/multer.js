import multer from 'multer';
import path from 'path';

// Multer setup
const profileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      // path.join(__dirname, "public", "assets") // ye path ko join karta hai
      "D:/Desktop/JobPortal_Project_YT/backend/public/assets"
    );
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 100000); // image ke naam ke age random number generate karke dete hai
    const ext = path.extname(file.originalname); // ye file ke extension ko auto detect karta hai OR extension name naa likne se file editor mei open nhi hoge
    cb(null, file.originalname + "-" + ext);
  },
});

const profileUpload = multer({ storage: profileStorage });

export default profileUpload;