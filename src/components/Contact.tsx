import { motion } from "framer-motion";
import { Github, Mail, Send, MapPin, Phone, Facebook } from "lucide-react";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"" | "sending" | "success">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(""), 3500);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactItems = [
    {
      icon: <Mail size={17} />,
      label: "Email",
      value: "leuylom022@gmail.com",
      href: "mailto:leuylom022@gmail.com",
    },
    {
      icon: <Phone size={17} />,
      label: "Phone",
      value: "097 58 94 543",
      href: "tel:+85597589543",
    },
    {
      icon: <MapPin size={17} />,
      label: "Location",
      value: "Siem Reap, Cambodia",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "#0A0A0F",
        padding: "100px 24px",
        fontFamily: "'DM Mono', 'Fira Code', monospace",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', 'Fira Code', monospace",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#38BDF8",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 800,
              color: "#F1F5F9",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Get In Touch
          </h2>
          <div className="divider-line" />
          <p
            style={{
              fontFamily: "'DM Mono', 'Fira Code', monospace",
              color: "#475569",
              fontSize: 15,
              maxWidth: 400,
              margin: "18px auto 0",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="contact-grid"
          style={{ display: "flex", gap: 40, alignItems: "flex-start" }}
        >
          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: "0 0 320px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#F1F5F9",
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                }}
              >
                Let's Talk
              </h3>
              <p
                style={{
                  fontFamily: "'DM Mono', 'Fira Code', monospace",
                  fontSize: 14,
                  color: "#475569",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                I'm always open to new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                >
                  {item.href ? (
                    <a href={item.href} className="contact-info-item">
                      <div className="contact-info-icon">{item.icon}</div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'DM Mono', 'Fira Code', monospace",
                            fontSize: 11,
                            color: "#334155",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            margin: "0 0 2px",
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "'DM Mono', 'Fira Code', monospace",
                            fontSize: 14,
                            color: "#CBD5E1",
                            fontWeight: 400,
                            margin: 0,
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="contact-info-item"
                      style={{ cursor: "default" }}
                    >
                      <div className="contact-info-icon">{item.icon}</div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'DM Mono', 'Fira Code', monospace",
                            fontSize: 11,
                            color: "#334155",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            margin: "0 0 2px",
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "'DM Mono', 'Fira Code', monospace",
                            fontSize: 14,
                            color: "#CBD5E1",
                            fontWeight: 400,
                            margin: 0,
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p
                style={{
                  fontFamily: "'DM Mono', 'Fira Code', monospace",
                  fontSize: 11,
                  color: "#334155",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Find Me Online
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <a
                  href="https://github.com/leuy-llm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.facebook.com/leuy.llm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            {/* Availability card */}
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            style={{ flex: 1, minWidth: 0 }}
          >
            <div
              style={{
                background: "#111118",
                border: "1px solid #1E1E2E",
                borderRadius: 16,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* Name + Email row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <div className="contact-field-wrap">
                  <label className="contact-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Lom Leuy"
                    className="contact-input"
                  />
                </div>
                <div className="contact-field-wrap">
                  <label className="contact-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="contact-field-wrap">
                <label className="contact-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="contact-input"
                />
              </div>

              {/* Message */}
              <div className="contact-field-wrap">
                <label className="contact-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  className="contact-input"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={formStatus === "sending"}
                className={`contact-submit ${formStatus}`}
              >
                {formStatus === "sending" ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ animation: "spin 0.8s linear infinite" }}
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        stroke="#475569"
                        strokeWidth="2"
                        strokeDasharray="28"
                        strokeDashoffset="10"
                      />
                    </svg>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    Sending...
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8l4 4 6-6"
                        stroke="#4ADE80"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Message sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </motion.button>

              <p
                style={{
                  fontFamily: "'DM Mono', 'Fira Code', monospace",
                  fontSize: 12,
                  color: "#2A2A3E",
                  textAlign: "center",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                I typically reply within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
