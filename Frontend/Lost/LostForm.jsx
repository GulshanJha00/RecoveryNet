import React, { useState } from 'react';
import './LostForm.css'; // Import the CSS file

const LostItemForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="FormBackground">
      <form className="LostForm" onSubmit={handleSubmit}>
        <h2>Provide Details of the Item You Lost</h2>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            value={itemName}
            placeholder="Name of the item you lost"
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
            placeholder="Where did you lose the item?"
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

export default LostItemForm;
