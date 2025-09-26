import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const[isFadingOut, setIsFadingOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      setShowToast(true);

      setTimeout(()=>{
        setIsFadingOut(true);
      },2000);

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        backgroundColor: "#fff0f5",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      {/* 💖 Login Card */}
      <div
        className="bg-white p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#db5d9f",
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2.2rem",
          }}
        >
          Welcome Back ✨
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#db5d9f", border: "none" }}>
              Log In 💌
            </button>
          </div>
        </form>

        <p className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#db5d9f" }}>
            Sign Up
          </Link>
        </p>
      </div>

      {/* 🎀 Toast Notification */}
      {showToast && (
        <div
          className={`toast show align-items-center text-white border-0 position-fixed bottom-0 end-0 m-4 animate__animated ${
            isFadingOut ? "animate__fadeOutRight" : "animate__fadeInRight"
          }`}
          style={{
            backgroundColor: "#db5d9f",
            zIndex: 9999,
            minWidth: "250px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
          }}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              🌸 Welcome back to <strong>Latte Letters</strong>!
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;