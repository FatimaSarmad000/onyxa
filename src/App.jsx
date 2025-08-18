import React, { useState } from "react";
import "./App.css";
import boy from './assets/boy.jpg';
import girl from './assets/girl.jpg';
import logo from './assets/logo.png'; // Import your logo

export default function App() {
  const testimonials = [
    {
      text: "Let our experts prepare a free home analysis for you! Just fill out our form. .",
      author: "Mahbubur Rahman",
      role: "Owner, Sofia, UK",
      img: boy,
    },
    {
      text: "Working with Onyxa has been an absolute pleasure. They are the best.",
      author: "Jane Smith",
      role: "CEO, New York, USA",
      img: girl,
    },
    {
      text: "I highly recommend Onyxa for any tech solutions. They delivered on time and on budget.",
      author: "Carlos Mendes",
      role: "Founder, Lisbon.",
      img: boy,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev >= testimonials.length - 2 ? 0 : prev + 1
    );
  };

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length]
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Onyxa Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
  <source src={`${import.meta.env.BASE_URL}background_video.mp4`} type="video/mp4" />
  Your browser does not support the video tag.
</video>

        <div className="hero-content">
          <h1>Building the Future of Software </h1>
          <p>
            We craft innovative digital solutions to help businesses grow,
            innovate, and lead in the market.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="icon-circle">📊</div>
            <h3>Business Strategy</h3>
            <p>A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics.</p>
          </div>
          <div className="service-card">
            <div className="icon-circle">🎨</div>
            <h3>UX/UI Design</h3>
            <p>A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics.</p>
          </div>
          <div className="service-card">
            <div className="icon-circle">💻</div>
            <h3>App Development</h3>
            <p>A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics.</p>
          </div>
          <div className="service-card">
            <div className="icon-circle">🌐</div>
            <h3>Web Development</h3>
            <p>A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics.</p>
          </div>
          <div className="service-card">
            <div className="icon-circle">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>A business strategy is a powerful tool for helping you reach your goals, defining the methods and tactics.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2 className="section-title">Customers Talk About Us</h2>
          <p className="section-description">
            Customer support represents the resources within your company that
            provide technical assistance to consumers after they purchase a
            product or service.
          </p>
        </div>

        <div className="testimonial-container">
          <button className="arrow" onClick={handlePrev}>←</button>
          <div className="testimonial-cards">
            {visibleTestimonials.map((t, index) => (
              <div className="testimonial-card" key={index}>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.author} />
                  <div>
                    <h4>{t.author}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="arrow" onClick={handleNext}>→</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Onyxa. All rights reserved.</p>
      </footer>
    </div>
  );
}
