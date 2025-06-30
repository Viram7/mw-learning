const fs = require('fs');
const path = require('path');

const videolist = async (req, res) => {
 const batchCode  =  req.params.batchCode;
  function getAllVideoFiles(folderPath) {
    try {
      const files = fs.readdirSync(folderPath);
      const videoExtensions = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];
      return files.filter(file => videoExtensions.includes(path.extname(file).toLowerCase()));
    } catch (err) {
      console.error("Error reading directory:", err);
      return [];
    }
  }

  const folderPath = path.join(__dirname, `../../videoUpload/${batchCode}`);
  const fileNames = getAllVideoFiles(folderPath);

  if (fileNames.length > 0) {
    console.log("Video files in folder:");
    fileNames.forEach(file => {
      console.log(file);
    });
  } else {
    console.log("No video files found or an error occurred.");
  }

  res.send({ fileNames });
};

module.exports = {
  videolist
};
