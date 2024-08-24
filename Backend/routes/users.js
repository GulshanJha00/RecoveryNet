const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/RecoveryNet");


const foundItemSchema = new mongoose.Schema({
  itemName: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    required: true 
  }, 

  phoneNumber: String,    
  semester: { 
    type: String, 
    required: true
   },      

  branch: { 
    type: String, 
    required: true 
  },  

  location: { 
    type: String, 
    required: true 
  },   

  file: { type: String }, 

});

module.exports = mongoose.model('FoundItem', foundItemSchema);

