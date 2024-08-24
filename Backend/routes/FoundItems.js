const mongoose = require('mongoose');

const FoundItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: false, // Optional if not every entry has an image
  },
  filePath: {
    type: String,
    required: false, // Optional if not every entry has an image
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const FoundItem = mongoose.model('FoundItem', FoundItemSchema);

module.exports = FoundItem;
