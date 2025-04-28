import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    // Here you'd send to backend or use mail API
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            required
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            required
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
        <div className="text-center mt-3">
          Or message us directly on <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
