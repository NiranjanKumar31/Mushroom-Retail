import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/formschema/registerschema";

function Register() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerschema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: ""
    }
  });

  function onSubmit(data) {
    localStorage.setItem("user", JSON.stringify(data));

    alert("Registration Successful!");
    navigate("/login");
  }

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit(onSubmit)}>

        <h1>Register</h1>

        <input type="text" placeholder="Enter your text" {...register("name")} />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <input type="email" placeholder="Enter your email" {...register("email")} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input type="password" placeholder="Enter your password" {...register("password")} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <input type="number" placeholder="Enter your age" {...register("age")} />
        {errors.age && <p className="error-message">{errors.age.message}</p>}

        <button type="submit">Submit</button>

        <p className="form-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </form>
    </div>
  );
}

export default Register;