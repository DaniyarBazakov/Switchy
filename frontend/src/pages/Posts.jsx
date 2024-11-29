import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Posts.css";
import useFetchPosts from "../hooks/useFetchPosts";
import { useParams } from "react-router-dom";

const PostForm = () => {
  const { posts } = useFetchPosts();
  const { userId: paramUserId } = useParams();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    user_id: "",
    content: "",
    field: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [fields, setFields] = useState([]);
  const [selectedField, setSelectedField] = useState("");

  // Fetch unique fields for dropdown
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/posts/fields");
        if (!response.ok) {
          throw new Error("Failed to fetch fields");
        }
        const data = await response.json();
        setFields(data);
      } catch (error) {
        console.error("Error fetching fields:", error.message);
      }
    };

    fetchFields();
  }, []);

  useEffect(() => {
    if (paramUserId) {
      setUserId(paramUserId);
    } else if (loggedInUser) {
      setUserId(loggedInUser.userId);
    } else {
      console.error("No logged-in user found");
    }
  }, [paramUserId, loggedInUser]);

  useEffect(() => {
    if (userId) {
      setFormData((prevData) => ({
        ...prevData,
        user_id: userId,
      }));
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Post successfully created!");
      setFormData({ user_id: "", content: "", field: "" });
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;
    }
  };

  const sortedPosts = posts
    .filter((post) => !selectedField || post.field === selectedField)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const handleFieldFilterChange = (e) => {
    setSelectedField(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="post-container">
        <button onClick={toggleFormVisibility} className="toggle-button">
          {isFormVisible ? "Close Post Form" : "Create Post"}
        </button>
        {isFormVisible && (
          <div className={`collapsible-form ${isFormVisible ? "open" : ""}`}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="content">Content:</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Share your thoughts..."
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="field">Field:</label>
                <input
                  type="text"
                  id="field"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  placeholder="Enter the related field (e.g., Tech, Design)"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Create Post
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="filter-container">
        <label htmlFor="fieldFilter">Filter by Field:</label>
        <select
          id="fieldFilter"
          value={selectedField}
          onChange={handleFieldFilterChange}
        >
          <option value="">All Fields</option>
          {fields.map((field, index) => (
            <option key={index} value={field}>
              {field}
            </option>
          ))}
        </select>
      </div>

      <section className="user-posts">
        <h2>Recent Posts</h2>
        <div className="posts">
          {sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
              <PostCard
                key={post.post_id}
                post={post}
                fetchUserDetails={fetchUserDetails}
              />
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

const PostCard = ({ post, fetchUserDetails }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserDetails(post.user_id);
      setUserDetails(userData);
    };

    fetchData();
  }, [post.user_id, fetchUserDetails]);

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-user-avatar">
          {userDetails?.profile_image_url ? (
            <img
              src={userDetails.profile_image_url}
              alt={userDetails.name}
              className="avatar-image"
            />
          ) : (
            <span>{post.user.charAt(0)}</span>
          )}
        </div>
        <div className="post-user-details">
          <h3>{userDetails?.name || post.user}</h3>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
      <div className="post-footer">
        <span className="post-field">{post.field}</span>
        <Link to={`/user/${post.user_id}`} className="view-profile">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PostForm;
