import React from "react";
import "./App.css";

function Signup() {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="icon">🎓</div>
          <h1>Create Your Account</h1>
        </div>
        <form method="post" action={"http://localhost:3000/signup"}>
          <div className="form-group">
            <label htmlFor="username">Student User Name</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;