import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  // Contact information array
  const contactInfo = [
  {
    icon: User,
    title: "Executive Director",
    content: "DANIAL MORRIS PENN",
  },
  {
    icon: MapPin,
    title: "Our Location",
    content: "21st Avenue Southwest 3300, Olympia, Washington, 98512, United States of America",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+1 2522633938",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "hendersonbrooklynmaj509@hotmail.com",
  },
];

  // Services array
  const services = [
    "Social Media Advertising",
    "Google Ads Management",
    "YouTube Advertising",
    "App Store Optimization (ASO)",
    "Search Engine Optimization (SEO)",
    "TikTok Advertising",
  ];

  // Budget ranges array
  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "Over $50,000",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the specific field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setStatus({ message: "", type: "" }); // Reset status on new submission

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus({ message: "Please fix the errors below.", type: "error" });
      return; // Stop the submission
    }

    setLoading(true);
    setErrors({}); // Clear errors on successful validation

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setStatus({
        message: "Your message has been sent. Thank you!",
        type: "success",
      });
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const ContactInfo = ({ icon: Icon, title, content }) => (
    <div className="flex items-start space-x-4 mb-6">
      <div className="bg-indigo-100 p-2 rounded-full">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-indigo-100">{title}</h3>
        <p className="text-sm text-indigo-200">{content}</p>
      </div>
    </div>
  );

  const InputField = ({ name, type = "text", placeholder, error }) => (
    <div>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 bg-white border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-indigo-500"
        } focus:border-transparent transition-all duration-300`}
        required
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );

  const SelectField = ({ name, placeholder, options, error }) => (
    <div>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-4 py-2 bg-white border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-indigo-500"
        } focus:border-transparent transition-all duration-300`}
        required
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Info */}
            <div className="w-full md:w-2/5 p-8 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-indigo-100">
                We're here to help and answer any questions you might have.
                Don't hesitate to reach out.
              </p>
              {contactInfo.map((info, index) => (
                <ContactInfo
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  content={info.content}
                />
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full md:w-3/5 p-8" noValidate>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    name="name"
                    placeholder="Your Name*"
                    error={errors.name}
                  />
                  <InputField
                    name="email"
                    type="email"
                    placeholder="Your Email*"
                    error={errors.email}
                  />
                </div>
                <InputField name="company" placeholder="Company Name" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    name="service"
                    placeholder="Select Service*"
                    options={services}
                    error={errors.service}
                  />
                  <SelectField
                    name="budget"
                    placeholder="Budget Range"
                    options={budgetRanges}
                  />
                </div>
                <InputField
                  name="subject"
                  placeholder="Project Title*"
                  error={errors.subject}
                />
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Project Details*"
                    className={`w-full px-4 py-2 bg-white border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "focus:ring-red-500"
                        : "focus:ring-indigo-500"
                    } focus:border-transparent transition-all duration-300`}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  {status.message && (
                    <p
                      className={`mb-4 text-sm font-semibold text-center ${
                        status.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Find Us On Map
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.5875669489087!2d-122.94353072344765!3d47.02974087114281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549175b452d3b647%3A0x732aa77ea1c02a0!2s3300%2021st%20Ave%20SW%2C%20Olympia%2C%20WA%2098512%2C%20USA!5e1!3m2!1sen!2sbd!4v1753857150859!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;