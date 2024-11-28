import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <h1 className="site-title">Switchy</h1>
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
            <Link to="/skills-test" className="btn btn-secondary">
              Take Skills Test
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="emoji">🗺️</span>
            <h3>Explore Career Roadmaps</h3>
            <p>
              Browse various industry-specific career paths tailored to your
              goals.
            </p>
          </div>
          <div className="step">
            <span className="emoji">📊</span>
            <h3>Take Skill Assessment Quizzes</h3>
            <p>Assess your current skills and receive tailored feedback.</p>
          </div>
          <div className="step">
            <span className="emoji">🤝</span>
            <h3>Connect with Mentors & Peers</h3>
            <p>
              Join a community of industry professionals to gain insights and
              guidance.
            </p>
          </div>
          <div className="step">
            <span className="emoji">📚</span>
            <h3>Access Curated Learning Resources</h3>
            <p>
              Get personalized recommendations for courses, articles, and
              videos.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Switch Careers?</h2>
        <p>Join Switchy today and start your personalized roadmap!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
