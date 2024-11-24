import React from 'react';
import useUser from '../hooks/useUser';
import Navbar from '../components/Navbar';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const userId = 1; // Replace this with dynamic logic when you have authentication
  const { user, loading, error } = useUser(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="user-profile">
      <h1>{user.name}'s Profile</h1>
        <p><strong>User ID:</strong> {user.user_id}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Current Field:</strong> {user.current_field}</p>
        <p><strong>Desired Field:</strong> {user.desired_field}</p>
        <p><strong>Skills:</strong> {user.skills}</p>
        <p><strong>Experience:</strong> {user.experience}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Social Media Link:</strong> <a href={user.social_media_link} target="_blank" rel="noopener noreferrer">{user.social_media_link}</a></p>
        {user.image && <img src={`data:image/jpeg;base64,${user.image}`} alt={`${user.name}'s profile`} />}
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </>
  );
};

export default UserProfile;
