import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    acceptedTerms: false,
    paidFee: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      alert('Please accept the Terms & Conditions.');
      return;
    }

    if (!formData.paidFee) {
      alert('Please pay the ₹1,000 guidance fee to proceed.');
      return;
    }

    // Here you would handle backend signup + payment verification
    alert('Sign up successful! Redirecting to dashboard...');
    // e.g., navigate('/dashboard');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Sign Up for Career Guidance</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Create Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="terms">
            I accept the <Link to="#">Terms & Conditions</Link>.
          </label>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="guidanceFee"
            name="paidFee"
            checked={formData.paidFee}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="guidanceFee">
            I have paid the ₹1,000 Guidance & Advising Fee.
          </label>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Create Account & Proceed
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
