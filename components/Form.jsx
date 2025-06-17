"use client"
import React, { useState } from "react";

const Form = () => {
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    org: "",
    phone: "",
  });

   // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null })); // Clear error for edited field
  };

    // Validate and sanitize form data
  const validateAndSanitize = () => {
    const newErrors = {};

    // Validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be 100 characters or less";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be 1000 characters or less";
    }

    // Optional fields: only validate if provided
    if (formData.org && formData.org.length > 200) {
      newErrors.org = "Organization must be 200 characters or less";
    }

    if (formData.phone && !/^\+?[\d\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }

    setErrors(newErrors);
    return { formData, isValid: Object.keys(newErrors).length === 0 };
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

    const { sanitizedData, isValid } = validateAndSanitize();

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: result.Message });
        // Reset form
        setFormData({
          email: "",
          message: "",
          name: "",
          org: "",
          phone: "",
        });
      } else {
        setStatus({ type: "error", message: result.Message || "Failed to send email" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex-1 py-5 px-3 rounded-md lg:mt-0 lg:w-[950px] w-[90%] mt-5">
      <h1 className="text-white text-[45px] text-center py-5 px-3">
        Contact Us
      </h1>
      {status && (
        <div
          className={`text-center py-2 px-3 rounded-md mb-4 max-w-[600px] mr-auto ml-auto ${
            status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="head-form text-[20px] flex flex-col gap-1 ml-auto mr-auto">
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your Name"
          />
          {errors.name && <p className="text-red-500 text-[14px] mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="org"
            value={formData.org}
            placeholder="Enter your Organization"
          />
          {errors.org && <p className="text-red-500 text-[14px] mt-1">{errors.org}</p>}
        </div>
        <div>
          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Enter your Phone Number"
          />
          {errors.phone && <p className="text-red-500 text-[14px] mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your Email"
          />
          {errors.email && <p className="text-red-500 text-[14px] mt-1">{errors.email}</p>}
        </div>
        <div>
          <textarea
            onChange={handleChange}
            name="message"
            value={formData.message}
            placeholder="Enter your message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-[14px] mt-1">{errors.message}</p>}
        </div>
        <button
          className="mt-5 bg-white text-blue-500 py-3"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
