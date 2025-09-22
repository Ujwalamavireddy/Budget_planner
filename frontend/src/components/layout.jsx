import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="app-container" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header
        style={{
          background: "#4CAF50",
          padding: "1rem",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>💰 Budget Planner</h2>
        <nav>
          <Link to="/" style={{ color: "white", marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/login" style={{ color: "white", marginRight: "1rem" }}>
            Login
          </Link>
          <Link to="/register" style={{ color: "white" }}>
            Register
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main style={{ padding: "2rem", minHeight: "70vh" }}>{children}</main>

      {/* Footer */}
      <footer
        style={{
          background: "#333",
          color: "white",
          textAlign: "center",
          padding: "1rem",
          marginTop: "2rem",
        }}
      >
        <p>© {new Date().getFullYear()} Budget Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
