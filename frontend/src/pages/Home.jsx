import React from "react";
//import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";
import "../styles/Home.css";
import useFetchPosts from "../hooks/useFetchPosts";
const Home = () => {
  const { posts } = useFetchPosts();

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">Switchy</div>
        <nav>
          <ul>
            <li>
              <Link to="/login" className="btn">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="btn">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Switch to Your Dream Career with Personalized Roadmaps and
            Mentorship
          </h1>
          <p>
            Switchy is a career transition app designed to support you in
            switching fields with personalized career roadmaps, curated learning
            resources, and mentorship from industry professionals.
          </p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn">
              Start Your Journey
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Explore Career Roadmaps</h3>
            <p>
              Browse various industry-specific career paths tailored to your
              goals.
            </p>
          </div>
          <div className="step">
            <h3>Take Skill Assessment Quizzes</h3>
            <p>Assess your current skills and receive tailored feedback.</p>
          </div>
          <div className="step">
            <h3>Connect with Mentors & Peers</h3>
            <p>
              Join a community of industry professionals to gain insights and
              guidance.
            </p>
          </div>
          <div className="step">
            <h3>Access Curated Learning Resources</h3>
            <p>
              Get personalized recommendations for courses, articles, and
              videos.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Switchy?</h2>
        <div className="feature">
          <h3>Personalized Career Roadmaps</h3>
          <p>Career paths designed specifically for your goals.</p>
        </div>
        <div className="feature">
          <h3>Skill-Based Quizzes</h3>
          <p>
            Take quizzes to assess your skills and receive tailored
            recommendations.
          </p>
        </div>
        <div className="feature">
          <h3>Mentorship and Community</h3>
          <p>Connect with mentors and peers in your desired industry.</p>
        </div>
        <div className="feature">
          <h3>Curated Learning Resources</h3>
          <p>
            Access personalized learning content to help you switch careers.
          </p>
        </div>
      </section>

      {/* User Posts Section */}
      <section className="user-posts">
        <h2>What Our Users Are Saying</h2>
        <div className="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
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

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Switch Careers?</h2>
        <p>Join Switchy today and start your personalized roadmap!</p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn">
            Sign Up
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social-icons">{/* Add social media links/icons */}</div>
      </footer>
    </div>
  );
};

export default Home;
