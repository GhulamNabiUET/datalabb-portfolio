
import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact">
      <section className="contact-section">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-subheading">Get in touch with us for inquiries, support, or collaboration.</p>

        <div className="contact-info">
          <div className="contact-item">
            <h4><FaMapMarkerAlt /> Address</h4>
            <p>
              Al-Khawarzmi Institure<br />
              Of Computer Sciences,<br />
              UET ,Lahore<br />
            </p>
          </div>

          <div className="contact-item">
            <h4><FaGithub /> GitHub</h4>
            <p>
              <a href="https://github.com/DatalabbR-D" target="_blank" rel="noreferrer">
                github.com/DatalabbR-D
              </a>
            </p>
          </div>

 <div className="contact-item">
            <h4><FaEnvelope /> Gmail</h4>

            <p>
                Datalabb123@gmail.com
            </p>
          </div>
          <div className="contact-item">
            <h4><FaLinkedin /> LinkedIn</h4>
            <p>
              <a href="https://www.linkedin.com/company/datalabb/" target="_blank" rel="noreferrer">
                linkedin.com/company/datalabb
              </a>
            </p>
          </div>

         
        </div>
      </section>
    </div>
  );
}

export default Contact;
