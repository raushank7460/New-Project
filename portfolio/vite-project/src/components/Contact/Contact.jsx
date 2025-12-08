import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
