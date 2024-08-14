const express = require('express');
const multer = require('multer');
const FoundItem = require("./users")
var router = express.Router();
const cors = require('cors');
const path = require('path');


router.use(cors({
  origin: 'http://localhost:5173', // Adjust if your frontend runs on a different port
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
}));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Directory where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension to the file
  },
});

const upload = multer({ storage });

router.post('/reportfound', upload.single('image'), async (req, res) => {
  try {
    const { itemName, email, phoneNumber, semester, branch, location } = req.body;
    const imagePath = req.file.path; // Image path for storing in MongoDB

    const newItem = new FoundItem({
      itemName,
      email,
      phoneNumber,
      semester,
      branch,
      location,
      image: imagePath,
    });

    await newItem.save();

    res.status(200).json({ message: 'Form submitted successfully', newItem });
  } catch (error) {
    console.error('Error submitting the form:', error.message); // Log only the error message
    res.status(500).json({ message: 'Error submitting the form', error: error.message });
  }
});




router.use('/uploads', express.static('uploads'));


module.exports = router;
