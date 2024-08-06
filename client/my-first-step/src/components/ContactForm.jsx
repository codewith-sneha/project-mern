import './ContactForm.css';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
console.log('Form data submitted:', formData);   
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: ''
    });
  };

  return (
      <div className="container">
        <div className='first-row'>
          <div className='first'>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        <div className="contact-details">
            <p><strong>Address:</strong> C - Block, Vivek Vihar, New Delhi – 110 095</p>
            <p><strong>Phone:</strong> 011-43072200</p>
            <p><strong>Email:</strong> <a href="mailto:arwachinschool@gmail.com">arwachinschool@gmail.com</a></p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Google Maps"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0435419080104!2d77.28973837409686!3d28.68834408154651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb8f5322fb83%3A0xfe2f409b70d52fec!2sMy%20First%20Step!5e0!3m2!1sen!2sin!4v1722398008453!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
  );
};

export default ContactForm;

// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <p>Contact Us</p>
//       <div className="container">


//                <div className='first-row'>
//                <div className='first'>
//                <form className="contact-form">
//           <input type="text" name="name" placeholder="Full Name" required />
//           <input type="tel" name="mobile" placeholder="Mobile Number" required />
//           <input type="email" name="email" placeholder="Email Address" required />
//           <textarea name="message" placeholder="Enter Message" required></textarea>
//           <button type="submit">Send Message</button>
//                </form>
//                </div>

          
//                <div className="contact-details">
//           <p><strong>Address:</strong> C - Block, Vivek Vihar, New Delhi – 110 095</p>
//           <p><strong>Phone:</strong> 011-43072200</p>
//           <p><strong>Email:</strong> <a href="mailto:arwachinschool@gmail.com">arwachinschool@gmail.com</a></p>
//         </div>
//                </div>

       
          
          
//           <div className="map-container">
//           <iframe
//             title="Google Maps"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             style={{ border: 0 }}
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0435419080104!2d77.28973837409686!3d28.68834408154651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb8f5322fb83%3A0xfe2f409b70d52fec!2sMy%20First%20Step!5e0!3m2!1sen!2sin!4v1722398008453!5m2!1sen!2sin"
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe></div>
               
//     </div>
//     </div>
//   );
// };

// export default Contact;
