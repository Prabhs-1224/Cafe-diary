const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../../uploads")),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}_${Math.round(Math.random()*1e9)}${ext}`);
  }
});

function fileFilter(req, file, cb) {
  const ok = ["image/jpeg","image/png","image/webp","image/gif"].includes(file.mimetype);
  cb(ok ? null : new Error("Only image files allowed"), ok);
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5*1024*1024 } });
module.exports = upload;
