import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";

const months = [
  { name: "January", emoji: "☃️" },
  { name: "February", emoji: "💌" },
  { name: "March", emoji: "🌸" },
  { name: "April", emoji: "🌷" },
  { name: "May", emoji: "☀️" },
  { name: "June", emoji: "🌊" },
  { name: "July", emoji: "🍦" },
  { name: "August", emoji: "🌻" },
  { name: "September", emoji: "🍁" },
  { name: "October", emoji: "🎃" },
  { name: "November", emoji: "❄️" },
  { name: "December", emoji: "🎄" },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div
      className="min-vh-100 p-4 animate__animated animate__fadeIn"
      style={{
        backgroundColor: "#fff0f5",
        fontFamily: "'Poppins', sans-serif",
        paddingBottom: "80px",
      }}
    >
      {/* 💖 Header */}
      <h2
        className="text-center mb-4"
        style={{
          color: "#db5d9f",
          fontFamily: "'Dancing Script', cursive",
          fontSize: "2.5rem",
        }}
      >
        Welcome to Your Café Diary ☕
      </h2>

      {/* 📅 Month Grid */}
      <div className="container">
        <div className="row justify-content-center">
          {months.map((month, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              onClick={() => navigate(`/${month.name.toLowerCase()}`)}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card h-100 shadow animate__animated animate__zoomIn"
                style={{
                  background: "linear-gradient(145deg, #ffe3ec, #fce4ec)",
                  borderRadius: "20px",
                  border: "none",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="card-body d-flex flex-column justify-content-center align-items-center"
                  style={{ height: "120px" }}
                >
                  <div style={{ fontSize: "2rem" }}>{month.emoji}</div>
                  <h5
                    className="card-title mt-2"
                    style={{
                      color: "#6f42c1",
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "1.4rem",
                    }}
                  >
                    {month.name}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📌 Footer */}
      <p
        className="text-center mt-5"
        style={{
          color: "#999",
          fontSize: "0.95rem",
          fontStyle: "italic",
        }}
      >
        Click a month to view or add your café memories 💕
      </p>
    </div>
  );
}

export default Dashboard;


