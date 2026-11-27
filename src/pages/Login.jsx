
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginschema } from "../components/formschema/loginschema";

function Login() {

  const navigate = useNavigate();

  // Initialize Login form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginschema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  // Handle login submission
  function onSubmit(data) {

    // Get registered user details
    const savedUser = localStorage.getItem("user");

    // Check whether user exists
    if (!savedUser) {
      alert("Please register first!");
      navigate("/");
      return;
    }

    // Convert JSON string into object
    const user = JSON.parse(savedUser);

    // Compare email and password
    if (
      user.email === data.email &&
      user.password === data.password
    ) {

      // Save login status
      sessionStorage.setItem("isLoggedIn", "true");

      alert("Login Successful!");

      navigate("/dashboard");

    } else {

      alert("Invalid email or password!");

    }
  }

  return (
    <div className="login-container">

      <form
        className="login-card"
        onSubmit={handleSubmit(onSubmit)}
      >

        <h1>Login</h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />

        {errors.email && (
          <p className="error-message">
            {errors.email.message}
          </p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />

        {errors.password && (
          <p className="error-message">
            {errors.password.message}
          </p>
        )}

        <button type="submit">
          Login
        </button>

        <p className="form-link">
          Don't have an account?
          <Link to="/"> Register</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;
