import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./contact.css"
import { FiSend } from "react-icons/fi";
import emailjs from 'emailjs-com';

emailjs.init("lIjzwLJ04GmopNXeC");

const sendEmail = (e) => {
  e.preventDefault();

  const templateParams = {
     from_name: e.target.user_name.value,
     from_email: e.target.user_email.value,
     message: e.target.message.value,
  };

  emailjs.send('service_dtlb0fh', 'template_at6zioj', templateParams)
     .then((response) => {
        alert('Email sent successfully:');
     })
     .catch((error) => {
        alert('Email sending failed');
     });

  // Clear the form inputs
  e.target.reset();
};


const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className="contact__description">
          I'm actively seeking new opportunities and I welcome any feedback or inquiries. 
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            vision.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">dhruvbaXXXXX@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+9191310XXXXX</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://www.facebook.com/profile.php?id=100069564317714" className="contact__social-link">
                <FaFacebookF />
            </a>
            <a href="https://twitter.com/DhruvBandi03" className="contact__social-link">
                <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/dhruvbandi/" className="contact__social-link">
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/dhruv_bandi/" className="contact__social-link">
                <FaInstagram />
            </a>
          </div>
        </div>

        <form  className="contact__form" onSubmit={sendEmail}>
            <div className="form__input-group">
                <div className="form__input-div">
                    <input type="text" name="user_name" placeholder="Your Name" className="form__control" />
                </div>
                <div className="form__input-div">
                    <input type="email" name="user_email" placeholder="Your Email" className="form__control" />
                </div>
                {/* <div className="form__input-div">
                    <input type="text" placeholder="Your Subject" className="form__control" />
                </div> */}
            </div>
            <div className="form__input-div">
                <textarea name="message" placeholder="Your Message" className="form__control textarea"></textarea>
            </div>

            <button type="submit" className="button">
                Send Message
                <span className="button__icon contact__button-icon">
                    <FiSend />
                </span>
            </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
