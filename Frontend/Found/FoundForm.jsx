import React, { useState } from 'react';
import '../Lost/LostForm.css'; // Import the CSS file
import axios from 'axios';

const FoundForm = () => {
  const [itemName, setItemName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  
  const handleSubmit = async (e) => {    
    e.preventDefault();
  
    // Create a FormData object
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('semester', semester);
    formData.append('branch', branch);
    formData.append('location', location);
    formData.append('image', image);
  
    try {
      const response = await axios.post('http://localhost:3000/reportfound', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
  
  return (
    <div className="FormBackground">
      <form className="LostForm" method='POST' onSubmit={handleSubmit}>
        <h2>Provide Details of the Item You Found</h2>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            value={itemName}
            placeholder="Name of the item you found"
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your college email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            placeholder="Enter your contact number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Semester</label>
          <input
            type="text"
            value={semester}
            placeholder="Enter your semester"
            onChange={(e) => setSemester(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Branch</label>
          <input
            type="text"
            value={branch}
            placeholder="Enter your branch"
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            placeholder="Location and Time"
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Upload Image</label>
          <input type="file" onChange={handleImageChange} required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default FoundForm;
