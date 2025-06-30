const fs = require('fs');
const path = require('path');

const videoStream = async (req, res) => {
  const batchCode = req.params.batchCode;
  const fileName = req.params.fileName; // from route parameter
  console.log("Requested file:", fileName);

  if (!fileName) {
    return res.status(400).send("Missing fileName");
  }

  const videoPath = path.join(__dirname, '..', '..', 'videoUpload',batchCode, fileName);

  if (!fs.existsSync(videoPath)) {
    return res.status(404).send("File not found");
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize || end >= fileSize) {
      return res.status(416).send("Requested Range Not Satisfiable");
    }

    const chunkSize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/x-matroska',
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/x-matroska',
    };

    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
};

module.exports = { videoStream };
