import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function Contact({ selectedService }) {
  const { contactSection, contact, address, services } = business;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService?.title || (services.items[0]?.title || 'Plumbing Repair'),
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="site-section" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="section-container">
        <SectionHeading
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          description={contactSection.subtitle}
        />

        <div
          className="contact-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.25fr',
            gap: 'var(--space-48)',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Direct Contact Methods & Location */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
            {/* Direct Phone Card */}
            <div
              className="luxury-card"
              style={{
                padding: 'var(--space-24)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  display: 'block',
                  marginBottom: 'var(--space-8)',
                }}
              >
                Direct Telephone
              </span>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-12)',
                }}
              >
                {contact.phoneDisplay}
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-ink-muted)',
                  marginBottom: 'var(--space-16)',
                }}
              >
                Direct line for quotes, advice, and urgent plumbing visits in Bristol.
              </p>
              <Button
                as="a"
                href={contact.phoneHref}
                variant="primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{contactSection.actions.call}</span>
              </Button>
            </div>

            {/* WhatsApp Card */}
            {contact.whatsapp && (
              <div
                className="luxury-card"
                style={{
                  padding: 'var(--space-24)',
                  backgroundColor: 'var(--color-surface)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    display: 'block',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  Instant Messaging
                </span>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    color: 'var(--color-ink)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  WhatsApp Direct
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-ink-muted)',
                    marginBottom: 'var(--space-16)',
                  }}
                >
                  Fastest way to share photos of leaks, pipe damage, or boiler errors.
                </p>
                <Button
                  as="a"
                  href={contact.whatsappHref}
                  variant="secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>{contactSection.actions.whatsapp}</span>
                </Button>
              </div>
            )}

            {/* Address & Directions Card */}
            <div
              className="luxury-card"
              style={{
                padding: 'var(--space-24)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  display: 'block',
                  marginBottom: 'var(--space-8)',
                }}
              >
                Bristol Location
              </span>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {address.full}
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-ink-muted)',
                  marginBottom: 'var(--space-16)',
                }}
              >
                {contact.serviceAreaNote}
              </p>
              <Button
                as="a"
                href={contact.mapsUrl}
                variant="secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>{contactSection.actions.directions}</span>
              </Button>
            </div>
          </div>

          {/* Column 2: Styled Contact Form */}
          <div
            className="luxury-card"
            style={{
              padding: 'var(--space-32)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-ink)',
              }}
            >
              Request an Inspection or Quote
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-ink-muted)',
                marginBottom: 'var(--space-24)',
              }}
            >
              Submit your plumbing requirement below and we will get back to you promptly.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: 'var(--space-24)',
                  backgroundColor: 'var(--color-canvas)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-control)',
                  textAlign: 'center',
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ margin: '0 auto var(--space-12) auto' }}
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-8)' }}>Request Received</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-16)' }}>
                  {contactSection.formLabels.successMessage}
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      service: services.items[0]?.title || 'Plumbing Repair',
                      message: '',
                    });
                  }}
                >
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {contactSection.formLabels.name} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-control)',
                      backgroundColor: 'var(--color-canvas)',
                      color: 'var(--color-ink)',
                      minHeight: '48px',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {contactSection.formLabels.phone} *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07985 248298"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-control)',
                      backgroundColor: 'var(--color-canvas)',
                      color: 'var(--color-ink)',
                      minHeight: '48px',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {contactSection.formLabels.service}
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-control)',
                      backgroundColor: 'var(--color-canvas)',
                      color: 'var(--color-ink)',
                      minHeight: '48px',
                    }}
                  >
                    {services.items.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {contactSection.formLabels.message}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe the issue or work required (e.g. dripping tap, low water pressure, pipe leak)..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: '1rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-control)',
                      backgroundColor: 'var(--color-canvas)',
                      color: 'var(--color-ink)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <div style={{ marginTop: 'var(--space-8)' }}>
                  <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {contactSection.formLabels.submitButton}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
