// TestimonialsComponent.js
import React, { useState } from "react";

const testimonialsData = [
  {
    desktopImg:
      "https://www.accorian.com/wp-content/uploads/2025/07/PEA-Testimonials-Desktop.svg",
    mobileImg:
      "https://www.accorian.com/wp-content/uploads/2025/07/PEA-Testimonials-Mobile.svg",
    alt: "Patient Engagement Advisors",
    text: "The SOC 2 Bundle has been an absolute game-changer for us! Accorian's seamless integration of automation and services streamlined our processes, eliminating the need for multiple vendors. This efficiently allowed us to focus on our objectives and fast-track our SOC journey without compromise.",
    author: "- John Lightfoot, CTO at Patient Engagement Advisors",
  },
  {
    desktopImg:
      "https://www.accorian.com/wp-content/uploads/2025/07/Novus-Health-Systems-Testimonials-Desktop.svg",
    mobileImg:
      "https://www.accorian.com/wp-content/uploads/2025/07/Novus-Health-Systems-Testimonials-Mobile.svg",
    alt: "Novus Health Systems",
    text: "We love GORICO! It has streamlined our audit process with its intuitive interface and powerful features, making compliance management more efficient and less time-consuming. GORICO has transformed our approach to GRC, providing clarity and confidence in our compliance efforts.",
    author: "- Morgan Kershner, Security Officer at Novus Health Systems",
  },
];

export default function TestimonialsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(testimonialsData.length - 1);
    } else if (index >= testimonialsData.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="testimonials-slider">
      <div className="slider-container">
        <div className="testimonial-section">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className={`testimonial ${i === currentIndex ? "active" : ""}`}
            >
              <div className="testimonial-boxes">
                <div className="testimonial-boxes-media">
                  <img
                    className="acctesti-image-desk-img"
                    src={t.desktopImg}
                    alt={t.alt + " Desktop"}
                  />
                  <img
                    className="acctesti-image-mobile-img"
                    src={t.mobileImg}
                    alt={t.alt + " Mobile"}
                  />
                </div>
                <div className="testimonial-boxes-text">
                  <blockquote>
                    <p>{t.text}</p>
                    <h6>{t.author}</h6>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <div className="arrow left" onClick={() => showSlide(currentIndex - 1)}>
            <img
              src="https://www.accorian.in/wp-content/uploads/2025/07/Left-Arrow-Icon.svg"
              alt="Left arrow"
            />
          </div>
          <div className="arrow right" onClick={() => showSlide(currentIndex + 1)}>
            <img
              src="https://www.accorian.in/wp-content/uploads/2025/07/Right-Arrow-Icon.svg"
              alt="Right arrow"
            />
          </div>

          {/* Dots */}
          <div className="dots">
            {testimonialsData.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => showSlide(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
