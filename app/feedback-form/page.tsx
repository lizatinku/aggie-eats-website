"use client"; // Ensures state updates work in Next.js

import React, { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#002855] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-[#B3A369] mb-6">📢 We Value Your Feedback!</h1>
      <p className="text-lg text-gray-300 text-center mb-6 max-w-2xl">
        Let us know how we're doing! Your feedback helps us improve Aggie Eats.
      </p>

      <div className="bg-[#0A1733] border border-[#B3A369] rounded-xl shadow-lg p-6 w-full max-w-lg">
        {submitted ? (
          <p className="text-center text-[#B3A369] text-xl font-semibold">
            🎉 Thank you for your feedback!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Field (Optional) */}
            <label className="text-[#B3A369] font-semibold">Name (Optional):</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 rounded-lg bg-[#002855] text-white border border-[#B3A369] focus:ring-2 focus:ring-[#B3A369]"
            />

            {/* Rating Dropdown */}
            <label className="text-[#B3A369] font-semibold">Rate Your Experience:</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg bg-[#002855] text-white border border-[#B3A369] focus:ring-2 focus:ring-[#B3A369]"
            >
              <option value="">Select a rating</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️ - Amazing!</option>
              <option value="4">⭐️⭐️⭐️⭐️ - Great</option>
              <option value="3">⭐️⭐️⭐️ - Good</option>
              <option value="2">⭐️⭐️ - Okay</option>
              <option value="1">⭐️ - Needs Improvement</option>
            </select>

            {/* Feedback Textarea */}
            <label className="text-[#B3A369] font-semibold">Your Feedback:</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Tell us your thoughts..."
              required
              className="w-full p-2 h-24 rounded-lg bg-[#002855] text-white border border-[#B3A369] focus:ring-2 focus:ring-[#B3A369]"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#B3A369] text-[#002855] px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-[#C4A76B] transition-transform transform hover:scale-105"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
