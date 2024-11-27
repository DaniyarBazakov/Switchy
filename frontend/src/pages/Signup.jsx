import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [step, setStep] = useState(1); // To manage the step in the form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    previousField: "",
    experience: "",
    name: "",
    currentField: "",
    desiredField: "",
    skills: "",
    yearsExperience: "",
    location: "",
    socialMediaLink: "",
    profileImageUrl: "", // Updated from 'image' to 'profileImageUrl'
    bio: "",
    postContent: "",
  });
  const [signupMessage, setSignupMessage] = useState(""); // State to handle signup message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step logic handlers
  const handleSignup = (e) => {
    e.preventDefault();
    setStep(2); // Move to the next step to gather additional information
  };

  const handleUserDetailsPart1 = (e) => {
    e.preventDefault();
    setStep(3); // Move to the next step for remaining user details
  };

  const handleUserDetailsPart2 = (e) => {
    e.preventDefault();
    setStep(4); // Move to the next step for additional user details
  };

  const handleUserDetailsPart3 = (e) => {
    e.preventDefault();
    setStep(5); // Move to the final step for post information
  };

  const handleAdditionalInfo = async (e) => {
    e.preventDefault();
    try {
      // Create user and post with the collected information
      const response = await fetch("http://localhost:3001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const responseData = await response.json(); // Get response data, including user object
        const { user } = responseData;
  
        // Store the user object in local storage (same as login process)
        localStorage.setItem("user", JSON.stringify(user));
  
        // Navigate to the posts page after successful signup
        navigate("/posts");
      } else {
        const errorData = await response.json();
        console.error("Signup error - Status:", response.status, "Data:", errorData);
        setSignupMessage(
          errorData.message ? errorData.message : "Signup failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setSignupMessage("An error occurred. Please try again later.");
    }
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1); // Move to the previous step
  };

  return (
    <div className="login-container">
      <div className="login-left">
        {signupMessage && (
          <div className="signup-message">
            <p>{signupMessage}</p>
          </div>
        )}
        {step === 1 && (
          <>
            <h2>Create Account</h2>
            <form onSubmit={handleSignup}>
              <label>
                Email
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit" className="btn sign-in-btn">
                Next
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2>We need a few more details to complete your signup.</h2>
            <form onSubmit={handleUserDetailsPart1}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Current Field
                <input
                  type="text"
                  name="currentField"
                  placeholder="Enter your current field of work"
                  value={formData.currentField}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Desired Field
                <input
                  type="text"
                  name="desiredField"
                  placeholder="Enter your desired field of work"
                  value={formData.desiredField}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" className="btn prev-btn" onClick={handlePrev}>
                Previous
              </button>
              <button type="submit" className="btn sign-in-btn">
                Next
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <h2>We need a few more details to complete your signup (Part 2).</h2>
            <form onSubmit={handleUserDetailsPart2}>
              <label>
                Skills
                <input
                  type="text"
                  name="skills"
                  placeholder="Enter your skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Experience (Years)
                <input
                  type="text"
                  name="yearsExperience"
                  placeholder="Enter your years of experience"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Location
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Social Media Link
                <input
                  type="text"
                  name="socialMediaLink"
                  placeholder="Enter a link to your social media profile"
                  value={formData.socialMediaLink}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" className="btn prev-btn" onClick={handlePrev}>
                Previous
              </button>
              <button type="submit" className="btn sign-in-btn">
                Next
              </button>
            </form>
          </>
        )}

        {step === 4 && (
          <>
            <h2>We need a few more details to complete your signup (Part 3).</h2>
            <form onSubmit={handleUserDetailsPart3}>
              <label>
                Profile Image URL
                <input
                  type="text"
                  name="profileImageUrl" // Updated from 'image' to 'profileImageUrl'
                  placeholder="Enter a link to your profile image"
                  value={formData.profileImageUrl}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Bio
                <input
                  type="text"
                  name="bio"
                  placeholder="Enter a short bio about yourself"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" className="btn prev-btn" onClick={handlePrev}>
                Previous
              </button>
              <button type="submit" className="btn sign-in-btn">
                Next
              </button>
            </form>
          </>
        )}

        {step === 5 && (
          <>
            <h2>In order to sign up to our website, we need some information from you so that we can help others transition to your previous field by sharing this information.</h2>
            <form onSubmit={handleAdditionalInfo}>
              <label>
                Previous Field of Work
                <input
                  type="text"
                  name="previousField"
                  placeholder="Enter your previous field of work"
                  value={formData.previousField}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Tell us about your experience (e.g., how did you get into that field, pros and cons, etc.)
                <textarea
                  name="experience"
                  placeholder="Enter details about your experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Post Content
                <textarea
                  name="postContent"
                  placeholder="Write a post to share with others"
                  value={formData.postContent}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" className="btn prev-btn" onClick={handlePrev}>
                Previous
              </button>
              <button type="submit" className="btn sign-in-btn">
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
      <div className="login-right">
        <h2>Welcome to Switchy</h2>
        <p>Already have an account?</p>
        <a href="/login" className="btn sign-up-btn">
          Login
        </a>
      </div>
    </div>
  );
};

export default Signup;
