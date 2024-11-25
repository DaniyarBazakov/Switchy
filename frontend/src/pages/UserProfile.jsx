import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import Navbar from "../components/Navbar";
import "../styles/UserProfile.css";

const UserProfile = () => {
  // Get userId from URL parameters (if available)
  const { userId: paramUserId } = useParams();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (paramUserId) {
      // If there is a userId in the URL, use it to fetch that user's profile
      setUserId(paramUserId);
    } else if (loggedInUser) {
      // Otherwise, use the logged-in user's ID
      setUserId(loggedInUser.userId);
    } else {
      // Handle the case where there is no logged-in user (e.g., redirect to login)
      console.error("No logged-in user found");
    }
  }, [paramUserId, loggedInUser]);

  // Fetch user data using the userId (userId will be null initially)
  const { user, loading, error } = useUser(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="user-profile">
        <div className="profile-header">
          <img
            src={`data:image/jpeg;base64,${user.image}`}
            alt={`${user.name}'s profile`}
            className="profile-image"
          />
          <h1>{user.name}</h1>
          <p className="bio">{user.bio}</p>
        </div>

        <div className="profile-sections">
          <div className="profile-section">
            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Location:</strong> {user.location}
            </p>
            <p>
              <strong>Social Media:</strong>{" "}
              <a
                href={user.social_media_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.social_media_link}
              </a>
            </p>
          </div>

          <div className="profile-section">
            <h2>Professional Information</h2>
            <p>
              <strong>Current Field:</strong> {user.current_field}
            </p>
            <p>
              <strong>Desired Field:</strong> {user.desired_field}
            </p>
            <p>
              <strong>Skills:</strong> {user.skills}
            </p>
            <p>
              <strong>Experience:</strong> {user.experience}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
