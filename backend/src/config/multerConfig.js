const multer = require("multer");

const storage = multer.memoryStorage();


const fileFilter = (req, file, cb) => {

  
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/svg+xml",
    "image/webp",
    "text/x-matlab",
    "text/x-python",
    "application/javascript",
    "text/x-c++src",
    "text/x-c++hdr",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"), false);
  }
};



const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter,
});



module.exports = { upload }
