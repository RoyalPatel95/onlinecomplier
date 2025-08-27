import React from 'react';
import './HomePage.css';
import Footer from '/src/components/Footer';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const languages = [
    { name: 'Python', description: 'Easy-to-learn, powerful language for web, AI, and more.', logo: <img src="/src/assets/python.svg"/>, link: 'https://docs.python.org/3/' },
    { name: 'C', description: 'Fundamental language for system programming.', logo: <img src="/src/assets/C.svg"/>, link: 'https://devdocs.io/c/' },
    { name: 'C++', description: 'Fast and powerful language for game development, and more.', logo: <img src="/src/assets/c++.svg"/>, link: 'https://cplusplus.com/doc/' },
    { name: 'Java', description: 'Popular for web/app development and big data.', logo: <img src="/src/assets/java.svg"/>, link: 'https://docs.oracle.com/javase/8/docs/' },
    { name: 'JavaScript', description: 'The language of the web for interactive websites.', logo: <img src="/src/assets/javascript.svg"/>, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Kotlin', description: 'Modern language for Android app development.', logo: <img src="/src/assets/kotlin.svg"/>, link: 'https://kotlinlang.org/docs/home.html' },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Start learning to code for free</h1>
        <p>Learn to code with our beginner-friendly tutorials and examples. Read tutorials, try examples, and write code in an online compiler.</p>
        <div className="popular-searches">
          <span>Popular:</span>
          <a href="https://docs.python.org/3/">Python</a>
          <a href="https://devdocs.io/c/">C</a>
          <a href="https://www.tpointtech.com/">Java</a>
          <a href="https://cplusplus.com/doc/">C++</a>
          <a href="https://dev.mysql.com/doc/">SQL</a>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section className="languages-section">
        <h2>Choose your first programming language</h2>
        <div className="languages-grid">
          {languages.map(lang => (
            <div className="language-card" key={lang.name}>
              <div className="lang-logo">{lang.logo}</div>
              <h3>{lang.name}</h3>
              <p>{lang.description}</p>
              <a
                href={lang.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="learn-button">Start Learning</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-content">
          <h2>Join our Community</h2>
          <p>Ask questions, share your projects, and connect with other learners on our Discord server and community forum.</p>
          <div className="community-buttons">
            <button className="discord-button"><a href="#">Join our Discord</a></button>
            <button className="forum-button"> <a href="#">Visit our Community</a></button>
          </div>
        </div>
      </section>

      {/* DSA Section */}
      <section className="dsa-section">
        <div className="dsa-text">
          <h2>Master Data Structures and Algorithms</h2>
          <p>Our new DSA course is a complete guide to learning data structures and algorithms, with interactive visualizations, quizzes, and coding challenges.</p>
          <button className="dsa-button"><a href="https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/">Start Learning For FREE</a></button>
        </div>
        <div className="dsa-image">
          <span><img src="/src/assets/image.png" alt="" /></span>
        </div>
      </section>

      {/* Why Programiz Section */}
      <section className="why-programiz-section">
        <h2>Why OneComplier?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <h3>Trusted by Millions</h3>
            <p>Over 50 million learners worldwide trust Programiz.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">😊</div>
            <h3>Beginner Friendly</h3>
            <p>Clear explanations and examples for absolute beginners.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📚</div>
            <h3>Organized and Easy to Follow</h3>
            <p>Logical progression of topics for a smooth learning path.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💻</div>
            <h3>Learn by Doing</h3>
            <p>Write and run code in our online editor.</p>
          </div>
        </div>
      </section>
      {/* Links Section */}
<div className="link-sections">
  <section className="about-section">
    <Link to="/about"><h2>About Us</h2></Link>
    <Link to="/about"><p>Learn more about our mission to make coding education accessible to everyone.</p></Link>
  </section>

  <section className="contact-section">
    <Link to="/contact"><h2>Contact Developer</h2></Link>
    <Link to="/contact"><p>Have questions or suggestions? Reach out to us!</p></Link>
  </section>

  <section className="terms-section">
    <Link to="/term"><h2>Terms and Conditions</h2></Link>
    <Link to="/term"><p>Read our terms and conditions for using our platform.</p></Link>
  </section>
</div>

{/* Final CTA Section */}
<section className="final-cta-section">
  <Link to="/app"><h2>Create Your First Program</h2></Link>
  <Link to="/app"><p>Ready to start your coding journey? Let's begin with your first program.</p></Link>
  <Link to="/app">GO.......</Link>
</section>

      <Footer />
    </div>
  );
};

export default HomePage;
