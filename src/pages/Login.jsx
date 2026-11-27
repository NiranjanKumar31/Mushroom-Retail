
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      savedUser &&
      savedUser.email === formdata.email &&
      savedUser.password === formdata.password
    ) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  }

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1> Mushroom Retail</h1>
        <p>Login to your account</p>

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
          placeholder="Enter your password"
          value={formdata.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account?
          <Link to="/"> Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
