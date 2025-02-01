import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      if (selectedFile.type.startsWith("image")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleSubmit = () => {
    if (file) {
      console.log("File uploaded:", file);
    }
  };

  const toggleForm = () => {
    setIsDoctor(!isDoctor);
  };

  return (
    <>
      <button onClick={toggleForm}>
        Register as {isDoctor ? "Patient" : "Doctor"}
      </button>

      {isDoctor ? (
        <div>
          <label>Enter Your Name:</label>
          <input type="text" name="doctorName" />

          <label>Your Specialization:</label>
          <input type="text" name="doctorSpecialization" />

          <label>Enter Your Email Address:</label>
          <input type="email" name="email" required />

          <label>Enter Your Clinic Address</label>
          <input type="text" name="address" />

          <label>Enter Clinic Opening Time:</label>
          <input type="time" name="openingTime" required />

          <label>Enter Clinic Closing Time:</label>
          <input type="time" name="closingTime" required />

          <label>Please Upload Your License</label>

          <input type="file" name="license" onChange={handleFileChange} />
          {filePreview && <img src={filePreview} alt="Preview" width="100" />}
          <div>
            <p>{file ? `Selected file: ${file.name}` : "No file selected"}</p>
          </div>
          <button onClick={handleSubmit}>Upload</button>
        </div>
      ) : (
        <div>
          <label>Enter Your Name:</label>
          <input type="text" name="firstName" />
          <label>Enter Your Contact Number:</label>
          <input type="tel" name="phoneNumber" pattern="[0-9]{10}" />
          <label>Enter Your Address:</label>
          <input type="text" name="address" />
          <label>Enter Your Email Address:</label>
          <input type="email" name="email" required />

          <label>Enter Your Medical History or Allergies:</label>
          <textarea name="medicalHistory" rows="4" />

          <label>Gender:</label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Enter Your Password</label>
          <input type="password" name="password" />
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>
      )}
      <p>Already have an account?</p>
      <Link to="/">Login here</Link>
    </>
  );
};

export default Register;
