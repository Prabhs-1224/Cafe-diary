import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api"; // ✅ import centralized API

function Signup() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // ✅ call backend signup API
      const res = await api.post("/auth/register", { email, password });

      // if success
      if (res.data) {
        setShowToast(true);
        setError("");

        // redirect after short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.error || "Signup failed. Try again.");
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
      {/* ✨ Signup Card */}
      <div
        className="bg-white p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#6f42c1",
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2.2rem",
          }}
        >
          Join Latte Letters ☕
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
              placeholder="Create password"
              required
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success"
              style={{ backgroundColor: "#6f42c1", border: "none" }}
            >
              Sign Up 💖
            </button>
          </div>
        </form>

        {/* 🚨 Error message */}
        {error && (
          <p className="text-danger text-center mt-3" style={{ fontSize: "0.9rem" }}>
            {error}
          </p>
        )}

        <p className="text-center mt-3" style={{ fontSize: "0.9rem" }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "#6f42c1" }}>
            Log In
          </Link>
        </p>
      </div>

      {/* 🎉 Toast Notification */}
      {showToast && (
        <div
          className="toast show align-items-center text-white border-0 position-fixed bottom-0 end-0 m-4 animate__animated animate__fadeInRight"
          style={{
            backgroundColor: "#6f42c1",
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
              ☕ You're all signed up! Welcome to <strong>Latte Letters</strong> 💌
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

export default Signup;




