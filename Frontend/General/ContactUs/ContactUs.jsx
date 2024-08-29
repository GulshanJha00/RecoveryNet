import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">We're Here to Help</h1>
      <p className="contact-message">
        Thank you for visiting RecoveryNET. Whether you have a question, need
        assistance, or want to help us in any way, we're here to help.
      </p>
      <p className="contact-info">
        I'm <strong className="strrong">Gulshan Kumar</strong>, the founder of
        RecoveryNET, and I'm personally committed to ensuring you get the
        support you need.
      </p>
      <p className="contact-email">
        For any inquiries about our services or suggestions for improvement,
        feel free to reach out at:{" "}
        <a href="mailto:gk4763549@gmail.com">contact@recoveryNET.com</a>
      </p>
      <p className="contact-linkedin">
        If you'd like to connect with me directly, you can find me on LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/gulshankumar0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default ContactUs;
