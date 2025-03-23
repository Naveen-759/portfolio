// src/components/Contact.jsx
import { useState } from "react";
import dotenv from "dotenv";
// dotenv.config();
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_USER_ID;

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (validate()) {
      setIsSubmitting(true);

      // Use EmailJS to send the email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "naveenku759@gmail.com", // Your Gmail address
      };

      // Replace these with your actual EmailJS service ID, template ID, and user ID
      emailjs
        .send(
          service_id, // Service ID from EmailJS
          template_id, // Template ID from EmailJS
          templateParams,
          user_id // User ID from EmailJS
        )
        .then(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          setIsSubmitting(false);
          setSubmitError("Failed to send message. Please try again later.");
        });
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#f8fafc] p-9">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
          Get In Touch
        </h2>
        <p className="text-xl font-medium text-gray-600 mb-2">
          Have a question or want to work together? Fill out the form below and
          I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6 text-[#0f172a]">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#e0f2fe] p-3 rounded-full text-[#0284c7]">
                    <FiMail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0f172a]">
                      Email
                    </h4>
                    <p className="text-[#0369a1]">naveenku759@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#e0f2fe] p-3 rounded-full text-[#0284c7]">
                    <FiMapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0f172a]">
                      Location
                    </h4>
                    <p className="text-[#0369a1]">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#e0f2fe] p-3 rounded-full text-[#0284c7]">
                    <FiPhone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0f172a]">
                      Phone
                    </h4>
                    <p className="text-[#0369a1]">+91 96117 88431</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-[#0f172a]">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Naveen-759/"
                    className="bg-[#e0f2fe] p-3 rounded-full text-[#0284c7] hover:bg-[#bae6fd] transition-colors duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/naveen-kumar-102406229/"
                    className="bg-[#e0f2fe] p-3 rounded-full text-[#0284c7] hover:bg-[#bae6fd] transition-colors duration-300"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://leetcode.com/u/Naveen_Kumar_A_M/"
                    className="bg-[#e0f2fe] p-3 rounded-full text-[#0284c7] hover:bg-[#bae6fd] transition-colors duration-300"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                      alt="LeetCode Logo"
                      className="w-10 h-8"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p>
                      Your message has been sent successfully. I'll get back to
                      you soon!
                    </p>
                  </div>
                </div>
              ) : null}

              {submitError ? (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p>{submitError}</p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#0369a1] mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] outline-none transition-colors duration-300 ${
                        errors.name ? "border-red-500" : "border-[#cbd5e1]"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#0369a1] mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] outline-none transition-colors duration-300 ${
                        errors.email ? "border-red-500" : "border-[#cbd5e1]"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#0369a1] mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] outline-none transition-colors duration-300 ${
                      errors.subject ? "border-red-500" : "border-[#cbd5e1]"
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0369a1] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0ea5e9] focus:border-[#0ea5e9] outline-none transition-colors duration-300 ${
                      errors.message ? "border-red-500" : "border-[#cbd5e1]"
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
