'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import styles from './Contact.module.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00f0ff', '#8b5cf6', '#10b981'],
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>[ 05 // GET IN TOUCH ]</span>
          <h2 className={styles.sectionTitle}>INITIATE CONTACT</h2>
        </div>

        <div className={styles.grid}>
          {/* Contact Info Column */}
          <div className={styles.infoCol}>
            <p className={styles.leadText}>
              Interested in collaborating, hiring for full-stack/frontend roles, or discussing web architecture? Reach out anytime!
            </p>

            <div className={styles.contactCards}>
              {/* Email Widget */}
              <div className={styles.contactItem}>
                <div className={styles.itemLeft}>
                  <Mail size={20} className={styles.itemIcon} />
                  <div>
                    <span className={styles.itemLabel}>EMAIL ADDRESS</span>
                    <a href="mailto:priyanshuverma952@gmail.com" className={styles.itemValue}>
                      priyanshuverma952@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('priyanshuverma952@gmail.com', 'email')}
                  className={styles.copyBtn}
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Widget */}
              <div className={styles.contactItem}>
                <div className={styles.itemLeft}>
                  <Phone size={20} className={styles.itemIcon} />
                  <div>
                    <span className={styles.itemLabel}>PHONE NUMBER</span>
                    <a href="tel:+919354332265" className={styles.itemValue}>
                      +91 93543 32265
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+919354332265', 'phone')}
                  className={styles.copyBtn}
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Widget */}
              <div className={styles.contactItem}>
                <div className={styles.itemLeft}>
                  <MapPin size={20} className={styles.itemIcon} />
                  <div>
                    <span className={styles.itemLabel}>LOCATION</span>
                    <span className={styles.itemValue}>Delhi, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialRow}>
              <a
                href="https://github.com/priyanshuverma2003"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <Github size={18} />
                <span>GITHUB</span>
              </a>
              <a
                href="https://linkedin.com/in/priyanshu-verma"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <Linkedin size={18} />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>SEND A MESSAGE</h3>
                <span className={styles.formIndex}>[ DIRECT DISPATCH ]</span>
              </div>

              {formSubmitted ? (
                <div className={styles.successBox}>
                  <Sparkles size={24} className={styles.successIcon} />
                  <h4>MESSAGE DISPATCHED!</h4>
                  <p>Thank you for reaching out, Priyanshu will respond shortly.</p>
                </div>
              ) : (
                <>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>DISPATCH MESSAGE</span>
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Footer info */}
        <div className={styles.footerRow}>
          <span>© 2026 PRIYANSHU VERMA • DESIGNED WITH VANILLA CSS & NEXT.JS</span>
          <span className={styles.domainBadge}>DOMAIN: PVTECH.PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
}
