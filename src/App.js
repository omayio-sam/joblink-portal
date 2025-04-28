
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Pages/Navbar';
import WelcomePage from './Pages/WelcomePage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ContactPage from './Pages/ContactPage';
// import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content p-4">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
