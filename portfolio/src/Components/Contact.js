import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_4tmkuvo";
const TEMPLATE_ID = "template_fbd3w6h";
const USER_ID = "wl5UncScPuVXtGGI6"; // EmailJS public key

const Contact = ({ show, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!show) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      USER_ID
    )
    .then(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", message: "" });
        onClose();
      }, 2000);
    })
    .catch(() => {
      setError("Failed to send. Please try again later.");
    });
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Contact Me</h2>
        {submitted ? (
          <div className="thank-you">Thank you for reaching out!</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </label>
            {error && <div style={{color: "red", marginBottom: 8}}>{error}</div>}
            <button type="submit" className="submit-btn">Send</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;