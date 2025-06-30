const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Setup multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    const batchCode = req.params.batchCode;  // Get batchCode from request body
    console.log(batchCode);
    const uploadDir = path.join(__dirname,'..', '..', 'videoUpload', batchCode); // Folder path using batchCode
                                           
    // Check if the folder exists
    if (!fs.existsSync(uploadDir)) {
      // If the folder doesn't exist, create it
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Set the folder where videos will be saved
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Append timestamp to filename to ensure uniqueness
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Controller for handling video upload
const uploadVideo = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  // Respond with the file path and file name
  res.status(200).send({
    message:"File uploaded successfully",
    filePath: req.file.path,
    fileName: req.file.filename,
    batchCode: req.body.batchCode, // Send the batchCode back in the response for confirmation
  });
};

module.exports = { upload, uploadVideo };
