import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <p>
        Welcome to our coding platform! We are committed to delivering high-quality tutorials,
        interactive courses, and real-time online compilers to learners across the globe.
      </p>

      <p>
        Whether you're learning your very first programming language or preparing for software
        engineering interviews, we provide curated resources and tools to help you learn faster and better.
      </p>

      <h2>🌍 Our Mission</h2>
      <p>
        To make coding education accessible, practical, and affordable for everyone—regardless of
        their background, location, or financial status.
      </p>

      <h2>💡 What We Offer</h2>
      <ul>
        <li>Beginner to advanced tutorials for languages like Python, C++, Java, JavaScript, and more</li>
        <li>Online compilers to write, test, and debug code in real time</li>
        <li>DSA (Data Structures & Algorithms) practice paths with challenges</li>
        <li>Tips and guides for cracking coding interviews</li>
        <li>Community discussions, support, and collaboration</li>
      </ul>

      <h2>👨‍💻 Who We Are</h2>
      <p>
        A passionate group of developers, educators, and learners who believe coding should be fun,
        accessible, and effective. We are constantly evolving to bring the best learning experience
        to our users.
      </p>

      <h2>🤝 Get Involved</h2>
      <p>
        We’re always looking for contributors, content creators, and passionate learners to join our mission.
        Reach out via the <a href="/contact">Contact Developer</a> page if you're interested in working with us!
      </p>

      <p className="last-updated"><strong>Last Updated:</strong> August 27, 2025</p>
    </div>
  );
};

export default About;
