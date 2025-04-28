import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your auth logic
    alert('Login successful!');
    // Redirect to dashboard, e.g., navigate('/dashboard');
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
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
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            required
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="text-end mb-3">
          <Link to="#">Forgot Password?</Link>
        </div>
        <button type="submit" className="btn btn-primary w-100">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
