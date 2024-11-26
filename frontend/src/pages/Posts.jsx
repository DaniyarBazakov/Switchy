import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Posts.css';
import useFetchPosts from '../hooks/useFetchPosts';
import { useParams } from 'react-router-dom';

const PostForm = () => {
    const { posts } = useFetchPosts();
    const { userId: paramUserId } = useParams();
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    const [userId, setUserId] = useState(null);
    const [formData, setFormData] = useState({
        user_id: '',  // Set as an empty string initially
        content: '',
        field: '',
    });
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        if (paramUserId) {
            // If there is a userId in the URL, use it to set userId
            setUserId(paramUserId);
        } else if (loggedInUser) {
            // Otherwise, use the logged-in user's ID
            setUserId(loggedInUser.userId);
        } else {
            // Handle the case where there is no logged-in user (e.g., redirect to login)
            console.error('No logged-in user found');
        }
    }, [paramUserId, loggedInUser]);

    // Update formData whenever userId changes
    useEffect(() => {
        if (userId) {
            setFormData((prevData) => ({
                ...prevData,
                user_id: userId, // Update user_id in formData
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
            const response = await fetch('http://localhost:3001/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Post created:', data);
            alert('Post successfully created!');
            setFormData({ user_id: '', content: '', field: '' }); // Reset form
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post.');
        }
    };

    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !prev);
    };


    // Sort posts by date, assuming `created_at` or similar field exists
    const sortedPosts = posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));


    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="post-container">
                <button onClick={toggleFormVisibility} className="toggle-button">
                    {isFormVisible ? 'Close Post Form' : 'Create Post'}
                </button>
                <div className={`collapsible-form ${isFormVisible ? 'open' : ''}`}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="content">Content:</label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="field">Field:</label>
                            <input
                                type="text"
                                id="field"
                                name="field"
                                value={formData.field}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Create Post</button>
                    </form>
                </div>
            </div>

            {/* User Posts Section */}
            <section className="user-posts">
                <h2>What Our Users Are Saying</h2>
                <div className="posts">
                    {sortedPosts.length > 0 ? (
                        sortedPosts.slice(0, 5).map((post) => (
                            <div className="post" key={post.id}>
                                <p>{post.content}</p>
                                {/* Link to the user's profile */}
                                <span>
                                    Posted by: <Link to={`/user/${post.user_id}`}>{post.user}</Link>
                                </span>
                            </div>
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PostForm;
