import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="icon">🎓</div>
          <h1>Join Your Class Now !! </h1>
        </div>
        <form method="post" action={"http://localhost:3000/signup"}>
          <div className="form-group">
            <label htmlFor="Name">Student Name</label>
            <input
              id="Name"
              name="Name"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="username">Student User Name</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default App;
