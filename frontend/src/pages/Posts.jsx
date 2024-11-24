import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Posts.css';
import useFetchPosts from '../hooks/useFetchPosts';

const PostForm = () => {
    const { posts } = useFetchPosts();
    const [formData, setFormData] = useState({
        user_id: '',
        content: '',
        field: '',
    });
    const [isFormVisible, setIsFormVisible] = useState(false);

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

    return (
        <div>
            <div> <Navbar /></div>
           
            <div className="post-container">
                <button
                    onClick={toggleFormVisibility}
                    className="toggle-button"
                >
                    {isFormVisible ? 'Close Post Form' : 'Create Post'}
                </button>
                <div
                    className={`collapsible-form ${
                        isFormVisible ? 'open' : ''
                    }`}
                >
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="user_id">User ID:</label>
                            <input
                                type="number"
                                id="user_id"
                                name="user_id"
                                value={formData.user_id}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                    {posts.length > 0 ? (
                        posts.slice(0, 5).map((post) => (
                            <div className="post" key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <span>Posted by: {post.user}</span>
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
