import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-profile">
        <h2>Get access to my work</h2>
        <p>Access my social networks:</p>
      </div>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/jose-lucas-silva" target="_blank" className="contact-details"> Linkedin</a>
        <a id="profile-link" href="https://github.com/Jose-Lucas-Silva" target="_blank" className="contact-details">GitHub</a>
      </div>
    </section>
  );
}

export default ContactSection;