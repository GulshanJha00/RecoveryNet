import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Lost/LostForm.css";

const FoundForm = () => {
  const [itemName, setItemName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [semesterError, setSemesterError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const validateForm = () => {
    let isValid = true;

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@nie\.ac\.in$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email ending with @nie.ac.in");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Validate semester
    const semesterNumber = parseInt(semester, 10);
    if (isNaN(semesterNumber) || semesterNumber < 1 || semesterNumber > 8) {
      setSemesterError("Semester should be a number between 1 and 8");
      isValid = false;
    } else {
      setSemesterError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("itemName", itemName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("semester", semester);
    formData.append("branch", branch);
    formData.append("location", location);
    if (file) formData.append("file", file); // Ensure file is appended

    try {
      const response = await axios.post(
        "http://localhost:3000/reportfound",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted successfully.", response.data);

      // Navigate to /found route after successful submission
      navigate("/found");

    } catch (err) {
      console.error("Error while sending the data in Found Form", err);
    }
  };

  return (
    <div className="FormBackground">
      <form className="LostForm" method="POST" onSubmit={handleSubmit}>
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
          {emailError && <span className="error-message">{emailError}</span>}
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
          {phoneError && <span className="error-message">{phoneError}</span>}
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
          {semesterError && (
            <span className="error-message">{semesterError}</span>
          )}
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
          <label>Where did you find the item and at what time?</label>
          <input
            type="text"
            value={location}
            placeholder="Location and Time"
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])} // No value attribute here
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: "10px" }}
          className="submit-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoundForm;
