import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import usePostsByID from "../hooks/usePostsById";
import useUser from "../hooks/useUser";
import Navbar from "../components/Navbar";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const { userId: paramUserId } = useParams();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (paramUserId) {
      setUserId(paramUserId);
    } else if (loggedInUser) {
      setUserId(loggedInUser.userId);
    } else {
      console.error("No logged-in user found");
    }
  }, [paramUserId, loggedInUser]);

  const { user, loading, error } = useUser(userId);
  const { posts } = usePostsByID(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user data available.</div>;

  return (
    <div>
      <Navbar />
      <section className="profile">
        <div className="user-profile">
          <div className="profile-header">
            <img
              src={user.profile_image_url || "https://via.placeholder.com/150"}
              alt={`${user.name}'s profile`}
              className="profile-image"
            />
            <h1>{user.name}</h1>
            <p className="bio">{user.bio}</p>
          </div>

          <div className="profile-sections">
            <div className="profile-section">
              <h2>Contact Information</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Location:</strong> {user.location}</p>
              <p>
                <strong>Social Media:</strong>{" "}
                <a href={user.social_media_link} target="_blank" rel="noopener noreferrer">
                  {user.social_media_link}
                </a>
              </p>
            </div>

            <div className="profile-section">
              <h2>Professional Information</h2>
              <p><strong>Current Field:</strong> {user.current_field}</p>
              <p><strong>Desired Field:</strong> {user.desired_field}</p>
              <p><strong>Skills:</strong> {user.skills}</p>
              <p><strong>Experience:</strong> {user.experience}</p>
            </div>
          </div>
        </div>

        <div className="user-posts">
          <h2>Recent Posts</h2>
          <div className="posts">
            {posts?.length > 0 ? (
              posts.slice(0, 5).map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        
        <div className="post-user-details">
          <h3>{post.user.name}</h3>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
      <div className="post-footer">
        <span className="post-field">{post.field}</span>
        
      </div>
    </div>
  );
};

export default UserProfile;
