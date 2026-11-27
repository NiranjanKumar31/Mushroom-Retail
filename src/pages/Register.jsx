
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Register() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formdata.password !== formdata.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formdata.password.length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formdata));

    alert("Registration successful!");

    navigate("/login");
  }

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>Mushroom Retail</h1>
        <h2>Create Account</h2>
        <p>Register to manage your mushroom store</p>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formdata.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formdata.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formdata.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formdata.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
