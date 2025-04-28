import React from 'react';
import { Link } from 'react-router-dom'; // <-- You forgot this

const WelcomePage = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Welcome to JobLink Portal</h1>
        <p className="lead">
          Your trusted partner for overseas job applications, guidance, and support.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="/SignUpPage" className="btn btn-primary btn-lg">Sign Up</Link>
          <Link to="/LoginPage" className="btn btn-outline-secondary btn-lg">Log In</Link>
        </div>
      </div>

      {/* Pricing Highlights */}
      <div className="row text-center mb-5">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h3>Guidance & Advising</h3>
            <p>Access expert career counseling and resume feedback.</p>
            <span className="badge bg-success fs-5">₹1,000</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h3>Full Job Application</h3>
            <p>Apply directly to top employers with full support.</p>
            <span className="badge bg-info fs-5">₹10,000</span>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Success Stories</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <p>"I booked over 20 WhatsApp consultations and earned extra ₹5,000!"</p>
              <small className="text-muted">– Priya R.</small>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <p>"My referral link brought me 10 new signups—earned ₹5,000 bonus!"</p>
              <small className="text-muted">– Ahmed K.</small>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3">
              <p>"I landed a remote writing gig paying ₹20,000/month thanks to JobLink."</p>
              <small className="text-muted">– Sunita M.</small>
            </div>
          </div>
        </div>
      </div>

      {/* Monetization Options */}
      <div className="mb-5">
        <h2 className="text-center mb-4">How You Can Earn</h2>
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5>WhatsApp Views</h5>
              <p>
                Share our curated job tips and video snippets to your WhatsApp groups or status. Earn rewards based on views and engagement from your network.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5>Referral Bonuses</h5>
              <p>
                Invite friends using your unique referral link. Get ₹500 for every successful sign‑up and additional commission when they complete their application fee.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5>Play-to-Earn Games</h5>
              <p>
                Access fun, skill-based mini‑games on our platform. Earn points convertible to cash or discount vouchers for your guidance fees.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm p-3">
              <h5>Online Writing Gigs</h5>
              <p>
                Get matched with paid writing assignments—from blog posts to cover letters. Rates start at ₹1,000 per article and go up based on complexity.
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="card shadow-sm p-3">
              <h5>High-Paying Job Matches</h5>
              <p>
                Our AI-powered job matcher surfaces premium openings abroad, with salaries ranging from ₹30,000 to ₹100,000+ per month. Apply directly and negotiate confidently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h4 className="mb-3">Ready to Start Earning?</h4>
        <p>Join JobLink now and unlock multiple income streams—while building your global career path.</p>
        <Link to="/SignUpPage" className="btn btn-success btn-lg mt-2">Sign Up & Get Started</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
