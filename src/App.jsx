
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Protected route
function ProtectedRoute({ children }) {

  const isLoggedIn =
    sessionStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Register page */}
        <Route
          path="/"
          element={<Register />}
        />

        {/* Login page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard page */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Invalid URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
