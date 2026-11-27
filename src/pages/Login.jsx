
import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-page">

      <nav className="navbar">
        <a href="/">Login</a>
        <span>|</span>
        <a href="/projects">Projects</a>
        <span>|</span>
        <a href="/tasks">Tasks</a>
      </nav>

      <div className="login-content">
        <h1>Login Page</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">Login  </button>
        </form>
      </div>

    </div>
  );
}

export default Login;
