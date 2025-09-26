// src/pages/MonthView.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "animate.css";

function MonthView() {
  const { month } = useParams();
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    cafe: "",
    review: "",
    rating: "⭐️⭐️⭐️⭐️",
    photo: null,
    photoPreview: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photo: files[0],
          photoPreview: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...formData,
      date: new Date().toLocaleDateString(),
    };
    setEntries([newEntry, ...entries]);
    setFormData({
      cafe: "",
      review: "",
      rating: "⭐️⭐️⭐️⭐️",
      photo: null,
      photoPreview: null,
    });
  };

  return (
    <div
      className="min-vh-100 p-4 animate__animated animate__fadeIn"
      style={{ backgroundColor: "#fff0f5", fontFamily: "'Poppins', sans-serif" }}
    >
      <h2
        className="text-center mb-4 animate__animated animate__fadeInDown"
        style={{ color: "#db5d9f", fontFamily: "'Dancing Script', cursive" }}
      >
        {month.charAt(0).toUpperCase() + month.slice(1)} Café Diary ☕
      </h2>

      <div className="container bg-white p-4 rounded shadow animate__animated animate__zoomIn" style={{ maxWidth: "600px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Café Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter café name"
              name="cafe"
              value={formData.cafe}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Review</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write your experience..."
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select className="form-select" name="rating" value={formData.rating} onChange={handleChange}>
              <option>⭐️</option>
              <option>⭐️⭐️</option>
              <option>⭐️⭐️⭐️</option>
              <option>⭐️⭐️⭐️⭐️</option>
              <option>⭐️⭐️⭐️⭐️⭐️</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Photo</label>
            <input
              type="file"
              className="form-control"
              name="photo"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          {formData.photoPreview && (
            <div className="text-center mb-3">
              <img
                src={formData.photoPreview}
                alt="Preview"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "200px", border: "8px solid #f8bbd0", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              />
              <p className="text-muted mt-2" style={{ fontStyle: "italic" }}>Polaroid Preview 📸</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            Save Entry
          </button>
        </form>
      </div>

      <div className="container mt-5">
        <h4 className="text-center mb-4 animate__animated animate__fadeInUp" style={{ color: "#6f42c1" }}>
          Your Café Visits in {month.charAt(0).toUpperCase() + month.slice(1)} 💖
        </h4>
        <div className="row">
          {entries.length === 0 && (
            <p className="text-center text-muted animate__animated animate__fadeIn">
              No entries yet. Add your first memory!
            </p>
          )}
          {entries.map((entry, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div
                className="p-3 shadow-sm animate__animated animate__zoomIn"
                style={{
                  backgroundColor: "#ffe4ec",
                  borderRadius: "20px",
                  transform: "rotate(-1deg)",
                  border: "4px solid #f8bbd0",
                }}
              >
                <h5 className="text-primary">{entry.cafe}</h5>
                <p>{entry.review}</p>
                <p>{entry.rating}</p>
                <small className="text-muted">Date: {entry.date}</small>
                {entry.photoPreview && (
                  <div className="mt-2">
                    <img src={entry.photoPreview} alt="Cafe" className="img-fluid rounded" style={{ borderRadius: "12px" }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonthView;
