const express = require('express');
const FoundItem = require("./users");
const router = express.Router();
const multer = require("multer");
const cors = require('cors');
const path = require('path');
const LostItem = require("./LostItem")

router.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
}));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../public');
    cb(null, uploadPath);
  }, 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
});

router.post('/reportfound', upload.single("file"), async (req, res) => {
  try {
    const { itemName, email, phoneNumber, semester, branch, location } = req.body;
    const file = req.file; // Access the uploaded file

    const newItem = new FoundItem({
      itemName,
      email,
      phoneNumber,
      semester,
      branch,
      location,
      fileName: file ? file.filename : null,  // Store the filename in the database
      filePath: file ? file.path : null  // Store the file path in the database
    });

    await newItem.save();
    console.log("Found item saved:", newItem);

    res.status(200).json({ message: 'Form submitted successfully', newItem });
  } catch (error) {
    console.error('Error submitting the form:', error.message);

    res.status(500).json({ message: 'Error submitting the form', error: error.message });
  }
});


//REPORT LOST





router.post('/reportlost', upload.single("file"), async (req, res) => {
  try {
    const { itemName, email, phoneNumber, semester, branch, location } = req.body;
    const file = req.file; // Access the uploaded file

    const newItem = new LostItem({
      itemName,
      email,
      phoneNumber,
      semester,
      branch,
      location,
      fileName: file ? file.filename : null,  // Store the filename in the database
      filePath: file ? file.path : null  // Store the file path in the database
    });

    await newItem.save();
    console.log("Found item saved:", newItem);

    res.status(200).json({ message: 'Form submitted successfully', newItem });
  } catch (error) {
    console.error('Error submitting the form:', error.message);

    res.status(500).json({ message: 'Error submitting the form', error: error.message });
  }
});

module.exports = router;
