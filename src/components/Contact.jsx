import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get these from Environment Variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          formRef.current.reset();
          
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error(error.text);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I am currently looking for internship opportunities and am always open to discussing tech, cloud computing, and potential collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <a href="mailto:tamizhsemmozhi25@gmail.com" className="contact-detail-item">
                <div className="detail-icon"><Send size={18} /></div>
                <span>tamizhsemmozhi25@gmail.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input type="text" id="user_name" name="user_name" required placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" id="user_email" name="user_email" required placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Hello!" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 size={18} className="spinner" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="status-message success">
                  <CheckCircle size={18} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error">
                  <AlertCircle size={18} />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
