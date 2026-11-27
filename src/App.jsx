
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";

function Dashboard() {
  return (
    <div className="container">
      <div className="form-box">
        <h1>Mushroom Retail</h1>
        <h2>Dashboard</h2>
        <p>Welcome to Mushroom Retail Management!</p>
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
