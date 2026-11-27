
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  function handleLogout() {

    // Remove login status
    sessionStorage.removeItem("isLoggedIn");

    alert("Logged out successfully!");

    navigate("/login");
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1> Mushroom Retail</h1>

        <h2>Welcome to Dashboard!</h2>

        <p>
          You have successfully logged in.
        </p>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;
