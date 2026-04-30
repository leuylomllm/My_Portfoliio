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
        padding: "80px 48px",
        fontFamily: "'DM Sans', sans-serif",
      position: "relative",
    }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

      /* Subtle grid bg */
      #projects::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(#1E293B0D 1px, transparent 1px),
          linear-gradient(90deg, #1E293B0D 1px, transparent 1px);
        background-size: 60px 60px;
        pointer-events: none;
        z-index: 0;
      }

      .proj-section-label {
        display: flex;
        align-items: center;
        gap: 14px;
        font-family: JetBrains Mono, Fira Code, monospace;
        font-size: 14px;
        letter-spacing: 0.2em;
        color: #22D3EE;
        text-transform: uppercase;
        font-weight: 400;
        margin-bottom: 24px;
        position: relative;
        z-index: 1;
      }
      .proj-section-label::after {
        content: '';
        flex: 1;
        max-width: 100%;
        height: 1px;
        background: linear-gradient(90deg, #22D3EE44, transparent);
      }

      .proj-headline {
        font-family: Inter, system-ui, sans-serif;
        font-size: clamp(36px, 48px, 56px);
        font-weight: 900;
        color: #F8FAFC;
        letter-spacing: -0.02em;
        line-height: 1.05;
        margin: 0 0 16px;
        position: relative;
        z-index: 1;
      }
      .proj-headline .accent {
        background: linear-gradient(135deg, #22D3EE 0%, #6366F1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .proj-sub {
        font-family: Inter, system-ui, sans-serif;
        font-size: 16px;
        color: #ffffff66;
        line-height: 1.8;
        max-width: 480px;
        margin: 0 0 56px;
        position: relative;
        z-index: 1;
      }

      .proj-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        position: relative;
        z-index: 1;
      }

      .proj-card {
        background: radial-gradient(60% 40% at 50% 0%, rgba(0, 212, 255, 0.082), transparent);
        border: 1px solid #1A2235;
        border-radius: 16px;
        padding: 32px 28px;
        display: flex;
        flex-direction: column;
        gap: 0;
          
        position: relative;
        overflow: hidden;
        transition: border-color 0.3s ease,  transform 0.25s ease, box-shadow 0.3s ease;
        cursor: default;
      }
      .proj-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at 20% 10%, #22D3EE07, transparent 65%);
        opacity: 0;
        transition: opacity 0.35s ease;
        pointer-events: none;
      }
      .proj-card:hover {
        border-color: #22D3EE2A;
        transform: translateY(-3px);
        box-shadow: 0 16px 48px #00000055;
      }
      .proj-card:hover::before { opacity: 1; }

      /* Featured card gets a subtle top accent */
      .proj-card.featured {
        border-top: 2px solid #22D3EE33;
      }

      .proj-card-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        
      }

      .proj-num {
        font-family: JetBrains Mono, Fira Code, monospace;
        font-size: 12px;
        color: rgb(0, 212, 255);
        font-weight: 400;
        letter-spacing: 0.08em;
        opacity: 0.8;
      }


      .proj-icon-group {
        display: flex;
        gap: 8px;
      }
      .proj-icon-btn {
        width: 34px;
        height: 34px;
        background: #131C2E;
        border: 1px solid #1E2D45;
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #64748B;
        text-decoration: none;
        transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        cursor: pointer;
      }
      .proj-icon-btn:hover {
        border-color: #22D3EE44;
        color: #22D3EE;
        background: #162036;
      }

      .proj-title {
        font-family: Inter, system-ui, sans-serif;
        font-size: clamp(17px, 20px, 22px);
        font-weight: 700;
        color: #FFFFFF;
        line-height: 1.2;
        margin: 0 0 12px;
        letter-spacing: -0.015em;
      }

      .proj-desc {
        font-family: Inter, system-ui, sans-serif;

        font-size: 14px;
        color: #ffffff66;
        line-height: 1.8;
        font-weight: 400;
        margin: 0 0 20px;
        flex: 1;
      }

      .proj-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-top: auto;
      }
      .proj-tag {
        font-family: JetBrains Mono, Fira Code, monospace;
        font-size: 12px;
        color: #ffffff66;
        background: #111827;
        border: 1px solid #1E293B;
        border-radius: 6px;
        padding: 4px 10px;
        font-weight: 400;
        letter-spacing: 0.02em;
        transition: border-color 0.2s ease, color 0.2s ease;
      }
      .proj-card:hover .proj-tag {
        border-color: #1E3045;
        color: #7A90A8;
      }

      @media (max-width: 800px) {
        .proj-grid { grid-template-columns: 1fr !important; }
        #projects { padding: 60px 24px !important; }
      }
    `}</style>

    <div style={{ maxWidth: 1140, margin: "0 auto" }}>
      {/* Section label */}
      <motion.div
        className="proj-section-label"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        05. &nbsp;Contact
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="proj-headline"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        Let's <span className="accent">Contact</span>
      </motion.h2>

      <motion.p
        className="proj-sub"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Have a project in mind? Let's talk. I'm always open to discussing new
        opportunities.
      </motion.p>

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
