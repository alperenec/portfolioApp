import React from "react";
import contactcss from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={contactcss.contact_section}>
      <div className={contactcss.container}>
        <h2>Contact Me</h2>
        <form className={contactcss.contact_form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
