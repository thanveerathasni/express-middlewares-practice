const express = require("express");
const upload = require("../middlewares/upload");

const app = express();

// single file upload
app.post(
  "/upload",
  upload.single("image"),
  (req, res) => {
    res.json({
      message: "File uploaded successfully",
      file: req.file
    });
  }
);

app.listen(3000, () => {
  console.log("File upload example running on port 3000");
});
