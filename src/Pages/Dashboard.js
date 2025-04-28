import React from 'react';

const Dashboard = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">User Dashboard</h2>

      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <a href="#referrals" className="list-group-item list-group-item-action">Referrals</a>
            <a href="#earnings" className="list-group-item list-group-item-action">Earnings</a>
            <a href="#employer" className="list-group-item list-group-item-action">Employer</a>
            <a href="#loan" className="list-group-item list-group-item-action">Loan</a>
            <a href="#whatsapp" className="list-group-item list-group-item-action">WhatsApp</a>
            <a href="#countries" className="list-group-item list-group-item-action">Countries Worked</a>
            <a href="#skills" className="list-group-item list-group-item-action">Skills</a>
            <a href="#ratings" className="list-group-item list-group-item-action">Ratings</a>
            <a href="#applications" className="list-group-item list-group-item-action">Applications</a>
          </div>
        </div>

        <div className="col-md-9">
          <div id="referrals">
            <h4>Referrals</h4>
            <p>Referral link: <code>yourapp.com/signup?ref=123ABC</code></p>
            <p>You have 3 successful referrals. You've earned ₹1,500.</p>
          </div>

          <div id="earnings" className="mt-5">
            <h4>Earnings</h4>
            <p>Referral commissions and application bonuses will appear here.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
