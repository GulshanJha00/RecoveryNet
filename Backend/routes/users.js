const mongoose = require("mongoose")
require('dotenv').config()


mongoose.connect(`mongodb+srv://gk4763549:${process.env.DB_PASSWORD}@recoverynet.f2mxy.mongodb.net/RecoveryNetDb?retryWrites=true&w=majority&appName=RecoveryNet`);


const userSchema = new mongoose.Schema({
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

module.exports = mongoose.model('user', userSchema);