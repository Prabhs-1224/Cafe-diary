// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="text-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#fceef5",
        padding: "40px 20px",
        fontFamily: "'Poppins', sans-serif",
        color: "#5d3a66",
      }}
    >
      {/* Logo */}
      <img
        src="/file.png"
        alt="Latte Letters Logo"
        style={{ width: "300px", marginBottom: "20px" }}
      />

      {/* Website Name */}
      <h1 className="mb-3" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "3rem" }}>
        Latte Letters
      </h1>

      {/* About Text */}
      <p className="lead" style={{ maxWidth: "600px", margin: "0 auto", color: "#8e44ad" }}>
        Your cozy café diary to capture reviews, photos & fun memories of all your favorite coffee spots.
      </p>

      {/* Inspirational Quote */}
      <blockquote className="mt-4" style={{ fontStyle: "italic", color: "#b86ddf" }}>
        “Every latte has a story. Capture yours, one café at a time.”
      </blockquote>

      {/* Feature Cards */}
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <div style={{ fontSize: "2rem" }}>📸</div>
              <h5 className="mt-3">Upload Café Photos</h5>
              <p className="small">
                Store your café snaps to relive the vibes and aesthetics anytime.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <div style={{ fontSize: "2rem" }}>⭐</div>
              <h5 className="mt-3">Rate and Review</h5>
              <p className="small">
                Give star ratings and honest reviews based on your experience.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <div style={{ fontSize: "2rem" }}>📖</div>
              <h5 className="mt-3">Write Memories</h5>
              <p className="small">
                Write down your thoughts, moments, or even doodles after every visit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/login" className="btn btn-outline-primary px-4 rounded-pill">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-outline-success px-4 rounded-pill">
          Sign Up
        </Link>
      </div>

      {/* Footer Text */}
      <p className="mt-4 text-muted small">
        ☕ Built with love for coffee lovers & diary keepers.
      </p>
    </div>
  );
}

export default Home;


