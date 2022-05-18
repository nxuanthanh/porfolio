import { FiSmartphone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c8x6poi', 'template_kq1lmqr', form.current, 'zSIk3TtsJumna5AZ6').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>n.xuanthanhh@gmail.com</h5>
            <a href="mailto:n.xuanthanhh@gmail.com" target="_blank" rel="noopener noreferrer">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Meassage</h4>
            <h5>Xuân Thành</h5>
            <a
              href="https://m.me/profile.php?id=100017181799314"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiSmartphone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>0763156709</h5>
            <a href="tell:0763156709" target="_blank" rel="noopener noreferrer">
              Make a phone call
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

Contact.propTypes = {};

export default Contact;
