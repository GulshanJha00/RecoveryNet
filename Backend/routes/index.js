const express = require('express');
const FoundItem = require("./FoundItems");
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




router.use(express.static(path.join(__dirname, 'public')));

router.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '../public', filename);
  
  res.sendFile(filePath, err => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(404).send('File not found');
    }
  });
});


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

    console.log("Request Body:", req.body); // Log the request body
    console.log("File Information:", req.file); // Log the file info

    if (!req.file) {
      console.error('File upload failed.');
      return res.status(400).json({ message: 'File upload failed' });
    }

    
    const fileUploadName = req.file.filename;
    const fileUploadPath = req.file.path
    const newItem = new FoundItem({
      itemName,
      email,
      phoneNumber,
      semester,
      branch,
      location,
      fileUploadName,  
      fileUploadPath,
      // Add the ID or another identifier if needed
    });
    console.log(fileUploadName);
    
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
      fileName: file ? file.filename : null,  
      filePath: file ? file.path : null 
    });

    await newItem.save();
    console.log("Found item saved:", newItem);

    res.status(200).json({ message: 'Form submitted successfully', newItem });
  } catch (error) {
    console.error('Error submitting the form:', error.message);

    res.status(500).json({ message: 'Error submitting the form', error: error.message });
  }
});

//Get Route 

router.get('/lostitems', async (req, res) => {
  try {
    const lostItems = await LostItem.find({});
    res.status(200).json(lostItems);
  } catch (error) {
    console.error('Error fetching lost items:', error.message);
    res.status(500).json({ message: 'Error fetching lost items', error: error.message });
  }
});



router.get('/founditems', async (req, res) => {
  try {
    const foundItems = await FoundItem.find({});
    res.status(200).json(foundItems);
  } catch (error) {
    console.error('Error fetching found items:', error.message);
    res.status(500).json({ message: 'Error fetching found items', error: error.message });
  }
});



module.exports = router;